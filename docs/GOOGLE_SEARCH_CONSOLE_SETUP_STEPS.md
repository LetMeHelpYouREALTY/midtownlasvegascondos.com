# 🚀 Google Search Console Setup - Step-by-Step Guide

**Purpose**: Get your site indexed and monitored by Google  
**Time Required**: 15-20 minutes  
**Difficulty**: Easy

---

## Step 1: Access Google Search Console

1. Go to: https://search.google.com/search-console
2. Sign in with your Google account (use the account that manages your Google Analytics)

---

## Step 2: Add Your Property

1. Click **"Add Property"** button (top right)
2. Select **"URL prefix"** method (not Domain)
3. Enter: `https://www.midtownlasvegascondos.com`
4. Click **"Continue"**

---

## Step 3: Verify Site Ownership

Google will show you verification options. Choose **"HTML tag"** method:

### Option A: HTML Tag Method (Recommended)

1. Google will show you a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
2. Copy the **content value** (the code after `content="`)
3. In Vercel:
   - Go to your project settings
   - Navigate to **Environment Variables**
   - Add new variable:
     - **Name**: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
     - **Value**: `YOUR_VERIFICATION_CODE` (paste the code you copied)
   - Save and redeploy
4. After redeploy, go back to Google Search Console
5. Click **"Verify"**

### Option B: HTML File Method (Alternative)

If you prefer not to use environment variables:

1. Download the HTML verification file Google provides
2. Upload it to your `public/` folder
3. Commit and push to GitHub
4. Wait for Vercel to deploy
5. Click **"Verify"** in Google Search Console

**Note**: The HTML tag method (Option A) is already set up in your code - you just need to add the environment variable!

---

## Step 4: Submit Your Sitemap

Once verified:

1. In Google Search Console, click **"Sitemaps"** in the left sidebar
2. You'll see a field to enter your sitemap URL
3. Enter: `sitemap.xml`
   - **Note**: Don't enter the full URL, just `sitemap.xml`
   - Google will automatically use your verified domain
4. Click **"Submit"**
5. Wait 24-48 hours for Google to process

**Expected Result**: 
- Status: "Success"
- Discovered URLs: 22+ pages
- Last read: Current date

---

## Step 5: Request Indexing for Key Pages (Optional but Recommended)

Google will crawl your sitemap automatically, but you can speed up indexing for important pages:

1. Click **"URL Inspection"** in the left sidebar (or top search bar)
2. Enter each key page URL:
   - `https://www.midtownlasvegascondos.com/`
   - `https://www.midtownlasvegascondos.com/midtown-real-estate`
   - `https://www.midtownlasvegascondos.com/investment-properties`
   - `https://www.midtownlasvegascondos.com/buyers-guide-midtown`
   - `https://www.midtownlasvegascondos.com/arts-district-guide`
3. For each URL:
   - Click **"Test Live URL"** to verify it's accessible
   - Click **"Request Indexing"** button
   - Wait for confirmation

**Note**: You can request indexing for up to 10 URLs per day

---

## Step 6: Monitor Progress

### Check Indexing Status

1. Go to **"Pages"** in left sidebar
2. Click **"Known pages"** tab
3. You should see pages being discovered over the next few days

### Check Sitemap Status

1. Go to **"Sitemaps"** in left sidebar
2. Check the status of your sitemap
3. It should show "Success" within 24-48 hours

### Check for Issues

1. Go to **"Pages"** → **"Not indexed"** tab
2. Review any pages that aren't being indexed
3. Fix any issues found

---

## Common Issues & Solutions

### Issue: "Sitemap could not be read"

**Solution**: 
- Wait 24-48 hours after submission
- Verify sitemap is accessible: https://www.midtownlasvegascondos.com/sitemap.xml
- Make sure you submitted `sitemap.xml` (not full URL)

### Issue: "Verification failed"

**Solution**:
- Double-check the environment variable is set correctly in Vercel
- Make sure the site has been redeployed after adding the variable
- Try the HTML file method instead

### Issue: "Discovered pages: 0"

**Solution**:
- This is normal for the first 24-48 hours
- Google needs time to crawl your sitemap
- Check back in 2-3 days

### Issue: "Some pages not indexed"

**Solution**:
- Review the reason in Google Search Console
- Common reasons: Duplicate content, low quality, or blocked by robots.txt
- Request indexing for important pages manually

---

## What to Expect

### First 24 Hours
- Site ownership verified ✅
- Sitemap submitted ✅
- Google begins crawling

### Days 2-7
- Pages start appearing in index
- Search Console shows "Known pages"
- Performance data begins collecting

### Week 2+
- Full indexing (most pages)
- Search performance data available
- Can start optimizing based on data

---

## Next Steps After Setup

1. **Set up Google Analytics Goals** (if desired)
2. **Monitor search performance** weekly
3. **Submit new content** as it's published
4. **Review search queries** monthly
5. **Optimize based on data**

---

## Quick Reference

- **Search Console**: https://search.google.com/search-console
- **Your Site**: https://www.midtownlasvegascondos.com
- **Sitemap**: https://www.midtownlasvegascondos.com/sitemap.xml
- **Robots.txt**: https://www.midtownlasvegascondos.com/robots.txt

---

**Need Help?** Check the full Google readiness guide: `docs/GOOGLE_READINESS_FINAL.md`

