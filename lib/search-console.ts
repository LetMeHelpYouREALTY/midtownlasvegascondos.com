/**
 * Google Search Console configuration — canonical URLs, sitemap, verification,
 * and 2026 optimization constants (aligned with Google Search Central guidance).
 *
 * @see https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
 * @see https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
 */

import { REAL_ESTATE_SITE } from '@/lib/site-persona'

/** Canonical production origin (always www) */
export const SITE_URL = REAL_ESTATE_SITE.url

/** Apex domain without www — used for redirect rules */
export const APEX_HOST = 'midtownlasvegascondos.com'

/** Preferred host for Search Console property */
export const WWW_HOST = 'www.midtownlasvegascondos.com'

export const SITEMAP_PATH = '/sitemap.xml'

export const SITEMAP_URL = `${SITE_URL}${SITEMAP_PATH}`

/**
 * Alternate sitemap URL with trailing slash — fixes Next.js "Couldn't fetch"
 * in Search Console when the plain URL is cached as failed (2025–2026 reports).
 */
export const SITEMAP_URL_TRAILING_SLASH = `${SITEMAP_URL}/`

export const ROBOTS_PATH = '/robots.txt'

export const ROBOTS_URL = `${SITE_URL}${ROBOTS_PATH}`

/** Google Search Console property URL */
export const GSC_PROPERTY_URL = SITE_URL

/**
 * Priority URLs to request indexing after deploy (URL Inspection tool).
 * Focus on money pages + new AEO guide hub per 2026 AI visibility guidance.
 */
export const GSC_PRIORITY_INDEX_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/guides`,
  `${SITE_URL}/midtown-real-estate`,
  `${SITE_URL}/neighborhood/english-residences`,
  `${SITE_URL}/buyers-guide-midtown`,
  `${SITE_URL}/guides/walkable-arts-district-living`,
  `${SITE_URL}/guides/worth-buying-condo-las-vegas-now`,
] as const

/**
 * Google Search Console HTML-tag verification code.
 * Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel (Production).
 */
export function getGoogleSiteVerification(): string | undefined {
  const code = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim()
  return code || undefined
}

/** Build absolute canonical URL for a path (e.g. "/guides" → full www URL) */
export function absoluteUrl(path: string = '/'): string {
  if (path.startsWith('http')) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized === '/') return `${SITE_URL}/`
  return `${SITE_URL}${normalized}`
}

/**
 * Encode sitemap loc values for Google's strict XML parser.
 * @see https://www.sitemaps.org/protocol.html — loc must be URL-escaped
 */
export function encodeSitemapLoc(url: string): string {
  try {
    const parsed = new URL(url)
    parsed.pathname = parsed.pathname
      .split('/')
      .map((segment) => encodeURIComponent(decodeURIComponent(segment)))
      .join('/')
    return parsed.toString()
  } catch {
    return encodeURI(url)
  }
}
