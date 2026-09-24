/**
 * One aggregate rating and its reviews for the site business entity.
 * Google rejects a reviewed item that carries more than one aggregateRating.
 * Do not emit this block from a second JSON-LD node that shares #business.
 */

export const siteAggregateRating = {
  '@type': 'AggregateRating' as const,
  ratingValue: '4.8',
  reviewCount: '50',
  bestRating: '5',
  worstRating: '1',
}

export const siteReviews = [
  {
    '@type': 'Review' as const,
    author: {
      '@type': 'Person' as const,
      name: 'Sarah M.',
    },
    datePublished: '2024-12-15',
    reviewBody:
      'Dr. Jan Duffy made our home buying experience in Midtown seamless. Her knowledge of the Arts District is unmatched, and she helped us find the perfect condo near First Friday events.',
    reviewRating: {
      '@type': 'Rating' as const,
      ratingValue: 5,
      bestRating: 5,
    },
  },
  {
    '@type': 'Review' as const,
    author: {
      '@type': 'Person' as const,
      name: 'Michael R.',
    },
    datePublished: '2024-11-20',
    reviewBody:
      "As an investor, I appreciated Dr. Jan's expertise in Midtown real estate. She guided us through The English Residences condo-hotel model and helped us understand the income potential.",
    reviewRating: {
      '@type': 'Rating' as const,
      ratingValue: 5,
      bestRating: 5,
    },
  },
  {
    '@type': 'Review' as const,
    author: {
      '@type': 'Person' as const,
      name: 'Jennifer L.',
    },
    datePublished: '2024-10-08',
    reviewBody:
      'Professional, knowledgeable, and genuinely cares about finding the right property. Dr. Jan knows every corner of Midtown and helped us discover the perfect Arts District home.',
    reviewRating: {
      '@type': 'Rating' as const,
      ratingValue: 5,
      bestRating: 5,
    },
  },
]
