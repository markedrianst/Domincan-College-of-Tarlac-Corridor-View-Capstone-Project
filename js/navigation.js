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

  let iconClass = null;
  const pano = getPanoramaById(this.currentPanoramaId);

  if (pano && pano.arrowPositions && pano.arrowPositions[connectedPanorama.id]) {
    const manual = pano.arrowPositions[connectedPanorama.id];
    if (manual.directionIcon) {
      iconClass = manual.directionIcon;
    } else if (manual.direction) {
      switch(manual.direction) {
        case 'up': iconClass = 'images/Arrows/Arrow-up.png'; break;
        case 'down': iconClass = 'images/Arrows/Arrow-down.png'; break;
        case 'left': iconClass = 'images/Arrows/left.png'; break;
        case 'right': iconClass = 'images/Arrows/Arrow-right.png'; break; 
        default: iconClass = 'fa-arrow-right';
      }
    }
  }

  if (!iconClass) {
    iconClass = 'fa-arrow-right';
  }

  // ✅ Detect if it's an image or icon
  let iconHTML;
  if (iconClass.includes('.png') || iconClass.includes('.jpg')) {
    iconHTML = `<img src="${iconClass}" alt="Arrow" class="arrow-icon" />`;
  } else {
    iconHTML = `<i class="fa ${iconClass} arrow-icon"></i>`;
  }

  arrow.innerHTML = `
    <div class="arrow-content">
      ${iconHTML}
     
    </div>
  `;
   // <div class="arrow-label">${connectedPanorama.name}</div>
  arrow.title = `Go to ${connectedPanorama.name}`;
  arrow.style.position = 'absolute';

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

  // ✅ Click + touch for mobile
  arrow.addEventListener('click', () => this.navigateTo(connectedPanorama.id));
  arrow.addEventListener('touchstart', () => this.navigateTo(connectedPanorama.id));

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
  const fromId = this.currentPanoramaId; // pano kung saan ka galing

  // one-time listener: ia-apply ang facing pagkatapos ma-load ang bagong panorama
  const onLoaded = (e) => {
    const loadedId = e?.detail?.id;
    if (!loadedId) return;

    const targetPano = getPanoramaById(loadedId);
    const sourcePano = getPanoramaById(fromId);

    // Prefer: use the arrow in the TARGET that points back to the SOURCE
    let chosen = null;
    if (targetPano?.arrowPositions?.[fromId]) {
      chosen = targetPano.arrowPositions[fromId]; // already in target's frame — best
    } else if (sourcePano?.arrowPositions?.[loadedId]) {
      // Fallback: invert the source->target arrow (opposite direction on sphere)
      const a = sourcePano.arrowPositions[loadedId];
      chosen = { phi: a.phi, theta: (a.theta + Math.PI) }; // add PI to flip direction
    }

    if (chosen && window.panoramaViewer) {
      // convert radians -> degrees for viewer.lat/lon
      const latDeg = 60 - (chosen.phi * 180 / Math.PI);
      let lonDeg = (chosen.theta * 180 / Math.PI);

      // normalize lon to 0..360 (optional, keeps values tidy)
      lonDeg = ((lonDeg % 360) + 360) % 360;

      // apply facing
      window.panoramaViewer.lat = latDeg;
      window.panoramaViewer.lon = lonDeg;

      // DEBUG (optional) — uncomment while testing:
      // console.log('Facing set on load:', { fromId, loadedId, phi: chosen.phi, theta: chosen.theta, latDeg, lonDeg });
    }
  };

  window.addEventListener('panoramaLoaded', onLoaded, { once: true });

  // Keep your existing navigation logic (transition or direct load)
  if (window.panoramaViewer) {
    if (window.transitionManager) {
      window.transitionManager.startTransition(this.currentPanoramaId, panoramaId);
    } else {
      window.panoramaViewer.loadPanorama(panoramaId);
    }
  }
}



}
