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
    name: 'HR 403 JHS - SHS Library ',
    description: 'HR Building 4th Floor Room 403',
    imageUrl: 'images/HRbldg/K HR 403.webp',
    category: ['HR bldg.'],
    connections: ['hr4thStair4'],
    arrowPositions: {
      'hr4thStair4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'down' }
    }
  },
/// other 4th floor 
   { 
    id: 'hrstair3rdfloor0_2',
    name: 'HR Stair 3rd Floor (0.2)',
    description: 'HR Building stairs from 3rd floor starting point',
    imageUrl: 'images/HRbldg/1 HR STAIR 3RD FLOOR (0.2).webp',
    category: ['HR bldg.'],
    connections: ['hrstairs3rdto4th','Hr3rd6'],
    arrowPositions: {
      'hrstairs3rdto4th': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'Hr3rd6': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'down' }
    }
  },

  { 
    id: 'hrstairs3rdto4th',
    name: 'HR Stairs 3rd to 4th Floor',
    description: 'Stairs leading from 3rd floor to 4th floor',
    imageUrl: 'images/HRbldg/3 HR Stairs 3rd to 4th Floor.webp',
    category: ['HR bldg.'],
    connections: ['hrstair3rdfloor0_2','hr401stair2'],
    arrowPositions: {
      'hrstair3rdfloor0_2': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'hr401stair2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  { 
    id: 'hr401gym',
    name: 'HR 401 Gymnasium',
    description: 'HR Building 4th Floor Gymnasium',
    imageUrl: 'images/HRbldg/K HR 401 GYMNASIUM.webp',
    category: ['HR bldg.'],
    connections: ['hr401stair2','olp401_1'],
    arrowPositions: {
      'hr401stair2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olp401_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    
    }
  },

  { 
    id: 'hr401stair2',
    name: 'HR 401, 402',
    description: 'Side stair beside HR 401 Gym',
    imageUrl: 'images/HRbldg/K HR 401 STAIR (2).webp',
    category: ['HR bldg.'],
    connections: ['hr401gym','hrstairs3rdto4th'],
    arrowPositions: {
      'hr401gym': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'hrstairs3rdto4th': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  { 
    id: 'hr401stair',
    name: 'HR 401, 402',
    description: 'Main stair near HR 401',
    imageUrl: 'images/HRbldg/K HR 401 STAIR.webp',
    category: ['HR bldg.'],
    connections: ['hr401stair2','hr402'],
    arrowPositions: {
      'hr401stair2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'hr402': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },




];
