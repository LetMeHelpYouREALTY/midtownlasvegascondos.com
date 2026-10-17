import { DR_JAN_AGENT_SAME_AS } from '@/lib/agent-same-as'
import { getAgentPhotoAbsoluteUrl } from '@/lib/agent-photo'
import { buildListingConsultationUrl } from '@/lib/calendly-utm'
import { stringifyJsonLd } from '@/lib/json-ld'
import { MIDTOWN_COMMUNITY_AREA_SERVED } from '@/lib/schema-area-served'
import { REAL_ESTATE_AGENT_SCHEMA_ID } from '@/lib/schema-ids'
import { getSiteFaqMainEntity } from '@/lib/site-faq-entities'
import { SITE_FAQ_SCHEMA_ID, SITE_WEBSITE_SCHEMA_ID } from '@/lib/site-schema-ids'
import { SITE_URL } from '@/lib/search-console'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'
import { getRealEstateServiceCatalogItems } from '@/app/components/service-schema'

const officePostalAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: REAL_ESTATE_SITE.address.street,
  addressLocality: REAL_ESTATE_SITE.address.city,
  addressRegion: REAL_ESTATE_SITE.address.region,
  postalCode: REAL_ESTATE_SITE.address.postalCode,
  addressCountry: 'US',
}

export function buildRealEstateAgentNode() {
  return {
    '@type': 'RealEstateAgent',
    '@id': REAL_ESTATE_AGENT_SCHEMA_ID,
    name: REAL_ESTATE_SITE.agentName,
    alternateName: [
      REAL_ESTATE_SITE.seo.schemaBrandName,
      REAL_ESTATE_SITE.shortName,
      REAL_ESTATE_SITE.name,
    ],
    description:
      'Discover luxury condos and charming homes in Downtown Las Vegas with Dr. Jan Duffy, a real estate expert with 30+ years of experience. Personalized service guaranteed!',
    image: getAgentPhotoAbsoluteUrl(),
    url: REAL_ESTATE_SITE.url,
    telephone: '+17025001980',
    email: 'DrJanSells@MidtownVegasCondos.com',
    foundingDate: '2009-09-20',
    address: officePostalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: REAL_ESTATE_SITE.geo.latitude,
      longitude: REAL_ESTATE_SITE.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    priceRange: '$$$',
    areaServed: MIDTOWN_COMMUNITY_AREA_SERVED,
    knowsAbout: [
      'Real Estate',
      'Luxury Condos',
      'Downtown Living',
      'Arts District Real Estate',
      'Investment Properties',
      'Property Management',
      'Real Estate Development',
      'Real Estate Consulting',
    ],
    knowsLanguage: ['English', 'Spanish', 'Korean', 'Filipino'],
    accessibilityFeature: [
      'wheelchairAccessibleRestroom',
      'wheelchairAccessibleParking',
      'wheelchairAccessibleEntrance',
      'genderNeutralRestroom',
    ],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free Parking Lot',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Appointment Required',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Online Appointments Available',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Onsite Services Available',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Veteran-Owned Business',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Women-Owned Business',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'LGBTQ+ Friendly',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Transgender Safespace',
        value: true,
      },
    ],
    worksFor: {
      '@type': 'RealEstateAgency',
      name: REAL_ESTATE_SITE.brokerage,
      url: 'https://www.berkshirehathawayhs.com',
    },
    sameAs: [...DR_JAN_AGENT_SAME_AS],
    paymentAccepted: 'Cash, Check, Credit Card, Financing Available',
    currenciesAccepted: 'USD',
    slogan: 'Luxury Living in the Heart of Las Vegas Arts District',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: getRealEstateServiceCatalogItems(),
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        name: 'Nevada Real Estate License',
        credentialID: REAL_ESTATE_SITE.license,
        recognizedBy: {
          '@type': 'Organization',
          name: 'Nevada Real Estate Division',
          url: 'https://red.nv.gov',
        },
      },
    ],
  }
}

export function buildWebSiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE_WEBSITE_SCHEMA_ID,
    name: REAL_ESTATE_SITE.seo.manifestName,
    url: SITE_URL,
    description: REAL_ESTATE_SITE.seo.defaultDescription,
    publisher: {
      '@id': REAL_ESTATE_AGENT_SCHEMA_ID,
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        'query-input': 'required name=search_term_string',
      },
      {
        '@type': 'ScheduleAction',
        name: 'Schedule a buyer home tour with Dr. Jan Duffy',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://calendly.com/drjanduffy/in-person-real-estate-consultation',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
      },
      {
        '@type': 'ScheduleAction',
        name: 'Schedule a Midtown listing consultation with Dr. Jan Duffy',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: buildListingConsultationUrl('website-schema-listing-consultation'),
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
      },
    ],
    inLanguage: 'en-US',
  }
}

export function buildSiteFaqPageNode() {
  return {
    '@type': 'FAQPage',
    '@id': SITE_FAQ_SCHEMA_ID,
    mainEntity: getSiteFaqMainEntity(),
  }
}

export function buildSiteSchemaGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [buildRealEstateAgentNode(), buildWebSiteNode(), buildSiteFaqPageNode()],
  }
}

export function siteSchemaGraphJsonLd(): string {
  return stringifyJsonLd(buildSiteSchemaGraph())
}
