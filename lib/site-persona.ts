/**
 * Two distinct web properties — never conflate branding or voice.
 *
 * THIS SITE: Dr. Jan Duffy real estate (listings, tours, English Residences).
 * REFERENCE: Official Midtown neighborhood marketing (events calendar, dining directory).
 */

export const REAL_ESTATE_SITE = {
  name: 'Homes by Dr. Jan Duffy',
  shortName: 'Dr. Jan Duffy Real Estate',
  tagline: 'Arts District & Midtown Las Vegas condos — expert guidance for buyers and investors',
  url: 'https://www.midtownlasvegascondos.com',
  phone: '(702) 500-1980',
  phoneTel: 'tel:7025001980',
  email: 'DrJanSells@MidtownVegasCondos.com',
  agentName: 'Dr. Jan Duffy',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  address: {
    street: '921 South Main Street',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89101',
  },
  realScoutUrl: 'http://drjanduffy.realscout.com/',
  realScoutOnboardingUrl: 'http://drjanduffy.realscout.com/onboarding',
} as const

export const OFFICIAL_MIDTOWN_SITE = {
  name: 'Midtown Las Vegas',
  tagline: 'Meet me in Midtown — official neighborhood site',
  url: 'https://midtownvegas.com',
  description:
    'Official Midtown at the Arts District website for neighborhood events, dining, and development news.',
} as const

export const BUYER_GUIDE_DISCLAIMER =
  'This page is a local real estate guide by Dr. Jan Duffy for homebuyers and investors researching life near Midtown. For official event times, tickets, and neighborhood programming, visit the official Midtown site.'

export const EVENT_ORGANIZER_DEFAULT = 'First Friday Foundation'
