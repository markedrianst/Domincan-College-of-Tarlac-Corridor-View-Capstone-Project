const scsfourthfloor =[

 {  //connects to scs2nd to scs3rd
        id: 'scs4rd1',
    name: 'SCS 401',
    description: 'SCS bldg. 4th floor',
    imageUrl: 'images/Scsbldg/scs4th1.jpg',
    category: ['SCS bldg.'],
    connections: ['Scs3rdto4th','scs4rd2'],
    arrowPositions: {
      'Scs3rdto4th': { phi: Math.PI / 3, theta: Math.PI * 0.85, direction: 'up'},
      'scs4rd2': { phi: Math.PI / 3, theta: Math.PI * 2.3, direction: 'up'},
    


        
       }
    }
    ,{  //connects to scs2nd to scs3rd
        id: 'scs4rd2',
    name: 'SCS 402',
    description: 'SCS bldg. 4th floor',
    imageUrl: 'images/Scsbldg/scs4th2.jpg',
    category: ['SCS bldg.'],
    connections: ['scs4rd1','scs4rd3'],
    arrowPositions: {
      'scs4rd1': { phi: Math.PI / 3, theta: Math.PI * 1.06, direction: 'up'},
      'scs4rd3': { phi: Math.PI / 3, theta: Math.PI * 1.87, direction: 'up'},
    


        
       }
    } 
    ,{  //connects to scs2nd to scs3rd
        id: 'scs4rd3',
    name: 'SCS 403',
    description: 'SCS bldg. 4th floor',
    imageUrl: 'images/Scsbldg/scs4th3.jpg',
    category: ['SCS bldg.'],
    connections: ['scs4rd2','scs4rd4'],
    arrowPositions: {
      'scs4rd2': { phi: Math.PI / 3, theta: Math.PI * 0.20, direction: 'up'},
      'scs4rd4': { phi: Math.PI / 3, theta: Math.PI * 1.05, direction: 'up'},
    


        
       }
    }
    ,{  //connects to scs2nd to scs3rd
        id: 'scs4rd4',
    name: 'SCS 403',
    description: 'SCS bldg. 4th floor',
    imageUrl: 'images/Scsbldg/scs4th4.jpg',
    category: ['SCS bldg.'],
    connections: ['scs4rd3','Sd4thfloor2'],
    arrowPositions: {
      'scs4rd3': { phi: Math.PI / 3, theta: Math.PI * 0.1, direction: 'up'},
      'Sd4thfloor2': { phi: Math.PI / 3, theta: Math.PI * 0.97, direction: 'up'},
    


        
       }
    }




];