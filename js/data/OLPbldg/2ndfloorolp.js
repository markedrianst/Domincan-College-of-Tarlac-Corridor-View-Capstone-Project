const olp2ndfloor = [
  {
    id: 'olp2nd_stairs_from1st',
    name: 'Stairs from 1st to 2nd',
    description: 'OLP bldg. 2nd floor',
    imageUrl: 'images/OLPbldg/2 OLP 201 STAIR (10).webp',
    category: ['OLP bldg.'],
    connections: ['olp2nd_stair_6', 'pOLP1stFloor'],
    arrowPositions: {
      'olp2nd_stair_6': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'pOLP1stFloor': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'down' }
    },
    defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1.7 } // 👈 face the 2nd floor hallway
  },

  {
    id: 'olp2nd_stair_6',
    name: 'Mid Stairway Section',
    description: 'OLP bldg. 2nd floor stairway midpoint',
    imageUrl: 'images/OLPbldg/3 OLP 201 STAIR (6).webp',
    category: ['OLP bldg.'],
    connections: ['olp2nd_stairs_from1st', 'olp2nd_stair_5'],
    arrowPositions: {
      'olp2nd_stairs_from1st': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'olp2nd_stair_5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'olp2nd_stair_5',
    name: 'Upper Stairway',
    description: 'OLP bldg. 2nd floor upper stair area',
    imageUrl: 'images/OLPbldg/5 OLP 201 STAIR (5).webp',
    category: ['OLP bldg.'],
    connections: ['olp2nd_stair_6', 'olp2nd_stair_1'],
    arrowPositions: {
      'olp2nd_stair_6': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'olp2nd_stair_1': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }
    }
  },

  {
    id: 'olp2nd_stair_1',
    name: 'Hallway Entrance',
    description: 'OLP bldg. 2nd floor hallway entrance',
    imageUrl: 'images/OLPbldg/8 OLP 201 STAIR (1).webp',
    category: ['OLP bldg.'],
    connections: ['olp2nd_stair_5', 'olp2nd_room201','olp3rd_stair_3'],
    arrowPositions: {
      'olp2nd_stair_5': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'olp2nd_room201': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
        'olp3rd_stair_3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'olp2nd_room201',
    name: 'Room 201',
    description: 'OLP bldg. 2nd floor - Room 201',
    imageUrl: 'images/OLPbldg/9 OLP 201.webp',
    category: ['OLP bldg.'],
    connections: ['olp2nd_stair_1', 'olp2nd_room202'],
    arrowPositions: {
      'olp2nd_stair_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'olp2nd_room202': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'olp2nd_room202',
    name: 'Room 202',
    description: 'OLP bldg. 2nd floor - Room 202',
    imageUrl: 'images/OLPbldg/10 OLP 202.webp',
    category: ['OLP bldg.'],
    connections: ['olp2nd_room201', 'olp2nd_room203'],
    arrowPositions: {
      'olp2nd_room201': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'olp2nd_room203': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'olp2nd_room203',
    name: 'Room 203',
    description: 'OLP bldg. 2nd floor - Room 203',
    imageUrl: 'images/OLPbldg/11 OLP 203.webp',
    category: ['OLP bldg.'],
    connections: ['olp2nd_room202', 'olp2nd_room204'],
    arrowPositions: {
      'olp2nd_room202': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'olp2nd_room204': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'olp2nd_room204',
    name: 'Room 204',
    description: 'OLP bldg. 2nd floor - Room 204',
    imageUrl: 'images/OLPbldg/12 OLP 204 (1).webp',
    category: ['OLP bldg.'],
    connections: ['olp2nd_room203', 'slr2nd10'],
    arrowPositions: {
      'olp2nd_room203': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
     'slr2nd10': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },


];
