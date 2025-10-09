import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { LocalBusinessSchema } from './components/structured-data'
import { FAQSchema } from './components/faq-schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Midtown Las Vegas Condos | Luxury Living in the Arts District',
  description:
    'Discover luxury condominium living in the heart of Las Vegas Arts District. Experience the vibrant culture, dining, and entertainment of Midtown. Contact Dr. Jan at (702) 500-1955 or DrJanSells@MidtownLasVegasCondos.com',
  metadataBase: new URL('https://www.midtownlasvegascondos.com'),
  openGraph: {
    title: 'Midtown Las Vegas Condos',
    description:
      'Luxury condominium living in the heart of Las Vegas Arts District. Contact Dr. Jan at (702) 500-1955',
    url: 'https://www.midtownlasvegascondos.com',
    siteName: 'Midtown Las Vegas Condos',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Midtown Las Vegas Condos',
    description:
      'Luxury condominium living in the heart of Las Vegas Arts District',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LocalBusinessSchema />
        <FAQSchema />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
