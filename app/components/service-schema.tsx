import { REAL_ESTATE_AGENT_SCHEMA_ID } from '@/lib/schema-ids'

const agentRef = { '@id': REAL_ESTATE_AGENT_SCHEMA_ID }

/** Service offerings linked to the canonical RealEstateAgent @id. */
export function getRealEstateServiceCatalogItems() {
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
      provider: agentRef,
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
      provider: agentRef,
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
      provider: agentRef,
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
      provider: agentRef,
    },
  ]

  return services.map((service, index) => ({
    '@type': 'OfferCatalogItem',
    position: index + 1,
    itemOffered: service,
  }))
}
