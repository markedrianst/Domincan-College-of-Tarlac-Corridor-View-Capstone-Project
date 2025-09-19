// Merge all category arrays into one dataset
const panoramaData = [
  ...entrancePanoramas,
  ...sdGroundFloor,
  ...sd2ndFloor,
  ...sd3rdFloor,
  ...sd4thfloor

  // add other files here
];
/**
 * Helper function to get panorama data by ID
 * @param {string} id - The panorama ID to find
 * @returns {Object|null} - The panorama data object or null if not found
 */
function getPanoramaById(id) {
    return panoramaData.find(panorama => panorama.id === id) || null;
}

/**
 * Helper function to get all panoramas matching a search term
 * @param {string} searchTerm - The search term to match against name or description
 * @returns {Array} - Array of matching panorama objects
 */
function searchPanoramas(searchTerm) {
    if (!searchTerm) return [];
    
    const term = searchTerm.toLowerCase();
    return panoramaData.filter(panorama => 
        panorama.name.toLowerCase().includes(term) || 
        panorama.description.toLowerCase().includes(term)
    );
}

/**
 * Helper function to get connected panoramas for a given panorama ID
 * @param {string} id - The panorama ID to find connections for
 * @returns {Array} - Array of connected panorama objects
 */
function getConnectedPanoramas(id) {
    const panorama = getPanoramaById(id);
    if (!panorama) return [];
    
    return panorama.connections.map(connId => getPanoramaById(connId)).filter(Boolean);
}
