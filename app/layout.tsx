import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { LocalBusinessSchema, WebSiteSchema, PersonSchema } from './components/structured-data'
import { FAQSchema } from './components/faq-schema'
import { GoogleAnalytics } from './components/google-analytics'
import { ServiceSchema } from './components/service-schema'
import { StickyCTABar } from './components/sticky-cta-bar'
import { WidgetTracker } from './components/widget-tracker'
import { CalendlyBadge } from './components/calendly-badge'
import { CalendlyScript } from './components/calendly-script'
import { REAL_ESTATE_SITE } from '@/lib/site-persona'
import { AgentByline } from './components/agent-byline'
import { getGoogleSiteVerification, SITE_URL } from '@/lib/search-console'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const googleSiteVerification = getGoogleSiteVerification()

export const metadata: Metadata = {
  title: {
    default: REAL_ESTATE_SITE.seo.defaultTitle,
    template: REAL_ESTATE_SITE.seo.titleTemplate,
  },
  description: REAL_ESTATE_SITE.seo.defaultDescription,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/`,
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
  publisher: REAL_ESTATE_SITE.name,
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
    title: REAL_ESTATE_SITE.seo.openGraphTitle,
    description: REAL_ESTATE_SITE.seo.defaultDescription,
    url: 'https://www.midtownlasvegascondos.com',
    siteName: REAL_ESTATE_SITE.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.midtownlasvegascondos.com/og-image.png',
        width: 1200,
        height: 630,
        alt: REAL_ESTATE_SITE.seo.primaryKeyword,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: REAL_ESTATE_SITE.seo.openGraphTitle,
    description: REAL_ESTATE_SITE.seo.defaultDescription,
    images: ['https://www.midtownlasvegascondos.com/og-image.png'],
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icons/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
        {/* theme-color is supported by Chrome, Edge, Safari, and mobile browsers (not Firefox/Opera) */}
        <meta name="theme-color" content="#0f172a" />
        {/* DNS prefetch only. Preconnecting these hosts competed with the hero image. */}
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://widgetbe.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://www.realscout.com" />
        <link rel="dns-prefetch" href="https://d1buiexcd5gara.cloudfront.net" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://storage.googleapis.com" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
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
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <WidgetTracker />
        <WebSiteSchema />
        <PersonSchema />
        <LocalBusinessSchema />
        <ServiceSchema />
        <FAQSchema />
        <Header />
        <main className="pt-16">{children}</main>
        <div className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <AgentByline compact />
          </div>
        </div>
        <Footer />
        <StickyCTABar />
        <CalendlyScript />
        <CalendlyBadge />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
