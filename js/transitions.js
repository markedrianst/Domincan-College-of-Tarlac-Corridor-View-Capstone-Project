class TransitionManager {
  constructor() {
    this.container = document.getElementById('panorama-container');

    Object.assign(this.container.style, {
      transform: 'scale(1)',
      transition: 'transform 0.45s cubic-bezier(.25, .1, .25, 1), opacity 0.45s cubic-bezier(.25, .1, .25, 1)',
      willChange: 'transform, opacity',
      backgroundColor: '#000' // prevents white flash
    });
  }

  startTransition(fromId, toId) {
    // --- Step 1: Quick zoom out & fade ---
    this.container.style.transition = 'transform 0.45s cubic-bezier(.25, .1, .25, 1), opacity 0.45s cubic-bezier(.25, .1, .25, 1)';
    this.container.style.transform = 'scale(1.8)';
    this.container.style.opacity = '0.8';

    // --- Step 2: Switch pano faster ---
    setTimeout(() => {
      window.panoramaViewer.loadPanorama(toId);

      this.container.style.transition = 'none';
      this.container.style.transform = 'scale(1.1)';
      this.container.style.opacity = '1';

      // Force reflow
      void this.container.offsetWidth;

      requestAnimationFrame(() => {
        // --- Step 3: Smooth zoom-in & fade-in ---
        this.container.style.transition = 'transform 0.45s cubic-bezier(.25, .1, .25, 1), opacity 0.45s cubic-bezier(.25, .1, .25, 1)';
        this.container.style.transform = 'scale(1)';
        this.container.style.opacity = '1';
      });
    }, 450); // match Step 1 duration
  }
}

window.transitionManager = new TransitionManager();
