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
    let allowed = connected;

    // 🚦 If navigation is active, only show the NEXT step in the path
    if (window.navigationPath && window.navigationStep < window.navigationPath.length) {
      const nextId = window.navigationPath[window.navigationStep];
      allowed = connected.filter(c => {
        const id = (typeof c === "string") ? c : c.id;
        return id === nextId;
      });
    }

    const total = allowed.length;
    allowed.forEach((conn, index) => {
      const panoObj = (typeof conn === "string") ? getPanoramaById(conn) : conn;
      const arrow = this.createArrow(panoObj, index, total);

      // ⭐ Highlight if it's the next navigation step
      if (window.navigationPath && window.navigationStep < window.navigationPath.length) {
        const nextId = window.navigationPath[window.navigationStep];
        if (panoObj.id === nextId) {
          arrow.classList.add("active-step");
        }
      }
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

  let iconHTML;
  const pano = getPanoramaById(this.currentPanoramaId);

  // ✅ If navigation (search) is active → use special nav arrow images
  if (window.navigationPath) {
    if (pano && pano.arrowPositions && pano.arrowPositions[connectedPanorama.id]) {
      const manual = pano.arrowPositions[connectedPanorama.id];
      if (manual.direction) {
        switch (manual.direction) {
          case 'up':    
            iconHTML = `<img src="images/Arrows/Arrow-up1.png" class="arrow-icon" />`; 
            break;
          case 'down':  
            iconHTML = `<img src="images/Arrows/Arrow-down1.png" class="arrow-icon" />`; 
            break;
          case 'left':  
            iconHTML = `<img src="images/Arrows/Arrow-left1.png" class="arrow-icon" />`; 
            break;
          case 'right': 
            iconHTML = `<img src="images/Arrows/Arrow-right1.png" class="arrow-icon" />`; 
            break;
          default:      
            iconHTML = `<img src="images/Arrows/Arrow-up.png" class="arrow-icon" />`; 
        }
      }
    }

    // 🎌 If this is the final destination → GPS/location pin
    if (
      window.navigationStep < window.navigationPath.length &&
      connectedPanorama.id === window.navigationPath[window.navigationPath.length - 1]
    ) {
iconHTML = `<img src="images/Arrows/gps.png" class="arrow-icon bounce" />`;
    }

  } else {
    // 🟢 Free navigation → use normal arrows
    if (pano && pano.arrowPositions && pano.arrowPositions[connectedPanorama.id]) {
      const manual = pano.arrowPositions[connectedPanorama.id];
      if (manual.direction) {
        switch (manual.direction) {
          case 'up':    
            iconHTML = `<img src="images/Arrows/Arrow-up.png" class="arrow-icon" />`; 
            break;
          case 'down':  
            iconHTML = `<img src="images/Arrows/Arrow-down.png" class="arrow-icon" />`; 
            break;
          case 'left':  
            iconHTML = `<img src="images/Arrows/Arrow-left.png" class="arrow-icon" />`; 
            break;
          case 'right': 
            iconHTML = `<img src="images/Arrows/Arrow-right.png" class="arrow-icon" />`; 
            break;
          default:      
            iconHTML = `<i class="fa fa-arrow-right arrow-icon"></i>`; 
        }
      }
    }
  }

  arrow.innerHTML = `
    <div class="arrow-content">
      ${iconHTML}
    </div>
  `;
  arrow.title = `Go to ${connectedPanorama.name}`;
  arrow.style.position = 'absolute';

  // position logic stays the same...
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

  arrow.addEventListener('click', () => this.navigateTo(connectedPanorama.id));
  arrow.addEventListener('touchstart', () => this.navigateTo(connectedPanorama.id));

  this.panoramaContainer.appendChild(arrow);
  return arrow;
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
  const fromId = this.currentPanoramaId;
  const onLoaded = (e) => {
    const loadedId = e?.detail?.id;
    if (!loadedId) return;

    if (window.navigationPath) {
      const expectedId = window.navigationPath[window.navigationStep];
      if (loadedId === expectedId) {
        window.navigationStep++;

        const guideBox = document.getElementById("location-info");
        if (guideBox) {
          if (window.navigationStep < window.navigationPath.length) {
            const nextId = window.navigationPath[window.navigationStep];
            if (window.navigationStep === window.navigationPath.length - 1) {
              guideBox.querySelector("#location-description").innerText =
                "🚩 Almost there... final step!";
            } else {
              guideBox.querySelector("#location-description").innerText =
                `Next: ${getPanoramaById(nextId).name}`;
            }
          } else {
            guideBox.querySelector("#location-description").innerText =
              "✅ You’ve arrived at your destination!";

            // ✅ Hide cancel button when destination reached
            const cancelBtn = document.getElementById("cancelNavBtn");
            if (cancelBtn) cancelBtn.style.display = "none";

            window.navigationPath = null; // unlock free navigation
          }
        }

        // Refresh arrows for the newly loaded panorama
        window.navigationManager.updateConnections(loadedId);
      }
    }
  };

  window.addEventListener('panoramaLoaded', onLoaded, { once: true });

  if (window.panoramaViewer) {
    if (window.transitionManager) {
      window.transitionManager.startTransition(this.currentPanoramaId, panoramaId);
    } else {
      window.panoramaViewer.loadPanorama(panoramaId);
    }
  }
}

}

// === Pathfinding (BFS shortest path) ===
function findShortestPath(startId, targetId) {
  if (startId === targetId) return [startId];
  const visited = new Set();
  const queue = [[startId]];

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];
    if (node === targetId) return path;

    if (!visited.has(node)) {
      visited.add(node);
      const pano = getPanoramaById(node);
      if (pano && pano.connections) {
        pano.connections.forEach(neigh => {
          if (!visited.has(neigh)) {
            queue.push([...path, neigh]);
          }
        });
      }
    }
  }
  return null;
}

// === Start user navigation ===
// === Start user navigation ===
function startUserNavigation(targetId) {
  const startId = window.navigationManager.currentPanoramaId;
  const path = findShortestPath(startId, targetId);
  if (!path) {
    alert("No route found.");
    return;
  }

  console.log("Navigation path:", path);
  window.navigationPath = path;
  window.navigationStep = 1;

  const guideBox = document.getElementById("location-info");
  if (guideBox && path[1]) {
    guideBox.querySelector("#location-description").innerText =
      `Next: ${getPanoramaById(path[1]).name}`;
  }

  // 🔄 Refresh arrows for current pano
  window.navigationManager.updateConnections(startId);

  // 👀 Show Cancel button
  document.getElementById("cancelNavBtn").style.display = "block";
}

// === Cancel navigation ===
function cancelNavigation() {
  window.navigationPath = null;
  window.navigationStep = 0;

  const guideBox = document.getElementById("location-info");
  if (guideBox) {
    guideBox.querySelector("#location-description").innerText =
      "Navigation canceled. Free explore mode.";
  }

  // 🔄 Refresh arrows for current panorama
  if (window.navigationManager && window.navigationManager.currentPanoramaId) {
    window.navigationManager.updateConnections(window.navigationManager.currentPanoramaId);
  }

  // 👀 Hide Cancel button
  document.getElementById("cancelNavBtn").style.display = "none";

  console.log("❌ Navigation canceled, back to free mode");
}

window.startUserNavigation = startUserNavigation;
window.cancelNavigation = cancelNavigation;


