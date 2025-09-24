const slrfirstfloor =[
  {
    id: 'slr1st1',
    name: 'Junior Higschool Faculty',
    description: 'SLR bldg. 1st floor',
    imageUrl: 'images/SLRbldg/SLR1stfloor.jpg',
    category: ['SLR bldg.','Offices'],
    connections: ['sn1st7','slr1st2'],
    arrowPositions: {
      'sn1st7': { phi: Math.PI / 3, theta: Math.PI * 2.32, direction: 'up'},
      'slr1st2': { phi: Math.PI / 3, theta: Math.PI * 1.33, direction: 'up'}

        
       }
    },
      {
    id: 'slr1st2',
    name: 'Junior Higschool Faculty',
    description: 'SLR bldg. 1st floor',
    imageUrl: 'images/SLRbldg/SLR1stfloor1.jpg',
    category: ['SLR bldg.','Offices'],
    connections: ['slr1st3','slr1st1'],
    arrowPositions: {
      'slr1st3': { phi: Math.PI / 3, theta: Math.PI * 2.37, direction: 'up'},
      'slr1st1': { phi: Math.PI / 3, theta: Math.PI * 1.37, direction: 'up'}

        
       }
    },
       {
    id: 'slr1st3',
    name: 'SLR BUILDING',
    description: 'SLR bldg. 1st floor',
    imageUrl: 'images/SLRbldg/SLR1stfloor2.jpg',
    category: ['SLR bldg.'],
    connections: ['slr1st1','slr1st4','slr1stto2nd'],
    arrowPositions: {
      'slr1st1': { phi: Math.PI / 3, theta: Math.PI * 2.07, direction: 'up'},
      'slr1st4': { phi: Math.PI / 3, theta: Math.PI * 0.95, direction: 'up'},
         'slr1stto2nd': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up'}

        
       }
    },

           {
    id: 'slr1st4',
    name: '',
    description: 'SLR bldg. 1st floor',
    imageUrl: 'images/SLRbldg/SLR1stfloor3.jpg',
    category: ['SLR bldg.'],
    connections: ['slr1st3','slr1st5'],
    arrowPositions: {
      'slr1st3': { phi: Math.PI / 3, theta: Math.PI * 2.2, direction: 'up'},
      'slr1st5': { phi: Math.PI / 3, theta: Math.PI * 1.07, direction: 'up'}

        
       }
    },
             {
    id: 'slr1st5',
    name: 'Clinic',
    description: 'SLR bldg. 1st floor',
    imageUrl: 'images/SLRbldg/SLR1stfloor4.jpg',
    category: ['SLR bldg.','Offices'],
    connections: ['slr1st4'],
    arrowPositions: {
      'slr1st4': { phi: Math.PI / 3, theta: Math.PI * 2.6, direction: 'up'},
     

        
       }
    },
         {
    id: 'slr1st6',
    name: 'Slr1stto2nd',
    description: 'SLR Stairs to 2nd Floor',
    imageUrl: 'images/SLRbldg/SLR1stfloor5.jpg',
    category: ['SLR bldg.'],
    connections: ['slr1st3'],
    arrowPositions: {
      'slr1st3': { phi: Math.PI / 4, theta: Math.PI * 1.7, direction: 'down'},
     

        
       }
    },
         {
    id: 'slr1stto2nd',
    name: 'Slr1stto2nd',
    description: 'SLR Stairs to 2nd Floor',
    imageUrl: 'images/SLRbldg/SLR1stfloor5.jpg',
    category: ['SLR bldg.'],
    connections: ['slr1st3','SLR2ndStairs'],
    arrowPositions: {
      'slr1st3': { phi: Math.PI / 4, theta: Math.PI * 1.7, direction: 'down'},
        'SLR2ndStairs': { phi: Math.PI / 4, theta: Math.PI * 2, direction: 'up'},
     

        
       }
    },
]