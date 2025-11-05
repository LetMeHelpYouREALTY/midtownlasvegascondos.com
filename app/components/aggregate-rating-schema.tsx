// AggregateRating Structured Data for SEO

export function AggregateRatingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

