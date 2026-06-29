import type { MidtownCategory } from './types'

/** Buyer-guide copy — never mirrors midtownvegas.com lifestyle marketing voice */
export const MIDTOWN_CATEGORIES: MidtownCategory[] = [
  {
    slug: 'dine',
    title: 'Dining Near Midtown Condos | Buyer\'s Guide by Dr. Jan Duffy',
    description:
      'If you buy in Midtown, these are the walkable restaurants buyers ask about — KJ\'s, Midtown Plaza, and Arts District favorites near The English Residences.',
    keywords: ['Midtown dining for residents', 'Arts District restaurants near condos', 'English Hotel restaurants', 'walkable dining Las Vegas'],
    h1: 'Dining Walk Score for Midtown Buyers',
    heroSubtitle: 'What you can walk to from Arts District condos — and why locals choose this over the Strip',
    sections: [
      {
        paragraphs: [
          'When my clients evaluate Midtown condos, dining walkability is usually top three on their list. The Arts District is where Las Vegas locals eat — independent restaurants, craft bars, and chef-driven spots you cannot replicate in a master-planned suburb.',
        ],
      },
      {
        heading: 'KJ\'s at The English Hotel',
        paragraphs: [
          'Owners at The English Residences can walk to KJ\'s without a rideshare — seafood, steaks, and a sports-bar energy that fits the neighborhood. I point buyers here during evening tours so they feel the block after dark, not just the floor plan.',
        ],
      },
      {
        heading: 'Midtown Plaza & Arts District options',
        paragraphs: [
          'Midtown Plaza clusters locally owned concepts steps from 921 S Main St. That matters for resale: buyers pay for daily convenience, not weekend-only entertainment. I compare HOA plus dining access when we run the ownership math together.',
        ],
      },
    ],
    faqs: [
      { question: 'Do Midtown condos have walkable restaurants?', answer: 'Yes — KJ\'s, Midtown Plaza, and dozens of Arts District restaurants are within walking distance of The English Residences. I map this on every buyer tour.' },
      { question: 'Is dining access worth paying more for in Midtown?', answer: 'Walk Score and amenity access often justify higher price-per-square-foot versus car-dependent communities. We review comps together before you offer.' },
    ],
    featuredLinks: [
      { name: 'KJ\'s Restaurant', href: '/neighborhood/kjs-restaurant', description: 'Walkable dining at The English Hotel' },
      { name: 'The Pepper Club', href: '/neighborhood/pepper-club', description: 'Fine dining option for owners & guests' },
      { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza', description: 'Retail & dining hub near listings' },
    ],
  },
  {
    slug: 'shop',
    title: 'Shopping Near Midtown Listings | Arts District Retail Guide',
    description: 'Retail and markets within walking distance of Midtown condos — what owners actually use, from Market in the Alley to Arts District boutiques.',
    keywords: ['Midtown shopping walkability', 'Arts District retail near condos', 'Market in the Alley residents'],
    h1: 'Shopping Within Walking Distance',
    heroSubtitle: 'Artisan markets and indie retail — a resale amenity, not a tourist stop',
    sections: [
      {
        paragraphs: [
          'Investors and end-users both ask: “What can I walk to?” Market in the Alley, vintage boutiques, and gallery retail along Main and Commerce are part of the answer when we underwrite a Midtown purchase.',
        ],
      },
      {
        heading: 'Market in the Alley',
        paragraphs: [
          'Monthly makers market at 1326 S Main St — handmade goods, art, and small-business energy. For condo-hotel owners, this is the kind of foot traffic that supports occupancy and guest experience.',
        ],
      },
    ],
    faqs: [
      { question: 'Is there everyday shopping near English Residences?', answer: 'Midtown Plaza, Market in the Alley, and Arts District boutiques are walkable. Grocery runs may still need a short drive — we discuss your daily routine on consultation calls.' },
    ],
    featuredLinks: [
      { name: 'Market in the Alley', href: '/events/market-in-the-alley', description: 'Artisan market near listings' },
      { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza', description: 'Neighborhood retail hub' },
    ],
  },
  {
    slug: 'stay',
    title: 'English Hotel & Residences | Ownership Guide',
    description: 'Condo-hotel ownership at The English Residences — stay when you want, rental income when you travel. Dr. Jan Duffy explains the model for buyers.',
    keywords: ['English Residences investment', 'English Hotel condo-hotel', 'Midtown ownership model'],
    h1: 'Own Instead of Just Staying',
    heroSubtitle: 'Hotel-branded residences — income, use, and HOA structure explained for buyers',
    sections: [
      {
        paragraphs: [
          'The English Hotel handles hospitality; The English Residences let you own the asset. I walk buyers through Tribute Portfolio branding, rental management, and how personal use interacts with guest bookings.',
        ],
      },
    ],
    faqs: [
      { question: 'Can I live in The English Residences full time?', answer: 'Ownership rules vary by unit and program. Call (702) 500-1980 — I will review the offering plan and management agreement with you before you commit.' },
    ],
    featuredLinks: [
      { name: 'The English Hotel', href: '/neighborhood/english-hotel', description: 'On-site boutique hotel' },
      { name: 'The English Residences', href: '/neighborhood/english-residences', description: 'Condo-hotel listings I represent' },
    ],
  },
  {
    slug: 'live',
    title: 'Living in Midtown Condos | Arts District Buyer Guide',
    description: 'Walkability, EV amenities, run club, and daily life if you buy in Midtown — practical guidance from Dr. Jan Duffy, not neighborhood marketing.',
    keywords: ['Live Midtown Las Vegas condos', 'Arts District walkable living', 'English Residences daily life'],
    h1: 'Daily Life If You Buy Here',
    heroSubtitle: 'Run club, EV charging, First Friday on your block — what ownership actually feels like',
    sections: [
      {
        paragraphs: [
          'Clients buy Midtown for car-optional routines: morning runs with the Midtown Run Club, EV charging on site, and First Friday outside their door. I help you match building amenities to how you actually live.',
        ],
      },
      {
        heading: 'Walkable urban ownership',
        paragraphs: [
          'Gallery walks, Midtown Plaza, and 18b Arts District venues are steps from The English Residences. We compare this lifestyle cost against suburban HOA plus two-car ownership when you are deciding on price range.',
        ],
      },
    ],
    faqs: [
      { question: 'What inventory is available in Midtown now?', answer: 'Studios through penthouses at The English Residences and select Arts District resales. Browse my RealScout feed or call (702) 500-1980 for a private showing.' },
    ],
    featuredLinks: [
      { name: 'The English Residences', href: '/neighborhood/english-residences', description: 'Primary Midtown listings' },
      { name: 'EV Vehicle Program', href: '/neighborhood/ev-program', description: 'Charging amenities for owners' },
      { name: 'Midtown Run Club', href: '/neighborhood/run-club', description: 'Community fitness near 921 S Main' },
    ],
  },
  {
    slug: 'things-to-do-in-las-vegas',
    title: 'Arts District Lifestyle | What Owners Get Access To',
    description: 'First Friday, galleries, and festivals near Midtown listings — how local culture affects property value and quality of life for buyers.',
    keywords: ['Arts District lifestyle buyers', 'First Friday living', 'Midtown things to do owners'],
    h1: 'Culture on Your Doorstep',
    heroSubtitle: 'Events and experiences that matter when you own — not a visitor itinerary',
    sections: [
      {
        paragraphs: [
          'Official event calendars live on midtownvegas.com. As your REALTOR®, I focus on how First Friday, Market in the Alley, and downtown festivals affect noise, parking, walkability, and why owners consider that a feature, not a hassle.',
        ],
      },
      {
        heading: 'Recurring events owners use',
        paragraphs: [
          'First Friday, gallery walks, and the Run Club create year-round street life. That supports English Residences guest demand and makes resale stories easy to tell — “walk to the largest art walk in the Southwest.”',
        ],
      },
    ],
    faqs: [
      { question: 'Will events affect my condo?', answer: 'First Friday brings crowds and street closures nearby. I discuss sound, parking, and guest access for each building so there are no surprises after closing.' },
    ],
    featuredLinks: [
      { name: 'First Fridays guide', href: '/neighborhood/first-fridays', description: 'Monthly art walk near listings' },
      { name: 'Events guide for buyers', href: '/events', description: 'How events relate to ownership' },
      { name: 'Arts District guide', href: '/arts-district-guide', description: 'Full buyer neighborhood brief' },
    ],
  },
  {
    slug: 'art',
    title: 'Art Scene Near Midtown Condos | Buyer Perspective',
    description: 'Galleries and art events walking distance from Midtown listings — resale and lifestyle context from Dr. Jan Duffy.',
    keywords: ['Las Vegas art near condos', 'Arts District galleries walkable', 'First Friday owners'],
    h1: 'Art Access for Owners',
    heroSubtitle: 'Gallery district proximity as a property feature — not a tourism pitch',
    sections: [
      {
        paragraphs: [
          'First Friday and 18b galleries are why many buyers choose Midtown over Summerlin or Henderson. I highlight which buildings have the best walk routes to Casino Center and Main Street gallery clusters.',
        ],
      },
    ],
    faqs: [],
    featuredLinks: [
      { name: 'First Fridays', href: '/neighborhood/first-fridays', description: 'Monthly art walk guide' },
      { name: 'Las Vegas Arts District', href: '/neighborhood/arts-district', description: 'Neighborhood buyer brief' },
    ],
  },
  {
    slug: 'music',
    title: 'Live Music Near Midtown Listings | Owner Guide',
    description: 'First Friday stages and downtown festivals near Midtown condos — what buyers should know about noise, access, and guest appeal.',
    keywords: ['live music Arts District condos', 'First Friday music Midtown', 'Neon City Festival residents'],
    h1: 'Live Music & Your Property',
    heroSubtitle: 'Stages, festivals, and sound considerations for Arts District owners',
    sections: [
      {
        paragraphs: [
          'Live music drives foot traffic — good for condo-hotel income, worth discussing for full-time residents. We review unit orientation, event schedules, and HOA rules during due diligence.',
        ],
      },
    ],
    faqs: [],
    featuredLinks: [
      { name: 'First Fridays', href: '/neighborhood/first-fridays', description: 'Live music every month' },
      { name: 'Neon City Festival', href: '/events/2025-neon-city-festival', description: 'Downtown festival guide' },
    ],
  },
]

export function getCategoryBySlug(slug: string): MidtownCategory | undefined {
  return MIDTOWN_CATEGORIES.find((c) => c.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return MIDTOWN_CATEGORIES.map((c) => c.slug)
}
