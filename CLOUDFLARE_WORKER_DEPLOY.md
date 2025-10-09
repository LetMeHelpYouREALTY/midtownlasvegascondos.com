# Deploy Cloudflare Worker for RealScout Widgets

## 🚨 IMPORTANT: Your Widgets Won't Work Without This!

The RealScout custom elements are in your HTML, but they need the JavaScript to actually render.

---

## 📋 Step-by-Step Deployment

### Step 1: Log into Cloudflare
1. Go to https://dash.cloudflare.com
2. Select your website domain
3. Click "Workers Routes" in the left sidebar

### Step 2: Create Worker
1. Click "Create Worker" or "Manage Workers"
2. Click "Create a Service"
3. Name it: `realscout-injector`
4. Click "Create Service"

### Step 3: Add Worker Code
1. Click "Quick Edit"
2. Delete the default code
3. **Copy and paste this EXACT code**:

```javascript
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
          element.append(\`
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
          \`, { html: true });
        }
      })
      .transform(response);
  }
}
```

4. Click "Save and Deploy"

### Step 4: Add Worker Route
1. Go back to your domain dashboard
2. Click "Workers Routes"
3. Click "Add Route"
4. **Route**: `midtownlasvegascondos.com/*`
5. **Worker**: Select `realscout-injector`
6. Click "Save"

### Step 5: Test
1. Visit your site: https://midtownlasvegascondos.com
2. Right-click → "View Page Source"
3. Search for `realscout-web-components.umd.js`
4. You should see it in the `<head>` section

---

## ✅ Verify It's Working

### Method 1: View Source
Look for this in `<head>`:
```html
<script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
```

### Method 2: Browser Console
Press F12 and run:
```javascript
customElements.get('realscout-office-listings')
// Should return: [object HTMLElement] or similar
```

### Method 3: Visual Check
- Go to homepage
- Scroll down past hero
- You should see "Featured Homes in Midtown" section
- RealScout listing cards should appear with property photos

---

## 🚨 Troubleshooting

### Widget Still Not Showing?

**Check 1**: Worker is deployed
- Cloudflare Dashboard → Workers Routes
- Verify route exists: `midtownlasvegascondos.com/*`
- Status should be "Active"

**Check 2**: Clear cache
- Cloudflare Dashboard → Caching → Purge Everything
- Hard refresh browser (Ctrl+Shift+R)

**Check 3**: Check browser console
- F12 → Console tab
- Look for errors related to RealScout
- Should see no CORS or loading errors

**Check 4**: DNS/Proxy settings
- Cloudflare DNS must be "Proxied" (orange cloud)
- Not "DNS only" (grey cloud)

---

## 🎯 Alternative: Add Script Directly (Quick Test)

If you want to test immediately without worker:

### Add to `app/layout.tsx`

```typescript
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          type="module"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

Then add to `app/globals.css` (already done):
```css
realscout-office-listings {
  --rs-listing-divider-color: #0e64c8;
  width: 100%;
}
```

---

## 📞 Cloudflare Support

If you need help:
- Cloudflare Community: https://community.cloudflare.com
- Support: https://support.cloudflare.com

---

## ✅ What Should Happen

Once worker is deployed:

1. **Homepage**: 
   - Featured $500K-$600K SFR homes below hero
   - Search widget in middle
   - More listings lower on page

2. **Search Page**: 
   - Search widget at top
   - All listings below

3. **Each Neighborhood Page**: 
   - Context-specific listings
   - Search widget

**All widgets will show actual properties from your RealScout account!** 🏡

---

## 🔧 Worker Configuration Checklist

- [ ] Worker created in Cloudflare
- [ ] Code pasted and saved
- [ ] Route added: `midtownlasvegascondos.com/*`
- [ ] Route status: Active
- [ ] DNS proxied through Cloudflare (orange cloud)
- [ ] Cache purged after deployment
- [ ] Tested on live site

Your Next.js site is ready - just need the Cloudflare Worker active! 🚀

