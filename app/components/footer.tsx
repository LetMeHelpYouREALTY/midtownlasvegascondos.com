import Link from 'next/link'
import { Newsletter } from './newsletter'
import { OFFICIAL_MIDTOWN_SITE, REAL_ESTATE_SITE, NAV_LABELS } from '@/lib/site-persona'
import { SiteLogo } from './site-logo'

export function Footer() {
  const navigation = [
    {
      name: 'Neighborhood',
      items: [
        { name: NAV_LABELS.neighborhoodGuide, href: '/neighborhood' },
        { name: 'The English Residences', href: '/neighborhood/english-residences' },
        { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza' },
        { name: 'KJ\'s Restaurant', href: '/neighborhood/kjs-restaurant' },
        { name: 'The English Hotel', href: '/neighborhood/english-hotel' },
        { name: 'First Fridays Las Vegas', href: '/neighborhood/first-fridays' },
        { name: 'Las Vegas Arts District', href: '/neighborhood/arts-district' },
        { name: 'Midtown Run Club', href: '/neighborhood/run-club' },
      ],
    },
    {
      name: 'Explore',
      items: [
        { name: 'Dine', href: '/midtown/dine' },
        { name: 'Shop', href: '/midtown/shop' },
        { name: 'Live', href: '/midtown/live' },
        { name: 'Things to Do', href: '/midtown/things-to-do-in-las-vegas' },
      ],
    },
    { name: 'Events', href: '/events' },
    { name: 'News', href: '/news' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-2">Midtown Market Updates</h3>
          <p className="text-center text-sm text-slate-400 mb-6 max-w-xl mx-auto">
            Listings, buyer tips, and neighborhood news from {REAL_ESTATE_SITE.agentName} — not the official Midtown events calendar.
          </p>
          <Newsletter />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <SiteLogo variant="footer" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Navigation Links */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-lg mb-4">Navigation</h4>
              <div className="grid grid-cols-2 gap-4">
                {navigation.map((item) =>
                  'items' in item && item.items ? (
                    <div key={item.name}>
                      <div className="font-semibold mb-2">{item.name}</div>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {item.items.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="hover:text-white transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : 'href' in item ? (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="font-semibold hover:text-slate-300 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-lg mb-4">CONTACT US</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  {REAL_ESTATE_SITE.address.street}<br />
                  {REAL_ESTATE_SITE.address.city}, {REAL_ESTATE_SITE.address.region} {REAL_ESTATE_SITE.address.postalCode}
                </p>
                <p>
                  <a href={REAL_ESTATE_SITE.phoneTel} className="hover:text-white transition-colors">
                    {REAL_ESTATE_SITE.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${REAL_ESTATE_SITE.email}`} className="hover:text-white transition-colors">
                    {REAL_ESTATE_SITE.email}
                  </a>
                </p>
                <p>
                  Sun-Sat: 8 am – 8 pm
                </p>
                <p className="pt-2 border-t border-slate-800">
                  <span className="text-slate-400 block mb-1">Official neighborhood site (events & dining directory):</span>
                  <a
                    href={OFFICIAL_MIDTOWN_SITE.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-slate-200 transition-colors"
                  >
                    {OFFICIAL_MIDTOWN_SITE.url.replace('https://', '')} ↗
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/company/downtown-las-vegas-condos-and-homes-for-sale"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-slate-400 border-t border-slate-800 pt-8 space-y-2">
            <p>
              © {new Date().getFullYear()} {REAL_ESTATE_SITE.name} | {REAL_ESTATE_SITE.agentName} {REAL_ESTATE_SITE.license}. All Rights Reserved.
            </p>
            <p className="text-xs text-slate-500">
              This site is independent real estate guidance — not affiliated with {OFFICIAL_MIDTOWN_SITE.name} ({OFFICIAL_MIDTOWN_SITE.url}).
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
