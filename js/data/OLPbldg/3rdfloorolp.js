const olp3rdfloor = [
  {
    id: 'olp3rd_stair_3',
    name: 'Stairway Section 1',
    description: 'OLP bldg. 3rd floor - Stairs section 1',
    imageUrl: 'images/OLPbldg/3 OLP 301 STAIR (3).webp',
    category: ['OLP bldg.'],
    connections: ['olp3rd_stair_2','olp2nd_stair_1'],
    arrowPositions: {
      'olp2nd_stair_1': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up' },
      'olp3rd_stair_2': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up' }
    },
    defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // 👈 always face 2nd floor

  },

  {
    id: 'olp3rd_stair_2',
    name: 'Stairs Section 2',
    description: 'OLP bldg. 3rd floor - Middle stairs section',
    imageUrl: 'images/OLPbldg/4 OLP 3RD FLOOR STAIRS.webp',
    category: ['OLP bldg.'],
    connections: ['olp3rd_stair_3','olp3rd_stair_1','Hr3rd2'],
    arrowPositions: {
      'olp3rd_stair_3': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'olp3rd_stair_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'Hr3rd2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'olp3rd_stair_1',
    name: 'Top of Stairs',
    description: 'OLP bldg. 3rd floor - Top of stairway to hallway',
    imageUrl: 'images/OLPbldg/5 OLP 301 STAIR.webp',
    category: ['OLP bldg.'],
    connections: ['olp3rd_stair_2','olp3rd_room301','olp4thstair1'],
    arrowPositions: {
      'olp3rd_stair_2': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'olp3rd_room301': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'olp4thstair1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'olp3rd_room301',
    name: 'Room 301',
    description: 'OLP bldg. 3rd floor - Room 301',
    imageUrl: 'images/OLPbldg/6 OLP 301.webp',
    category: ['OLP bldg.'],
    connections: ['olp3rd_stair_1','olp3rd_room302'],
    arrowPositions: {
      'olp3rd_stair_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'olp3rd_room302': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'olp3rd_room302',
    name: 'Room 302',
    description: 'OLP bldg. 3rd floor - Room 302',
    imageUrl: 'images/OLPbldg/7 OLP 302.webp',
    category: ['OLP bldg.'],
    connections: ['olp3rd_room301','olp3rd_room303'],
    arrowPositions: {
      'olp3rd_room301': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'olp3rd_room303': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'olp3rd_room303',
    name: 'Room 303',
    description: 'OLP bldg. 3rd floor - Room 303',
    imageUrl: 'images/OLPbldg/8 OLP 303.webp',
    category: ['OLP bldg.'],
    connections: ['olp3rd_room302','olp3rd_room304'],
    arrowPositions: {
      'olp3rd_room302': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'olp3rd_room304': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'olp3rd_room304',
    name: 'Room 304',
    description: 'OLP bldg. 3rd floor - Room 304',
    imageUrl: 'images/OLPbldg/9 OLP 304.webp',
    category: ['OLP bldg.'],
    connections: ['olp3rd_room303','slr309_1'],
    arrowPositions: {
      'olp3rd_room303': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'slr309_1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  }
];
