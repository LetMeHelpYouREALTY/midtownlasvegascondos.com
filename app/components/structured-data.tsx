// Structured Data (JSON-LD) for SEO

import { getAgentPhotoAbsoluteUrl } from '@/lib/agent-photo'
import { REAL_ESTATE_AGENT_SCHEMA_ID } from '@/lib/schema-ids'
import { SITE_URL } from '@/lib/search-console'
import {
  MIDTOWN_SHOWROOM,
  REAL_ESTATE_SITE,
} from '@/lib/site-persona'
import { getRealEstateServiceCatalogItems } from './service-schema'
import { siteAggregateRating, siteReviews } from './review-schema'

const officePostalAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: REAL_ESTATE_SITE.address.street,
  addressLocality: REAL_ESTATE_SITE.address.city,
  addressRegion: REAL_ESTATE_SITE.address.region,
  postalCode: REAL_ESTATE_SITE.address.postalCode,
  addressCountry: 'US',
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
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
    aggregateRating: siteAggregateRating,
    review: siteReviews,
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
    areaServed: [
      {
        '@type': 'City',
        name: 'Arts District, Las Vegas, NV, USA',
      },
      {
        '@type': 'City',
        name: 'Downtown Las Vegas, Las Vegas, NV, USA',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: REAL_ESTATE_SITE.midtownGeo.latitude,
        longitude: REAL_ESTATE_SITE.midtownGeo.longitude,
      },
      geoRadius: '10000',
    },
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
    sameAs: [
      'https://www.linkedin.com/company/downtown-las-vegas-condos-and-homes-for-sale',
    ],
    // GBP Optimization - Business attributes
    paymentAccepted: 'Cash, Check, Credit Card, Financing Available',
    currenciesAccepted: 'USD',
    // Additional business information for GBP
    slogan: 'Luxury Living in the Heart of Las Vegas Arts District',
    // Service offerings for GBP
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function toAbsoluteSchemaUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  const path = url.startsWith('/') ? url : `/${url}`
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteSchemaUrl(item.url),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ResidenceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: 'The English Residences',
    description:
      'Luxury condo-hotel residences in the heart of the Las Vegas Arts District. Own your unit and earn income through professional hotel management.',
    url: 'https://www.midtownlasvegascondos.com/neighborhood/english-residences',
    address: {
      '@type': 'PostalAddress',
      streetAddress: MIDTOWN_SHOWROOM.street,
      addressLocality: MIDTOWN_SHOWROOM.city,
      addressRegion: MIDTOWN_SHOWROOM.region,
      postalCode: MIDTOWN_SHOWROOM.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: REAL_ESTATE_SITE.midtownGeo.latitude,
      longitude: REAL_ESTATE_SITE.midtownGeo.longitude,
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Hotel Management',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Income Generation',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Concierge Service',
        value: true,
      },
    ],
    numberOfRooms: '50+',
    petsAllowed: 'Contact for policy',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * WebSite schema with SearchAction for Google site search
 * This enables Google to show a search box in search results
 * Enhanced for 2026 AI-Agent optimization
 */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: REAL_ESTATE_SITE.seo.manifestName,
    url: 'https://www.midtownlasvegascondos.com',
    description: REAL_ESTATE_SITE.seo.defaultDescription,
    publisher: {
      '@id': REAL_ESTATE_AGENT_SCHEMA_ID,
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate:
            'https://www.midtownlasvegascondos.com/search?q={search_term_string}',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        'query-input': 'required name=search_term_string',
      },
      {
        '@type': 'ScheduleAction',
        name: 'Schedule a home tour consultation',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://calendly.com/drjanduffy/in-person-real-estate-consultation',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        'h1',
        '.hero-description',
        '.service-description',
        '.contact-summary',
      ],
    },
    inLanguage: 'en-US',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

