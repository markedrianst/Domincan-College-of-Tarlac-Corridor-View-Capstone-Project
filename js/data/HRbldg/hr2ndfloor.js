const hr2ndfloor = [

  {  
    id: 'Hr2nd1',
    name: 'HR 203 Stair (3)',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/2.1 HR 203 STAIR (3).webp',
    category: ['HR bldg.'],
    connections: ['Hr2nd2'],
    arrowPositions: {
        'Hr2nd2': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },

  {  
    id: 'Hr2nd2',
    name: 'HR 203 - Director of Academic Affairs',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/2.2 HR 203 DIRECTOR OF ACADEMIC AFFAIRS.webp',
    category: ['HR bldg.','Offices'],
    connections: ['Hr2nd1','Hr2nd3'],
    arrowPositions: {
        'Hr2nd1': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
        'Hr2nd3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {  
    id: 'Hr2nd3',
    name: 'HR 204 HRM Lab',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/3 HR 204 HRM LAB.webp',
    category: ['HR bldg.','Laboratories'],
    connections: ['Hr2nd2','Hr2nd4'],
    arrowPositions: {
        'Hr2nd2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
        'Hr2nd4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {  
    id: 'Hr2nd4',
    name: 'HR 204 HRM Lab (Alternate View)',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/3.1 HR 204 HRM LAB.webp',
    category: ['HR bldg.','Laboratories'],
    connections: ['Hr2nd3','Hr2nd5','Hr2nd6'],
    arrowPositions: {
        'Hr2nd3': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
        'Hr2nd6': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
        'Hr2nd5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {  
    id: 'Hr2nd5',
    name: 'HR Midway Stairs',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/4 HR Midway Srairs.webp',
    category: ['HR bldg.','Stairs'],
    connections: ['Hr2nd4','ccjeoffice'],
    arrowPositions: {
        'Hr2nd4': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
        'ccjeoffice': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'down' }
    }
  },

  {  
    id: 'Hr2nd6',
    name: 'HR 205 Multi-Purpose Hall',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/5 HR 205 MULTI PURPOSE HALL.webp',
    category: ['HR bldg.','Rooms'],
    connections: ['Hr2nd4','Hr2nd7'],
    arrowPositions: {
        'Hr2nd4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'Hr2nd7': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {  
    id: 'Hr2nd7',
    name: 'HR 206 Commercial Kitchen',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/6 HR 206 COMMERCIAL KITCHEN.webp',
    category: ['HR bldg.','Rooms'],
    connections: ['Hr2nd6','Hr2nd8'],
    arrowPositions: {
        'Hr2nd6': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'Hr2nd8': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {  
    id: 'Hr2nd8',
    name: 'HR 207, 208',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/7 HR 207.webp',
    category: ['HR bldg.','Rooms'],
    connections: ['Hr2nd7'],
    arrowPositions: {
        'Hr2nd7': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  }

];
