const scsthirdfloor = [
  {  
    id: 'scs3rd_stairs_2to1',
    name: 'SCS Stairs 3rd to 2nd Floor',
    description: 'SCS bldg. 3rd floor stairs entry from 2nd floor',
    imageUrl: 'images/Scsbldg/2 SCS STAIRS 3RD TO 2ND FLOOR.webp',
    category: ['SCS bldg.', 'Stairs'],
    connections: ['Scs2ndto3rd', 'scs3rd_stairs_mid'],
    arrowPositions: {
      'Scs2ndto3rd': { phi: Math.PI / 3.5, theta: Math.PI * 1, direction: 'down' },
      'scs3rd_stairs_mid': { phi: Math.PI / 3, theta: Math.PI * 2.0, direction: 'up' }
    }
  },
  {  
    id: 'scs3rd_stairs_mid',
    name: 'SCS Stairs Mid',
    description: 'SCS bldg. 3rd floor stairs midpoint',
    imageUrl: 'images/Scsbldg/4 SCS STAIRS.webp',
    category: ['SCS bldg.', 'Stairs'],
    connections: ['scs3rd_stairs_2to1', 'scs3rd_301_1', 'scs3rdto4th'],
    arrowPositions: {
      'scs3rd_stairs_2to1': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up' },
      'scs3rd_301_1': { phi: Math.PI / 3, theta: Math.PI * 0.9, direction: 'up' },
       'scs3rdto4th': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up' },
    }
  },
  {  
    id: 'scs3rd_301_1',
    name: 'SCS 301 - Part 1',
    description: 'SCS bldg. 3rd floor, room 301 first part',
    imageUrl: 'images/Scsbldg/5 SCS 301 1ST PART.webp',
    category: ['SCS bldg.'],
    connections: ['scs3rd_stairs_mid', 'scs3rd_301_2'],
    arrowPositions: {
      'scs3rd_stairs_mid': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs3rd_301_2': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },
  {  
    id: 'scs3rd_301_2',
    name: 'SCS 301 - Part 2',
    description: 'SCS bldg. 3rd floor, room 301 second part',
    imageUrl: 'images/Scsbldg/6 SCS 301 2ND PART.webp',
    category: ['SCS bldg.'],
    connections: ['scs3rd_301_1', 'scs3rd_302'],
    arrowPositions: {
      'scs3rd_301_1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs3rd_302': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs3rd_302',
    name: 'SCS 302',
    description: 'SCS bldg. 3rd floor',
    imageUrl: 'images/Scsbldg/7 SCS 302.webp',
    category: ['SCS bldg.'],
    connections: ['scs3rd_301_2', 'scs3rd_303'],
    arrowPositions: {
      'scs3rd_301_2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs3rd_303': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs3rd_303',
    name: 'SCS 303',
    description: 'SCS bldg. 3rd floor',
    imageUrl: 'images/Scsbldg/8 SCS 303.webp',
    category: ['SCS bldg.'],
    connections: ['scs3rd_302', 'scs3rd_304'],
    arrowPositions: {
      'scs3rd_302': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs3rd_304': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs3rd_304',
    name: 'SCS 304',
    description: 'SCS bldg. 3rd floor',
    imageUrl: 'images/Scsbldg/9 SCS 304.webp',
    category: ['SCS bldg.'],
    connections: ['scs3rd_303', 'Sd3rdfloor301'],
    arrowPositions: {
      'scs3rd_303': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Sd3rdfloor301': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs3rdto4th',
    name: 'SCS Stairs to 4th Floor',
    description: 'SCS bldg. 3rd floor stairs to 4th floor',
    imageUrl: 'images/Scsbldg/1 SCS STAIRS 3RD TO 4TH FLOOR.webp',
    category: ['SCS bldg.', 'Stairs'],
    connections: ['scs3rd_stairs_mid', 'scs4th_stairs'],
    arrowPositions: {
      'scs3rd_stairs_mid': { phi: Math.PI / 3.4, theta: Math.PI * 2.1, direction: 'down' },
      'scs4th_stairs': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up' }
    },
    defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // always face 3rd floor
  }
];
