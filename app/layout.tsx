import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { LocalBusinessSchema } from './components/structured-data'
import { FAQSchema } from './components/faq-schema'
import { GoogleAnalytics } from './components/google-analytics'
import { AggregateRatingSchema } from './components/aggregate-rating-schema'
import { StickyCTABar } from './components/sticky-cta-bar'

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
    apple: '/favicon.ico',
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
        <meta name="theme-color" content="#0f172a" />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <LocalBusinessSchema />
        <AggregateRatingSchema />
        <FAQSchema />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <StickyCTABar />
      </body>
    </html>
  )
}
