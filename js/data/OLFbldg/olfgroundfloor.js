const olfbldg = [
 {
    id: 'olfgroundfloor1',
    name: 'OLF bldg Lounge',
    description: 'OLF Ground Floor leading to RPQA,Accounting,Registrar',
    imageUrl: 'images/OLFbldg/OLF1stfloor.jpg',
    category: ['OLF bldg.'],
    connections: ['olfgroundfloor2','SDtoOLF4','SideStairsOLF'],
    arrowPositions: {
      'olfgroundfloor2': { phi: Math.PI / 3, theta: Math.PI * 2.6, direction: 'up'},
      'SDtoOLF4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'},
        'SideStairsOLF': { phi: Math.PI / 3, theta: Math.PI * 1.75, direction: 'up'}
       }
    },
 {
    id: 'olfgroundfloor2',
    name: 'OLF RPQA',
    description: 'OLF Ground Floor',
    imageUrl: 'images/OLFbldg/OLF1stfloor1.jpg',
    category: ['OLF bldg.','Offices'],
    connections: ['olfgroundfloor3','olfgroundfloor1',],
    arrowPositions: {
      'olfgroundfloor3': { phi: Math.PI / 3, theta: Math.PI * 1.8, direction: 'up'},
      'olfgroundfloor1': { phi: Math.PI / 3, theta: Math.PI * 0.7, direction: 'up'}
       }
    },

     {
    id: 'olfgroundfloor3',
    name: 'OLF Accounting',
    description: 'OLF Ground Floor',
    imageUrl: 'images/OLFbldg/OLF1stfloor2.jpg',
    category: ['OLF bldg.','Offices'],
    connections: ['olfgroundfloor2','olfgroundfloor4',],
    arrowPositions: {
    'olfgroundfloor4': { phi: Math.PI / 3, theta: Math.PI * 2.15, direction: 'up'},
    'olfgroundfloor2': { phi: Math.PI / 3, theta: Math.PI * 1.13, direction: 'up'}

       }
    },

     {
    id: 'olfgroundfloor4',
    name: 'OLF Registrar',
    description: 'OLF Ground Floor',
    imageUrl: 'images/OLFbldg/OLF1stfloor3.jpg',
    category: ['OLF bldg.','Offices'],
    connections: ['olfgroundfloor3','olfgroundfloor5',],
    arrowPositions: {
    'olfgroundfloor5': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up'},
    'olfgroundfloor3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'}

       }
    },
    
    {
    id: 'olfgroundfloor5',
    name: 'OLF mid stairs',
    description: 'OLF Ground Floor',
    imageUrl: 'images/OLFbldg/OLF1stfloor4.jpg',
    category: ['OLF bldg.'],
    connections: ['olfgroundfloor4','olfgroundfloor6',],
    arrowPositions: {
    'olfgroundfloor6': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up'},
    'olfgroundfloor4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'}

       }
    },
    
    {
    id: 'olfgroundfloor6',
    name: 'OLF mid stairs cr',
    description: 'OLF Ground Floor',
    imageUrl: 'images/OLFbldg/OLF1stfloor5.jpg',
    category: ['OLF bldg.'],
    connections: ['OLF3','olfgroundfloor5',],
    arrowPositions: {
    'olfgroundfloor5': { phi: Math.PI / 3.5, theta: Math.PI * 1.2, direction: 'down'},
    'OLF3': { phi: Math.PI / 3.5, theta: Math.PI * 1, direction: 'up'}

       }
    },
];