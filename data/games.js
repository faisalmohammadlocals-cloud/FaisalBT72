/**
 * Game Data Structure
 * 
 * Image Integration:
 * - Each game has a main 'image' property (420x240 aspect ratio)
 * - PlayStation and Mobile platforms include a 'specialImage' property
 *   for visual variety (200x300 aspect ratio)
 * - All games now include 'additionalImages' array for extra visual content
 * - Additional images can be different aspect ratios and are displayed
 *   in an image carousel within each game card
 * 
 * Image Sources:
 * - Main images: picsum.photos with seed-based URLs
 * - Special images: Blurred variant from picsum.photos
 * - Additional images: Mixed placeholders from picsum.photos and unsplash
 */
const games = [
  { 
    id: 1, 
    name: 'Starforge Alpha', 
    platform: 'PC', 
    image: 'https://picsum.photos/seed/game1/420/240',
    additionalImages: [
      'https://picsum.photos/300/300/?random=1',
      'https://picsum.photos/300/300/?random=2'
    ]
  },
  { 
    id: 2, 
    name: 'Neo Racer', 
    platform: 'PC', 
    image: 'https://picsum.photos/seed/game2/420/240',
    additionalImages: [
      'https://picsum.photos/300/300/?random=3',
      'https://picsum.photos/300/300/?random=4'
    ]
  },
  { 
    id: 3, 
    name: 'Abyss Odyssey', 
    platform: 'PlayStation', 
    image: 'https://picsum.photos/seed/game3/420/240', 
    specialImage: 'https://picsum.photos/200/300/?blur',
    additionalImages: [
      'https://picsum.photos/300/300/?random=5',
      'https://picsum.photos/300/300/?random=6',
      'https://picsum.photos/300/300/?random=7'
    ]
  },
  { 
    id: 4, 
    name: 'Skyward Bound', 
    platform: 'PlayStation', 
    image: 'https://picsum.photos/seed/game4/420/240',
    additionalImages: [
      'https://picsum.photos/300/300/?random=8',
      'https://picsum.photos/300/300/?random=9'
    ]
  },
  { 
    id: 5, 
    name: 'Battle Grid', 
    platform: 'Xbox', 
    image: 'https://picsum.photos/seed/game5/420/240',
    additionalImages: [
      'https://picsum.photos/300/300/?random=10',
      'https://picsum.photos/300/300/?random=11',
      'https://picsum.photos/300/300/?random=12'
    ]
  },
  { 
    id: 6, 
    name: 'Phantom Squad', 
    platform: 'Xbox', 
    image: 'https://picsum.photos/seed/game6/420/240',
    additionalImages: [
      'https://picsum.photos/300/300/?random=13',
      'https://picsum.photos/300/300/?random=14'
    ]
  },
  { 
    id: 7, 
    name: 'Pocket Royale', 
    platform: 'Mobile', 
    image: 'https://picsum.photos/seed/game7/420/240', 
    specialImage: 'https://picsum.photos/200/300/?blur',
    additionalImages: [
      'https://picsum.photos/300/300/?random=15',
      'https://picsum.photos/300/300/?random=16',
      'https://picsum.photos/300/300/?random=17'
    ]
  },
  { 
    id: 8, 
    name: 'Tap Heroes', 
    platform: 'Mobile', 
    image: 'https://picsum.photos/seed/game8/420/240',
    additionalImages: [
      'https://picsum.photos/300/300/?random=18',
      'https://picsum.photos/300/300/?random=19'
    ]
  },
  { 
    id: 9, 
    name: 'Lunar Drift', 
    platform: 'PC', 
    image: 'https://picsum.photos/seed/game9/420/240',
    additionalImages: [
      'https://picsum.photos/300/300/?random=20',
      'https://picsum.photos/300/300/?random=21'
    ]
  },
  { 
    id: 10, 
    name: 'Echoes of War', 
    platform: 'Xbox', 
    image: 'https://picsum.photos/seed/game10/420/240',
    additionalImages: [
      'https://picsum.photos/300/300/?random=22',
      'https://picsum.photos/300/300/?random=23'
    ]
  }
];

export default games;
