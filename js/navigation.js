class NavigationManager {
  constructor() {
    this.panoramaContainer = document.getElementById('panorama-container');
    this.arrows = [];
    this.currentPanoramaId = null;
    this.isUpdating = false;
  }

  updateConnections(panoramaId) {
    // Prevent concurrent updates
    if (this.isUpdating) {
      return;
    }
    
    this.isUpdating = true;
    this.currentPanoramaId = panoramaId;
    
    requestAnimationFrame(() => {
      try {
        this.clearArrows();

        const connected = getConnectedPanoramas(panoramaId);
        let allowed = connected;

        // If navigation path is active, show only the next step
        if (window.navigationPath && window.navigationStep < window.navigationPath.length) {
          const nextId = window.navigationPath[window.navigationStep];
          allowed = connected.filter(c => {
            const id = typeof c === "string" ? c : c.id;
            return id === nextId;
          });
        }

        // FALLBACK: In navigation mode, ensure we always show the next step
        if (window.navigationPath && allowed.length === 0 && window.navigationStep < window.navigationPath.length) {
          const nextId = window.navigationPath[window.navigationStep];
          const nextPano = getPanoramaById(nextId);
          if (nextPano) {
            console.log("Using fallback for navigation step:", nextId);
            allowed = [nextPano];
          }
        }

        const total = allowed.length;
        
        allowed.forEach((conn, index) => {
          try {
            const panoObj = typeof conn === "string" ? getPanoramaById(conn) : conn;
            if (!panoObj) {
              console.error("Could not find panorama object for:", conn);
              return;
            }
            
            const arrow = this.createArrow(panoObj, index, total);

            // Highlight next navigation step
            if (window.navigationPath && window.navigationStep < window.navigationPath.length) {
              if (panoObj.id === window.navigationPath[window.navigationStep]) {
                arrow.classList.add("active-step");
              }
            }
          } catch (error) {
            console.error("Error creating arrow:", error);
          }
        });

        if (window.panoramaViewer) {
          this.updateArrowPositions(window.panoramaViewer.camera);
        }
      } catch (error) {
        console.error("Error in updateConnections:", error);
      } finally {
        this.isUpdating = false;
      }
    });
  }

  clearArrows() {
    this.arrows.forEach(arrow => {
      try {
        if (arrow.element && arrow.element.parentNode) {
          arrow.element.parentNode.removeChild(arrow.element);
        }
      } catch (error) {
        console.error("Error clearing arrow:", error);
      }
    });
    this.arrows = [];
  }

  createArrow(connectedPanorama, index, total) {
    const arrow = document.createElement('div');
    arrow.className = 'nav-arrow';
    arrow.style.position = 'absolute';
    arrow.title = `Go to ${connectedPanorama.name}`;
    arrow.style.display = 'flex';
    arrow.style.zIndex = '1000';
    arrow.style.pointerEvents = 'auto';

    const pano = getPanoramaById(this.currentPanoramaId);
    let iconHTML = `<i class="fa fa-arrow-right arrow-icon"></i>`;

    try {
      // Determine arrow icon
      if (window.navigationPath) {
        // Navigation active → special arrows or GPS
        if (pano?.arrowPositions?.[connectedPanorama.id]?.direction) {
          const dir = pano.arrowPositions[connectedPanorama.id].direction;
          iconHTML = `<img src="images/Arrows/Arrow-${dir}1.png" class="arrow-icon" alt="Navigation arrow"/>`;
        }

        // Final destination gets GPS icon
        if (connectedPanorama.id === window.navigationPath[window.navigationPath.length - 1]) {
          iconHTML = `<img src="images/Arrows/gps.png" class="arrow-icon bounce" alt="Destination" />`;
        }
      } else {
        // Free navigation → manual arrows
        if (pano?.arrowPositions?.[connectedPanorama.id]) {
          const manual = pano.arrowPositions[connectedPanorama.id];
          if (manual.directionIcon) {
            if (manual.directionIcon.includes(".png") || manual.directionIcon.includes(".jpg")) {
              iconHTML = `<img src="${manual.directionIcon}" class="arrow-icon" alt="Direction arrow"/>`;
            } else {
              iconHTML = `<i class="fa ${manual.directionIcon} arrow-icon"></i>`;
            }
          } else if (manual.direction) {
            const dir = manual.direction;
            iconHTML = `<img src="images/Arrows/Arrow-${dir}.png" class="arrow-icon" alt="Direction arrow"/>`;
          }
        }
      }
    } catch (error) {
      console.error("Error setting arrow icon:", error);
    }

    arrow.innerHTML = `<div class="arrow-content">${iconHTML}</div>`;

    // Compute position
    let theta = (index / total) * 2 * Math.PI;
    let phi = Math.PI / 2;
    
    try {
      if (pano?.arrowPositions?.[connectedPanorama.id]) {
        const manual = pano.arrowPositions[connectedPanorama.id];
        theta = manual.theta != null ? manual.theta : theta;
        phi = manual.phi != null ? manual.phi : phi;
      }
    } catch (error) {
      console.error("Error computing arrow position:", error);
    }

    const position = { phi, theta };
    this.arrows.push({ element: arrow, targetId: connectedPanorama.id, position });

    // Add click and touch events
    const navigateHandler = () => {
      if (window.navigationPath) {
        arrow.style.pointerEvents = 'none';
        setTimeout(() => {
          if (arrow.parentNode) {
            arrow.style.pointerEvents = 'auto';
          }
        }, 1000); // Increased timeout to prevent rapid clicks
      }
      this.navigateTo(connectedPanorama.id);
    };

    arrow.addEventListener('click', navigateHandler);
    arrow.addEventListener('touchstart', navigateHandler, { passive: true });

    this.panoramaContainer.appendChild(arrow);
    return arrow;
  }

  updateArrowPositions(camera) {
    if (!camera || !this.panoramaContainer) return;
    
    const w = this.panoramaContainer.clientWidth;
    const h = this.panoramaContainer.clientHeight;
    const cameraDir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);

    this.arrows.forEach(arrow => {
      if (!arrow.element) return;
      
      try {
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
      } catch (error) {
        console.error("Error updating arrow position:", error);
      }
    });
  }

  projectToScreen(vector, camera, width, height) {
    const v = vector.clone().project(camera);
    return { 
      x: (v.x * 0.5 + 0.5) * width, 
      y: (-v.y * 0.5 + 0.5) * height 
    };
  }

  navigateTo(panoramaId) {
    const fromId = this.currentPanoramaId;
    
    // Early validation
    if (!panoramaId) {
      console.error("Invalid panoramaId:", panoramaId);
      return;
    }

    const onLoaded = (e) => {
      const loadedId = e?.detail?.id;
      if (!loadedId) return;

      try {
        const targetPano = getPanoramaById(loadedId);
        
        if (window.panoramaViewer) {
          let lat = null, lon = null;

          if (targetPano?.defaultView) {
            lat = 50 - (targetPano.defaultView.phi * 180 / Math.PI);
            lon = (targetPano.defaultView.theta * 180 / Math.PI);
          } else if (targetPano?.arrowPositions?.[fromId]) {
            const back = targetPano.arrowPositions[fromId];
            lat = 50 - (back.phi * 180 / Math.PI);
            lon = (back.theta * 180 / Math.PI);
          }

          if (lat !== null && lon !== null) {
            lon = ((lon % 360) + 360) % 360;
            setTimeout(() => {
              if (window.panoramaViewer) {
                window.panoramaViewer.lat = lat;
                window.panoramaViewer.lon = lon;
              }
            }, 150);
          }
        }

        // Navigation path updates
        if (window.navigationPath) {
          if (loadedId === window.navigationPath[window.navigationStep]) {
            window.navigationStep++;
            
            const guide = document.getElementById("location-info");
            if (guide) {
              const descriptionEl = guide.querySelector("#location-description");
              if (descriptionEl) {
                if (window.navigationStep < window.navigationPath.length) {
                  const nextId = window.navigationPath[window.navigationStep];
                  const nextPano = getPanoramaById(nextId);
                  descriptionEl.innerText = window.navigationStep === window.navigationPath.length - 1
                    ? "🚩 Almost there... final step!"
                    : `Next: ${nextPano?.name || 'Unknown location'}`;
                } else {
                  descriptionEl.innerText = "✅ You've arrived at your destination!";
                  const cancelBtn = document.getElementById("cancelNavBtn");
                  if (cancelBtn) cancelBtn.style.display = "none";
                  window.navigationPath = null;
                }
              }
            }
            this.updateConnections(loadedId);
          }
        }
      } catch (error) {
        console.error("Error in panorama loaded handler:", error);
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
        pano.connections.forEach(nextId => {
          if (!visited.has(nextId)) {
            queue.push([...path, nextId]);
          }
        });
      }
    }
  }
  
  return null;
}

function startUserNavigation(targetId) {
  if (!targetId) {
    alert("Invalid destination");
    return;
  }

  const startId = window.navigationManager?.currentPanoramaId;
  if (!startId) {
    alert("Cannot determine current location");
    return;
  }

  const path = findShortestPath(startId, targetId);
  if (!path || path.length < 2) {
    alert("No route found to destination");
    return;
  }

  window.navigationPath = path;
  window.navigationStep = 1;

  const guide = document.getElementById("location-info");
  if (guide) {
    const descriptionEl = guide.querySelector("#location-description");
    if (descriptionEl && path[1]) {
      const nextPano = getPanoramaById(path[1]);
      descriptionEl.innerText = `Next: ${nextPano?.name || 'Unknown location'}`;
    }
  }

  const cancelBtn = document.getElementById("cancelNavBtn");
  if (cancelBtn) cancelBtn.style.display = "block";
  
  if (window.navigationManager) {
    window.navigationManager.updateConnections(startId);
  }
}

function cancelNavigation() {
  window.navigationPath = null;
  window.navigationStep = 0;

  const guide = document.getElementById("location-info");
  if (guide) {
    const descriptionEl = guide.querySelector("#location-description");
    if (descriptionEl) {
      descriptionEl.innerText = "Navigation canceled. Free explore mode.";
    }
  }

  const cancelBtn = document.getElementById("cancelNavBtn");
  if (cancelBtn) cancelBtn.style.display = "none";

  // Update connections to show all arrows
  if (window.navigationManager?.currentPanoramaId) {
    window.navigationManager.updateConnections(window.navigationManager.currentPanoramaId);
  }

  console.log("❌ Navigation canceled, back to free mode");
}

// Make functions globally available
window.startUserNavigation = startUserNavigation;
window.cancelNavigation = cancelNavigation;