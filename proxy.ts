import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SITE_HOST = 'www.midtownlasvegascondos.com'

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // Apex → www for this site only (no cross-domain canonical redirects)
  if (hostname === 'midtownlasvegascondos.com') {
    url.hostname = SITE_HOST
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images).*)',
  ],
}
