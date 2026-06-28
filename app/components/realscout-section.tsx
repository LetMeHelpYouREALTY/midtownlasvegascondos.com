import Link from 'next/link'
import { RealScoutListings } from '@/app/components/realscout-listings'
import { RealScoutSearch } from '@/app/components/realscout-search'

type RealScoutSectionProps = {
  listingsTitle?: string
  listingsDescription?: string
  searchTitle?: string
  showListings?: boolean
  showSearch?: boolean
  priceMin?: string
  priceMax?: string
  propertyTypes?: string
  sortOrder?: 'PRICE_LOW' | 'PRICE_HIGH' | 'NEWEST'
  className?: string
}

export function RealScoutSection({
  listingsTitle = 'Homes Near Midtown Las Vegas',
  listingsDescription = 'Browse available condos and residences in the Las Vegas Arts District — updated daily with Dr. Jan Duffy\'s listings.',
  searchTitle = 'Search All Midtown Properties',
  showListings = true,
  showSearch = true,
  priceMin = '450000',
  priceMax = '1000000',
  propertyTypes = 'Condo, Single Family Residence, Townhouse',
  sortOrder = 'NEWEST',
  className = 'bg-slate-50',
}: RealScoutSectionProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {showListings && (
          <RealScoutListings
            title={listingsTitle}
            description={listingsDescription}
            priceMin={priceMin}
            priceMax={priceMax}
            propertyTypes={propertyTypes}
            sortOrder={sortOrder}
          />
        )}

        {showSearch && (
          <div className={showListings ? 'mt-16' : ''}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              {searchTitle}
            </h2>
            <RealScoutSearch priceMin={priceMin} priceMax={priceMax} />
          </div>
        )}

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="http://drjanduffy.realscout.com/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Get Started with Dr. Jan
          </a>
          <a
            href="http://drjanduffy.realscout.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-transparent border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
          >
            Browse All Listings
          </a>
          <Link
            href="/contact"
            className="text-slate-700 font-semibold hover:text-slate-900 hover:underline"
          >
            Or call (702) 500-1980
          </Link>
        </div>
      </div>
    </section>
  )
}
