/**
 * Panorama Viewer Module
 * Optimized for 400+ panoramas with mobile-friendly zoom controls
 */

class PanoramaViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentPanoramaId = null;

        // Cache for textures
        this.textureCache = {};
        this.textureLoader = new THREE.TextureLoader();

        // Zoom properties
        this.zoomLevel = 1.0;
        this.minZoom = 0.5;
        this.maxZoom = 2.5;
        this.zoomSpeed = 0.1;

        // Three.js components
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.geometry = null;
        this.material = null;
        this.mesh = null;

        // Interaction
        this.isUserInteracting = false;
        this.lon = 0;
        this.lat = 0;
        this.phi = 0;
        this.theta = 0;

        // Arrow update throttling
        this.lastArrowUpdate = 0;
        this.arrowUpdateInterval = 100; // ms

        this.init();
        this.setupEventListeners();
    }

    init() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
        this.scene = new THREE.Scene();

        // Lower resolution geometry for performance
        this.geometry = new THREE.SphereGeometry(500, 40, 30);
        this.geometry.scale(-1, 1, 1);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        this.addZoomControls();
        this.animate();
    }

    zoom(delta) {
        this.zoomLevel += delta * this.zoomSpeed;
        this.zoomLevel = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoomLevel));
        this.camera.fov = 75 / this.zoomLevel;
        this.camera.updateProjectionMatrix();
    }

    resetZoom() {
        this.zoomLevel = 1.0;
        this.camera.fov = 75;
        this.camera.updateProjectionMatrix();
    }

    addZoomControls() {
        const zoomControls = document.createElement('div');
        zoomControls.className = 'zoom-controls';
        zoomControls.style.position = 'absolute';
        zoomControls.style.bottom = '100px';
        zoomControls.style.right = '20px';
        zoomControls.style.zIndex = '9999'; // Always above panorama

        const makeBtn = (label, title, onClick) => {
            const btn = document.createElement('button');
            btn.innerHTML = label;
            if (title) btn.title = title;
            Object.assign(btn.style, {
                width: '25px', height: '25px', margin: '5px',
                borderRadius: '50%', border: '2px solid #fff',
                backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff',
                fontSize: '20px', cursor: 'pointer', touchAction: 'none'
            });

            // Mouse + touch support
            btn.addEventListener('click', onClick);
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                onClick();
            }, { passive: false });

            return btn;
        };

        zoomControls.appendChild(makeBtn('+', null, () => this.zoom(1)));
        zoomControls.appendChild(makeBtn('R', 'Reset Zoom', () => this.resetZoom()));
        zoomControls.appendChild(makeBtn('-', null, () => this.zoom(-1)));

        this.container.appendChild(zoomControls);
    }

    setupEventListeners() {
        window.addEventListener('resize', this.onWindowResize.bind(this));
        this.container.addEventListener('mousedown', this.onPointerDown.bind(this));
        this.container.addEventListener('mousemove', this.onPointerMove.bind(this));
        this.container.addEventListener('mouseup', this.onPointerUp.bind(this));
        this.container.addEventListener('touchstart', this.onPointerDown.bind(this));
        this.container.addEventListener('touchmove', this.onPointerMove.bind(this));
        this.container.addEventListener('touchend', this.onPointerUp.bind(this));
        this.container.addEventListener('wheel', (event) => {
            event.preventDefault();
            const delta = event.deltaY > 0 ? -1 : 1;
            this.zoom(delta * 0.1);
        });
        this.container.addEventListener('contextmenu', (e) => e.preventDefault());
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onPointerDown(event) {
        this.isUserInteracting = true;
        this.startX = event.clientX || (event.touches && event.touches[0].clientX);
        this.startY = event.clientY || (event.touches && event.touches[0].clientY);
        this.startLon = this.lon;
        this.startLat = this.lat;
    }

    onPointerMove(event) {
        if (!this.isUserInteracting) return;
        const x = event.clientX || (event.touches && event.touches[0].clientX);
        const y = event.clientY || (event.touches && event.touches[0].clientY);
        this.lon = (this.startX - x) * 0.1 + this.startLon;
        this.lat = (y - this.startY) * 0.1 + this.startLat;
        this.lat = Math.max(-85, Math.min(85, this.lat));
    }

    onPointerUp() {
        this.isUserInteracting = false;
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.update();
    }

    update() {
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = THREE.MathUtils.degToRad(90 - this.lat);
        this.theta = THREE.MathUtils.degToRad(this.lon);

        const x = 500 * Math.sin(this.phi) * Math.cos(this.theta);
        const y = 500 * Math.cos(this.phi);
        const z = 500 * Math.sin(this.phi) * Math.sin(this.theta);

        this.camera.lookAt(x, y, z);
        this.renderer.render(this.scene, this.camera);

        // Throttle arrow updates
        const now = performance.now();
        if (window.navigationManager && now - this.lastArrowUpdate > this.arrowUpdateInterval) {
            window.navigationManager.updateArrowPositions(this.camera);
            this.lastArrowUpdate = now;
        }
    }

    loadPanorama(panoramaId) {
        const panorama = getPanoramaById(panoramaId);
        if (!panorama) return;

        document.getElementById('location-name').textContent = panorama.name;
        document.getElementById('location-description').textContent = panorama.description;

        if (this.textureCache[panorama.imageUrl]) {
            this.applyTexture(this.textureCache[panorama.imageUrl], panoramaId);
        } else {
            this.textureLoader.load(panorama.imageUrl, (texture) => {
                this.textureCache[panorama.imageUrl] = texture;
                this.applyTexture(texture, panoramaId);
            });
        }
    }

    applyTexture(texture, panoramaId) {
        if (!this.mesh) {
            this.material = new THREE.MeshBasicMaterial({ map: texture });
            this.mesh = new THREE.Mesh(this.geometry, this.material);
            this.scene.add(this.mesh);
        } else {
            if (this.material.map) this.material.map.dispose();
            this.material.map = texture;
            this.material.needsUpdate = true;
        }

        this.currentPanoramaId = panoramaId;
        if (window.navigationManager) {
            window.navigationManager.updateConnections(panoramaId);
        }
    }
}

window.panoramaViewer = null;
