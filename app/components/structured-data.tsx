// Structured Data (JSON-LD) for SEO

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Midtown Las Vegas | Condos By Dr. Jan Duffy',
    image: 'https://www.midtownlasvegascondos.com/images/logos/midtown-logo.svg',
    '@id': 'https://www.midtownlasvegascondos.com',
    url: 'https://www.midtownlasvegascondos.com',
    telephone: '+17025001955',
    email: 'DrJanSells@MidtownLasVegasCondos.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '921 S Main St',
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$$',
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      '@id': 'https://www.wikidata.org/wiki/Q23768',
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
      streetAddress: '921 S Main St',
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

