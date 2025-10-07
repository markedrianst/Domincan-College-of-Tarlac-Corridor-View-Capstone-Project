const scsfourthfloor = [
  {  
    id: 'scs4th_stairs',
    name: 'SCS Stairs 4th Floor',
    description: 'SCS bldg. 4th floor stairs entry from 3rd floor',
    imageUrl: 'images/Scsbldg/2 SCS STAIRS 4TH FLOOR.webp',
    category: ['SCS bldg.'],
    connections: ['scs3rdto4th', 'scs4th_401_1'],
    arrowPositions: {
      'scs3rdto4th': { phi: Math.PI / 3.5, theta: Math.PI * 1 , direction: 'down' },
      'scs4th_401_1': { phi: Math.PI / 3, theta: Math.PI * 2.0, direction: 'up' }
    }
  },
  {  
    id: 'scs4th_401_1',
    name: 'SCS 401 - Part 1',
    description: 'SCS bldg. 4th floor, room 401 first part',
    imageUrl: 'images/Scsbldg/3 SCS 401 1ST PART.webp',
    category: ['SCS bldg.'],
    connections: ['scs4th_stairs', 'scs4th_401_2'],
    arrowPositions: {
      'scs4th_stairs': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs4th_401_2': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },
  {  
    id: 'scs4th_401_2',
    name: 'SCS 401 - Part 2',
    description: 'SCS bldg. 4th floor, room 401 second part',
    imageUrl: 'images/Scsbldg/4 SCS 401 2ND PART.webp',
    category: ['SCS bldg.'],
    connections: ['scs4th_401_1', 'scs4th_402'],
    arrowPositions: {
      'scs4th_401_1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs4th_402': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs4th_402',
    name: 'SCS 402',
    description: 'SCS bldg. 4th floor',
    imageUrl: 'images/Scsbldg/5 SCS 402.webp',
    category: ['SCS bldg.'],
    connections: ['scs4th_401_2', 'scs4th_403'],
    arrowPositions: {
      'scs4th_401_2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs4th_403': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs4th_403',
    name: 'SCS 403',
    description: 'SCS bldg. 4th floor',
    imageUrl: 'images/Scsbldg/6 SCS 403.webp',
    category: ['SCS bldg.'],
    connections: ['scs4th_402', 'scs4th_404_1'],
    arrowPositions: {
      'scs4th_402': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs4th_404_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs4th_404_1',
    name: 'SCS 404',
    description: 'SCS bldg. 4th floor',
    imageUrl: 'images/Scsbldg/7 SCS 404.webp',
    category: ['SCS bldg.'],
    connections: ['scs4th_403', 'Sd4thfloor3'],
    arrowPositions: {
      'scs4th_403': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Sd4thfloor3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  }

];
