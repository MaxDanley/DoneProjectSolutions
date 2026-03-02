

## Rebuild Done Project Solutions Website in React

### Overview
Recreate the existing static HTML/CSS/JS website as a modern React + Tailwind app, preserving the premium aesthetic, content, and interactions.

### Design System
- **Palette**: Warm beige (#e6e2d8) background, charcoal (#2e2c2a) text, teal accent (#4e7d8c)
- **Typography**: Cormorant Garamond (headings), DM Sans (body), elegant weight 300
- **Feel**: Boutique, clean, premium construction consultancy

### Pages & Routes

**1. Home Page (`/`)**
- Fixed navbar with logo ("done. Project Solutions"), nav links, and CTA button
- Nav background changes on scroll
- Hero section with animated blueprint canvas (HTML Canvas), headline, supporting text, and project phase card
- "The Problem" divider statement
- "Why projects lose momentum" section with 3 pillars (Decision-Driven, Aligned Early, Senior Involvement)
- Services pill bar linking to service pages
- Services overview grid (4 service cards)
- Approach/Capabilities section (4 numbered items)
- Quote/belief statement
- About section with stats ($4B+, Boutique by Design, sectors)
- Stewardship section
- Invest section
- Contact form (First Name, Last Name, Email, Project Type, Notes)
- Footer with brand info, page links, contact info

**2. Service Pages (4 pages, same layout template)**
- `/cost-management` — Cost Management
- `/pre-construction` — Pre-Construction
- `/custom-dashboards` — Custom Dashboards
- `/scheduling-resource-management` — Scheduling & Resource Management
- Each has: hero with title + description, detail section with "What We Do" bullet points and "Why It Matters" explanation, CTA, and footer

### Interactions & Animations
- **Blueprint canvas**: Animated architectural drawing on hero (grid lines, floor plan shapes, dimension markers)
- **Scroll reveal**: Elements fade/slide in on scroll using IntersectionObserver
- **Nav scroll effect**: Transparent → frosted glass background on scroll
- **Responsive**: Mobile-friendly layout with stacked navigation

### Components to Build
- `Navbar` — shared across all pages
- `Footer` — shared across all pages
- `BlueprintCanvas` — canvas animation for home hero
- `ScrollReveal` — wrapper for scroll-triggered animations
- `ServiceCard` — reusable service card
- `ServicePageTemplate` — shared layout for the 4 service detail pages
- `ContactForm` — form with fields
- `StatCard` — stats display component

