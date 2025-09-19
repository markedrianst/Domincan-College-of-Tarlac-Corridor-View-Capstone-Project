const sdGroundFloor = [  
    {
        id: 'SdGroundFloor1',
        name: 'Access in SD and SCS bldg.',
        description: 'Connects entrance to classrooms', 
        imageUrl: 'images/Sdbldg/sd1st1.jpg',
        category: ['Sd bldg.'],
        connections: ['SdGroundfloor2', 'entrance', 'stairs'],
        arrowPositions: {
            'SdGroundfloor2': { phi: Math.PI / 2.6, theta: Math.PI * 2 ,direction: 'up' }, // Right
            'entrance': { phi: Math.PI / 2.6, theta: Math.PI * 0.85,direction: 'up' }, // Back
            'stairs': { phi: Math.PI / 2.6, theta: Math.PI * 1.5 ,direction: 'up' } // Up-left
        }
    },
    {
        id: 'SdGroundfloor2',
        name: 'Sd 101',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/sd1st2.jpg',
        category: 'Sd bldg.',
        connections: ['SdGroundFloor1', 'SdGroundfloor3'],
        arrowPositions: {
        'SdGroundfloor3': { phi: Math.PI / 2.6, theta: Math.PI * 1.9,direction:'up' }, // Right
        'SdGroundFloor1': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }, // Back
        }
    },

    {
        id: 'SdGroundfloor3',
        name: 'Sd 102 ,103',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(3).jpg',
        category: 'Sd bldg.',
        connections: ['SdGroundfloor2', 'SdGroundfloor4'],
        arrowPositions: { 
           'SdGroundfloor4': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor2': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }, // Back
        
        }
    },
    {
        id: 'SdGroundfloor4',
        name: 'Sd 104',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(4).jpg',
        category: 'Sd bldg.',
        connections: ['SdGroundfloor3', 'SdGroundfloor5'],
        arrowPositions: {
            'SdGroundfloor5': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor3': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }//Right
        }
    },

        {
        id: 'SdGroundfloor5',
        name: 'Sd 105, 106',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(5).jpg',
        category: 'Sd bldg.',
        connections: ['SdGroundfloor4', 'SdGroundfloor6'],
        arrowPositions: {
            'SdGroundfloor6': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor4': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }//Right
        }
    },
        {
        id: 'SdGroundfloor6',
        name: 'Sd middle Stairs',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(6).jpg',
        category: 'Sd bldg.',
        connections: ['SdGroundfloor5','SdGroundfloor7','midstairscr'],
        arrowPositions: {
            'SdGroundfloor7': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor5': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' },//Right
            'midstairscr': { phi: Math.PI / 2.6, theta: Math.PI * 1.47,direction:'up'} // Right
        }
    },
       {
        id: 'SdGroundfloor7',
        name: 'Sd 107,108, 109',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(7).jpg',
        category: 'Sd bldg.',
        connections: [ 'SdGroundfloor6','SdGroundfloor8'],
        arrowPositions: {
            'SdGroundfloor8': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor6': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
    }
},

      {
        id: 'SdGroundfloor8',
        name: 'Sd 110,111,112',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(8).jpg',
        category: 'Sd bldg.',
        connections: [ 'SdGroundfloor7','SdGroundfloor9'],
        arrowPositions: {
            'SdGroundfloor9': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor7': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
    }
},
      {
        id: 'SdGroundfloor9',
        name: 'Sd 113',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(9).jpg',
        category: 'Sd bldg.',
        connections: [ 'SdGroundfloor8','SdGroundfloor10'],
        arrowPositions: {
            'SdGroundfloor10': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor8': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
    }
},
    {
        id: 'SdGroundfloor10',
        name: 'Sd 114',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(10).jpg',
        category: 'Sd bldg.',
        connections: [ 'SdGroundfloor9'],
        arrowPositions: {
            // 'SdGroundfloor': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor9': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
    }
},
];
