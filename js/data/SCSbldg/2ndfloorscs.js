const scssecondfloor = [
  {  
    id: 'Scs1stto2nd',
    name: 'SCS Stairs 1st to 2nd Floor',
    description: 'SCS bldg. 2nd floor stairs entry',
    imageUrl: 'images/Scsbldg/1 SCS 201 STAIR_1.webp',
    category: ['SCS bldg.'],
    connections: ['scs1stStairsConnection', 'scs2ndStair2'],
    arrowPositions: {
      'scs1stStairsConnection': { phi: Math.PI / 4, theta: Math.PI * 1, direction: 'down' },
      'scs2ndStair2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs2ndStair2',
    name: 'SCS Stairs 2nd Floor Mid',
    description: 'SCS bldg. 2nd floor stairs mid point',
    imageUrl: 'images/Scsbldg/2 SCS 201 STAIR_2.webp',
    category: ['SCS bldg.'],
    connections: ['Scs1stto2nd', 'scs2nd1','Scs2ndto3rd'],
    arrowPositions: {
      'scs2nd1': { phi: Math.PI / 3, theta: Math.PI * 0.9, direction: 'up' },
      'Scs1stto2nd': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up' },
      'Scs2ndto3rd':{ phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up' }
    }
  },
  {  
    id: 'scs2nd1',
    name: 'SCS 201',
    description: 'SCS bldg. 2nd floor',
    imageUrl: 'images/Scsbldg/3 SCS 201.webp',
    category: ['SCS bldg.'],
    connections: ['scs2ndStair2', 'scs2nd1a'],
    arrowPositions: {
      'scs2ndStair2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs2nd1a': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },
  {  
    id: 'scs2nd1a',
    name: 'SCS 201 Extension',
    description: 'SCS bldg. 2nd floor extension',
    imageUrl: 'images/Scsbldg/4 SCS 201_1.webp',
    category: ['SCS bldg.'],
    connections: ['scs2nd1', 'scs2nd2'],
    arrowPositions: {
      'scs2nd1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs2nd2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs2nd2',
    name: 'SCS 202',
    description: 'SCS bldg. 2nd floor',
    imageUrl: 'images/Scsbldg/5 SCS 202.webp',
    category: ['SCS bldg.'],
    connections: ['scs2nd1a'],
    arrowPositions: {
      'scs2nd1a': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    }
  },
  {  
    id: 'Scs2ndto3rd',
    name: 'SCS Stairs to 3rd Floor',
    description: 'SCS bldg. 2nd floor stairs going up',
    imageUrl: 'images/Scsbldg/1 SCS STAIRS 2ND TO 3RD FLOOR.webp',
    category: ['SCS bldg.'],
    connections: ['scs2ndStair2', 'scs3rd_stairs_2to1'],
    arrowPositions: {
      'scs2ndStair2': { phi: Math.PI / 3.5, theta: Math.PI * 2.1, direction: 'down' },
      'scs3rd_stairs_2to1': { phi: Math.PI / 3, theta: Math.PI * 1.8, direction: 'up' }
    },
      defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // always face 2nd floor

  }
];
