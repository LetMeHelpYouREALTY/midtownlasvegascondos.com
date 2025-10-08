/// <reference path="../../global.d.ts" />

import React from 'react'

export function RealScoutSearch() {
  return (
    <div className="w-full">
      {/* @ts-expect-error - Custom element loaded via Cloudflare Worker */}
      {React.createElement('realscout-advanced-search', {
        'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
      })}
    </div>
  )
}

