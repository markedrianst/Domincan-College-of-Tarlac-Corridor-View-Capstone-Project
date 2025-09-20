/**
 * Main Application
 * Initializes and connects all components of the indoor street view system
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize panorama viewer
    window.panoramaViewer = new PanoramaViewer('panorama-container');
    
    // Initialize navigation manager
    window.navigationManager = new NavigationManager();
    
    // Initialize search functionality
    window.searchManager = new SearchManager();
    
    // Initialize transition manager
    window.transitionManager = new TransitionManager();
    
    // Initialize mobile support
    window.mobileSupport = new MobileSupport();
    
    // Load initial panorama (entrance) change this in debugging base on id
    window.panoramaViewer.loadPanorama('Sd4thfloor8');
    
    // Add fullscreen button for mobile
    if (window.mobileSupport.isMobile) {
        const fullscreenButton = document.createElement('button');
        fullscreenButton.className = 'fullscreen-button';
        fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
        fullscreenButton.addEventListener('click', () => {
            window.mobileSupport.enableFullscreen();
        });
        document.body.appendChild(fullscreenButton);
    }
    
    console.log('Campus Indoor Street View initialized successfully');
});