# Google Analytics Setup - Quick Start

## ✅ Your Google Analytics ID

**ID:** `G-772V5VK7G0`

## 🚀 Setup Instructions

### For Local Development

1. **Create `.env.local` file** in the project root (if it doesn't exist):
   ```bash
   # Create the file
   touch .env.local
   ```

2. **Add your Google Analytics ID** to `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_ID=G-772V5VK7G0
   ```

3. **Restart your development server**:
   ```bash
   pnpm dev
   ```

4. **Verify it's working**:
   - Visit your local site: http://localhost:3000
   - Open Google Analytics → Real-Time reports
   - You should see your visit appear

### For Production (Vercel)

1. **Go to Vercel Dashboard**:
   - Navigate to your project
   - Go to **Settings** → **Environment Variables**

2. **Add Environment Variable**:
   - **Key:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-772V5VK7G0`
   - **Environment:** Production, Preview, Development (select all)
   - Click **Save**

3. **Redeploy**:
   - Go to **Deployments** tab
   - Click **Redeploy** on your latest deployment
   - Or push a new commit to trigger automatic deployment

4. **Verify**:
   - Visit your live site
   - Check Google Analytics Real-Time reports
   - You should see traffic

## ✅ Verification

After setup, verify Google Analytics is tracking:

1. **Visit your site** (local or production)
2. **Open Google Analytics**:
   - Go to https://analytics.google.com
   - Select your property
   - Go to **Reports** → **Real-Time**
3. **You should see**:
   - Active users (at least 1 - you!)
   - Page views
   - Current page URLs

## 🔍 Troubleshooting

### Analytics not showing up?

1. **Check environment variable**:
   - Ensure `NEXT_PUBLIC_GA_ID` is set correctly
   - Must start with `NEXT_PUBLIC_` to be available in the browser

2. **Restart server**:
   - Environment variables are read at server start
   - Restart your dev server after adding

3. **Check browser console**:
   - Open DevTools → Console
   - Look for any errors
   - Should see Google Analytics scripts loading

4. **Ad blockers**:
   - Some ad blockers prevent Google Analytics
   - Disable temporarily to test

5. **Wait a few minutes**:
   - Real-Time reports may take 1-2 minutes to update
   - Check again after a few minutes

## 📊 What's Being Tracked

The Google Analytics integration automatically tracks:
- ✅ Page views
- ✅ Page paths
- ✅ User sessions
- ✅ Traffic sources
- ✅ Device information
- ✅ Geographic data

## 🎯 Next Steps

1. ✅ Google Analytics is now configured
2. ⏳ Set up **Google Search Console** (see `docs/GOOGLE_READINESS_CHECKLIST.md`)
3. ⏳ Submit your sitemap to Google Search Console
4. ⏳ Monitor your analytics data regularly

---

**Your Google Analytics ID:** `G-772V5VK7G0`

For more details, see: `docs/GOOGLE_READINESS_CHECKLIST.md`

