const hrfirstfloor =[


 {  //connects to scs2nd to scs3rd
    id: 'shortcutsdtoccs',
    name: 'ShortCuttoCCS',
    description: 'HR bldg. 1st floor',
    imageUrl: 'images/HRbldg/sdShortcutToDepartmentOffices.jpg',
    category: ['HR bldg.'],
    connections: ['SdGroundfloor10','Hr1rd1'],
    arrowPositions: {
        'SdGroundfloor10': { phi: Math.PI / 3, theta: Math.PI * 1.65, direction: 'up'},
        'Hr1rd1': { phi: Math.PI / 3, theta: Math.PI * 1.1, direction: 'up'}

       }
},
    {  //connects to scs2nd to scs3rd
    id: 'Hr1rd1',
    name: 'CCS OFFICE',
    description: 'HR bldg. 1st floor',
    imageUrl: 'images/HRbldg/HR1stfloor2.jpg',
    category: ['HR bldg.'],
    connections: ['shortcutsdtoccs','Hr1rd2'],
    arrowPositions: {
        'shortcutsdtoccs': { phi: Math.PI / 3, theta: Math.PI * .9, direction: 'up'},
        'Hr1rd2': { phi: Math.PI / 3, theta: Math.PI * 2.25, direction: 'up'}

       }
},

{  //connects to scs2nd to scs3rd
    id: 'Hr1rd2', 
    name: 'CLA/CED OFFICE',
    description: 'HR bldg. 3rd floor',
    imageUrl: 'images/HRbldg/HR1stfloor1.jpg',
    category: ['HR bldg.'],
    connections: ['Hr1rd1','Hr1rd3'],
    arrowPositions: {
        'Hr1rd1': { phi: Math.PI / 3, theta: Math.PI * .92, direction: 'up'},
        'Hr1rd3': { phi: Math.PI / 3, theta: Math.PI * 2.25, direction: 'up'}

       }
},


{  //connects to scs2nd to scs3rd
    id: 'Hr1rd3',
    name: 'BSHM OFFICE',
    description: 'HR bldg. 3rd floor',
    imageUrl: 'images/HRbldg/HR1stfloor3.jpg',
    category: ['HR bldg.'],
    connections: ['Hr1rd2','Hr1rd4'],
    arrowPositions: {
        'Hr1rd2': { phi: Math.PI / 3, theta: Math.PI * .9, direction: 'up'},
        'Hr1rd4': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up'}

       }
},


{  //connects to scs2nd to scs3rd
    id: 'Hr1rd4',
    name: 'CBA,CCJE',
    description: 'HR bldg. 1st floor',
    imageUrl: 'images/HRbldg/HR1stfloor4.jpg',
    category: ['HR bldg.'],
    connections: ['Hr1rd3','Hr2nd2','Hr1rd5'],
    arrowPositions: {
        'Hr1rd3': { phi: Math.PI / 3, theta: Math.PI * .9, direction: 'up'},
        'Hr2nd2': { phi: Math.PI / 3, theta: Math.PI * 1.1, direction: 'up'},
        'Hr1rd5': { phi: Math.PI / 3, theta: Math.PI * 2.08, direction: 'up'},

       }
},


{  //connects to scs2nd to scs3rd
    id: 'Hr1rd3',
    name: 'BSHM OFFICE',
    description: 'HR bldg. 3rd floor',
    imageUrl: 'images/HRbldg/HR1stfloor3.jpg',
    category: ['HR bldg.'],
    connections: ['Hr1rd4','Hr3rd2',],
    arrowPositions: {
        'Hr1rd4': { phi: Math.PI / 3, theta: Math.PI * .9, direction: 'up'},
        'Hr3rd2': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up'},
       
        

       }
},
{  //connects to scs2nd to scs3rd
    id: 'Hr1rd5',
    name: 'Center Hall',
    description: 'HR bldg. 3rd floor',
    imageUrl: 'images/HRbldg/HR1stfloor5.jpg',
    category: ['HR bldg.'],
    connections: ['Hr1rd4','Hr1rd6','SDtoOLF4'],
    arrowPositions: {
        'Hr1rd4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up'},
        'Hr1rd6': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up'},
           'SDtoOLF4': { phi: Math.PI / 3, theta: Math.PI * .5, direction: 'up'}

       }
},


{  //connects to scs2nd to scs3rd
    id: 'Hr1rd6',
    name: 'Center Hall',
    description: 'HR bldg. 3rd floor',
    imageUrl: 'images/HRbldg/HR1stfloor6.jpg',
    category: ['HR bldg.'],
    connections: ['Hr1rd5','Hr3rd2'],
    arrowPositions: {
        'Hr1rd5': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up'},
      
       }
},




];