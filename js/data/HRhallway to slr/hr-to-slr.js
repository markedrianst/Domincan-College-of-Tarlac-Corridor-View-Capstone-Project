const achievements = [
  {
    id: 'challway2nd',
    name: 'C Hallway to Achievements 2nd',
    description: 'Achievements Building 2nd Floor',
    imageUrl: 'images/HR to SLR/C HALLWAY TO ACHIEVEMENTS 2ND.webp',
    category: ['HR bldg.'],
    connections: ['dachall1','SDtoOLF5'],
    arrowPositions: {
      'SDtoOLF5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'dachall1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'dachall1',
    name: 'D Achievements Hall (1)',
    description: 'Achievements Hall 2nd Floor',
    imageUrl: 'images/HR to SLR/D ACHIEVEMENTS HALL (1).webp',
    category: ['HR bldg.'],
    connections: ['grandhall', 'challway2nd'],
    arrowPositions: {
      'grandhall': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'challway2nd': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'dachall3',
    name: 'D Achievements Hall (3)',
    description: 'Achievements Hall 2nd Floor',
    imageUrl: 'images/HR to SLR/D ACHIEVEMENTS HALL (3).webp',
    category: ['HR bldg.'],
    connections: ['dcourt1', 'grandhall','dToChapel1'],
    arrowPositions: {
      'dcourt1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'grandhall': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'dToChapel1': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },

  {
    id: 'dcourt1',
    name: 'D Court (1)',
    description: 'Achievements Court Area',
    imageUrl: 'images/HR to SLR/D COURT (1).webp',
    category: ['Court'],
    connections: ['dcourt2', 'dachall3'],
    arrowPositions: {
      'dcourt2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'dachall3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'dcourt2',
    name: 'D Court (2)',
    description: 'Achievements Court Area',
    imageUrl: 'images/HR to SLR/D COURT (2).webp',
    category: ['Court'],
    connections: ['dcourt3', 'dcourt1'],
    arrowPositions: {
      'dcourt3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'dcourt1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'dcourt3',
    name: 'D Court (3)',
    description: 'Achievements Court Area',
    imageUrl: 'images/HR to SLR/D COURT (3).webp',
    category: ['Court'],
    connections: ['dcourt4', 'dcourt2'],
    arrowPositions: {
      'dcourt4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'dcourt2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'dcourt4',
    name: 'D Court (4)',
    description: 'Achievements Court Area',
    imageUrl: 'images/HR to SLR/D COURT (4).webp',
    category: ['Court'],
    connections: ['slr1st8', 'dcourt3'],
    arrowPositions: {
      'slr1st8': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'dcourt3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
];
