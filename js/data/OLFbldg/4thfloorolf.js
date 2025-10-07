const olf4thbldg = [
  {
    id: 'DOLFLibraryEnd',
    name: 'College Library (End)',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF COLLEGE LIBRARY (DULO).webp',
    category: ['OLF bldg.'],
    connections: ['DOLFLibrary'],
    arrowPositions: {
      'DOLFLibrary': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'DOLFLibrary',
    name: 'College Library',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF COLLEGE LIBRARY.webp',
    category: ['OLF bldg.'],
    connections: ['DOLFLibraryEnd','DOLF402'],
    arrowPositions: {
      'DOLFLibraryEnd': { phi: Math.PI / 3.2, theta: Math.PI *2, direction: 'up' },
      'DOLF402': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'DOLF402',
    name: 'OLF 402',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF 402.webp',
    category: ['OLF bldg.'],
    connections: ['DOLFLibrary','DOLF403'],
    arrowPositions: {
      'DOLFLibrary': { phi: Math.PI / 3.2, theta: Math.PI * 2, direction: 'up' },
      'DOLF403': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'DOLF403',
    name: 'OLF 403',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF 403.webp',
    category: ['OLF bldg.'],
    connections: ['DOLF402','DOLFStair4Middle'],
    arrowPositions: {
      'DOLF402': { phi: Math.PI / 3.2, theta: Math.PI * 2, direction: 'up' },
      'DOLFStair4Middle': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' },
     
    }
  },
  {
    id: 'DOLFStair4Middle',
    name: 'OLF Stair 4th Floor (4)',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF STAIR 4TH FLOOR (4).webp',
    category: ['OLF bldg.'],
    connections: ['DOLF403','DOLF404','DOLFStair4th2'],
    arrowPositions: {
      'DOLF403': { phi: Math.PI / 3.2, theta: Math.PI * 1.5, direction: 'up' },
      'DOLFStair4th2': { phi: Math.PI / 3.2, theta: Math.PI * 2, direction: 'down' },
          'DOLF404': { phi: Math.PI / 3.2, theta: Math.PI * 2.5, direction: 'up' }
    }
  },
  {
    id: 'DOLF404',
    name: 'OLF 404',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF 404.webp',
    category: ['OLF bldg.'],
    connections: ['DOLFStair4Middle','DOLF405'],
    arrowPositions: {
      'DOLFStair4Middle': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' },
      'DOLF405': { phi: Math.PI / 3.2, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'DOLF405',
    name: 'OLF 405',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF 405.webp',
    category: ['OLF bldg.'],
    connections: ['DOLF404','DOLF406'],
    arrowPositions: {
      'DOLF404': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up' },
      'DOLF406': { phi: Math.PI / 3.2, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'DOLF406',
    name: 'OLF 406',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/D OLF 406.webp',
    category: ['OLF bldg.'],
    connections: ['DOLF405'],
    arrowPositions: {
      'DOLF405': { phi: Math.PI / 3.2, theta: Math.PI *1, direction: 'up' }
    }
  }
];
