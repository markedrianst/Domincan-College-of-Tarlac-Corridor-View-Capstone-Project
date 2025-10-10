const sdGroundFloor = [  
    {
        id: 'SdGroundFloor1',
        name: 'Access in SD and SCS bldg.',
        description: 'Connects entrance to classrooms', 
        imageUrl: 'images/Sdbldg/Sd1.webp',
        category: ['SD bldg.'],
        connections: ['SdGroundfloor2', 'entrance2', 'Sd2ndfloorcorner1'],
        arrowPositions: {
            'SdGroundfloor2': { phi: Math.PI / 2.6, theta: Math.PI * 2 ,direction: 'up' }, // Right
            'entrance2': { phi: Math.PI / 2.6, theta: Math.PI * 0.90,direction: 'up' }, // Back
            'Sd2ndfloorcorner1': { phi: Math.PI / 2.6, theta: Math.PI * 1.5 ,direction: 'up' } // Up-left
        }
    },
    {
        id: 'SdGroundfloor2',
        name: 'SD-101 – Guidance and Counseling Office',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SD101.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundFloor1', 'SdGroundfloor3'],
        arrowPositions: {
        'SdGroundfloor3': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
        'SdGroundFloor1': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }, // Back
        
      
      
        }
    },

    {
        id: 'SdGroundfloor3',
        name: 'SD-101 – Guidance and Counseling Office',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd102.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor2', 'SdGroundfloor4'],
        arrowPositions: { 
           'SdGroundfloor4': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor2': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }, // Back
        
        }
    },
    {
        id: 'SdGroundfloor4',
        name: 'SD,SCS Way',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/toSCS.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor3', 'SdGroundfloor5','scs1st1'],
        arrowPositions: {
            'SdGroundfloor5': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor3': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' },//Right
            'scs1st1': { phi: Math.PI / 2.6, theta: Math.PI *2.5,direction: 'up' }, // Back
        }
    },

        {
        id: 'SdGroundfloor5',
          name: 'SD-102 – Testing Office',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SD102 (2).webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor4', 'SdGroundfloor6'],
        arrowPositions: {
            'SdGroundfloor6': { phi: Math.PI / 2.6, theta: Math.PI * 2,direction:'up' }, // Right
            'SdGroundfloor4': { phi: Math.PI / 2.6, theta: Math.PI * 1,direction: 'up' }//Right
        }
    },
            {
        id: 'SdGroundfloor6',
        name: 'SD-103 – Human Resources Management and Development Office (HRMDO)',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/SD 103.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor5','SdGroundfloor7'],
        arrowPositions: {
            'SdGroundfloor7': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor5': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
        }
    },
    {
        id: 'SdGroundfloor7',
        name: 'SD-104',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd104.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor6','SdGroundfloor8'],
        arrowPositions: {
            'SdGroundfloor8': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor6': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
        }
    },
    {
        id: 'SdGroundfloor8',
        name: 'SD-105 – HRM Hotel Laboratory',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd105.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor7','SdGroundfloor9'],
        arrowPositions: {
            'SdGroundfloor9': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor7': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
        }
    },
    {
        id: 'SdGroundfloor9',
        name: 'SD-106 – Corporate Affairs Office',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd106.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor8','SdGroundfloor10'],
        arrowPositions: {
            'SdGroundfloor10': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor8': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
        }
    },
    {
        id: 'SdGroundfloor10',
        name: 'SD Middle Stairs',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd107.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor9','SdGroundfloor11','sd2ndfloorcr'],
        arrowPositions: {
            'SdGroundfloor11': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor9': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' },
            'sd2ndfloorcr': { phi: Math.PI / 2.6, theta: Math.PI * 1.5, direction:'up' }
        }
    },
    {
        id: 'SdGroundfloor11',
        name: 'SD-107 – Principal’s Office (PRIO)',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd108.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor10','SdGroundfloor12'],
        arrowPositions: {
            'SdGroundfloor12': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor10': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
        }
    },
    {
        id: 'SdGroundfloor12',
        name: 'SD-108 – Campus Ministry (CAM) / Office of the Chaplain (OC)',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd108 (2).webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor11','SdGroundfloor13'],
        arrowPositions: {
            'SdGroundfloor13': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor11': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
        }
    },
    {
        id: 'SdGroundfloor13',
        name: 'SD-109 – Community Extension and Services (CES)',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd111.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor12','SdGroundfloor14'],
        arrowPositions: {
            'SdGroundfloor14': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor12': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
        }
    },
    {
        id: 'SdGroundfloor14',
        name: 'SD-110 – Theology / Christian Life Education (CLE) Program',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd112.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor13','SdGroundfloor15'],
        arrowPositions: {
            'SdGroundfloor15': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor13': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
        }
    },
    {
        id: 'SdGroundfloor15',
        name:'SD-111 – Emergency Response and Disaster Management Office',
        description: 'SD bldg. 1st floor',
        imageUrl: 'images/Sdbldg/Sd113.webp',
        category: ['SD bldg.','Offices'],
        connections: ['SdGroundfloor14','SdGroundfloor16'],
        arrowPositions: {
            'SdGroundfloor16': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
            'SdGroundfloor14': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
        }
    },
   {
    id: 'SdGroundfloor16',
    name: 'SD-112 – Discipline Council',
    description: 'SD bldg. 1st floor',
    imageUrl: 'images/Sdbldg/Sd114.webp',
    category: ['SD bldg.','Offices'],
    connections: ['SdGroundfloor15','SdGroundfloor18'],
    arrowPositions: {
        'SdGroundfloor18': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
        'SdGroundfloor15': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
    }
},
{
    id: 'SdGroundfloor18',
    name: 'SD-113 – Office of Student Affairs / Student Organization Coordinator',
    description: 'SD bldg. 1st floor',
    imageUrl: 'images/Sdbldg/SD 113.webp',
    category: ['SD bldg.','Offices'],
    connections: ['SdGroundfloor16','SdGroundfloor19'],
    arrowPositions: {
        'SdGroundfloor19': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }, 
        'SdGroundfloor16': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' }
    }
},
{
    id: 'SdGroundfloor19',
    name: 'SD-114 – Supreme Student Council',
    description: 'SD bldg. 1st floor',
    imageUrl: 'images/Sdbldg/sscoffice.webp',
    category: ['SD bldg.','Offices'],
    connections: ['SdGroundfloor18','SDtoOLF1','shortcutsdtoccs'],
    arrowPositions: {
        'SdGroundfloor18': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' },
        'SDtoOLF1': { phi: Math.PI / 2.6, theta: Math.PI * 2.53, direction:'up' }, 
        'shortcutsdtoccs': { phi: Math.PI / 2.6, theta: Math.PI * 2, direction:'up' }
    }
},
{
    id: 'shortcutsdtoccs',
    name: 'SD to HR Offices',
    description: 'SD bldg. 1st floor',
    imageUrl: 'images/Sdbldg/1 Shorcut to CCS PART.webp',
    category: ['SD bldg.','Offices'],
    connections: ['SdGroundfloor19','hrshortcut1'],
    arrowPositions: {
        'SdGroundfloor19': { phi: Math.PI / 2.6, theta: Math.PI * 1, direction:'up' },
        'hrshortcut1': { phi: Math.PI / 2.6, theta: Math.PI * 1.7, direction:'up' }
    }
}
];
