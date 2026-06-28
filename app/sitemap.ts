import { MetadataRoute } from 'next'
import { getAllEventSlugs } from '@/lib/midtown-content/events-data'
import { getAllNewsSlugs } from '@/lib/midtown-content/news-data'
import { getAllCategorySlugs } from '@/lib/midtown-content/categories-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.midtownvegascondos.com'
  const currentDate = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/search`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/events`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/news`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/neighborhood`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/investment-properties`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/midtown-real-estate`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/buyers-guide-midtown`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/arts-district-guide`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/guides/las-vegas-condo-hoa-fees`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/guides/walkable-arts-district-living`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/neighborhood/english-residences`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/neighborhood/english-residences/gallery`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/neighborhood/midtown-plaza`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/neighborhood/english-hotel`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/neighborhood/pepper-club`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/neighborhood/kjs-restaurant`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/neighborhood/arts-district`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/neighborhood/first-fridays`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/neighborhood/ev-program`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/neighborhood/run-club`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const eventPages: MetadataRoute.Sitemap = getAllEventSlugs().map((slug) => ({
    url: `${baseUrl}/events/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: slug.startsWith('first-friday-') ? 0.75 : 0.7,
  }))

  const newsPages: MetadataRoute.Sitemap = getAllNewsSlugs().map((slug) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const categoryPages: MetadataRoute.Sitemap = getAllCategorySlugs().map((slug) => ({
    url: `${baseUrl}/midtown/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...eventPages, ...newsPages, ...categoryPages]
}
