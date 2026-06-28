import type { MidtownEvent } from './types'
import { ARTS_DISTRICT_LOCATION, FIRST_FRIDAY_DEFAULT_FAQS } from './constants'

function firstFridayEvent(
  month: string,
  year: number,
  isoDate: string,
  displayDate: string,
): MidtownEvent {
  const slug = `first-friday-${month.toLowerCase()}-${year}`
  return {
    slug,
    title: `First Friday ${month} ${year} | Las Vegas Arts District`,
    description: `First Friday ${month} ${year} in the Las Vegas Arts District — art walk, live music, food trucks, and gallery openings near Midtown. Free, 5–11 PM. Call Dr. Jan (702) 500-1980.`,
    keywords: [
      `First Friday ${month} ${year}`,
      'First Friday Las Vegas',
      'Arts District events',
      'Midtown Las Vegas events',
      'Las Vegas art walk',
    ],
    categories: ['Art', 'Festivals', 'Food', 'Music'],
    startDate: `${isoDate}T17:00:00-08:00`,
    endDate: `${isoDate}T23:00:00-08:00`,
    startTime: '5:00 PM',
    endTime: '11:00 PM',
    location: ARTS_DISTRICT_LOCATION,
    sections: [
      {
        paragraphs: [
          `First Friday ${month} ${year} transforms the Las Vegas Arts District into a vibrant street festival on ${displayDate}. This monthly celebration brings together local artists, musicians, food vendors, and community organizations for one of the Southwest's largest recurring art events — all within walking distance of Midtown.`,
        ],
      },
      {
        heading: 'Event Highlights',
        paragraphs: [
          'Art Walk: Explore galleries and outdoor exhibits featuring works from local artists, offering a diverse range of styles and mediums.',
          'Live Music: Enjoy performances by talented musicians across multiple stages, providing a lively soundtrack to your evening.',
          'Food Trucks: Savor culinary delights from some of Las Vegas\'s favorite food trucks, catering to all tastes.',
          'Interactive Activities: Engage in hands-on art projects and witness live demonstrations, connecting directly with the creative process.',
        ],
      },
      {
        heading: 'Getting There',
        paragraphs: [
          'Location: 18b Arts District, Downtown Las Vegas — 1025 S 1st St, Las Vegas, NV 89101.',
          'Parking: Utilize the free Park & Ride shuttle service from the city parking garage at 500 S. Main St., operating from 3:00 PM to midnight. Additional parking is available at 1000 Commerce Street and 902 S. Casino Center Blvd.',
        ],
      },
      {
        heading: 'Why Attend',
        paragraphs: [
          'First Friday is more than an event; it\'s a movement that fosters creativity, supports local artists, and builds community. Whether you\'re an art enthusiast, music lover, foodie, or simply looking for an engaging evening out, First Friday offers something for everyone. Join thousands of attendees celebrating the rich cultural tapestry of Las Vegas.',
          'This event is family-friendly and free to attend. For more information, visit the First Friday Foundation at ffflv.org.',
        ],
      },
      {
        heading: 'Live Near the Action',
        paragraphs: [
          'Midtown residents experience First Friday as a neighborhood amenity — not a destination requiring a drive across town. Contact Dr. Jan Duffy at (702) 500-1980 to explore luxury condos at The English Residences and walk to every First Friday.',
        ],
      },
    ],
    faqs: [
      {
        question: `What date is First Friday ${month} ${year}?`,
        answer: `First Friday ${month} ${year} is on ${displayDate}, from 5:00 PM to 11:00 PM in the Las Vegas Arts District.`,
      },
      ...FIRST_FRIDAY_DEFAULT_FAQS,
    ],
    relatedLinks: [
      { name: 'First Fridays Las Vegas Guide', href: '/neighborhood/first-fridays' },
      { name: 'Las Vegas Arts District', href: '/neighborhood/arts-district' },
      { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza' },
    ],
  }
}

const FIRST_FRIDAY_EVENTS: MidtownEvent[] = [
  firstFridayEvent('January', 2025, '2025-01-03', 'Friday, January 3rd, 2025'),
  firstFridayEvent('February', 2025, '2025-02-07', 'Friday, February 7th, 2025'),
  firstFridayEvent('March', 2025, '2025-03-07', 'Friday, March 7th, 2025'),
  firstFridayEvent('April', 2025, '2025-04-04', 'Friday, April 4th, 2025'),
  firstFridayEvent('May', 2025, '2025-05-02', 'Friday, May 2nd, 2025'),
  firstFridayEvent('June', 2025, '2025-06-06', 'Friday, June 6th, 2025'),
  firstFridayEvent('December', 2025, '2025-12-05', 'Friday, December 5th, 2025'),
  firstFridayEvent('February', 2026, '2026-02-06', 'Friday, February 6th, 2026'),
  firstFridayEvent('March', 2026, '2026-03-06', 'Friday, March 6th, 2026'),
  firstFridayEvent('April', 2026, '2026-04-03', 'Friday, April 3rd, 2026'),
  firstFridayEvent('May', 2026, '2026-05-01', 'Friday, May 1st, 2026'),
  firstFridayEvent('June', 2026, '2026-06-05', 'Friday, June 5th, 2026'),
  firstFridayEvent('July', 2026, '2026-07-03', 'Friday, July 3rd, 2026'),
]

const STANDALONE_EVENTS: MidtownEvent[] = [
  {
    slug: 'market-in-the-alley',
    title: 'Market in the Alley | Midtown Las Vegas Artisan Market',
    description:
      'Market in the Alley brings local makers, small businesses, and creatives together for a vibrant open-air shopping experience in the Las Vegas Arts District near Midtown.',
    keywords: ['Market in the Alley', 'Arts District market Las Vegas', 'Midtown shopping', 'handmade Las Vegas'],
    categories: ['Art', 'Community Events', 'Family-Friendly', 'Food', 'Shopping'],
    startDate: '2025-12-20T11:00:00-08:00',
    endDate: '2025-12-20T16:00:00-08:00',
    startTime: '11:00 AM',
    endTime: '4:00 PM',
    location: {
      name: 'Market in the Alley',
      streetAddress: '1326 South Main Street',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
    },
    sections: [
      {
        paragraphs: [
          'Market in the Alley is one of the most beloved artisan markets in Las Vegas, bringing together local makers, small businesses, and creatives for a vibrant open-air shopping experience in the heart of the Arts District.',
        ],
      },
      {
        heading: 'A Handcrafted, Local-First Shopping Experience',
        paragraphs: [
          'Spread across 1326 S Main St and 1401 S Commerce, Market in the Alley transforms the neighborhood into an inviting, walkable creative hub. Visitors explore vendor booths showcasing handcrafted jewelry, original art, home décor, apparel, natural skincare, ceramics, candles, vintage finds, and one-of-a-kind pieces made by local artisans.',
          'Market in the Alley was created to shine a spotlight on Las Vegas makers and small businesses — the same independent spirit that defines Midtown and the Arts District.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where is Market in the Alley held?',
        answer: 'Market in the Alley takes place at 1326 South Main Street and 1401 S Commerce in the Las Vegas Arts District, walking distance from Midtown.',
      },
      {
        question: 'What can I buy at Market in the Alley?',
        answer: 'Expect handmade jewelry, original art, ceramics, candles, vintage finds, apparel, natural skincare, and specialty foods from local vendors.',
      },
    ],
    relatedLinks: [
      { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza' },
      { name: 'Shop Midtown', href: '/midtown/shop' },
    ],
  },
  {
    slug: 'market-in-the-alley-may-2026',
    title: 'Market in the Alley May 2026 | Midtown Las Vegas',
    description: 'Market in the Alley May 2026 — local artisan market in the Las Vegas Arts District near Midtown. Handmade goods, art, and specialty vendors.',
    keywords: ['Market in the Alley May 2026', 'Arts District market', 'Midtown Las Vegas events'],
    categories: ['Art', 'Shopping', 'Community Events'],
    startDate: '2026-05-16T11:00:00-07:00',
    endDate: '2026-05-16T16:00:00-07:00',
    startTime: '11:00 AM',
    endTime: '4:00 PM',
    location: { name: 'Market in the Alley', streetAddress: '1326 South Main Street', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['Market in the Alley returns to the Arts District in May 2026 with local makers, artisans, and small businesses. Explore handmade goods steps from Midtown residences.'] }],
    faqs: [{ question: 'Is Market in the Alley near Midtown?', answer: 'Yes — the market at 1326 S Main St is a short walk from Midtown Plaza and The English Residences.' }],
    relatedLinks: [{ name: 'Market in the Alley', href: '/events/market-in-the-alley' }],
  },
  {
    slug: 'market-in-the-alley-may-2025',
    title: 'Market in the Alley May 2025 | Midtown Las Vegas',
    description: 'Market in the Alley May 2025 artisan market in the Las Vegas Arts District — local vendors, handmade goods, and community shopping near Midtown.',
    keywords: ['Market in the Alley May 2025', 'Las Vegas artisan market'],
    categories: ['Art', 'Shopping'],
    startDate: '2025-05-17T11:00:00-07:00',
    endDate: '2025-05-17T16:00:00-07:00',
    startTime: '11:00 AM',
    endTime: '4:00 PM',
    location: { name: 'Market in the Alley', streetAddress: '1326 South Main Street', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['May 2025 Market in the Alley showcases Las Vegas artisans and small businesses in the walkable Arts District, minutes from Midtown condos.'] }],
    faqs: [],
    relatedLinks: [{ name: 'Market in the Alley', href: '/events/market-in-the-alley' }],
  },
  {
    slug: 'market-in-the-alley-april-2025',
    title: 'Market in the Alley April 2025 | Midtown Las Vegas',
    description: 'Market in the Alley April 2025 — open-air artisan market in the Las Vegas Arts District near Midtown Las Vegas.',
    keywords: ['Market in the Alley April 2025'],
    categories: ['Art', 'Shopping'],
    startDate: '2025-04-19T11:00:00-07:00',
    endDate: '2025-04-19T16:00:00-07:00',
    startTime: '11:00 AM',
    endTime: '4:00 PM',
    location: { name: 'Market in the Alley', streetAddress: '1326 South Main Street', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['April 2025 Market in the Alley features local makers and creatives in the heart of the Arts District, walking distance from Midtown.'] }],
    faqs: [],
    relatedLinks: [{ name: 'Market in the Alley', href: '/events/market-in-the-alley' }],
  },
  {
    slug: 'market-in-the-alley-march-2025',
    title: 'Market in the Alley March 2025 | Midtown Las Vegas',
    description: 'Market in the Alley March 2025 artisan market in downtown Las Vegas Arts District near Midtown.',
    keywords: ['Market in the Alley March 2025'],
    categories: ['Art', 'Shopping'],
    startDate: '2025-03-15T11:00:00-07:00',
    endDate: '2025-03-15T16:00:00-07:00',
    startTime: '11:00 AM',
    endTime: '4:00 PM',
    location: { name: 'Market in the Alley', streetAddress: '1326 South Main Street', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['March 2025 Market in the Alley brings handmade goods and local vendors to the Arts District, steps from Midtown Las Vegas.'] }],
    faqs: [],
    relatedLinks: [{ name: 'Market in the Alley', href: '/events/market-in-the-alley' }],
  },
  {
    slug: 'market-in-the-alley-small-business-saturday',
    title: 'Market in the Alley: Small Business Saturday | Midtown Las Vegas',
    description: 'Market in the Alley Small Business Saturday celebrates local makers and independent shops in the Las Vegas Arts District near Midtown.',
    keywords: ['Small Business Saturday Las Vegas', 'Market in the Alley', 'Arts District shopping'],
    categories: ['Shopping', 'Community Events'],
    startDate: '2025-11-29T11:00:00-08:00',
    endDate: '2025-11-29T16:00:00-08:00',
    startTime: '11:00 AM',
    endTime: '4:00 PM',
    location: { name: 'Market in the Alley', streetAddress: '1326 South Main Street', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['Support local artisans and small businesses at Market in the Alley\'s Small Business Saturday edition in the Arts District — a short walk from Midtown residences.'] }],
    faqs: [],
    relatedLinks: [{ name: 'Shop Midtown', href: '/midtown/shop' }],
  },
  {
    slug: '2025-neon-city-festival',
    title: '2025 Neon City Festival — Downtown Las Vegas',
    description: 'Neon City Festival November 21–23, 2025 — free, all-ages music and culinary festival in Downtown Las Vegas, minutes from Midtown Arts District.',
    keywords: ['Neon City Festival 2025', 'Downtown Las Vegas festival', 'Midtown events', 'free Las Vegas festival'],
    categories: ['Art', 'Festivals', 'Music', 'Food'],
    startDate: '2025-11-21T17:00:00-08:00',
    endDate: '2025-11-23T23:00:00-08:00',
    startTime: 'Evening programming',
    endTime: 'Late night',
    location: { name: 'Downtown Las Vegas', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [
      {
        paragraphs: [
          'Neon City Festival lights up Downtown Las Vegas from Friday–Sunday, November 21–23, 2025 with a city-wide celebration of live music, food, and art — and admission is free for all ages.',
        ],
      },
      {
        heading: 'What to Expect',
        paragraphs: [
          'Multiple stages and performances across genres, spotlighting national and local artists.',
          'Culinary pop-ups, downtown dining, and art activations across a walkable festival campus.',
          'Downtown-wide footprint including key areas around Fremont Street and nearby venues.',
          'Signature spectacles like drone and fireworks shows and immersive visuals.',
        ],
      },
      {
        heading: 'Getting Around',
        paragraphs: [
          'Use the Downtown Loop free shuttle (extended hours during the festival), plus rideshare zones around major venues. Midtown residents enjoy quick access to downtown festival programming.',
        ],
      },
    ],
    faqs: [
      { question: 'Is Neon City Festival free?', answer: 'Yes — admission is free and all ages. Some individual venues may have 21+ entry rules.' },
      { question: 'How close is Neon City Festival to Midtown?', answer: 'Midtown in the Arts District is minutes from Downtown Las Vegas festival venues via the Downtown Loop or a short rideshare.' },
    ],
    relatedLinks: [{ name: 'Midtown Events', href: '/events' }, { name: 'Things to Do', href: '/midtown/things-to-do-in-las-vegas' }],
  },
  {
    slug: 'downtown-brew-festival-2025',
    title: 'Downtown Brew Festival 2025, Las Vegas – Oct 25',
    description: 'Downtown Brew Festival 2025 on October 25 in Las Vegas — craft beer, live music, and food near the Arts District and Midtown.',
    keywords: ['Downtown Brew Festival 2025', 'Las Vegas beer festival', 'Midtown events'],
    categories: ['Festivals', 'Food', 'Music'],
    startDate: '2025-10-25T14:00:00-07:00',
    endDate: '2025-10-25T22:00:00-07:00',
    startTime: '2:00 PM',
    endTime: '10:00 PM',
    location: { name: 'Downtown Las Vegas', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['Downtown Brew Festival 2025 celebrates craft beer culture in Las Vegas with tastings, live music, and food vendors — a favorite annual event for Midtown and Arts District residents.'] }],
    faqs: [{ question: 'When is Downtown Brew Festival 2025?', answer: 'The 2025 Downtown Brew Festival takes place on Saturday, October 25, 2025 in Downtown Las Vegas.' }],
    relatedLinks: [{ name: 'Bar Crawl Downtown Breweries', href: '/events/bar-crawl-of-downtown-las-vegass-best-breweries' }],
  },
  {
    slug: 'tamales-mariachi-festival',
    title: 'Tamales & Mariachi Festival | Midtown Las Vegas',
    description: 'Tamales & Mariachi Festival in Downtown Las Vegas — food, music, and culture near the Arts District and Midtown.',
    keywords: ['Tamales Mariachi Festival Las Vegas', 'Midtown events', 'Arts District festivals'],
    categories: ['Festivals', 'Food', 'Music', 'Family-Friendly'],
    startDate: '2025-12-07T11:00:00-08:00',
    endDate: '2025-12-07T18:00:00-08:00',
    startTime: '11:00 AM',
    endTime: '6:00 PM',
    location: { name: 'Downtown Las Vegas', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['The Tamales & Mariachi Festival celebrates Hispanic culinary traditions and live mariachi performances — a vibrant cultural event accessible from Midtown Las Vegas.'] }],
    faqs: [],
    relatedLinks: [{ name: 'Fiesta at the Plaza', href: '/events/fiesta-at-the-plaza-hispanic-heritage-month-celebration' }],
  },
  {
    slug: 'midtown-groundbreaking',
    title: 'Midtown Groundbreaking | April 25, 2025',
    description: 'Midtown Las Vegas groundbreaking April 25, 2025 — the Arts District\'s new walkable neighborhood north of Charleston begins construction.',
    keywords: ['Midtown groundbreaking', 'Midtown Las Vegas development', 'Arts District construction'],
    categories: ['Community Events'],
    startDate: '2025-04-25T10:00:00-07:00',
    endDate: '2025-04-25T14:00:00-07:00',
    startTime: '10:00 AM',
    endTime: '2:00 PM',
    location: { name: 'Midtown Las Vegas', streetAddress: '921 S Main St', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [
      {
        paragraphs: [
          'Midtown broke ground on April 25, 2025, marking a milestone in the transformation of the Las Vegas Arts District. The new neighborhood north of Charleston brings walkable retail, dining, residences at The English Residences, and Midtown Plaza to the heart of the 18b Arts District.',
        ],
      },
      {
        heading: 'What Midtown Delivers',
        paragraphs: [
          'Midtown Plaza and The English Residences opened in 2026, linking the Downtown Arts District and Fremont Street with a residential and retail hub designed for walkable urban living.',
          'Contact Dr. Jan Duffy at (702) 500-1980 for current availability at The English Residences.',
        ],
      },
    ],
    faqs: [
      { question: 'When did Midtown Las Vegas break ground?', answer: 'Midtown broke ground on April 25, 2025, with Midtown Plaza and The English Residences opening in 2026.' },
    ],
    relatedLinks: [
      { name: 'The English Residences', href: '/neighborhood/english-residences' },
      { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza' },
    ],
  },
  {
    slug: 'mlk-jr-downtown-vegas-parade',
    title: 'MLK Jr. Downtown Vegas Parade | Midtown Las Vegas',
    description: 'MLK Jr. Downtown Vegas Parade — annual community celebration in Downtown Las Vegas near the Arts District and Midtown.',
    keywords: ['MLK parade Las Vegas', 'Downtown Las Vegas events', 'Midtown community'],
    categories: ['Community Events', 'Family-Friendly'],
    startDate: '2026-01-19T10:00:00-08:00',
    endDate: '2026-01-19T14:00:00-08:00',
    startTime: '10:00 AM',
    endTime: '2:00 PM',
    location: { name: 'Downtown Las Vegas', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['The MLK Jr. Downtown Vegas Parade honors Dr. Martin Luther King Jr. with a community procession through Downtown Las Vegas — accessible from Midtown and the Arts District.'] }],
    faqs: [],
    relatedLinks: [{ name: 'Midtown Events', href: '/events' }],
  },
  {
    slug: 'fiesta-at-the-plaza-hispanic-heritage-month-celebration',
    title: 'Fiesta at the Plaza Hispanic Heritage Month Celebration',
    description: 'Fiesta at the Plaza celebrates Hispanic Heritage Month at Midtown Plaza in the Las Vegas Arts District.',
    keywords: ['Hispanic Heritage Month Las Vegas', 'Midtown Plaza events', 'Arts District festivals'],
    categories: ['Festivals', 'Community Events', 'Food', 'Music'],
    startDate: '2025-09-20T12:00:00-07:00',
    endDate: '2025-09-20T20:00:00-07:00',
    startTime: '12:00 PM',
    endTime: '8:00 PM',
    location: { name: 'Midtown Plaza', streetAddress: '921 S Main St', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['Fiesta at the Plaza brings food, music, and cultural celebration to Midtown Plaza during Hispanic Heritage Month — a neighborhood gathering at the heart of the Arts District.'] }],
    faqs: [],
    relatedLinks: [{ name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza' }],
  },
  {
    slug: 'bar-crawl-of-downtown-las-vegass-best-breweries',
    title: 'Bar Crawl of Downtown Las Vegas\'s Best Breweries',
    description: 'Bar crawl featuring Downtown Las Vegas\'s best breweries — craft beer tour near Midtown and the Arts District.',
    keywords: ['Downtown Las Vegas bar crawl', 'Las Vegas breweries', 'Midtown nightlife'],
    categories: ['Food', 'Music'],
    startDate: '2025-08-16T17:00:00-07:00',
    endDate: '2025-08-16T23:00:00-07:00',
    startTime: '5:00 PM',
    endTime: '11:00 PM',
    location: { name: 'Downtown Las Vegas', addressLocality: 'Las Vegas', addressRegion: 'NV', postalCode: '89101' },
    sections: [{ paragraphs: ['Explore Downtown Las Vegas\'s craft brewery scene on this guided bar crawl — starting points and routes accessible from Midtown and the Arts District.'] }],
    faqs: [],
    relatedLinks: [{ name: 'Downtown Brew Festival', href: '/events/downtown-brew-festival-2025' }, { name: 'Dine Midtown', href: '/midtown/dine' }],
  },
  {
    slug: 'art-u-ok-wellness-festival',
    title: 'Art U OK? Wellness Festival | Midtown Las Vegas',
    description: 'Art U OK? Wellness Festival in the Las Vegas Arts District — art, wellness, and community programming near Midtown.',
    keywords: ['Art U OK wellness festival', 'Arts District events', 'Midtown Las Vegas'],
    categories: ['Art', 'Community Events', 'Family-Friendly'],
    startDate: '2025-10-11T10:00:00-07:00',
    endDate: '2025-10-11T17:00:00-07:00',
    startTime: '10:00 AM',
    endTime: '5:00 PM',
    location: ARTS_DISTRICT_LOCATION,
    sections: [{ paragraphs: ['Art U OK? Wellness Festival combines creative expression with wellness programming in the Arts District — supporting the same community-minded culture that defines Midtown Las Vegas.'] }],
    faqs: [],
    relatedLinks: [{ name: 'Midtown Run Club', href: '/neighborhood/run-club' }],
  },
]

export const MIDTOWN_EVENTS: MidtownEvent[] = [...FIRST_FRIDAY_EVENTS, ...STANDALONE_EVENTS]

export function getEventBySlug(slug: string): MidtownEvent | undefined {
  return MIDTOWN_EVENTS.find((e) => e.slug === slug)
}

export function getAllEventSlugs(): string[] {
  return MIDTOWN_EVENTS.map((e) => e.slug)
}
