export function RealScoutSearch() {
  return (
    <div className="w-full">
      <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
    </div>
  )
}

// Declare custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': {
        'agent-encoded-id': string
        children?: React.ReactNode
      }
    }
  }
}

