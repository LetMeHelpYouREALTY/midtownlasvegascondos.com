/**
 * Canonical Midtown Las Vegas entity data sourced from midtownvegas.com
 * Used for SEO, geo schema, AEO (ai.txt), and on-page copy consistency.
 */

export const midtownAuthority = {
  officialName: 'Midtown Las Vegas',
  alternateName: 'Midtown at the Arts District',
  tagline: 'Meet me in Midtown',
  description:
    'The most rapidly evolving cultural center in the heart of Las Vegas — a walkable Arts District neighborhood with art galleries, privately owned restaurants, and residences at Midtown, north of Charleston Boulevard.',
  officialUrl: 'https://midtownvegas.com/',
  geo: {
    /** Arts District / Midtown — north of Charleston Blvd */
    containedInPlace: 'Las Vegas Arts District (18b)',
    northBoundary: 'Charleston Boulevard',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    latitude: 36.1622,
    longitude: -115.1513,
    walkScore: 86,
  },
  categories: ['Shop', 'Dine', 'Live', 'Stay', 'Events'] as const,
  landmarks: [
    { name: 'Midtown Plaza', slug: '/neighborhood/midtown-plaza' },
    { name: 'The English Hotel', slug: '/neighborhood/english-hotel' },
    { name: 'The English Residences', slug: '/neighborhood/english-residences' },
    { name: 'The Pepper Club', slug: '/neighborhood/pepper-club' },
    { name: 'Arts Factory', slug: '/neighborhood/arts-district' },
    { name: 'Majestic Repertory Theatre', slug: '/neighborhood/arts-district' },
  ],
  englishResidences: {
    name: 'The English Residences',
    status: 'Now Available',
    tagline: 'Stay when you want, earn when you\'re away.',
    description:
      'Fully owned condo hotels, seamlessly managed within The English Hotel\'s collection of rooms — own a piece of the city\'s most intriguing address.',
    brand: 'Marriott Tribute Portfolio',
    unitCount: 121,
    openedYear: 2025,
  },
  social: {
    instagram: 'https://www.instagram.com/midtownvegas/',
    facebook: 'https://www.facebook.com/midtownLV/',
    tiktok: 'https://www.tiktok.com/@midtownvegas',
    handle: '@MIDTOWNVEGAS',
  },
  timeline: [
    { year: '1997', event: 'Wes Myles opens the Arts Factory' },
    { year: '1999', event: 'Mayor Oscar Goodman elected' },
    {
      year: '2002',
      event: 'Renamed the Las Vegas Arts District',
      event2: 'Cindy Funkhouser founds First Friday',
      link: '/neighborhood/first-fridays',
    },
    { year: '2009', event: '18b Arts District sign installed on Casino Center Blvd.' },
    { year: '2014', event: 'Anthony Bourdain highlights Makers & Finders on "Parts Unknown"' },
    {
      year: '2016',
      event: 'Majestic Repertory Theatre Opens',
      event2: 'The English Hotel Opens · The Pepper Club Opens',
      link: '/neighborhood/english-hotel',
      link2: '/neighborhood/pepper-club',
    },
    {
      year: '2024',
      event: 'CNN calls the Arts District "the most exciting neighborhood" in Las Vegas',
      event2: 'Midtown breaks ground — construction underway',
    },
    {
      year: '2025',
      event: 'Midtown Plaza & The English Residences open',
      link: '/neighborhood/midtown-plaza',
      link2: '/neighborhood/english-residences',
    },
  ],
  firstFriday: {
    name: 'First Friday Las Vegas',
    schedule: 'First Friday of each month, 5:00 PM – 11:00 PM',
    location: 'Las Vegas Arts District / Midtown',
    founder: 'Cindy Funkhouser',
    foundedYear: 2002,
  },
} as const

export type MidtownTimelineItem = (typeof midtownAuthority.timeline)[number]
