// ========================
// NavigationManager.js
// ========================
class NavigationManager {
  constructor() {
    this.panoramaContainer = document.getElementById('panorama-container');
    this.arrows = [];
    this.arrowPool = []; // Reuse DOM arrows
    this.currentPanoramaId = null;
  }

  updateConnections(panoramaId) {
    this.currentPanoramaId = panoramaId;
    const connected = getConnectedPanoramas(panoramaId);
    this.clearArrows();
    connected.forEach((conn, index) => {
      this.createArrow(conn, index, connected.length);
    });
  }

  clearArrows() {
    this.arrows.forEach(arrow => arrow.element.style.display = 'none');
    this.arrows = [];
  }

  createArrow(connectedPanorama, index, total) {
    let arrow;
    if (this.arrowPool.length > 0) {
      arrow = this.arrowPool.pop();
    } else {
      arrow = document.createElement('div');
      arrow.className = 'nav-arrow';
      this.panoramaContainer.appendChild(arrow);
    }

    const pano = getPanoramaById(this.currentPanoramaId);
    let iconClass = 'images/Arrows/Arrow-right.png'; // Default icon
    if (pano && pano.arrowPositions && pano.arrowPositions[connectedPanorama.id]) {
      const manual = pano.arrowPositions[connectedPanorama.id];
      if (manual.direction) {
        switch(manual.direction) {
          case 'up': iconClass = 'images/Arrows/Arrow-up.png'; break;
          case 'down': iconClass = 'images/Arrows/Arrow-down.png'; break;
          case 'left': iconClass = 'images/Arrows/left.png'; break;
          case 'right': iconClass = 'images/Arrows/Arrow-right.png'; break; // fixed spelling
        }
      }
    }

    arrow.innerHTML = `
      <div class="arrow-content">
        <img src="${iconClass}" alt="Arrow" class="arrow-icon" />
        <div class="arrow-label">${connectedPanorama.name}</div>   
        </div>
    `;
    
  

    arrow.style.display = 'flex';

    // 🔗 Use transition manager if available
    arrow.onclick = () => this.navigateTo(connectedPanorama.id);

    const position = pano && pano.arrowPositions && pano.arrowPositions[connectedPanorama.id]
      ? { phi: pano.arrowPositions[connectedPanorama.id].phi, theta: pano.arrowPositions[connectedPanorama.id].theta }
      : { phi: Math.PI/2, theta: (index / total) * 2 * Math.PI };

    this.arrows.push({ element: arrow, targetId: connectedPanorama.id, position });
  }

  updateArrowPositions(camera) {
    const w = this.panoramaContainer.clientWidth;
    const h = this.panoramaContainer.clientHeight;
    const cameraDir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);

    this.arrows.forEach(arrow => {
      const { phi, theta } = arrow.position;
      const x3 = Math.sin(phi) * Math.cos(theta);
      const y3 = Math.cos(phi);
      const z3 = Math.sin(phi) * Math.sin(theta);
      const arrowVec = new THREE.Vector3(x3, y3, z3);
      const vec = arrowVec.clone().project(camera);
      const x = (vec.x * 0.5 + 0.5) * w;
      const y = (-vec.y * 0.5 + 0.5) * h;

      if (arrowVec.dot(cameraDir) < 0) {
        arrow.element.style.left = `${x - arrow.element.offsetWidth/2}px`;
        arrow.element.style.top = `${y - arrow.element.offsetHeight/2}px`;
        arrow.element.style.display = 'flex';
      } else {
        arrow.element.style.display = 'none';
      }
    });
  }

  navigateTo(panoramaId) {
    if (window.transitionManager) {
      window.transitionManager.startTransition(this.currentPanoramaId, panoramaId);
    } else {
      window.panoramaViewer.loadPanorama(panoramaId);
    }
  }
}
