// RealScout custom element type definitions
// These elements are loaded via the RealScout web components script

declare namespace JSX {
  interface IntrinsicElements {
    'realscout-advanced-search': {
      'agent-encoded-id'?: string
      'price-min'?: string
      'price-max'?: string
      children?: React.ReactNode
      className?: string
      style?: React.CSSProperties
    }
    'realscout-office-listings': {
      'agent-encoded-id'?: string
      'sort-order'?: string
      'listing-status'?: string
      'property-types'?: string
      'price-min'?: string
      'price-max'?: string
      'limit'?: string
      children?: React.ReactNode
      className?: string
      style?: React.CSSProperties
    }
    'realscout-simple-search': {
      'agent-encoded-id'?: string
      children?: React.ReactNode
      className?: string
      style?: React.CSSProperties
    }
  }
}
