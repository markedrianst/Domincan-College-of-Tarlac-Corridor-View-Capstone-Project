const snfirstfloor = [
  {
    id: 'sn1st1',
    name: 'SN 101',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/1 SN 101.webp',
    category: ['SN bldg.'],
    connections: ['snscience', 'ccsofficetosn'],
    arrowPositions: {
      'snscience': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'ccsofficetosn': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'snscience',
    name: 'SN Science Lab',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/1.2 SN SCIENCE LAB.webp',
    category: ['SN bldg.'],
    connections: ['snplayroom1', 'sn1st1','sn1st2'],
    arrowPositions: {
      'snplayroom1': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'sn1st1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'sn1st2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }

    }
  },

  {
    id: 'snplayroom1',
    name: 'SN Playroom (1)',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/1.3 SN PLAYROOM (1).webp',
    category: ['SN bldg.'],
    connections: ['snplayroom2', 'snscience'],
    arrowPositions: {
      'snplayroom2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'snscience': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'snplayroom2',
    name: 'SN Playroom (2)',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/1.4 SN PLAYROOM (2).webp',
    category: ['SN bldg.'],
    connections: ['sn1st2', 'snplayroom1'],
    arrowPositions: {
      'snplayroom1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'sn1st2',
    name: 'SN 102 Biology Lab',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/2 SN 102 BIOLOGY LAB.webp',
    category: ['SN bldg.'],
    connections: ['snchem', 'snscience'],
    arrowPositions: {
      'snchem': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'snscience': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'snchem',
    name: 'SN Chemistry Lab',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/3 SN CHEMISTRY LAB.webp',
    category: ['SN bldg.'],
    connections: ['snforensic', 'sn1st2'],
    arrowPositions: {
      'snforensic': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn1st2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'snforensic',
    name: 'SN Forensic Lab',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/4 SN FORENSIC LAB.webp',
    category: ['SN bldg.'],
    connections: ['snphysics', 'snchem'],
    arrowPositions: {
      'snphysics': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'snchem': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'snphysics',
    name: 'SN Physics Lab',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/5 SN PHYSICS LAB.webp',
    category: ['SN bldg.'],
    connections: ['sn1st4', 'snforensic'],
    arrowPositions: {
      'sn1st4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'snforensic': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'sn1st4',
    name: 'SN 104 (1)',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/6 SN 104 (1).webp',
    category: ['SN bldg.'],
    connections: ['sn1ststair', 'snphysics','sn1st7'],
    arrowPositions: {
      'sn1ststair': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'snphysics': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'sn1st7': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {
    id: 'sn1ststair',
    name: 'SN Stair 1st Floor',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/6.1 SN STAIR 1ST FLOOR.webp',
    category: ['SN bldg.'],
    connections: ['sn2ndstair1', 'sn1st4'],
    arrowPositions: {
      'sn2ndstair1': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'sn1st4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'sn1st7',
    name: 'SN 104 (2)',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/7 SN 104 (2).webp',
    category: ['SN bldg.'],
    connections: ['sn1st8', 'sn1st4'],
    arrowPositions: {
      'sn1st8': { phi: Math.PI / 3, theta: Math.PI * 2.3, direction: 'up' },
      'sn1st4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {
    id: 'sn1st8',
    name: 'SN 104 (3)',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/8 SN 104 (3).webp',
    category: ['SN bldg.'],
    connections: ['snroomsl101', 'sn1st7'],
    arrowPositions: {
      'snroomsl101': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'sn1st7': { phi: Math.PI / 3, theta: Math.PI * 1.0, direction: 'up' }
    },
    defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 2.3 } // 👈 always face 2nd floor

  },

  {
    id: 'snroomsl101',
    name: 'SN Room SL 101',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/9 SN(Room SL 101).webp',
    category: ['SN bldg.'],
    connections: ['sn1st8', 'slr1st1'],
    arrowPositions: {
      'slr1st1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'sn1st8': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  }
];
