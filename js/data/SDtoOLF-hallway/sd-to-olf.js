const sdtoolbldg =[
    {
    id: 'SDtoOLF1',
    name: 'Sd to OLF hallway1',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/connectingsdolf1.jpg',
    category: ['hallway'],
    connections: ['SdGroundfloor10','SDtoOLF2'],
    arrowPositions: {
      'SDtoOLF2': { phi: Math.PI / 3, theta: Math.PI * 2.05, direction: 'up'},
      'SdGroundfloor10': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'}
       }
    },

 {
    id: 'SDtoOLF2',
    name: 'Sd to OLF hallway2',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/connectingsdolf1.jpg',
    category: ['hallway'],
    connections: ['SDtoOLF1','scs1st2'],
    arrowPositions: {
      'SdGroundfloor2': { phi: Math.PI / 3, theta: Math.PI * 1.8  , direction: 'up'},
      'SDtoOLF1': { phi: Math.PI / 3, theta: Math.PI * 1.15, direction: 'up'}
       }
    },

];