const slrfirstfloor = [
  {
    id: 'slr1st1',
    name: 'Faculty Lounge',
    description: 'SLR Faculty Lounge – SLR Building 1st Floor',
    imageUrl: 'images/SLRbldg/1 SLR FACULTY LOUNGE.webp',
    category: ['SLR bldg.', 'Offices'],
    connections: ['slr1st2','snroomsl101'],
    arrowPositions: {
      'slr1st2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },      
      'snroomsl101': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
 }
  },
  {
    id: 'slr1st2',
    name: 'SLR 102',
    description: 'SLR Room 102 – 1st Floor',
    imageUrl: 'images/SLRbldg/2 SLR 102 (1).webp',
    category: ['SLR bldg.'],
    connections: ['slr1st1', 'slr1st3'],
    arrowPositions: {
      'slr1st1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr1st3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr1st3',
    name: 'Faculty Room',
    description: 'SLR Faculty Room – 1st Floor',
    imageUrl: 'images/SLRbldg/3 SLR FACULTY ROOM.webp',
    category: ['SLR bldg.', 'Offices'],
    connections: ['slr1st2', 'slr1st4'],
    arrowPositions: {
      'slr1st2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr1st4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr1st4',
    name: 'SLR Stair 1st Floor',
    description: 'Stairs (1st Floor Entrance)',
    imageUrl: 'images/SLRbldg/4 SLR STAIR 1ST FLOOR (1).webp',
    category: ['SLR bldg.'],
    connections: ['slr1st3', 'slr1st5','slr1st7'],
    arrowPositions: {
      'slr1st3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr1st5': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'slr1st7': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr1st5',
    name: 'Stair to 2nd Floor (1)',
    description: 'SLR Stairway to 2nd Floor (1)',
    imageUrl: 'images/SLRbldg/5.1 SLR STAIR 1ST TO 2ND FLOOR (1).webp',
    category: ['SLR bldg.'],
    connections: ['slr1st4', 'slr2ndStairs1'],
    arrowPositions: {
      'slr1st4': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'down' },
      'slr2ndStairs1': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up' }
    },
     defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // 👈 always face 2nd floor

  },
  {
    id: 'slr1st7',
    name: 'SLR 103',
    description: 'SLR Room 103 – 1st Floor',
    imageUrl: 'images/SLRbldg/6 SLR 103.webp',
    category: ['SLR bldg.'],
    connections: ['slr1st8', 'slr1st4'],
    arrowPositions: {
      'slr1st4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr1st8': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr1st8',
    name: 'SLR 103 (2)',
    description: 'Alternate View of Room 103',
    imageUrl: 'images/SLRbldg/7 SLR 103 (2).webp',
    category: ['SLR bldg.'],
    connections: ['slr1st7', 'slr1st9','dcourt4'],
    arrowPositions: {
      'slr1st7': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'dcourt4': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'slr1st9': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr1st9',
    name: 'Medical Clinic',
    description: 'SLR Medical Clinic – 1st Floor',
    imageUrl: 'images/SLRbldg/8 SLR MEDICAL CLINIC.webp',
    category: ['SLR bldg.', 'Offices'],
    connections: ['slr1st8', 'slr1st10'],
    arrowPositions: {
      'slr1st8': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr1st10': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr1st10',
    name: 'Isolation Area',
    description: 'SLR 105 Isolation Area – 1st Floor',
    imageUrl: 'images/SLRbldg/9 SLR 105 ISOLATION AREA.webp',
    category: ['SLR bldg.'],
    connections: ['slr1st9', 'slr1st11'],
    arrowPositions: {
      'slr1st9': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr1st11': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr1st11',
    name: 'TLE Room',
    description: 'SLR TLE Room – 1st Floor',
    imageUrl: 'images/SLRbldg/10 SLR TLE ROOM.webp',
    category: ['SLR bldg.'],
    connections: ['slr1st10', 'slr1st12'],
    arrowPositions: {
      'slr1st10': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'slr1st12': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'slr1st12',
    name: 'SLR 106',
    description: 'SLR Room 106 – 1st Floor',
    imageUrl: 'images/SLRbldg/11 SLR 106.webp',
    category: ['SLR bldg.'],
    connections: ['slr1st11','Canteen6'],
    arrowPositions: {
      'slr1st11': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'Canteen6': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  }
];
