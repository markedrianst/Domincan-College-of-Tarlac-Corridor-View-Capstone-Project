const sdGroundFloor = [  
    {
        id: 'SdGroundFloor1',
        name: 'Access in SD and SCS bldg.',
        description: 'Connects entrance to classrooms', 
        imageUrl: 'images/Sdbldg/Sd1.webp',
        category: ['Sd bldg.'],
        connections: ['SdGroundfloor2', 'entrance2', 'stairs'],
        arrowPositions: {
            'SdGroundfloor2': { phi: Math.PI / 2.6, theta: Math.PI * 2 ,direction: 'up' }, // Right
            'entrance2': { phi: Math.PI / 2.6, theta: Math.PI * 0.90,direction: 'up' }, // Back
            'stairs': { phi: Math.PI / 2.6, theta: Math.PI * 1.5 ,direction: 'up' } // Up-left
        }
    },
    {
        id: 'SdGroundfloor2',
        name: 'Guidance for College Department SD 101',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SD101.webp',
        category: ['Sd bldg.','Offices'],
        connections: ['SdGroundFloor1', 'SdGroundfloor3'],
        arrowPositions: {
        'SdGroundfloor3': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
        'SdGroundFloor1': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }, // Back
        
      
      
        }
    },

    {
        id: 'SdGroundfloor3',
        name: 'Guidance for College Department SD 101',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd102.webp',
        category: ['Sd bldg.','Offices'],
        connections: ['SdGroundfloor2', 'SdGroundfloor4'],
        arrowPositions: { 
           'SdGroundfloor4': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor2': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }, // Back
        
        }
    },
    {
        id: 'SdGroundfloor4',
        name: 'SD,SCS Way',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/toSCS.webp',
        category: ['Sd bldg.','Offices'],
        connections: ['SdGroundfloor3', 'SdGroundfloor5','scs1st1'],
        arrowPositions: {
            'SdGroundfloor5': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor3': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' },//Right
            'scs1st1': { phi: Math.PI / 2.6, theta: Math.PI *2.5,direction: 'up' }, // Back
        }
    },

        {
        id: 'SdGroundfloor5',
          name: 'Sd 102',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SD102 (2).webp',
        category: ['Sd bldg.','Offices'],
        connections: ['SdGroundfloor4', 'SdGroundfloor6'],
        arrowPositions: {
            'SdGroundfloor6': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor4': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }//Right
        }
    },
        {
        id: 'SdGroundfloor6',
        name: 'Sd 103',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SD103.webp',
        category: ['Sd bldg.','Offices'],
        connections: ['SdGroundfloor5','SdGroundfloor7'],
        arrowPositions: {
            'SdGroundfloor7': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor5': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' },//Right
            // 'midstairscr': { phi: Math.PI / 2.6, theta: Math.PI * 1.47,direction:'up'} // Right,'midstairscr'
        }
    },
       {
        id: 'SdGroundfloor7',
        name: 'SD 104',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd104.webp',
        category: ['Sd bldg.','Offices'],
        connections: [ 'SdGroundfloor6','SdGroundfloor8'],
        arrowPositions: {
            'SdGroundfloor8': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor6': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
    }
},

      {
        id: 'SdGroundfloor8',
        name: 'SD 105',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd105.webp',
        category: ['Sd bldg.','Offices'],
        connections: [ 'SdGroundfloor7','SdGroundfloor9'],
        arrowPositions: {
            'SdGroundfloor9': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor7': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
    }
},
      {
        id: 'SdGroundfloor9',
        name: ' OSAS Sd 113',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(9).jpg',
        category: ['Sd bldg.','Offices'],
        connections: [ 'SdGroundfloor8','SdGroundfloor10'],
        arrowPositions: {
            'SdGroundfloor10': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor8': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' }// Right        }
    }
},
    {
        id: 'SdGroundfloor10',
        name: 'SSC Sd 114',
        description: 'Sd bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SDFirstfloor(10).jpg',
        category: ['Sd bldg.','Offices'],
        connections: [ 'SdGroundfloor9','SDtoOLF1','shortcutsdtoccs'],
        arrowPositions: {
             
            'SDtoOLF1': { phi: Math.PI / 2.6, theta: Math.PI * 2.53,direction:'up' }, // Right
            'SdGroundfloor9': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction:'up' },// Right       
            'shortcutsdtoccs': { phi: Math.PI / 2.6, theta: Math.PI * 1.7,direction:'up' },// Right 
             
    }
},
];
