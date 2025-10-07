const olp1stfloor = [
  {
    id: 'dToChapel1',
    name: 'Path to Chapel',
    description: 'OLP Building - Path leading to Chapel',
    imageUrl: 'images/OLPbldg/D TO CHAPEL (1).webp',
    category: ['OLP bldg.'],
    connections: ['dToOfficeAdmin2','dachall3'],
    arrowPositions: {
      'dToOfficeAdmin2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'dachall3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    },
  },
  {
    id: 'dToOfficeAdmin2',
    name: 'Path to Office and Admin',
    description: 'OLP Building - Corridor to Office and Admin Area',
    imageUrl: 'images/OLPbldg/D TO OFFICE TO ADMIN (2).webp',
    category: ['OLP bldg.'],
    connections: ['dToChapel1', 'dToResurrectionChapel3'],
    arrowPositions: {
      'dToChapel1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'dToResurrectionChapel3': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
    },
  },
  {
    id: 'dToResurrectionChapel3',
    name: 'Path to Resurrection Chapel',
    description: 'OLP Building - Corridor to Resurrection Chapel',
    imageUrl: 'images/OLPbldg/D TO RESURRECTION CHAPEL (3).webp',
    category: ['OLP bldg.'],
    connections: ['dToOfficeAdmin2', 'pOLP1stFloor'],
    arrowPositions: {
      'dToOfficeAdmin2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'pOLP1stFloor': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
    },
  },
  {
    id: 'pOLP1stFloor',
    name: 'OLP 1st Floor',
    description: 'Main Hall of OLP Building 1st Floor',
    imageUrl: 'images/OLPbldg/P OLP 1ST FLOOR.webp',
    category: ['OLP bldg.'],
    connections: ['dToResurrectionChapel3','olp2nd_stairs_from1st'],
    arrowPositions: {
      'dToResurrectionChapel3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olp2nd_stairs_from1st': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    },
  }
];