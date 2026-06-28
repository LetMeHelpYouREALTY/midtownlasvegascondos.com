import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  // Redirect legacy and apex domains to canonical www (Vercel also 301s at edge)
  if (
    hostname === 'midtownlasvegascondos.com' ||
    hostname === 'www.midtownlasvegascondos.com' ||
    hostname === 'midtownvegascondos.com'
  ) {
    // Replace the hostname with the new domain
    url.hostname = 'www.midtownvegascondos.com'
    // Preserve the path and query parameters
    return NextResponse.redirect(url, 301) // 301 = Permanent Redirect (SEO-friendly)
  }

  // Allow the request to continue if it's already on the correct domain
  return NextResponse.next()
}

// Configure which routes this proxy runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     * - images (image files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images).*)',
  ],
}
