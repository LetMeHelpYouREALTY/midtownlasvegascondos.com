import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { LocalBusinessSchema, WebSiteSchema, PersonSchema } from './components/structured-data'
import { FAQSchema } from './components/faq-schema'
import { GoogleAnalytics } from './components/google-analytics'
import { AggregateRatingSchema } from './components/aggregate-rating-schema'
import { ReviewSchema } from './components/review-schema'
import { ServiceSchema } from './components/service-schema'
import { StickyCTABar } from './components/sticky-cta-bar'
import { WidgetTracker } from './components/widget-tracker'
import { CalendlyBadge } from './components/calendly-badge'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Luxury Midtown Las Vegas Condos | Arts District Real Estate | 702-500-1980',
    template: '%s | Las Vegas Arts District Condos | Homes by Dr. Jan Duffy',
  },
  description:
    'Discover luxury condominium living in the heart of Las Vegas Arts District. Experience the vibrant culture, dining, and entertainment of Midtown. Contact us today at (702) 500-1980.',
  metadataBase: new URL('https://www.midtownvegascondos.com'),
  alternates: {
    canonical: 'https://www.midtownvegascondos.com/',
  },
  keywords: [
    'Las Vegas condos',
    'Arts District real estate',
    'Midtown Las Vegas',
    'luxury condos Las Vegas',
    'English Residences',
    'Las Vegas real estate agent',
    'Dr. Jan Duffy',
    'Midtown Las Vegas condos',
    'downtown Las Vegas condos',
    'Las Vegas Arts District homes',
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
    title: 'Luxury Midtown Las Vegas Condos | Arts District Real Estate',
    description:
      'Luxury condominium living in the heart of Las Vegas Arts District. Contact Dr. Jan at (702) 500-1980',
    url: 'https://www.midtownvegascondos.com',
    siteName: 'Midtown Las Vegas Condos',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.midtownvegascondos.com/og-image.png',
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
    images: ['https://www.midtownvegascondos.com/og-image.png'],
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
        {/* RealScout widget script - load lazily, widgets will load it dynamically when needed */}
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
