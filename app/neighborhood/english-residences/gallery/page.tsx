import { ImageGallery } from '@/app/components/image-gallery'
import { FloorPlanViewer } from '@/app/components/floor-plan-viewer'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'English Residences Gallery | Luxury Condo-Hotel Photos & Floor Plans',
  description:
    'View photos and floor plans of The English Residences luxury condo-hotel units in Midtown Las Vegas. Modern interiors, floor-to-ceiling windows, and Arts District views. Contact Dr. Jan at (702) 500-1955 for a private tour.',
  keywords: [
    'English Residences photos',
    'English Residences floor plans',
    'Midtown Las Vegas condos gallery',
    'Arts District luxury condos',
    'condo-hotel Las Vegas',
    'English Hotel residences',
  ],
  alternates: {
    canonical: 'https://www.midtownlasvegascondos.com/neighborhood/english-residences/gallery',
  },
}

// Example data - replace with actual images and plans once you have them from Midtown Vegas
const propertyImages = [
  {
    src: '', // Add: /images/properties/english-residences/living-room-1.jpg
    alt: 'Modern living room with floor-to-ceiling windows',
    caption: 'Spacious living areas with stunning city views',
  },
  {
    src: '', // Add: /images/properties/english-residences/bedroom-1.jpg
    alt: 'Master bedroom',
    caption: 'Comfortable bedrooms with premium finishes',
  },
  {
    src: '', // Add: /images/properties/english-residences/kitchen-1.jpg
    alt: 'Gourmet kitchen',
    caption: 'Chef-inspired kitchens with top-of-the-line appliances',
  },
  {
    src: '', // Add: /images/properties/english-residences/bathroom-1.jpg
    alt: 'Spa-like bathroom',
    caption: 'Luxurious bathrooms with designer fixtures',
  },
]

const floorPlans = [
  {
    id: 'studio',
    name: 'Studio',
    bedrooms: 'Studio',
    bathrooms: '1',
    sqft: '450-550',
    price: 'From $250,000',
    imagePath: '', // Add: /plans/english-residences/studio-floorplan.jpg
    pdfPath: '', // Add: /plans/english-residences/studio-floorplan.pdf
  },
  {
    id: '1bed',
    name: 'One Bedroom',
    bedrooms: '1',
    bathrooms: '1',
    sqft: '650-750',
    price: 'From $350,000',
    imagePath: '', // Add: /plans/english-residences/1bed-floorplan.jpg
    pdfPath: '', // Add: /plans/english-residences/1bed-floorplan.pdf
  },
  {
    id: '2bed',
    name: 'Two Bedroom',
    bedrooms: '2',
    bathrooms: '2',
    sqft: '900-1,100',
    price: 'From $500,000',
    imagePath: '', // Add: /plans/english-residences/2bed-floorplan.jpg
    pdfPath: '', // Add: /plans/english-residences/2bed-floorplan.pdf
  },
  {
    id: 'penthouse',
    name: 'Penthouse',
    bedrooms: '2-3',
    bathrooms: '2.5',
    sqft: '1,400-1,800',
    price: 'From $800,000',
    imagePath: '', // Add: /plans/english-residences/penthouse-floorplan.jpg
    pdfPath: '', // Add: /plans/english-residences/penthouse-floorplan.pdf
  },
]

export default function EnglishResidencesGalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-slate-600 mb-4">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            {' / '}
            <Link href="/neighborhood/english-residences" className="hover:text-slate-900">
              The English Residences
            </Link>
            {' / '}
            <span className="text-slate-900">Gallery & Floor Plans</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Gallery & Floor Plans
          </h1>
          <p className="text-xl text-slate-600">
            Explore our luxury condo-hotel residences
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Property Gallery
        </h2>
        <ImageGallery images={propertyImages} />
        
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-blue-900 mb-2">📸 Need to Add Photos</h3>
          <p className="text-blue-800 text-sm">
            Replace the empty image paths above with actual photos from your Midtown Vegas partnership.
            See <code className="bg-blue-100 px-2 py-1 rounded">ASSET_INTEGRATION_GUIDE.md</code> for details.
          </p>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Floor Plans
          </h2>
          <FloorPlanViewer plans={floorPlans} />
          
          <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">📐 Need to Add Floor Plans</h3>
            <p className="text-blue-800 text-sm">
              Add floor plan images and PDFs to <code className="bg-blue-100 px-2 py-1 rounded">/public/plans/</code> and 
              update the paths in this file. Contact your Midtown Vegas partner for official floor plans.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Schedule a Private Tour
        </h2>
        <p className="text-xl text-slate-600 mb-8">
          Experience The English Residences in person. Contact us to arrange a private showing.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}

