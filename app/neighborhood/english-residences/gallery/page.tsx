import { ImageGallery } from '@/app/components/image-gallery'
import { FloorPlanViewer } from '@/app/components/floor-plan-viewer'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'English Residences Gallery | Luxury Condo-Hotel Photos & Floor Plans',
  description:
    'View photos and floor plans of The English Residences luxury condo-hotel units in Midtown Las Vegas. Modern interiors, floor-to-ceiling windows, and Arts District views. Contact Dr. Jan at (702) 500-1980 for a private tour.',
  keywords: [
    'English Residences photos',
    'English Residences floor plans',
    'Midtown Las Vegas condos gallery',
    'Arts District luxury condos',
    'condo-hotel Las Vegas',
    'English Hotel residences',
  ],
  alternates: {
    canonical: 'https://www.midtownvegascondos.com/neighborhood/english-residences/gallery',
  },
}

// Property images - optimized for SEO and accessibility
const propertyImages = [
  {
    src: '/images/midtown/blvd-aerial-rendering.jpg',
    alt: 'Aerial nighttime view of BLVD mixed-use complex in Midtown Las Vegas Arts District showing retail, dining, and entertainment spaces with vibrant lighting',
    caption: 'The vibrant BLVD complex at 921 S Main Street showcases Midtown\'s urban sophistication with retail, dining, and entertainment spaces',
  },
  {
    src: '/images/midtown/Kitchen_final-scaled_midtown.jpg',
    alt: 'Luxury gourmet kitchen in The English Residences featuring premium appliances, custom cabinetry, and modern design in Midtown Las Vegas',
    caption: 'Gourmet kitchens feature top-of-the-line appliances and custom cabinetry, creating ideal spaces for entertaining and daily living',
  },
  {
    src: '/images/midtown/IMG_3463.JPG',
    alt: 'Interior view of luxury condominium residence in The English Residences at 921 S Main Street, Midtown Las Vegas Arts District',
    caption: 'Contemporary interior design with premium finishes and thoughtful layouts that maximize space and functionality',
  },
  {
    src: '/images/midtown/IMG_3464.JPG',
    alt: 'Modern living space in The English Residences featuring floor-to-ceiling windows and Arts District views in Midtown Las Vegas',
    caption: 'Open-concept living spaces with floor-to-ceiling windows showcase panoramic views of the vibrant Arts District',
  },
  {
    src: '/images/midtown/IMG_3469.JPG',
    alt: 'Luxury bedroom and private space in The English Residences condo-hotel unit in Midtown Las Vegas Arts District',
    caption: 'Spacious master bedrooms feature premium finishes and abundant natural light, creating peaceful retreats within the urban setting',
  },
  {
    src: '/images/midtown/IMG_3470.JPG',
    alt: 'Interior design detail of The English Residences luxury condominium showing contemporary finishes and modern architecture',
    caption: 'Thoughtful design elements throughout each residence reflect Midtown\'s industrial-chic aesthetic while maintaining sophisticated elegance',
  },
  {
    src: '/images/midtown/midtown-gallery-6.jpg',
    alt: 'Gallery view of Midtown Las Vegas Arts District neighborhood showcasing the vibrant urban development and cultural destinations',
    caption: 'Midtown\'s transformation from industrial hub to cultural destination is visible throughout the neighborhood',
  },
  {
    src: '/images/midtown/midtown-gallery-tour.jpg',
    alt: 'Tour view of Midtown Las Vegas Arts District showing walkable streets, galleries, and residential developments',
    caption: 'Walkable streets connect residents to galleries, restaurants, and cultural venues throughout the Arts District',
  },
  {
    src: '/images/midtown/design 04_new 2.jpg',
    alt: 'Design detail and architectural feature in The English Residences luxury condominium development in Midtown Las Vegas',
    caption: 'Contemporary design elements create spaces that are both beautiful and functional',
  },
  {
    src: '/images/midtown/design 05_new 2.jpg',
    alt: 'Interior design and architectural detail showcasing luxury finishes in The English Residences Midtown Las Vegas',
    caption: 'Premium materials and craftsmanship ensure every aspect of the residence meets the highest standards',
  },
  {
    src: '/images/midtown/photo_002.webp',
    alt: 'Luxury condominium property in Midtown Las Vegas Arts District near The English Residences',
    caption: 'Luxury condominium living in the heart of the Arts District, steps from galleries, restaurants, and cultural venues',
  },
  {
    src: '/images/midtown/photo_003.webp',
    alt: 'Modern residential and commercial development in Midtown Las Vegas Arts District featuring contemporary architecture',
    caption: 'Modern residential and commercial spaces in Midtown blend contemporary design with the neighborhood\'s artistic character',
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
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Property Gallery
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Explore The English Residences through our comprehensive gallery showcasing the luxury finishes, contemporary design, and 
            stunning Arts District views that define these exceptional condo-hotel units. Each residence features thoughtfully designed 
            interiors that blend modern elegance with practical functionality, creating spaces that are both beautiful and livable.
          </p>
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Living Spaces and Design</h3>
              <p className="text-base text-slate-600 mb-3 leading-relaxed">
                The English Residences feature open-concept living spaces designed to maximize natural light and create a sense of spaciousness. 
                Floor-to-ceiling windows showcase panoramic views of the Arts District, bringing the neighborhood's vibrant energy into your home. 
                Contemporary design elements, including exposed concrete accents and custom lighting, reflect Midtown's industrial-chic aesthetic 
                while maintaining sophisticated elegance.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                High-end finishes throughout create a luxurious atmosphere, from premium flooring to custom cabinetry and designer fixtures. 
                Each residence is thoughtfully designed to balance aesthetic appeal with practical functionality, ensuring that beauty and 
                livability coexist. The design philosophy emphasizes quality materials and craftsmanship, creating spaces that will remain 
                beautiful and functional for years to come.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Kitchen and Dining</h3>
              <p className="text-base text-slate-600 mb-3 leading-relaxed">
                Gourmet kitchens feature top-of-the-line appliances from premium brands like Sub-Zero and Wolf, supporting both casual 
                entertaining and serious cooking. Spacious countertops and custom cabinetry provide ample workspace and storage, while 
                thoughtful layouts ensure efficient workflow. The kitchens seamlessly connect to living and dining areas, creating ideal 
                spaces for entertaining and daily living.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Whether you're preparing a quick breakfast before work or hosting an elaborate dinner party, the kitchens in The English 
                Residences accommodate diverse culinary needs. The proximity to{' '}
                <Link href="/neighborhood/pepper-club" className="text-slate-900 font-semibold hover:underline">
                  The Pepper Club
                </Link>
                {' '}restaurant also provides the option of exceptional dining without leaving the building, creating a flexible approach 
                to meals that supports both cooking and dining out.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bedrooms and Private Spaces</h3>
              <p className="text-base text-slate-600 mb-3 leading-relaxed">
                Master bedrooms feature spacious layouts with premium finishes and abundant natural light. Thoughtful design creates peaceful 
                retreats that support rest and relaxation, while generous closet space accommodates storage needs. The bedroom design emphasizes 
                comfort and tranquility, creating spaces that serve as true sanctuaries within the urban setting.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Additional bedrooms, where applicable, provide flexibility for guests, home offices, or additional living space. The thoughtful 
                design ensures that every room serves a purpose, maximizing the utility of each square foot. Whether you're using bedrooms for 
                sleeping, working, or entertaining, the layouts accommodate diverse needs while maintaining aesthetic consistency throughout the residence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bathrooms and Spa Features</h3>
              <p className="text-base text-slate-600 mb-3 leading-relaxed">
                Spa-inspired bathrooms feature premium fixtures, designer finishes, and thoughtful layouts that create a retreat-like atmosphere. 
                Large showers, soaking tubs where available, and dual vanities provide luxury amenities that enhance daily routines. The bathroom 
                design emphasizes relaxation and rejuvenation, creating spaces that serve as personal sanctuaries within the home.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Premium materials and finishes throughout the bathrooms create a sense of luxury that complements the overall residence design. 
                The attention to detail in these spaces reflects the commitment to quality that defines The English Residences, ensuring that 
                every aspect of the residence meets the highest standards of luxury and functionality.
              </p>
            </div>
          </div>
        </div>
        <ImageGallery images={propertyImages} />
      </section>

      {/* Floor Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Floor Plans
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Explore The English Residences floor plans to understand the layout, square footage, and design of each unit type. From efficient 
              studios perfect for part-time residents to spacious penthouses ideal for full-time living, each floor plan is thoughtfully designed 
              to maximize space and functionality while maintaining luxury standards.
            </p>
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Studio and One-Bedroom Units</h3>
                <p className="text-base text-slate-600 mb-3 leading-relaxed">
                  Studio and one-bedroom units at The English Residences offer efficient layouts that maximize functionality within compact spaces. 
                  Open-concept designs create a sense of spaciousness, while thoughtful storage solutions ensure that every square foot serves a 
                  purpose. These units are ideal for part-time residents, investors seeking rental income, or anyone prioritizing location and 
                  amenities over square footage.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  The efficient layouts demonstrate thoughtful design that balances living space, storage, and functionality. Premium finishes 
                  and luxury amenities ensure that even the smallest units maintain the high standards that define The English Residences. These 
                  units offer an excellent entry point into Midtown living while providing access to all the neighborhood's cultural amenities 
                  and the building's luxury services.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Two-Bedroom and Penthouse Units</h3>
                <p className="text-base text-slate-600 mb-3 leading-relaxed">
                  Two-bedroom and penthouse units provide spacious layouts ideal for full-time residents or those seeking more living space. 
                  These units feature separate bedrooms, additional bathrooms, and expanded living areas that accommodate comfortable daily living. 
                  The additional space allows for home offices, guest accommodations, or simply more room to enjoy the luxury amenities.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  Penthouse units offer the ultimate in luxury living, with premium finishes, expansive layouts, and often, enhanced views of 
                  the Arts District. These units represent the pinnacle of The English Residences experience, combining luxury amenities with 
                  generous living space. The thoughtful design ensures that even the largest units maintain the intimate, residential feel that 
                  distinguishes the building from typical hotel properties.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Understanding Floor Plan Options</h3>
                <p className="text-base text-slate-600 mb-3 leading-relaxed">
                  When evaluating floor plans, consider how you'll use the space—are you seeking a primary residence, part-time home, or 
                  investment property? Studio and one-bedroom units work well for part-time residents and investors, while two-bedroom and 
                  penthouse units better accommodate full-time living or those who need more space. The flexible layouts accommodate diverse 
                  needs, from home offices to guest accommodations.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  Contact Dr. Jan Duffy at (702) 500-1980 to discuss which floor plan best matches your lifestyle and investment goals. She can 
                  provide detailed information about available units, pricing, and how different floor plans support different usage patterns. 
                  Her expertise helps you understand not just the square footage but how each layout supports your specific needs and preferences.
                </p>
              </div>
            </div>
          </div>
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

