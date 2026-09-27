// RealEstateListing Structured Data for SEO

import { REAL_ESTATE_AGENT_SCHEMA_ID } from '@/lib/schema-ids'

interface RealEstateListingSchemaProps {
  url: string
  name: string
  description: string
  images: string[]
  price?: string
  priceCurrency?: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  agentName?: string
  areaServed?: string
}

export function RealEstateListingSchema({
  url,
  name,
  description,
  images,
  price,
  priceCurrency = 'USD',
  address,
  agentName = 'Dr. Jan Duffy',
  areaServed = 'Arts District, Midtown Las Vegas',
}: RealEstateListingSchemaProps) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    url,
    name,
    description,
    image: images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    agent: {
      '@id': REAL_ESTATE_AGENT_SCHEMA_ID,
      ...(agentName !== 'Dr. Jan Duffy' ? { name: agentName } : {}),
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
    // Enhanced for 2026 SEO
    datePosted: new Date().toISOString().split('T')[0],
    listingStatus: 'https://schema.org/ForSale',
    numberOfRooms: 'Contact for details',
  }

  if (price) {
    schema.price = {
      '@type': 'PriceSpecification',
      priceCurrency,
      price,
      valueAddedTaxIncluded: false,
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

