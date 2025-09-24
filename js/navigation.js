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

    // If navigation path is active, show only the next step
    if (window.navigationPath && window.navigationStep < window.navigationPath.length) {
      const nextId = window.navigationPath[window.navigationStep];
      allowed = connected.filter(c => (typeof c === "string" ? c : c.id) === nextId);
    }

    const total = allowed.length;
    allowed.forEach((conn, index) => {
      const panoObj = typeof conn === "string" ? getPanoramaById(conn) : conn;
      const arrow = this.createArrow(panoObj, index, total);

      // Highlight next navigation step
      if (window.navigationPath && window.navigationStep < window.navigationPath.length) {
        if (panoObj.id === window.navigationPath[window.navigationStep]) {
          arrow.classList.add("active-step");
        }
      }
    });

    if (window.panoramaViewer) {
      this.updateArrowPositions(window.panoramaViewer.camera);
    }
  }

  clearArrows() {
    this.arrows.forEach(a => {
      if (a.element && a.element.parentNode) a.element.parentNode.removeChild(a.element);
    });
    this.arrows = [];
  }

  createArrow(connectedPanorama, index, total) {
    const arrow = document.createElement('div');
    arrow.className = 'nav-arrow';
    arrow.style.position = 'absolute';
    arrow.title = `Go to ${connectedPanorama.name}`;

    const pano = getPanoramaById(this.currentPanoramaId);
    let iconHTML = `<i class="fa fa-arrow-right arrow-icon"></i>`; // default

    // Determine arrow icon
    if (window.navigationPath) {
      // Navigation active → special arrows or GPS
      if (pano?.arrowPositions?.[connectedPanorama.id]?.direction) {
        const dir = pano.arrowPositions[connectedPanorama.id].direction;
        iconHTML = `<img src="images/Arrows/Arrow-${dir}1.png" class="arrow-icon"/>`;
      }

      if (connectedPanorama.id === window.navigationPath[window.navigationPath.length - 1]) {
        iconHTML = `<img src="images/Arrows/gps.png" class="arrow-icon bounce" />`;
      }
    } else {
      // Free navigation → manual arrows
      if (pano?.arrowPositions?.[connectedPanorama.id]) {
        const manual = pano.arrowPositions[connectedPanorama.id];
        if (manual.directionIcon) {
          // custom icon
          if (manual.directionIcon.includes(".png") || manual.directionIcon.includes(".jpg")) {
            iconHTML = `<img src="${manual.directionIcon}" class="arrow-icon" />`;
          } else {
            iconHTML = `<i class="fa ${manual.directionIcon} arrow-icon"></i>`;
          }
        } else if (manual.direction) {
          const dir = manual.direction;
          iconHTML = `<img src="images/Arrows/Arrow-${dir}.png" class="arrow-icon" />`;
        }
      }
    }

    arrow.innerHTML = `<div class="arrow-content">${iconHTML}</div>`;

    // Compute position
    let theta = (index / total) * 2 * Math.PI;
    let phi = Math.PI / 2;
    if (pano?.arrowPositions?.[connectedPanorama.id]) {
      const manual = pano.arrowPositions[connectedPanorama.id];
      theta = manual.theta != null ? manual.theta : theta;
      phi = manual.phi != null ? manual.phi : phi;
    }

    const position = { phi, theta };
    this.arrows.push({ element: arrow, targetId: connectedPanorama.id, position });

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
      const vec = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.cos(phi),
        Math.sin(phi) * Math.sin(theta)
      );

      const screen = this.projectToScreen(vec, camera, w, h);
      const dot = vec.dot(cameraDir);

      if (dot < 0) {
        arrow.element.style.display = 'flex';
        arrow.element.style.left = `${screen.x - arrow.element.offsetWidth / 2}px`;
        arrow.element.style.top = `${screen.y - arrow.element.offsetHeight / 2}px`;
      } else {
        arrow.element.style.display = 'none';
      }
    });
  }

  projectToScreen(vector, camera, width, height) {
    const v = vector.clone().project(camera);
    return { x: (v.x * 0.5 + 0.5) * width, y: (-v.y * 0.5 + 0.5) * height };
  }

  navigateTo(panoramaId) {
    const fromId = this.currentPanoramaId;

    const onLoaded = (e) => {
      const loadedId = e?.detail?.id;
      if (!loadedId) return;

      const targetPano = getPanoramaById(loadedId);
      const sourcePano = getPanoramaById(fromId);

      let chosen = null;
      if (targetPano?.arrowPositions?.[fromId]) {
        chosen = targetPano.arrowPositions[fromId];
      } else if (sourcePano?.arrowPositions?.[loadedId]) {
        const a = sourcePano.arrowPositions[loadedId];
        chosen = { phi: a.phi, theta: a.theta + Math.PI };
      }

      if (chosen && window.panoramaViewer) {
        const lat = 60 - (chosen.phi * 180 / Math.PI);
        let lon = (chosen.theta * 180 / Math.PI);
        lon = ((lon % 360) + 360) % 360;
        window.panoramaViewer.lat = lat;
        window.panoramaViewer.lon = lon;
      }

      // Navigation path updates
      if (window.navigationPath) {
        if (loadedId === window.navigationPath[window.navigationStep]) {
          window.navigationStep++;
          const guide = document.getElementById("location-info");
          if (guide) {
            if (window.navigationStep < window.navigationPath.length) {
              const nextId = window.navigationPath[window.navigationStep];
              guide.querySelector("#location-description").innerText =
                window.navigationStep === window.navigationPath.length - 1
                  ? "🚩 Almost there... final step!"
                  : `Next: ${getPanoramaById(nextId).name}`;
            } else {
              guide.querySelector("#location-description").innerText =
                "✅ You’ve arrived at your destination!";
              const cancelBtn = document.getElementById("cancelNavBtn");
              if (cancelBtn) cancelBtn.style.display = "none";
              window.navigationPath = null;
            }
          }
          this.updateConnections(loadedId);
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

// Pathfinding & Navigation helpers
function findShortestPath(startId, targetId) {
  if (startId === targetId) return [startId];
  const visited = new Set();
  const queue = [[startId]];

  while (queue.length) {
    const path = queue.shift();
    const node = path[path.length - 1];
    if (node === targetId) return path;
    if (!visited.has(node)) {
      visited.add(node);
      const pano = getPanoramaById(node);
      if (pano?.connections) {
        pano.connections.forEach(n => { if (!visited.has(n)) queue.push([...path, n]); });
      }
    }
  }
  return null;
}

function startUserNavigation(targetId) {
  const startId = window.navigationManager.currentPanoramaId;
  const path = findShortestPath(startId, targetId);
  if (!path) return alert("No route found.");
  window.navigationPath = path;
  window.navigationStep = 1;

  const guide = document.getElementById("location-info");
  if (guide && path[1]) guide.querySelector("#location-description").innerText =
    `Next: ${getPanoramaById(path[1]).name}`;
  document.getElementById("cancelNavBtn").style.display = "block";
  window.navigationManager.updateConnections(startId);
}

function cancelNavigation() {
  window.navigationPath = null;
  window.navigationStep = 0;

  const guide = document.getElementById("location-info");
  if (guide) guide.querySelector("#location-description").innerText =
    "Navigation canceled. Free explore mode.";

  if (window.navigationManager?.currentPanoramaId)
    window.navigationManager.updateConnections(window.navigationManager.currentPanoramaId);

  const cancelBtn = document.getElementById("cancelNavBtn");
  if (cancelBtn) cancelBtn.style.display = "none";

  console.log("❌ Navigation canceled, back to free mode");
}

window.startUserNavigation = startUserNavigation;
window.cancelNavigation = cancelNavigation;
