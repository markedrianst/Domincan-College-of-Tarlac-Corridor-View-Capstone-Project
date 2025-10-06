const slrfourthfloor = [
  {
    id: 'slr4th1',
    name: 'SLR Stair 4th Floor (1)',
    description: 'SLR Building 4th Floor Stairs',
    imageUrl: 'images/SLRbldg/1 SLR STAIR 4TH FLOOR (1).webp',
    category: ['SLR bldg.'],
    connections: ['slr301stair4th2', 'slr4th3','slr4th4'],
    arrowPositions: {
      'slr4th3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr301stair4th2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'down' },
      'slr4th4': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }

    }
  },
  {
    id: 'slr4th3',
    name: 'SLR 401,402',
    description: 'SLR Building 4th Floor Room 401',
    imageUrl: 'images/SLRbldg/3 SLR 401.webp',
    category: ['SLR bldg.'],
    connections: ['slr4th1', 'slr4th4'],
    arrowPositions: {
      'slr4th1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    }
  },
  {
    id: 'slr4th4',
    name: 'SLR 403',
    description: 'SLR Building 4th Floor Room 403',
    imageUrl: 'images/SLRbldg/4 SLR 403.webp',
    category: ['SLR bldg.'],
    connections: ['slr4th1', 'slr4th5'],
    arrowPositions: {
      'slr4th1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'slr4th5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'slr4th5',
    name: 'SLR 404',
    description: 'SLR Building 4th Floor Room 404',
    imageUrl: 'images/SLRbldg/5 SLR 404.webp',
    category: ['SLR bldg.'],
    connections: ['slr4th4', 'slr4th6'],
    arrowPositions: {
      'slr4th4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'slr4th6': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'slr4th6',
    name: 'SLR 405',
    description: 'SLR Building 4th Floor Room 405',
    imageUrl: 'images/SLRbldg/6 SLR 405.webp',
    category: ['SLR bldg.'],
    connections: ['slr4th5', 'slr4thstairs1'],
    arrowPositions: {
      'slr4th5': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'slr4thstairs1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
    {
    id: 'slr4thstairs1',
    name: 'SLR stairs',
    description: 'SLR Building 4th Floor Room 405',
    imageUrl: 'images/SLRbldg/7 SLR STAIR 4TH FLOOR (3).webp',
    category: ['SLR bldg.'],
    connections: ['slr4th7', 'slr4th6','slr3rdstair7'],
    arrowPositions: {
      'slr4th7': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'slr4th6': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'slr3rdstair7': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'down' }
    }
  },
  {
    id: 'slr4th7',
    name: 'SLR 406',
    description: 'SLR Building 4th Floor Room 406',
    imageUrl: 'images/SLRbldg/8 SLR 406.webp',
    category: ['SLR bldg.'],
    connections: ['slr4thstairs1', 'slr4th8'],
    arrowPositions: {
      'slr4thstairs1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr4th8': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr4th8',
    name: 'SLR 407 (1)',
    description: 'SLR Building 4th Floor Room 407',
    imageUrl: 'images/SLRbldg/9 SLR 407 (1).webp',
    category: ['SLR bldg.'],
    connections: ['slr4th7', 'slr4th9'],
    arrowPositions: {
      'slr4th7': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr4th9': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr4th9',
    name: 'SLR 407 (2)',
    description: 'SLR Building 4th Floor Room 407 Extension',
    imageUrl: 'images/SLRbldg/10 SLR 407 (2).webp',
    category: ['SLR bldg.'],
    connections: ['slr4th8', 'slr4th10'],
    arrowPositions: {
      'slr4th8': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr4th10': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr4th10',
    name: 'SLR 409 (2)',
    description: 'SLR Building 4th Floor Room 409',
    imageUrl: 'images/SLRbldg/11.1 SLR 409 (2).webp',
    category: ['SLR bldg.'],
    connections: ['slr4th9', 'slr4th11'],
    arrowPositions: {
      'slr4th9': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'slr4th11': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }
    }
  },
  {
    id: 'slr4th11',
    name: 'SLR 409 Dulo',
    description: 'SLR Building 4th Floor End Section',
    imageUrl: 'images/SLRbldg/12 SLR 409 (4) DULO.webp',
    category: ['SLR bldg.'],
    connections: ['slr4th10'],
    arrowPositions: {
      'slr4th10': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  }
];
