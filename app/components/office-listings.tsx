import { RealScoutListings } from '@/app/components/realscout-listings'

type OfficeListingsProps = {
  title?: string
  description?: string
  priceMin?: string
  priceMax?: string
  propertyTypes?: string
  sortOrder?: 'PRICE_LOW' | 'PRICE_HIGH' | 'NEWEST'
  className?: string
}

/** Dr. Jan's RealScout office-listings carousel. Every page renders it directly below the hero. */
export function OfficeListings({
  title = "Dr. Jan Duffy's Featured Listings",
  description = 'Condos, townhomes, and single-family homes for sale near Midtown Las Vegas — updated daily.',
  priceMin,
  priceMax,
  propertyTypes = ',SFR,TC',
  sortOrder = 'NEWEST',
  className = '',
}: OfficeListingsProps) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}>
      <RealScoutListings
        title={title}
        description={description}
        priceMin={priceMin}
        priceMax={priceMax}
        propertyTypes={propertyTypes}
        sortOrder={sortOrder}
        listingStatus="For Sale"
      />
    </div>
  )
}
