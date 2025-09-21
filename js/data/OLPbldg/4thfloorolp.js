const olp4thfloor =[
  {
    id: 'olp4thfloor1',
    name: 'MPH',
    description: 'OLP bldg. 4th floor',
    imageUrl: 'images/OLPbldg/OLP4thfloor.jpg',
    category: ['OLP bldg.'],
    connections: ['olp4thfloor2','slr4th4'],
    arrowPositions: {
      'olp4thfloor2': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up'},
      'slr4th4': { phi: Math.PI / 3, theta: Math.PI * 2.92, direction: 'up'}

        
       }
    },

      {
    id: 'olp4thfloor2',
    name: 'MPH',
    description: 'OLP bldg. 4th floor',
    imageUrl: 'images/OLPbldg/OLP4thfloor1.jpg',
    category: ['OLP bldg.'],
    connections: ['olp4thfloor3','olp4thfloor1'],
    arrowPositions: {
      'olp4thfloor3': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up'},
      'olp4thfloor1': { phi: Math.PI / 3, theta: Math.PI * 3, direction: 'up'}

        
       }
    },
         {
    id: 'olp4thfloor3',
    name: 'olp4thfloor3',
    description: 'OLP bldg. 4th floor',
    imageUrl: 'images/OLPbldg/OLP4thfloor2.jpg',
    category: ['OLP bldg.'],
    connections: ['olp4thfloor4','olp4thfloor2','olp4thstairs'],
    arrowPositions: {
      'olp4thfloor4': { phi: Math.PI / 3, theta: Math.PI * 1.35, direction: 'up'},
      'olp4thfloor2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'},
         'olp4thstairs': { phi: Math.PI / 3, theta: Math.PI * 0.7, direction: 'up'}

        
       }
    },   
          {
    id: 'olp4thstairs',
    name: 'olp4thstairs',
    description: 'OLP bldg. 4th floor',
    imageUrl: 'images/OLPbldg/OLP4thstairs.jpg',
    category: ['OLP bldg.'],
    connections: ['olp4thfloor3','olp3rdfloor3'],
    arrowPositions: {
      'olp4thfloor3': { phi: Math.PI / 4, theta: Math.PI * .4, direction: 'up'},
      'olp3rdfloor3': { phi: Math.PI / 4.3, theta: Math.PI * .75, direction: 'down'},
      

        
       }
    },        {
    id: 'olp4thfloor4',
    name: 'olp4thfloor4',
    description: 'OLP bldg. 4th floor',
    imageUrl: 'images/OLPbldg/OLP4thfloor3.jpg',
    category: ['OLP bldg.'],
    connections: [,'olp4thfloor3','Hr3rd8'],
    arrowPositions: {
   
      'olp4thfloor3': { phi: Math.PI / 3, theta: Math.PI * 2.25, direction: 'up'},
       'Hr3rd8': { phi: Math.PI / 4, theta: Math.PI * 1.17, direction: 'up'}

        
       }
    },
    

    




]