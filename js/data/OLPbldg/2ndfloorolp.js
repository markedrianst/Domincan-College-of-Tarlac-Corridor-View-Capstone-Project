const olp2ndfloor = [
  {
    id: 'olp2nd_stairs_from1st',
    name: 'Stairs from 1st to 2nd',
    description: 'OLP bldg. 2nd floor',
    imageUrl: 'images/OLPbldg/OLP2ndfloor3.jpg',
    category: ['OLP bldg.'],
    connections: ['olp2nd_stairs_to3rd','1stfloorolpstairs'],
    arrowPositions: {
      '1stfloorolpstairs': { phi: Math.PI / 3, theta: Math.PI * 1.1, direction: 'down'},
      'olp2nd_stairs_to3rd': { phi: Math.PI / 3, theta: Math.PI * 0.75, direction: 'up'}
    }
  },

  {
    id: 'olp2nd_stairs_to3rd',
    name: 'Stairs from 2nd to 3rd',
    description: 'OLP bldg. 2nd floor',
    imageUrl: 'images/OLPbldg/OLP2ndfloor2.jpg',
    category: ['OLP bldg.'],
    connections: ['olp2nd_stairs_from1st','olp2nd_room1','olp3rdfloorstairs'],
    arrowPositions: {
      'olp3rdfloorstairs': { phi: Math.PI / 3, theta: Math.PI * 1.4, direction: 'up'},
      'olp2nd_room1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'},
      'olp2nd_stairs_from1st': { phi: Math.PI / 3, theta: Math.PI * 1.7, direction: 'up'}
    }
  },

  {
    id: 'olp2nd_room1',
    name: '2nd Floor 201,202',
    description: 'OLP bldg. 2nd floor',
    imageUrl: 'images/OLPbldg/OLP2ndfloor1.jpg',
    category: ['OLP bldg.'],
    connections: ['olp2nd_room2','olp2nd_stairs_to3rd'],
    arrowPositions: {
      'olp2nd_room2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'},
      'olp2nd_stairs_to3rd': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up'}
    }
  },

  {
    id: 'olp2nd_room2',
    name: '2nd Floor  203,204',
    description: 'OLP bldg. 2nd floor',
    imageUrl: 'images/OLPbldg/OLP2ndfloor.jpg',
    category: ['OLP bldg.'],
    connections: ['slr2nd4','olp2nd_room1'],
    arrowPositions: {
      'slr2nd4': { phi: Math.PI / 4, theta: Math.PI * 1.35, direction: 'up'},
      'olp2nd_room1': { phi: Math.PI / 3, theta: Math.PI * 2.4, direction: 'up'}
    }
  }
];
