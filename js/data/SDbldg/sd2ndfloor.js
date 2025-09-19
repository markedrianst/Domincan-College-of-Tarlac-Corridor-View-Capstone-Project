const sd2ndFloor = [
    //SD 2ND FLOOR
    {
        id: 'stairs',
        name: 'Staircase',
        description: 'Staircase leading to the second floor',
        imageUrl: 'images/Sdbldg/CornerStairs2ndfloorSD.jpg',
        category: 'stairs',
        connections: ['2ndFloorSD', 'SdGroundFloor1'],
        arrowPositions: {
            '2ndFloorSD': { phi: Math.PI / 2.6, theta: Math.PI * 0 ,direction:'up' }, // Up-forward
            'SdGroundFloor1': { phi: Math.PI / 2.9, theta: Math.PI * 1.85,direction:'down' } // Right
        }
    },
    {
        id: '2ndFloorSD',
        name: '2ndFloorSD',
        description: 'Staircase leading to 201,202,203,204,205,206,207,208,209,210',
        imageUrl: 'images/Sdbldg/cornerstairsSD2ndfloor.jpg',
        category: 'Sd bldg.',
        connections: ['stairs','2ndFloorSD201','Sd3rdfloorcornerstairs'],
        arrowPositions: {
            'stairs': { phi: Math.PI / 3, theta: Math.PI * 1.4, direction:'down' }, // Right
            'Sd3rdfloorcornerstairs': { phi: Math.PI / 2, theta: Math.PI * 1.6, direction:'up' }, // Right
            '2ndFloorSD201': { phi: Math.PI / 3, theta: Math.PI * 2.5,direction:'up' } // Forward
        }
    },
        {
        id: '2ndFloorSD201',
        name: 'SD 201',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/2ndfloorSD(1).jpg',
        category: 'Sd bldg.',
        connections: ['2ndFloorSD','2ndFloorSD202'],
        arrowPositions: {
            '2ndFloorSD202': { phi: Math.PI / 2.6, theta: Math.PI * 2.05 ,direction:'up' }, // Right
            '2ndFloorSD': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

        }
    },
     {
        id: '2ndFloorSD202',
        name: 'SD 202',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/2ndfloorSD(2).jpg',
        category: 'Sd bldg.',
        connections: ['2ndFloorSD201','Sd2ndfloor203'],
        arrowPositions: {
            'Sd2ndfloor203': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            '2ndFloorSD201': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

        }
    },    
    {
        id: 'Sd2ndfloor203',
        name: 'SD 203',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/2ndfloorSD(3).jpg',
        category: 'Sd bldg.',
        connections: ['2ndFloorSD202','Sd2ndfloor204'],
        arrowPositions: {
            'Sd2ndfloor204': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            '2ndFloorSD202': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

        }
    },
    {
        id: 'Sd2ndfloor204',
        name: 'SD 204',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/2ndfloorSD(4).jpg',
        category: 'Sd bldg.',
        connections: ['Sd2ndfloor203','Sd2ndfloormidstairs'],
        arrowPositions: {
            'Sd2ndfloormidstairs': { phi: Math.PI / 2.6, theta: Math.PI * 1.9,direction:'up' }, // Right
            'Sd2ndfloor203': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

        }
    }, 
    
    {
        id: 'Sd2ndfloormidstairs',
        name: 'SD 2nd midstairs',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/2ndfloorSD(5).jpg',
        category: 'stairs',
        connections: ['Sd2ndfloor204','Sd2ndfloor205','midstairscr','Sd3rdfloormidstairs'],
        arrowPositions: {
            'Sd2ndfloor205': { phi: Math.PI / 2.6, theta: Math.PI * 2.3,direction:'up' }, // Right
            'Sd2ndfloor204': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction:'up' }, // Right
            'midstairscr': { phi: Math.PI / 3, theta: Math.PI * 1.7, direction:'down' },
            'Sd3rdfloormidstairs': { phi: Math.PI / 3, theta: Math.PI * 1.92, direction:'up' },// Right

        }
    },
    {
        id: 'Sd2ndfloor205',
        name: 'SD 205',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/2ndfloorSD(6).jpg',
        category: 'Sd bldg.',
        connections: ['Sd2ndfloor206','Sd2ndfloormidstairs'],
        arrowPositions: {
            'Sd2ndfloor206': { phi: Math.PI / 2.6, theta: Math.PI * 1.95,direction:'up' }, // Right
            'Sd2ndfloormidstairs': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

        }
    },
     {
        id: 'Sd2ndfloor206',
        name: 'SD 206',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/2ndfloorSD(7).jpg',
        category: 'Sd bldg.',
        connections: ['Sd2ndfloor207','Sd2ndfloor205'],
        arrowPositions: {
            'Sd2ndfloor207': { phi: Math.PI / 2.6, theta: Math.PI * 1.9,direction:'up' }, // Right
            'Sd2ndfloor205': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

        }
    },
    {
        id: 'Sd2ndfloor207',
        name: 'SD 207',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/2ndfloorSD(8).jpg',
        category: 'Sd bldg.',
        connections: ['Sd2ndfloor208','Sd2ndfloor206'],
        arrowPositions: {
            'Sd2ndfloor208': { phi: Math.PI / 2.6, theta: Math.PI * 1.85,direction:'up' }, // Right
            'Sd2ndfloor206': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

        }
    },

     {
        id: 'Sd2ndfloor208',
        name: 'SD 208',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/2ndfloorSD(9).jpg',
        category: 'Sd bldg.',
        connections: ['Sd2ndfloor207'],
        arrowPositions: {
            'Sd2ndfloor207': { phi: Math.PI / 3, theta: Math.PI * 1.04, direction:'up' } // Right

        }
    },

    //stairs
       {
        id: 'midstairscr',
        name: 'midstairscr',
        description: 'Sd bldg. 2nd floor',
        imageUrl: 'images/Sdbldg/MidStairs2ndfloorSD (1).jpg',
        category: 'Sd bldg.',
        connections: ['SdGroundfloor6','Sd2ndfloormidstairs'],
        arrowPositions: {
            'SdGroundfloor6': { phi: Math.PI / 3.5, theta: Math.PI * 1, direction:'down' },// Right
            'Sd2ndfloormidstairs': { phi: Math.PI / 2, theta: Math.PI * 0.5, direction:'right' },
        
        }
    },
];