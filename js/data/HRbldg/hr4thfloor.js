const hr4thfloor = [

  { 
    id: 'hr4thStair4',
    name: 'HR Stair (4) 4th Floor',
    description: 'HR Building 4th Floor Stairs',
    imageUrl: 'images/HRbldg/K HR STAIR (4) 4TH FLOOR.webp',
    category: ['HR bldg.'],
    connections: ['hr403', 'Hr3rd13'],
    arrowPositions: {
      'hr403': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'Hr3rd13': { phi: Math.PI / 4, theta: Math.PI * 2, direction: 'down' }
    }
  },

  { 
    id: 'hr403',
    name: 'HR 403',
    description: 'HR Building 4th Floor Room 403',
    imageUrl: 'images/HRbldg/K HR 403.webp',
    category: ['HR bldg.'],
    connections: ['hr4thStair4'],
    arrowPositions: {
      'hr4thStair4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

];
