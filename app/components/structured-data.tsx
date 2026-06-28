// Structured Data (JSON-LD) for SEO

import { siteConfig, absoluteUrl } from '@/lib/site-config'
import { midtownAuthority } from '@/lib/midtown-authority'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'RealEstateAgency', 'Organization', 'LocalBusiness'],
    name: 'Walkable Midtown Las Vegas Condos | Dr. Jan Duffy',
    description:
      'Las Vegas Arts District condo specialist for locals who want walkable gallery life, First Friday culture, and downtown living at 921 S Main St.',
    image: absoluteUrl('/images/logos/midtown-logo.svg'),
    '@id': `${siteConfig.baseUrl}#business`,
    url: siteConfig.baseUrl,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    foundingDate: '2009-09-20',
    // GBP Optimization - Aggregate Rating
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '921 South Main Street',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1622,
      longitude: -115.1513,
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
        '@type': 'Place',
        name: 'Midtown Las Vegas',
        description: midtownAuthority.description,
        containedInPlace: {
          '@type': 'Place',
          name: 'Las Vegas Arts District (18b)',
        },
      },
      {
        '@type': 'City',
        name: 'Downtown Las Vegas, Las Vegas, NV, USA',
      },
    ],
    containsPlace: {
      '@type': 'Place',
      '@id': `${siteConfig.baseUrl}#midtown-place`,
      name: midtownAuthority.officialName,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: midtownAuthority.geo.latitude,
        longitude: midtownAuthority.geo.longitude,
      },
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.1622,
        longitude: -115.1513,
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
      midtownAuthority.officialUrl,
      midtownAuthority.social.instagram,
      midtownAuthority.social.facebook,
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
  const er = midtownAuthority.englishResidences
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: er.name,
    description: `${er.tagline} ${er.description}`,
    url: absoluteUrl('/neighborhood/english-residences'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: '921 South Main Street',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1622,
      longitude: -115.1513,
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
    numberOfRooms: er.unitCount,
    petsAllowed: 'Contact for policy',
    brand: {
      '@type': 'Brand',
      name: er.brand,
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Availability',
      value: er.status,
    },
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
    name: siteConfig.siteName,
    url: siteConfig.baseUrl,
    description:
      'Walkable Arts District living in Midtown Las Vegas — galleries, First Friday, and local dining on foot. Guides for local buyers from Dr. Jan Duffy.',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      url: siteConfig.baseUrl,
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteConfig.baseUrl}/search?q={search_term_string}`,
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
    url: absoluteUrl('/about'),
    image: absoluteUrl('/images/midtown/dr-jan-duffy.png'),
    email: siteConfig.email,
    telephone: siteConfig.phoneTel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '921 South Main Street',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
      addressCountry: 'US',
    },
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
