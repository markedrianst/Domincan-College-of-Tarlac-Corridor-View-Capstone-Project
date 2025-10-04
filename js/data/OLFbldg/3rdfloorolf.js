const olf3rdbldg = [
  { 
    id: 'DOLF300',
    name: 'OLF 300 Schoology Lab',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/D OLF 300 SCHOOLOGY LAB.webp',
    category: ['OLP bldg.'],
    connections: ['DOLF301'],
    arrowPositions: {
      'DOLF301': { phi: Math.PI / 3.2, theta: Math.PI *1, direction: 'up' }
    }
  },
  {
    id: 'DOLF301',
    name: 'OLF 301',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/D OLF 301.webp',
    category: ['OLP bldg.'],
    connections: ['DOLF300', 'DOLF302'],
    arrowPositions: {
      'DOLF300': { phi: Math.PI / 3.2, theta: Math.PI * 2, direction: 'up' },
      'DOLF302': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'DOLF302',
    name: 'OLF 302',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/D OLF 302.webp',
    category: ['OLP bldg.'],
    connections: ['DOLF301', 'DOLF303'],
    arrowPositions: {
      'DOLF301': { phi: Math.PI / 3.2, theta: Math.PI * 2, direction: 'up' },
      'DOLF303': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'DOLF303',
    name: 'OLF 303',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/D OLF 303.webp',
    category: ['OLP bldg.'],
    connections: ['DOLF302', 'DOLFStair3rdMiddle'],
    arrowPositions: {
      'DOLF302': { phi: Math.PI / 3.2, theta: Math.PI *2, direction: 'up' },
      'DOLFStair3rdMiddle': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' },
    }
  },
  {
    id: 'DOLFStair3rdMiddle',
    name: 'OLF Stair 3rd Floor Middle',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/D OLF STAIR 3RD FLOOR (4).webp',
    category: ['OLP bldg.'],
    connections: ['DOLF303', 'DOLFStair4th1','DOLF304','OLFSideStairs2'],
    arrowPositions: {
      'DOLF303': { phi: Math.PI / 3.2, theta: Math.PI * 1.5, direction: 'up' },
      'DOLF304':{ phi: Math.PI / 3.2, theta: Math.PI * 2.5, direction: 'up' },
         'OLFSideStairs2':{ phi: Math.PI / 3.2, theta: Math.PI * 2.2, direction: 'down' },
      'DOLFStair4th1': { phi: Math.PI / 3.2, theta: Math.PI *1.8, direction: 'up' }
    }
  },
  {
    id: 'DOLFStair4th1',
    name: 'OLF Stair 4th Floor (1)',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF STAIR 4TH FLOOR (1).webp',
    category: ['OLP bldg.'],
    connections: ['DOLFStair3rdMiddle', 'DOLFStair4th2'],
    arrowPositions: {
      'DOLFStair3rdMiddle': { phi: Math.PI / 3.5, theta: Math.PI * 1, direction: 'down' },
      'DOLFStair4th2': { phi: Math.PI / 3.2, theta: Math.PI * 2.5, direction: 'up' }
    },

             defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1.6 } // 👈 always face 2nd floor

  },
  {
    id: 'DOLFStair4th2',
    name: 'OLF Stair 4th Floor (2)',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF STAIR 4TH FLOOR (2).webp',
    category: ['OLP bldg.'],
    connections: ['DOLFStair4th1','DOLFStair4Middle'],
    arrowPositions: {
      'DOLFStair4th1': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' },
      'DOLFStair4Middle': { phi: Math.PI / 3.2, theta: Math.PI * 2.5, direction: 'up' }
    },
       defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1.6 } // 👈 always face 2nd floor

  },
  {
    id: 'DOLF304',
    name: 'OLF 304',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/D OLF 304.webp',
    category: ['OLP bldg.'],
    connections: ['DOLFStair3rdMiddle', 'DOLF305'],
    arrowPositions: {
      'DOLFStair3rdMiddle': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' },
      'DOLF305': { phi: Math.PI / 3.2, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'DOLF305',
    name: 'OLF 305',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/D OLF 305.webp',
    category: ['OLP bldg.'],
    connections: ['DOLF304', 'DOLF306'],
    arrowPositions: {
      'DOLF304': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' },
      'DOLF306': { phi: Math.PI / 3.2, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'DOLF306',
    name: 'OLF 306',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/D OLF 306.webp',
    category: ['OLP bldg.'],
    connections: ['DOLF305'],
    arrowPositions: {
      'DOLF305': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' }
    }
  }
];
