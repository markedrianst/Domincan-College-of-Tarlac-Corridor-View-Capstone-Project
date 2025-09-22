const olp3rdfloor =[
  {
    id: 'olp3rdfloor1',
    name: 'olp301',
    description: 'OLP bldg. 3rd floor',
    imageUrl: 'images/OLPbldg/OLP3rdfloor.jpg',
    category: ['OLP bldg.'],
    connections: ['slr3rd4','olp3rdfloor2'],
    arrowPositions: {
      'slr3rd4': { phi: Math.PI / 3, theta: Math.PI * 1.58, direction: 'up'},
      'olp3rdfloor2': { phi: Math.PI / 3, theta: Math.PI * 0.4, direction: 'up'}

        
       }
    },
      {
    id: 'olp3rdfloor2',
    name: 'olp302',
    description: 'OLP bldg. 3rd floor',
    imageUrl: 'images/OLPbldg/OLP3rdfloor1.jpg',
    category: ['OLP bldg.'],
    connections: ['olp3rdfloor1','olp3rdfloor3'],
    arrowPositions: {
      'olp3rdfloor1': { phi: Math.PI / 3, theta: Math.PI * 1.58, direction: 'up'},
      'olp3rdfloor3': { phi: Math.PI / 3, theta: Math.PI * 0.4, direction: 'up'}

        
       }
    },
     {
    id: 'olp3rdfloor3',
    name: 'olp303',
    description: 'OLP bldg. 3rd floor',
    imageUrl: 'images/OLPbldg/OLP3rdfloor2.jpg',
    category: ['OLP bldg.'],
    connections: ['olp3rdfloor2','olp3rdfloor4','olp4thstairs','olp3rdfloorstairs'],
    arrowPositions: {
      'olp3rdfloor2': { phi: Math.PI / 3, theta: Math.PI * 1.58, direction: 'up'},
      'olp3rdfloor4': { phi: Math.PI / 3, theta: Math.PI * 0.45, direction: 'up'},
      'olp3rdfloorstairs': { phi: Math.PI / 3, theta: Math.PI * 0.3, direction: 'up'},
      'olp4thstairs': { phi: Math.PI / 3, theta: Math.PI * 0.08, direction: 'up'}


        
       }
    }
    ,
     {
    id: 'olp3rdfloorstairs',
    name: 'olp3rdfloorstairs',
    description: 'OLP bldg. 3rd floor',
    imageUrl: 'images/OLPbldg/OLP3rdfloor4.jpg',
    category: ['OLP bldg.'],
    connections: ['olp3rdfloor3','olp2nd_stairs_to3rd'],
    arrowPositions: {
      'olp3rdfloor3': { phi: Math.PI / 4, theta: Math.PI * .5, direction: 'up'},
      'olp2nd_stairs_to3rd': { phi: Math.PI / 4.15, theta: Math.PI * .8, direction: 'down'}


        
       }
    },

     {
    id: 'olp3rdfloor4',
    name: 'olp304',
    description: 'OLP bldg. 3rd floor',
    imageUrl: 'images/OLPbldg/OLP3rdfloor3.jpg',
    category: ['OLP bldg.'],
    connections: ['Hr3rd8','olp3rdfloor3',],
    arrowPositions: {
      'Hr3rd8': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'up'},
      'olp3rdfloor3': { phi: Math.PI / 3, theta: Math.PI * 3, direction: 'up'},
      


        
       }
    },


]