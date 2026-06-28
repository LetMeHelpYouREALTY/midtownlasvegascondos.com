import { Metadata } from 'next'
import Link from 'next/link'
import { CalendlyLink } from '../components/calendly-link'
import { Breadcrumb } from '../components/breadcrumb'

export const metadata: Metadata = {
  title: 'FAQ | Midtown Las Vegas Condos - Your Questions Answered',
  description:
    'Frequently asked questions about living in Midtown Las Vegas, The English Residences, Arts District real estate, and working with Dr. Jan Duffy. Call (702) 500-1980.',
  keywords:
    'Midtown Las Vegas FAQ, Arts District questions, English Residences information, Las Vegas condo questions',
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Midtown Las Vegas Condos',
  alternates: {
    canonical: 'https://www.midtownvegascondos.com/faq',
  },
  openGraph: {
    title: 'FAQ | Midtown Las Vegas Condos',
    description: 'Frequently asked questions about living in Midtown Las Vegas and The English Residences.',
    type: 'website',
    url: 'https://www.midtownvegascondos.com/faq',
  },
}

const faqs = [
  {
    category: 'The English Residences',
    questions: [
      {
        q: 'What are The English Residences?',
        a: 'The English Residences are luxury condo-hotel units within The English Hotel in Midtown Las Vegas. Owners can use their residence when they want and earn income when they\'re away through our professional hotel management program.',
      },
      {
        q: 'How does the income generation work?',
        a: 'When you\'re not using your residence, it enters the hotel rental pool managed by The English Hotel. You receive a percentage of the rental income, similar to a traditional rental property but with professional hotel management handling all bookings, cleaning, and guest services.',
      },
      {
        q: 'What are the price ranges for English Residences?',
        a: 'English Residences typically range from approximately $250,000 for studios to $800,000+ for penthouse units. Contact Dr. Jan at (702) 500-1980 for current availability and pricing.',
      },
      {
        q: 'Can I use my residence whenever I want?',
        a: 'Yes! As the owner, you have the flexibility to block out dates for personal use. The hotel management system makes it easy to reserve your unit through an owner portal.',
      },
    ],
  },
  {
    category: 'Midtown & Arts District',
    questions: [
      {
        q: 'Where exactly is Midtown Las Vegas?',
        a: 'Midtown is located just north of Charleston Boulevard in the heart of the Las Vegas Arts District, centered around 921 S Main St. It\'s a walkable neighborhood with galleries, restaurants, and entertainment.',
      },
      {
        q: 'What is First Friday?',
        a: 'First Friday is Las Vegas\'s largest monthly art event, held on the first Friday of every month from 5 PM to 11 PM. The Arts District comes alive with gallery openings, live music, food trucks, and street performances.',
      },
      {
        q: 'Is the Arts District safe?',
        a: 'Yes! The Arts District has undergone significant revitalization and is a vibrant, active community. Like any urban neighborhood, we recommend normal city awareness. The area has good lighting, active foot traffic during events, and growing residential presence.',
      },
      {
        q: 'What amenities are walkable from Midtown?',
        a: 'Midtown offers walkable access to 30+ art galleries, dozens of locally-owned restaurants and cafes, Midtown Plaza shopping, The Pepper Club restaurant, coffee shops, bars, and the entire 18b Arts District. Downtown Las Vegas is also nearby.',
      },
    ],
  },
  {
    category: 'Buying Process',
    questions: [
      {
        q: 'How do I start my home search in Midtown?',
        a: 'Start by browsing available properties at drjanduffy.realscout.com, then contact Dr. Jan at (702) 500-1980 to schedule a personal tour. Dr. Jan specializes in Midtown and Arts District properties and can help you find the perfect home.',
      },
      {
        q: 'What types of properties are available?',
        a: 'Midtown offers various property types including luxury condos, condo-hotels (The English Residences), townhouses, and single-family homes. Prices range from $150,000 to $3,000,000+ depending on size and location.',
      },
      {
        q: 'Can I see properties in person?',
        a: 'Absolutely! Dr. Jan provides personalized tours of Midtown and shows available properties. Schedule your tour by calling (702) 500-1980 or emailing DrJanSells@MidtownVegasCondos.com.',
      },
      {
        q: 'How long does the buying process take?',
        a: 'Typically 30-45 days from offer acceptance to closing, though this can vary. Dr. Jan will guide you through every step including financing, inspection, and closing. Cash purchases can close faster.',
      },
    ],
  },
  {
    category: 'Living in Midtown',
    questions: [
      {
        q: 'Is there parking in Midtown?',
        a: 'Yes! Most properties include assigned parking. Street parking is also available throughout the neighborhood. The English Residences include parking for residents, and many newer developments have parking structures.',
      },
      {
        q: 'Are there HOA fees?',
        a: 'Most condos and townhouses have HOA fees covering common area maintenance, amenities, and building insurance. Low-rise Vegas condos often run $50–$150/month; Arts District high-rises commonly $400–$800+. See our Las Vegas condo HOA fees guide and ask Dr. Jan to review HOA documents for any property you consider.',
      },
      {
        q: 'Is the Arts District walkable?',
        a: 'Yes — Walk Score approximately 86. Midtown residents walk to galleries, restaurants, First Friday, and Midtown Plaza. See our walkable Arts District living guide for relocation tips.',
      },
      {
        q: 'What about schools?',
        a: 'Midtown is primarily an arts and entertainment district with fewer families, but Las Vegas has various public and private school options nearby. Contact Dr. Jan for information about schools in the area.',
      },
      {
        q: 'Is Midtown pet-friendly?',
        a: 'Many Midtown properties are pet-friendly, though policies vary by building. The neighborhood itself is very walkable for dogs, with several pet-friendly restaurants and cafes. Check specific property pet policies with Dr. Jan.',
      },
    ],
  },
  {
    category: 'Investment Questions',
    questions: [
      {
        q: 'Is Midtown a good investment?',
        a: 'Midtown has shown strong growth as Las Vegas\'s cultural center. The area attracts tourists, young professionals, and artists. The English Residences offer unique investment potential with rental income, while the neighborhood continues to develop.',
      },
      {
        q: 'Can I rent out my condo?',
        a: 'Rental policies vary by building. The English Residences are specifically designed for hotel rental income. Other buildings may allow traditional long-term or short-term rentals. Check specific HOA rules with Dr. Jan.',
      },
      {
        q: 'What\'s the rental demand like?',
        a: 'Midtown has strong rental demand from young professionals, artists, and tourists visiting for events like First Friday. The English Residences benefit from The English Hotel\'s established guest base.',
      },
    ],
  },
]

export default function FAQPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Everything you need to know about Midtown Las Vegas condos and The English Residences
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From property prices and condo-hotel ownership to First Friday parking and neighborhood culture, get the information you need.
          </p>
        </div>
      </section>

      {/* FAQ Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <div className="prose prose-lg text-slate-600 space-y-4 mb-12">
          <p>
            Moving to or investing in Midtown Las Vegas represents a significant decision, and we understand you'll have questions about 
            everything from property types and pricing to neighborhood culture and daily living logistics. This comprehensive FAQ addresses 
            the most common questions we receive from prospective buyers, investors, and residents curious about Arts District living. Whether 
            you're wondering about condo-hotel ownership mechanics,{' '}
            <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
              First Friday
            </Link>
            {' '}parking strategies, property appreciation trends, or simply 
            what it's like to wake up in the heart of Las Vegas's creative center, you'll find answers below.
          </p>
          <p>
            Midtown attracts diverse buyers with varying priorities. Some seek walkable urban convenience after years of suburban car-dependent 
            living. Others prioritize investment properties with income generation potential. Creative professionals want proximity to galleries 
            and cultural events. Retirees desire vibrant community without overwhelming tourist crowds. Whatever brings you to explore Midtown, 
            understanding the neighborhood's unique characteristics helps determine whether it matches your lifestyle and financial goals.
          </p>
          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Understanding Midtown's Appeal</h3>
              <p className="mb-3">
                Midtown's appeal extends beyond typical real estate considerations. The neighborhood offers a unique lifestyle that combines 
                urban convenience with cultural richness. Residents enjoy walkable access to over 30 art galleries, chef-driven restaurants, 
                and monthly{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                {' '}celebrations that draw thousands of visitors. This cultural infrastructure creates a sense of community and belonging 
                that's rare in Las Vegas, where many neighborhoods lack genuine gathering spaces and shared experiences.
              </p>
              <p>
                The neighborhood's transformation from industrial zone to cultural destination reflects broader trends in urban development. 
                Cities nationwide are recognizing the value of walkable, mixed-use neighborhoods that support both residents and local businesses. 
                Midtown exemplifies this model, demonstrating how creative industries can drive economic development while preserving authentic 
                character. This success story attracts both residents seeking this lifestyle and investors recognizing the neighborhood's 
                appreciation potential.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The English Residences Condo-Hotel Model</h3>
              <p className="mb-3">
                The{' '}
                <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                  English Residences
                </Link>
                {' '}condo-hotel model generates particular interest and questions. How does revenue sharing work? What percentage 
                of HOA fees does rental income cover? Can you use your unit whenever you want despite hotel management? These questions deserve detailed 
                answers beyond marketing generalities, which is why we provide specific information about ownership structure, historical performance, 
                and realistic expectations. Transparency helps buyers make informed decisions aligned with their situations.
              </p>
              <p>
                Condo-hotel ownership represents an innovative approach to real estate that combines personal use with investment potential. 
                Unlike traditional condos where units sit vacant when owners are away, condo-hotels allow owners to generate rental income 
                through professional hotel management. This model appeals to investors seeking passive income, part-time residents who want 
                flexibility, and anyone interested in the unique benefits of both ownership and hotel services. The{' '}
                <Link href="/neighborhood/english-hotel" className="text-slate-900 font-semibold hover:underline">
                  English Hotel
                </Link>
                {' '}management ensures professional marketing, guest services, and maintenance, while owners retain full ownership rights 
                and can use their units whenever desired.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Experiencing Midtown Before You Buy</h3>
              <p className="mb-3">
                Beyond specific FAQ answers, understanding Midtown requires experiencing the neighborhood. We encourage potential residents to visit 
                during{' '}
                <Link href="/neighborhood/first-fridays" className="text-slate-900 font-semibold hover:underline">
                  First Friday
                </Link>
                , walk the{' '}
                <Link href="/neighborhood/arts-district" className="text-slate-900 font-semibold hover:underline">
                  Arts District
                </Link>
                , dine at local restaurants, and explore galleries before committing to property purchases. 
                Many buyers schedule multiple visits across different days and times to observe neighborhood rhythms—quiet weekday mornings versus energetic 
                Friday evenings, for example. This hands-on research, combined with Dr. Jan's expert guidance, ensures you find the perfect Midtown property 
                for your unique needs.
              </p>
              <p>
                Can't find your question below? Contact Dr. Jan directly at (702) 500-1980 for personalized answers to your specific 
                questions about Midtown living and real estate opportunities. Dr. Jan provides detailed consultation for serious buyers, including property 
                comparisons, market analysis, financing options, and rental income projections for{' '}
                <Link href="/neighborhood/english-residences" className="text-slate-900 font-semibold hover:underline">
                  English Residences
                </Link>
                . Her expertise covers not just 
                individual properties but the broader Midtown context—understanding how location within the neighborhood affects lifestyle, how proximity to 
                First Friday impacts weekend energy levels, and how different buildings' character attracts different demographics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-200">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-slate-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-700 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-white/90 mb-8">
            Dr. Jan is here to help! Get personalized answers about Midtown living and available properties.
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

      {/* Browse Properties CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Find Your Home?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Browse available properties in Midtown and the Arts District
          </p>
          <a
            href="http://drjanduffy.realscout.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Search Properties
          </a>
        </div>
      </section>
    </div>
  )
}

