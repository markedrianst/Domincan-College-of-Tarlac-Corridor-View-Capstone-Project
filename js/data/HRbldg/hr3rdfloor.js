const hr3rdfloor = [

  {
    id: 'Hr3rd1',
    name: 'HR 2nd to 3rd Floor Stairs',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/0.3 HR 2nd Floor to 3rd Floor Stairs.webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd4','hrside13a'],
    arrowPositions: {
      'Hr3rd4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'hrside13a': { phi: Math.PI / 3, theta: Math.PI * 1.75, direction: 'down' }
    },          defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // 👈 always face 2nd floor
  },

  {
    id: 'Hr3rd2',
    name: 'HR 301',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/1.1 HR 301.webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd1', 'Hr3rd3'],
    arrowPositions: {
      'Hr3rd1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'Hr3rd3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd3',
    name: 'HR 301 Computer Room',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/1.2 HR 301 COMPUTER ROOM.webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd2', 'Hr3rd4'],
    arrowPositions: {
      'Hr3rd2': { phi: Math.PI / 3, theta: Math.PI * 2  , direction: 'up' },
      'Hr3rd4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd4',
    name: 'HR 302',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/2 HR 302.webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd1', 'Hr3rd3','Hr3rd6'],
    arrowPositions: {
      'Hr3rd1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'down' },
       'Hr3rd6': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'Hr3rd3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd6',
    name: 'HR Stair 3rd Floor',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/3 HR STAIR 3RD FLOOR.webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd4', 'Hr3rd8'],
    arrowPositions: {
      'Hr3rd4': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'Hr3rd8': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }
    }
  },


  {
    id: 'Hr3rd8',
    name: 'HR 303',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/4 HR 303.webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd6', 'Hr3rd9'],
    arrowPositions: {
      'Hr3rd6': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Hr3rd9': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd9',
    name: 'HR 304',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/4.1 HR 304.webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd8', 'Hr3rd10'],
    arrowPositions: {
      'Hr3rd8': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Hr3rd10': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd10',
    name: 'HR 305',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/4.2 HR 304.webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd9', 'Hr3rd14'],
    arrowPositions: {
      'Hr3rd9': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Hr3rd14': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd13',
    name: 'HR 3rd to 4th floor Stair (2)',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/5.2 HR 305 STAIR (2).webp',
    category: ['HR bldg.'],
    connections: ['hr4thStair4', 'Hr3rd14'],
    arrowPositions: {
     'hr4thStair4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'Hr3rd14': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd14',
    name: 'HR 306',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/6 HR 306 (1).webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd10', 'Hr3rd13','Hr3rd15'],
    arrowPositions: {
      'Hr3rd10': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Hr3rd15': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'Hr3rd13': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd15',
    name: 'HR 306 to 2nd floor stairs',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/6.1 HR 306 (2).webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd14', 'Hr3rd16','Hr3rd18'],
    arrowPositions: {
      'Hr3rd14': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Hr3rd18': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'Hr3rd16': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd16',
    name: 'HR 306 Stair (2)',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/6.2 HR 306 STAIR (2).webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd15', 'Hr2nd1'],
    arrowPositions: {
      'Hr3rd15': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'Hr2nd1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'down' }
    }
  },

  {
    id: 'Hr3rd18',
    name: 'HR 307',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/7 HR 307.webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd15', 'Hr3rd19'],
    arrowPositions: {
      'Hr3rd15': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Hr3rd19': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd19',
    name: 'HR 308 ',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/8 HR 308 (1).webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd18', 'Sd3rdfloorHRext5','Hr3rd20'],
    arrowPositions: {
      'Hr3rd18': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Hr3rd20': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'Sd3rdfloorHRext5': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd20',
    name: 'SN 301',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/8.1 HR 308 (2).webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd19', 'Hr3rd21'],
    arrowPositions: {
      'Hr3rd19': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Hr3rd21': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'Hr3rd21',
    name: 'HR 308 (3)',
    description: 'HR 3rd floor',
    imageUrl: 'images/HRbldg/8.1 HR 308 (3).webp',
    category: ['HR bldg.'],
    connections: ['Hr3rd20', 'Hr3rd22'],
    arrowPositions: {
      'Hr3rd20': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    }
  },
];
