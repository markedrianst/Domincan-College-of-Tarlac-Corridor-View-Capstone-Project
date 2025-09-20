class PanoramaViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentPanoramaId = null;

        // Cache
        this.textureCache = {};
        this.textureLoader = new THREE.TextureLoader();

        // Zoom
        this.zoomLevel = 1.0;
        this.targetZoom = 1.0;
        this.minZoom = 1.0;
        this.maxZoom = 2.5;
        this.zoomSpeed = 0.05;

        // Camera & scene
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.geometry = null;
        this.material = null;
        this.mesh = null;

        // Drag interaction
        this.isUserInteracting = false;
        this.lon = 0;
        this.lat = 0;
        this.targetLon = 0;
        this.targetLat = 0;

        this.velocityLon = 0;
        this.velocityLat = 0;

        // Arrow throttling
        this.lastArrowUpdate = 0;
        this.arrowUpdateInterval = 100;

        this.init();
        this.setupEventListeners();
    }

    init() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
        this.scene = new THREE.Scene();

        this.geometry = new THREE.SphereGeometry(500, 60, 40);
        this.geometry.scale(-1, 1, 1);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        this.addZoomControls();
        this.animate();
    }

    // --- Smooth zoom ---
    zoom(delta) {
        this.targetZoom += delta * this.zoomSpeed;
        this.targetZoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.targetZoom));
    }

    resetZoom() {
        this.targetZoom = 1.0;
    }

    // --- Controls ---
    addZoomControls() {
    const zoomControls = document.createElement('div');
    zoomControls.className = 'zoom-controls';
    zoomControls.style.position = 'absolute';
    zoomControls.style.bottom = '220px';
    zoomControls.style.right = '20px';
    zoomControls.style.zIndex = '9999';
    zoomControls.style.display = 'flex';
    zoomControls.style.flexDirection = 'column'; // 👈 stack vertically
    zoomControls.style.alignItems = 'center';    // 👈 center align
    zoomControls.style.gap = '8px';              // 👈 spacing between buttons

    const makeBtn = (label, title, onClick) => {
        const btn = document.createElement('button');
        btn.innerHTML = label;
        if (title) btn.title = title;
        Object.assign(btn.style, {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '2px solid #fff',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#fff',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        });
        btn.addEventListener('click', onClick);
        return btn;
    };

    zoomControls.appendChild(makeBtn('+', 'Zoom In', () => this.zoom(1)));
    zoomControls.appendChild(makeBtn('R', 'Reset Zoom', () => this.resetZoom()));
    zoomControls.appendChild(makeBtn('-', 'Zoom Out', () => this.zoom(-1)));
    this.container.appendChild(zoomControls);
}

    // --- Events ---
    setupEventListeners() {
        window.addEventListener('resize', this.onWindowResize.bind(this));

        const start = (event) => {
            this.isUserInteracting = true;
            const e = event.touches ? event.touches[0] : event;
            this.startX = e.clientX;
            this.startY = e.clientY;
            this.startLon = this.targetLon;
            this.startLat = this.targetLat;
        };

        const move = (event) => {
            if (!this.isUserInteracting) return;
            const e = event.touches ? event.touches[0] : event;
            const x = e.clientX;
            const y = e.clientY;

            const deltaX = this.startX - x;
            const deltaY = y - this.startY;

            // 🔹 Smoother (smaller factor)
            this.targetLon = this.startLon + deltaX * 0.2;
            this.targetLat = this.startLat + deltaY * 0.2;
        };

        const end = () => { this.isUserInteracting = false; };

        this.container.addEventListener('mousedown', start);
        this.container.addEventListener('mousemove', move);
        this.container.addEventListener('mouseup', end);

        this.container.addEventListener('touchstart', start, { passive: false });
        this.container.addEventListener('touchmove', move, { passive: false });
        this.container.addEventListener('touchend', end);

        this.container.addEventListener('wheel', (event) => {
            event.preventDefault();
            const delta = event.deltaY > 0 ? -1 : 1;
            this.zoom(delta);
        }, { passive: false });
    }

    // --- Resize ---
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // --- Loop ---
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.update();
    }

    update() {
        // Smooth zoom
        this.zoomLevel += (this.targetZoom - this.zoomLevel) * 0.1;
        this.camera.fov = 75 / this.zoomLevel;
        this.camera.updateProjectionMatrix();

        // 🔹 Smooth drag interpolation
        this.lon += (this.targetLon - this.lon) * 0.1;
        this.lat += (this.targetLat - this.lat) * 0.1;

        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = THREE.MathUtils.degToRad(90 - this.lat);
        this.theta = THREE.MathUtils.degToRad(this.lon);

        const x = 500 * Math.sin(this.phi) * Math.cos(this.theta);
        const y = 500 * Math.cos(this.phi);
        const z = 500 * Math.sin(this.phi) * Math.sin(this.theta);

        this.camera.lookAt(x, y, z);
        this.renderer.render(this.scene, this.camera);

        // Arrow update
        const now = performance.now();
        if (window.navigationManager && now - this.lastArrowUpdate > this.arrowUpdateInterval) {
            window.navigationManager.updateArrowPositions(this.camera);
            this.lastArrowUpdate = now;
        }
    }

    // --- Panorama load ---
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
