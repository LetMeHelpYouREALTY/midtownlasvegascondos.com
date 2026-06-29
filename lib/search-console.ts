/**
 * Google Search Console configuration — single source for canonical URLs,
 * sitemap location, and site verification.
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

export const ROBOTS_PATH = '/robots.txt'

export const ROBOTS_URL = `${SITE_URL}${ROBOTS_PATH}`

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
