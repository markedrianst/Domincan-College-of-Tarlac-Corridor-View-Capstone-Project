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
        name: 'SD 3rd cornerstairs',
        description: 'Staircase leading to the 4th floor',
        imageUrl: 'images/Sdbldg/sdcornerstairs4thfloor.jpg',
        category: 'Sd bldg.',
        connections: ['Sd3rdfloor1','2ndFloorSD'],
        arrowPositions: {
            'Sd3rdfloor1': { phi: Math.PI / 2.6, theta: Math.PI * 1.15 ,direction:'up' }, // Up-forward
            '2ndFloorSD': { phi: Math.PI / 2.9, theta: Math.PI * 0.9,direction:'down' } // Right

        }
    },




];