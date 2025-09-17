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
        
        // Start animation loop
        this.animate();
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
        
        // Prevent context menu on right-click
        this.container.addEventListener('contextmenu', (e) => e.preventDefault());
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
    loadPanorama(panoramaId) {
        const panorama = getPanoramaById(panoramaId);
        if (!panorama) {
            console.error(`Panorama with ID ${panoramaId} not found`);
            return;
        }
        
        this.isLoading = true;
        this.loadingScreen.style.display = 'flex';
        this.currentPanoramaId = panoramaId;
        
        // Update location info
        document.getElementById('location-name').textContent = panorama.name;
        document.getElementById('location-description').textContent = panorama.description;
        
        // Load the panorama texture
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            panorama.imageUrl,
            (texture) => {
                // If there's an existing mesh, remove it
                if (this.mesh) {
                    this.scene.remove(this.mesh);
                    this.material.dispose();
                }
                
                // Create new material with the loaded texture
                this.material = new THREE.MeshBasicMaterial({ map: texture });
                this.mesh = new THREE.Mesh(this.geometry, this.material);
                this.scene.add(this.mesh);
                
                // Hide loading screen
                this.isLoading = false;
                this.loadingScreen.style.display = 'none';
                
                // Update navigation arrows
                if (window.navigationManager) {
                    window.navigationManager.updateConnections(panoramaId);
                }
            },
            undefined,
            (error) => {
                console.error('Error loading panorama texture:', error);
                this.isLoading = false;
                this.loadingScreen.style.display = 'none';
            }
        );
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