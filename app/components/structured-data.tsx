// Structured Data (JSON-LD) for SEO

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['RealEstateAgent', 'RealEstateAgency', 'Organization', 'LocalBusiness'],
    name: 'Las Vegas Arts District Condos | Homes by Dr. Jan Duffy',
    description:
      'Discover luxury condos and charming homes in Downtown Las Vegas with Dr. Jan Duffy, a real estate expert with 30+ years of experience. Personalized service guaranteed!',
    image: 'https://www.midtownvegascondos.com/images/logos/midtown-logo.svg',
    '@id': 'https://www.midtownvegascondos.com#business',
    url: 'https://www.midtownvegascondos.com',
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
    url: 'https://www.midtownvegascondos.com/neighborhood/english-residences',
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
    name: 'Midtown Las Vegas Condos',
    url: 'https://www.midtownvegascondos.com',
    description:
      'Luxury condominium living in the heart of Las Vegas Arts District. Find your perfect home with Dr. Jan Duffy.',
    publisher: {
      '@type': 'Organization',
      name: 'Las Vegas Arts District Condos | Homes by Dr. Jan Duffy',
      url: 'https://www.midtownvegascondos.com',
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate:
            'https://www.midtownvegascondos.com/search?q={search_term_string}',
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
    url: 'https://www.midtownvegascondos.com/about',
    image: 'https://www.midtownvegascondos.com/og-image.png',
    email: 'DrJanSells@MidtownVegasCondos.com',
    telephone: '+17025001980',
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
