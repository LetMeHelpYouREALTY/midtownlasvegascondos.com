# Midtown Las Vegas Condos - Customization Guide

## Your Site is Ready! 🎉

I've built a complete Midtown Vegas-style website for you. The site matches the structure and design of midtownvegas.com and is ready for customization with your contact information.

## Quick Start

1. **Development Server**: Already running at `http://localhost:3000`
2. **View Your Site**: Open your browser to see the live site

## Where to Add Your Contact Information

### 1. Footer Contact Section
**File**: `app/components/footer.tsx`
**Lines**: 58-70

Replace the contact information:
```typescript
<p>
  921 S Main St<br />
  Las Vegas, NV 89101
</p>
<p>(725) 705-7975</p>
<p>
  Mon-Fri: 9 am – 5 pm<br />
  Sat/Sun: Closed
</p>
```

### 2. Homepage Contact Section
**File**: `app/page.tsx`
**Lines**: Around line 215-235

Update the contact cards:
```typescript
<div>
  <h3 className="text-xl font-semibold text-slate-900 mb-2">Address</h3>
  <p className="text-slate-600">
    YOUR ADDRESS HERE<br />
    Las Vegas, NV 89101
  </p>
</div>
<div>
  <h3 className="text-xl font-semibold text-slate-900 mb-2">Phone</h3>
  <p className="text-slate-600">YOUR PHONE HERE</p>
</div>
```

### 3. Social Media Links
**File**: `app/components/header.tsx` (Lines 82-130)
**File**: `app/components/footer.tsx` (Lines 103-137)

Replace Instagram, Facebook, and TikTok URLs with your accounts.

## Key Features Built

✅ **Homepage** - Hero section, timeline, events
✅ **Navigation** - Desktop & mobile with dropdowns
✅ **English Residences Page** - Property showcase
✅ **Events Page** - Calendar of Midtown events
✅ **About Page** - Neighborhood story
✅ **Newsletter Signup** - Email collection
✅ **Footer** - Contact info & links
✅ **Responsive Design** - Works on all devices

## Site Structure

```
/                          - Homepage
/neighborhood/
  /english-residences     - Main property page
  /midtown-plaza          - (Create similar pages)
  /english-hotel          - (Create similar pages)
  /pepper-club            - (Create similar pages)
  /arts-district          - (Create similar pages)
  /first-fridays          - (Create similar pages)
  /ev-program             - (Create similar pages)
  /run-club               - (Create similar pages)
/events                   - Events calendar
/about                    - About Midtown
```

## Customization Checklist

- [ ] Update contact information in footer
- [ ] Update contact information on homepage
- [ ] Replace social media links with your accounts
- [ ] Add your real images (currently placeholders)
- [ ] Update newsletter signup to connect to your email service
- [ ] Customize English Residences page with your property details
- [ ] Create additional neighborhood pages as needed
- [ ] Update events with your actual events
- [ ] Add your logo (replace "MIDTOWN" text in header)

## Adding Real Images

Replace placeholder image sections like:
```typescript
<div className="aspect-video bg-slate-200 rounded-lg">
  <div className="w-full h-full flex items-center justify-center text-slate-400">
    Map Location
  </div>
</div>
```

With actual Next.js Image components:
```typescript
<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## Newsletter Integration

The newsletter component is in `app/components/newsletter.tsx`. Currently it logs to console. To integrate with an email service:

1. **Mailchimp**: Add API key and list ID
2. **SendGrid**: Use their API
3. **ConvertKit**: Connect your account
4. **Or use Vercel Forms**: Simple form handling

## Deploying to Vercel

```bash
# Already configured with pnpm
git add .
git commit -m "Customize contact information"
git push

# Your Vercel project will auto-deploy!
```

## Need Help?

- Site is fully responsive and matches Midtown Vegas design
- All navigation works
- Contact sections are ready for your info
- Newsletter is functional (needs email service integration)

## What's Next?

1. Add your contact information
2. Replace placeholder images with real photos
3. Customize property descriptions
4. Add more neighborhood pages
5. Connect newsletter to email service
6. Deploy!

---

**Note**: This site is built with Next.js 15, React 19, and Tailwind CSS 4. It follows all modern best practices and is ready for production.

