import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Midtown Las Vegas Condos | Luxury Living in the Arts District',
  description:
    'Discover luxury condominium living in the heart of Las Vegas Arts District. Experience the vibrant culture, dining, and entertainment of Midtown.',
  metadataBase: new URL('https://midtownlasvegascondos.com'),
  openGraph: {
    title: 'Midtown Las Vegas Condos',
    description:
      'Luxury condominium living in the heart of Las Vegas Arts District',
    url: 'https://midtownlasvegascondos.com',
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
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
