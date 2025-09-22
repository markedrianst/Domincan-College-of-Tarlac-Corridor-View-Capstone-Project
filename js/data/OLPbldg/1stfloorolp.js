const olp1stfloor =[
  {
    id: 'connectinghallwaytolp',
    name: 'Connecting Hallway to OLP',
    description: 'OLP bldg. 3rd floor',
    imageUrl: 'images/OLPbldg/OLP1stfloor(playfield).jpg',
    category: ['OLP bldg.'],
    connections: ['Hr1rd5','Coveredcourt','1stfloorolpstairs'],
    arrowPositions: {
      'Hr1rd5': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up'},
       'Coveredcourt': { phi: Math.PI / 3, theta: Math.PI * .7, direction: 'up'},
      '1stfloorolpstairs': { phi: Math.PI / 3, theta: Math.PI * 1.2, direction: 'up'}

        
       }
    },
      {
    id: '1stfloorolpstairs',
    name: '1stfloorolpstairs',
    description: 'OLP bldg. 1st floor',
    imageUrl: 'images/OLPbldg/OLP1stfloor(cafeteria).jpg',
    category: ['OLP bldg.'],
    connections: ['connectinghallwaytolp','olp2nd_stairs_from1st'],
    arrowPositions: {
      'connectinghallwaytolp': { phi: Math.PI / 3, theta: Math.PI * 1.65, direction: 'up'},
      'olp2nd_stairs_from1st': { phi: Math.PI / 3, theta: Math.PI * .87, direction: 'up'}

        
       }
    },

       {
    id: 'Coveredcourt',
    name: 'Coveredcourt',
    description: 'OLP bldg. 1st floor',
    imageUrl: 'images/OLPbldg/OLP1stfloor(court).jpg',
    category: ['OLP bldg.'],
    connections: ['connectinghallwaytolp'],
    arrowPositions: {
      'connectinghallwaytolp': { phi: Math.PI / 3, theta: Math.PI * .7, direction: 'up'},
 
        
       }
    },


]