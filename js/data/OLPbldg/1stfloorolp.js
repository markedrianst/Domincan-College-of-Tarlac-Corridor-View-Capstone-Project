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
      'dToResurrectionChapel3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
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
    connections: ['dToResurrectionChapel3','olp2nd_stairs_from1st','Canteen1'],
    arrowPositions: {
      'dToResurrectionChapel3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olp2nd_stairs_from1st': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'Canteen1': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }
    },
  },
  {
  id: 'Canteen1',
  name: 'Canteen Area',
  description: 'Canteen Area',
  imageUrl: 'images/OLPbldg/CANTEEN 1.webp',
  category: ['OLP bldg.'],
  connections: ['Canteen2','pOLP1stFloor'],
  arrowPositions: {
    'Canteen2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
    'pOLP1stFloor': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
  },
},
{
  id: 'Canteen2',
  name: 'Canteen Hallway',
  description: 'Canteen Area',
  imageUrl: 'images/OLPbldg/CANTEEN 2.webp',
  category: ['OLP bldg.'],
  connections: ['Canteen1', 'Canteen3'],
  arrowPositions: {
    'Canteen1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
    'Canteen3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
  },
},
{
  id: 'Canteen3',
  name: 'Canteen Area',
  description: 'Canteen Area',
  imageUrl: 'images/OLPbldg/CANTEEN 3.webp',
  category: ['OLP bldg.'],
  connections: ['Canteen2', 'Canteen4'],
  arrowPositions: {
    'Canteen2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
    'Canteen4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
  },
},
{
  id: 'Canteen4',
  name: 'Canteen Counter Area',
  description: 'Canteen Area',
  imageUrl: 'images/OLPbldg/CANTEEN 4.webp',
  category: ['OLP bldg.'],
  connections: ['Canteen3', 'Canteen5','CanteenD2'],
  arrowPositions: {
    'Canteen3': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
    'Canteen5': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
    'CanteenD2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
  },
},
{
  id: 'Canteen5',
  name: 'To Saint Nicholas Church',
  description: 'Going to Saint Nicholas Church',
  imageUrl: 'images/OLPbldg/CANTEEN 5.webp',
  category: ['OLP bldg.'],
  connections: ['Canteen4','Canteen6'],
  arrowPositions: {
    'Canteen4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    'Canteen6': { phi: Math.PI / 3, theta: Math.PI * 1.7, direction: 'up' }
  },
},{
  id: 'Canteen6',
  name: 'To SLR ',
  description: 'Going to Saint Nicholas Church',
  imageUrl: 'images/OLPbldg/D CANTEEN (11).webp',
  category: ['OLP bldg.'],
  connections: ['Canteen5','slr1st12'],
  arrowPositions: {
    'Canteen5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    'slr1st12': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }
  },
},
{
  id: 'CanteenD1',
  name: 'Canteen Area',
  description: 'Canteen Area.',
  imageUrl: 'images/OLPbldg/D CANTEEN (1).webp',
  category: ['OLP bldg.'],
  connections: ['dcourt4', 'CanteenD2'],
  arrowPositions: {
    'dcourt4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    'CanteenD2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
  },
},

{
  id: 'CanteenD2',
  name: 'Canteen Area',
  description: 'Canteen Area',
  imageUrl: 'images/OLPbldg/D CANTEEN (2).webp',
  category: ['OLP bldg.'],
  connections: ['CanteenD1','Canteen4'],
  arrowPositions: {
    'Canteen4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
    'CanteenD1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
  },
},
];