const sd3rdFloor = [

    {
        id: 'Sd3rdfloormidstairs',
        name: 'SD 3rd midstairs',
        description: 'Staircase leading to the third floor',
        imageUrl: 'images/Sdbldg/MidStairsSD3rdfloor.jpg',
        category: 'Sd bldg.',
        connections: ['3rdfloormidstairs', 'Sd2ndfloormidstairs'],
        arrowPositions: {
            '3rdfloormidstairs': { phi: Math.PI / 2.3, theta: Math.PI * -1.5 ,direction:'rigth' }, // Up-forward
            'Sd2ndfloormidstairs': { phi: Math.PI / 3.6, theta: Math.PI * 1,direction:'down' } // Right
        }
    },

    {
        id: 'Sd3rdfloorcornerstairs',
        name: 'SD 3rd cornerstairs',
        description: 'Staircase leading to the third floor',
        imageUrl: 'images/Sdbldg/sdcornerstairs3rdfloor.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor1','2ndFloorSD'],
        arrowPositions: {
            'Sd3rdfloor1': { phi: Math.PI / 2.6, theta: Math.PI * 1.15 ,direction:'up' }, // Up-forward
            '2ndFloorSD': { phi: Math.PI / 2.9, theta: Math.PI * 0.9,direction:'down' } // Right

        }
    },

    {
        id: 'Sd3rdfloor1',
        name: 'SD 3rd floor',
        description: 'This area leading to room 301,302,303,304,305,306,307,308,309,310',
        imageUrl: 'images/Sdbldg/3rdfloorSD1.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloorcornerstairs', 'Sd4thfloorcornerstairs','Sd3rdfloor301'],
        arrowPositions: {
            'Sd3rdfloorcornerstairs': { phi: Math.PI / 2.6, theta: Math.PI * 0.9 ,direction:'down' }, // Up-forward
            'Sd4thfloorcornerstairs': { phi: Math.PI / 2.5, theta: Math.PI * 1.01,direction:'up' } ,// Right
            'Sd3rdfloor301': { phi: Math.PI / 3, theta: Math.PI * 1.45,direction:'up' } // Right

        }
    },

        {
        id: 'Sd3rdfloor301',
        name: 'SD 301',
        description: 'Sd bldg. 3rd floor',
        imageUrl: 'images/Sdbldg/3rdfloorSD2.jpg',
        category: 'Sd bldg.',
        connections: ['', 'Sd3rdfloor302','Sd3rdfloor1','2ndFloorSD'],
        arrowPositions: {
            'Sd3rdfloor1': { phi: Math.PI / 3, theta: Math.PI * 1.1 ,direction:'up' }, // Up-forward
             'Sd3rdfloor302': { phi: Math.PI / 3, theta: Math.PI * 2,direction:'up' } ,// Right
            '2ndFloorSD': { phi: Math.PI / 3, theta: Math.PI * .6,direction:'up' } // Right

        }
    },

    
        {
        id: 'Sd3rdfloor302',
        name: 'SD 302',
        description: 'Sd bldg. 3rd floor',
        imageUrl: 'images/Sdbldg/3rdfloorSD3.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor301', 'Sd3rdfloor303'],
        arrowPositions: {
            'Sd3rdfloor303': { phi: Math.PI / 3, theta: Math.PI * 1.95 ,direction:'up' }, // Up-forward
            'Sd3rdfloor301': { phi: Math.PI /3, theta: Math.PI * 1.05,direction:'up' }

        }
    },

            {
        id: 'Sd3rdfloor303',
        name: 'SD 303',
        description: 'Sd bldg. 3rd floor',
        imageUrl: 'images/Sdbldg/3rdfloorSD4.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor302','Sd3rdfloor304'],
        arrowPositions: {
           'Sd3rdfloor304': { phi: Math.PI / 3, theta: Math.PI * 1.95 ,direction:'up' }, // Up-forward
            'Sd3rdfloor302': { phi: Math.PI /3, theta: Math.PI * 1.05,direction:'up' }

        }
    },
        {
        id: 'Sd3rdfloor304',
        name: 'SD 304',
        description: 'Sd bldg. 3rd floor',
        imageUrl: 'images/Sdbldg/3rdfloorSD5.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor303','3rdfloormidstairs'],
        arrowPositions: {
           '3rdfloormidstairs': { phi: Math.PI / 3, theta: Math.PI * 1.95 ,direction:'up' }, // Up-forward
            'Sd3rdfloor303': { phi: Math.PI /3, theta: Math.PI * 1.05,direction:'up' }

        }
    },

          {
        id: '3rdfloormidstairs',
        name: '3rdfloormidstairs',
        description: 'Staircase leading to the third floor',
        imageUrl: 'images/Sdbldg/3rdfloorSD6.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor304','Sd3rdfloormidstairs','Sd3rdfloor305','Sd4thfloormidstairs'],
        arrowPositions: {
           'Sd3rdfloor304': { phi: Math.PI / 3, theta: Math.PI * 1.6 ,direction:'up' }, // Up-forward
            'Sd3rdfloormidstairs': { phi: Math.PI /3, theta: Math.PI * 1.75,direction:'down' },
            'Sd4thfloormidstairs': { phi: Math.PI /2.8, theta: Math.PI * 2,direction:'up' },
            'Sd3rdfloor305': { phi: Math.PI /2.8, theta: Math.PI * 2.4,direction:'up' }

        }
    },
       {
        id: 'Sd3rdfloor305',
        name: 'SD 305',
        description: 'Sd bldg. 3rd floor',
        imageUrl: 'images/Sdbldg/3rdfloorSD7.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor306','3rdfloormidstairs'],
        arrowPositions: {
           'Sd3rdfloor306': { phi: Math.PI / 3, theta: Math.PI * 1.95 ,direction:'up' }, // Up-forward
            '3rdfloormidstairs': { phi: Math.PI /3, theta: Math.PI * 1.05,direction:'up' }

        }
    },
     {
        id: 'Sd3rdfloor306',
        name: 'SD 306',
        description: 'Sd bldg. 3rd floor',
        imageUrl: 'images/Sdbldg/3rdfloorSD8.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor305','Sd3rdfloor307'],
        arrowPositions: {
           'Sd3rdfloor307': { phi: Math.PI / 3, theta: Math.PI * 1.9 ,direction:'up' }, // Up-forward
            'Sd3rdfloor305': { phi: Math.PI /3, theta: Math.PI * 1.05,direction:'up' }

        }
    },
       {
        id: 'Sd3rdfloor307',
        name: 'SD 307',
        description: 'Sd bldg. 3rd floor',
        imageUrl: 'images/Sdbldg/3rdfloorSD9.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor306','Sd3rdfloor308'],
        arrowPositions: {
           'Sd3rdfloor308': { phi: Math.PI / 3, theta: Math.PI * 1.85 ,direction:'up' }, // Up-forward
            'Sd3rdfloor306': { phi: Math.PI /3, theta: Math.PI * 0.95,direction:'up' }

        }
    },
 {
        id: 'Sd3rdfloor308',
        name: 'SD 308',
        description: 'Sd bldg. 3rd floor',
        imageUrl: 'images/Sdbldg/3rdfloorSD10.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor307'],
        arrowPositions: {
            'Sd3rdfloor307': { phi: Math.PI /3, theta: Math.PI * 1.05,direction:'up' }

        }
    },


];