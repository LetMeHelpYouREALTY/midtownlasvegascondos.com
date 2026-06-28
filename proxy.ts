import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.midtownlasvegascondos.com'

/** Legacy / alternate hostnames that must 301 to the canonical Dr. Jan Duffy site. */
const REDIRECT_HOSTS = new Set([
  'midtownlasvegascondos.com',
  'midtownvegascondos.com',
  'www.midtownvegascondos.com',
])

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host')?.split(':')[0] || ''
  const url = request.nextUrl.clone()

  if (REDIRECT_HOSTS.has(hostname)) {
    url.hostname = CANONICAL_HOST
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images).*)',
  ],
}
