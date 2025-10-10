const sd3rdFloor = [
     {
        id: 'Sd3rdfloormidstairs4',
        name: 'SD  3rd Floor to 2nd FLoor',
        description: 'To 2nd floor floor',
        imageUrl: 'images/Sdbldg/MidStairsSD3rdfloor.webp',
        category: 'SD bldg.',
        connections: ['3rdfloormidstairs','Sd2ndfloormidstairs'],
        arrowPositions: {
            'Sd2ndfloormidstairs': { phi: Math.PI / 4, theta: 3, direction:'down' },
            '3rdfloormidstairs': { phi: Math.PI / 3, theta: 2, direction:'up' }
        },    
        defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 2 } // always face 2nd floor

    },
    {
        id: 'Sd3rdfloormidstairs',
        name: 'SD 3rd midstairs',
        description: 'Staircase leading to the third floor',
        imageUrl: 'images/Sdbldg/1.2 SD SIDE STAIRS 3RD FLOOR.webp',
        category: 'SD bldg.',
        connections: ['Sd3rdfloormidstairs3', 'Sd2ndfloorcorner2'],
        arrowPositions: {
            'Sd3rdfloormidstairs3': { phi: Math.PI / 2.9, theta: 0.5, direction:'up' },
            'Sd2ndfloorcorner2': { phi: Math.PI / 3.6, theta: -0.3, direction:'down' }
        },
                defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 3 } // always face 2nd floor

    },

    {
        id: 'Sd3rdfloormidstairs3',
        name: 'SD Side Stairs 3rd Floor',
        description: 'Side stairs to third floor',
        imageUrl: 'images/Sdbldg/1.3 SD SIDE STAIRS 3RD FLOOR .webp',
        category: 'SD bldg.',
        connections: ['Sd3rdfloorhallway','Sd3rdfloormidstairs','Sd4thfloorcornerstairs'],
        arrowPositions: {
            'Sd3rdfloormidstairs': { phi: Math.PI / 4, theta: -0.3, direction:'down' },
            'Sd4thfloorcornerstairs': { phi: Math.PI / 3, theta: 0.3, direction:'up' },
            'Sd3rdfloorhallway': { phi: Math.PI / 3, theta: 3.3, direction:'up' }
        }
    },

    {
        id: 'Sd3rdfloorhallway',
        name: 'SD Side Stairs Hallway',
        description: 'Hallway leading to classrooms',
        imageUrl: 'images/Sdbldg/2 SD SIDE STAIRS-Hallway.webp',
        category: 'SD bldg.',
        connections: ['Sd3rdfloor301', 'Sd3rdfloormidstairs3'],
        arrowPositions: {
            'Sd3rdfloor301': { phi: Math.PI / 3, theta: 0.1, direction:'up' },
            'Sd3rdfloormidstairs3': { phi: Math.PI / 3, theta: -1.9, direction:'up' }
        }
    },

    {
        id: 'Sd3rdfloor301',
        name: 'SD 301',
        description: 'SD bldg. 3rd floor',
        imageUrl: 'images/Sdbldg/3 SD 301.webp',
        category: 'SD bldg.',
        connections: ['Sd3rdfloor302','Sd3rdfloorhallway','scs3rd_304'],
        arrowPositions: {
            'Sd3rdfloorhallway': { phi: Math.PI / 3, theta: -3, direction:'up' },
            'Sd3rdfloor302': { phi: Math.PI / 3, theta: 0, direction:'up' },
             'scs3rd_304': { phi: Math.PI / 3, theta: 1.5, direction:'up' }
        }
    },

{
    id: 'Sd3rdfloor302',
    name: 'SD 302',
    description: 'SD bldg. 3rd floor',
    imageUrl: 'images/Sdbldg/4 SD 302.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloor301','Sd3rdfloor303'],
    arrowPositions: {
        'Sd3rdfloor303': { phi: Math.PI / 3, theta: 0, direction:'up' },
        'Sd3rdfloor301': { phi: Math.PI / 3, theta: -3, direction:'up' }
    }
},

{
    id: 'Sd3rdfloor303',
    name: 'SD 303',
    description: 'SD bldg. 3rd floor',
    imageUrl: 'images/Sdbldg/5 SD 303.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloor302','Sd3rdfloor304'],
    arrowPositions: {
        'Sd3rdfloor304': { phi: Math.PI / 3, theta: 0, direction:'up' },
        'Sd3rdfloor302': { phi: Math.PI / 3, theta: -3, direction:'up' }
    }
},

{
    id: 'Sd3rdfloor304',
    name: 'SD 304',
    description: 'SD bldg. 3rd floor',
    imageUrl: 'images/Sdbldg/6 SD 304.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloor303','3rdfloormidstairs'],
    arrowPositions: {
        '3rdfloormidstairs': { phi: Math.PI / 3, theta: 0, direction:'up' },
        'Sd3rdfloor303': { phi: Math.PI / 3, theta: -3, direction:'up' }
    }
},

{
    id: '3rdfloormidstairs',
    name: 'SD 3rd Midway Stairs',
    description: 'Staircase leading to the third floor',
    imageUrl: 'images/Sdbldg/7 SD Midway Stairs.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloor304','Sd3rdfloor305','Sd4thfloormidstairs','Sd3rdfloormidstairs4'],
    arrowPositions: {
        'Sd3rdfloor304': { phi: Math.PI / 3, theta: -3, direction:'up' },
        'Sd3rdfloor305': { phi: Math.PI / 2.8, theta: 0, direction:'up' },
        'Sd3rdfloormidstairs4': { phi: Math.PI / 3.8, theta: 3.7, direction:'down' },
        'Sd4thfloormidstairs': { phi: Math.PI / 3.8, theta: -1.3, direction:'up' }
    }
},

{
    id: 'Sd3rdfloor305',
    name: 'SD 305',
    description: 'SD bldg. 3rd floor',
    imageUrl: 'images/Sdbldg/8 SD 305.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloor306','3rdfloormidstairs'],
    arrowPositions: {
        'Sd3rdfloor306': { phi: Math.PI / 3, theta: 0, direction:'up' },
        '3rdfloormidstairs': { phi: Math.PI / 3, theta: -3, direction:'up' }
    }
},

{
    id: 'Sd3rdfloor306',
    name: 'SD 306',
    description: 'SD bldg. 3rd floor',
    imageUrl: 'images/Sdbldg/9 SD 306.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloor305','Sd3rdfloor307'],
    arrowPositions: {
        'Sd3rdfloor307': { phi: Math.PI / 3, theta: 0, direction:'up' },
        'Sd3rdfloor305': { phi: Math.PI / 3, theta: -3, direction:'up' }
    }
},

{
    id: 'Sd3rdfloor307',
    name: 'SD 307',
    description: 'SD bldg. 3rd floor',
    imageUrl: 'images/Sdbldg/10 SD 307.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloor306','Sd3rdfloor308'],
    arrowPositions: {
        'Sd3rdfloor308': { phi: Math.PI / 3, theta: 0, direction:'up' },
        'Sd3rdfloor306': { phi: Math.PI / 3, theta: -3, direction:'up' }
    }
},

{
    id: 'Sd3rdfloor308',
    name: 'SD 308 / Extension to HR',
    description: 'SD bldg. 3rd floor and extension to HR',
    imageUrl: 'images/Sdbldg/11 SD 308.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloor307','Sd3rdfloorHRext1'],
    arrowPositions: {
        'Sd3rdfloor307': { phi: Math.PI / 3, theta: -3, direction:'up' },
        'Sd3rdfloorHRext1': { phi: Math.PI / 3, theta: 0, direction:'up' }
    }
},

{
    id: 'Sd3rdfloorHRext1',
    name: 'SD Extension to HR',
    description: 'Extension hallway to HR',
    imageUrl: 'images/Sdbldg/11 SD Extesion to HR.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloor308', 'Sd3rdfloorHRext2'],
    arrowPositions: {
        'Sd3rdfloor308': { phi: Math.PI / 3, theta: -3, direction:'up' },
        'Sd3rdfloorHRext2': { phi: Math.PI / 3, theta: 0, direction:'up' }
    }
},

{
    id: 'Sd3rdfloorHRext2',
    name: 'SD Extension to HR',
    description: 'Extension hallway to HR',
    imageUrl: 'images/Sdbldg/12 SD Extension to HR .webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloorHRext1', 'Sd3rdfloorHRext3'],
    arrowPositions: {
        'Sd3rdfloorHRext1': { phi: Math.PI / 3, theta: -3, direction:'up' },
        'Sd3rdfloorHRext3': { phi: Math.PI / 3, theta: -1.5, direction:'up' }
    }
},

{
    id: 'Sd3rdfloorHRext3',
    name: 'SD Extension to HR',
    description: 'Extension hallway to HR',
    imageUrl: 'images/Sdbldg/13 SD Extesion to HR.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloorHRext2', 'Sd3rdfloorHRext4'],
    arrowPositions: {
        'Sd3rdfloorHRext2': { phi: Math.PI / 3, theta: 1.5, direction:'up' },
        'Sd3rdfloorHRext4': { phi: Math.PI / 3, theta: 0, direction:'up' }
    }
},

{
    id: 'Sd3rdfloorHRext4',
    name: 'SD Extension to HR',
    description: 'Extension hallway to HR',
    imageUrl: 'images/Sdbldg/14 SD Extesion to HR.webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloorHRext3', 'Sd3rdfloorHRext5'],
    arrowPositions: {
        'Sd3rdfloorHRext3': { phi: Math.PI / 3, theta: -3, direction:'up' },
        'Sd3rdfloorHRext5': { phi: Math.PI / 3, theta: 0, direction:'up' }
    }
},

{
    id: 'Sd3rdfloorHRext5',
    name: 'SD Extension to HR',
    description: 'Extension hallway to HR',
    imageUrl: 'images/Sdbldg/15 SD Extension to HR .webp',
    category: 'SD bldg.',
    connections: ['Sd3rdfloorHRext4', 'Hr3rd19'],
    arrowPositions: {
        'Sd3rdfloorHRext4': { phi: Math.PI / 3, theta: -3, direction:'up' },
        'Hr3rd19': { phi: Math.PI / 3, theta: 1.5, direction:'up' }
    }
}
];