// Event Schema for Local Events
// 2026 SEO: Event schema enhances local relevance and GBP alignment

interface EventSchemaProps {
  name: string
  description: string
  startDate: string
  endDate?: string
  location?: {
    name?: string
    address?: {
      streetAddress?: string
      addressLocality: string
      addressRegion: string
      postalCode?: string
      addressCountry: string
    }
  }
  organizer?: {
    name: string
    url?: string
  }
  image?: string
  url?: string
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  organizer,
  image,
  url,
}: EventSchemaProps) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    ...(endDate && { endDate }),
    ...(image && { image }),
    ...(url && { url }),
  }

  if (location) {
    schema.location = {
      '@type': 'Place',
      ...(location.name && { name: location.name }),
      ...(location.address && {
        address: {
          '@type': 'PostalAddress',
          ...location.address,
        },
      }),
    }
  } else {
    // Default to Arts District location
    schema.location = {
      '@type': 'Place',
      name: 'Las Vegas Arts District',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89101',
        addressCountry: 'US',
      },
    }
  }

  if (organizer) {
    schema.organizer = {
      '@type': 'Organization',
      name: organizer.name,
      ...(organizer.url && { url: organizer.url }),
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
