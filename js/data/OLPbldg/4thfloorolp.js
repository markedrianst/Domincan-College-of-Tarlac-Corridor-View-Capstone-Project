const olp4thfloor = [
  {
    id: 'olp4thstair1',
    name: 'OLP Stair 4th Floor (2)',
    description: 'OLP Building 4th Floor Staircase Entry',
    imageUrl: 'images/OLPbldg/1 OLP STAIR 4TH FLOOR (2).webp',
    category: ['OLP bldg.'],
    connections: ['olp4thstair2','olp3rd_stair_1'],
    arrowPositions: {
      'olp4thstair2': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'olp3rd_stair_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'down' }
    },          defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // 👈 always face 2nd floor

  },

  {
    id: 'olp4thstair2',
    name: 'OLP Stair 4th Floor (4)',
    description: 'OLP Building 4th Floor Mid Stairway',
    imageUrl: 'images/OLPbldg/3 OLP STAIR 4TH FLOOR (4).webp',
    category: ['OLP bldg.'],
    connections: ['olp4thstair1', 'olp4thstair3'],
    arrowPositions: {
      'olp4thstair1': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'olp4thstair3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'olp4thstair3',
    name: 'OLP Stair 4th Floor (5)',
    description: 'OLP Building 4th Floor Exit Stair to Hallway',
    imageUrl: 'images/OLPbldg/4 OLP STAIR 4TH FLOOR (5).webp',
    category: ['OLP bldg.'],
    connections: ['olp4thstair2', 'olp401_1'],
    arrowPositions: {
      'olp4thstair2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olp401_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'olp401_1',
    name: 'OLP 401 (1)',
    description: 'OLP Building Room 401',
    imageUrl: 'images/OLPbldg/5 OLP 401 (1).webp',
    category: ['OLP bldg.'],
    connections: ['olp4thstair3', 'olp401_2','hr401gym'],
    arrowPositions: {
      'olp4thstair3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olp401_2': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'hr401gym': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }
    }
  },

  {
    id: 'olp401_2',
    name: 'OLP 401 (2)',
    description: 'OLP Building Room 401 (Alternate View)',
    imageUrl: 'images/OLPbldg/5.1 OLP 401 (2).webp',
    category: ['OLP bldg.'],
    connections: ['olp401_1', 'olp402'],
    arrowPositions: {
      'olp401_1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olp402': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'olp402',
    name: 'OLP 402',
    description: 'OLP Building Room 402',
    imageUrl: 'images/OLPbldg/6 OLP 402.webp',
    category: ['OLP bldg.'],
    connections: ['olp401_2', 'olp403'],
    arrowPositions: {
      'olp401_2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olp403': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'olp403',
    name: 'OLP 403',
    description: 'OLP Building Room 403',
    imageUrl: 'images/OLPbldg/7 OLP 403.webp',
    category: ['OLP bldg.'],
    connections: ['olp402', 'olp404_2'],
    arrowPositions: {
      'olp402': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olp404_2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'olp404_2',
    name: 'OLP 404 (2)',
    description: 'OLP Building Room 404',
    imageUrl: 'images/OLPbldg/8 OLP 404 (2).webp',
    category: ['OLP bldg.'],
    connections: ['olp403', 'olp404stair'],
    arrowPositions: {
      'olp403': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olp404stair': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'olp404stair',
    name: 'OLP 404 Stair',
    description: 'OLP Building 4th Floor Exit Stair',
    imageUrl: 'images/OLPbldg/8.1 OLP 404 STAIR.webp',
    category: ['OLP bldg.'],
    connections: ['olp404_2','slr4th10'],
    arrowPositions: {
      'olp404_2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },      
      'slr4th10': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  }
];
