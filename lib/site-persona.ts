/**
 * Two completely different web properties — voice, branding, and purpose must never overlap.
 *
 * RESEARCH (parallel search / extract, midtownvegas.com vs Dr. Jan profiles):
 * - midtownvegas.com = neighborhood lifestyle brand ("Meet me in Midtown", discovery, events)
 * - midtownlasvegascondos.com = Dr. Jan Duffy REALTOR® buyer/advisor site (listings, tours, investment)
 */

/** Shared brokerage office (same as Nevada Real Estate Group / valley team hub) */
export const OFFICE_ADDRESS = {
  street: '8945 W Russell Rd, Suite 170',
  city: 'Las Vegas',
  region: 'NV',
  postalCode: '89148',
} as const

/** Midtown listings & property tours — not the business office NAP */
export const MIDTOWN_SHOWROOM = {
  street: '921 South Main Street',
  city: 'Las Vegas',
  region: 'NV',
  postalCode: '89101',
  label: 'Midtown listing hub & tour meeting point',
} as const

export function formatPostalAddress(
  addr: { street: string; city: string; region: string; postalCode: string },
): string {
  return `${addr.street}, ${addr.city}, ${addr.region} ${addr.postalCode}`
}

export const REAL_ESTATE_SITE = {
  name: 'Homes by Dr. Jan Duffy',
  shortName: 'Dr. Jan Duffy Real Estate',
  /** Agent-site tagline — NOT "Meet me in Midtown" */
  tagline: 'Your Dream · Your Life · Your Home',
  subtagline: 'Your Midtown Arts District REALTOR®',
  url: 'https://www.midtownlasvegascondos.com',
  phone: '(702) 500-1980',
  phoneTel: 'tel:7025001980',
  email: 'DrJanSells@MidtownVegasCondos.com',
  agentName: 'Dr. Jan Duffy',
  agentTitle: 'REALTOR® · GRI',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  yearsExperience: '30+',
  /** Business office NAP — matches shared Russell Rd location */
  address: OFFICE_ADDRESS,
  midtownShowroom: MIDTOWN_SHOWROOM,
  geo: {
    latitude: 36.0994,
    longitude: -115.2624,
  },
  midtownGeo: {
    latitude: 36.1622,
    longitude: -115.1513,
  },
  realScoutUrl: 'http://drjanduffy.realscout.com/',
  realScoutOnboardingUrl: 'http://drjanduffy.realscout.com/onboarding',
  /**
   * Title & brand for SEO (parallel search: niche geo + agent name, not "Las Vegas Real Estate Agents")
   * Pattern matches Turnberry: "[Product] | Homes by Dr. Jan Duffy"
   */
  seo: {
    /** Primary geo keyword — leads homepage H1 and default title */
    primaryKeyword: 'Midtown Las Vegas Condos',
    defaultTitle: 'Midtown Las Vegas Condos | Dr. Jan Duffy, REALTOR® | (702) 500-1980',
    titleTemplate: '%s | Dr. Jan Duffy, REALTOR®',
    schemaBrandName: 'Midtown Las Vegas Condos | Homes by Dr. Jan Duffy',
    openGraphTitle: 'Midtown Las Vegas Condos | Dr. Jan Duffy, REALTOR®',
    manifestName: 'Midtown Las Vegas Condos | Dr. Jan Duffy',
    manifestShortName: 'Midtown · Dr. Jan',
    defaultDescription:
      'Your Dream · Your Life · Your Home. Dr. Jan Duffy, REALTOR® GRI, guides buyers through Midtown Las Vegas condos, English Residences, and Arts District investments. Call (702) 500-1980.',
  },
  /** How this site speaks — consultative, first-person agent, transaction-focused */
  voice: {
    perspective: 'first-person-agent',
    tone: 'Expert, trusted, personal — like a neighbor who happens to be your REALTOR®',
    focuses: [
      'Listings, tours, and closing guidance',
      'HOA review, comps, and investment math',
      'English Residences and Arts District condo expertise',
      'Buyer education — not neighborhood marketing',
    ],
    primaryCTAs: [
      'Schedule a private tour',
      'Browse available listings',
      'Call Dr. Jan',
      'Get a buyer consultation',
    ] as const,
    /** Phrases that belong on THIS site */
    signaturePhrases: [
      'I help buyers and investors',
      'Let me walk you through the numbers',
      'Schedule your private tour',
      'Your Midtown Arts District specialist',
    ] as const,
  },
} as const

export const OFFICIAL_MIDTOWN_SITE = {
  name: 'Midtown Las Vegas',
  /** Their brand — never reuse as our headline */
  tagline: 'Meet me in Midtown',
  url: 'https://midtownvegas.com',
  description:
    'Official Midtown at the Arts District website — events calendar, dine/shop/stay directory, and neighborhood programming.',
  /** How midtownvegas.com speaks — lifestyle discovery, never real estate agent */
  voice: {
    perspective: 'neighborhood-brand',
    tone: 'Playful, poetic, community-first — connection, creativity, living boldly',
    focuses: [
      'Events, dining, and discovery',
      '“Meet me / your friends / adventure in Midtown”',
      'Walkable lifestyle marketing',
      'Official calendar and venue listings',
    ],
    signaturePhrases: [
      'Meet me in Midtown',
      'Say hello to the most rapidly evolving cultural center',
      'Discover Midtown',
      'Explore the Midtown Arts District',
      'Life in Midtown is about connection, creativity, and living boldly',
    ] as const,
  },
} as const

/**
 * Copy that must NEVER appear on midtownlasvegascondos.com — it is official Midtown brand language.
 * Source: parallel extract of midtownvegas.com homepage & about pages.
 */
export const OFFICIAL_MIDTOWN_FORBIDDEN_PHRASES = [
  'Meet me in Midtown',
  'Meet me in Midtown —',
  'Say hello to the most rapidly evolving',
  'most rapidly evolving cultural center',
  'Discover Midtown',
  'Discover Midtown.',
  'Explore the Midtown Arts District',
  'Keep up with us',
  'Our Vision',
  'We believe in creating spaces where art, culture, and community converge',
  'living boldly',
  'connection, creativity',
] as const

export const BUYER_GUIDE_DISCLAIMER =
  'Independent real estate guidance from Dr. Jan Duffy — not affiliated with Midtown Las Vegas (midtownvegas.com). Event dates, restaurant hours, and official neighborhood news live on the official site; this page explains what matters if you are buying nearby.'

export const EVENT_ORGANIZER_DEFAULT = 'First Friday Foundation'

/** Nav labels — agent site vocabulary */
export const NAV_LABELS = {
  neighborhoodGuide: 'Neighborhood Guide',
  englishResidences: 'The English Residences',
  searchProperties: 'Search Listings',
  eventsGuide: 'Events Guide (for buyers)',
  newsForBuyers: 'Market & News',
  officialMidtown: 'Official Midtown Site ↗',
  aboutAgent: 'About Dr. Jan',
} as const
