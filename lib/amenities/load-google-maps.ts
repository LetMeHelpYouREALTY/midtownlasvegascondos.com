declare global {
  interface Window {
    __googleMapsLoadPromise?: Promise<void>
  }
}

/** Load Maps JavaScript API once (async bootstrap). */
export function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Google Maps can only load in the browser'))
  }

  if (window.google?.maps) {
    return Promise.resolve()
  }

  if (window.__googleMapsLoadPromise) {
    return window.__googleMapsLoadPromise
  }

  window.__googleMapsLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async`
    script.async = true
    script.defer = true
    script.dataset.googleMapsLoader = 'true'
    script.onerror = () => {
      window.__googleMapsLoadPromise = undefined
      reject(new Error('Failed to load Google Maps'))
    }
    script.onload = () => resolve()
    document.head.appendChild(script)
  })

  return window.__googleMapsLoadPromise
}
