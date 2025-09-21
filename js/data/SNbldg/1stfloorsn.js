const snfirstfloor =[
  {
    id: 'sn1st1',
    name: 'SN 101',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/SN1stfloor.jpg',
    category: ['SN bldg.'],
    connections: ['Hr1rd1','sn1st2'],
    arrowPositions: {
      'Hr1rd1': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'up'},
      'sn1st2': { phi: Math.PI / 3, theta: Math.PI * 1., direction: 'up'}

        
       }
    },


  {
    id: 'sn1st2',
    name: 'SN 102',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/SN1stfloor1.jpg',
    category: ['SN bldg.'],
    connections: ['sn1st3','sn1st1'],
    arrowPositions: {
      'sn1st3': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'up'},
      'sn1st1': { phi: Math.PI / 3, theta: Math.PI * .97, direction: 'up'}

        
       }
    }
,


  {
    id: 'sn1st3',
    name: 'SN 103',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/SN1stfloor2.jpg',
    category: ['SN bldg.'],
    connections: ['sn1st2','sn1st4'],
    arrowPositions: {
      'sn1st2': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'up'},
      'sn1st4': { phi: Math.PI / 3, theta: Math.PI * .97, direction: 'up'}

        
       }
    }

,


  {
    id: 'sn1st4',
    name: 'SN 104',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/SN1stfloor3.jpg',
    category: ['SN bldg.'],
    connections: ['sn1st5','sn1st3'],
    arrowPositions: {
      'sn1st5': { phi: Math.PI / 3, theta: Math.PI * 1.77, direction: 'up'},
      'sn1st3': { phi: Math.PI / 3, theta: Math.PI * .8, direction: 'up'}

        
       }
    }

,


  {
    id: 'sn1st5',
    name: 'SN 105',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/SN1stfloor4.jpg',
    category: ['SN bldg.'],
    connections: ['sn1st6','sn1st4'],
    arrowPositions: {
      'sn1st6': { phi: Math.PI / 3, theta: Math.PI * 1.92, direction: 'up'},
      'sn1st4': { phi: Math.PI / 3, theta: Math.PI * .65, direction: 'up'}

        
       }
    }

,


  {
    id: 'sn1st6',
    name: 'SN 106',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/SN1stfloor5.jpg',
    category: ['SN bldg.'],
    connections: ['sn1st7','sn1st5'],
    arrowPositions: {
      'sn1st7': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'},
      'sn1st5': { phi: Math.PI / 3, theta: Math.PI * 1.2, direction: 'up'}

        
       }
    }

,


  {
    id: 'sn1st7',
    name: 'SN 107',
    description: 'SN bldg. 1st floor',
    imageUrl: 'images/SNbldg/SN1stfloor6.jpg',
    category: ['SN bldg.'],
    connections: ['slr1st1','sn1st6'],
    arrowPositions: {
      'slr1st1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'},
      'sn1st6': { phi: Math.PI / 3, theta: Math.PI * .5, direction: 'up'}

        
       }
    }



]