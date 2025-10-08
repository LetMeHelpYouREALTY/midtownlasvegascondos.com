// RealScout custom element type definitions
declare namespace JSX {
  interface IntrinsicElements {
    'realscout-advanced-search': {
      'agent-encoded-id': string
      children?: React.ReactNode
    }
    'realscout-office-listings': {
      'agent-encoded-id': string
      'sort-order'?: string
      'listing-status'?: string
      'property-types'?: string
      'price-min'?: string
      'price-max'?: string
      'limit'?: string
      children?: React.ReactNode
    }
  }
}

