const olf4thbldg = [



      { id: 'olf4thLIBRARY',
    name: 'College Library',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/OLF4thfloor.jpg',
    category: ['OLP bldg.'],
    connections: ['olf4th102',],
    arrowPositions: {

    'olf4th102': { phi: Math.PI / 3.2, theta: Math.PI * 1.15, direction: 'up'},
       
    
       }
    },
      { id: 'olf4th102',
    name: 'olf4th102',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/OLF4thfloor1.jpg',
    category: ['OLP bldg.'],
    connections: ['olf4thLIBRARY','olf4th103'],
    arrowPositions: {

    'olf4thLIBRARY': { phi: Math.PI / 3.2, theta: Math.PI * 1.08, direction: 'up'},
       'olf4th103': { phi: Math.PI / 3.2, theta: Math.PI * 1.93, direction: 'up'},
       
       
    
       }
    },
    { id: 'olf4th103',
    name: 'olf4th103',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/OLF4thfloor2.jpg',
    category: ['OLP bldg.'],
    connections: ['olf4th102','olf4th104','Stairsto4thfloor'],
    arrowPositions: {

    'olf4th102': { phi: Math.PI / 3.2, theta: Math.PI * 1.85, direction: 'up'},
     'olf4th104': { phi: Math.PI / 3.2, theta: Math.PI * 0.65, direction: 'up'},
          'Stairsto4thfloor': { phi: Math.PI / 3.2, theta: Math.PI * 0.4, direction: 'down'},
       
    
       }
    },
{ id: 'olf4th104',
    name: 'olf4th104',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/OLF4thfloor3.jpg',
    category: ['OLP bldg.'],
    connections: ['olf4th103','olf4th105'],
    arrowPositions: {

    'olf4th103': { phi: Math.PI / 3.2, theta: Math.PI * 2.07, direction: 'up'},
           'olf4th105': { phi: Math.PI / 3.2, theta: Math.PI * 0.9, direction: 'up'},
       
    
       }
    },{
         id: 'olf4th105',
    name: 'olf4th105',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/OLF4thfloor4.jpg',
    category: ['OLP bldg.'],
    connections: ['olf4th104','olf4th106'],
    arrowPositions: {

    'olf4th104': { phi: Math.PI / 3.2, theta: Math.PI * 2.4, direction: 'up'},
           'olf4th106': { phi: Math.PI / 3.2, theta: Math.PI * 1.2, direction: 'up'},
       
    
       }
    },{
         id: 'olf4th106',
    name: 'olf4th106',
    description: 'OLF 4th Floor',
    imageUrl: 'images/OLFbldg/OLF4thfloor5.jpg',
    category: ['OLP bldg.'],
    connections: ['olf4th105',],
    arrowPositions: {

    'olf4th105': { phi: Math.PI / 3.2, theta: Math.PI * 2.6, direction: 'up'},
          
       
    
       }
    },






];