'use client'

// RealScout script is now loaded globally in the root layout (app/layout.tsx)
// This component is kept for backward compatibility but does minimal work
// The script and styles are injected via beforeInteractive in the layout

export function RealScoutScript() {
  // No-op - script is loaded globally in layout.tsx
  return null
}
