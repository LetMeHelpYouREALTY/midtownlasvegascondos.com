# CTA Audit & RealScout Link Strategy

## 🎯 Your RealScout Links

### 1. Main Search Page
**URL**: `http://drjanduffy.realscout.com/`  
**Use for**: General property search, browse listings, immediate exploration

### 2. Onboarding Link  
**URL**: `http://drjanduffy.realscout.com/onboarding`  
**Use for**: Lead generation, prospect info collection, personalized searches

---

## 📊 CTA Strategy by Context

### Primary CTAs (Most Prominent)
**Use**: Onboarding link - Capture lead info first
- Homepage hero buttons
- Neighborhood page main CTAs
- "Contact Dr. Jan" buttons
- "Schedule Tour" buttons
- "Learn More" buttons

### Secondary CTAs (Browse/Explore)
**Use**: Main search page - Let them explore freely
- "Search Properties" navigation link
- "Explore Residences" buttons
- "View Listings" links
- "Find Homes" buttons

---

## 🔄 Recommended Updates

### Homepage CTAs:

**Hero Section - Primary CTA**:
```
Button: "Explore Residences" 
Link: http://drjanduffy.realscout.com/onboarding
Reason: First impression - collect prospect info
```

**Hero Section - Secondary CTA**:
```
Button: "Search Properties"
Link: http://drjanduffy.realscout.com/
Reason: Let them browse if not ready to provide info
```

### Neighborhood Pages:

**"Contact Dr. Jan" buttons**:
```
Link: http://drjanduffy.realscout.com/onboarding
Reason: High intent - collect info for follow-up
```

**"Search [Area] Homes" sections**:
```
Keep RealScout widgets (already embedded)
Add link above widget: "Or browse all properties →"
Link: http://drjanduffy.realscout.com/
```

### Navigation:

**"Search Properties" menu item**:
```
Current: /search (internal page)
Change to: http://drjanduffy.realscout.com/
Reason: Direct access to full search capability
```

---

## 📝 Page-by-Page CTA Audit

### ✅ Homepage (`/`)
- Hero "Explore Residences" → Onboarding
- Hero "Contact Us" → Onboarding  
- Add "Browse All Properties" → Main search
- Keep embedded RealScout widgets

### ✅ English Residences (`/neighborhood/english-residences`)
- "Call/Email Dr. Jan" → Keep phone/email
- Add "Start Your Search" → Onboarding
- Keep embedded widgets

### ✅ Each Neighborhood Page
- Primary CTA → Onboarding
- "Search Properties" → Main search
- Keep embedded widgets

### ✅ Search Page (`/search`)
- Redirect entire page to: http://drjanduffy.realscout.com/
- Or keep widgets + add "Advanced Search" → Main search

### ✅ Contact Page (`/contact`)
- Form submission → Can integrate with RealScout API
- "Call/Email" → Keep direct contact
- Add "Browse Properties First" → Main search

### ✅ About/Events/News
- All CTAs → Onboarding (high intent readers)

---

## 🚀 Implementation Priority

### Phase 1: Quick Wins (Do Now)
1. Update hero CTAs to use onboarding
2. Add "Browse All Properties" links using main search
3. Update navigation "Search Properties" to main search

### Phase 2: Strategic (Next)
4. Add onboarding links to all "Contact Dr. Jan" CTAs
5. Update neighborhood page CTAs
6. Add alternative browse links throughout

### Phase 3: Advanced (Later)
7. Track which links get most clicks
8. A/B test onboarding vs direct search
9. Customize onboarding parameters per page

---

## 🎨 Button Hierarchy Recommendation

### Primary (Most Prominent)
```html
<a href="http://drjanduffy.realscout.com/onboarding">
  Get Started / Contact Dr. Jan / Schedule Tour
</a>
```

### Secondary (Less Prominent)
```html
<a href="http://drjanduffy.realscout.com/">
  Browse Properties / Search Homes
</a>
```

### Tertiary (Direct Contact)
```html
<a href="tel:7025001955">Call</a>
<a href="mailto:DrJanSells@MidtownLasVegasCondos.com">Email</a>
```

---

## ✅ Ready to Implement?

I can update all CTAs with this strategy. Want me to:

A) **Full Implementation** - Update all CTAs across all pages  
B) **Homepage Only** - Start with homepage as test  
C) **Custom Strategy** - Tell me which pages/buttons to prioritize

Let me know and I'll implement immediately!

