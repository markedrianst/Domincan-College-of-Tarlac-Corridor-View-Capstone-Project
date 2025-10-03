const sd4thfloor = [
    {
        id: 'Sd4thfloorcornerstairs',
        name: 'SD 4th Floor Side Stairs',
        description: 'Side staircase entrance on 4th floor',
        imageUrl: 'images/Sdbldg/1 4TH FLOOR SD SIDE STAIRS.webp',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloormidstairs3', 'Sd4thfloor1'],
        arrowPositions: {
            'Sd4thfloor1': { phi: Math.PI / 3, theta: Math.PI * 2.15, direction: 'up' },
            'Sd3rdfloormidstairs3': { phi: Math.PI / 3.5, theta: Math.PI * 1.9, direction: 'down' }
        },
                defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // always face 2nd floor

    },
    {
        id: 'Sd4thfloor1',
        name: 'SD 4th Floor Hallway 1',
        description: 'Hallway view from side stairs',
        imageUrl: 'images/Sdbldg/1.1 4TH FLOOR SD SIDE STAIRS.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloorcornerstairs', 'Sd4thfloor2'],
        arrowPositions: {
            'Sd4thfloor2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloorcornerstairs': { phi: Math.PI / 3.8, theta: Math.PI * 1, direction: 'down' }
        }
    },
    {
        id: 'Sd4thfloor2',
        name: 'SD 4th Floor Hallway 2',
        description: 'Hallway approaching Cisco Lab',
        imageUrl: 'images/Sdbldg/1.2 4TH FLOOR SD SIDE STAIRS.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor1', 'Sd4thfloor3', ],
        arrowPositions: {
            'Sd4thfloor3': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor1': { phi: Math.PI / 3, theta: Math.PI * -2.5, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloor3',
        name: 'SD 401 Cisco Lab Entrance',
        description: 'Entrance to Cisco Lab',
        imageUrl: 'images/Sdbldg/2 4TH FLOOR SD CISCO LAB.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor4', 'Sd4thfloor2'],
        arrowPositions: {
            'Sd4thfloor4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloor4',
        name: 'SD 402 Lab 1 Entrance',
        description: 'Entrance to Lab 1',
        imageUrl: 'images/Sdbldg/2.1 4TH FLOOR SD CISCO LAB.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor3', 'Sd4thfloor5'],
        arrowPositions: {
            'Sd4thfloor5': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloor5',
        name: 'SD 403 Lab 1 Area',
        description: 'Lab 1 area view',
        imageUrl: 'images/Sdbldg/3 4TH FLOOR SD LAB 1.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor4', 'Sd4thfloor6'],
        arrowPositions: {
            'Sd4thfloor6': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloor6',
        name: 'SD 404 Lab 2 Entrance',
        description: 'Entrance to Lab 2',
        imageUrl: 'images/Sdbldg/3.1 4TH FLOOR SD LAB 1.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor5', 'Sd4thfloor7'],
        arrowPositions: {
            'Sd4thfloor7': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloor7',
        name: 'SD 405 Lab 2 Area',
        description: 'Lab 2 area view',
        imageUrl: 'images/Sdbldg/4 4TH FLOOR SD LAB 2.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor6', 'Sd4thfloor8'],
        arrowPositions: {
            'Sd4thfloor8': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor6': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloor8',
        name: 'Midway Stairs Area',
        description: 'Area near midway stairs',
        imageUrl: 'images/Sdbldg/5 Midway Stairs.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor7', 'Sd4thfloor9', 'Sd4thfloormidstairs'],
        arrowPositions: {
            'Sd4thfloor9': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor7': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
            'Sd4thfloormidstairs': { phi: Math.PI / 3.5, theta: Math.PI * 1.2, direction: 'down' }
        }
    },
    {
        id: 'Sd4thfloor9',
        name: 'SD 406 Lab 3',
        description: 'Lab 3 area',
        imageUrl: 'images/Sdbldg/6 4TH FLOOR SD LAB 3.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor8', 'Sd4thfloor10'],
        arrowPositions: {
            'Sd4thfloor10': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor8': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloor10',
        name: 'SD 406 Classroom',
        description: 'Room 406 classroom',
        imageUrl: 'images/Sdbldg/7 SD 406.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor9', 'Sd4thfloor11'],
        arrowPositions: {
            'Sd4thfloor11': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor9': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloor11',
        name: 'SD SHS-ICT CSS Lab',
        description: 'SHS-ICT Computer Systems Servicing Lab',
        imageUrl: 'images/Sdbldg/8 SD SHS-ICT CSS LAB.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor10', 'Sd4thfloor12'],
        arrowPositions: {
            'Sd4thfloor12': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
            'Sd4thfloor10': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloor12',
        name: 'SD 408 Classroom',
        description: 'Room 408 classroom',
        imageUrl: 'images/Sdbldg/9 SD 408.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor11'],
        arrowPositions: {
            'Sd4thfloor11': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
        }
    },
    {
        id: 'Sd4thfloormidstairs',
        name: 'SD 4th Mid Stairs',
        description: 'Mid staircase leading to 3rd and 4th floors',
        imageUrl: 'images/Sdbldg/5.1 Midway Stairs.webp',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor8', '3rdfloormidstairs'],
        arrowPositions: {
            'Sd4thfloor8': { phi: Math.PI / 3, theta: Math.PI * -1.4, direction: 'up' },
            '3rdfloormidstairs': { phi: Math.PI / 4, theta: Math.PI * 1, direction: 'down' }
        },        
            defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // always face 2nd floor
    }
];