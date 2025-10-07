const olp1stfloor = [
  {
    id: 'dToChapel1',
    name: 'Path to Chapel',
    description: 'OLP Building - Path leading to Chapel',
    imageUrl: 'images/OLPbldg/D TO CHAPEL (1).webp',
    category: ['OLP bldg.'],
    connections: ['dToOfficeAdmin2'],
  },
  {
    id: 'dToOfficeAdmin2',
    name: 'Path to Office and Admin',
    description: 'OLP Building - Corridor to Office and Admin Area',
    imageUrl: 'images/OLPbldg/D TO OFFICE TO ADMIN (2).webp',
    category: ['OLP bldg.'],
    connections: ['dToResurrectionChapel3'],
  },
  {
    id: 'dToResurrectionChapel3',
    name: 'Path to Resurrection Chapel',
    description: 'OLP Building - Corridor to Resurrection Chapel',
    imageUrl: 'images/OLPbldg/D TO RESURRECTION CHAPEL (3).webp',
    category: ['OLP bldg.'],
    connections: ['pOLP1stFloor'],
  },
  {
    id: 'pOLP1stFloor',
    name: 'OLP 1st Floor',
    description: 'Main Hall of OLP Building 1st Floor',
    imageUrl: 'images/OLPbldg/P OLP 1ST FLOOR.webp',
    category: ['OLP bldg.'],
    connections: [],
  }
];
