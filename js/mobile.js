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

        // Handle resize to adjust optimizations dynamically
        window.addEventListener('resize', () => {
            if (this.isMobile) {
                this.applyMobileOptimizations();
            }
        });
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
        // Add mobile-specific class to body if not present
        if (!document.body.classList.contains('mobile-device')) {
            document.body.classList.add('mobile-device');
        }

        // Adjust renderer quality for better performance on mobile
        if (window.panoramaViewer && window.panoramaViewer.renderer) {
            window.panoramaViewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }

        // Remove existing mobile styles if present to avoid duplicates
        const existingStyle = document.getElementById('mobile-support-style');
        if (existingStyle) {
            existingStyle.remove();
        }

        // Add responsive mobile-specific styles with relative units
        const style = document.createElement('style');
        style.id = 'mobile-support-style';
        style.textContent = `
         .mobile-device #location-info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        max-height: 35vh;
        background-color: rgba(0, 0, 0, 0.75);
        color: #fff;
        font-size: 1rem;
        padding: 1rem;
        box-sizing: border-box;
        overflow-y: auto;
        z-index: 1000;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        backdrop-filter: blur(5px);
    }

    .mobile-device #location-info h2 {
        font-size: 1.2rem;
        margin: 0 0 0.5rem 0;
        word-break: break-word;
    }

    .mobile-device #location-info p {
        font-size: 1rem;
        margin: 0;
        word-break: break-word;
    }

    /* Small screen adjustments */
    @media (max-width: 375px) {
        .mobile-device #location-info {
            font-size: 0.95rem;
            padding: 0.75rem;
        }

        .mobile-device #location-info h2 {
            font-size: 1rem;
        }

        .mobile-device #location-info p {
            font-size: 0.9rem;
        }
    }

            /* Ensure full viewport size for panorama container */
            #panorama-container {
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                touch-action: none; /* Disable default touch gestures */
            }

            /* Navigation arrows size & touch target */
            .mobile-device .nav-arrow {
                width: 12vw;
                height: 12vw;
                max-width: 60px;
                max-height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .mobile-device .nav-arrow i {
                font-size: 4vw;
                max-font-size: 24px;
                pointer-events: none; /* Let parent handle events */
            }

            /* Search input adjustments */
            .mobile-device #search-input {
                font-size: 1rem;
                height: 3rem;
                width: 90vw;
                max-width: 400px;
                box-sizing: border-box;
                padding: 0.5rem 1rem;
            }

            /* Search result item padding */
            .mobile-device .search-result-item {
                padding: 1rem;
            }

            /* Media queries for very small devices */
            @media (max-width: 320px) {
                .mobile-device .nav-arrow {
                    width: 40px;
                    height: 40px;
                }
                .mobile-device .nav-arrow i {
                    font-size: 16px;
                }
            }

            @media (min-width: 768px) {
                .mobile-device .nav-arrow {
                    width: 60px;
                    height: 60px;
                }
                .mobile-device .nav-arrow i {
                    font-size: 24px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Set up event listeners for mobile interactions
     */
    setupEventListeners() {
        const panoramaContainer = document.getElementById('panorama-container');

        if (!panoramaContainer) return;

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

                // Check if the tapped element is a navigation arrow or inside it
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
     * Enable fullscreen mode with all vendor prefixes
     */
    enableFullscreen() {
        const element = document.documentElement;

        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Safari */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE11 */
            element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
            element.mozRequestFullScreen();
        }
    }
}

// Export the mobile support for use in other modules
window.mobileSupport = new MobileSupport();
