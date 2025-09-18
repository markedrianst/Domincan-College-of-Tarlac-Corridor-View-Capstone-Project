
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

  checkMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  applyMobileOptimizations() {
    document.body.classList.add('mobile-device');

    if (window.panoramaViewer && window.panoramaViewer.renderer) {
      window.panoramaViewer.renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 1.5)
      );
    }

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

  setupEventListeners() {
    const panoramaContainer = document.getElementById('panorama-container');
    if (!panoramaContainer) return;

    panoramaContainer.addEventListener(
      'touchstart',
      (e) => {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.touchMoved = false;
      },
      { passive: false }
    );

    panoramaContainer.addEventListener(
      'touchmove',
      () => {
        this.touchMoved = true;
      },
      { passive: false }
    );

    // Handle tap events for navigation arrows
    panoramaContainer.addEventListener(
      'touchend',
      (e) => {
        if (!this.touchMoved) {
          const touch = e.changedTouches[0];
          const element = document.elementFromPoint(
            touch.clientX,
            touch.clientY
          );

          if (
            element &&
            (element.classList.contains('nav-arrow') ||
              element.closest('.nav-arrow'))
          ) {
            const arrow = element.classList.contains('nav-arrow')
              ? element
              : element.closest('.nav-arrow');
            const targetId = arrow.dataset.target;

            if (window.transitionManager && targetId) {
              const currentId =
                window.panoramaViewer.getCurrentId?.() || null;
              window.transitionManager.startTransition(currentId, targetId);
            } else {
              arrow.click();
            }
          }
        }
      },
      { passive: false }
    );

    // Also handle desktop clicks consistently
    document.addEventListener('click', (e) => {
      const arrow = e.target.closest('.nav-arrow');
      if (arrow) {
        const targetId = arrow.dataset.target;
        if (window.transitionManager && targetId) {
          const currentId = window.panoramaViewer.getCurrentId?.() || null;
          window.transitionManager.startTransition(currentId, targetId);
          e.preventDefault();
        }
      }
    });

    window.addEventListener('orientationchange', () => {
      this.handleOrientationChange();
    });
  }

  handleOrientationChange() {
    setTimeout(() => {
      if (window.panoramaViewer) {
        window.panoramaViewer.onWindowResize();
      }
      if (window.navigationManager) {
        window.navigationManager.updateArrowPositions(
          window.panoramaViewer.camera
        );
      }
    }, 300);
  }

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

window.mobileSupport = new MobileSupport();