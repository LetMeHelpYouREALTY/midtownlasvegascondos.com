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

    const checkElement = () => {
      try {
        if (window.customElements?.get('realscout-advanced-search')) {
          setIsReady(true)
        } else {
          setTimeout(checkElement, 100)
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

