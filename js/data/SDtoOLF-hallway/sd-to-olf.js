const sdtoolbldg =[
    {
    id: 'SDtoOLF1',
    name: 'Sd to OLF hallway1',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/connectingsdolf1.jpg',
    category: ['hallway'],
    connections: ['SdGroundfloor10','SDtoOLF2'],
    arrowPositions: {
      'SDtoOLF2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'},
      'SdGroundfloor10': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'}
       }
    },

 {
    id: 'SDtoOLF2',
    name: 'Sd to OLF hallway2',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/connectingsdolf2.jpg',
    category: ['hallway'],
    connections: ['SDtoOLF1','SDtoOLF3'],
    arrowPositions: {
      'SDtoOLF3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'},
      'SDtoOLF1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'}
       }
    },

     {
    id: 'SDtoOLF3',
    name: 'Sd to OLF hallway3',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/connectingsdolf3.jpg',
    category: ['hallway'],
    connections: ['SDtoOLF4','SDtoOLF2'],
    arrowPositions: {
      'SDtoOLF2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'},
      'SDtoOLF4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'}
       }
    },

     {
    id: 'SDtoOLF4',
    name: 'Sd to OLF hallway4',
    description: 'SD to OLF Hallway',
    imageUrl: 'images/SDtoOlf-Hallway/connectingsdolf4.jpg',
    category: ['hallway'],
    connections: ['SDtoOLF2','SDtoOLF3','olfgroundfloor1'],
    arrowPositions: {
      'SDtoOLF2': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up'},
      'olfgroundfloor1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'},
      'SDtoOLF3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'}
       }
    },

];