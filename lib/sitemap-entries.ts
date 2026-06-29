import { MetadataRoute } from 'next'
import { getAllEventSlugs } from '@/lib/midtown-content/events-data'
import { getAllNewsSlugs } from '@/lib/midtown-content/news-data'
import { getAllCategorySlugs } from '@/lib/midtown-content/categories-data'
import { getAllGuideSlugs, getGuideBySlug } from '@/lib/reddit-aeo-topics'
import { encodeSitemapLoc, SITE_URL } from '@/lib/search-console'

export type SitemapEntry = MetadataRoute.Sitemap[number]

/** Shared sitemap entries for app/sitemap.ts */
export function buildSitemapEntries(): SitemapEntry[] {
  const currentDate = new Date()

  const staticPages: SitemapEntry[] = [
    { url: encodeSitemapLoc(`${SITE_URL}/`), lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: encodeSitemapLoc(`${SITE_URL}/search`), lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: encodeSitemapLoc(`${SITE_URL}/contact`), lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/about`), lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: encodeSitemapLoc(`${SITE_URL}/faq`), lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/events`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/news`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: encodeSitemapLoc(`${SITE_URL}/investment-properties`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: encodeSitemapLoc(`${SITE_URL}/midtown-real-estate`), lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: encodeSitemapLoc(`${SITE_URL}/buyers-guide-midtown`), lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/guides`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: encodeSitemapLoc(`${SITE_URL}/arts-district-guide`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: encodeSitemapLoc(`${SITE_URL}/blog`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/english-residences`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/english-residences/gallery`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/midtown-plaza`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/english-hotel`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/pepper-club`), lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/kjs-restaurant`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/arts-district`), lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/first-fridays`), lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/ev-program`), lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: encodeSitemapLoc(`${SITE_URL}/neighborhood/run-club`), lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const eventPages: SitemapEntry[] = getAllEventSlugs().map((slug) => ({
    url: encodeSitemapLoc(`${SITE_URL}/events/${slug}`),
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: slug.startsWith('first-friday-') ? 0.75 : 0.7,
  }))

  const newsPages: SitemapEntry[] = getAllNewsSlugs().map((slug) => ({
    url: encodeSitemapLoc(`${SITE_URL}/news/${slug}`),
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const categoryPages: SitemapEntry[] = getAllCategorySlugs().map((slug) => ({
    url: encodeSitemapLoc(`${SITE_URL}/midtown/${slug}`),
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const guidePages: SitemapEntry[] = getAllGuideSlugs().map((slug) => {
    const guide = getGuideBySlug(slug)
    return {
      url: encodeSitemapLoc(`${SITE_URL}/guides/${slug}`),
      lastModified: guide ? new Date(guide.datePublished) : currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }
  })

  return [...staticPages, ...guidePages, ...eventPages, ...newsPages, ...categoryPages]
}
