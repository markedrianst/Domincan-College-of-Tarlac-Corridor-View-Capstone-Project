const hr1stfloor = [

  {  
    id: 'hrshortcut1',
    name: 'Shortcut to CCS',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/1.1 Shortcut to CCS.webp',
    category: ['HR bldg.'],
    connections: ['shortcutsdtoccs','hrshortcut2'],
    arrowPositions: {
        'shortcutsdtoccs': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'hrshortcut2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {  
    id: 'hrshortcut2',
    name: 'Shortcut to CCS',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/1.2 Shortcut to CCS.webp',
    category: ['HR bldg.'],
    connections: ['hrshortcut1','hrshortcut3'],
    arrowPositions: {
        'hrshortcut1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'hrshortcut3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {  
    id: 'hrshortcut3',
    name: 'Shortcut to CCS',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/1.3 Shortcut to CCS.webp',
    category: ['HR bldg.'],
    connections: ['hrshortcut2','hrshortcutCJ','hrshortcut4'],
    arrowPositions: {
        'hrshortcut2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'hrshortcutCJ': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
         'hrshortcut4': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }

    }
  },

  {  
    id: 'hrshortcutCJ',
    name: 'Shortcut to CCS (Campus Journalism)',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/1.2 Shortcut to CCS(Campus Journalism).webp',
    category: ['HR bldg.'],
    connections: ['hrshortcut3'],
    arrowPositions: {
        'hrshortcut3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    }
  },

  {  
    id: 'hrshortcut4',
    name: 'Shortcut to CCS',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/1.4 Shortcut to CCS.webp',
    category: ['HR bldg.'],
    connections: ['hrshortcut3','hrshortcut5'],
    arrowPositions: {
        'hrshortcut3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'hrshortcut5': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {  
    id: 'hrshortcut5',
    name: 'Shortcut to CCS',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/1.5 Shortcut to CCS.webp',
    category: ['HR bldg.'],
    connections: ['hrshortcut4','ccsoffice'],
    arrowPositions: {
        'hrshortcut4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'ccsoffice': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    },          
    defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1.6 } // 👈 always face 2nd floor

  },

  {  
    id: 'ccsoffice',
    name: 'CCS Office',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/2 CCS Office.webp',
    category: ['HR bldg.','Offices'],
    connections: ['hrshortcut5','ccsoffice1'],
    arrowPositions: {
        'hrshortcut5': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
        'ccsoffice1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {  
    id: 'ccsoffice1',
    name: 'CCS Office HR 105',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/2.2 CCS -Office.webp',
    category: ['HR bldg.','Offices'],
    connections: ['ccsoffice','claoffice','ccsofficetosn'],
    arrowPositions: {
        'ccsoffice': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
        'ccsofficetosn': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
        'claoffice': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

    {  
    id: 'ccsofficetosn',
    name: 'CCS Office HR 105',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/2.3 CCS to SN Building.webp',
    category: ['HR bldg.','Offices'],
    connections: ['ccsoffice1','sn1st1'],
    arrowPositions: {
        'ccsoffice1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'sn1st1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }

    }
  },
  {  
    id: 'claoffice',
    name: 'CLA Office',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/3 CLA.webp',
    category: ['HR bldg.','Offices'],
    connections: ['ccsoffice1','cedoffice'],
    arrowPositions: {
        'ccsoffice1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'cedoffice': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
    }
  },

  {  
    id: 'cedoffice',
    name: 'CED Office  HR 104',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/4 CED Office.webp',
    category: ['HR bldg.','Offices'],
    connections: ['claoffice','chmoffice'],
    arrowPositions: {
        'claoffice': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'chmoffice': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {  
    id: 'chmoffice',
    name: 'CHM Office',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/5 CHM Office.webp',
    category: ['HR bldg.','Offices'],
    connections: ['cedoffice','cbaoffice'],
    arrowPositions: {
        'cedoffice': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'cbaoffice': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {  
    id: 'cbaoffice',
    name: 'CBA Office HR 103',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/6 CBA Office.webp',
    category: ['HR bldg.','Offices'],
    connections: ['chmoffice','ccjeoffice'],
    arrowPositions: {
        'chmoffice': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
        'ccjeoffice': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {  
    id: 'ccjeoffice',
    name: 'CCJE Office HR 102',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/7 CCJE Office.webp',
    category: ['HR bldg.','Offices'],
    connections: ['cbaoffice','grandhall','Hr2nd5'],
    arrowPositions: {
        'cbaoffice': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
        'Hr2nd5': { phi: Math.PI / 3, theta: Math.PI * 2.15, direction: 'up' },
        'grandhall': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

  {  
    id: 'grandhall',
    name: 'Grand Hall of HR',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/7.4 GrandHallofHR.webp',
    category: ['HR bldg.'],
    connections: ['ccjeoffice','hr101','dachall3', 'dachall1'],
    arrowPositions: {
       'dachall3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'dachall1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
        'ccjeoffice': { phi: Math.PI / 3, theta: Math.PI *1.5 , direction: 'up' },
        'hr101': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },

  {  
    id: 'hr101',
    name: 'HR 101',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/8 HR 101.webp',
    category: ['HR bldg.','Rooms'],
    connections: ['grandhall','hrstairs'],
    arrowPositions: {
        'grandhall': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
        'hrstairs': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },

{
  id: 'hrstairs',
  name: 'HR 1st Floor Stairs',
  description: 'HR Building 1st Floor',
  imageUrl: 'images/HRbldg/8.2 HR 1st Floor Stairs.webp',
  category: ['HR bldg.'],
  connections: ['hr101', 'hrconf1', 'hrside0'],
  arrowPositions: {
    'hr101': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    'hrconf1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
    'hrside0': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' } // 👈 new link to Side Stairs
  }
}
,

  {  
    id: 'hrconf1',
    name: 'HR Conference Room',
    description: 'HR Building 1st Floor',
    imageUrl: 'images/HRbldg/8.4 HR Conference Room.webp',
    category: ['HR bldg.','Rooms'],
    connections: ['hr101'],
    arrowPositions: {
        'hrstairs': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },    }
  },
{
  id: 'hrside0',
  name: 'HR Side Entrance',
  description: 'HR Building Side Area',
  imageUrl: 'images/HRbldg/0.webp',
  category: ['HR bldg.'],
  connections: ['hrside12', 'hrstairs'], // 👈 back connection to HR 1st Floor Stairs
  arrowPositions: {
    'hrside12': { phi: Math.PI / 3, theta: Math.PI * 2.3, direction: 'up' },
    'hrstairs': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'down' }
  },
  defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // 👈 always face 2nd floor

},

  {  
    id: 'hrside12',
    name: 'HR 201 Side Stairs',
    description: 'HR Building 2nd Floor Access',
    imageUrl: 'images/HRbldg/1.2 HR 201 Side Stairs.webp',
    category: ['HR bldg.'],
    connections: ['hrside13a','hrside0'],
    arrowPositions: {
        'hrside13a': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
        'hrside0': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'down' }
    }
  },

  {  
    id: 'hrside13a',
    name: 'HR 202 Side Stairs (Speech Lab 1)',
    description: 'HR Building 2nd Floor - Speech Lab Access',
    imageUrl: 'images/HRbldg/1.3 HR 202 Side Stairs(Speech Lab)(1).webp',
    category: ['HR bldg.'],
    connections: ['hrside12','Hr3rd1'],
    arrowPositions: {
        'hrside12': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
        'Hr3rd1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }

    },          defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // 👈 always face 2nd floor

  }


];
