# Cloudflare Worker - RealScout Integration

## 🔧 How It Works

Your Cloudflare Worker injects the RealScout JavaScript that enables the custom elements:
- `<realscout-advanced-search>`
- `<realscout-office-listings>`

The worker runs on your domain and adds the necessary scripts before the page loads.

---

## ✅ What's Already Set Up

### 1. TypeScript Definitions
**File**: `types/realscout.d.ts`

Declares the custom elements so TypeScript doesn't throw errors during build:
```typescript
declare namespace JSX {
  interface IntrinsicElements {
    'realscout-advanced-search': { ... }
    'realscout-office-listings': { ... }
  }
}
```

### 2. Component Wrappers
**Files**:
- `app/components/realscout-search.tsx` - Search widget wrapper
- `app/components/realscout-listings.tsx` - Listings widget wrapper

These make it easy to add widgets throughout your site.

### 3. Strategic Placement
Widgets are placed on:
- Homepage
- Search page
- English Residences
- Midtown Plaza
- Arts District

---

## 🌐 Cloudflare Worker Configuration

Your worker should inject the RealScout script into the HTML `<head>` or before `</body>`:

### Example Worker Code (for reference):

```javascript
export default {
  async fetch(request, env) {
    const response = await fetch(request);
    
    // Only process HTML responses
    if (!response.headers.get('content-type')?.includes('text/html')) {
      return response;
    }
    
    // Transform HTML to inject RealScout script
    return new HTMLRewriter()
      .on('head', {
        element(element) {
          element.append(`
            <script src="https://widgets.realscout.com/v1/widgets.js" 
                    data-agent-id="QWdlbnQtMjI1MDUw" 
                    async>
            </script>
          `, { html: true });
        }
      })
      .transform(response);
  }
}
```

### What the Worker Should Do:

1. **Intercept HTML responses** from your site
2. **Inject RealScout widget script** into the HTML
3. **Initialize with your agent ID**: `QWdlbnQtMjI1MDUw`
4. **Allow custom elements** to render properly

---

## 🔍 Verify Worker is Working

### Method 1: View Page Source
1. Go to your live site
2. Right-click → "View Page Source"
3. Search for "realscout" or "widgets.realscout.com"
4. You should see the injected script tag

### Method 2: Browser Console
Open Developer Tools (F12) and run:
```javascript
// Check if RealScout is loaded
console.log(customElements.get('realscout-advanced-search'));
console.log(customElements.get('realscout-office-listings'));
// Should return the custom element definitions
```

### Method 3: Visual Check
- Visit your homepage
- Look for the RealScout search widget
- It should render with actual functionality
- Try searching for a property

---

## 🚨 Troubleshooting

### Widget Not Showing?

**Check 1**: Cloudflare Worker is active
- Log into Cloudflare dashboard
- Verify worker is deployed to your domain
- Check worker routes are configured

**Check 2**: Script injection
- View page source
- Look for RealScout script tag
- Should be in `<head>` or before `</body>`

**Check 3**: Console errors
- Open browser console (F12)
- Look for JavaScript errors
- RealScout widgets should load without errors

### TypeScript Build Errors?

If you still get build errors:
- The `types/realscout.d.ts` file declares the elements
- The `tsconfig.json` includes the types directory
- Build should pass even though elements load via worker

---

## 🎯 Your Current Setup

### Agent ID
```
QWdlbnQtMjI1MDUw
```

### Widget Locations

**Search Widget** (5 pages):
1. Homepage - `/`
2. Search Page - `/search`
3. English Residences - `/neighborhood/english-residences`
4. Midtown Plaza - `/neighborhood/midtown-plaza`
5. Arts District - `/neighborhood/arts-district`

**Listings Widget** (5 pages):
1. Homepage - Featured properties ($300K - $2M)
2. English Residences - Condos ($250K - $1.5M)
3. Midtown Plaza - Walkable homes ($200K - $1M)
4. Arts District - All types ($250K - $1.5M)
5. Search Page - All listings ($150K - $3M)

---

## 📝 Cloudflare Worker Checklist

- [ ] Worker is deployed to your domain
- [ ] Worker injects RealScout script
- [ ] Agent ID is correct: `QWdlbnQtMjI1MDUw`
- [ ] Script loads before custom elements render
- [ ] No CORS errors in console
- [ ] Widgets render and function properly

---

## 🔄 Testing the Integration

### Local Development (without worker):
Widgets won't work locally unless you:
1. Add RealScout script manually to `app/layout.tsx`
2. Or test on production site where worker runs

### Production (with worker):
- Cloudflare worker injects scripts automatically
- Widgets load and function properly
- No code changes needed in your Next.js app

---

## 💡 Benefits of Worker Approach

✅ **No hardcoded scripts** - Cleaner Next.js code  
✅ **Easy updates** - Update worker without redeploying site  
✅ **Performance** - Script injection optimized by Cloudflare  
✅ **Security** - Worker handles external script loading  

---

## 📞 Support

If widgets aren't working:
1. Check Cloudflare dashboard
2. Verify worker is active
3. Test on production (not localhost)
4. Check browser console for errors

Your site code is ready - just ensure the Cloudflare Worker is configured correctly!

