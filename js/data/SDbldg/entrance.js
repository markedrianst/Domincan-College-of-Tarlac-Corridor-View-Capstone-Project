const entrancePanoramas = [
  {
    id: 'entrance',
    name: 'Main Entrance (Outside)',
    description: 'Dominican College of Tarlac - Main Entrance Outside View',
    imageUrl: 'images/Sdbldg/MainEntrance1.webp',
    category: ['entrance'],
    connections: ['entrance1'],
    arrowPositions: {
      'entrance1': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction: 'up' }
    },

  },
  {
    id: 'entrance1',
    name: 'Main Entrance (Inside)',
    description: 'Dominican College of Tarlac - Main Entrance Inside View (facing the campus)',
    imageUrl: 'images/Sdbldg/MainEntrance2.webp',
    category: ['entrance'],
    connections: ['entrance2', 'entrance'],
    arrowPositions: {
      'entrance2': { phi: Math.PI / 2.6, theta: Math.PI * 1.7, direction: 'up' },
      'entrance': { phi: Math.PI / 2.6, theta: Math.PI * 0.95, direction: 'up' }
    }
  } ,
   {
    id: 'entrance2',
    name: 'SD Building - Ground Floor Hallway',
    description: 'SD Building Ground Floor Hallway View',
    imageUrl: 'images/Sdbldg/Mainentrance3.webp',
    category: ['entrance'],
    connections: ['SdGroundFloor1', 'entrance1'],
    arrowPositions: {
      'SdGroundFloor1': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction: 'up' },
      'entrance1': { phi: Math.PI / 2.6, theta: Math.PI * 2.5, direction: 'up' }
    },
          defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // 👈 always face 2nd floor

  }
];
