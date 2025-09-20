const scsthirdfloor =[


{  //connects to scs2nd to scs3rd
        id: 'scs3rd1',
    name: 'SCS 301',
    description: 'SCS bldg. 3rd floor',
    imageUrl: 'images/Scsbldg/scs3rd1.jpg',
    category: ['SCS bldg.'],
    connections: ['Scs2ndto3rd','scs3rd2','Scs3rdto4th'],
    arrowPositions: {
      'Scs2ndto3rd': { phi: Math.PI / 3, theta: Math.PI * 0.65, direction: 'up'},
      'scs3rd2': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up'},
      'Scs3rdto4th': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up'},
       


        
       }
    }
    ,
    {  //connects to scs2nd to scs3rd
        id: 'scs3rd2',
    name: 'SCS 302',
    description: 'SCS bldg. 3rd floor',
    imageUrl: 'images/Scsbldg/scs3rd2.jpg',
    category: ['SCS bldg.'],
    connections: ['scs3rd1','scs3rd3'],
    arrowPositions: {
      'scs3rd1': { phi: Math.PI / 3, theta: Math.PI * 1.05, direction: 'up'},
      'scs3rd3': { phi: Math.PI / 3, theta: Math.PI * 1.90, direction: 'up'},
    


        
       }
    }
    ,



    {  
        id: 'scs3rd3',
    name: 'SCS 303',
    description: 'SCS bldg.3rd floor',
    imageUrl: 'images/Scsbldg/scs3rd3.jpg',
    category: ['SCS bldg.'],
    connections: ['scs3rd2','scs3rd4'],
    arrowPositions: {
      'scs3rd2': { phi: Math.PI / 3, theta: Math.PI * 1.05, direction: 'up'},
    'scs3rd4': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up'},
     
    
     
       }
    },



    {  
        id: 'scs3rd4',
    name: 'SCS 304',
    description: 'SCS bldg.3rd floor',
    imageUrl: 'images/Scsbldg/scs3rd4.jpg',
    category: ['SCS bldg.'],
    connections: ['scs3rd3','Sd3rdfloor301'],
    arrowPositions: {
      'scs3rd3': { phi: Math.PI / 3, theta: Math.PI * 1.05, direction: 'up'},
    'Sd3rdfloor301': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'up'},
     
    
     
       }
    },  {  
        id: 'Scs3rdto4th',
    name: 'SCS Stairs to 4th Floor',
    description: 'SCS bldg. 4th floor',
    imageUrl: 'images/Scsbldg/scsStairsto4th.jpg',
    category: ['SCS bldg.'],
    connections: ['scs3rd1','scs4rd1',],
    arrowPositions: {
      'scs3rd1': { phi: Math.PI / 3.1, theta: Math.PI * 0.86, direction: 'up'},
      'scs4rd1': { phi: Math.PI / 3, theta: Math.PI * 0.60, direction: 'up'}

        
       }
    }
    ,

];