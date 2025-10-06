const slr3rdfloor = [
  {
    id: 'slr301stair4th2',
    name: 'SLR 301 Stair to 4th Floor (2)',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/0.2 SLR 301 STAIR TO 4TH FLOOR (2).webp',
    category: ['SLR bldg.'],
    connections: ['slr301_1','slr4th1'],
    arrowPositions: {
      'slr301_1': { phi: Math.PI / 3, theta: -0.3, direction: 'down' },
        'slr4th1': { phi: Math.PI / 3, theta: 0.3, direction: 'up' }
    },
     defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // 👈 always face 2nd floor

  },
  {
    id: 'slr301_1',
    name: 'SLR 301 (1)',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/1 SLR 301 (1).webp',
    category: ['SLR bldg.'],
    connections: ['slr301stair4th2', 'slr304_2','slr2ndStairsSide1'],
    arrowPositions: {
      'slr301stair4th2': { phi: Math.PI / 3, theta: 0.3, direction: 'up' },
      'slr304_2': { phi: Math.PI / 3, theta: -1.5, direction: 'up' },
      'slr2ndStairsSide1': { phi: Math.PI / 3, theta: -3.2, direction: 'up' }
    }
  },
  {
    id: 'slr304_2',
    name: 'SLR 303 ',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/2 SLR 304 (2).webp',
    category: ['SLR bldg.'],
    connections: ['slr301_1', 'slr304'],
    arrowPositions: {
      'slr301_1': { phi: Math.PI / 3, theta: 0, direction: 'up' },
      'slr304': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
  },
  {
    id: 'slr304',
    name: 'SLR 304',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/3 SLR 304.webp',
    category: ['SLR bldg.'],
    connections: ['slr304_2', 'slr305'],
    arrowPositions: {
      'slr304_2': { phi: Math.PI / 3, theta: 0, direction: 'up' },
      'slr305': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
  },
  {
    id: 'slr305',
    name: 'SLR 305',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/4 SLR 305.webp',
    category: ['SLR bldg.'],
    connections: ['slr304', 'slr3rdstair4'],
    arrowPositions: {
      'slr304': { phi: Math.PI / 3, theta: 0, direction: 'up' },
      'slr3rdstair4': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
  },
  {
    id: 'slr3rdstair4',
    name: 'SLR Stair 3rd Floor (4)',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/5 SLR STAIR 3RD FLOOR (4).webp',
    category: ['SLR bldg.'],
    connections: ['slr305', 'slr3rdstair7','slr3rdstair2'],
    arrowPositions: {
      'slr305': { phi: Math.PI / 3, theta: 1.5, direction: 'up' },
      'slr3rdstair7': { phi: Math.PI / 3, theta: -1.5, direction: 'up' },
      'slr3rdstair2': { phi: Math.PI / 3, theta: -3.2 , direction: 'down' }
    }
  },
    {
    id: 'slr3rdstair2',
    name: 'SLR Stair 3rd Floor (4)',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/6.3 SLR STAIR 3RD FLOOR (1).webp',
    category: ['SLR bldg.'],
    connections: ['slr2ndStairs2', 'slr3rdstair4'],
    arrowPositions: {
      'slr2ndStairs2': { phi: Math.PI / 3, theta: -0.8, direction: 'down' },
      'slr3rdstair4': { phi: Math.PI / 3, theta: .8, direction: 'up' }
    } 
  },
  {
    id: 'slr3rdstair7',
    name: 'SLR Stair 3rd Floor (7)',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/6 SLR STAIR 3RD FLOOR (7).webp',
    category: ['SLR bldg.'],
    connections: ['slr3rdstair4', 'slr306','slr4thstairs1'],
    arrowPositions: {
      'slr3rdstair4': { phi: Math.PI / 3, theta: -1.5, direction: 'up' },
      'slr306': { phi: Math.PI / 3, theta: 1.5, direction: 'up' },
      'slr4thstairs1': { phi: Math.PI / 3, theta: 0, direction: 'up' }
    }
  },
  // {
  //   id: 'slr3rdstair1',
  //   name: 'SLR Stair 3rd Floor (1)',
  //   description: 'SLR Building 3rd Floor',
  //   imageUrl: 'images/SLRbldg/6.3 SLR STAIR 3RD FLOOR (1).webp',
  //   category: ['SLR bldg.'],
  //   connections: ['slr3rdstair7', 'slr3rdstair8'],
  //   arrowPositions: {
  //     'slr3rdstair7': { phi: Math.PI / 3, theta: 1, direction: 'up' },
  //     'slr3rdstair8': { phi: Math.PI / 3, theta: 2, direction: 'up' }
  //   }
  // },
  // {
  //   id: 'slr3rdstair8',
  //   name: 'SLR Stair 3rd Floor (8)',
  //   description: 'SLR Building 3rd Floor',
  //   imageUrl: 'images/SLRbldg/7 SLR STAIR 3RD FLOOR (8).webp',
  //   category: ['SLR bldg.'],
  //   connections: ['slr3rdstair1', 'slr306'],
  //   arrowPositions: {
  //     'slr3rdstair1': { phi: Math.PI / 3, theta: 1, direction: 'up' },
  //     'slr306': { phi: Math.PI / 3, theta: 2, direction: 'up' }
  //   }
  // },
  {
    id: 'slr306',
    name: 'SLR 306',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/8 SLR 306.webp',
    category: ['SLR bldg.'],
    connections: ['slr3rdstair7', 'slr307'],
    arrowPositions: {
      'slr3rdstair7': { phi: Math.PI / 3, theta: 3.2, direction: 'up' },
      'slr307': { phi: Math.PI / 3, theta: 0, direction: 'up' }
    }
  },
  {
    id: 'slr307',
    name: 'SLR 307',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/9 SLR 307.webp',
    category: ['SLR bldg.'],
    connections: ['slr306', 'slr308'],
    arrowPositions: {
      'slr306': { phi: Math.PI / 3, theta: 3.2, direction: 'up' },
      'slr308': { phi: Math.PI / 3, theta: 0, direction: 'up' }
    }
  },
  {
    id: 'slr308',
    name: 'SLR 308',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/10 SLR 308.webp',
    category: ['SLR bldg.'],
    connections: ['slr307', 'slr309_1'],
    arrowPositions: {
      'slr307': { phi: Math.PI / 3, theta: 3.2, direction: 'up' },
      'slr309_1': { phi: Math.PI / 3, theta: 0, direction: 'up' }
    }
  },
  {
    id: 'slr309_1',
    name: 'SLR 309 (1)',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/11 SLR 309 (1).webp',
    category: ['SLR bldg.'],
    connections: ['slr308', 'slr309_2'],
    arrowPositions: {
      'slr308': { phi: Math.PI / 3, theta: 3.2, direction: 'up' },
      'slr309_2': { phi: Math.PI / 3, theta: 0, direction: 'up' }
    }
  },
  {
    id: 'slr309_2',
    name: 'SLR 309 (2)',
    description: 'SLR Building 3rd Floor',
    imageUrl: 'images/SLRbldg/12 SLR 309 (2).webp',
    category: ['SLR bldg.'],
    connections: ['slr309_1'],
    arrowPositions: {
      'slr309_1': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
  }
];
