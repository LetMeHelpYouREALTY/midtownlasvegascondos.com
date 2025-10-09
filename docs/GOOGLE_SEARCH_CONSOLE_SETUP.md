# Google Search Console Setup Guide

## 🎯 Step-by-Step Setup

### Step 1: Create Account
1. Go to https://search.google.com/search-console
2. Click "Start now"
3. Sign in with Google account

### Step 2: Add Your Property
Two methods to choose from:

#### Method A: Domain Property (Recommended)
1. Select "Domain" tab
2. Enter: `midtownlasvegascondos.com` (without www or https)
3. Click "Continue"
4. Copy the DNS TXT record
5. Add to your domain DNS settings (through your domain registrar)
6. Wait for verification (can take up to 24 hours)

#### Method B: URL Prefix
1. Select "URL prefix" tab
2. Enter: `https://www.midtownlasvegascondos.com`
3. Click "Continue"
4. Choose verification method:
   - **HTML file** (download and upload to `/public/`)
   - **HTML tag** (add to site header)
   - **Google Analytics** (if you have it)
   - **Google Tag Manager** (if you have it)

### Step 3: Submit Sitemap
1. In Search Console, go to "Sitemaps" in left sidebar
2. Enter sitemap URL: `sitemap.xml`
3. Click "Submit"
4. Status should show "Success" within minutes

### Step 4: Request Indexing (Important!)
Index your key pages immediately:

1. Go to "URL Inspection" tool
2. Enter each URL and click "Request Indexing":
   - `https://www.midtownlasvegascondos.com/`
   - `https://www.midtownlasvegascondos.com/neighborhood/english-residences`
   - `https://www.midtownlasvegascondos.com/neighborhood/arts-district`
   - `https://www.midtownlasvegascondos.com/search`
   - `https://www.midtownlasvegascondos.com/contact`

3. Google will prioritize crawling these pages

---

## 📊 Monitor These Reports

### 1. Performance Report
**Check**: Weekly
**Metrics**:
- Total clicks
- Total impressions
- Average CTR (Click-Through Rate)
- Average position

**Look for**:
- Which keywords drive traffic
- Best performing pages
- Opportunities to improve titles/descriptions

### 2. Coverage Report
**Check**: Weekly (first month), then monthly
**Metrics**:
- Valid pages
- Errors
- Warnings
- Excluded pages

**Goal**: All 15 pages showing as "Valid"

### 3. Mobile Usability
**Check**: After adding images
**Look for**: No mobile usability errors

### 4. Core Web Vitals
**Check**: Monthly
**Metrics**:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

**Goal**: All "Good" ratings

---

## 🎯 Target Keywords to Track

### Primary (Track These)
1. "Midtown Las Vegas condos"
2. "Arts District Las Vegas homes"
3. "English Residences Las Vegas"
4. "Downtown Las Vegas condos"
5. "Las Vegas Arts District real estate"

### Location-Based
6. "Condos for sale downtown Las Vegas"
7. "18b Arts District homes"
8. "Midtown Plaza Las Vegas"
9. "First Friday Las Vegas real estate"
10. "Walkable Las Vegas neighborhood"

### Long-Tail (High Intent)
11. "Luxury condo hotel Las Vegas"
12. "Investment property Arts District"
13. "Buy condo Midtown Las Vegas"
14. "English Residences for sale"
15. "Las Vegas Arts District condos for sale"

---

## ✅ Verification Checklist

### Before Submitting to Google
- [ ] All pages load without errors
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] All meta titles are unique
- [ ] All meta descriptions are unique
- [ ] Structured data validates (use Rich Results Test)
- [ ] Mobile-friendly (use Mobile-Friendly Test)
- [ ] HTTPS working (should be via Vercel)

### After Submitting
- [ ] Search Console property verified
- [ ] Sitemap submitted and showing "Success"
- [ ] Key pages requested for indexing
- [ ] No coverage errors
- [ ] Mobile usability report shows no issues

---

## 🚨 Common Issues & Fixes

### "Sitemap could not be read"
- **Fix**: Check sitemap.ts file for errors
- **Test**: Visit `/sitemap.xml` in browser

### "Page not indexed"
- **Fix**: Use URL Inspection → Request Indexing
- **Wait**: Can take 1-7 days

### "Mobile usability errors"
- **Fix**: Already responsive, should have no errors
- **Verify**: Test on phone or use Chrome DevTools

### "Duplicate content"
- **Fix**: Canonical URLs already set
- **Note**: www vs non-www handled by Vercel redirects

---

## 📈 Expected Timeline

### Day 1-3
- Submit to Search Console ✓
- Submit sitemap ✓
- Request indexing for key pages ✓

### Week 1
- Google crawls sitemap
- Begins indexing pages
- First pages appear in index

### Week 2-4
- Most/all pages indexed
- Start appearing for brand searches
- "Midtown Las Vegas condos" searches

### Month 2-3
- Ranking for target keywords
- Organic traffic begins
- Local pack consideration

### Month 3-6
- Established rankings
- Regular organic traffic
- Authority builds

---

## 🎓 Learning Resources

### Essential Reading
- Google Search Console Help: https://support.google.com/webmasters
- SEO Starter Guide: https://developers.google.com/search/docs/beginner/seo-starter-guide
- How Search Works: https://www.google.com/search/howsearchworks/

### Tools to Use
- Google Search Console: Monitor performance
- Google Analytics: Track traffic and behavior
- Google Business Profile: Local SEO presence
- Rich Results Test: Test structured data
- Mobile-Friendly Test: Verify mobile optimization

---

## 📞 Your SEO-Optimized Contact Info

Now consistently appearing across:
- **All page metadata**
- **Structured data**
- **Every page footer**
- **Contact page**

```
Dr. Jan Duffy
Midtown Las Vegas Condos
921 S Main St
Las Vegas, NV 89101
(702) 500-1955
DrJanSells@MidtownLasVegasCondos.com
```

---

## 🚀 Ready to Submit!

Your site is fully optimized and ready for Google:

✅ **15 unique pages** with SEO metadata  
✅ **XML sitemap** auto-generated  
✅ **Structured data** for rich results  
✅ **Mobile-optimized** responsive design  
✅ **Fast loading** via Vercel CDN  
✅ **Canonical URLs** properly set  
✅ **www domain** as primary  

**Action Item**: Set up Google Search Console this week and submit your sitemap!

