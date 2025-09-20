const scsfirstfloor =[
  {
    id: 'scs1st1',
    name: 'SCS 101',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/scs1st4.jpg',
    category: ['SCS bldg.'],
    connections: ['SdGroundfloor2','scs1st2'],
    arrowPositions: {
      'SdGroundfloor2': { phi: Math.PI / 3, theta: Math.PI * 2.05, direction: 'up'},
      'scs1st2': { phi: Math.PI / 3, theta: Math.PI * 1.15, direction: 'up'}

        
       }
    },
    {
    id: 'scs1st2',
    name: 'SCS 102',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/scs1st3.jpg',
    category: ['SCS bldg.'],
    connections: ['scs1st1','scs1st3'],
    arrowPositions: {
      'scs1st1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'},
      'scs1st3': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'up'}

        
       }
    },
    {  id: 'scs1st3',
    name: 'SCS 103',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/scs1st2.jpg',
    category: ['SCS bldg.'],
    connections: ['scs1st2','scs1st4'],
    arrowPositions: {
      'scs1st2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'},
      'scs1st4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'}

        
       }
    },
    { 
         id: 'scs1st4',
    name: 'SCS 104',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/scs1st1.jpg',
    category: ['SCS bldg.'],
    connections: ['scs1st3','Scs1stto2nd'],
    arrowPositions: {
      'scs1st3': { phi: Math.PI / 3, theta: Math.PI * 0.55, direction: 'up'},
      'Scs1stto2nd': { phi: Math.PI / 3, theta: Math.PI * 1.2, direction: 'up'}

        
       }
    }
    ,  {  
        id: 'Scs1stto2nd',
    name: 'SCS Stairs to 2nd Floor',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/scsStairsto2nd.jpg',
    category: ['SCS bldg.'],
    connections: ['scs1st4','scs2nd2'],
    arrowPositions: {
      'scs1st4': { phi: Math.PI / 3.1, theta: Math.PI * 0.15, direction: 'up'},
      'scs2nd2': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up'}

        
       }
    }
    ,
  
  

];

// const entrancePanoramas = [
//   {
//     id: 'entrance',
//     name: 'Main Entrance',
//     description: 'Domimicam College of Tarlac Main Entrance',
//     imageUrl: 'images/Sdbldg/GateEntrancee.jpg',
//     category: ['entrance'],
//     connections: ['SdGroundFloor1'],
//     arrowPositions: {
//       'SdGroundFloor1': { phi: Math.PI / 2.6, theta: Math.PI * 1.75, direction: 'up' }
//     }
//   }
// ];
