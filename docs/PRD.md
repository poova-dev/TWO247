# TWO247 — The White Owl Holidays
## Product Requirements Document + Website Architecture

**Project Type:** Travel & Holidays Website  
**Brand:** TWO247 — The White Owl Holidays  
**Current Stage:** Planning / Pre-development  
**Date:** November 2026

---

# 01 — PRD

## 1. Product Name

**TWO247 — The White Owl Holidays**

### Brand Concept

The brand combines:

- **TWO / The White Owl** — the core visual identity
- **247 / 24×7** — continuous customer assistance and travel support
- **Holidays** — tours, vacations, packages and customised travel experiences

The existing owl logo is the inspiration/reference for the new travel brand, but the website identity should be redesigned specifically for the tourism industry rather than appearing like the previous food-business brand.

---

## 2. Website Objective

Create a premium, trustworthy and conversion-focused travel website that allows visitors to:

- Discover holiday destinations
- Explore travel packages
- Understand TWO247's services
- Request customised trips
- Contact the travel team
- Get travel assistance
- Build confidence in the brand

The primary goal is **lead generation and trip enquiries**, rather than simply presenting information.

---

## 3. Target Audience

### Primary Audience

People looking for:

- Family holidays
- Honeymoon trips
- Domestic tours
- International holidays
- Group tours
- Corporate travel
- Customised vacations

### Secondary Audience

Users who already know their destination but need help with:

- Package planning
- Hotels
- Transportation
- Itinerary creation
- Activities
- Travel assistance

---

## 4. Core Value Proposition

### "Your Journey. Our Guidance. 24/7."

TWO247 should position itself as a travel partner that provides:

- Personalised trip planning
- Professional travel assistance
- Destination expertise
- Customised itineraries
- Continuous customer support

---

# 5. Core Website Features

## Must Have

### Travel Packages

Visitors can browse holiday packages with:

- Destination
- Package name
- Duration
- Highlights
- Starting price
- Gallery
- Itinerary
- Enquiry CTA

### Destinations

Organise destinations by:

- Domestic
- International

Each destination should have dedicated content and relevant packages.

### Custom Trip Enquiry

Users can submit:

- Name
- Phone
- Email
- Destination
- Travel dates
- Number of travellers
- Trip type
- Budget
- Requirements

### Contact

Provide:

- Phone
- Email
- WhatsApp
- Contact form
- Office information
- Social media links

### Responsive Design

The complete website must work properly on:

- Mobile
- Tablet
- Laptop
- Desktop

---

# 6. Nice-to-Have Features

Potential future functionality:

- Online booking
- Customer login
- Package comparison
- Wishlist
- Online payments
- Dynamic itinerary builder
- Customer dashboard
- Reviews management
- Travel enquiry CRM
- AI travel assistant

These should **not block the first website launch**.

---

# 7. Out of Scope — V1

Do not build these unless specifically requested:

- Full airline booking engine
- Real-time flight inventory
- Real-time hotel inventory
- Complex payment gateway
- Customer account system
- Loyalty programme
- Mobile application

V1 should focus on **brand presentation + destination discovery + package discovery + lead generation**.

---

# 8. Primary User Journey

```text
Visitor
   ↓
Homepage
   ↓
Discover Destination
   ↓
View Packages
   ↓
Open Package Details
   ↓
Understand Itinerary
   ↓
Click "Plan / Enquire Now"
   ↓
Submit Travel Requirements
   ↓
Travel Team Receives Lead
   ↓
Customer Follow-up
```

---

# 9. Secondary User Journey — Custom Trip

```text
Homepage
   ↓
"Plan My Trip"
   ↓
Custom Trip Form
   ↓
Destination + Dates
   ↓
Travellers + Budget
   ↓
Requirements
   ↓
Submit
   ↓
Confirmation
   ↓
Travel Consultant Contact
```

---

# 10. Success Metrics

The website should be measured primarily by:

- Travel enquiries
- WhatsApp clicks
- Contact-form submissions
- Package-detail views
- Destination-page views
- CTA conversion rate
- Organic search traffic
- Mobile engagement

---

# 11. Brand Experience

The website should communicate:

**Premium + Trustworthy + Adventurous + Personal + Available**

Avoid:

- Generic travel-template appearance
- Overly colourful tourism UI
- Excessive animations
- Cheap-looking stock imagery
- Cluttered package cards
- Too many competing CTAs

---

# 02 — WEBSITE ARCHITECTURE

## 1. Main Sitemap

```text
/
│
├── /about
│
├── /packages
│   ├── /packages/domestic
│   ├── /packages/international
│   ├── /packages/honeymoon
│   ├── /packages/family
│   └── /packages/group
│
├── /destinations
│   ├── /destinations/india
│   ├── /destinations/dubai
│   ├── /destinations/singapore
│   ├── /destinations/maldives
│   └── /destinations/[destination]
│
├── /packages/[package-slug]
│
├── /custom-trip
│
├── /blog
│   └── /blog/[slug]
│
├── /contact
│
├── /privacy-policy
│
└── /terms
```

---

# 2. Navigation

## Desktop

```text
TWO247 Logo

Home
Destinations
Packages
About
Blog
Contact

                         [Plan Your Trip]
```

### Primary CTA

**Plan Your Trip**

This should remain visually stronger than ordinary navigation links.

---

## Mobile

```text
Logo                         ☰
                             
Menu
├── Home
├── Destinations
├── Packages
├── About
├── Blog
├── Contact
└── Plan Your Trip
```

A persistent **WhatsApp / Enquire** action can be considered on mobile.

---

# 3. Homepage Architecture

```text
HOME
│
├── Hero
│
├── Trust / Value Proposition
│
├── Popular Destinations
│
├── Featured Holiday Packages
│
├── Travel Categories
│
├── Why TWO247
│
├── How It Works
│
├── Custom Trip CTA
│
├── Testimonials
│
├── FAQ
│
├── Contact CTA
│
└── Footer
```

---

# 4. Hero Section

### Primary Message

**Your Journey. Our Guidance. 24/7.**

### Supporting Message

Discover memorable holidays, thoughtfully planned around your destination, travel style and requirements.

### CTAs

**Explore Packages**

**Plan My Trip**

### Visual Direction

Use a cinematic travel image/video with:

- Destination scenery
- Travellers
- Premium composition
- Subtle motion
- Strong text contrast

The owl identity can appear subtly through the logo/brand system rather than dominating the hero.

---

# 5. Destination Architecture

Each destination page should contain:

```text
Destination Hero
        ↓
Destination Introduction
        ↓
Best Time to Visit
        ↓
Top Experiences
        ↓
Recommended Packages
        ↓
Gallery
        ↓
Travel Information
        ↓
FAQ
        ↓
Plan Your Trip CTA
```

Dynamic destination URLs should be supported:

```text
/destinations/dubai
/destinations/maldives
/destinations/singapore
/destinations/[destination]
```

---

# 6. Package Architecture

## Package Listing

```text
Packages
│
├── Filters
│   ├── Destination
│   ├── Duration
│   ├── Trip Type
│   └── Budget
│
└── Package Cards
```

### Package Card

```text
Image
Destination
Package Name
Duration
Short Description
Starting From ₹XXXX
[View Package]
```

---

# 7. Package Detail Page

```text
Package Hero
      ↓
Package Summary
      ↓
Duration / Destination / Price
      ↓
Highlights
      ↓
Day-by-Day Itinerary
      ↓
What's Included
      ↓
What's Not Included
      ↓
Gallery
      ↓
Important Information
      ↓
FAQ
      ↓
Enquiry CTA
```

---

# 8. Custom Trip Page

## Heading

**Your Trip, Your Way.**

Users submit:

```text
Name
Phone
Email
Destination
Travel Date
Return Date
Travellers
Adults
Children
Trip Type
Budget
Special Requirements
```

### CTA

**Create My Trip**

After submission:

```text
Success Message
      ↓
"We've received your travel request."
      ↓
Travel consultant follow-up
```

---

# 9. About Page

```text
About TWO247
       ↓
Our Story
       ↓
Our Travel Philosophy
       ↓
Why Choose Us
       ↓
Our Services
       ↓
24/7 Support
       ↓
CTA
```

---

# 10. Contact Page

```text
Contact Hero
      ↓
Phone
Email
WhatsApp
Office Information
      ↓
Contact Form
      ↓
Map / Location
      ↓
FAQ
```

---

# 11. Blog Architecture

```text
/blog

Blog Listing
│
├── Destination Guides
├── Travel Tips
├── Honeymoon Ideas
├── Family Travel
├── International Travel
└── Travel Inspiration
```

Individual articles:

```text
/blog/[slug]
```

Each article should contain:

- SEO title
- Featured image
- Introduction
- Main content
- Related destinations
- Related packages
- CTA

---

# 12. Conversion Architecture

Every major page should lead toward one of three actions:

### Primary

**Plan Your Trip**

### Secondary

**Explore Packages**

### Direct Contact

**WhatsApp / Call Us**

The user should never reach a page with no obvious next action.

---

# 13. Technical Architecture Direction

Recommended initial stack:

- **Frontend:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Lucide Icons
- **Animation:** Framer Motion
- **Images:** Cloudinary / Unsplash optimized CDN
- **Database / CMS:** Supabase (or Headless CMS / Prisma)
- **Hosting:** Vercel
- **Version Control:** GitHub

The development workflow should remain modular: architecture first, then page-by-page implementation and QA rather than generating the entire website blindly.

---

# 14. V1 Development Sequence

```text
PHASE 01: PRD + Architecture (Current)
PHASE 02: Brand / UI Design System
PHASE 03: Homepage
PHASE 04: Packages
PHASE 05: Destinations
PHASE 06: About + Contact + Custom Trip
PHASE 07: Blog / SEO Structure
PHASE 08: Responsive QA
PHASE 09: Performance + Security
PHASE 10: Deployment
```

---

# 15. Planning Constraints & Rules

1. **No Hardcoded Brand/Domain:** Do not start hardcoding or building static domain links until the brand name and domain registration are officially confirmed.
2. **Centralized Brand Config:** All references to brand name, taglines, contact details, social links, and domain URL must reside in a single configuration file (`site.config.ts`).
3. **Tourism-First Owl Identity:** Evolve the previous food-brand owl into an elegant, modern, minimalist travel guide symbol (vision, night/day 24/7 navigation, wisdom, trustworthy companion).
