const sd4thfloor =[
{
        id: 'Sd4thfloormidstairs',
        name: 'SD 4th midstairs',
        description: 'Staircase leading to the 4th floor',//description
        imageUrl: 'images/Sdbldg/MidStairsSD4thfloor.jpg',// image
        category: 'Sd bldg.',
        connections: ['3rdfloormidstairs', 'Sd2ndfloormidstairs'],//button connections
        arrowPositions: {
            '3rdfloormidstairs': { phi: Math.PI / 2.3, theta: Math.PI * -1.5 ,direction:'rigth' }, //button position
            'Sd2ndfloormidstairs': { phi: Math.PI / 3.6, theta: Math.PI * 1,direction:'down' } // button position
            
        }
    },
{
        id: 'Sd4thfloorcornerstairs',
        name: 'SD 4th floor cornerstairs',
        description: 'Staircase leading to the 4th floor',
        imageUrl: 'images/Sdbldg/sdcornerstairs4thfloor.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor1','Sd4thfloor1'],
        arrowPositions: {
            'Sd4thfloor1': { phi: Math.PI / 2.6, theta: Math.PI * 1.15 ,direction:'up' }, // Up-forward
            'Sd3rdfloor1': { phi: Math.PI / 2.9, theta: Math.PI * 0.9,direction:'down' } // Right

        }
    },

    {
        id: 'Sd4thfloor1',
        name: 'SD 4th floor',
        description: 'Leading to room 401,402,403,404,405,406,407,408,409,410',
        imageUrl: 'images/Sdbldg/4thfloorsd1.jpg',
        category: 'Sd bldg.',
        connections: [ 'Sd4thfloorcornerstairs','Sd4thfloor2'],
        arrowPositions: {
            'Sd4thfloor2': { phi: Math.PI / 2.6, theta: Math.PI * 0.45 ,direction:'up' }, // Up-forward
            'Sd4thfloorcornerstairs': { phi: Math.PI / 2.5, theta: Math.PI * 1.95,direction:'down' } ,// Right

        }
    },

    
    {
        id: 'Sd4thfloor2',
        name: 'Sd 401 Cisco Lab',
        description: 'Sd bldg. 4th floor',
        imageUrl: 'images/Sdbldg/4thfloorsd2.jpg',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor1', 'Sd4thfloor3','Sd3rdfloor301'],
        arrowPositions: {
            'Sd3rdfloor301': { phi: Math.PI / 2.6, theta: Math.PI * 0.45 ,direction:'up' }, // Up-forward
            'Sd4thfloor3': { phi: Math.PI / 2.5, theta: Math.PI * 1.9,direction:'up' } ,// Right
            'Sd4thfloor1': { phi: Math.PI / 2.5, theta: Math.PI * 1,direction:'up' } ,// Right

        }
    },
      {
        id: 'Sd4thfloor3',
        name: 'Sd 402 Lab 1',
        description: 'Sd bldg. 4th floor',
        imageUrl: 'images/Sdbldg/4thfloorsd3.jpg',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor4', 'Sd4thfloor2'],
        arrowPositions: {
             'Sd4thfloor4': { phi: Math.PI / 2.5, theta: Math.PI * 2,direction:'up' } ,// Right
            'Sd4thfloor2': { phi: Math.PI / 2.5, theta: Math.PI * 1.1,direction:'up' } ,// Right

        }
    },
  {
        id: 'Sd4thfloor4',
        name: 'Sd 403 Lab 1',
        description: 'Sd bldg. 4th floor',
        imageUrl: 'images/Sdbldg/4thfloorsd4.jpg',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor3', 'Sd4thfloor5'],
        arrowPositions: {
            'Sd4thfloor5': { phi: Math.PI / 2.5, theta: Math.PI * 2,direction:'up' } ,// Right
            'Sd4thfloor3': { phi: Math.PI / 2.5, theta: Math.PI * 1.05,direction:'up' } ,// Right

        }
    },

      {
        id: 'Sd4thfloor5',
        name: 'Sd 404 Lab 2',
        description: 'Sd bldg. 4th floor',
        imageUrl: 'images/Sdbldg/4thfloorsd5.jpg',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor4', 'mid4thfloor6'],
        arrowPositions: {
             'mid4thfloor6': { phi: Math.PI / 2.5, theta: Math.PI * 1.95,direction:'up' } ,// Right
            'Sd4thfloor4': { phi: Math.PI / 2.5, theta: Math.PI * 1,direction:'up' } ,// Right

        }
    },
    
          {
        id: 'mid4thfloor6',
        name: 'Sd 404 Lab 2',
        description: 'Sd bldg. 4th floor',
        imageUrl: 'images/Sdbldg/4thfloorsd6.jpg',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor3', 'Sd4thfloor7'],
        arrowPositions: {
             'Sd4thfloor3': { phi: Math.PI / 2.5, theta: Math.PI * 1.6,direction:'up' } ,// Right
            'Sd4thfloor7': { phi: Math.PI / 2.5, theta: Math.PI * 2.40,direction:'up' } ,// Right

        }
    },
    
          {
        id: 'Sd4thfloor7',
        name: 'Sd 404 Lab 3',
        description: 'Sd bldg. 4th floor',
        imageUrl: 'images/Sdbldg/4thfloorsd7.jpg',
        category: 'Sd bldg.',
        connections: ['mid4thfloor6', 'Sd4thfloor8'],
        arrowPositions: {
             'mid4thfloor6': { phi: Math.PI / 2.5, theta: Math.PI * 1.05,direction:'up' } ,// Right
            'Sd4thfloor8': { phi: Math.PI / 2.5, theta: Math.PI * 2,direction:'up' } ,// Right

        }
    },

 {
        id: 'Sd4thfloor8',
        name: 'Sd 404 Lab 2',
        description: 'Sd bldg. 4th floor',
        imageUrl: 'images/Sdbldg/4thfloorsd8.jpg',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor7', 'Sd4thfloor9'],
        arrowPositions: {
             'Sd4thfloor7': { phi: Math.PI / 2.5, theta: Math.PI * 1,direction:'up' } ,// Right
            'Sd4thfloor9': { phi: Math.PI / 2.5, theta: Math.PI * 1.2,direction:'up' } ,// Right

        }
    },

{
        id: 'Sd4thfloor9',
        name: 'Sd 404 Lab 2',
        description: 'Sd bldg. 4th floor',
        imageUrl: 'images/Sdbldg/4thfloorsd9.jpg',
        category: 'Sd bldg.',
        connections: ['Sd4thfloor8', 'Sd3rdfloor301'],
        arrowPositions: {
             'Sd4thfloor8': { phi: Math.PI / 2.5, theta: Math.PI * 1.6,direction:'up' } ,// Right
            'Sd3rdfloor301': { phi: Math.PI / 2.5, theta: Math.PI * 1.2,direction:'up' } ,// Right

        }
    },

];