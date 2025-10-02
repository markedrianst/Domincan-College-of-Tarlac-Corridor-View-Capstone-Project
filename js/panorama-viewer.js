/**
 * Panorama Viewer Module (Optimized)
 * Faster corridor street-view loading with preview + HD + preloading
 */

class PanoramaViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentPanoramaId = null;
        this.isLoading = false;
        this.loadingScreen = document.getElementById('loading-screen');
        
        // Zoom properties
        this.zoomLevel = 1.0;
        this.minZoom = 0.7;
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
        this.onPointerDownMouseX = 0;
        this.onPointerDownMouseY = 0;
        this.lon = 0;
        this.onPointerDownLon = 0;
        this.lat = 0;
        this.onPointerDownLat = 0;
        this.phi = 0;
        this.theta = 0;
        
        // Initialize viewer
        this.init();
        this.setupEventListeners();
    }
    
    init() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
        this.camera.position.z = 0.01;
        
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
    
    zoom(delta) {
        this.zoomLevel += delta * this.zoomSpeed;
        this.zoomLevel = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoomLevel));
        this.camera.fov = 75 / this.zoomLevel;
        this.camera.updateProjectionMatrix();
    }
    
    addZoomControls() {
        if (/Android|iPhone|iPad/i.test(navigator.userAgent)) return;

        const zoomControls = document.createElement('div');
        zoomControls.className = 'zoom-controls';
        zoomControls.style.cssText = "position:absolute;bottom:200px;right:20px;z-index:100";

        const makeBtn = (txt, click) => {
            const b = document.createElement('button');
            b.innerHTML = txt;
            b.style.cssText = "width:40px;height:40px;font-size:20px;margin:5px;cursor:pointer;border-radius:50%;border:2px solid #fff;background-color:rgba(0,0,0,0.5);color:#fff;";
            b.addEventListener('click', click);
            return b;
        };

        zoomControls.appendChild(makeBtn("+", () => this.zoom(1)));
        zoomControls.appendChild(makeBtn("R", () => this.resetZoom()));
        zoomControls.appendChild(makeBtn("-", () => this.zoom(-1)));

        this.container.appendChild(zoomControls);
    }

    resetZoom() {
        this.zoomLevel = 1.0;
        this.camera.fov = 75;
        this.camera.updateProjectionMatrix();
    }
    
    setupEventListeners() {
        window.addEventListener('resize', this.onWindowResize.bind(this));
        
        this.container.addEventListener('mousedown', this.onPointerDown.bind(this));
        this.container.addEventListener('mousemove', this.onPointerMove.bind(this));
        this.container.addEventListener('mouseup', this.onPointerUp.bind(this));
        
        this.container.addEventListener('touchstart', this.onPointerDown.bind(this));
        this.container.addEventListener('touchmove', this.onPointerMove.bind(this));
        this.container.addEventListener('touchend', this.onPointerUp.bind(this));
        
        this.container.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.zoom(e.deltaY > 0 ? -0.1 : 0.1);
        });
        
        this.container.addEventListener('contextmenu', (e) => e.preventDefault());
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    onPointerDown(e) {
        e.preventDefault();
        if (e.touches && e.touches.length === 2) {
            this.initialPinchDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            return;
        }
        this.isUserInteracting = true;
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        this.onPointerDownMouseX = clientX;
        this.onPointerDownMouseY = clientY;
        this.onPointerDownLon = this.lon;
        this.onPointerDownLat = this.lat;
    }
    
    onPointerMove(e) {
        if (e.touches && e.touches.length === 2) {
            const currentPinchDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            if (this.initialPinchDistance) {
                const delta = (currentPinchDistance - this.initialPinchDistance) * 0.01;
                this.zoom(delta);
                this.initialPinchDistance = currentPinchDistance;
            }
            return;
        }
        if (!this.isUserInteracting) return;
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        this.lon = (this.onPointerDownMouseX - clientX) * 0.2 + this.onPointerDownLon;
        this.lat = (clientY - this.onPointerDownMouseY) * 0.2 + this.onPointerDownLat;
        this.lat = Math.max(-85, Math.min(85, this.lat));
    }
    
    onPointerUp() { this.isUserInteracting = false; }
    
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
        
        if (window.navigationManager) {
            window.navigationManager.updateArrowPositions(this.camera);
        }
    }

    /**
     * Load panorama (preview + HD parallel, adaptive quality)
     */
    loadPanorama(panoramaId) {
        const panorama = getPanoramaById(panoramaId);
        if (!panorama) {
            console.error(`Panorama ${panoramaId} not found`);
            return;
        }

        this.currentPanoramaId = panoramaId;
        document.getElementById('location-name').textContent = panorama.name;
        document.getElementById('location-description').textContent = panorama.description;

        const textureLoader = new THREE.TextureLoader();

        // Detect device → load lower res on mobile
        const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
        const hdUrl = isMobile && panorama.imageUrlMobile ? panorama.imageUrlMobile : panorama.imageUrl;

        if (!this.mesh && this.loadingScreen) this.loadingScreen.style.display = "block";

        // Preview first (if exists)
        if (panorama.previewUrl) {
            textureLoader.load(panorama.previewUrl, (preview) => {
                this.applyPanoramaTexture(preview, panoramaId);
            });
        }

        // HD in parallel
        textureLoader.load(
            hdUrl,
            (hd) => {
                panorama._preloadedTexture = hd;
                this.applyPanoramaTexture(hd, panoramaId);
                if (this.loadingScreen) this.loadingScreen.style.display = "none";
            },
            undefined,
            (err) => {
                console.error("HD load error:", err);
                if (this.loadingScreen) this.loadingScreen.style.display = "none";
            }
        );

        // Preload up to 3 neighbors
        if (panorama.connections) {
            panorama.connections.slice(0, 3).forEach((id) => this.preloadPanorama(id));
        }
    }

    applyPanoramaTexture(texture, panoramaId) {
        const newMaterial = new THREE.MeshBasicMaterial({ map: texture });
        const newMesh = new THREE.Mesh(this.geometry, newMaterial);

        if (this.mesh) {
            this.scene.add(newMesh);
            this.fadeTransition(this.mesh, newMesh, () => {
                this.disposeMesh(this.mesh);
                this.mesh = newMesh;
                this.material = newMaterial;

                if (window.navigationManager) {
                    window.navigationManager.updateConnections(panoramaId);
                }
                window.dispatchEvent(new CustomEvent('panoramaLoaded', { detail: { id: panoramaId } }));
            });
        } else {
            this.mesh = newMesh;
            this.material = newMaterial;
            this.scene.add(this.mesh);
            if (window.navigationManager) {
                window.navigationManager.updateConnections(panoramaId);
            }
        }
    }

    preloadPanorama(id) {
        const pano = getPanoramaById(id);
        if (!pano || pano._preloadedTexture) return;
        const loader = new THREE.TextureLoader();
        loader.load(pano.imageUrl, (t) => pano._preloadedTexture = t);
    }

    fadeTransition(oldMesh, newMesh, onComplete) {
        oldMesh.material.transparent = true;
        newMesh.material.transparent = true;
        newMesh.material.opacity = 0;
        
        const duration = 500;
        const startTime = performance.now();
        
        const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            oldMesh.material.opacity = 1 - progress;
            newMesh.material.opacity = progress;
            if (progress < 1) requestAnimationFrame(animate);
            else if (onComplete) onComplete();
        };
        requestAnimationFrame(animate);
    }

    disposeMesh(mesh) {
        if (!mesh) return;
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
            if (mesh.material.map) mesh.material.map.dispose();
            mesh.material.dispose();
        }
        this.scene.remove(mesh);
    }

    getCameraRotation() { return { phi: this.phi, theta: this.theta }; }
}

// Export
window.panoramaViewer = null;
