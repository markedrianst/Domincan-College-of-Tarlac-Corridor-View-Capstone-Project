const scsfirstfloor = [
  {
    id: 'scs1st1',
    name: 'SCS Building hallway 1',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/1 SCS Building(Motorcycles and 1st Bus Parking).webp', 
    category: ['SCS bldg.'],
    connections: ['SdGroundfloor4', 'scs1st1.1'],
    arrowPositions: {
      'scs1st1.1': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'SdGroundfloor4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'scs1st1.1',
    name: 'SCS Building hallway 2',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/2 SCS Building(2nd Bus Parking).webp', 
    category: ['SCS bldg.'],
    connections: ['scs1st1', 'scs1st2'],
    arrowPositions: {
      'scs1st2': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'scs1st1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'scs1st2',
    name: 'SCS Building 2nd Bus Parking',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/PARKING 1.webp',
    category: ['SCS bldg.'],
    connections: ['scs1st1.1', 'scs1st3'],
    arrowPositions: {
      'scs1st1.1': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs1st3': { phi: Math.PI / 3, theta: Math.PI * 1.95, direction: 'up' }
    }
  },
  {
    id: 'scs1st3',
    name: 'SHS Faculty Room 104',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/3 Hallway(SCS Building).webp',
    category: ['SCS bldg.', 'Hallway'],
    connections: ['scs1st2', 'scs1st4'],
    arrowPositions: {
      'scs1st2': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs1st4': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'scs1st4',
    name: 'Hallway Benches and hall of SHS_1',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/4 Hallway(Benches and hall of SHS_1).webp',
    category: ['SCS bldg.', 'Hallway'],
    connections: ['scs1st3', 'scs1st5'],
    arrowPositions: {
      'scs1st5': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'scs1st3': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'scs1st5',
    name: 'Hallway Benches 103',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/5 Hallway(Benches and hall of SHS).webp',
    category: ['SCS bldg.', 'Hallway'],
    connections: ['scs1st4', 'scs1st6'],
    arrowPositions: {
      'scs1st4': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs1st6': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' }
    }
  },
  {
    id: 'scs1st6',
    name: 'Hallway Storeroom, MIS, 1st floor Stairs',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/6 Hallway(Storeroom,MIS, 1stfloor Stairs).webp',
    category: ['SCS bldg.', 'Hallway'],
    connections: ['scs1st5', 'scs1stMIS', 'scs1stPrincipal', 'scs1stStairsConnection'],
    arrowPositions: {
      'scs1st5': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs1stMIS': { phi: Math.PI / 3, theta: Math.PI * 2, direction: 'up' },
      'scs1stPrincipal': { phi: Math.PI / 3, theta: Math.PI * 2.4, direction: 'up' },
      'scs1stStairsConnection': { phi: Math.PI / 3, theta: Math.PI * 1.5, direction: 'up' }
    }
  },
  {
    id: 'scs1stMIS',
    name: 'MIS Office SCS 101',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/7 SCS 101 MIS Office.webp',
    category: ['SCS bldg.', 'Offices'],
    connections: ['scs1st6','scs1stPrincipal'],
    arrowPositions: {
      'scs1st6': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' },
      'scs1stPrincipal': { phi: Math.PI / 3, theta: Math.PI * 2.4, direction: 'up' },
    }
  },
  {
    id: 'scs1stPrincipal',
    name: 'SHS Principal Office SCS 102',
    description: 'SCS bldg. 1st floor',
    imageUrl: 'images/Scsbldg/8 SCS 102 PRINCIPALS OFFICE.webp',
    category: ['SCS bldg.', 'Offices'],
    connections: ['scs1st6'],
    arrowPositions: {
      'scs1st6': { phi: Math.PI / 3, theta: Math.PI * 1, direction: 'up' }
    }
  },
  {
    id: 'scs1stStairsConnection',
    name: 'SCS Stairs 1st Floor Connection',
    description: 'Connection to SCS Stairs 1st floor',
    imageUrl: 'images/Scsbldg/SCS STAIR 2ND FLOOR (1).webp',
    category: ['SCS bldg.', 'Stairs'],
    connections: ['scs1st6', 'scs1stStairs'],
    arrowPositions: {
      'scs1st6': { phi: Math.PI / 3.1, theta: Math.PI * 0.1, direction: 'down' },
      'scs1stStairs': { phi: Math.PI / 3, theta: Math.PI * 1.9, direction: 'up' }
    },
        defaultView: { phi: Math.PI / 2.6, theta: Math.PI * 1 } // always face 2nd floor
  },

];
