/**
 * Dr. Jan Duffy portrait used in the header, footer, bylines, and profile sections.
 * Override with NEXT_PUBLIC_AGENT_PHOTO_URL for Cloudflare Images (imagedelivery.net).
 */

import { REAL_ESTATE_SITE } from '@/lib/site-persona'

const LOCAL_AGENT_PHOTO = '/images/midtown/dr-jan-duffy.jpg'

/** Profile photo path or absolute URL (Cloudflare Images / imagedelivery.net supported) */
export function getAgentPhotoUrl(): string {
  const override = process.env.NEXT_PUBLIC_AGENT_PHOTO_URL?.trim()
  return override || LOCAL_AGENT_PHOTO
}

/** Absolute URL for JSON-LD and Open Graph */
export function getAgentPhotoAbsoluteUrl(): string {
  const url = getAgentPhotoUrl()
  if (url.startsWith('http')) return url
  return `${REAL_ESTATE_SITE.url}${url}`
}

export const AGENT_PHOTO_ALT =
  'Dr. Jan Duffy, Midtown Las Vegas REALTOR® with 30+ years of Arts District experience'

export const AGENT_PHOTO_WIDTH = 180
export const AGENT_PHOTO_HEIGHT = 180

/** True when photo is served from Cloudflare Images CDN */
export function isCloudflareAgentPhoto(url: string = getAgentPhotoUrl()): boolean {
  return url.includes('imagedelivery.net') || url.includes('cdn-cgi/image')
}
