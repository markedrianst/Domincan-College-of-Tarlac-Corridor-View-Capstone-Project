/**
 * Transition Manager Module
 * Handles smooth transitions between panoramas
 */

class TransitionManager {
    constructor() {
        this.transitionElement = document.createElement('div');
        this.transitionElement.className = 'transition-overlay';
        this.transitionElement.style.position = 'fixed';
        this.transitionElement.style.top = '0';
        this.transitionElement.style.left = '0';
        this.transitionElement.style.width = '100%';
        this.transitionElement.style.height = '100%';
        this.transitionElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        this.transitionElement.style.transition = 'background-color 0.5s ease-in-out';
        this.transitionElement.style.pointerEvents = 'none';
        this.transitionElement.style.zIndex = '50';
        
        document.body.appendChild(this.transitionElement);
    }
    
    /**
     * Start a transition between two panoramas
     * @param {string} fromId - The ID of the current panorama
     * @param {string} toId - The ID of the target panorama
     */
    startTransition(fromId, toId) {
        // Fade out
        this.transitionElement.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        
        // Wait for fade out to complete, then load new panorama
        setTimeout(() => {
            if (window.panoramaViewer) {
                window.panoramaViewer.loadPanorama(toId);
                
                // Wait a bit for the panorama to load, then fade back in
                setTimeout(() => {
                    this.transitionElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                }, 500);
            }
        }, 500);
    }
}

// Export the transition manager for use in other modules
window.transitionManager = null;