# Environment Variables Configuration

This document lists all environment variables needed for the site to function properly.

---

## Required Environment Variables

### Follow Up Boss API Key

**Variable**: `FOLLOW_UP_BOSS_API_KEY`  
**Value**: `fka_0N4mnN3SvIsd5iQpoTwAbE21ySYkA3rxZD`  
**Purpose**: API key for Follow Up Boss CRM integration  
**Required**: Yes (for CRM automation)

**How to Set in Vercel:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Click **Add New**
4. Key: `FOLLOW_UP_BOSS_API_KEY`
5. Value: `fka_0N4mnN3SvIsd5iQpoTwAbE21ySYkA3rxZD`
6. Select environments: Production, Preview, Development
7. Click **Save**

**How to Set Locally (.env.local):**
```bash
FOLLOW_UP_BOSS_API_KEY=fka_0N4mnN3SvIsd5iQpoTwAbE21ySYkA3rxZD
```

---

## Optional Environment Variables

### Calendly Webhook Signing Key

**Variable**: `CALENDLY_WEBHOOK_SIGNING_KEY`  
**Purpose**: Verify webhook signatures from Calendly (security)  
**Required**: No (but recommended)

**How to Get:**
1. Go to Calendly Settings → Integrations → Webhooks
2. Create or view your webhook subscription
3. Copy the Signing Key

---

### Follow Up Boss API URL (Optional)

**Variable**: `FOLLOW_UP_BOSS_API_URL`  
**Default**: `https://api.followupboss.com/v1`  
**Purpose**: Override API base URL if needed  
**Required**: No

---

### Google Analytics

**Variable**: `NEXT_PUBLIC_GA_ID`  
**Value**: `G-772V5VK7G0` (already configured)  
**Purpose**: Google Analytics tracking  
**Required**: No (has fallback)

---

### Google Site Verification

**Variable**: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`  
**Purpose**: Google Search Console verification  
**Required**: No

---

## Environment Variable Checklist

### Production (Vercel)
- [x] `FOLLOW_UP_BOSS_API_KEY` - Set to: `fka_0N4mnN3SvIsd5iQpoTwAbE21ySYkA3rxZD`
- [ ] `CALENDLY_WEBHOOK_SIGNING_KEY` - Optional but recommended
- [x] `NEXT_PUBLIC_GA_ID` - Already configured

### Local Development
- [ ] Create `.env.local` file
- [ ] Add `FOLLOW_UP_BOSS_API_KEY=fka_0N4mnN3SvIsd5iQpoTwAbE21ySYkA3rxZD`
- [ ] Add other variables as needed

---

## Security Notes

⚠️ **Never commit API keys to Git**
- All API keys should be in environment variables
- `.env.local` is in `.gitignore`
- Never share API keys publicly

---

## Verification

After setting environment variables:

1. **Test Follow Up Boss Connection:**
   - Check Vercel function logs after a Calendly appointment
   - Verify contact is created in Follow Up Boss

2. **Test Calendly Webhook:**
   - Schedule a test appointment
   - Check logs for webhook processing
   - Verify Follow Up Boss contact creation

---

**Last Updated**: January 2025
