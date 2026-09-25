const SCRIPT_ID = 'realscout-web-components-script'
const SCRIPT_SRC = 'https://em.realscout.com/widgets/realscout-web-components.umd.js'

let scriptPromise: Promise<void> | null = null

function waitForElement(elementName: string, timeoutMs = 10000): Promise<void> {
  return new Promise((resolve) => {
    const started = Date.now()
    const tick = () => {
      if (window.customElements?.get(elementName) || Date.now() - started > timeoutMs) {
        resolve()
        return
      }
      window.setTimeout(tick, 50)
    }
    tick()
  })
}

/** Load the RealScout web components bundle once, then wait for one element. */
export function loadRealScoutWebComponents(elementName: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.customElements?.get(elementName)) return Promise.resolve()

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve) => {
      const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
      if (existing) {
        if (existing.dataset.loaded === 'true') {
          resolve()
          return
        }
        existing.addEventListener('load', () => resolve(), { once: true })
        existing.addEventListener('error', () => resolve(), { once: true })
        return
      }

      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = SCRIPT_SRC
      script.async = true
      script.onload = () => {
        script.dataset.loaded = 'true'
        resolve()
      }
      script.onerror = () => resolve()
      document.head.appendChild(script)
    })
  }

  return scriptPromise.then(() => waitForElement(elementName))
}

/**
 * Start `onVisible` only when `node` is inside the viewport.
 * Widgets parked below a full-height hero stay unloaded until the visitor scrolls.
 */
export function whenElementInView(node: Element, onVisible: () => void): () => void {
  const rect = node.getBoundingClientRect()
  const inView = rect.top < window.innerHeight && rect.bottom > 0
  if (inView) {
    onVisible()
    return () => {}
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      onVisible()
      observer.disconnect()
    }
  })
  observer.observe(node)
  return () => observer.disconnect()
}
