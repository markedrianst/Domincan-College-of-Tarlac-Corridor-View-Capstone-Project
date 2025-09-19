
// const panoramaData = [
//     {
//         id: 'entrance',
//         name: 'Main Entrance',
//         description: 'Domimicam College of Tarlac Main Entrance',
//         imageUrl: 'images/Sdbldg/GateEntrancee.jpg',
//         category: ['entrance'],
//         connections: ['SdGroundFloor1'],
//         arrowPositions: {
//             'SdGroundFloor1': { phi: Math.PI / 2.6, theta: Math.PI * 1.75,direction: 'up' } // Forward
//         }
//     },
    
//     {
//         id: 'SdGroundFloor1',
//         name: 'Access in SD and SCS bldg.',
//         description: 'Connects entrance to classrooms', 
//         imageUrl: 'images/Sdbldg/sd1st1.jpg',
//         category: ['Sd bldg.'],
//         connections: ['SdGroundfloor2', 'entrance', 'stairs'],
//         arrowPositions: {
//             'SdGroundfloor2': { phi: Math.PI / 2.6, theta: Math.PI * 2 ,direction: 'up' }, // Right
//             'entrance': { phi: Math.PI / 2.6, theta: Math.PI * 0.85,direction: 'up' }, // Back
//             'stairs': { phi: Math.PI / 2.6, theta: Math.PI * 1.5 ,direction: 'up' } // Up-left
//         }
//     },
//     {
//         id: 'SdGroundfloor2',
//         name: 'Sd 101',
//         description: 'Sd bldg. 1st floor',
//         imageUrl: 'images/Sdbldg/sd1st2.jpg',
//         category: 'Sd bldg.',
//         connections: ['SdGroundFloor1', 'SdGroundfloor3'],
//         arrowPositions: {
//         'SdGroundfloor3': { phi: Math.PI / 2.6, theta: Math.PI * 1.9,direction:'up' }, // Right
//         'SdGroundFloor1': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }, // Back
//         }
//     },

//     {
//         id: 'SdGroundfloor3',
//         name: 'Sd 102 ,103',
//         description: 'Sd bldg. 1st floor',
//         imageUrl: 'images/Sdbldg/SDFirstfloor(3).jpg',
//         category: 'Sd bldg.',
//         connections: ['SdGroundfloor2', 'SdGroundfloor4'],
//         arrowPositions: { 
//            'SdGroundfloor4': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             'SdGroundfloor2': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }, // Back
        
//         }
//     },
//     {
//         id: 'SdGroundfloor4',
//         name: 'Sd 104',
//         description: 'Sd bldg. 1st floor',
//         imageUrl: 'images/Sdbldg/SDFirstfloor(4).jpg',
//         category: 'Sd bldg.',
//         connections: ['SdGroundfloor3', 'SdGroundfloor5'],
//         arrowPositions: {
//             'SdGroundfloor5': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             'SdGroundfloor3': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }//Right
//         }
//     },

//         {
//         id: 'SdGroundfloor5',
//         name: 'Sd 105, 106',
//         description: 'Sd bldg. 1st floor',
//         imageUrl: 'images/Sdbldg/SDFirstfloor(5).jpg',
//         category: 'Sd bldg.',
//         connections: ['SdGroundfloor4', 'SdGroundfloor6'],
//         arrowPositions: {
//             'SdGroundfloor6': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             'SdGroundfloor4': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }//Right
//         }
//     },
//         {
//         id: 'SdGroundfloor6',
//         name: 'Sd middle Stairs',
//         description: 'Sd bldg. 1st floor',
//         imageUrl: 'images/Sdbldg/SDFirstfloor(6).jpg',
//         category: 'Sd bldg.',
//         connections: ['SdGroundfloor5','SdGroundfloor7','midstairscr'],
//         arrowPositions: {
//             'SdGroundfloor7': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             'SdGroundfloor5': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' },//Right
//             'midstairscr': { phi: Math.PI / 2.6, theta: Math.PI * 1.47,direction:'up'} // Right
//         }
//     },
//        {
//         id: 'SdGroundfloor7',
//         name: 'Sd 107,108, 109',
//         description: 'Sd bldg. 1st floor',
//         imageUrl: 'images/Sdbldg/SDFirstfloor(7).jpg',
//         category: 'Sd bldg.',
//         connections: [ 'SdGroundfloor6','SdGroundfloor8'],
//         arrowPositions: {
//             'SdGroundfloor8': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             'SdGroundfloor6': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
//     }
// },

//       {
//         id: 'SdGroundfloor8',
//         name: 'Sd 110,111,112',
//         description: 'Sd bldg. 1st floor',
//         imageUrl: 'images/Sdbldg/SDFirstfloor(8).jpg',
//         category: 'Sd bldg.',
//         connections: [ 'SdGroundfloor7','SdGroundfloor9'],
//         arrowPositions: {
//             'SdGroundfloor9': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             'SdGroundfloor7': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
//     }
// },
//       {
//         id: 'SdGroundfloor9',
//         name: 'Sd 113',
//         description: 'Sd bldg. 1st floor',
//         imageUrl: 'images/Sdbldg/SDFirstfloor(9).jpg',
//         category: 'Sd bldg.',
//         connections: [ 'SdGroundfloor8','SdGroundfloor10'],
//         arrowPositions: {
//             'SdGroundfloor10': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             'SdGroundfloor8': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
//     }
// },
//     {
//         id: 'SdGroundfloor10',
//         name: 'Sd 114',
//         description: 'Sd bldg. 1st floor',
//         imageUrl: 'images/Sdbldg/SDFirstfloor(10).jpg',
//         category: 'Sd bldg.',
//         connections: [ 'SdGroundfloor9'],
//         arrowPositions: {
//             // 'SdGroundfloor': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             'SdGroundfloor9': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
//     }
// },


//     //SD 2ND FLOOR
//     {
//         id: 'stairs',
//         name: 'Staircase',
//         description: 'Staircase leading to the second floor',
//         imageUrl: 'images/Sdbldg/CornerStairs2ndfloorSD.jpg',
//         category: 'stairs',
//         connections: ['2ndFloorSD', 'SdGroundFloor1'],
//         arrowPositions: {
//             '2ndFloorSD': { phi: Math.PI / 2.6, theta: Math.PI * 0 ,direction:'up' }, // Up-forward
//             'SdGroundFloor1': { phi: Math.PI / 2.9, theta: Math.PI * 1.85,direction:'down' } // Right
//         }
//     },
//     {
//         id: '2ndFloorSD',
//         name: '2ndFloorSD',
//         description: 'Staircase leading to 201,202,203,204,205,206,207,208,209,210',
//         imageUrl: 'images/Sdbldg/cornerstairsSD2ndfloor.jpg',
//         category: 'Sd bldg.',
//         connections: ['stairs','2ndFloorSD201'],
//         arrowPositions: {
//             'stairs': { phi: Math.PI / 3, theta: Math.PI * 1.4, direction:'down' }, // Right
//             '2ndFloorSD201': { phi: Math.PI / 3, theta: Math.PI * 2.5,direction:'up' } // Forward
//         }
//     },
//         {
//         id: '2ndFloorSD201',
//         name: 'SD 201',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/2ndfloorSD(1).jpg',
//         category: 'Sd bldg.',
//         connections: ['2ndFloorSD','2ndFloorSD202'],
//         arrowPositions: {
//             '2ndFloorSD202': { phi: Math.PI / 2.6, theta: Math.PI * 2.05 ,direction:'up' }, // Right
//             '2ndFloorSD': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

//         }
//     },
//      {
//         id: '2ndFloorSD202',
//         name: 'SD 202',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/2ndfloorSD(2).jpg',
//         category: 'Sd bldg.',
//         connections: ['2ndFloorSD201','Sd2ndfloor203'],
//         arrowPositions: {
//             'Sd2ndfloor203': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             '2ndFloorSD201': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

//         }
//     },    
//     {
//         id: 'Sd2ndfloor203',
//         name: 'SD 203',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/2ndfloorSD(3).jpg',
//         category: 'Sd bldg.',
//         connections: ['2ndFloorSD202','Sd2ndfloor204'],
//         arrowPositions: {
//             'Sd2ndfloor204': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
//             '2ndFloorSD202': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

//         }
//     },
//     {
//         id: 'Sd2ndfloor204',
//         name: 'SD 204',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/2ndfloorSD(4).jpg',
//         category: 'Sd bldg.',
//         connections: ['Sd2ndfloor203','Sd2ndfloormidstairs'],
//         arrowPositions: {
//             'Sd2ndfloormidstairs': { phi: Math.PI / 2.6, theta: Math.PI * 1.9,direction:'up' }, // Right
//             'Sd2ndfloor203': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

//         }
//     }, 
    
//     {
//         id: 'Sd2ndfloormidstairs',
//         name: 'SD 2nd midstairs',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/2ndfloorSD(5).jpg',
//         category: 'stairs',
//         connections: ['Sd2ndfloor204','Sd2ndfloor205','midstairscr'],
//         arrowPositions: {
//             'Sd2ndfloor205': { phi: Math.PI / 2.6, theta: Math.PI * 2.3,direction:'up' }, // Right
//             'Sd2ndfloor204': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction:'up' }, // Right
//             'midstairscr': { phi: Math.PI / 3, theta: Math.PI * 1.7, direction:'down' },// Right

//         }
//     },
//     {
//         id: 'Sd2ndfloor205',
//         name: 'SD 205',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/2ndfloorSD(6).jpg',
//         category: 'Sd bldg.',
//         connections: ['Sd2ndfloor206','Sd2ndfloormidstairs'],
//         arrowPositions: {
//             'Sd2ndfloor206': { phi: Math.PI / 2.6, theta: Math.PI * 1.95,direction:'up' }, // Right
//             'Sd2ndfloormidstairs': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

//         }
//     },
//      {
//         id: 'Sd2ndfloor206',
//         name: 'SD 206',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/2ndfloorSD(7).jpg',
//         category: 'Sd bldg.',
//         connections: ['Sd2ndfloor207','Sd2ndfloor205'],
//         arrowPositions: {
//             'Sd2ndfloor207': { phi: Math.PI / 2.6, theta: Math.PI * 1.9,direction:'up' }, // Right
//             'Sd2ndfloor205': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

//         }
//     },
//     {
//         id: 'Sd2ndfloor207',
//         name: 'SD 207',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/2ndfloorSD(8).jpg',
//         category: 'Sd bldg.',
//         connections: ['Sd2ndfloor208','Sd2ndfloor206'],
//         arrowPositions: {
//             'Sd2ndfloor208': { phi: Math.PI / 2.6, theta: Math.PI * 1.85,direction:'up' }, // Right
//             'Sd2ndfloor206': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

//         }
//     },

//      {
//         id: 'Sd2ndfloor208',
//         name: 'SD 208',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/2ndfloorSD(9).jpg',
//         category: 'Sd bldg.',
//         connections: ['Sd2ndfloor207'],
//         arrowPositions: {
//             'Sd2ndfloor207': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

//         }
//     },

//     //stairs
//        {
//         id: 'midstairscr',
//         name: 'midstairscr',
//         description: 'Sd bldg. 2nd floor',
//         imageUrl: 'images/Sdbldg/MidStairs2ndfloorSD (1).jpg',
//         category: 'Sd bldg.',
//         connections: ['SdGroundfloor6','Sd2ndfloormidstairs'],
//         arrowPositions: {
//             'SdGroundfloor6': { phi: Math.PI / 3.5, theta: Math.PI * 1, direction:'down' },// Right
//             'Sd2ndfloormidstairs': { phi: Math.PI / 2, theta: Math.PI * 0.5, direction:'right' },
        
//         }
//     },
// ];

// /**
//  * Helper function to get panorama data by ID
//  * @param {string} id - The panorama ID to find
//  * @returns {Object|null} - The panorama data object or null if not found
//  */
// function getPanoramaById(id) {
//     return panoramaData.find(panorama => panorama.id === id) || null;
// }

// /**
//  * Helper function to get all panoramas matching a search term
//  * @param {string} searchTerm - The search term to match against name or description
//  * @returns {Array} - Array of matching panorama objects
//  */
// function searchPanoramas(searchTerm) {
//     if (!searchTerm) return [];
    
//     const term = searchTerm.toLowerCase();
//     return panoramaData.filter(panorama => 
//         panorama.name.toLowerCase().includes(term) || 
//         panorama.description.toLowerCase().includes(term)
//     );
// }

// /**
//  * Helper function to get connected panoramas for a given panorama ID
//  * @param {string} id - The panorama ID to find connections for
//  * @returns {Array} - Array of connected panorama objects
//  */
// function getConnectedPanoramas(id) {
//     const panorama = getPanoramaById(id);
//     if (!panorama) return [];
    
//     return panorama.connections.map(connId => getPanoramaById(connId)).filter(Boolean);
// }