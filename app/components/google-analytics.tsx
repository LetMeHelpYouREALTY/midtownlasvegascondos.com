'use client'

import { useEffect } from 'react'
import { scheduleDeferredLoad } from '@/lib/schedule-deferred-load'

const GA_ID_PATTERN = /^G-[A-Z0-9]+$/
const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-772V5VK7G0'
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  useEffect(() => {
    return scheduleDeferredLoad(() => {
      if (gaId && GA_ID_PATTERN.test(gaId) && !document.getElementById('ga-gtag')) {
        const loader = document.createElement('script')
        loader.id = 'ga-gtag'
        loader.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
        loader.async = true
        document.head.appendChild(loader)

        const config = document.createElement('script')
        config.id = 'google-analytics'
        config.text = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: true });
        `
        document.head.appendChild(config)
      }

      if (gtmId && GTM_ID_PATTERN.test(gtmId) && !document.getElementById('google-tag-manager')) {
        const manager = document.createElement('script')
        manager.id = 'google-tag-manager'
        manager.text = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `
        document.head.appendChild(manager)
      }
    })
  }, [gaId, gtmId])

  if (!gtmId || !GTM_ID_PATTERN.test(gtmId)) return null

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        className="hidden"
        title="Google Tag Manager"
      />
    </noscript>
  )
}
