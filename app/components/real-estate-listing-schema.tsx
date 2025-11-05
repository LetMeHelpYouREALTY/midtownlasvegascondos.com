// RealEstateListing Structured Data for SEO

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
      '@type': 'RealEstateAgent',
      name: agentName,
    },
    areaServed,
  }

  if (price) {
    schema.price = {
      '@type': 'PriceSpecification',
      priceCurrency,
      price,
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

