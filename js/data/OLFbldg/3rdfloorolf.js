const olf3rdbldg = [


{ id: 'OLF3rd1',
    name: 'OLF301',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/OLF3rdfloor.jpg',
    category: ['3rd OLF bldg.'],
    connections: ['OLF3rd2',],
    arrowPositions: {

    'OLF3rd2': { phi: Math.PI / 3.2, theta: Math.PI * 0.65, direction: 'up'}
    
       }
    },
    
{ id: 'OLF3rd2',
    name: 'OLF302',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/OLF3rdfloor1.jpg',
    category: ['2nd OLF bldg.'],
    connections: ['OLF3rd1','OLF3rd3'],
    arrowPositions: {

    'OLF3rd1': { phi: Math.PI / 3.2, theta: Math.PI * 1.61, direction: 'up'},
        'OLF3rd3': { phi: Math.PI / 3.2, theta: Math.PI * .45, direction: 'up'}
    
       }
    },

{ id: 'OLF3rd3',
    name: 'OLF303',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/OLF3rdfloor2.jpg',
    category: ['2nd OLF bldg.'],
    connections: ['OLF3rd2','OLF3rd4'],
    arrowPositions: {

    'OLF3rd2': { phi: Math.PI / 3.2, theta: Math.PI * 2.2, direction: 'up'},
        'OLF3rd4': { phi: Math.PI / 3.2, theta: Math.PI * 3.05, direction: 'up'},
    
    
       }
    },{ id: 'OLF3rd4',
    name: 'OLF304',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/OLF3rdfloor3.jpg',
    category: ['2nd OLF bldg.'],
    connections: ['OLF3rd5','OLF3rd3','StairsTo3rdFloor','Stairsto4thfloor'],
    arrowPositions: {

    'OLF3rd5': { phi: Math.PI / 3.2, theta: Math.PI * 1.90, direction: 'up'},
        'OLF3rd3': { phi: Math.PI / 3.2, theta: Math.PI * 3.1, direction: 'up'},
                'StairsTo3rdFloor': { phi: Math.PI / 3.2, theta: Math.PI * 1.65, direction: 'up'},
        'Stairsto4thfloor': { phi: Math.PI / 3.2, theta: Math.PI * 1.35, direction: 'up'},
    
       }
    }
    ,{ id: 'OLF3rd5',
    name: 'OLF305',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/OLF3rdfloor4.jpg',
    category: ['3rd OLF bldg.'],
    connections: ['OLF3rd4','OLF3rd6',],
    arrowPositions: {

    'OLF3rd4': { phi: Math.PI / 3.2, theta: Math.PI * 2.46, direction: 'up'},
        'OLF3rd6': { phi: Math.PI / 3.2, theta: Math.PI * 1.32, direction: 'up'},

       }
    },
    { id: 'OLF3rd6',
    name: 'OLF306',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/OLF3rdfloor5.jpg',
    category: ['3rd OLF bldg.'],
    connections: ['OLF3rd5','OLF3rd7'],
    arrowPositions: {

    'OLF3rd5': { phi: Math.PI / 3.2, theta: Math.PI * 1.08, direction: 'up'},
        'OLF3rd7': { phi: Math.PI / 3.2, theta: Math.PI * 1.9, direction: 'up'},
    
       }
    },
       { id: 'OLF3rd7',
    name: 'OLF307',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/OLF3rdfloor6.jpg',
    category: ['3rd OLF bldg.'],
    connections: ['OLF3rd6',],
    arrowPositions: {

    'OLF3rd6': { phi: Math.PI / 3.2, theta: Math.PI * 2.62, direction: 'up'},
       
    
       }
    },

      { id: 'Stairsto4thfloor',
    name: 'StairsTo4thFloor',
    description: 'OLF 3rd Floor',
    imageUrl: 'images/OLFbldg/OLF3rdfloor7.jpg',
    category: ['3rd OLF bldg.'],
    connections: ['OLF3rd4','olf4th103'],
    arrowPositions: {

    'OLF3rd4': { phi: Math.PI / 3.4, theta: Math.PI * 2.9, direction: 'up'},
    'olf4th103': { phi: Math.PI / 3.2, theta: Math.PI * 2.6, direction: 'up'},
       
    
       }
    },
];