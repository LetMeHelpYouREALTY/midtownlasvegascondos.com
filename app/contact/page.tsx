'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Form submission:', formData)
    setStatus('success')

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
      setStatus('idle')
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Why Work With Dr. Jan Duffy?</h2>
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

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="(702) 500-1955"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-slate-900 mb-2">
                  I'm interested in...
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                >
                  <option value="">Select an option</option>
                  <option value="english-residences">The English Residences</option>
                  <option value="plaza-tower">Plaza Tower</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="neighborhood">Learning About the Neighborhood</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
                  placeholder="Tell us about your interest in Midtown..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center">
                  Thank you! We'll be in touch soon.
                </p>
              )}
            </form>
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
                  Address
                </h3>
                <p className="text-slate-600 ml-9">
                  921 S Main St<br />
                  Las Vegas, NV 89101
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
                  <a href="tel:7025001955" className="hover:text-slate-900 transition-colors">
                    (702) 500-1955
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
                  <a href="mailto:DrJanSells@MidtownLasVegasCondos.com" className="hover:text-slate-900 transition-colors">
                    DrJanSells@MidtownLasVegasCondos.com
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
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>

              {/* Map Image */}
              <div className="mt-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/midtown/blvd-aerial-rendering.jpg"
                    alt="Aerial view of Midtown Las Vegas Arts District location showing BLVD complex at 921 S Main Street, The English Hotel, and surrounding neighborhood where Dr. Jan Duffy serves real estate clients"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Start Property Search
            </a>
            <a
              href="tel:7025001955"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call (702) 500-1955
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

