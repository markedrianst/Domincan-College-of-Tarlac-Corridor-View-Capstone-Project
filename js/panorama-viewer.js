/**
 * Panorama Viewer Module
 * Handles the 360° panorama rendering using Three.js
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
        
        // Initialize the viewer
        this.init();
        this.setupEventListeners();
    }
    
    /**
     * Initialize the Three.js scene, camera, and renderer
     */
    init() {
        // Create camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
        this.camera.position.z = 0.01;
        
        // Create scene
        this.scene = new THREE.Scene();
        
        // Create geometry for the panorama sphere
        this.geometry = new THREE.SphereGeometry(500, 60, 40);
        this.geometry.scale(-1, 1, 1); // Invert the sphere so texture is on the inside
        
        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);
        
        // Add zoom controls to UI
        this.addZoomControls();
        
        // Start animation loop
        this.animate();
    }
    
    // Zoom method to control camera field of view
    zoom(delta) {
        // Update zoom level based on input delta
        this.zoomLevel += delta * this.zoomSpeed;
        
        // Clamp zoom level to min/max values
        this.zoomLevel = Math.max(this.minZoom, Math.min(this.maxZoom, this.zoomLevel));
        
        // Apply zoom by adjusting camera FOV (lower FOV = more zoom)
        this.camera.fov = 75 / this.zoomLevel;
        this.camera.updateProjectionMatrix();
    }
    
    // Add zoom buttons to the UI
    addZoomControls() {
        // Create zoom controls container
        const zoomControls = document.createElement('div');
        zoomControls.className = 'zoom-controls';
        zoomControls.style.position = 'absolute';
        zoomControls.style.bottom = '200px';
        zoomControls.style.right = '20px';
        zoomControls.style.zIndex = '100';
        
        // Create zoom in button
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
        
        // Create zoom out button
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
        
        // Create reset zoom button
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
        
        // Add buttons to controls container
        zoomControls.appendChild(zoomInBtn);
        zoomControls.appendChild(resetZoomBtn);
        zoomControls.appendChild(zoomOutBtn);
        
        // Add controls to container
        this.container.appendChild(zoomControls);
    }
    
    // Reset zoom to default level
    resetZoom() {
        this.zoomLevel = 1.0;
        this.camera.fov = 75;
        this.camera.updateProjectionMatrix();
    }
    
    /**
     * Set up event listeners for user interaction
     */
    setupEventListeners() {
        window.addEventListener('resize', this.onWindowResize.bind(this));
        
        this.container.addEventListener('mousedown', this.onPointerDown.bind(this));
        this.container.addEventListener('mousemove', this.onPointerMove.bind(this));
        this.container.addEventListener('mouseup', this.onPointerUp.bind(this));
        
        // Touch events for mobile
        this.container.addEventListener('touchstart', this.onPointerDown.bind(this));
        this.container.addEventListener('touchmove', this.onPointerMove.bind(this));
        this.container.addEventListener('touchend', this.onPointerUp.bind(this));
        
        // Mouse wheel zoom
        this.container.addEventListener('wheel', (event) => {
            event.preventDefault();
            // Normalize wheel delta across browsers
            const delta = event.deltaY > 0 ? -1 : 1;
            this.zoom(delta * 0.1);
        });
        
        // Prevent context menu on right-click
        this.container.addEventListener('contextmenu', (e) => e.preventDefault());
        
        // Initialize pinch zoom variables
        this.initialPinchDistance = null;
    }
    
    /**
     * Handle window resize events
     */
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    /**
     * Handle pointer down events (mouse or touch)
     */
    onPointerDown(event) {
        event.preventDefault();
        
        if (event.touches && event.touches.length === 2) {
            // Store initial pinch distance for zoom
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
    
    /**
     * Handle pointer move events (mouse or touch)
     */
    onPointerMove(event) {
        if (event.touches && event.touches.length === 2) {
            // Calculate current pinch distance for zoom
            const currentPinchDistance = Math.hypot(
                event.touches[0].clientX - event.touches[1].clientX,
                event.touches[0].clientY - event.touches[1].clientY
            );
            
            // Calculate zoom delta based on pinch distance change
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
        
        this.lon = (this.onPointerDownMouseX - clientX) * 0.1 + this.onPointerDownLon;
        this.lat = (clientY - this.onPointerDownMouseY) * 0.1 + this.onPointerDownLat;
        
        // Limit vertical rotation
        this.lat = Math.max(-85, Math.min(85, this.lat));
    }
    
    /**
     * Handle pointer up events (mouse or touch)
     */
    onPointerUp() {
        this.isUserInteracting = false;
    }
    
    /**
     * Animation loop
     */
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.update();
    }
    
    /**
     * Update camera position based on user interaction
     */
    update() {
        // Auto-rotation removed as requested
        
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = THREE.MathUtils.degToRad(90 - this.lat);
        this.theta = THREE.MathUtils.degToRad(this.lon);
        
        const x = 500 * Math.sin(this.phi) * Math.cos(this.theta);
        const y = 500 * Math.cos(this.phi);
        const z = 500 * Math.sin(this.phi) * Math.sin(this.theta);
        
        this.camera.lookAt(x, y, z);
        this.renderer.render(this.scene, this.camera);
        
        // Update navigation arrows if they exist
        if (window.navigationManager) {
            window.navigationManager.updateArrowPositions(this.camera);
        }
    }
    
    /**
     * Load a panorama by ID
     * @param {string} panoramaId - The ID of the panorama to load
     */
 /**

 */
loadPanorama(panoramaId) {
    const panorama = getPanoramaById(panoramaId);
    if (!panorama) {
        console.error(`Panorama with ID ${panoramaId} not found`);
        return;
    }

    this.currentPanoramaId = panoramaId;

    // Update location info
    document.getElementById('location-name').textContent = panorama.name;
    document.getElementById('location-description').textContent = panorama.description;

    // Loader
    const textureLoader = new THREE.TextureLoader();

    // ✅ If preloaded, use cached texture
    if (panorama._preloadedTexture) {
        this.applyPanoramaTexture(panorama._preloadedTexture, panoramaId);
    } else {
        textureLoader.load(
            panorama.imageUrl,
            (texture) => {
                panorama._preloadedTexture = texture; // cache
                this.applyPanoramaTexture(texture, panoramaId);
            },
            undefined,
            (error) => console.error("Error loading panorama texture:", error)
        );
    }

    // ✅ Optionally preload neighbor panoramas
    if (panorama.connections) {
        panorama.connections.slice(0, 2).forEach((neighborId) => this.preloadPanorama(neighborId));
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
            // ✅ Cleanup old panorama
            this.scene.remove(this.mesh);
            if (this.mesh.geometry) this.mesh.geometry.dispose();
            if (this.mesh.material) this.mesh.material.dispose();
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
    }
}

/**
 * Preload panorama texture for faster transition
 */
preloadPanorama(panoramaId) {
    const panorama = getPanoramaById(panoramaId);
    if (!panorama || panorama._preloadedTexture) return;

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(panorama.imageUrl, (texture) => {
        panorama._preloadedTexture = texture;
    });
}

    /**
     * Perform a smooth fade transition between two panorama meshes
     * @param {THREE.Mesh} oldMesh - The current panorama mesh
     * @param {THREE.Mesh} newMesh - The new panorama mesh
     * @param {Function} onComplete - Callback function when transition is complete
     */
    fadeTransition(oldMesh, newMesh, onComplete) {
        // Set initial opacity for cross-fade
        oldMesh.material.transparent = true;
        newMesh.material.transparent = true;
        newMesh.material.opacity = 0;
        
        // Animation duration in milliseconds
        const duration = 500;
        const startTime = performance.now();
        
        // Animation function
        const animate = (currentTime) => {
            // Calculate progress (0 to 1)
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Update opacities
            oldMesh.material.opacity = 1 - progress;
            newMesh.material.opacity = progress;
            
            // Continue animation if not complete
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Transition complete
                if (onComplete) onComplete();
            }
        };
        
        // Start animation
        requestAnimationFrame(animate);
    }
    
    /**
     * Get the current camera rotation
     * @returns {Object} - Object containing phi and theta angles
     */
    getCameraRotation() {
        return {
            phi: this.phi,
            theta: this.theta
        };
    }
}

// Export the viewer for use in other modules
window.panoramaViewer = null;