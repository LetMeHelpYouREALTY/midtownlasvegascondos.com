'use client'

import { useEffect } from 'react'
import { scheduleDeferredLoad } from '@/lib/schedule-deferred-load'

export function WidgetTracker() {
  useEffect(() => {
    return scheduleDeferredLoad(() => {
      if (document.getElementById('widget-tracker-boot')) return

      const boot = document.createElement('script')
      boot.id = 'widget-tracker-boot'
      boot.text = `
        (function(w,i,d,g,e,t){
          w["WidgetTrackerObject"]=g;
          (w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments);}),
          (w[g].ds=1*new Date());
          (e="script"),
          (t=d.createElement(e)),
          (e=d.getElementsByTagName(e)[0]);
          t.async=1;
          t.src=i;
          e.parentNode.insertBefore(t,e);
        })(window,"https://widgetbe.com/agent",document,"widgetTracker");
        window.widgetTracker("create", "WT-XQHVYQWW");
        window.widgetTracker("send", "pageview");
      `
      document.head.appendChild(boot)

      const checkIframe = window.setInterval(() => {
        const iframe = document.querySelector('iframe[name="widgetCta"]')
        if (iframe && !iframe.getAttribute('title')) {
          iframe.setAttribute('title', 'Contact widget')
          window.clearInterval(checkIframe)
        }
      }, 200)
      window.setTimeout(() => window.clearInterval(checkIframe), 12000)
    })
  }, [])

  return null
}
