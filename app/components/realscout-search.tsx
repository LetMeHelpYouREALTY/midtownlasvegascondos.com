/// <reference path="../../global.d.ts" />

'use client'

import React, { useEffect, useState } from 'react'

export function RealScoutSearch() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.customElements) {
      setIsReady(true)
      return
    }

    let attempts = 0
    const maxAttempts = 50 // 5 seconds max

    const checkElement = () => {
      attempts++
      try {
        if (window.customElements?.get('realscout-advanced-search')) {
          setIsReady(true)
        } else if (attempts < maxAttempts) {
          setTimeout(checkElement, 100)
        } else {
          setIsReady(true) // Timeout - try to render anyway
        }
      } catch (error) {
        setIsReady(true)
      }
    }

    checkElement()
  }, [])

  return (
    <div className="w-full">
      {isReady ? (
        React.createElement('realscout-advanced-search', {
          'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
        })
      ) : (
        <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
          <p className="text-slate-600">Loading search...</p>
        </div>
      )}
    </div>
  )
}

