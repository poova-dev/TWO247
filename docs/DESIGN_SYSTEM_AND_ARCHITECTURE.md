# TWO247 — Brand Design System & Technical Architecture Specification
**Phase 01 & 02: Brand Foundations, Design System & Decoupled Configuration**

---

## 1. Brand Identity Evolution

### The Shift: From Food Business to Premium Travel Navigator

| Dimension | Previous Food Identity | New Travel & Holidays Identity (TWO247) |
|---|---|---|
| **Archetype** | Cozy bistro / culinary character | The Wise Guide & 24/7 Travel Guardian |
| **Owl Symbolism** | Cartoonish / cafe mascot | Sleek, geometric, observant (vision, perspective, day & night vigilance) |
| **Tone** | Casual, quirky, foodie | Sophisticated, trustworthy, inspiring, reassuring |
| **Color Language** | Warm diner/cafe hues | Deep midnight & twilight navy + Sunlit champagne/gold + Pearl white |
| **Value Proposition** | Food & dining hospitality | "Your Journey. Our Guidance. 24/7." |

### Brand Pillars
1. **Unbroken Assurance (24×7):** Travelers are never alone; support is live at every stage.
2. **Curation Over Clutter:** Handcrafted itineraries tailored to personal style rather than bulk generic tours.
3. **Quiet Luxury:** Clean layouts, generous white space, cinematic photography, and subtle micro-interactions.

---

## 2. Decoupled Brand & Domain Configuration Architecture

To strictly satisfy the rule:
> **"Do not start coding until the brand name/domain decision is confirmed. The domain is not yet purchased, so the domain should remain configurable until the client confirms the final name/domain."**

All brand references across the entire application will be consumed through a single, type-safe configuration module:

```typescript
// src/config/site.config.ts
export const siteConfig = {
  // Brand Identity (Easily updated in 1 line if brand name changes)
  brand: {
    name: "TWO247",
    fullName: "TWO247 — The White Owl Holidays",
    shortName: "TWO247",
    tagline: "Your Journey. Our Guidance. 24/7.",
    subTagline: "Handcrafted holiday packages and bespoke travel experiences.",
    legalName: "The White Owl Holidays Pvt. Ltd.",
    currency: "INR",
    currencySymbol: "₹",
  },
  
  // Domain & URL Config (Configurable before domain purchase)
  domain: {
    productionUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://two247holidays.com",
    previewUrl: "https://two247.vercel.app",
  },

  // Contact & Conversion Channels
  contact: {
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    whatsapp: "919876543210",
    whatsappDefaultMessage: "Hi TWO247 team, I would like to enquire about planning a holiday.",
    email: "travel@two247holidays.com",
    supportEmail: "support@two247holidays.com",
    officeAddress: "Mumbai / Delhi, India", // To be finalized
    businessHours: "24 Hours / 7 Days a Week",
  },

  // Social Links
  social: {
    instagram: "https://instagram.com/two247holidays",
    facebook: "https://facebook.com/two247holidays",
    linkedin: "https://linkedin.com/company/two247holidays",
  },

  // SEO & OpenGraph Defaults
  seo: {
    defaultTitle: "TWO247 — The White Owl Holidays | 24/7 Travel Guidance",
    titleTemplate: "%s | TWO247 — The White Owl Holidays",
    description: "Discover memorable holidays, thoughtfully planned around your destination, travel style, and requirements. 24/7 travel support from start to finish.",
    keywords: [
      "luxury travel",
      "holiday packages",
      "international tours",
      "honeymoon packages",
      "custom itinerary",
      "family vacations",
      "travel agency 24/7",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
```

---

## 3. UI Design System Tokens

### 3.1 Color Palette

```css
/* Color Tokens (Tailwind v4 / CSS Variables) */
:root {
  /* Primary Midnight: Nocturnal Vigilance & Trust */
  --brand-navy-950: #050C1A;  /* Deepest midnight (footer / dark cards) */
  --brand-navy-900: #0B172E;  /* Hero overlays & primary text dark */
  --brand-navy-800: #132448;  /* Secondary midnight */
  
  /* Brand Accent: Sunlit Horizon & Warmth */
  --brand-amber-500: #D97706; /* Primary CTA & Highlights */
  --brand-amber-400: #F59E0B; /* Hover CTA */
  --brand-gold-300: #FDE68A;  /* Subtle luxury badge accent */

  /* Destination Accent: Aegean & Coast */
  --brand-azure-500: #0284C7; /* Informational / beach destinations */
  --brand-azure-50:  #F0F9FF; /* Soft background tint */

  /* Neutral Surface */
  --brand-slate-900: #0F172A; /* High contrast body text */
  --brand-slate-600: #475569; /* Secondary muted text */
  --brand-slate-100: #F1F5F9; /* Card surface backgrounds */
  --brand-slate-50:  #F8FAFC; /* Page background */
  --brand-pure-white:#FFFFFF; /* Clean card surfaces */
}
```

### 3.2 Typography Hierarchy

- **Primary Display Font (Headings):** `Plus Jakarta Sans` or `Outfit` (Geometric, contemporary, approachable yet luxury).
- **Body Font:** `Inter` (Optimized for digital reading, high legibility on mobile).
- **Accent/Quote Font (Optional subtle editorial touches):** `Playfair Display` or `Cormorant Garamond` for testimonials and luxury badges.

### 3.3 Core UI Components

1. **Header & Navigation:**
   - Sticky blur backdrop (`backdrop-blur-md bg-white/80`).
   - Clean brand mark with typography lockup.
   - Prominent **"Plan Your Trip"** button with amber accent.
   - Quick one-tap WhatsApp trigger.

2. **Package Cards:**
   - Aspect ratio 4:3 high-resolution destination image.
   - Clean metadata pill badges: `5 Nights / 6 Days`, `Customisable`, `International / Domestic`.
   - Clear starting price formatting: `Starting from ₹45,999 / person`.
   - Quick action: **"View Details"** + Direct WhatsApp enquiry icon.

3. **Destination Spotlight:**
   - Curated cards for India (Kashmir, Kerala, Rajasthan, Goa, Northeast) & International (Dubai, Maldives, Singapore, Bali, Europe, Thailand).
   - "Best Time to Visit" weather indicator badge.

4. **Custom Trip Planner Form:**
   - 3-step progressive disclosure:
     - Step 1: Where & When (Destination, Dates)
     - Step 2: Who & Budget (Travellers: Adults, Kids, Estimated Budget)
     - Step 3: Contact & Notes (Name, Phone, WhatsApp, Specific Requests)
   - Immediate feedback and instant WhatsApp routing option.

5. **Sticky Mobile Action Bar:**
   - Fixed at bottom of mobile viewports:
     - Button 1: `WhatsApp Us` (Direct chat link with prefilled context)
     - Button 2: `Plan My Trip` (Opens modal or scrolls to custom trip form)

---

## 4. Database & Entity Schema (V1)

```prisma
// Proposed Prisma / Supabase Schema for V1

model Destination {
  id          String    @id @default(uuid())
  slug        String    @unique
  name        String
  region      RegionType // DOMESTIC | INTERNATIONAL
  tagline     String
  description String
  coverImage  String
  gallery     String[]
  bestTimeToVisit String
  topExperiences  String[]
  travelTips  String[]
  faqs        Json
  isFeatured  Boolean   @default(false)
  packages    Package[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Package {
  id              String      @id @default(uuid())
  slug            String      @unique
  name            String
  destinationId   String
  destination     Destination @relation(fields: [destinationId], references: [id])
  durationDays    Int
  durationNights  Int
  startingPrice   Int
  category        TripCategory // HONEYMOON | FAMILY | GROUP | LUXURY | ADVENTURE
  highlights      String[]
  coverImage      String
  gallery         String[]
  inclusions      String[]
  exclusions      String[]
  itinerary       Json        // Array of { day: 1, title: "", description: "", meals: [] }
  faqs            Json
  isFeatured      Boolean     @default(false)
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
}

model TripEnquiry {
  id             String    @id @default(uuid())
  packageSlug    String?
  destination    String
  name           String
  email          String
  phone          String
  travelDate     DateTime?
  returnDate     DateTime?
  adults         Int       @default(2)
  children       Int       @default(0)
  budgetRange    String?
  tripType       String?
  requirements   String?
  status         EnquiryStatus @default(NEW) // NEW | CONTACTED | CONVERTED | CLOSED
  createdAt      DateTime  @default(now())
}
```

---

## 5. Development Roadmap & Milestones

- **Phase 01:** Architecture & PRD Review *(Done)*
- **Phase 02:** Brand / UI Design System & Component Library Setup *(Current)*
- **Phase 03:** Homepage Implementation (Hero, Value Props, Featured Packages, Testimonials, Lead CTAs)
- **Phase 04:** Packages Listing & Detailed Itinerary Pages
- **Phase 05:** Destinations Listing & Destination Detail Showcase
- **Phase 06:** Custom Trip Planner, About Us & Contact Pages
- **Phase 07:** Blog Infrastructure & SEO Metadata Integration
- **Phase 08:** Mobile Responsiveness & Multi-Device QA
- **Phase 09:** Performance Optimization (Image CDN, Core Web Vitals) & Security
- **Phase 10:** Production Deployment to Vercel
