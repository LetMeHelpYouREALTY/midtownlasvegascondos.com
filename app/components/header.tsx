'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { OFFICIAL_MIDTOWN_SITE, NAV_LABELS, REAL_ESTATE_SITE } from '@/lib/site-persona'
import { SiteLogo } from './site-logo'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    {
      name: 'Neighborhood',
      items: [
        { name: NAV_LABELS.neighborhoodGuide, href: '/neighborhood' },
        { name: 'The English Residences', href: '/neighborhood/english-residences' },
        { name: 'Midtown Plaza', href: '/neighborhood/midtown-plaza' },
        { name: 'The English Hotel', href: '/neighborhood/english-hotel' },
        { name: 'KJ\'s Restaurant', href: '/neighborhood/kjs-restaurant' },
        { name: 'The Pepper Club', href: '/neighborhood/pepper-club' },
        { name: 'Las Vegas Arts District', href: '/neighborhood/arts-district' },
        { name: 'First Fridays Las Vegas', href: '/neighborhood/first-fridays' },
        { name: 'EV Vehicle Program', href: '/neighborhood/ev-program' },
        { name: 'Midtown Run Club', href: '/neighborhood/run-club' },
        { name: 'Dine', href: '/midtown/dine' },
        { name: 'Shop', href: '/midtown/shop' },
        { name: 'Live', href: '/midtown/live' },
        { name: 'Stay', href: '/midtown/stay' },
      ],
    },
    {
      name: NAV_LABELS.officialMidtown.replace(' ↗', ''),
      href: OFFICIAL_MIDTOWN_SITE.url,
    },
    { name: 'Search Properties', href: 'http://drjanduffy.realscout.com/' },
    {
      name: 'Resources',
      items: [
        { name: 'Midtown Real Estate', href: '/midtown-real-estate' },
        { name: "Buyer's Guide", href: '/buyers-guide-midtown' },
        { name: 'All Buyer Guides', href: '/guides' },
        { name: 'Investment Properties', href: '/investment-properties' },
        { name: 'Arts District Guide', href: '/arts-district-guide' },
        { name: 'HOA Fees Guide', href: '/guides/las-vegas-condo-hoa-fees' },
        { name: 'Walkable Living Guide', href: '/guides/walkable-arts-district-living' },
        { name: 'Rent vs Buy Guide', href: '/guides/worth-buying-condo-las-vegas-now' },
        { name: 'Midtown vs Strip', href: '/guides/midtown-vs-strip-condo-living' },
      ],
    },
    { name: NAV_LABELS.eventsGuide.replace(' (for buyers)', ''), href: '/events' },
    { name: NAV_LABELS.newsForBuyers, href: '/news' },
    { name: 'FAQ', href: '/faq' },
    { name: NAV_LABELS.aboutAgent, href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 h-16">
          <SiteLogo />

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-x-5 text-sm 2xl:text-base *:whitespace-nowrap">
            {navigation.map((item) =>
              'items' in item && item.items ? (
                <div key={item.name} className="relative group">
                  <button className="text-slate-700 hover:text-slate-900 font-medium transition-colors">
                    {item.name}
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-200">
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : 'href' in item ? (
                item.href.startsWith('http') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-slate-900 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              ) : null
            )}
          </div>

          <a
            href={REAL_ESTATE_SITE.phoneTel}
            className="hidden 2xl:inline-flex shrink-0 items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Call {REAL_ESTATE_SITE.phone}
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="xl:hidden p-2 text-slate-700 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-slate-200">
            <div className="space-y-4">
              {navigation.map((item) =>
                'items' in item && item.items ? (
                  <div key={item.name}>
                    <div className="font-semibold text-slate-900 mb-2">{item.name}</div>
                    <div className="pl-4 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-slate-700 hover:text-slate-900"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : 'href' in item ? (
                  item.href.startsWith('http') ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-slate-700 hover:text-slate-900 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-slate-700 hover:text-slate-900 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ) : null
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

