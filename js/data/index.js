// Merge all category arrays into one dataset
const panoramaData = [
  ...entrancePanoramas,
  // SD BUILDING
  ...sdGroundFloor,
  ...sd2ndfloor,
  ...sd3rdFloor,
  ...sd4thfloor,
//   // SCS BUILDING
  ...scsfirstfloor,
  ...scssecondfloor,
  ...scsthirdfloor,
  ...scsfourthfloor,
...scs1stfloor_parking,
//  // OLF BUILDING
  ...olfbldg,
  ...olf2ndbldg,
  ...olf3rdbldg,
  ...olf4thbldg,
  ...sdtoolfbldg,

//   // HR BUILDING
...hr1stfloor,
...hr4thfloor,
...hr3rdfloor,
...hr2ndfloor,
 
//     // SN BUILDING
...snfirstfloor,
...snsecondfloor,

//     // SLR BUILDING
//     ...slrfirstfloor,
//     ...slrsecondfloor,
//     ...slrthirdfloor,
//     ...slrfourthfloor,

//     ...olp4thfloor,
//     ...olp3rdfloor,
//     ...olp1stfloor,
//    ...olp2ndfloor
//   // add other files here
];

/**
 * Build a quick lookup map for panoramas by ID (faster than .find())
 */
const panoramaMap = {};
panoramaData.forEach(pano => {
    panoramaMap[pano.id] = {
        ...pano,
        _preloadedTexture: null, // ✅ reserved for cached texture
        _searchCache: (pano.name + " " + pano.description).toLowerCase() // ✅ pre-index for faster search
    };
});

/**
 * Helper function to get panorama data by ID
 * @param {string} id - The panorama ID to find
 * @returns {Object|null} - The panorama data object or null if not found
 */
function getPanoramaById(id) {
    return panoramaMap[id] || null;
}

/**
 * Helper function to get all panoramas matching a search term
 * @param {string} searchTerm - The search term to match against name or description
 * @returns {Array} - Array of matching panorama objects
 */
function searchPanoramas(searchTerm) {
    if (!searchTerm) return [];

    const term = searchTerm.toLowerCase();
    return Object.values(panoramaMap).filter(panorama =>
        panorama._searchCache.includes(term)
    );
}

/**
 * Helper function to get connected panoramas for a given panorama ID
 * @param {string} id - The panorama ID to find connections for
 * @returns {Array} - Array of connected panorama objects
 */
function getConnectedPanoramas(id) {
    const panorama = getPanoramaById(id);
    if (!panorama || !Array.isArray(panorama.connections)) return [];

    return panorama.connections
        .map(connId => getPanoramaById(connId))
        .filter(Boolean);
}
