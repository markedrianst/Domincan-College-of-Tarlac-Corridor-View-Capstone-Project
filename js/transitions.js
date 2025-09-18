class TransitionManager {
  constructor() {
    this.transitionElement = document.createElement('div');
    this.transitionElement.className = 'transition-overlay';
    Object.assign(this.transitionElement.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: '0',
      transform: 'scale(1)',
      transition: 'opacity 0.6s ease-in-out, transform 0.8s ease-in-out',
      pointerEvents: 'none',
      zIndex: '9999',
      willChange: 'transform, opacity'
    });

    document.body.appendChild(this.transitionElement);
  }

  resolveImageUrl(panoId) {
    if (window.panoramas && Array.isArray(window.panoramas)) {
      const pano = window.panoramas.find(p => p.id === panoId);
      return pano ? pano.imageUrl : null;
    }
    return null;
  }

  startTransition(fromId, toId) {
    const currentImg = this.resolveImageUrl(fromId);
    const nextImg = this.resolveImageUrl(toId);

    if (!currentImg || !nextImg) {
      // If either image is missing, just load directly
      if (window.panoramaViewer) {
        window.panoramaViewer.loadPanorama(toId);
      }
      return;
    }

    // Phase 1: show CURRENT pano snapshot
    this.transitionElement.style.backgroundImage = `url(${currentImg})`;
    this.transitionElement.style.opacity = '1';
    this.transitionElement.style.transform = 'scale(1)';
    void this.transitionElement.offsetWidth;

    // Animate zoom OUT + fade
    this.transitionElement.style.transform = 'scale(2)';
    this.transitionElement.style.opacity = '0';

    setTimeout(() => {
      // Load NEXT pano underneath
      if (window.panoramaViewer) {
        window.panoramaViewer.loadPanorama(toId);
      }

      // Phase 2: show NEXT pano snapshot (start zoomed in)
      this.transitionElement.style.transition = 'none';
      this.transitionElement.style.backgroundImage = `url(${nextImg})`;
      this.transitionElement.style.transform = 'scale(1.5)';
      this.transitionElement.style.opacity = '0';
      void this.transitionElement.offsetWidth;

      // Animate zoom IN + fade
      this.transitionElement.style.transition =
        'opacity 0.6s ease-in-out, transform 0.8s ease-in-out';
      this.transitionElement.style.opacity = '1';
      this.transitionElement.style.transform = 'scale(1)';

      // Finally fade away overlay
      setTimeout(() => {
        this.transitionElement.style.opacity = '0';
      }, 800);
    }, 800);
  }
}

window.transitionManager = new TransitionManager();
