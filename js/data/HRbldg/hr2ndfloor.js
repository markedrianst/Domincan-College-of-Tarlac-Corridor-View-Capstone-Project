const hr2ndfloor = [
    {
    id: 'Hr2nd1',
    name: 'VPAA Office',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/HR2ndfloor.jpg',
    category: ['HR bldg.'],
    connections: ['Hr3rd4', 'Hr2nd2'],
    arrowPositions: {
      'Hr3rd4': { phi: Math.PI / 3, theta: Math.PI * 1.15, direction: 'up' },
      'Hr2nd2': { phi: Math.PI / 3, theta: Math.PI * 2.9, direction: 'up' }
    }
  },

  {
    id: 'Hr2nd2',
    name: 'HR 2ND FLOOR',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/HR2ndfloor1.jpg',
    category: ['HR bldg.'],
    connections: ['Hr2nd3', 'Hr2nd1', 'Hr1rd4'],
    arrowPositions: {
      'Hr2nd3': { phi: Math.PI / 3, theta: Math.PI * 1.35, direction: 'up' },
      'Hr2nd1': { phi: Math.PI / 3, theta: Math.PI * 2.4, direction: 'up' },
      'Hr1rd4': { phi: Math.PI / 3, theta: Math.PI * 2.2, direction: 'up' }
    }
  },

  {
    id: 'Hr2nd3',
    name: 'HR 2ND2',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/HRbldg/HR2ndfloor2.jpg',
    category: ['HR bldg.'],
    connections: ['Hr2nd2', 'sn2nd1'],
    arrowPositions: {
      'Hr2nd2': { phi: Math.PI / 3, theta: Math.PI * 0.85, direction: 'up' },
      'sn2nd1': { phi: Math.PI / 3, theta: Math.PI * 2.3, direction: 'up' }
    }
  }
];
