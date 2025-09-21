const slrfourthfloor =[
  {
    id: 'slr4th1',
    name: 'SLR401',
    description: 'SLR bldg. 4th floor',
    imageUrl: 'images/SLRbldg/SLR4thfloor.jpg',
    category: ['SLR bldg.'],
    connections: ['slr3rd1','slr4th2'],
    arrowPositions: {
      'slr3rd1': { phi: Math.PI / 3, theta: Math.PI * 2.28, direction: 'down'},
      'slr4th2': { phi: Math.PI / 3, theta: Math.PI * 1.33, direction: 'up'}

        
       }
    },

      {
    id: 'slr4th2',
    name: 'SLR402',
    description: 'SLR bldg. 4th floor',
    imageUrl: 'images/SLRbldg/SLR4thfloor1.jpg',
    category: ['SLR bldg.'],
    connections: ['slr3rd1','Slr4thfloor'],
    arrowPositions: {
      'slr3rd1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'down'},
      'Slr4thfloor': { phi: Math.PI / 3, theta: Math.PI * .85, direction: 'up'}

        
       }
    },
    {
    id: 'Slr4thfloor',
    name: 'Slr4thfloor',
    description: 'SLR bldg. 4th floor',
    imageUrl: 'images/SLRbldg/SLR4thfloor2.jpg',
    category: ['SLR bldg.'],
    connections: ['slr3rfto4th','slr4th2','slr4th3'],
    arrowPositions: {
      'slr3rfto4th': { phi: Math.PI / 4, theta: Math.PI * 1.07, direction: 'down'},
      'slr4th2': { phi: Math.PI / 3, theta: Math.PI * .72, direction: 'up'},
        'slr4th3': { phi: Math.PI / 3, theta: Math.PI * 1.65, direction: 'up'}

        
       }
    },
     {
    id: 'slr4th3',
    name: 'SLR403',
    description: 'SLR bldg. 4th floor',
    imageUrl: 'images/SLRbldg/SLR4thfloor3.jpg',
    category: ['SLR bldg.'],
    connections: ['Slr4thfloor','slr4th4'],
    arrowPositions: {
      
      'Slr4thfloor': { phi: Math.PI / 3, theta: Math.PI * .77, direction: 'up'},
        'slr4th4': { phi: Math.PI / 3, theta: Math.PI * 1.71, direction: 'up'}

        
       }
    },
    {
    id: 'slr4th4',
    name: 'SLR404',
    description: 'SLR bldg. 4th floor',
    imageUrl: 'images/SLRbldg/SLR4thfloor4.jpg',
    category: ['SLR bldg.'],
    connections: [,'slr4th3'],
    arrowPositions: {
      

        'slr4th3': { phi: Math.PI / 3, theta: Math.PI * .8, direction: 'up'}

        
       }
    },

]