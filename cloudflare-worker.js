// Cloudflare Worker for RealScout Widget Integration
// Deploy this to Cloudflare Workers and route to your domain

export default {
  async fetch(request, env, ctx) {
    // Fetch the original response
    const response = await fetch(request);
    
    // Only modify HTML responses
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) {
      return response;
    }
    
    // Use HTMLRewriter to inject RealScout script
    return new HTMLRewriter()
      .on('head', {
        element(element) {
          // Inject RealScout web components script
          element.append(`
            <script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
            <style>
              realscout-office-listings {
                --rs-listing-divider-color: #0e64c8;
                width: 100%;
              }
              realscout-advanced-search {
                width: 100%;
              }
            </style>
          `, { html: true });
        }
      })
      .transform(response);
  }
}

