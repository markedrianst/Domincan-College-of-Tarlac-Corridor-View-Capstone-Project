const snsecondfloor = [
  {
    id: 'sn2ndutility',
    name: 'SN 201 Utility Room',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/1 SN 201 UTILITY ROOM.webp',
    category: ['SN bldg.'],
    connections: ['sn2nd1','Hr2nd8'],
    arrowPositions: {
      'sn2nd1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'Hr2nd8': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'sn2nd1',
    name: 'SN 201',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/2 SN 201.webp',
    category: ['SN bldg.'],
    connections: ['sn2nd2', 'sn2ndutility'],
    arrowPositions: {
      'sn2nd2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn2ndutility': { phi: Math.PI / 3, theta: Math.PI *1, direction: 'up' }
    }
  },

  {
    id: 'sn2nd2',
    name: 'SN 202 Baking room ',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/3 SN 202.webp',
    category: ['SN bldg.'],
    connections: ['sn2nd3', 'sn2nd1'],
    arrowPositions: {
      'sn2nd3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn2nd1': { phi: Math.PI / 3, theta: Math.PI *1, direction: 'up' }
    }
  },

  {
    id: 'sn2nd3',
    name: 'SN 203',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/4 SN 203.webp',
    category: ['SN bldg.'],
    connections: ['sn2ndcaseroom', 'sn2nd2'],
    arrowPositions: {
      'sn2ndcaseroom': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn2nd2': { phi: Math.PI / 3, theta: Math.PI *1, direction: 'up' }
    }
  },

  {
    id: 'sn2ndcaseroom',
    name: 'SN 203 Case Room',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/5 SN 203 CASE ROOM.webp',
    category: ['SN bldg.'],
    connections: ['sn2nd4', 'sn2nd3'],
    arrowPositions: {
      'sn2nd4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn2nd3': { phi: Math.PI / 3, theta: Math.PI *1, direction: 'up' }
    }
  },

  {
    id: 'sn2nd4',
    name: 'SN 204',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/6 SN 204.webp',
    category: ['SN bldg.'],
    connections: ['sn2nddulo', 'sn2ndcaseroom'],
    arrowPositions: {
      'sn2nddulo': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn2ndcaseroom': { phi: Math.PI / 3, theta: Math.PI *1, direction: 'up' }
    }
  },

  {
    id: 'sn2nddulo',
    name: 'SN 204 ',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/7 SN 204 DULO (1).webp',
    category: ['SN bldg.'],
    connections: ['sn2ndstair1', 'sn2nd4'],
    arrowPositions: {
      'sn2ndstair1': { phi: Math.PI / 3, theta: Math.PI * 2.4, direction: 'up' },
      'sn2nd4': { phi: Math.PI / 3, theta: Math.PI *1, direction: 'up' }
    }
  },

  {
    id: 'sn2ndstair1',
    name: 'SN Building Stairs 2nd Floor',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/8 SN BUILDING STAIRS 2ND FLOOR.webp',
    category: ['SN bldg.'],
    connections: ['sn2nd9', 'sn2nddulo',,'sn1ststair'],
    arrowPositions: {
      'sn2nd9': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn2nddulo': { phi: Math.PI / 3, theta: Math.PI *1.5, direction: 'up' },
      'sn1ststair': { phi: Math.PI / 3, theta: Math.PI *1, direction: 'down' }
    }
  },



  {
    id: 'sn2nd9',
    name: 'SN 201',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/9 SN 201 (2).webp',
    category: ['SN bldg.'],
    connections: ['slr2nd1', 'sn2ndstair1'],
    arrowPositions: {
      'slr2nd1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn2ndstair1': { phi: Math.PI / 3, theta: Math.PI *1.5, direction: 'up' }
    }
  }
];
