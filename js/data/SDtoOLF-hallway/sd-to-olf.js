const sdtoolbldg =[
    {
    id: 'SDtoOLF1',
    name: 'SCS 101',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/SDtoOlf-Hallway/connectingsdolf1.jpg',
    category: ['SCS bldg.'],
    connections: ['SdGroundfloor2','scs1st2'],
    arrowPositions: {
      'SdGroundfloor2': { phi: Math.PI / 3, theta: Math.PI * 2.05, direction: 'up'},
      'scs1st2': { phi: Math.PI / 3, theta: Math.PI * 1.15, direction: 'up'}

        
       }
    },


];