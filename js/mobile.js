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
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Chrome|Opera Mini/i.test(
        navigator.userAgent
      ) || "ontouchstart" in window // fallback for touch devices
    );
  }

  applyMobileOptimizations() {
    document.body.classList.add("mobile-device");

    // ✅ Add meta viewport to stop global pinch zoom
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement("meta");
      viewportMeta.name = "viewport";
      viewportMeta.content =
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
      document.head.appendChild(viewportMeta);
    }

    // Lower pixel ratio on mobile to improve FPS
    if (window.panoramaViewer && window.panoramaViewer.renderer) {
      window.panoramaViewer.renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, 2)
      );
    }

    // ✅ Enable pinch-to-zoom only for panorama
    if (window.panoramaViewer && window.panoramaViewer.controls) {
      window.panoramaViewer.controls.enableZoom = true;
      window.panoramaViewer.controls.zoomSpeed = 1.0;
    }

    const style = document.createElement("style");
    style.textContent = `
      /* Make nav arrows more tappable */
      .nav-arrow {
        position: absolute;
        transform: translate(-50%, -50%);
        width: clamp(40px, 8vw, 60px);
        height: clamp(40px, 8vw, 60px);
        will-change: transform;
      }
      .nav-arrow i {
        font-size: clamp(18px, 5vw, 28px);
      }

      /* Search bar scaling */
      #search-input {
        font-size: clamp(14px, 3vw, 18px);
        height: clamp(36px, 5vh, 48px);
      }

      /* Search results scale better */
      .search-result-item {
        padding: clamp(10px, 2vw, 16px);
        font-size: clamp(12px, 3vw, 16px);
      }

      /* Make buttons tap-friendly */
      button {
        min-width: 40px;
        min-height: 40px;
        font-size: clamp(14px, 3vw, 18px);
      }

      /* Ensure panorama container always fits */
      #panorama-container {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        touch-action: pinch-zoom; /* ✅ allow pinch-zoom only here */
      }

      /* Prevent UI elements from scaling */
      body, #search-input, button, .search-result-item {
        touch-action: manipulation; /* ✅ disable pinch-zoom on UI */
      }
    `;
    document.head.appendChild(style);
  }

  setupEventListeners() {
    const panoramaContainer = document.getElementById("panorama-container");
    if (!panoramaContainer) return;

    // Touch start
    panoramaContainer.addEventListener(
      "touchstart",
      (e) => {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
        this.touchMoved = false;
      },
      { passive: true }
    );

    // Touch move (detect drag vs tap)
    panoramaContainer.addEventListener(
      "touchmove",
      () => {
        this.touchMoved = true;
      },
      { passive: true }
    );

    // Touch end (handle taps)
    panoramaContainer.addEventListener(
      "touchend",
      (e) => {
        if (!this.touchMoved) {
          const touch = e.changedTouches[0];
          const element = document.elementFromPoint(
            touch.clientX,
            touch.clientY
          );

          if (
            element &&
            (element.classList.contains("nav-arrow") ||
              element.closest(".nav-arrow"))
          ) {
            const arrow = element.classList.contains("nav-arrow")
              ? element
              : element.closest(".nav-arrow");
            const targetId = arrow.dataset.target;

            if (window.transitionManager && targetId) {
              const currentId =
                window.panoramaViewer.getCurrentId?.() || null;

              // 🔒 Lock arrow reposition
              if (window.navigationManager) {
                window.navigationManager.isLocked = true;
              }

              window.transitionManager.startTransition(currentId, targetId);

              // 🔓 Unlock after transition ends (~0.9s)
              setTimeout(() => {
                if (window.navigationManager) {
                  window.navigationManager.isLocked = false;
                  window.navigationManager.updateArrowPositions(
                    window.panoramaViewer.camera
                  );
                }
              }, 950);
            } else {
              arrow.click();
            }
          }
        }
      },
      { passive: true }
    );

    // Desktop clicks
    document.addEventListener("click", (e) => {
      const arrow = e.target.closest(".nav-arrow");
      if (arrow) {
        const targetId = arrow.dataset.target;
        if (window.transitionManager && targetId) {
          const currentId = window.panoramaViewer.getCurrentId?.() || null;

          // 🔒 Lock arrow reposition
          if (window.navigationManager) {
            window.navigationManager.isLocked = true;
          }

          window.transitionManager.startTransition(currentId, targetId);

          // 🔓 Unlock after transition ends (~0.9s)
          setTimeout(() => {
            if (window.navigationManager) {
              window.navigationManager.isLocked = false;
              window.navigationManager.updateArrowPositions(
                window.panoramaViewer.camera
              );
            }
          }, 950);

          e.preventDefault();
        }
      }
    });

    // Resize + orientation support
    window.addEventListener("resize", () => this.handleResize());
    window.addEventListener("orientationchange", () =>
      this.handleResize()
    );
  }

  handleResize() {
    setTimeout(() => {
      if (window.panoramaViewer) {
        window.panoramaViewer.onWindowResize();
      }
      if (window.navigationManager && !window.navigationManager.isLocked) {
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
