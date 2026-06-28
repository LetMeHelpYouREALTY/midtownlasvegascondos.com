import Link from 'next/link'
import { Metadata } from 'next'
import { RealScoutSection } from '@/app/components/realscout-section'

export const metadata: Metadata = {
  title: 'Page Not Found | Midtown Las Vegas Condos',
  description: 'The page you are looking for could not be found. Browse our luxury condos and homes in the Las Vegas Arts District.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/midtown-real-estate"
            className="px-8 py-4 bg-transparent border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
          >
            Browse Properties
          </Link>
        </div>
        <div className="mt-12 text-left">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Popular Pages
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>
              <Link href="/" className="hover:text-slate-900 underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/midtown-real-estate"
                className="hover:text-slate-900 underline"
              >
                Midtown Real Estate
              </Link>
            </li>
            <li>
              <Link
                href="/investment-properties"
                className="hover:text-slate-900 underline"
              >
                Investment Properties
              </Link>
            </li>
            <li>
              <Link
                href="/neighborhood/english-residences"
                className="hover:text-slate-900 underline"
              >
                English Residences
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-slate-900 underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <RealScoutSection
        listingsTitle="Browse Midtown Properties"
        listingsDescription="Find your home in the Las Vegas Arts District while you explore the site."
      />
    </div>
  )
}
