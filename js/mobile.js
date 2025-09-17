/**
 * Mobile Support Module
 * Enhances the application with mobile-friendly features and touch support
 */

class MobileSupport {
    constructor() {
        this.isMobile = this.checkMobile();
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchMoved = false;
        
        if (this.isMobile) {
            this.applyMobileOptimizations();
        }
        
        this.setupEventListeners();
    }
    
    /**
     * Check if the device is mobile
     * @returns {boolean} - True if the device is mobile
     */
    checkMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    /**
     * Apply mobile-specific optimizations
     */
    applyMobileOptimizations() {
        // Add mobile-specific class to body
        document.body.classList.add('mobile-device');
        
        // Adjust renderer quality for better performance on mobile
        if (window.panoramaViewer && window.panoramaViewer.renderer) {
            window.panoramaViewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }
        
        // Increase size of navigation arrows for touch targets
        const style = document.createElement('style');
        style.textContent = `
            .mobile-device .nav-arrow {
                width: 50px;
                height: 50px;
            }
            
            .mobile-device .nav-arrow i {
                font-size: 24px;
            }
            
            .mobile-device #search-input {
                font-size: 16px;
                height: 44px;
            }
            
            .mobile-device .search-result-item {
                padding: 15px;
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * Set up event listeners for mobile interactions
     */
    setupEventListeners() {
        const panoramaContainer = document.getElementById('panorama-container');
        
        // Prevent default touch behavior to avoid browser navigation gestures
        panoramaContainer.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
            this.touchStartY = e.touches[0].clientY;
            this.touchMoved = false;
        }, { passive: false });
        
        panoramaContainer.addEventListener('touchmove', (e) => {
            this.touchMoved = true;
        }, { passive: false });
        
        // Handle tap events for navigation arrows
        panoramaContainer.addEventListener('touchend', (e) => {
            if (!this.touchMoved) {
                // This was a tap, not a drag
                const touch = e.changedTouches[0];
                const element = document.elementFromPoint(touch.clientX, touch.clientY);
                
                // Check if the tapped element is a navigation arrow
                if (element && (element.classList.contains('nav-arrow') || element.closest('.nav-arrow'))) {
                    const arrow = element.classList.contains('nav-arrow') ? element : element.closest('.nav-arrow');
                    arrow.click(); // Trigger the click event on the arrow
                }
            }
        }, { passive: false });
        
        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            this.handleOrientationChange();
        });
    }
    
    /**
     * Handle device orientation change
     */
    handleOrientationChange() {
        // Wait for orientation change to complete
        setTimeout(() => {
            // Update renderer and camera
            if (window.panoramaViewer) {
                window.panoramaViewer.onWindowResize();
            }
            
            // Update navigation arrows
            if (window.navigationManager) {
                window.navigationManager.updateArrowPositions(window.panoramaViewer.camera);
            }
        }, 300);
    }
    
    /**
     * Enable fullscreen mode
     */
    enableFullscreen() {
        const element = document.documentElement;
        
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }
}

// Export the mobile support for use in other modules
window.mobileSupport = null;