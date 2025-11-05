# Vercel Environment Variable Setup - Google Analytics

## 🚨 Important: Google Analytics Not Detected

Google Search Console can't detect your Google Analytics tag because the environment variable isn't set in Vercel production.

## ✅ Quick Fix - Two Options

### Option 1: Set Environment Variable in Vercel (Recommended)

1. **Go to Vercel Dashboard**:
   - Visit: https://vercel.com/dashboard
   - Select your project: `midtownlasvegascondos.com`

2. **Navigate to Settings**:
   - Click **Settings** in the top navigation
   - Click **Environment Variables** in the left sidebar

3. **Add Google Analytics ID**:
   - Click **Add New**
   - **Key**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-772V5VK7G0`
   - **Environments**: Select all three:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
   - Click **Save**

4. **Redeploy**:
   - Go to **Deployments** tab
   - Click the **⋯** (three dots) on your latest deployment
   - Click **Redeploy**
   - Or push a new commit to trigger automatic deployment

5. **Verify**:
   - Wait 2-3 minutes for deployment
   - Visit your live site
   - Check Google Analytics Real-Time reports
   - Try Google Search Console verification again

### Option 2: Temporary Hardcoded Solution (Already Done)

I've updated the code to use your Google Analytics ID as a fallback. This means:
- ✅ The tag will work immediately on your live site
- ✅ Google Search Console should be able to verify it
- ⚠️ The ID is hardcoded (but secure - it's public anyway)

**Note**: The component now uses `G-772V5VK7G0` as a fallback if the environment variable isn't set. This ensures it works in production immediately.

## 🔍 Verify It's Working

### Method 1: Check Page Source
1. Visit: https://www.midtownlasvegascondos.com
2. Right-click → **View Page Source** (or Ctrl+U)
3. Search for: `G-772V5VK7G0`
4. You should see it in the page source

### Method 2: Check Browser Console
1. Visit your site
2. Open DevTools (F12)
3. Go to **Console** tab
4. Type: `window.dataLayer`
5. You should see an array (even if empty)

### Method 3: Google Analytics Real-Time
1. Go to: https://analytics.google.com
2. Select your property
3. Go to **Reports** → **Real-Time**
4. Visit your site
5. You should see yourself as an active user

### Method 4: Google Tag Assistant
1. Install Chrome extension: [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your site
3. Click the extension icon
4. It should show your Google Analytics tag

## 📝 Current Status

**Environment Variable**: `NEXT_PUBLIC_GA_ID`  
**Your Google Analytics ID**: `G-772V5VK7G0`  
**Fallback Status**: ✅ Enabled (works even without env var)  
**Production Status**: ⏳ Needs Vercel env var for best practice

## 🎯 Next Steps

1. ✅ **Code is ready** - The tag will work with the fallback
2. ⏳ **Set up Vercel env var** - Follow Option 1 above
3. ⏳ **Verify in Google Search Console** - Should work now
4. ⏳ **Monitor Analytics** - Check Real-Time reports

## 🔧 Why This Happened

Google Search Console couldn't detect the tag because:
- The environment variable `NEXT_PUBLIC_GA_ID` wasn't set in Vercel
- The component returned `null` when the env var was missing
- No tag was rendered on the page

**Solution**: Added fallback ID so the tag always renders, even without the env var.

---

**After setting up the Vercel environment variable, the tag will work optimally. The fallback ensures it works immediately.**

