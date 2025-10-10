const sdtoolfbldg = [
  {
    id: 'SDtoOLF1',
    name: 'Sd to OLF hallway1',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/B HALLWAY 1ST PART.webp',
    category: ['SD bldg.','OLF bldg.'],
    connections: ['SdGroundfloor19', 'SDtoOLF2'],
    arrowPositions: {
      'SDtoOLF2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'SdGroundfloor19': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'SDtoOLF2',
    name: 'Sd to OLF hallway2',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/B HALLWAY 2ND PART.webp',
    category: ['SD bldg.','OLF bldg.'],
    connections: ['SDtoOLF1', 'SDtoOLF3'],
    arrowPositions: {
      'SDtoOLF3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'SDtoOLF1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'SDtoOLF3',
    name: 'Sd to OLF hallway3',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/B HALLWAY 3RD PART.webp',
    category: ['SD bldg.','OLF bldg.'],
    connections: ['SDtoOLF4', 'SDtoOLF2'],
    arrowPositions: {
      'SDtoOLF4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'SDtoOLF2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'SDtoOLF4',
    name: 'Sd to OLF hallway4',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/B HALLWAY 4TH PART.webp',
    category: ['SD bldg.','OLF bldg.'],
    connections: ['SDtoOLF3', 'SDtoOLF5'],
    arrowPositions: {
      'SDtoOLF5': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'SDtoOLF3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'SDtoOLF5',
    name: 'Sd to OLF hallway5',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/B HALLWAY 5TH PART.webp',
    category: ['SD bldg.','OLF bldg.'],
    connections: ['SDtoOLF4', 'SDtoOLF6','challway2nd'],
    arrowPositions: {
      'SDtoOLF6': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'SDtoOLF4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'challway2nd': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }
    }
  },

  {
    id: 'SDtoOLF6',
    name: 'Sd to OLF hallway6',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/B HALLWAY 6TH PART.webp',
    category: ['SD bldg.','OLF bldg.'],
    connections: ['SDtoOLF5', 'olf_1st_floor_1'],
    arrowPositions: {
      'SDtoOLF5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olf_1st_floor_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  }
];
