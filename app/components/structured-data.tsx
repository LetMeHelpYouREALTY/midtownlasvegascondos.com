// Structured Data (JSON-LD) for SEO

import { getAgentPhotoAbsoluteUrl } from '@/lib/agent-photo'
import {
  MIDTOWN_SHOWROOM,
  REAL_ESTATE_SITE,
} from '@/lib/site-persona'

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
    '@type': ['RealEstateAgent', 'RealEstateAgency', 'Organization', 'LocalBusiness'],
    name: REAL_ESTATE_SITE.seo.schemaBrandName,
    description:
      'Discover luxury condos and charming homes in Downtown Las Vegas with Dr. Jan Duffy, a real estate expert with 30+ years of experience. Personalized service guaranteed!',
    image: 'https://www.midtownlasvegascondos.com/images/logos/midtown-logo.svg',
    '@id': 'https://www.midtownlasvegascondos.com#business',
    url: 'https://www.midtownlasvegascondos.com',
    telephone: '+17025001980',
    email: 'DrJanSells@MidtownVegasCondos.com',
    foundingDate: '2009-09-20',
    // GBP Optimization - Aggregate Rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    address: officePostalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: REAL_ESTATE_SITE.geo.latitude,
      longitude: REAL_ESTATE_SITE.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '17:00',
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
    sameAs: [
      'https://www.linkedin.com/company/downtown-las-vegas-condos-and-homes-for-sale',
    ],
    additionalType: [
      'https://schema.org/RealEstateAgent',
      'https://schema.org/RealEstateAgency',
      'https://schema.org/RealEstateDeveloper',
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
      itemListElement: [
        {
          '@type': 'OfferCatalogItem',
          position: 1,
          itemOffered: {
            '@type': 'Service',
            serviceType: 'Real Estate Sales',
            name: 'Luxury Condo Sales',
          },
        },
        {
          '@type': 'OfferCatalogItem',
          position: 2,
          itemOffered: {
            '@type': 'Service',
            serviceType: 'Real Estate Investment Consulting',
            name: 'Investment Property Consulting',
          },
        },
        {
          '@type': 'OfferCatalogItem',
          position: 3,
          itemOffered: {
            '@type': 'Service',
            serviceType: 'Property Tours',
            name: 'Personalized Property Tours',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
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
      '@type': 'Organization',
      name: REAL_ESTATE_SITE.seo.schemaBrandName,
      url: 'https://www.midtownlasvegascondos.com',
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
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://calendly.com/drjanduffy/1-home-tour-30-mins',
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: {
          '@type': 'Event',
          name: 'Home Tour Consultation',
          description: '30-minute personalized home tour with Dr. Jan Duffy',
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

/**
 * Person schema for E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
 * 2026 requirement for verified human experience signals
 * Enhanced with experience signals, awards, and detailed credentials
 */
export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Jan Duffy',
    alternateName: 'Dr. Janet Duffy',
    jobTitle: 'Real Estate Agent',
    worksFor: {
      '@type': 'RealEstateAgency',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://www.berkshirehathawayhs.com',
    },
    description:
      'Dr. Jan Duffy is a licensed real estate agent specializing in Midtown Las Vegas and Arts District properties. With 30+ years of experience, she provides personalized service for luxury condos, investment properties, and downtown living.',
    url: 'https://www.midtownlasvegascondos.com/about',
    image: getAgentPhotoAbsoluteUrl(),
    email: 'DrJanSells@MidtownVegasCondos.com',
    telephone: '+17025001980',
    address: officePostalAddress,
    sameAs: [
      'https://www.linkedin.com/company/downtown-las-vegas-condos-and-homes-for-sale',
    ],
    knowsAbout: [
      'Real Estate',
      'Luxury Condos',
      'Downtown Las Vegas',
      'Arts District Real Estate',
      'Investment Properties',
      'Property Management',
      'Real Estate Development',
      'Condo-Hotel Investments',
      'Midtown Las Vegas Neighborhood',
      'First Friday Las Vegas',
      'The English Residences',
      'Las Vegas condo HOA fees',
      'Arts District walkability',
      'Midtown vs Strip condo living',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'License',
        name: 'Nevada Real Estate License',
        credentialAwarded: '1994',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Nevada Real Estate Division',
          url: 'https://red.nv.gov',
        },
      },
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Real Estate Education',
    },
    // E-E-A-T Experience Signals (2026 requirement)
    // Years of experience
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Years of Experience',
        value: '30+',
      },
      {
        '@type': 'PropertyValue',
        name: 'Specialization',
        value: 'Midtown Las Vegas Arts District Real Estate',
      },
      {
        '@type': 'PropertyValue',
        name: 'Service Area',
        value: 'Las Vegas Arts District, Downtown Las Vegas, Midtown',
      },
    ],
    // Authoritativeness signals
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Berkshire Hathaway HomeServices Nevada Properties',
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
