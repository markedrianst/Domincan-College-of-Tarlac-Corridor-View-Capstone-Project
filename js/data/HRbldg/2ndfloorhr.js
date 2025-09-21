const hrsecondfloor =[
{  //connects to scs2nd to scs3rd
    id: 'Hr2nd1',
    name: 'VPAA Office',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/Hrbldg/HR2ndfloor.jpg',
    category: ['HR bldg.'],
    connections: ['Hr3rd4','Hr2nd2'],
    arrowPositions: {
      'Hr3rd4': { phi: Math.PI / 3, theta: Math.PI * 1.15, direction: 'up'},
      'Hr2nd2': { phi: Math.PI / 3, theta: Math.PI * 2.9, direction: 'up'},
         'Hr2nd2': { phi: Math.PI / 3, theta: Math.PI * 2.9, direction: 'up'},
       }
    },
    
    {  //connects to scs2nd to scs3rd
        id: 'Hr2nd2',
    name: 'HR 2ND FLOOR',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/Hrbldg/HR2ndfloor1.jpg',
    category: ['HR bldg.'],
    connections: ['Hr2nd1','Hr2nd3','Hr1rd4'],
    arrowPositions: {
      'Hr2nd3': { phi: Math.PI / 3, theta: Math.PI * 1.35, direction: 'up'},
      'Hr2nd1': { phi: Math.PI / 3, theta: Math.PI * 2.4, direction: 'up'},
      'Hr1rd4': { phi: Math.PI / 3, theta: Math.PI * 2.2, direction: 'up'},
       }
    },

    {  //connects to scs2nd to scs3rd
        id: 'Hr2nd3',
    name: 'hr2nd2',
    description: 'HR bldg. 2nd floor',
    imageUrl: 'images/Hrbldg/HR2ndfloor2.jpg',
    category: ['HR bldg.'],
    connections: ['Hr2nd2','Hr3rd2'],
    arrowPositions: {
      'Hr2nd2': { phi: Math.PI / 3, theta: Math.PI * .85, direction: 'up'},
      'Hr3rd2': { phi: Math.PI / 3, theta: Math.PI * 2.3, direction: 'up'},
       }
    },



];
