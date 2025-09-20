const scssecondfloor =[


 {  //connects to scs1st1 to scssecond2
        id: 'scs2nd2',
    name: 'SCS 202',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/scs2nd1.jpg',
    category: ['SCS bldg.'],
    connections: ['Scs1stto2nd','scs2nd1','Scs2ndto3rd'],
    arrowPositions: {
      'Scs1stto2nd': { phi: Math.PI / 3, theta: Math.PI * 0.8, direction: 'up'},
      'scs2nd1': { phi: Math.PI / 3, theta: Math.PI * 2.2, direction: 'up'},
      'Scs2ndto3rd': { phi: Math.PI / 2.9, theta: Math.PI * 2.65, direction: 'up'}


        
       }
    }
    ,{  //connects to scs1st1 to scssecond2
        id: 'scs2nd1',
    name: 'SCS 201',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/scs2nd2.jpg',
    category: ['SCS bldg.'],
    connections: ['scs2nd2'],
    arrowPositions: {
      'scs2nd2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'},
     
        
       }
    }
    
     ,{  //connects to scs2nd to scs3rd
        id: 'Scs2ndto3rd',
    name: 'SCS Stairs to 3rd Floor',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/scsStairsto3rd.jpg',
    category: ['SCS bldg.'],
    connections: ['scs2nd2','scs3rd1'],
    arrowPositions: {
      'scs2nd2': { phi: Math.PI / 3.5, theta: Math.PI * 1.15, direction: 'up'},
      'scs3rd1': { phi: Math.PI / 3.3, theta: Math.PI * 0.9, direction: 'up'},
     
        
       }
    }
    ,
  

];