import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { APEX_HOST, WWW_HOST } from '@/lib/search-console'

/** Legacy / alternate hostnames that must 301 to the canonical www property (GSC). */
const REDIRECT_HOSTS = new Set([
  APEX_HOST,
  'midtownvegascondos.com',
  'www.midtownvegascondos.com',
])

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0] || ''
  const url = request.nextUrl.clone()

  if (REDIRECT_HOSTS.has(hostname)) {
    url.protocol = 'https:'
    url.hostname = WWW_HOST
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Skip static assets, API, robots, sitemap, and GSC verification files (google*.html).
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|google[a-z0-9]+\\.html|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|json|woff2?)$).*)',
  ],
}
