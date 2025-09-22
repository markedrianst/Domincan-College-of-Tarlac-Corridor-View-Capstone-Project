const slrsecondfloor =[
  {
    id: 'slr2nd1',
    name: 'slr201',
    description: 'SLR bldg. 2nd floor',
    imageUrl: 'images/SLRbldg/SLR2ndfloor.jpg',
    category: ['SLR bldg.'],
    connections: ['sn2nd4','slr2nd2'],
    arrowPositions: {
      'sn2nd4': { phi: Math.PI / 3, theta: Math.PI * 2.2, direction: 'up'},
      'slr2nd2': { phi: Math.PI / 3, theta: Math.PI * 1.7, direction: 'up'}

        
       }
    },


  {
    id: 'slr2nd2',
    name: 'slr202',
    description: 'SLR bldg. 2nd floor',
    imageUrl: 'images/SLRbldg/SLR2ndfloor1.jpg',
    category: ['SLR bldg.'],
    connections: ['slr2nd1','SLR2ndStairs'],
    arrowPositions: {
      'slr2nd1': { phi: Math.PI / 3, theta: Math.PI * 2.3, direction: 'up'},
      'SLR2ndStairs': { phi: Math.PI / 3, theta: Math.PI * 1.28, direction: 'up'}

        
       }
    },
    
  {
    id: 'SLR2ndStairs',
    name: 'SLR2ndStairs',
    description: 'SLR bldg. 2nd floor',
    imageUrl: 'images/SLRbldg/SLR2ndfloor2.jpg',
    category: ['SLR bldg.'],
    connections: ['slr2nd3','slr2nd2','slr2ndto3rd','slr1stto2nd'],
    arrowPositions: {
      'slr2nd3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'},
      'slr2nd2': { phi: Math.PI / 3, theta: Math.PI * 1.06, direction: 'up'},
       'slr2ndto3rd': { phi: Math.PI / 3.5, theta: Math.PI * 1.7, direction: 'up'},
         'slr1stto2nd': { phi: Math.PI / 3.7, theta: Math.PI * 1.43, direction: 'up'}

        
       }
    },
    {
    id: 'slr2nd3',
    name: 'slr203',
    description: 'SLR bldg. 2nd floor',
    imageUrl: 'images/SLRbldg/SLR2ndfloor3.jpg',
    category: ['SLR bldg.'],
    connections: ['slr2nd4','slr2nd2'],
    arrowPositions: {
      'slr2nd4': { phi: Math.PI / 3, theta: Math.PI * 1.92, direction: 'up'},
      'slr2nd2': { phi: Math.PI / 3, theta: Math.PI * .95, direction: 'up'}

        
       }
    },
{   
    id: 'slr2nd4',
    name: 'slr204',
    description: 'SLR bldg. 2nd floor',
    imageUrl: 'images/SLRbldg/SLR2ndfloor4.jpg',
    category: ['SLR bldg.'],
    connections: [,'slr2nd3','olp2nd_room2'],
    arrowPositions: {
       'olp2nd_room2': { phi: Math.PI / 3, theta: Math.PI * .65, direction: 'up'},
      'slr2nd3': { phi: Math.PI / 3, theta: Math.PI * 1.11, direction: 'up'}

        
       }
    },
    {   
    id: 'slr2ndto3rd',
    name: 'SLR2ndto3rd',
    description: 'SLR bldg. 2nd floor',
    imageUrl: 'images/SLRbldg/slr3rdstairs.jpg',
    category: ['SLR bldg.'],
    connections: [,'SLR2ndStairs','SLR3rdStairs'],
    arrowPositions: {
     
      'SLR2ndStairs': { phi: Math.PI / 4.2, theta: Math.PI * 1.9, direction: 'up'},
           
      'SLR3rdStairs': { phi: Math.PI / 3.9, theta: Math.PI * 2.22, direction: 'up'}

        
       }
    },
  
]