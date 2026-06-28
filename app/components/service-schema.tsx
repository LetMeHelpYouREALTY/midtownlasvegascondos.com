// Service Schema for Real Estate Services
// 2026 SEO: Detailed service offerings enhance E-E-A-T and local relevance

export function ServiceSchema() {
  const services = [
    {
      '@type': 'Service',
      serviceType: 'Real Estate Sales',
      name: 'Luxury Condo Sales',
      description:
        'Expert guidance for buying and selling luxury condominiums in Midtown Las Vegas and the Arts District. Specialized knowledge of The English Residences, Midtown Plaza, and downtown properties.',
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas Arts District, NV',
      },
      provider: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'Service',
      serviceType: 'Real Estate Investment Consulting',
      name: 'Investment Property Consulting',
      description:
        'Comprehensive investment analysis for Midtown properties including ROI calculations, rental income potential, and market trends. Specialized expertise in condo-hotel investments.',
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas Arts District, NV',
      },
      provider: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
      },
    },
    {
      '@type': 'Service',
      serviceType: 'Property Tours',
      name: 'Personalized Property Tours',
      description:
        '30-minute personalized home tours of Midtown Las Vegas properties. Experience the neighborhood, view available homes, and get expert guidance on Arts District living.',
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas Arts District, NV',
      },
      provider: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'Service',
      serviceType: 'Real Estate Consulting',
      name: 'Buyer Consultation',
      description:
        'Expert consultation for first-time and experienced buyers. Learn about Midtown neighborhoods, financing options, and the buying process in the Las Vegas Arts District.',
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas Arts District, NV',
      },
      provider: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
      },
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.midtownlasvegascondos.com#business',
    name: 'Las Vegas Arts District Condos | Homes by Dr. Jan Duffy',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'OfferCatalogItem',
        position: index + 1,
        itemOffered: service,
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
