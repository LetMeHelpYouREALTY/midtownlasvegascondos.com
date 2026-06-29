import { MetadataRoute } from 'next'
import { getAllEventSlugs } from '@/lib/midtown-content/events-data'
import { getAllNewsSlugs } from '@/lib/midtown-content/news-data'
import { getAllCategorySlugs } from '@/lib/midtown-content/categories-data'
import { getAllGuideSlugs, getGuideBySlug } from '@/lib/reddit-aeo-topics'
import { SITE_URL } from '@/lib/search-console'

/** Revalidate sitemap daily so Search Console sees new guides and content */
export const revalidate = 86400

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/search`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/faq`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/events`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/news`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/neighborhood`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/investment-properties`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/midtown-real-estate`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/buyers-guide-midtown`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/guides`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/arts-district-guide`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/neighborhood/english-residences`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/neighborhood/english-residences/gallery`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/neighborhood/midtown-plaza`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/neighborhood/english-hotel`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/neighborhood/pepper-club`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/neighborhood/kjs-restaurant`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/neighborhood/arts-district`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/neighborhood/first-fridays`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/neighborhood/ev-program`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/neighborhood/run-club`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const eventPages: MetadataRoute.Sitemap = getAllEventSlugs().map((slug) => ({
    url: `${SITE_URL}/events/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: slug.startsWith('first-friday-') ? 0.75 : 0.7,
  }))

  const newsPages: MetadataRoute.Sitemap = getAllNewsSlugs().map((slug) => ({
    url: `${SITE_URL}/news/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const categoryPages: MetadataRoute.Sitemap = getAllCategorySlugs().map((slug) => ({
    url: `${SITE_URL}/midtown/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const guidePages: MetadataRoute.Sitemap = getAllGuideSlugs().map((slug) => {
    const guide = getGuideBySlug(slug)
    return {
      url: `${SITE_URL}/guides/${slug}`,
      lastModified: guide ? new Date(guide.datePublished) : currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }
  })

  return [...staticPages, ...guidePages, ...eventPages, ...newsPages, ...categoryPages]
}
