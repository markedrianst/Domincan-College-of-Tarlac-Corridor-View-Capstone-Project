/**
 * Panorama Viewer Module - ULTRA CRASH-PROOF
 * Handles the 360° panorama rendering using Three.js
 */

class PanoramaViewer {
    constructor(containerId) {
        try {
            this.container = document.getElementById(containerId);
            if (!this.container) {
                throw new Error(`Container ${containerId} not found`);
            }
            
            this.currentPanoramaId = null;
            this.isLoading = false;
            this.loadingScreen = document.getElementById('loading-screen');
            
            // ULTRA SAFE MOBILE DETECTION
            this.isMobile = this.ultraSafeMobileDetection();
            
            // AGGRESSIVE MOBILE LIMITS
            if (this.isMobile) {
                this.zoomLevel = 1.0;
                this.minZoom = 0.8;
                this.maxZoom = 1.2; // Reduced for mobile safety
                this.maxPreloadedTextures = 1; // Only current texture
                this.textureSizeLimit = 1024; // Max texture size for mobile
            } else {
                this.zoomLevel = 1.0;
                this.minZoom = 0.7;
                this.maxZoom = 2.5;
                this.maxPreloadedTextures = 2;
                this.textureSizeLimit = 2048;
            }
            
            this.zoomSpeed = 0.1;
            
            // Three.js components with null checks
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
            
            // CRASH PREVENTION
            this.isDestroyed = false;
            this.animationFrameId = null;
            this.loadingTimeout = null;
            this.loadTimeoutGuard = null;
            
            // Initialize with ultra safety
            this.ultraSafeInit();
            this.setupEventListeners();
            
        } catch (error) {
            console.error('PANORAMA VIEWER CONSTRUCTOR CRASH:', error);
            this.showFatalError('Failed to initialize 3D viewer');
        }
    }
    
    /**
     * ULTRA SAFE MOBILE DETECTION
     */
    ultraSafeMobileDetection() {
        try {
            // Multiple detection methods
            const userAgent = navigator.userAgent || '';
            const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 768;
            
            // Low memory detection
            const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
            const hasLowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
            
            return isMobileUA || isTouch || isSmallScreen || hasLowMemory || hasLowCores;
        } catch (e) {
            // If detection fails, assume mobile for safety
            return true;
        }
    }
    
    /**
     * ULTRA SAFE INITIALIZATION
     */
    ultraSafeInit() {
        try {
            // SAFETY: Check if WebGL is supported
            if (!this.isWebGLSupported()) {
                throw new Error('WebGL not supported');
            }
            
            // SIMPLER SETUP FOR MOBILE
            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            this.camera.position.z = 0.01;
            
            this.scene = new THREE.Scene();
            
            // ULTRA SIMPLE GEOMETRY FOR MOBILE
            if (this.isMobile) {
                this.geometry = new THREE.SphereGeometry(500, 16, 12); // Very simple
            } else {
                this.geometry = new THREE.SphereGeometry(500, 32, 20);
            }
            this.geometry.scale(-1, 1, 1);
            
            // MINIMAL RENDERER FOR MOBILE
            this.renderer = new THREE.WebGLRenderer({ 
                antialias: false, // Disabled for mobile
                powerPreference: this.isMobile ? "low-power" : "high-performance",
                alpha: false,
                preserveDrawingBuffer: false,
                failIfMajorPerformanceCaveat: true // Don't even try if performance will be bad
            });
            
            // LOW RESOLUTION FOR MOBILE
            const pixelRatio = this.isMobile ? 0.75 : Math.min(1.5, window.devicePixelRatio);
            this.renderer.setPixelRatio(pixelRatio);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            
            // SAFETY: Check if DOM element was created
            if (!this.renderer.domElement) {
                throw new Error('Renderer DOM element creation failed');
            }
            
            this.container.appendChild(this.renderer.domElement);
            
            if (!this.isMobile) {
                this.addZoomControls();
            }
            
            this.animate();
            
        } catch (error) {
            console.error('THREE.JS INIT CRASH:', error);
            this.showFatalError('3D not supported on your device');
            throw error; // Prevent further execution
        }
    }
    
    /**
     * WEBGL SUPPORT CHECK
     */
    isWebGLSupported() {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && 
                     (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    }
    
    /**
     * ULTRA SAFE PANORAMA LOADING
     */
    loadPanorama(panoramaId) {
        // SAFETY: Check if viewer is destroyed
        if (this.isDestroyed) {
            console.warn('Viewer destroyed, cannot load panorama');
            return;
        }
        
        // SAFETY: Cancel any previous loads immediately
        this.cancelPendingLoads();
        
        try {
            // SAFETY: Validate input
            if (!panoramaId || typeof panoramaId !== 'string') {
                throw new Error('Invalid panorama ID');
            }
            
            // Prevent too many rapid loads
            if (this.loadingQueue.has(panoramaId)) {
                return;
            }
            
            // Emergency memory cleanup
            if (this.loadCount > 8) { // Lower threshold for mobile
                this.emergencyMemoryCleanup();
            }
            
            const panorama = getPanoramaById(panoramaId);
            if (!panorama) {
                throw new Error(`Panorama ${panoramaId} not found`);
            }

            this.loadingQueue.add(panoramaId);
            this.currentPanoramaId = panoramaId;
            this.loadCount++;

            // Update UI immediately (fast operation)
            this.safeUpdateUI(panorama);

            // Set orientation
            if (panorama.defaultLon !== undefined) this.lon = panorama.defaultLon;
            if (panorama.defaultLat !== undefined) this.lat = panorama.defaultLat;

            // Start timing the load
            this.loadStartTime = performance.now();
            this.isLoading = true;

            // Check cache first - no loading screen if cached
            const cachedTexture = this.getCachedTexture(panoramaId);
            if (cachedTexture) {
                this.applyPanoramaTexture(cachedTexture, panoramaId);
                this.loadingQueue.delete(panoramaId);
                this.isLoading = false;
            } else {
                // Delay loading screen for fast loads
                this.loadingTimeout = setTimeout(() => {
                    if (this.isLoading && this.loadingQueue.has(panoramaId) && !this.isDestroyed) {
                        this.showLoading();
                    }
                }, 100);

                // Load texture with ultra safety
                this.ultraSafeLoadTexture(panoramaId, panorama.imageUrl);
            }

            // NO PRELOADING ON MOBILE - TOO DANGEROUS
            if (!this.isMobile && this.textureCache.size < this.maxPreloadedTextures) {
                setTimeout(() => this.safePreloadNeighbors(panoramaId), 3000);
            }
            
        } catch (error) {
            console.error('LOAD PANORAMA CRASH:', error);
            this.loadingQueue.delete(panoramaId);
            this.isLoading = false;
            this.hideLoading();
            this.showError('Failed to load location');
        }
    }
    
    /**
     * ULTRA SAFE TEXTURE LOADING
     */
    ultraSafeLoadTexture(panoramaId, imageUrl) {
        // SAFETY: Clear any existing timeouts
        this.cancelPendingLoads();
        
        try {
            const textureLoader = new THREE.TextureLoader();
            
            // SAFETY: Set timeout first
            this.loadTimeoutGuard = setTimeout(() => {
                if (this.loadingQueue.has(panoramaId)) {
                    console.warn('Texture load timeout:', panoramaId);
                    this.loadingQueue.delete(panoramaId);
                    this.isLoading = false;
                    this.hideLoading();
                    this.showError('Load timeout');
                }
            }, this.isMobile ? 15000 : 25000); // Shorter timeout for mobile
            
            textureLoader.load(
                imageUrl,
                (texture) => {
                    // SAFETY: Check if still valid
                    if (!this.loadingQueue.has(panoramaId) || this.isDestroyed) {
                        texture.dispose();
                        return;
                    }
                    
                    clearTimeout(this.loadTimeoutGuard);
                    clearTimeout(this.loadingTimeout);
                    
                    // AGGRESSIVE MOBILE OPTIMIZATION
                    if (this.isMobile) {
                        texture.generateMipmaps = false;
                        texture.minFilter = THREE.LinearFilter;
                        texture.magFilter = THREE.LinearFilter;
                        texture.anisotropy = 1;
                        
                        // RESIZE LARGE TEXTURES FOR MOBILE
                        if (texture.image && (texture.image.width > this.textureSizeLimit || 
                            texture.image.height > this.textureSizeLimit)) {
                            console.warn('Oversized texture detected, resizing for mobile');
                            this.resizeTextureForMobile(texture);
                        }
                    }
                    
                    this.cacheTexture(panoramaId, texture);
                    this.applyPanoramaTexture(texture, panoramaId);
                    this.loadingQueue.delete(panoramaId);
                    this.isLoading = false;
                    
                    this.hideLoading();
                },
                undefined,
                (error) => {
                    clearTimeout(this.loadTimeoutGuard);
                    clearTimeout(this.loadingTimeout);
                    console.error('Texture load failed:', error);
                    this.loadingQueue.delete(panoramaId);
                    this.isLoading = false;
                    this.hideLoading();
                    this.showError('Failed to load image');
                }
            );
            
        } catch (error) {
            clearTimeout(this.loadTimeoutGuard);
            clearTimeout(this.loadingTimeout);
            console.error('TEXTURE LOAD CRASH:', error);
            this.loadingQueue.delete(panoramaId);
            this.isLoading = false;
            this.hideLoading();
        }
    }
    
    /**
     * RESIZE OVERSIZED TEXTURES FOR MOBILE SAFETY
     */
    resizeTextureForMobile(texture) {
        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const maxSize = this.textureSizeLimit;
            
            let width = texture.image.width;
            let height = texture.image.height;
            
            // Calculate new dimensions while maintaining aspect ratio
            if (width > maxSize || height > maxSize) {
                if (width > height) {
                    height = (height * maxSize) / width;
                    width = maxSize;
                } else {
                    width = (width * maxSize) / height;
                    height = maxSize;
                }
            }
            
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(texture.image, 0, 0, width, height);
            
            // Create new texture from resized image
            const resizedTexture = new THREE.CanvasTexture(canvas);
            resizedTexture.generateMipmaps = false;
            resizedTexture.minFilter = THREE.LinearFilter;
            resizedTexture.magFilter = THREE.LinearFilter;
            
            // Dispose old texture
            texture.dispose();
            
            return resizedTexture;
        } catch (error) {
            console.warn('Texture resize failed, using original:', error);
            return texture;
        }
    }
    
    /**
     * CANCEL ALL PENDING LOADS
     */
    cancelPendingLoads() {
        if (this.loadingTimeout) {
            clearTimeout(this.loadingTimeout);
            this.loadingTimeout = null;
        }
        if (this.loadTimeoutGuard) {
            clearTimeout(this.loadTimeoutGuard);
            this.loadTimeoutGuard = null;
        }
        this.loadingQueue.clear();
        this.isLoading = false;
    }
    
    /**
     * ULTRA SAFE TEXTURE APPLICATION
     */
    applyPanoramaTexture(texture, panoramaId) {
        // SAFETY: Multiple validation checks
        if (this.isDestroyed) {
            texture.dispose();
            return;
        }
        
        if (this.currentPanoramaId !== panoramaId) {
            console.warn('Texture applied to wrong panorama, disposing');
            texture.dispose();
            return;
        }
        
        if (!texture || !this.scene || !this.geometry) {
            console.error('Invalid state for texture application');
            texture.dispose();
            return;
        }

        try {
            const newMaterial = new THREE.MeshBasicMaterial({ 
                map: texture,
                transparent: false // Better performance
            });
            const newMesh = new THREE.Mesh(this.geometry, newMaterial);

            if (this.mesh) {
                this.scene.add(newMesh);

                // SIMPLER TRANSITION FOR MOBILE
                this.safeFadeTransition(this.mesh, newMesh, () => {
                    this.cleanupOldMesh();
                    this.mesh = newMesh;
                    this.material = newMaterial;

                    // SAFE NAVIGATION UPDATE
                    this.safeNavigationUpdate(panoramaId);
                    
                    window.dispatchEvent(new CustomEvent('panoramaLoaded', { 
                        detail: { id: panoramaId } 
                    }));
                });
            } else {
                // First load
                this.mesh = newMesh;
                this.material = newMaterial;
                this.scene.add(this.mesh);

                this.safeNavigationUpdate(panoramaId);
                
                window.dispatchEvent(new CustomEvent('panoramaLoaded', { 
                    detail: { id: panoramaId } 
                }));
            }
        } catch (error) {
            console.error('APPLY TEXTURE CRASH:', error);
            texture.dispose();
            this.showError('Error displaying panorama');
        }
    }
    
    /**
     * SAFE FADE TRANSITION
     */
    safeFadeTransition(oldMesh, newMesh, onComplete) {
        try {
            // SIMPLER TRANSITION FOR MOBILE - NO FADE IF MOBILE
            if (this.isMobile) {
                this.scene.remove(oldMesh);
                if (onComplete) onComplete();
                return;
            }
            
            oldMesh.material.transparent = true;
            newMesh.material.transparent = true;
            newMesh.material.opacity = 0;
            
            const duration = 300; // Shorter for mobile
            const startTime = performance.now();
            
            const animate = (currentTime) => {
                if (this.isDestroyed) return;
                
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                try {
                    oldMesh.material.opacity = 1 - progress;
                    newMesh.material.opacity = progress;
                } catch (e) {
                    // Material might be disposed, stop animation
                    return;
                }
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    if (onComplete) onComplete();
                }
            };
            
            requestAnimationFrame(animate);
        } catch (error) {
            console.warn('Transition failed:', error);
            if (onComplete) onComplete();
        }
    }
    
    /**
     * SAFE NAVIGATION UPDATE
     */
    safeNavigationUpdate(panoramaId) {
        try {
            if (window.navigationManager && typeof window.navigationManager.updateConnections === 'function') {
                window.navigationManager.updateConnections(panoramaId);
            }
        } catch (error) {
            console.warn('Navigation update failed:', error);
        }
    }
    
    /**
     * ULTRA SAFE ANIMATION LOOP
     */
    animate() {
        if (this.isDestroyed) return;
        
        try {
            this.animationFrameId = requestAnimationFrame(() => this.animate());
            this.update();
        } catch (error) {
            console.error('ANIMATION LOOP CRASH:', error);
            // Try to restart animation loop
            if (!this.isDestroyed) {
                setTimeout(() => this.animate(), 100);
            }
        }
    }
    
    update() {
        if (this.isDestroyed || !this.camera || !this.renderer || !this.scene) return;
        
        try {
            this.lat = Math.max(-85, Math.min(85, this.lat));
            this.phi = THREE.MathUtils.degToRad(90 - this.lat);
            this.theta = THREE.MathUtils.degToRad(this.lon);
            
            const x = 500 * Math.sin(this.phi) * Math.cos(this.theta);
            const y = 500 * Math.cos(this.phi);
            const z = 500 * Math.sin(this.phi) * Math.sin(this.theta);
            
            this.camera.lookAt(x, y, z);
            this.renderer.render(this.scene, this.camera);
            
            // SAFE ARROW UPDATE
            if (window.navigationManager && typeof window.navigationManager.updateArrowPositions === 'function') {
                try {
                    window.navigationManager.updateArrowPositions(this.camera);
                } catch (error) {
                    console.warn('Arrow update failed:', error);
                }
            }
        } catch (error) {
            console.error('UPDATE CRASH:', error);
        }
    }
    
    /**
     * AGGRESSIVE MEMORY MANAGEMENT FOR MOBILE
     */
    cacheTexture(panoramaId, texture) {
        try {
            // MOBILE: ONLY KEEP CURRENT TEXTURE
            if (this.isMobile) {
                this.textureCache.forEach((cached, id) => {
                    if (id !== panoramaId) {
                        this.safeDisposeTexture(cached);
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
            console.error('CACHE TEXTURE CRASH:', error);
        }
    }
    
    /**
     * ULTRA SAFE DESTROY
     */
    destroy() {
        console.log('DESTROYING PANORAMA VIEWER');
        this.isDestroyed = true;
        
        // CANCEL EVERYTHING
        this.cancelPendingLoads();
        
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        
        // AGGRESSIVE MEMORY CLEANUP
        try {
            this.textureCache.forEach(cached => this.safeDisposeTexture(cached));
            this.textureCache.clear();
            
            this.cleanupOldMesh();
            
            if (this.geometry) {
                this.geometry.dispose();
            }
            
            if (this.material) {
                if (this.material.map) this.material.map.dispose();
                this.material.dispose();
            }
            
            if (this.renderer) {
                this.renderer.dispose();
                this.renderer.forceContextLoss();
            }
            
            // Clear container
            if (this.container) {
                this.container.innerHTML = '';
            }
            
        } catch (error) {
            console.error('DESTROY CRASH:', error);
        }
    }
    
    /**
     * FATAL ERROR HANDLING
     */
    showFatalError(message) {
        try {
            if (this.container) {
                this.container.innerHTML = `
                    <div style="color: white; text-align: center; padding: 20px;">
                        <h3>3D Viewer Unavailable</h3>
                        <p>${message}</p>
                        <p><small>Your device may not support WebGL or may have limited memory.</small></p>
                    </div>
                `;
            }
        } catch (e) {
            console.error('Could not display error message');
        }
    }

    // ... YOUR ORIGINAL METHODS BELOW (with minor safety additions) ...
    
    showLoading() {
        try {
            if (this.loadingScreen && this.loadingScreen.style.display !== 'flex') {
                this.loadingScreen.style.display = 'flex';
            }
        } catch (e) {
            console.warn('Show loading failed');
        }
    }

    hideLoading() {
        try {
            if (!this.loadingScreen) return;

            const loadTime = performance.now() - this.loadStartTime;
            
            if (loadTime < 300) {
                setTimeout(() => {
                    if (this.loadingScreen && !this.isDestroyed) {
                        this.loadingScreen.style.display = 'none';
                    }
                }, 300 - loadTime);
            } else {
                this.loadingScreen.style.display = 'none';
            }
        } catch (e) {
            console.warn('Hide loading failed');
        }
    }

    showError(message) {
        try {
            console.error('Panorama Error:', message);
            if (this.loadingScreen) {
                this.loadingScreen.innerHTML = `<div style="color: white; text-align: center;">${message}</div>`;
                this.loadingScreen.style.display = 'flex';
                setTimeout(() => {
                    if (this.loadingScreen && !this.isDestroyed) {
                        this.loadingScreen.style.display = 'none';
                    }
                }, 3000);
            }
        } catch (e) {
            console.error('Error display failed');
        }
    }

    // ... KEEP ALL YOUR OTHER ORIGINAL METHODS BUT ADD TRY-CATCH ...
    // safeUpdateUI, cleanupOldMesh, safeDisposeTexture, etc.
    
    // ADD THIS SAFETY WRAPPER TO ALL YOUR ORIGINAL METHODS:
    safeUpdateUI(panorama) {
        try {
            requestAnimationFrame(() => {
                try {
                    const nameEl = document.getElementById('location-name');
                    const descEl = document.getElementById('location-description');
                    
                    if (nameEl) nameEl.textContent = panorama.name || '';
                    if (descEl) descEl.textContent = panorama.description || '';
                } catch (e) {
                    console.warn('UI update failed');
                }
            });
        } catch (error) {
            console.warn('UI update failed');
        }
    }

    cleanupOldMesh() {
        if (this.mesh) {
            try {
                this.scene.remove(this.mesh);
                
                if (this.mesh.geometry && this.mesh.geometry !== this.geometry) {
                    this.mesh.geometry.dispose();
                }
                
                if (this.mesh.material) {
                    if (this.mesh.material.map) {
                        this.mesh.material.map.dispose();
                    }
                    this.mesh.material.dispose();
                }
                
                this.mesh = null;
            } catch (error) {
                console.warn('Mesh cleanup warning');
            }
        }
    }

    safeDisposeTexture(cached) {
        try {
            if (cached && cached.texture) {
                cached.texture.dispose();
            }
        } catch (error) {
            console.warn('Texture disposal failed');
        }
    }

    // ... ALL YOUR OTHER ORIGINAL METHODS WITH TRY-CATCH ...
}

window.panoramaViewer = null;