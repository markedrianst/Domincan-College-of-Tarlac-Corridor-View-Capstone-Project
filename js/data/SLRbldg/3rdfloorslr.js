const slrthirdfloor =[
  {
    id: 'slr3rd1',
    name: 'SLR 301',
    description: 'SLR bldg. 3rd floor',
    imageUrl: 'images/SLRbldg/SLR3rdfloor.jpg',
    category: ['SLR bldg.'],
    connections: ['slr3rd2','slr4th1'],
    arrowPositions: {
      'slr3rd2': { phi: Math.PI / 3, theta: Math.PI * 1.93, direction: 'up'},
         'slr4th1': { phi: Math.PI / 3, theta: Math.PI *.6, direction: 'up'},


        
       }
    },
    {
    id: 'slr3rd2',
    name: 'SLR 302',
    description: 'SLR bldg. 3rd floor',
    imageUrl: 'images/SLRbldg/SLR3rdfloor1.jpg',
    category: ['SLR bldg.'],
    connections: ['SLR3rdStairs','slr3rd1'],
    arrowPositions: {
      'SLR3rdStairs': { phi: Math.PI / 3, theta: Math.PI * 1.33, direction: 'up'},
        'slr3rd1': { phi: Math.PI / 3, theta: Math.PI * 2.4, direction: 'up'},


        
       }
    }, {
    id: 'SLR3rdStairs',
    name: 'SLR3rdStairs',
    description: 'SLR bldg. 3rd floor',
    imageUrl: 'images/SLRbldg/SLR3rdfloor2.jpg',
    category: ['SLR bldg.'],
    connections: ['slr3rd3','slr3rd2','slr2ndto3rd','slr3rfto4th'],
    arrowPositions: {
      'slr3rd3': { phi: Math.PI / 3, theta: Math.PI * 1.7, direction: 'up'},
        'slr3rd2': { phi: Math.PI / 3, theta: Math.PI * 2.74, direction: 'up'},
        'slr2ndto3rd': { phi: Math.PI / 4, theta: Math.PI * 1.1, direction: 'up'},
        'slr3rfto4th': { phi: Math.PI / 4, theta: Math.PI * 1.4, direction: 'up'},


        
       }
    },

    {
    id: 'slr3rd3',
    name: 'SLR 303',
    description: 'SLR bldg. 3rd floor',
    imageUrl: 'images/SLRbldg/SLR3rdfloor3.jpg',
    category: ['SLR bldg.'],
    connections: ['slr3rd4','SLR3rdStairs'],
    arrowPositions: {
      'slr3rd4': { phi: Math.PI / 3, theta: Math.PI * 1.86, direction: 'up'},
        'SLR3rdStairs': { phi: Math.PI / 3, theta: Math.PI * .9, direction: 'up'},


        
       }
    },
  
       {
    id: 'slr3rd4',
    name: 'SLR 304',
    description: 'SLR bldg. 3rd floor',
    imageUrl: 'images/SLRbldg/SLR3rdfloor4.jpg',
    category: ['SLR bldg.'],
    connections: [,'slr3rd3'],
    arrowPositions: {

        'slr3rd3': { phi: Math.PI / 3, theta: Math.PI * .8, direction: 'up'},


        
       }
    },
        {
    id: 'slr3rfto4th',
    name: 'slr3rfto4th',
    description: 'SLR bldg. 3rd floor',
    imageUrl: 'images/SLRbldg/SLR3rdfloor5.jpg',
    category: ['SLR bldg.'],
    connections: [,'SLR3rdStairs','Slr4thfloor'],
    arrowPositions: {

        'SLR3rdStairs': { phi: Math.PI / 4, theta: Math.PI * 1.75, direction: 'up'},
            'Slr4thfloor': { phi: Math.PI / 4.2, theta: Math.PI * 2, direction: 'up'},


        
       }
    },
  
  ]