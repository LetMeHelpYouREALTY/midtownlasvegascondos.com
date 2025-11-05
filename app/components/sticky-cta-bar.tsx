'use client'

import { useState } from 'react'

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={scrollToContact}
            className="flex-1 mr-2 px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-colors flex items-center justify-center"
          >
            <span className="mr-2">💰</span>
            Free Valuation
          </button>
          <a
            href="tel:7025001955"
            className="flex-1 ml-2 px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            <span className="mr-2">☎️</span>
            Call Expert
          </a>
        </div>
      </div>
    </div>
  )
}

