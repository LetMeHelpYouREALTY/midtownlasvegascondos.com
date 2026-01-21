// Article Schema for Blog Posts
// 2026 SEO: Article schema with author bylines enhances E-E-A-T

interface ArticleSchemaProps {
  headline: string
  description: string
  image?: string | string[]
  datePublished: string
  dateModified?: string
  url?: string
  author: {
    name: string
    url?: string
  }
  publisher?: {
    name: string
    logo?: string
  }
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  url,
  author,
  publisher = {
    name: 'Midtown Las Vegas Condos',
    logo: 'https://www.midtownvegascondos.com/images/logos/midtown-logo.svg',
  },
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image
      ? Array.isArray(image)
        ? image
        : image
      : 'https://www.midtownvegascondos.com/og-image.png',
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      ...(publisher.logo && {
        logo: {
          '@type': 'ImageObject',
          url: publisher.logo,
        },
      }),
    },
    ...(url && {
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
