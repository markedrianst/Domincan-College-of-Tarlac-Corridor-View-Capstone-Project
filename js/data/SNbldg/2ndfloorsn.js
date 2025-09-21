const snsecondfloor =[
  {
    id: 'sn2nd1',
    name: 'SN 201',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/SN2ndfloor.jpg',
    category: ['SN bldg.'],
    connections: ['Hr2nd3','sn2nd2'],
    arrowPositions: {
      'Hr2nd3': { phi: Math.PI / 3, theta: Math.PI * 2.01, direction: 'up'},
      'sn2nd2': { phi: Math.PI / 3, theta: Math.PI * 0.98, direction: 'up'}

        
       }
    }, {
    id: 'sn2nd2',
    name: 'SN 202',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/SN2ndfloor1.jpg',
    category: ['SN bldg.'],
    connections: ['sn2nd3','sn2nd1'],
    arrowPositions: {
      'sn2nd3': { phi: Math.PI / 3, theta: Math.PI * 2.01, direction: 'up'},
      'sn2nd1': { phi: Math.PI / 3, theta: Math.PI * 0.98, direction: 'up'}

        
       }
    },

{
    id: 'sn2nd3',
    name: 'SN 203',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/SN2ndfloor2.jpg',
    category: ['SN bldg.'],
    connections: ['sn2nd4','sn2nd2'],
    arrowPositions: {
      'sn2nd4': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'up'},
      'sn2nd2': { phi: Math.PI / 3, theta: Math.PI * 0.98, direction: 'up'}

        
       }
    },
{
    id: 'sn2nd4',
    name: 'SN 204',
    description: 'SN bldg. 2nd floor',
    imageUrl: 'images/SNbldg/SN2ndfloor3.jpg',
    category: ['SN bldg.'],
    connections: ['slr2nd1','sn2nd3'],
    arrowPositions: {
      'slr2nd1': { phi: Math.PI / 3.5, theta: Math.PI * 2.3, direction: 'up'},
      'sn2nd3': { phi: Math.PI / 3, theta: Math.PI * 0.98, direction: 'up'}

        
       }
    },


]
