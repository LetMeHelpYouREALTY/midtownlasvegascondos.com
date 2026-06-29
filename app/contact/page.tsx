import Link from 'next/link'
import { Metadata } from 'next'
import { AgentProfilePhoto } from '../components/agent-profile-photo'
import { CalendlyInlineWidget } from '../components/calendly-inline-widget'
import { CalendlyLink } from '../components/calendly-link'
import { Breadcrumb } from '../components/breadcrumb'
import { RealScoutSection } from '../components/realscout-section'
import { REAL_ESTATE_SITE, formatPostalAddress } from '@/lib/site-persona'

const officeMapQuery = encodeURIComponent(formatPostalAddress(REAL_ESTATE_SITE.address))
const midtownMapQuery = encodeURIComponent(formatPostalAddress(REAL_ESTATE_SITE.midtownShowroom))

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy',
  description:
    `Contact ${REAL_ESTATE_SITE.agentName} for Midtown Las Vegas condos and English Residences. Call ${REAL_ESTATE_SITE.phone}, email ${REAL_ESTATE_SITE.email}, or visit ${REAL_ESTATE_SITE.address.street}.`,
  keywords: [
    'contact Dr. Jan Duffy',
    'Midtown Las Vegas real estate agent',
    'Arts District realtor',
    'Las Vegas condo specialist',
    'schedule property tour',
  ],
  authors: [{ name: REAL_ESTATE_SITE.agentName }],
  creator: REAL_ESTATE_SITE.agentName,
  publisher: REAL_ESTATE_SITE.name,
  alternates: {
    canonical: `${REAL_ESTATE_SITE.url}/contact`,
  },
  openGraph: {
    title: `Contact ${REAL_ESTATE_SITE.agentName}`,
    description: REAL_ESTATE_SITE.seo.defaultDescription,
    type: 'website',
    url: `${REAL_ESTATE_SITE.url}/contact`,
  },
}

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Get in touch to learn more about luxury living in Midtown
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Dr. Jan Duffy specializes in Midtown Las Vegas real estate and is ready to help you find your perfect home 
            or investment property in the Arts District. Schedule a personal consultation today.
          </p>
        </div>
      </section>

      {/* Why Contact Dr. Jan */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Why Work With Dr. Jan Duffy?</h2>
          
          <div className="flex justify-center mb-8">
            <AgentProfilePhoto size="lg" priority />
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p>
              Dr. Jan Duffy brings unparalleled expertise to Midtown Las Vegas real estate. With deep knowledge of the Arts District, 
              The English Residences, and surrounding neighborhoods, Dr. Jan provides personalized service that goes beyond typical 
              real estate transactions. Whether you're a first-time buyer exploring urban living, an investor seeking income-generating 
              properties, or a relocating professional discovering Las Vegas's cultural center, Dr. Jan's hands-on approach ensures 
              you find the perfect match for your lifestyle and financial goals.
            </p>
            <p>
              The consultation process begins with understanding your unique needs. Are you looking for walkable access to galleries 
              and restaurants? Interested in{' '}
              <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                condo-hotel ownership
              </Link>{' '}
              with rental income potential? Need proximity to downtown Las Vegas 
              or the Strip for work? Dr. Jan takes time to discuss your priorities, budget, and timeline, then provides curated property 
              recommendations that align with your criteria. This includes access to off-market opportunities, upcoming listings before 
              they're publicly available, and insider knowledge about neighborhood developments that may impact property values.
            </p>
            <p>
              Every property tour is personalized and informative. Dr. Jan doesn't just show you condos—she shares detailed information 
              about HOA fees, building amenities, parking options, nearby restaurants and galleries, and the character of each micro-neighborhood 
              within Midtown. You'll learn about{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>{' '}
              accessibility, proximity to{' '}
              <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                Midtown Plaza's dining scene
              </Link>
              , and how different 
              locations balance urban energy with residential tranquility. For{' '}
              <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                English Residences
              </Link>{' '}
              buyers, Dr. Jan explains the condo-hotel 
              revenue sharing model, historical occupancy rates, and owner benefits in detail, ensuring you fully understand this unique 
              ownership structure.
            </p>
            <p>
              The service continues after purchase. Dr. Jan connects clients with trusted local service providers, from mortgage brokers 
              and home inspectors to movers and interior designers familiar with Midtown's aesthetic. Need recommendations for the best 
              coffee shop walking distance from your new condo? Want to know which{' '}
              <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                First Friday
              </Link>
              {' '}galleries are must-visits? Dr. Jan's 
              commitment extends beyond closing to help you truly become part of the Midtown community. Contact her today to start your 
              Arts District living journey with confidence and expert guidance.
            </p>
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Personalized Property Matching</h3>
                <p className="mb-3">
                  Dr. Jan's approach to property matching goes beyond simple price and location criteria. She takes time to understand 
                  your lifestyle, work patterns, and long-term goals. Are you seeking a primary residence or investment property? Do you 
                  prioritize walkability to{' '}
                  <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                    First Friday
                  </Link>
                  {' '}events, proximity to{' '}
                  <Link href="/neighborhood/midtown-plaza" className="text-slate-900 font-semibold hover:underline">
                    Midtown Plaza
                  </Link>
                  , or access to{' '}
                  <Link href="/neighborhood/english-hotel" className="text-slate-900 font-semibold hover:underline">
                    The English Hotel
                  </Link>
                  {' '}amenities? Understanding these preferences allows Dr. Jan to recommend properties that truly match your needs.
                </p>
                <p>
                  For{' '}
                  <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                    English Residences
                  </Link>
                  {' '}buyers, Dr. Jan provides detailed analysis of the condo-hotel model, including revenue-sharing terms, 
                  historical occupancy rates, and owner usage policies. She explains the unique benefits of this ownership structure 
                  while ensuring you understand all aspects of the arrangement. This comprehensive approach prevents surprises and ensures 
                  you make informed decisions aligned with your goals.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Market Expertise and Insider Knowledge</h3>
                <p className="mb-3">
                  Dr. Jan's deep knowledge of Midtown extends beyond current listings to market trends, upcoming developments, and 
                  neighborhood evolution. She understands how projects like the Plaza Tower or infrastructure improvements impact property 
                  values. This insight helps clients time purchases optimally and identify opportunities before they become widely known.
                </p>
                <p>
                  Her relationships with developers, property managers, and other real estate professionals provide access to off-market 
                  opportunities and pre-listing notifications. This insider advantage is particularly valuable in Midtown's competitive 
                  market, where desirable properties may receive multiple offers. Dr. Jan's network ensures you see the best properties 
                  as soon as they become available.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Post-Purchase Support</h3>
                <p className="mb-3">
                  Dr. Jan's service doesn't end at closing. She connects new owners with trusted local service providers, from mortgage 
                  brokers and home inspectors to movers and interior designers familiar with Midtown's aesthetic. Her recommendations 
                  help you quickly settle into your new home and become part of the community.
                </p>
                <p>
                  Need recommendations for the best coffee shop within walking distance? Want to know which{' '}
                  <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                    First Friday
                  </Link>
                  {' '}galleries are must-visits? Looking for reliable contractors or property management services? Dr. Jan's local 
                  knowledge extends beyond real estate to the broader Midtown community, ensuring you have the resources you need to 
                  thrive in your new neighborhood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Tour & Contact Info */}
      <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Schedule Tour with Calendly */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Schedule Your In-Person Consultation
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Book directly with Dr. Jan Duffy — in-person real estate consultation at the office or a Midtown property tour.
            </p>
            <CalendlyInlineWidget height="680px" />
            <p className="text-sm text-slate-500 text-center mt-4">
              Or{' '}
              <CalendlyLink text="open scheduling in a popup" variant="link" className="text-slate-700" />
            </p>
            <div className="mt-6 p-4 bg-slate-100 rounded-lg">
              <p className="text-sm text-slate-600">
                <strong className="text-slate-900">What to expect:</strong> Dr. Jan will discuss your goals, tour available Midtown and Arts District properties, and answer questions about English Residences, HOA fees, and neighborhood walkability.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Office
                </h3>
                <p className="text-slate-600 ml-9">
                  {REAL_ESTATE_SITE.address.street}<br />
                  {REAL_ESTATE_SITE.address.city}, {REAL_ESTATE_SITE.address.region}{' '}
                  {REAL_ESTATE_SITE.address.postalCode}
                </p>
                <p className="text-sm text-slate-500 ml-9 mt-2">
                  Same office hub as Nevada Real Estate Group — consultations and paperwork by appointment.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Midtown property tours
                </h3>
                <p className="text-slate-600 ml-9">
                  {REAL_ESTATE_SITE.midtownShowroom.street}<br />
                  {REAL_ESTATE_SITE.midtownShowroom.city}, {REAL_ESTATE_SITE.midtownShowroom.region}{' '}
                  {REAL_ESTATE_SITE.midtownShowroom.postalCode}
                </p>
                <p className="text-sm text-slate-500 ml-9 mt-2">
                  {REAL_ESTATE_SITE.midtownShowroom.label} — English Residences & Arts District showings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Phone
                </h3>
                <p className="text-slate-600 ml-9">
                  <a href="tel:7025001980" className="hover:text-slate-900 transition-colors">
                    (702) 500-1980
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </h3>
                <p className="text-slate-600 ml-9">
                  <a href="mailto:DrJanSells@MidtownVegasCondos.com" className="hover:text-slate-900 transition-colors">
                    DrJanSells@MidtownVegasCondos.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Office Hours
                </h3>
                <p className="text-slate-600 ml-9">
                  Sunday - Thursday: 9:00 AM - 5:00 PM<br />
                  Friday - Saturday: Closed<br />
                  Saturday - Sunday: Closed
                </p>
              </div>

              {/* Google Maps Locator */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  Office location
                </h3>
                <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                  <iframe
                    src={`https://www.google.com/maps?q=${officeMapQuery}&output=embed&hl=en`}
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${formatPostalAddress(REAL_ESTATE_SITE.address)} - Dr. Jan Duffy office`}
                  />
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${officeMapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:underline font-medium"
                  >
                    Get directions to the office →
                  </a>
                  {' · '}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${midtownMapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:underline font-medium"
                  >
                    Midtown tour meeting point →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RealScoutSection
        listingsTitle="Properties Dr. Jan Can Show You Today"
        listingsDescription="Browse Midtown and Arts District listings before your tour — then call (702) 500-1980 to schedule."
        className="bg-white"
      />

      {/* Additional CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Schedule Your Personal Tour
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience Midtown in person. Dr. Jan will provide a personalized tour 
            of the neighborhood and show you available residences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyLink text="Schedule Your Walk-to-Everything Tour" variant="primary" />
            <a
              href="tel:7025001980"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call (702) 500-1980
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

