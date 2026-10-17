import { siteSchemaGraphJsonLd } from '@/lib/site-schema-nodes'

/** Global RealEstateAgent + WebSite + site FAQ in one @graph (layout). */
export function SiteSchemaGraph() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: siteSchemaGraphJsonLd() }}
    />
  )
}
