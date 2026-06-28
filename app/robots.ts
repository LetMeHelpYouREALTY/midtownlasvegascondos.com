import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.baseUrl

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
