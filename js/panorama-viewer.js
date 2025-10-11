/**
 * Panorama Viewer Module - SMART LOADING & CRASH-PROOF
 * Handles the 360° panorama rendering using Three.js
 */

class PanoramaViewer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentPanoramaId = null;
        this.isLoading = false;
        this.loadingScreen = document.getElementById('loading-screen');
        
        // SMART LOADING: Track load states
        this.loadStartTime = 0;
        this.minLoadTime = 300; // Minimum loading screen time (ms)
        this.slowLoadThreshold = 1000; // Show loading if takes longer than this
        
        // CRASH-PROOF: Safe mobile detection
        this.isMobile = this.safeMobileDetection();
        
        // Memory limits
        if (this.isMobile) {
            this.zoomLevel = 1.0;
            this.minZoom = 0.8;
            this.maxZoom = 1.5;
            this.maxPreloadedTextures = 1;
        } else {
            this.zoomLevel = 1.0;
            this.minZoom = 0.7;
            this.maxZoom = 2.5;
            this.maxPreloadedTextures = 2;
        }
        
        this.zoomSpeed = 0.1;
        
        // Three.js components
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.geometry = null;
        this.material = null;
        this.mesh = null;
        
        // Control variables
        this.isUserInteracting = false;
        this.onPointerDownMouseX = 0;
        this.onPointerDownMouseY = 0;
        this.lon = 0;
        this.onPointerDownLon = 0;
        this.lat = 0;
        this.onPointerDownLat = 0;
        this.phi = 0;
        this.theta = 0;
        
        // Memory management
        this.textureCache = new Map();
        this.loadingQueue = new Set();
        this.loadCount = 0;
        this.lastCleanupTime = 0;
        
        // Initialize
        this.safeInit();
        this.setupEventListeners();
    }
    
    /**
     * SMART LOADING: Only show loading when actually needed
     */
    loadPanorama(panoramaId) {
        // Prevent too many rapid loads
        if (this.loadingQueue.has(panoramaId)) {
            return;
        }
        
        // Emergency memory cleanup
        if (this.loadCount > 10) {
            this.emergencyMemoryCleanup();
        }
        
        const panorama = getPanoramaById(panoramaId);
        if (!panorama) {
            console.error(`Panorama with ID ${panoramaId} not found`);
            return;
        }

        this.loadingQueue.add(panoramaId);
        this.currentPanoramaId = panoramaId;
        this.loadCount++;

        // Update UI immediately (fast operation)
        this.safeUpdateUI(panorama);

        // Set orientation
        if (panorama.defaultLon !== undefined) this.lon = panorama.defaultLon;
        if (panorama.defaultLat !== undefined) this.lat = panorama.defaultLat;

        // SMART LOADING: Start timing the load
        this.loadStartTime = performance.now();
        this.isLoading = true;

        // SMART LOADING: Check cache first - no loading screen if cached
        const cachedTexture = this.getCachedTexture(panoramaId);
        if (cachedTexture) {
            // Instant load from cache - no loading screen needed
            this.applyPanoramaTexture(cachedTexture, panoramaId);
            this.loadingQueue.delete(panoramaId);
            this.isLoading = false;
        } else {
            // SMART LOADING: Delay loading screen for fast loads
            this.loadingTimeout = setTimeout(() => {
                // Only show loading if it's taking a while AND still loading
                if (this.isLoading && this.loadingQueue.has(panoramaId)) {
                    this.showLoading();
                }
            }, 100); // Wait 100ms before showing loading screen

            // Load texture
            this.safeLoadTexture(panoramaId, panorama.imageUrl);
        }

        // Conservative preloading
        if (!this.isMobile && this.textureCache.size < this.maxPreloadedTextures) {
            setTimeout(() => this.safePreloadNeighbors(panoramaId), 2000);
        }
    }

    /**
     * SMART LOADING: Safe texture loading with smart loading states
     */
    safeLoadTexture(panoramaId, imageUrl) {
        try {
            const textureLoader = new THREE.TextureLoader();
            
            textureLoader.load(
                imageUrl,
                (texture) => {
                    // SMART LOADING: Clear the loading timeout since we're done
                    clearTimeout(this.loadingTimeout);
                    
                    // Apply memory limits
                    if (this.isMobile) {
                        texture.generateMipmaps = false;
                        texture.minFilter = THREE.LinearFilter;
                    }
                    
                    this.cacheTexture(panoramaId, texture);
                    this.applyPanoramaTexture(texture, panoramaId);
                    this.loadingQueue.delete(panoramaId);
                    this.isLoading = false;
                    
                    // SMART LOADING: Hide loading if it was shown
                    this.hideLoading();
                },
                undefined,
                (error) => {
                    // SMART LOADING: Clear timeout and hide loading on error
                    clearTimeout(this.loadingTimeout);
                    console.error('Texture load failed:', error);
                    this.loadingQueue.delete(panoramaId);
                    this.isLoading = false;
                    this.hideLoading();
                    this.showError('Failed to load panorama image.');
                }
            );
            
            // SMART LOADING: Timeout guard - hide loading if something goes wrong
            setTimeout(() => {
                if (this.loadingQueue.has(panoramaId)) {
                    console.warn('Texture load timeout:', panoramaId);
                    clearTimeout(this.loadingTimeout);
                    this.loadingQueue.delete(panoramaId);
                    this.isLoading = false;
                    this.hideLoading();
                }
            }, 30000);
            
        } catch (error) {
            clearTimeout(this.loadingTimeout);
            console.error('Texture loading crashed:', error);
            this.loadingQueue.delete(panoramaId);
            this.isLoading = false;
            this.hideLoading();
        }
    }

    /**
     * SMART LOADING: Show loading only when necessary
     */
    showLoading() {
        if (this.loadingScreen && !this.loadingScreen.style.display === 'flex') {
            this.loadingScreen.style.display = 'flex';
        }
    }

    /**
     * SMART LOADING: Safe loading hide with minimum display time
     */
    hideLoading() {
        if (!this.loadingScreen) return;

        const loadTime = performance.now() - this.loadStartTime;
        
        // SMART LOADING: Ensure loading screen shows for minimum time to prevent flicker
        if (loadTime < this.minLoadTime) {
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
            }, this.minLoadTime - loadTime);
        } else {
            // Hide immediately if we've already shown it long enough
            this.loadingScreen.style.display = 'none';
        }
    }

    /**
     * Apply texture to panorama with transition & cleanup
     */
    applyPanoramaTexture(texture, panoramaId) {
        const newMaterial = new THREE.MeshBasicMaterial({ map: texture });
        const newMesh = new THREE.Mesh(this.geometry, newMaterial);

        if (this.mesh) {
            this.scene.add(newMesh);

            // Smooth fade transition
            this.fadeTransition(this.mesh, newMesh, () => {
                // Cleanup old panorama
                this.cleanupOldMesh();
                this.mesh = newMesh;
                this.material = newMaterial;

                // Update navigation arrows
                if (window.navigationManager) {
                    window.navigationManager.updateConnections(panoramaId);
                }
                
                // notify listeners that panorama finished loading
                window.dispatchEvent(new CustomEvent('panoramaLoaded', { detail: { id: panoramaId } }));
            });
        } else {
            // First load
            this.mesh = newMesh;
            this.material = newMaterial;
            this.scene.add(this.mesh);

            if (window.navigationManager) {
                window.navigationManager.updateConnections(panoramaId);
            }
            
            window.dispatchEvent(new CustomEvent('panoramaLoaded', { detail: { id: panoramaId } }));
        }
    }

    // ... ALL YOUR ORIGINAL METHODS REMAIN EXACTLY THE SAME ...
    // Only the loading-related methods are modified above
    
    safeMobileDetection() {
        try {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        } catch (e) {
            return false;
        }
    }
    
    safeInit() {
        try {
            this.camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 1100);
            this.camera.position.z = 0.01;
            
            this.scene = new THREE.Scene();
            
            if (this.isMobile) {
                this.geometry = new THREE.SphereGeometry(500, 32, 20);
            } else {
                this.geometry = new THREE.SphereGeometry(500, 48, 30);
            }
            this.geometry.scale(-1, 1, 1);
            
            this.renderer = new THREE.WebGLRenderer({ 
                antialias: !this.isMobile,
                powerPreference: "high-performance",
                alpha: false,
                preserveDrawingBuffer: false
            });
            
            this.renderer.setPixelRatio(this.isMobile ? 1 : Math.min(2, window.devicePixelRatio));
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.container.appendChild(this.renderer.domElement);
            
            if (!this.isMobile) {
                this.addZoomControls();
            }
            
            this.animate();
            
        } catch (error) {
            console.error('Three.js initialization failed:', error);
            this.showError('3D viewer failed to initialize. Please refresh the page.');
        }
    }
    
    zoom(delta) {
        this.zoomLevel += delta * this.zoomSpeed;
        this.zoomLevel = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoomLevel));
        this.camera.fov = 75 / this.zoomLevel;
        this.camera.updateProjectionMatrix();
    }
    
    addZoomControls() {
        if (this.isMobile) return;

        const zoomControls = document.createElement('div');
        zoomControls.className = 'zoom-controls';
        zoomControls.style.position = 'absolute';
        zoomControls.style.bottom = '200px';
        zoomControls.style.right = '20px';
        zoomControls.style.zIndex = '100';

        const zoomInBtn = document.createElement('button');
        zoomInBtn.innerHTML = '+';
        zoomInBtn.style.width = '40px';
        zoomInBtn.style.height = '40px';
        zoomInBtn.style.fontSize = '20px';
        zoomInBtn.style.margin = '5px';
        zoomInBtn.style.cursor = 'pointer';
        zoomInBtn.style.borderRadius = '50%';
        zoomInBtn.style.border = '2px solid #fff';
        zoomInBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        zoomInBtn.style.color = '#fff';
        zoomInBtn.addEventListener('click', () => this.zoom(1));

        const zoomOutBtn = document.createElement('button');
        zoomOutBtn.innerHTML = '-';
        zoomOutBtn.style.width = '40px';
        zoomOutBtn.style.height = '40px';
        zoomOutBtn.style.fontSize = '20px';
        zoomOutBtn.style.margin = '5px';
        zoomOutBtn.style.cursor = 'pointer';
        zoomOutBtn.style.borderRadius = '50%';
        zoomOutBtn.style.border = '2px solid #fff';
        zoomOutBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        zoomOutBtn.style.color = '#fff';
        zoomOutBtn.addEventListener('click', () => this.zoom(-1));

        const resetZoomBtn = document.createElement('button');
        resetZoomBtn.innerHTML = 'R';
        resetZoomBtn.title = 'Reset Zoom';
        resetZoomBtn.style.width = '40px';
        resetZoomBtn.style.height = '40px';
        resetZoomBtn.style.fontSize = '16px';
        resetZoomBtn.style.margin = '5px';
        resetZoomBtn.style.cursor = 'pointer';
        resetZoomBtn.style.borderRadius = '50%';
        resetZoomBtn.style.border = '2px solid #fff';
        resetZoomBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        resetZoomBtn.style.color = '#fff';
        resetZoomBtn.addEventListener('click', () => this.resetZoom());

        zoomControls.appendChild(zoomInBtn);
        zoomControls.appendChild(resetZoomBtn);
        zoomControls.appendChild(zoomOutBtn);

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
        
        if (!this.isMobile) {
            this.container.addEventListener('wheel', (event) => {
                event.preventDefault();
                const delta = event.deltaY > 0 ? -1 : 1;
                this.zoom(delta * 0.1);
            });
        }
        
        this.container.addEventListener('contextmenu', (e) => e.preventDefault());
        
        this.initialPinchDistance = null;
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    onPointerDown(event) {
        event.preventDefault();
        
        if (event.touches && event.touches.length === 2) {
            this.initialPinchDistance = Math.hypot(
                event.touches[0].clientX - event.touches[1].clientX,
                event.touches[0].clientY - event.touches[1].clientY
            );
            return;
        }
        
        this.isUserInteracting = true;
        
        const clientX = event.clientX || (event.touches && event.touches[0].clientX);
        const clientY = event.clientY || (event.touches && event.touches[0].clientY);
        
        this.onPointerDownMouseX = clientX;
        this.onPointerDownMouseY = clientY;
        
        this.onPointerDownLon = this.lon;
        this.onPointerDownLat = this.lat;
    }
    
    onPointerMove(event) {
        if (event.touches && event.touches.length === 2) {
            const currentPinchDistance = Math.hypot(
                event.touches[0].clientX - event.touches[1].clientX,
                event.touches[0].clientY - event.touches[1].clientY
            );
            
            if (this.initialPinchDistance) {
                const delta = (currentPinchDistance - this.initialPinchDistance) * 0.01;
                this.zoom(delta);
                this.initialPinchDistance = currentPinchDistance;
            }
            return;
        }
        
        if (!this.isUserInteracting) return;
        
        const clientX = event.clientX || (event.touches && event.touches[0].clientX);
        const clientY = event.clientY || (event.touches && event.touches[0].clientY);
        
        this.lon = (this.onPointerDownMouseX - clientX) * 0.2 + this.onPointerDownLon;
        this.lat = (clientY - this.onPointerDownMouseY) * 0.2 + this.onPointerDownLat;
        
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
        
        if (window.navigationManager) {
            window.navigationManager.updateArrowPositions(this.camera);
        }
    }

    fadeTransition(oldMesh, newMesh, onComplete) {
        oldMesh.material.transparent = true;
        newMesh.material.transparent = true;
        newMesh.material.opacity = 0;
        
        const duration = 500;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            oldMesh.material.opacity = 1 - progress;
            newMesh.material.opacity = progress;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                if (onComplete) onComplete();
            }
        };
        
        requestAnimationFrame(animate);
    }

    cacheTexture(panoramaId, texture) {
        try {
            if (this.isMobile) {
                this.textureCache.forEach((cached, id) => {
                    if (id !== panoramaId && cached.texture) {
                        cached.texture.dispose();
                    }
                });
                this.textureCache.clear();
            }
            
            if (this.textureCache.size >= this.maxPreloadedTextures) {
                this.evictOldestTexture();
            }
            
            this.textureCache.set(panoramaId, { 
                texture: texture, 
                lastUsed: Date.now()
            });
            
        } catch (error) {
            console.error('Cache operation failed:', error);
        }
    }

    evictOldestTexture() {
        if (this.textureCache.size === 0) return;

        let oldestTime = Date.now();
        let oldestKey = null;

        for (const [key, cached] of this.textureCache.entries()) {
            if (cached.lastUsed < oldestTime && key !== this.currentPanoramaId) {
                oldestTime = cached.lastUsed;
                oldestKey = key;
            }
        }

        if (oldestKey) {
            this.safeDisposeTexture(this.textureCache.get(oldestKey));
            this.textureCache.delete(oldestKey);
        }
    }

    getCachedTexture(panoramaId) {
        const cached = this.textureCache.get(panoramaId);
        if (cached) {
            cached.lastUsed = Date.now();
            return cached.texture;
        }
        return null;
    }

    emergencyMemoryCleanup() {
        const now = Date.now();
        if (now - this.lastCleanupTime < 10000) return;
        
        this.lastCleanupTime = now;
        this.loadCount = 0;
        
        this.loadingQueue.clear();
        
        this.textureCache.forEach((cached, id) => {
            if (id !== this.currentPanoramaId) {
                this.safeDisposeTexture(cached);
                this.textureCache.delete(id);
            }
        });
    }

    safePreloadNeighbors(currentPanoramaId) {
        if (this.isMobile) return;
        
        try {
            const panorama = getPanoramaById(currentPanoramaId);
            if (!panorama || !panorama.connections) return;

            const availableSlots = this.maxPreloadedTextures - this.textureCache.size;
            if (availableSlots <= 0) return;

            panorama.connections.slice(0, 1).forEach(neighborId => {
                if (!this.textureCache.has(neighborId) && !this.loadingQueue.has(neighborId)) {
                    const neighbor = getPanoramaById(neighborId);
                    if (neighbor) {
                        setTimeout(() => {
                            this.safeLoadTexture(neighborId, neighbor.imageUrl);
                        }, 1000);
                    }
                }
            });
        } catch (error) {
            console.error('Preloading failed:', error);
        }
    }

    safeUpdateUI(panorama) {
        try {
            requestAnimationFrame(() => {
                const nameEl = document.getElementById('location-name');
                const descEl = document.getElementById('location-description');
                
                if (nameEl) nameEl.textContent = panorama.name || '';
                if (descEl) descEl.textContent = panorama.description || '';
            });
        } catch (error) {
            console.warn('UI update failed:', error);
        }
    }

    showError(message) {
        try {
            console.error('Panorama Viewer Error:', message);
            if (this.loadingScreen) {
                this.loadingScreen.innerHTML = `<div style="color: white; text-align: center;">${message}</div>`;
            }
        } catch (e) {
            console.error('Error display failed:', e);
        }
    }

    cleanupOldMesh() {
        if (this.mesh) {
            this.scene.remove(this.mesh);
            
            if (this.mesh.geometry) {
                this.mesh.geometry.dispose();
            }
            
            if (this.mesh.material) {
                if (this.mesh.material.map) {
                    this.mesh.material.map.dispose();
                }
                this.mesh.material.dispose();
            }
            
            this.mesh = null;
        }
    }

    safeDisposeTexture(cached) {
        try {
            if (cached && cached.texture) {
                cached.texture.dispose();
            }
        } catch (error) {
            console.warn('Texture disposal failed:', error);
        }
    }

    getCameraRotation() {
        return {
            phi: this.phi,
            theta: this.theta
        };
    }

    destroy() {
        try {
            this.loadingQueue.clear();
            
            this.textureCache.forEach(cached => this.safeDisposeTexture(cached));
            this.textureCache.clear();
            
            this.cleanupOldMesh();
            
            if (this.geometry) {
                this.geometry.dispose();
            }
            
            if (this.renderer) {
                this.renderer.dispose();
            }
            
        } catch (error) {
            console.error('Destruction failed:', error);
        }
    }
}

window.panoramaViewer = null;