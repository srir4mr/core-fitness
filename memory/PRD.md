# Core Fitness Dindigul — Landing Site PRD

## Original Problem Statement
Build a premium **black & gold** landing site for **Core Fitness Dindigul** — a unisex fitness studio in Dindigul, Tamil Nadu (founded 2021 by Sathish Muthuchamy). Spec originally called for Next.js 14, but delivered on the platform default **React + CRA + Tailwind + Framer Motion** (confirmed by user). Static site, no backend interactions — all contact CTAs link to WhatsApp / tel / Instagram / Google Maps. SEO-optimized for "Best Unisex Gym in Dindigul" with LocalBusiness + FAQPage JSON-LD schema.

## Tech Stack
- **Framework**: React 19 + react-router-dom 7 (CRA via craco)
- **Styling**: Tailwind CSS 3 (custom black/gold palette + Sora + Archivo Black fonts)
- **Animation**: Framer Motion 11 (scroll reveals, staggered cards, count-up via react-countup)
- **Backend**: NOT USED — site is fully static
- **Hosting**: Emergent preview pod (frontend service)

## Architecture / Tasks Done
- Black & Gold premium theme tokens (CSS vars + Tailwind cf.* palette)
- `Seo.jsx` injects meta tags + LocalBusiness/FAQPage JSON-LD into `<head>`
- Centralized `data-testid` constants in `src/constants/testIds.js`
- Centralized business + content data in `src/lib/constants.js` (BIZ, STATS, SERVICES, PLANS, GALLERY, TESTIMONIALS, FAQS)
- 11 section components composed in `pages/Landing.jsx`

## User Personas
- **Local prospect** (Dindigul resident) searching "best gym in Dindigul" → lands, scans pricing, taps WhatsApp/Call
- **Female / couple member** evaluating safety + offers → reads FAQ, taps "Get Special Rate"
- **Athlete / serious lifter** browsing facilities → scrolls Gallery + Programs
- **Owner Sathish** sharing the URL on Instagram bio for conversions

## Core Requirements (Static)
- Sections: Hero, About (4 stat cards), Programs (6), Pricing (4 plans), Gallery (6 images + lightbox), Testimonials (4), Contact (map + 4 review links), FAQ (12), Final CTA, Footer
- Contact: WhatsApp +91 86672 79523, Phone +91 82489 99488, IG @corefitness_dindigul
- Address: Near Achutha School, Pushpamal Nagar, Dindigul, Tamil Nadu 624001
- Hours: Mon–Sun 5:30 AM – 9:00 PM
- Footer credit: Ravex Solutions → http://www.ravex.solutions
- SEO: meta + JSON-LD (LocalBusiness HealthAndBeautyBusiness + FAQPage with all 12 Q&As)
- `robots.txt` and `sitemap.xml` in `/public`

## What's Been Implemented (2026-06-28)
- [x] Hero with TRAINER (black/gold) photo, dual CTA, marquee ticker, gold proof badge
- [x] Why Core Fitness — 4 stat cards with `react-countup` animated counters
- [x] 6 Programs cards with gold hover glow
- [x] Pricing — 4 tiers (Elite plan highlighted with "Best Value" badge + gold border)
- [x] Student/Couple exclusive offer CTA → WhatsApp
- [x] Gallery — 6 masonry images with click-to-open lightbox + ESC key + backdrop close
- [x] Testimonials — 4 cards, 5-star ratings, gold accent rail
- [x] Contact — Google Maps iframe + phone/WhatsApp/IG/hours cards + 4 review link chips
- [x] FAQ — 12 accordion items, single-open behavior, plus-icon rotates to X on open
- [x] Final CTA — WhatsApp + Call buttons with gold radial bloom
- [x] Footer — Ravex Solutions gold credit with hover glow, social icons, full sitemap
- [x] Sticky glass navbar with mobile drawer
- [x] Full SEO: meta tags, LocalBusiness JSON-LD, FAQPage JSON-LD (12 questions)
- [x] robots.txt + sitemap.xml
- [x] Mobile-first responsive (390px verified, no horizontal overflow)
- [x] Testing pass — 88/97 assertions green; lightbox-close fixed in iteration 1.5

## Backlog / Future Ideas
**P1**
- Hook contact form to a real channel (e.g. Formspree / SendGrid) if owner wants form submissions
- Add Open Graph & Twitter preview images (custom designed) for shareability
- Real testimonials from actual members (replace placeholders) once collected
- Live Instagram embed (token-required) on Testimonials section
- Add a `/transformations` page with before/after slider

**P2**
- Class schedule (weekly grid) section
- Blog / fitness-tips for SEO long-tail
- Dark/Light mode toggle (currently dark-only)
- Multi-language (English/Tamil) toggle for local reach
- Custom favicon + PWA manifest
- Connect to Google Analytics 4 + Search Console for tracking

## Next Action Items
1. Collect real customer testimonials + member photos and swap into `TESTIMONIALS` in `lib/constants.js`
2. Add a custom-designed `og-image.jpg` (1200×630) and update `Seo.jsx`
3. Deploy to production and submit `sitemap.xml` to Google Search Console
