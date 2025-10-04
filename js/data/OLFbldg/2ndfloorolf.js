const olf2ndbldg = [
  { 
    id: 'OLFSideStairs1',
    name: 'OLF Side Stairs 1',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/C OLF STAIR 3RD FLOOR (1).webp',
    category: ['OLP bldg.'],
    connections: ['EOLF2ndFloorStairs', 'OLFSideStairs2'],
    arrowPositions: {
      'EOLF2ndFloorStairs': { phi: Math.PI / 3.6, theta: Math.PI * 1, direction: 'down' },
      'OLFSideStairs2': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    },     defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1.6 } // 👈 always face 2nd floor

  },
    { 
    id: 'OLFSideStairs2',
    name: 'OLF Side Stairs 1',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/F OLF 204 Midway Stairs.webp',
    category: ['OLP bldg.'],
    connections: ['OLFSideStairs1', 'DOLFStair3rdMiddle'],
    arrowPositions: {
      'OLFSideStairs1': { phi: Math.PI / 3.6, theta: Math.PI * 1, direction: 'up' },
      'DOLFStair3rdMiddle': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    },
         defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1.6 } // 👈 always face 2nd floor

  },
  {
    id: 'DOLF200',
    name: 'OLF 200 Work Immersion Office',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/D OLF 200 WORK IMMERSION OFFICE.webp',
    category: ['OLP bldg.'],
    connections: [ 'DOLF201', 'olf_side_stair_1_2'],
    arrowPositions: {
      'DOLF201': { phi: Math.PI / 3.1, theta: Math.PI * 1, direction: 'up' },
      'olf_side_stair_1_2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'DOLF201',
    name: 'OLF 201',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/D OLF 201.webp',
    category: ['OLP bldg.'],
    connections: ['DOLF200', 'DOLF202'],
    arrowPositions: {
      'DOLF200': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'DOLF202': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'DOLF202',
    name: 'OLF 202',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/D OLF 202.webp',
    category: ['OLP bldg.'],
    connections: ['DOLF201', 'DOLF203'],
    arrowPositions: {
      'DOLF201': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'DOLF203': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'DOLF203',
    name: 'OLF 203',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/D OLF 203.webp',
    category: ['OLP bldg.'],
    connections: ['DOLF202', 'EOLF2ndFloorStairs'],
    arrowPositions: {
      'DOLF202': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'EOLF2ndFloorStairs': { phi: Math.PI / 3.1, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'EOLF2ndFloorStairs',
    name: 'OLF 2nd Floor Stairs',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/E OLF 2ND FLOOR STAIRS.webp',
    category: ['OLP bldg.'],
    connections: ['OLFSideStairs1', 'DOLF203', 'EOLFStair2ndTo3rd2', 'EOLFStair2ndTo3rd3'],
    arrowPositions: {
       'OLFSideStairs1': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'DOLF203': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'EOLFStair2ndTo3rd3': { phi: Math.PI / 3, theta: Math.PI * 1.05, direction: 'up' }
    }
  },
  {
    id: 'EOLFStair2ndTo3rd3',
    name: 'OLF Stair 2nd to 3rd Floor (3)',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/E OLF STAIR 2ND TO 3RD FLOOR (3).webp',
    category: ['OLP bldg.'],
    connections: ['EOLF2ndFloorStairs', 'olf_stair_2nd_2','FOLF204'],
    arrowPositions: {
      'EOLF2ndFloorStairs': { phi: Math.PI / 3, theta: Math.PI *1.5, direction: 'up' },
      'FOLF204': { phi: Math.PI / 3, theta: Math.PI *2.5, direction: 'up' },
      'olf_stair_2nd_2': { phi: Math.PI / 3, theta: Math.PI * 2.2, direction: 'down' }
    }
  },
  {
    id: 'FOLF204',
    name: 'OLF 204',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/F OLF 204.webp',
    category: ['OLP bldg.'],
    connections: ['FOLF205', 'EOLFStair2ndTo3rd3'],
    arrowPositions: {
      'FOLF205': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'EOLFStair2ndTo3rd3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'FOLF205',
    name: 'OLF 205',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/F OLF 205.webp',
    category: ['OLP bldg.'],
    connections: ['FOLF204', 'FOLF206'],
    arrowPositions: {
      'FOLF204': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'FOLF206': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'FOLF206',
    name: 'OLF 206',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/F OLF 206.webp',
    category: ['OLP bldg.'],
    connections: ['FOLF205'],
    arrowPositions: {
      'FOLF205': { phi: Math.PI / 3, theta: Math.PI * 0.95, direction: 'up' }
    }
  }
];
