/**
 * Data structure for panorama locations and their connections
 */
const panoramaData = [
    {
        id: 'entrance',
        name: 'Main Entrance',
        description: 'Domimicam College of Tarlac Main Entrance',
        imageUrl: 'images/GateEntrancee.jpg',
        category: ['entrance'],
        connections: ['hallway1'],
        arrowPositions: {
            'hallway1': { phi: Math.PI / 2, theta: Math.PI * 1.75,direction: 'forward' } // Forward
        }
    },
    {
        id: 'hallway1',
        name: 'Access in SD and SCS bldg.',
        description: 'Connects entrance to classrooms', 
        imageUrl: 'images/sd1st1.jpg',
        category: ['SD bldg.', 'SCS bldg.'],
        connections: ['classroom101', 'entrance', 'stairs'],
        arrowPositions: {
            'classroom101': { phi: Math.PI / 2, theta: Math.PI * 2 }, // Right
            'entrance': { phi: Math.PI / 2, theta: Math.PI * 0.85,direction: 'up' }, // Back
            'stairs': { phi: Math.PI / 2, theta: Math.PI * 1.5 } // Up-left
        }
    },
    {
        id: 'classroom101',
        name: 'Sd 102 to 103',
        description: 'a',
        imageUrl: 'images/sd1st2.jpg',
        category: 'classroom',
        connections: ['hallway1', 'classroom102'],
        arrowPositions: {
        'classroom102': { phi: Math.PI / 2, theta: Math.PI * 2,direction:'up' }, // Right
        'hallway1': { phi: Math.PI / 2, theta: Math.PI * 0.85,direction: 'up' }, // Back
        }
    },

    {
        id: 'classroom102',
        name: 'b',
        description: 'b',
        imageUrl: 'images/SDFirstfloor(3).jpg',
        category: 'classroom',
        connections: ['classroom101', 'classroom103'],
        arrowPositions: { 
           'classroom103': { phi: Math.PI / 2, theta: Math.PI * 2,direction:'up' }, // Right
            'classroom101': { phi: Math.PI / 2, theta: Math.PI * 0.85,direction: 'up' }, // Back
        
        }
    },
    {
        id: 'classroom103',
        name: 'c',
        description: 'c',
        imageUrl: 'images/SDFirstfloor(4).jpg',
        category: 'classroom',
        connections: ['classroom102', 'classroom104'],
        arrowPositions: {
            'classroom104': { phi: Math.PI / 2, theta: Math.PI * 2,direction:'up' }, // Right
            'classroom102': { phi: Math.PI / 2, theta: Math.PI * 0.85,direction: 'up' }//Right
        }
    },

        {
        id: 'classroom104',
        name: 'd',
        description: 'd',
        imageUrl: 'images/SDFirstfloor(5).jpg',
        category: 'classroom',
        connections: ['classroom103', 'classroom105'],
        arrowPositions: {
            'classroom105': { phi: Math.PI / 2, theta: Math.PI * 2,direction:'up' }, // Right
            'classroom103': { phi: Math.PI / 2, theta: Math.PI * 0.85,direction: 'up' }//Right
        }
    },
        {
        id: 'classroom105',
        name: 'e',
        description: 'e',
        imageUrl: 'images/SDFirstfloor(6).jpg',
        category: 'classroom',
        connections: ['classroom104','classroom106'],
        arrowPositions: {
            'classroom106': { phi: Math.PI / 2, theta: Math.PI * 2,direction:'up' }, // Right
            'classroom104': { phi: Math.PI / 2, theta: Math.PI * 0.85,direction: 'up' }//Right
        }
    },
       {
        id: 'classroom106',
        name: 'nakdn',
        description: 'dmand',
        imageUrl: 'images/SDFirstfloor(7).jpg',
        category: 'classroom',
        connections: [ 'classroom105'],
        arrowPositions: {
            'classroom105': { phi: Math.PI / 2, theta: Math.PI * 0.85,direction:'up' }// Right        }
    }
},


    //SD 2ND FLOOR
    {
        id: 'stairs',
        name: 'Staircase',
        description: 'Staircase leading to the second floor',
        imageUrl: 'images/CornerStairs2ndfloorSD.jpg',
        category: 'stairs',
        connections: ['2ndFloorSD', 'hallway1'],
        arrowPositions: {
            '2ndFloorSD': { phi: Math.PI / 4, theta: 0 }, // Up-forward
            'hallway1': { phi: Math.PI / 2, theta: Math.PI * 0.5 } // Right
        }
    },
    {
        id: '2ndFloorSD',
        name: '2ndFloorSD',
        description: 'Staircase leading to the second floor',
        imageUrl: 'images/cornerstairsSD2ndfloor.jpg',
        category: 'stairs',
        connections: ['stairs'],
        arrowPositions: {
            'stairs': { phi: Math.PI / 1.5, theta: Math.PI } // Down-back
        }
    }
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