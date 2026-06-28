import type { MidtownCategory } from './types'

export const MIDTOWN_CATEGORIES: MidtownCategory[] = [
  {
    slug: 'dine',
    title: 'Dine in Midtown Las Vegas | Arts District Restaurants',
    description:
      'Discover dining in Midtown and the Las Vegas Arts District — KJ\'s, locally-owned restaurants, craft cocktails, and chef-driven cuisine near The English Residences.',
    keywords: ['Midtown dining', 'Arts District restaurants Las Vegas', 'English Hotel restaurants', 'downtown Las Vegas food'],
    h1: 'Dine in Midtown',
    heroSubtitle: 'Local food is our amenity — where Las Vegas locals go to eat',
    sections: [
      {
        paragraphs: [
          'The Las Vegas Arts District is where bold creativity thrives. Gritty murals, indie galleries, and craft cocktail bars bring the cool and cultured together. Vintage shops, hip cafés, and edgy nightlife make it the perfect spot to experience the real Vegas vibe — sophisticated yet full of untamed energy.',
        ],
      },
      {
        heading: 'KJ\'s at The English Hotel',
        paragraphs: [
          'KJ\'s at The English Hotel fits right into the Arts District: a little polished, a little playful, and always lively. The table fills with lobster, oysters, prime steaks, and the kind of food that deserves another round of drinks. Add a big game on the screens and the whole place takes on a celebratory mood.',
        ],
      },
      {
        heading: 'Midtown Plaza Dining',
        paragraphs: [
          'Midtown Plaza curates locally-owned restaurants, artisan coffee, and chef-driven concepts — all walkable from The English Residences. Living in Midtown means your favorite restaurants are steps away, not a Strip traffic jam away.',
        ],
      },
    ],
    faqs: [
      { question: 'What restaurants are in Midtown Las Vegas?', answer: 'Midtown features KJ\'s Restaurant at The English Hotel, dining at Midtown Plaza, and dozens of Arts District establishments within walking distance.' },
      { question: 'Is Midtown good for food lovers?', answer: 'Yes — the Arts District is known as Las Vegas\'s tasting kitchen for locals, with independent restaurants prioritizing craft over chains.' },
    ],
    featuredLinks: [
      { name: 'KJ\'s Restaurant', href: '/neighborhood/kjs-restaurant', description: 'Seafood, steaks, and sports-bar energy at The English Hotel' },
      { name: 'The Pepper Club', href: '/neighborhood/pepper-club', description: 'Award-winning dining at The English Hotel' },
      { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza', description: 'Walkable dining hub in the Arts District' },
    ],
  },
  {
    slug: 'shop',
    title: 'Shop Midtown Las Vegas | Arts District Retail',
    description: 'Shopping in Midtown and the Las Vegas Arts District — vintage boutiques, artisan markets, galleries, and unique retail near The English Residences.',
    keywords: ['Midtown shopping', 'Arts District retail Las Vegas', 'Market in the Alley', 'vintage Las Vegas'],
    h1: 'Shop Midtown',
    heroSubtitle: 'Curated retail and artisan markets in the Arts District',
    sections: [
      {
        paragraphs: [
          'Midtown and the Arts District offer shopping you won\'t find on the Strip — vintage clothing boutiques, contemporary art galleries, specialty food markets, and handmade goods at Market in the Alley.',
        ],
      },
      {
        heading: 'Market in the Alley',
        paragraphs: [
          'Market in the Alley brings local makers and small businesses together monthly at 1326 S Main St — handcrafted jewelry, original art, ceramics, candles, and one-of-a-kind finds.',
        ],
      },
    ],
    faqs: [
      { question: 'Where can I shop near Midtown?', answer: 'Midtown Plaza, Market in the Alley, and dozens of Arts District boutiques are all within walking distance of The English Residences.' },
    ],
    featuredLinks: [
      { name: 'Market in the Alley', href: '/events/market-in-the-alley', description: 'Monthly artisan market in the Arts District' },
      { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza', description: 'Neighborhood retail hub' },
    ],
  },
  {
    slug: 'stay',
    title: 'Stay in Midtown Las Vegas | English Hotel & Residences',
    description: 'Where to stay in Midtown — The English Hotel, The English Residences condo-hotel, and Arts District hospitality near downtown Las Vegas.',
    keywords: ['Stay Midtown Las Vegas', 'English Hotel', 'English Residences', 'Arts District hotels'],
    h1: 'Stay in Midtown',
    heroSubtitle: 'Hotel hospitality meets Arts District ownership',
    sections: [
      {
        paragraphs: [
          'The English Hotel offers boutique hospitality in the Arts District, while The English Residences let you own a Marriott Tribute Portfolio condo-hotel — stay when you want, earn when you\'re away.',
        ],
      },
    ],
    faqs: [
      { question: 'Can I own a hotel residence in Midtown?', answer: 'Yes — The English Residences are fully owned condo-hotel units managed within The English Hotel collection. Contact Dr. Jan at (702) 500-1980.' },
    ],
    featuredLinks: [
      { name: 'The English Hotel', href: '/neighborhood/english-hotel', description: 'Boutique hotel in the Arts District' },
      { name: 'The English Residences', href: '/neighborhood/english-residences', description: 'Luxury condo-hotel ownership' },
    ],
  },
  {
    slug: 'live',
    title: 'Live in Midtown Las Vegas | Arts District Urban Living',
    description: 'Live in Midtown Las Vegas — walkable Arts District condos at The English Residences, EV program, run club, and culture at your doorstep.',
    keywords: ['Live Midtown Las Vegas', 'Arts District condos', 'walkable Las Vegas', 'English Residences'],
    h1: 'Live in Midtown',
    heroSubtitle: 'Sleek design meets a lifestyle that doesn\'t wait around',
    sections: [
      {
        paragraphs: [
          'Unique condo residences anchored in the heart of Midtown at the Arts District, created for those who want to be part of the neighborhood\'s pulse. Own your home steps from culture, cuisine, and the city\'s forward momentum.',
        ],
      },
      {
        heading: 'Walkable Urban Living',
        paragraphs: [
          'Midtown puts galleries, restaurants, First Friday, and Midtown Plaza within walking distance. The EV Vehicle Program, Run Club, and Arts District amenities make car-optional living a reality in Las Vegas.',
        ],
      },
    ],
    faqs: [
      { question: 'What condos are available in Midtown?', answer: 'The English Residences offer studios to penthouses at 921 S Main St. Contact Dr. Jan Duffy at (702) 500-1980 for current inventory.' },
    ],
    featuredLinks: [
      { name: 'The English Residences', href: '/neighborhood/english-residences', description: 'Luxury Arts District condos' },
      { name: 'EV Vehicle Program', href: '/neighborhood/ev-program', description: 'Electric vehicle amenities for residents' },
      { name: 'Midtown Run Club', href: '/neighborhood/run-club', description: 'Community running in the Arts District' },
    ],
  },
  {
    slug: 'things-to-do-in-las-vegas',
    title: 'Things to Do in Las Vegas | Arts District & Midtown Guide',
    description: 'Things to do in Las Vegas beyond the Strip — First Friday, galleries, Market in the Alley, Neon City Festival, and Midtown Arts District experiences.',
    keywords: ['things to do Las Vegas', 'Arts District activities', 'Midtown Las Vegas', 'First Friday Las Vegas'],
    h1: 'Things to Do Near Midtown',
    heroSubtitle: 'Culture, events, and experiences in the Arts District',
    sections: [
      {
        paragraphs: [
          'Las Vegas locals know the Arts District and Midtown offer the city\'s most authentic experiences — monthly First Friday art walks, Market in the Alley, gallery openings, brewery crawls, and festivals like Neon City and Downtown Brew Festival.',
        ],
      },
      {
        heading: 'Monthly & Weekly Events',
        paragraphs: [
          'First Friday transforms the Arts District into a street festival on the first Friday of each month. Midtown Run Club meets regularly at 921 S Main St. Gallery walks and Makers Markets add year-round programming.',
        ],
      },
    ],
    faqs: [
      { question: 'What is there to do in the Arts District?', answer: 'First Friday, Market in the Alley, gallery walks, dining at KJ\'s and Midtown Plaza, and festivals throughout the year — all walkable from Midtown.' },
    ],
    featuredLinks: [
      { name: 'First Fridays', href: '/neighborhood/first-fridays', description: 'Monthly art festival' },
      { name: 'Events Calendar', href: '/events', description: 'Full Midtown events list' },
      { name: 'Arts District Guide', href: '/arts-district-guide', description: 'Complete neighborhood guide' },
    ],
  },
  {
    slug: 'art',
    title: 'Art Events in Midtown Las Vegas | Arts District',
    description: 'Art events in Midtown and the Las Vegas Arts District — First Friday, galleries, Market in the Alley, and Art U OK? Wellness Festival.',
    keywords: ['Las Vegas art events', 'Arts District galleries', 'First Friday art', 'Midtown art'],
    h1: 'Art in Midtown',
    heroSubtitle: 'Galleries, festivals, and creative culture in the 18b Arts District',
    sections: [
      {
        paragraphs: [
          'From First Friday\'s monthly art walk to independent galleries along Casino Center and Main Street, Midtown sits at the center of Las Vegas\'s creative renaissance.',
        ],
      },
    ],
    faqs: [],
    featuredLinks: [
      { name: 'First Fridays', href: '/neighborhood/first-fridays', description: 'Southwest\'s largest monthly art event' },
      { name: 'Las Vegas Arts District', href: '/neighborhood/arts-district', description: 'Neighborhood art guide' },
    ],
  },
  {
    slug: 'music',
    title: 'Music Events in Midtown Las Vegas | Arts District',
    description: 'Live music in Midtown and the Las Vegas Arts District — First Friday stages, Neon City Festival, and downtown venues near The English Residences.',
    keywords: ['Las Vegas live music', 'Arts District music', 'First Friday music', 'Midtown events'],
    h1: 'Music in Midtown',
    heroSubtitle: 'Live performances across the Arts District and downtown',
    sections: [
      {
        paragraphs: [
          'First Friday features multiple live music stages across the Arts District. Festivals like Neon City Festival and Downtown Brew Festival bring national and local artists to downtown venues minutes from Midtown.',
        ],
      },
    ],
    faqs: [],
    featuredLinks: [
      { name: 'First Fridays', href: '/neighborhood/first-fridays', description: 'Live music every first Friday' },
      { name: 'Neon City Festival', href: '/events/2025-neon-city-festival', description: 'Free downtown music festival' },
    ],
  },
]

export function getCategoryBySlug(slug: string): MidtownCategory | undefined {
  return MIDTOWN_CATEGORIES.find((c) => c.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return MIDTOWN_CATEGORIES.map((c) => c.slug)
}
