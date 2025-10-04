const scs1stfloor_parking = [
 
  {  
    id: 'scs1st_parking_2',
    name: 'SCS 1st Floor - Parking 2',
    description: 'SCS bldg. 1st floor, second parking area',
    imageUrl: 'images/Scsbldg/PARKING 2.webp',
    category: ['SCS bldg.'],
    connections: ['scs1st2', 'scs1st_parking_3'],
    arrowPositions: {
      'scs1st2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs1st_parking_3': { phi: Math.PI / 3, theta: Math.PI * 2.2, direction: 'up' }
    }
  },
  {  
    id: 'scs1st_parking_3',
    name: 'SCS 1st Floor - Parking 3',
    description: 'SCS bldg. 1st floor, third parking area',
    imageUrl: 'images/Scsbldg/PARKING 3.webp',
    category: ['SCS bldg.'],
    connections: ['scs1st_parking_2', 'scs1st_parking_4'],
    arrowPositions: {
      'scs1st_parking_2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs1st_parking_4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {  
    id: 'scs1st_parking_4',
    name: 'SCS 1st Floor - Parking 4',
    description: 'SCS bldg. 1st floor, fourth parking area',
    imageUrl: 'images/Scsbldg/PARKING 4.webp',
    category: ['SCS bldg.'],
    connections: ['scs1st_parking_3', 'scs1st_parking_5'],
    arrowPositions: {
      'scs1st_parking_3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs1st_parking_5': { phi: Math.PI / 3, theta: Math.PI * 1.7, direction: 'up' }
    }
  },
  {  
    id: 'scs1st_parking_5',
    name: 'SCS 1st Floor - Parking 5',
    description: 'SCS bldg. 1st floor, fifth parking area',
    imageUrl: 'images/Scsbldg/PARKING 5.webp',
    category: ['SCS bldg.'],
    connections: ['scs1st_parking_4','olf_crime_lab'],
    arrowPositions: {
      'scs1st_parking_4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
       'olf_crime_lab': { phi: Math.PI / 3, theta: Math.PI *2.2, direction: 'up' }
    }
  }
];
