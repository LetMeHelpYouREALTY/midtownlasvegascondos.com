import { buildSitemapEntries } from '@/lib/sitemap-entries'

/** Revalidate sitemap daily so Search Console sees new guides and content */
export const revalidate = 86400

export default function sitemap() {
  return buildSitemapEntries()
}
