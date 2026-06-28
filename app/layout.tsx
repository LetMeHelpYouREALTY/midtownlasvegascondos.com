import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { LocalBusinessSchema, WebSiteSchema, PersonSchema } from './components/structured-data'
import {
  MidtownPlaceSchema,
  MidtownTimelineSchema,
  FirstFridayEventSeriesSchema,
  EnglishResidencesProductSchema,
} from './components/midtown-geo-schema'
import { FAQSchema } from './components/faq-schema'
import { GoogleAnalytics } from './components/google-analytics'
import { AggregateRatingSchema } from './components/aggregate-rating-schema'
import { ReviewSchema } from './components/review-schema'
import { ServiceSchema } from './components/service-schema'
import { StickyCTABar } from './components/sticky-cta-bar'
import { WidgetTracker } from './components/widget-tracker'
import { CalendlyBadge } from './components/calendly-badge'
import { siteConfig, absoluteUrl } from '@/lib/site-config'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Walkable Arts District Condos | Midtown Las Vegas Living | 702-500-1980',
    template: '%s | Walkable Midtown Las Vegas | Dr. Jan Duffy',
  },
  description:
    'Las Vegas locals choose Midtown for walkable Arts District living — First Friday, galleries, and chef-driven dining on foot at 921 S Main St. Tour with Dr. Jan Duffy at (702) 500-1980.',
  metadataBase: new URL(siteConfig.baseUrl),
  alternates: {
    canonical: absoluteUrl('/'),
  },
  keywords: [
    'walkable Las Vegas condos',
    'Arts District living',
    'Midtown Las Vegas',
    'First Friday Las Vegas',
    'downtown Las Vegas condos',
    'English Residences',
    'Juhl Soho Newport lofts',
    'Dr. Jan Duffy',
    '18b Arts District',
    'local Las Vegas real estate',
    'Midtown north of Charleston',
    'Midtown Plaza Las Vegas',
    'Meet me in Midtown',
    'most walkable neighborhood Las Vegas',
    'Midtown condos las vegas for sale',
    'Midtown condos las vegas for rent',
    'Midtown condo floor plans',
    'Arts District apartments Las Vegas',
    'Midtown Lennar',
  ],
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Midtown Las Vegas Condos',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Walkable Arts District Condos | Midtown Las Vegas',
    description:
      'Gallery nights, local dining, and First Friday on your block — walkable Midtown living at 921 S Main St. Call (702) 500-1980.',
    url: siteConfig.baseUrl,
    siteName: siteConfig.siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: absoluteUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: 'Midtown Las Vegas Condos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midtown Las Vegas Condos',
    description:
      'Luxury condominium living in the heart of Las Vegas Arts District',
    images: [absoluteUrl('/og-image.png')],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
  },
  category: 'real estate',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit robots meta tag to ensure indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* Core Web Vitals Optimization - Preconnect EARLY to critical third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.realscout.com" />
        {/* Preconnect to CloudFront for RealScout listing images - critical for LCP */}
        <link rel="preconnect" href="https://d1buiexcd5gara.cloudfront.net" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preload hero image for faster LCP - MUST be before other resources */}
        <link
          rel="preload"
          as="image"
          href="/images/midtown/blvd-aerial-rendering.jpg"
          fetchPriority="high"
        />
        {/* Apple touch icon - using favicon.ico as fallback until dedicated PNG is created */}
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="180x180" />
        {/* theme-color is supported by Chrome, Edge, Safari, and mobile browsers (not Firefox/Opera) */}
        <meta name="theme-color" content="#0f172a" />
        {/* DNS Prefetch for non-critical resources */}
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://widgetbe.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://storage.googleapis.com" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        {/* RealScout widget script - load after interactive for above-fold widgets */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
          id="realscout-web-components-script"
        />
        {/* Calendly CSS - loaded asynchronously to avoid render blocking */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
          media="print"
        />
        {/* RealScout widget styles */}
        <style>{`
          realscout-office-listings,
          realscout-advanced-search,
          realscout-simple-search {
            --rs-listing-divider-color: #0e64c8;
            width: 100%;
            display: block;
            min-height: 200px;
          }
        `}</style>
        <Script id="calendly-css-loader" strategy="afterInteractive">
          {`
            (function() {
              if (typeof document === 'undefined') return;
              const link = document.querySelector('link[href*="calendly.com"][media="print"]');
              if (link) {
                link.media = 'all';
              }
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <WidgetTracker />
        <WebSiteSchema />
        <PersonSchema />
        <LocalBusinessSchema />
        <MidtownPlaceSchema />
        <MidtownTimelineSchema />
        <FirstFridayEventSeriesSchema />
        <EnglishResidencesProductSchema />
        <AggregateRatingSchema />
        <ReviewSchema />
        <ServiceSchema />
        <FAQSchema />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <StickyCTABar />
        <CalendlyBadge />
      </body>
    </html>
  )
}
