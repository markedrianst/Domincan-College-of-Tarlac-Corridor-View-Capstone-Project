const olf2ndbldg = [

     
    { id: 'SideStairsOLF',
    name: 'SideStairsOLF',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/sidestairsolf2nd.jpg',
    category: ['OLP bldg.'],
    connections: ['olfgroundfloor1','OLF',],
    arrowPositions: {
    'olfgroundfloor1': { phi: Math.PI / 3.2, theta: Math.PI * 0.97, direction: 'down'},
    'OLF': { phi: Math.PI / 3.05, theta: Math.PI * 0.8, direction: 'up'},
   
    
       }
    },
    { id: 'OLF',
    name: 'OLF',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/OLF2ndfloor.jpg',
    category: ['OLP bldg.'],
    connections: ['OLF2','SideStairsOLF'],
    arrowPositions: {
    'OLF2': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'up'},
    'SideStairsOLF': { phi: Math.PI / 3, theta: Math.PI * 1.15, direction: 'down'},
   
    
       }
    },
  { id: 'OLF1',
    name: 'OLF1',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/OLF2ndfloor1.jpg',
    category: ['OLP bldg.'],
    connections: ['OLF2','OLF','OLF4'],
    arrowPositions: {
    'OLF2': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'down'},
    'OLF': { phi: Math.PI / 3.2, theta: Math.PI * 1.05, direction: 'up'},
   
    
       }
    },
  
  
  
  { id: 'OLF2',
    name: 'OLF2',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/OLF2ndfloor2.jpg',
    category: ['OLP bldg.'],
    connections: ['OLF3','OLF1'],
    arrowPositions: {
    'OLF3': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up'},
    'OLF1': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up'},
   
    
       }
    },
  
  
  
    { id: 'OLF3',
    name: 'OLF3',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/OLF2ndfloor3.jpg',
    category: ['OLP bldg.'],
    connections: ['olfgroundfloor6','StairsTo3rdFloor','OLF4','OLF2'],
    arrowPositions: {
    'olfgroundfloor6': { phi: Math.PI / 3, theta: Math.PI * 2.2, direction: 'down'},
    'StairsTo3rdFloor': { phi: Math.PI / 3.2, theta: Math.PI * 1.85, direction: 'up'},
    'OLF4': { phi: Math.PI / 3.2, theta: Math.PI * .4, direction: 'up'},
       'OLF2': { phi: Math.PI / 3.2, theta: Math.PI * 1.6, direction: 'up'}
       }
    },

  { id: 'OLF4',
    name: 'OLF4',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/OLF2ndfloor4.jpg',
    category: ['OLP bldg.'],
    connections: ['OLF3','OLF5',],
    arrowPositions: {
    'OLF3': { phi: Math.PI / 3, theta: Math.PI * 3, direction: 'up'},
    'OLF5': { phi: Math.PI / 3.2, theta: Math.PI * 1.85, direction: 'up'}
    
       }
    },

{ id: 'OLF5',
    name: 'OLF5',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/OLF2ndfloor5.jpg',
    category: ['OLP bldg.'],
    connections: ['OLF6','OLF4',],
    arrowPositions: {
    'OLF6': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'down'},
    'OLF4': { phi: Math.PI / 3.2, theta: Math.PI * 1.12, direction: 'up'}
    
       }
    },{ id: 'OLF6',
    name: 'OLF6',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/OLF2ndfloor6.jpg',
    category: ['OLP bldg.'],
    connections: [,'OLF5',],
    arrowPositions: {

    'OLF5': { phi: Math.PI / 3.2, theta: Math.PI * 1, direction: 'up'}
    
       }
    }

,{ id: 'StairsTo3rdFloor',
    name: 'StairsTo3rdFloor',
    description: 'OLF 2nd Floor',
    imageUrl: 'images/OLFbldg/OLF2ndfloor7.jpg',
    category: ['OLP bldg.'],
    connections: ['OLF3rd4','OLF3',],
    arrowPositions: {

    'OLF3rd4': { phi: Math.PI / 3.4, theta: Math.PI * 0.9, direction: 'up'},
        'OLF3': { phi: Math.PI / 3.4, theta: Math.PI * 1.2, direction: 'up'}
    
       }
    },


];