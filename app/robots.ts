import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.midtownvegascondos.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          // Next.js build assets (JS chunks) — not indexable pages; GSC may list these as "blocked"
          '/_next/',
          '/static/',
          '/listings/',
          '/static/img/icons/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          // Next.js build assets (JS chunks) — not indexable pages; GSC may list these as "blocked"
          '/_next/',
          '/static/',
          '/listings/',
          '/static/img/icons/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
      },
      {
        userAgent: 'Google-Search-Agent',
        allow: '/',
        disallow: [
          '/api/',
          // Next.js build assets (JS chunks) — not indexable pages; GSC may list these as "blocked"
          '/_next/',
          '/static/',
          '/listings/',
          '/static/img/icons/',
        ],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
