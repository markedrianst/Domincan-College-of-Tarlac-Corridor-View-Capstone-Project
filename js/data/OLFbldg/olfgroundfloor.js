const olfbldg = [
  // Side stairs
  {  
    id: 'olf_side_stair_1_2',
    name: 'OLF Side Stair (1)',
    description: 'OLF building side stair midpoint',
    imageUrl: 'images/OLFbldg/C OLF SIDE STAIR (1.2).webp',
    category: ['OLF bldg.'],
    connections: ['DOLF200', 'olf_side_stair_2',],
    arrowPositions: {
      'DOLF200': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'olf_side_stair_2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'olf_side_stair_2',
    name: 'OLF Side Stair (2)',
    description: 'OLF building side stair second floor',
    imageUrl: 'images/OLFbldg/C OLF SIDE STAIR (2).webp',
    category: ['OLF bldg.'],
    connections: ['olf_side_stair_1_2', 'olf_side_stair_3'],
    arrowPositions: {
      'olf_side_stair_1_2': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up' },
      'olf_side_stair_3': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up' }
    },
     defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // 👈 always face 2nd floor  
  },
  {  
    id: 'olf_side_stair_3',
    name: 'OLF Side Stair (3)',
    description: 'OLF building side stair third point',
    imageUrl: 'images/OLFbldg/C OLF SIDE STAIR (3).webp',
    category: ['OLF bldg.'],
    connections: ['olf_side_stair_2', 'olf_side_stair_4'],
    arrowPositions: {
      'olf_side_stair_2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'olf_side_stair_4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {  
    id: 'olf_side_stair_4',
    name: 'OLF Side Stair (4)',
    description: 'OLF building side stair fourth point',
    imageUrl: 'images/OLFbldg/C OLF SIDE STAIR (4).webp',
    category: ['OLF bldg.'],
    connections: ['olf_side_stair_3', 'olf_1st_floor_1'],
    arrowPositions: {
      'olf_side_stair_3': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up' },
      'olf_1st_floor_1': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
      
    }
  },

  // 1st floor parts
  {  
    id: 'olf_1st_floor_1',
    name: 'OLF 1st Floor - Part 1',
    description: 'OLF building 1st floor, part 1',
    imageUrl: 'images/OLFbldg/D OLF 1ST FLOOR 1ST PART.webp',
    category: ['OLF bldg.'],
    connections: ['olf_side_stair_4' ,'SDtoOLF6','olf_1st_floor_2'],
    arrowPositions: {
      'olf_side_stair_4': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
      'SDtoOLF6': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olf_1st_floor_2': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
  },
  {  
    id: 'olf_1st_floor_2',
    name: 'OLF 1st Floor - Part 2',
    description: 'OLF building 1st floor, part 2',
    imageUrl: 'images/OLFbldg/D OLF 1ST FLOOR 2ND PART.webp',
    category: ['OLF bldg.'],
    connections: ['olf_1st_floor_1', 'olf_rpqa'],
    arrowPositions: {
      'olf_1st_floor_1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olf_rpqa': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
 {  
  id: 'olf_rpqa',
  name: 'OLF RPQA',
  description: 'OLF building RPQA office',
  imageUrl: 'images/OLFbldg/E OLF RPQA.webp',
  category: ['OLF bldg.', 'Offices'],
  connections: ['olf_1st_floor_2', 'olf_accounting'], // connect to accounting
  arrowPositions: {
    'olf_1st_floor_2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    'olf_accounting': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
  }
},
{  
  id: 'olf_accounting',
  name: 'OLF Accounting Office',
  description: 'OLF building accounting office 1st floor',
  imageUrl: 'images/OLFbldg/F OLF ACCOUNTING OFFICE 1ST.webp',
  category: ['OLF bldg.', 'Offices'],
  connections: ['olf_rpqa', 'olf_registrar_1'], // connect to RPQA and registrar
  arrowPositions: {
    'olf_rpqa': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    'olf_registrar_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
  }
},
{  
  id: 'olf_registrar_1',
  name: 'OLF Registrar Office - Part 1',
  description: 'OLF building registrar office 1st floor',
  imageUrl: 'images/OLFbldg/F OLF REGISTRAR OFFICE 1ST.webp',
  category: ['OLF bldg.', 'Offices'],
  connections: ['olf_accounting', 'olf_registrar_2'], // connect to accounting and 2nd part
  arrowPositions: {
    'olf_accounting': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
    'olf_registrar_2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
  }
},
{  
  id: 'olf_registrar_2',
  name: 'OLF Registrar Office - Part 2',
  description: 'OLF building registrar office 2nd part',
  imageUrl: 'images/OLFbldg/F OLF REGISTRAR OFFICE 2ND.webp',
  category: ['OLF bldg.', 'Offices'],
  connections: ['olf_registrar_1','olf_stair_1_2_1'], // connect back to part 1
  arrowPositions: {
    'olf_registrar_1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'olf_stair_1_2_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }

  }
},

  // G OLF stairs 1st to 2nd floor
  {  
    id: 'olf_stair_1_2_1',
    name: 'OLF Stair 1st to 2nd Floor (1)',
    description: 'OLF stair first to second floor, part 1',
    imageUrl: 'images/OLFbldg/G OLF STAIR 1ST TO 2ND FLOOR (1).webp',
    category: ['OLF bldg.'],
    connections: ['olf_stair_storage_room','olf_registrar_2','olf_stair_2nd_1'],
    arrowPositions: {
      'olf_stair_storage_room': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' },
      'olf_registrar_2': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' },
       'olf_stair_2nd_1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'olf_stair_2nd_1',
        name: 'OLF Stair 2nd Floor 1st Part',
    description: 'OLF stair 2nd floor, first part',
    imageUrl: 'images/OLFbldg/G OLF STAIR 2ND FLOOR 1ST PART(1).webp',
    category: ['OLF bldg.'],
    connections: ['olf_stair_1_2_1', 'olf_stair_2nd_2'],
    arrowPositions: {
      'olf_stair_1_2_1': { phi: Math.PI / 4, theta: Math.PI * 1, direction: 'down' },
      'olf_stair_2nd_2': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    },
     defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1.6 } // 👈 always face 2nd floor
  },
  {  
    id: 'olf_stair_2nd_2',
    name: 'OLF Stair 2nd Floor 2nd Part',
    description: 'OLF stair 2nd floor, second part',
    imageUrl: 'images/OLFbldg/G OLF STAIR 2ND FLOOR 2ND PART.webp',
    category: ['OLF bldg.'],
    connections: ['olf_stair_2nd_1','EOLFStair2ndTo3rd3'],
    arrowPositions: {
      'olf_stair_2nd_1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'EOLFStair2ndTo3rd3': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
    }
         ,defaultView: { phi: Math.PI / 2.6, theta: Math.PI *1.5  } // 👈 always face 2nd floor
  },
  {  
    id: 'olf_stair_storage_room',
    name: 'OLF Storage Room',
    description: 'OLF storage room',
    imageUrl: 'images/OLFbldg/G OLF STORAGE ROOM.webp',
    category: ['OLF bldg.'],
    connections: ['olf_stair_1_2_1','olf_firing_range'], // connected only to Stair 1
    arrowPositions: {
      'olf_stair_1_2_1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }, 
      'olf_firing_range': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },

  {  
    id: 'olf_firing_range',
    name: 'OLF Firing Range',
    description: 'OLF building firing range',
    imageUrl: 'images/OLFbldg/H OLF FIRING RANGE.webp',
    category: ['OLF bldg.'],
    connections: ['olf_stair_storage_room','olf_crime_lab'], // connect if needed
    arrowPositions: {
      'olf_stair_storage_room': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }, 
      'olf_crime_lab': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'olf_crime_lab',
    name: 'OLF Crime Lab',
    description: 'OLF building crime lab',
    imageUrl: 'images/OLFbldg/I OLF CRIME LAB.webp',
    category: ['OLF bldg.'],
    connections: ['olf_firing_range','scs1st_parking_5'], // connect if needed
    arrowPositions: {
      'olf_firing_range': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }, 
      'scs1st_parking_5': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }, 
    }
  }
];

