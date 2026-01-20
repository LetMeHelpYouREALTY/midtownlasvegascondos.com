// Structured Data (JSON-LD) for SEO

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Las Vegas Arts District Condos | Homes by Dr. Jan Duffy',
    image: 'https://www.midtownvegascondos.com/images/logos/midtown-logo.svg',
    '@id': 'https://www.midtownvegascondos.com',
    url: 'https://www.midtownvegascondos.com',
    telephone: '+17025001980',
    email: 'DrJanSells@MidtownVegasCondos.com',
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
        name: 'Las Vegas',
        '@id': 'https://www.wikidata.org/wiki/Q23768',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Midtown',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Arts District',
      },
      {
        '@type': 'City',
        name: 'Downtown Las Vegas',
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
    ],
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

