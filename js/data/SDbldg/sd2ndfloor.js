const sd2ndfloor = [
  // First new corner stair
  {
    id: 'Sd2ndfloorcorner1',
    name: 'SD 2nd Floor Cornerstairs 1',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sdcornerstairsto2nd.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloorcorner2','SdGroundFloor1'],
    arrowPositions: {
      'Sd2ndfloorcorner2': { phi: Math.PI / 3, theta: 0.3, direction: 'up' },
      'SdGroundFloor1': { phi: Math.PI / 3.5, theta: 5.7, direction: 'down' }
    },
    defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // always face 2nd floor
  },
  // Second new corner stair
  {
    id: 'Sd2ndfloorcorner2',
    name: 'SD 2nd Floor Cornerstairs 2',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sdcornerstairsto2nd1.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloorcorner1', 'Sd2ndfloorcornerstairs','Sd3rdfloormidstairs'],
    arrowPositions: {
      'Sd2ndfloorcorner1': { phi: Math.PI * 5 / 3, theta: 2.7, direction: 'down' }, // replaced negative phi
      'Sd2ndfloorcornerstairs': { phi: Math.PI / 3, theta: 3.2, direction: 'up' },
      'Sd3rdfloormidstairs': { phi: Math.PI / 3, theta: 0.2, direction: 'up' }
    },
        defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // always face 2nd floor

  },
  // Existing corner stairs
  {
    id: 'Sd2ndfloorcornerstairs',
    name: 'SD 2nd Floor Cornerstairs',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor1.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloor1', 'Sd2ndfloorcorner2'],
    arrowPositions: {
      'Sd2ndfloor1': { phi: Math.PI / 3, theta: 0, direction: 'up' },
      'Sd2ndfloorcorner2': { phi: Math.PI * 5 / 3, theta: 1.3, direction: 'up' } // replaced negative phi
    },
    defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // always face 2nd floor
  },
  // SD 201
  {
    id: 'Sd2ndfloor1',
    name: 'SD 201',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor2.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloorcornerstairs', 'Sd2ndfloor2'],
    arrowPositions: {
      'Sd2ndfloor2': { phi: Math.PI / 3, theta: 0.1, direction: 'up' },
      'Sd2ndfloorcornerstairs': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
  },
  // SD 202
  {
    id: 'Sd2ndfloor2',
    name: 'SD 202',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor3.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloor1', 'Sd2ndfloor3'],
    arrowPositions: {
      'Sd2ndfloor3':  { phi: Math.PI / 3, theta: 0.1, direction: 'up' },
      'Sd2ndfloor1': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
  },
  // SD 203
  {
    id: 'Sd2ndfloor3',
    name: 'SD 203',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor4.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloor4', 'Sd2ndfloor2'],
    arrowPositions: {
      'Sd2ndfloor4': { phi: Math.PI / 3, theta: 0.1, direction: 'up' },
      'Sd2ndfloor2': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
  },
  // SD 204
  {
    id: 'Sd2ndfloor4',
    name: 'SD 204',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor5.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloor3', 'Sd2ndfloormidstairs'],
    arrowPositions: {
      'Sd2ndfloormidstairs': { phi: Math.PI / 3, theta: 0.1, direction: 'up' },
      'Sd2ndfloor3': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
  },
  // Midstairs SD 206
  {
    id: 'Sd2ndfloormidstairs',
    name: 'SD Midstairs',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor6.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloor4', 'Sd2ndfloor7','sd2ndfloorcr','Sd3rdfloormidstairs4'],
    arrowPositions: {
      'Sd2ndfloor7': { phi: Math.PI / 3, theta: 0.1, direction: 'up' },
      'Sd2ndfloor4': { phi: Math.PI / 3, theta: 3.2, direction: 'up' },
       'sd2ndfloorcr': { phi: Math.PI / 3.6, theta: 3.7, direction: 'down' },
       'Sd3rdfloormidstairs4': { phi: Math.PI / 3.6, theta: -1.5, direction: 'up' }
    }
  },
  {
    id: 'sd2ndfloorcr',
    name: 'SD Midstairs 1st to 2nd Floor',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/stairs.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloormidstairs', 'SdGroundfloor10'],
    arrowPositions: {
      'SdGroundfloor10': { phi: Math.PI / 3.9, theta: 0, direction: 'down' },
      'Sd2ndfloormidstairs': { phi: Math.PI / 3, theta: -1, direction: 'up' }
    },
        defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // always face 2nd floor

  },
  // SD 207
{
    id: 'Sd2ndfloor7',
    name: 'SD 205',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor7.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloormidstairs', 'Sd2ndfloor8'],
    arrowPositions: {
      'Sd2ndfloormidstairs':{phi: Math.PI / 3, theta: 3.2, direction: 'up' },
      'Sd2ndfloor8': {  phi: Math.PI / 3, theta: 0.1, direction: 'up'  } 
    }
},

// SD 208
{
    id: 'Sd2ndfloor8',
    name: 'SD 206',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor8.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloor7', 'Sd2ndfloor9'],
    arrowPositions: {
       'Sd2ndfloor7':{ phi: Math.PI / 3, theta: 3.2, direction: 'up' } ,
      'Sd2ndfloor9': { phi: Math.PI / 3, theta: 0.1, direction: 'up' }
    }
},

// SD 209
{
    id: 'Sd2ndfloor9',
    name: 'SD 207',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor9.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloor8', 'Sd2ndfloor10'],
    arrowPositions: {
      'Sd2ndfloor10': { phi: Math.PI / 3, theta: 0.1, direction: 'up' },
      'Sd2ndfloor8': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
},

// SD 210
{
    id: 'Sd2ndfloor10',
    name: 'SD 208',
    description: 'SD 2nd Floor',
    imageUrl: 'images/Sdbldg/sd2ndfloor10.webp',
    category: 'SD bldg.',
    connections: ['Sd2ndfloor9'],
    arrowPositions: {
      'Sd2ndfloor9': { phi: Math.PI / 3, theta: 3.2, direction: 'up' }
    }
}
];
