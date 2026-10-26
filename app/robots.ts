import { MetadataRoute } from 'next'
import { SITEMAP_URL } from '@/lib/search-console'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/static/',
          '/static/img/icons/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/static/',
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
          '/static/',
          '/static/img/icons/',
        ],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/static/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/static/'],
      },
    ],
    sitemap: SITEMAP_URL,
  }
}
