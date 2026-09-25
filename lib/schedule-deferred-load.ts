/**
 * Run third-party bootstraps after the first real interaction, or after a
 * delay long enough that they miss the initial Core Web Vitals window.
 * Scroll events at the top of the page are ignored so layout shifts do not
 * count as interaction.
 */
export function scheduleDeferredLoad(load: () => void, delayMs = 8000): () => void {
  if (typeof window === 'undefined') return () => {}

  let done = false
  const run = () => {
    if (done) return
    done = true
    cleanup()
    load()
  }

  const onScroll = () => {
    if (window.scrollY < 24) return
    run()
  }

  const cleanup = () => {
    window.removeEventListener('pointerdown', run)
    window.removeEventListener('keydown', run)
    window.removeEventListener('touchstart', run)
    window.removeEventListener('scroll', onScroll)
  }

  window.addEventListener('pointerdown', run, { passive: true })
  window.addEventListener('keydown', run)
  window.addEventListener('touchstart', run, { passive: true })
  window.addEventListener('scroll', onScroll, { passive: true })
  const timer = window.setTimeout(run, delayMs)

  return () => {
    window.clearTimeout(timer)
    cleanup()
  }
}
