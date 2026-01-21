import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Security headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://em.realscout.com https://www.realscout.com https://widget.realscout.com https://api.realscout.com https://cdn.realscout.com https://assets.realscout.com https://assets.calendly.com https://widgetbe.com https://maps.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com https://maps.gstatic.com https://em.realscout.com https://www.realscout.com https://widget.realscout.com https://cdn.realscout.com https://assets.realscout.com",
              "img-src 'self' data: https: https://maps.gstatic.com https://maps.googleapis.com https://em.realscout.com https://www.realscout.com https://widget.realscout.com https://cdn.realscout.com https://assets.realscout.com",
              "font-src 'self' data: https://fonts.gstatic.com https://em.realscout.com https://www.realscout.com https://widget.realscout.com https://cdn.realscout.com",
              "connect-src 'self' https://www.google-analytics.com https://em.realscout.com https://www.realscout.com https://widget.realscout.com https://api.realscout.com https://cdn.realscout.com https://calendly.com https://widgetbe.com https://maps.googleapis.com",
              "frame-src 'self' https://www.googletagmanager.com https://calendly.com https://storage.googleapis.com https://maps.google.com https://em.realscout.com https://www.realscout.com https://widget.realscout.com",
            ].join('; '),
          },
          // Cache headers for static assets
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache headers for third-party resources (via proxy/rewrite if possible)
      // Note: These headers apply to our own responses, not third-party resources
      // For third-party resources, we rely on their own cache headers
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Image optimization for Core Web Vitals
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Optimize for LCP (Largest Contentful Paint)
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Redirects for old/dead URLs
  async redirects() {
    return [
      {
        source: '/listings/luxury-condo',
        destination: '/midtown-real-estate',
        permanent: true,
      },
      {
        source: '/listings/:path*',
        destination: '/midtown-real-estate',
        permanent: true,
      },
      // Redirect old incomplete URLs that Google is trying to crawl
      {
        source: '/ap',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lc',
        destination: '/',
        permanent: true,
      },
    ]
  },
  // Compression
  compress: true,
  // Production optimizations
  poweredByHeader: false,
  // Enable React strict mode
  reactStrictMode: true,
  // Note: SWC minification is enabled by default in Next.js 13+
  // Experimental features for better performance
  experimental: {
    // Optimize server components
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
}

export default nextConfig
