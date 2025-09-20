class NavigationManager {
  constructor() {
    this.panoramaContainer = document.getElementById('panorama-container');
    this.arrows = [];
    this.currentPanoramaId = null;
  }
  
  updateConnections(panoramaId) {
    this.currentPanoramaId = panoramaId;
    this.clearArrows();
    const connected = getConnectedPanoramas(panoramaId);
    const total = connected.length;
    connected.forEach((conn, index) => {
      this.createArrow(conn, index, total);
    });
    if (window.panoramaViewer) {
      this.updateArrowPositions(window.panoramaViewer.camera);
    }
  }
  
  clearArrows() {
    this.arrows.forEach(arrow => {
      if (arrow.element && arrow.element.parentNode) {
        arrow.element.parentNode.removeChild(arrow.element);
      }
    });
    this.arrows = [];
  }
  
  createArrow(connectedPanorama, index, total) {
    const arrow = document.createElement('div');
    arrow.className = 'nav-arrow';
    
    // Determine icon / direction
    let iconClass = null;
    let manualDirection = null;
    const pano = getPanoramaById(this.currentPanoramaId);
    
    if (pano && pano.arrowPositions && pano.arrowPositions[connectedPanorama.id]) {
      const manual = pano.arrowPositions[connectedPanorama.id];
      if (manual.directionIcon) {
        iconClass = manual.directionIcon;
      } else if (manual.direction) {
        // map simple direction strings to icons
        switch(manual.direction) {
          case 'up': iconClass = 'images/Arrows/Arrow-up.png'; break;
          case 'down': iconClass = 'images/Arrows/Arrow-down.png'; break;
          case 'left': iconClass = 'images/Arrows/left.png'; break;
          case 'right': iconClass = 'images/Arrows/Arrow-right.png'; break; 
          default: iconClass = null;
        }
      }
    }
    
    // If no manual icon given, use default logic
    if (!iconClass) {
      if (connectedPanorama.id === 'stairs') {
        iconClass = 'fa-arrow-up';
      } else {
        const directions = ['fa-arrow-up', 'fa-arrow-right', 'fa-arrow-down', 'fa-arrow-left'];
        const directionIndex = Math.floor((index / total) * directions.length);
        iconClass = directions[ directionIndex ];
      }
    }
    
    arrow.innerHTML = `
      <div class="arrow-content">
        <img src="${iconClass}" alt="Arrow" class="arrow-icon" />
        <div class="arrow-label">${connectedPanorama.name}</div>   
        </div>
    `;
    arrow.title = `Go to ${connectedPanorama.name}`;
    arrow.style.position = 'absolute';
    
    // Manual or auto spherical position
    let theta, phi;
    if (pano && pano.arrowPositions && pano.arrowPositions[connectedPanorama.id]) {
      const manual = pano.arrowPositions[connectedPanorama.id];
      theta = (manual.theta != null) ? manual.theta : (index / total) * 2 * Math.PI;
      phi   = (manual.phi   != null) ? manual.phi   : Math.PI / 2;
    } else {
      theta = (index / total) * 2 * Math.PI;
      phi = Math.PI / 2;
    }
    
    const position = { phi, theta };
    
    const arrowData = {
      element: arrow,
      targetId: connectedPanorama.id,
      position: position
    };
    
    this.arrows.push(arrowData);
    
    arrow.addEventListener('click', () => {
      this.navigateTo(connectedPanorama.id);
    });
    arrow.addEventListener('mouseenter', () => {
      arrow.style.transform = 'scale(1.2)';
    });
    arrow.addEventListener('mouseleave', () => {
      arrow.style.transform = 'scale(1)';
    });
    
    this.panoramaContainer.appendChild(arrow);
  }
  
  updateArrowPositions(camera) {
    if (!camera) return;
    const w = this.panoramaContainer.clientWidth;
    const h = this.panoramaContainer.clientHeight;
    const cameraDir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    
    this.arrows.forEach(arrow => {
      const { phi, theta } = arrow.position;
      const x3 = Math.sin(phi) * Math.cos(theta);
      const y3 = Math.cos(phi);
      const z3 = Math.sin(phi) * Math.sin(theta);
      const arrowVec = new THREE.Vector3(x3, y3, z3);
      
      const screenPos = this.projectToScreen(arrowVec, camera, w, h);
      const dot = arrowVec.dot(cameraDir);
      
      if (dot < 0) {
        arrow.element.style.display = 'flex';
        // optionally adjust anchor
        const arrowWidth = arrow.element.offsetWidth;
        const arrowHeight = arrow.element.offsetHeight;
        arrow.element.style.left = `${screenPos.x - arrowWidth/2}px`;
        arrow.element.style.top = `${screenPos.y - arrowHeight/2}px`;
      } else {
        arrow.element.style.display = 'none';
      }
    });
  }
  
  projectToScreen(vector, camera, width, height) {
    const vec = vector.clone();
    vec.project(camera);
    const x = (vec.x * 0.5 + 0.5) * width;
    const y = (-vec.y * 0.5 + 0.5) * height;
    return { x, y };
  }
  
  navigateTo(panoramaId) {
    if (window.panoramaViewer) {
      if (window.transitionManager) {
        window.transitionManager.startTransition(this.currentPanoramaId, panoramaId);
      } else {
        window.panoramaViewer.loadPanorama(panoramaId);
      }
    }
  }
}
