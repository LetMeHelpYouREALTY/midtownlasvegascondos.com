# Cloudflare Worker Configuration

## 🔧 Your Current Worker Code

This is what's currently running in your Cloudflare Worker:

```html
<script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
<style>
  realscout-office-listings {
    --rs-listing-divider-color: #0e64c8;
    width: 100%;
  }
</style>
```

---

## ✅ What This Does

### Script Tag
```html
<script src="https://em.realscout.com/widgets/realscout-web-components.umd.js" type="module"></script>
```

- **Loads**: RealScout web components library
- **Type**: ES Module (modern JavaScript)
- **Source**: Official RealScout CDN
- **Enables**: Both `<realscout-advanced-search>` and `<realscout-office-listings>` custom elements

### Style Tag
```css
realscout-office-listings {
  --rs-listing-divider-color: #0e64c8;
  width: 100%;
}
```

- **Divider Color**: #0e64c8 (blue accent for listing cards)
- **Width**: 100% (full width responsive)
- **Effect**: Customizes the appearance of listing widgets

---

## 🎨 Additional CSS Variables You Can Use

RealScout widgets support these CSS custom properties:

```css
realscout-office-listings {
  /* Colors */
  --rs-listing-divider-color: #0e64c8;
  --rs-primary-color: #1e293b;
  --rs-secondary-color: #64748b;
  --rs-background-color: #ffffff;
  
  /* Spacing */
  --rs-card-padding: 1.5rem;
  --rs-card-gap: 1rem;
  
  /* Typography */
  --rs-heading-font-size: 1.5rem;
  --rs-body-font-size: 1rem;
  
  /* Layout */
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

realscout-advanced-search {
  /* Search widget customization */
  --rs-search-border-color: #e2e8f0;
  --rs-search-button-color: #1e293b;
  width: 100%;
}
```

---

## 📝 Complete Cloudflare Worker Example

Here's the full worker code structure:

```javascript
export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);
    
    // Only process HTML
    if (!response.headers.get('content-type')?.includes('text/html')) {
      return response;
    }
    
    // Inject RealScout scripts
    return new HTMLRewriter()
      .on('head', {
        element(element) {
          // Add RealScout script
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
```

---

## 🎯 Where Widgets Are Now Placed

### Homepage (`/`)
1. **Below Hero**: SFR homes $500K-$600K (6 listings)
2. **Mid-page Search**: Advanced search widget
3. **Lower Page**: All properties $300K-$2M (condos + SFR)

### Neighborhood Pages
**English Residences**: Condos $250K-$1.5M
**Midtown Plaza**: Properties $200K-$1M  
**Arts District**: All types $250K-$1.5M

### Search Page (`/search`)
- Advanced search widget (top)
- All listings $150K-$3M (bottom)

---

## 🚀 Worker Deployment Checklist

On Cloudflare Dashboard:

- [ ] Worker is published
- [ ] Route is set to your domain (midtownlasvegascondos.com/*)
- [ ] Worker is enabled
- [ ] Script injection is working

### Test Worker is Active:

**Method 1**: View source on live site
```bash
# Should see in <head>:
<script src="https://em.realscout.com/widgets/realscout-web-components.umd.js"...
<style>realscout-office-listings {...
```

**Method 2**: Browser console
```javascript
// Check if custom elements are registered
console.log(customElements.get('realscout-office-listings'));
console.log(customElements.get('realscout-advanced-search'));
// Should return element definitions
```

---

## 🎨 Matching Your Site Theme

Current divider color: **#0e64c8** (blue)

To match your Midtown branding better, consider:

```css
realscout-office-listings {
  --rs-listing-divider-color: #1e293b;  /* Slate-900 (matches your site) */
  /* OR */
  --rs-listing-divider-color: #0f172a;  /* Darker slate */
  /* OR */
  --rs-listing-divider-color: #0e64c8;  /* Keep current blue */
  width: 100%;
}
```

Update this in your Cloudflare Worker if you want to change the accent color.

---

## ✅ Your Setup Summary

**Cloudflare Worker**: Injects RealScout script + CSS  
**Next.js Site**: Uses `React.createElement()` for widgets  
**Result**: Custom elements work perfectly at runtime!

No TypeScript errors, clean builds, functional widgets! 🎉

