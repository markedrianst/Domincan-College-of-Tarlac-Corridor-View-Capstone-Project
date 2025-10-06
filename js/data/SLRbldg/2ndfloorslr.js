const slrsecondfloor = [
  {
    id: 'slr2nd1',
    name: 'SLR 201 (1)',
    description: 'SLR Building 2nd Floor – Room 201 (1)',
    imageUrl: 'images/SLRbldg/1 SLR 201 (1).webp',
    category: ['SLR bldg.'],
    connections: ['slr2nd2','sn2ndstair1'],
    arrowPositions: {
      'slr2nd2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn2ndstair1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'slr2nd2',
    name: 'SLR 201 (2)',
    description: 'SLR Building 2nd Floor – Room 201 (2)',
    imageUrl: 'images/SLRbldg/2 SLR 201 (2).webp',
    category: ['SLR bldg.'],
    connections: ['slr2nd1', 'slr2nd2a','slr2nd3'],
    arrowPositions: {
      'slr2nd1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr2nd2a': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'slr2nd3': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },

  {
    id: 'slr2nd2a',
    name: 'SLR 201 (3)',
    description: 'SLR Building 2nd Floor – Room 201 (3)',
    imageUrl: 'images/SLRbldg/2.1 SLR 201 (3).webp',
    category: ['SLR bldg.'],
    connections: ['slr2nd2', 'slr2ndStairsSide1'],
    arrowPositions: {
      'slr2nd2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr2ndStairsSide1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'slr2ndStairsSide1',
    name: 'Side Stairs to 3rd Floor (1)',
    description: 'SLR Building 2nd to 3rd Floor (Side Stairs 1)',
    imageUrl: 'images/SLRbldg/2.2 SLR STAIR 2ND TO 3RD FLOOR(SIDE STAIRS)(1).webp',
    category: ['SLR bldg.', 'Stairs'],
    connections: ['slr2nd2a', 'slr301_1'],
    arrowPositions: {
      'slr2nd2a': { phi: Math.PI / 3, theta: Math.PI * 0.8, direction: 'down' },
      'slr301_1': { phi: Math.PI / 3, theta: Math.PI * 1.1, direction: 'up' }
    }, defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 2 } // 👈 always face 2nd floor

  },

  {
    id: 'slr2nd3',
    name: 'SLR 202 (2)',
    description: 'SLR Building 2nd Floor – Room 202 (2)',
    imageUrl: 'images/SLRbldg/3 SLR 202 (2).webp',
    category: ['SLR bldg.'],
    connections: ['slr2nd2', 'slr2nd4'],
    arrowPositions: {
      'slr2nd2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'slr2nd4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'slr2nd4',
    name: 'SLR 202',
    description: 'SLR Building 2nd Floor – Room 202',
    imageUrl: 'images/SLRbldg/4 SLR 202.webp',
    category: ['SLR bldg.'],
    connections: ['slr2nd3', 'slr2nd5'],
    arrowPositions: {
      'slr2nd3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'slr2nd5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'slr2nd5',
    name: 'SLR 203 Faculty Room',
    description: 'SLR Building 2nd Floor – Faculty Room 203',
    imageUrl: 'images/SLRbldg/5 SLR 203 FACULTY ROOM.webp',
    category: ['SLR bldg.', 'Offices'],
    connections: ['slr2nd4', 'slr2nd6'],
    arrowPositions: {
      'slr2nd4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'slr2nd6': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'slr2nd6',
    name: 'SLR 204',
    description: 'SLR Building 2nd Floor – Room 204',
    imageUrl: 'images/SLRbldg/6 SLR 204.webp',
    category: ['SLR bldg.'],
    connections: ['slr2nd5', 'slr2ndStairs1'],
    arrowPositions: {
      'slr2nd5': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'slr2ndStairs1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'slr2ndStairs1',
    name: 'SLR Stair 2nd Floor (1)',
    description: 'Main Stairs on 2nd Floor (1)',
    imageUrl: 'images/SLRbldg/7 SLR STAIR 2ND FLOOR (1).webp',
    category: ['SLR bldg.', 'Stairs'],
    connections: ['slr2nd6', 'slr2ndStairs2','slr1st5'],
    arrowPositions: {
      'slr2nd6': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'slr2ndStairs2': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'slr1st5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'down' }
    }
  },

  {
    id: 'slr2ndStairs2',
    name: 'SLR Stair 2nd Floor (4)',
    description: 'Main Stairs on 2nd Floor (4)',
    imageUrl: 'images/SLRbldg/7.2 SLR STAIR 2ND FLOOR (4).webp',
    category: ['SLR bldg.', 'Stairs'],
    connections: ['slr2ndStairs1', 'slr2nd7','slr3rdstair2'],
    arrowPositions: {
      'slr2nd7': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'slr2ndStairs1': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'slr3rdstair2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'slr2nd7',
    name: 'SLR 205',
    description: 'SLR Building 2nd Floor – Room 205',
    imageUrl: 'images/SLRbldg/8 SLR 205.webp',
    category: ['SLR bldg.'],
    connections: ['slr2ndStairs2', 'slr2nd8'],
    arrowPositions: {
      'slr2ndStairs2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr2nd8': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'slr2nd8',
    name: 'Grade School Library (1)',
    description: 'SLR Building 2nd Floor – Grade School Library (1)',
    imageUrl: 'images/SLRbldg/9 SLR 206 GRADE SCHOOL LIBRARY (1).webp',
    category: ['SLR bldg.', 'Library'],
    connections: ['slr2nd7', 'slr2nd9'],
    arrowPositions: {
      'slr2nd7': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr2nd9': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'slr2nd9',
    name: 'Grade School Library (2)',
    description: 'SLR Building 2nd Floor – Grade School Library (2)',
    imageUrl: 'images/SLRbldg/10 SLR 206 GRADE SCHOOL LIBRARY (2).webp',
    category: ['SLR bldg.', 'Library'],
    connections: ['slr2nd8', 'slr2nd10'],
    arrowPositions: {
      'slr2nd8': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr2nd10': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'slr2nd10',
    name: 'SLR 208 Computer Room',
    description: 'SLR Building 2nd Floor – Computer Room 208',
    imageUrl: 'images/SLRbldg/11 SLR 208 COMPUTER ROOM.webp',
    category: ['SLR bldg.', 'Computer Room'],
    connections: ['slr2nd9', 'slr2nd11'],
    arrowPositions: {
      'slr2nd9': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr2nd11': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'slr2nd11',
    name: 'SLR 208',
    description: 'SLR Building 2nd Floor – Room 208',
    imageUrl: 'images/SLRbldg/12 SLR 208.webp',
    category: ['SLR bldg.'],
    connections: ['slr2nd10'],
    arrowPositions: {
      'slr2nd10': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  }
];
