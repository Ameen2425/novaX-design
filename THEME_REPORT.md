# 📑 AMEZA — Master Theme & UI Architecture Report
**Theme Identity: WARM CASHMERE, ALABASTER & ROYAL COGNAC BRONZE — Modern Light Luxury**  
**Repository / Workspace:** `Ameen2425/novaX-design` (`practicefileR`)  
**Design Lead:** Senior Luxury UI/UX Designer, React Architect & CSS Specialist  

---

## 1. 🌟 Theme Identity & Overview

| Dimension | Specification |
| :--- | :--- |
| **Brand Name** | **AMEZA** |
| **Theme Aesthetic** | Modern Light Luxury Digital Flagship (Chanel, Jo Malone, Celine Aesthetic) |
| **Color Spectrum** | Warm Cashmere Linen (`#F6F3ED`) + Pure Alabaster Silk (`#FFFFFF`) + Refined Travertine (`#EDE8DF`) + Rich Royal Cognac Bronze (`#B87F4E`) + Luminous Warm Cognac (`#C99260`) + Deep Velvet Espresso (`#211C1A`) |
| **Primary Interaction** | Royal Cognac Bronze (`#B87F4E`) $\longrightarrow$ Luminous Cognac Glow (`#C99260`) |
| **Tagline & Mission** | *"Everything Worth Discovering — Curated luxury, apparel, and everyday essentials."* |

---

## 2. 🛠️ Technology Stack & Dependencies

```json
{
  "framework": "React 19.2.7",
  "build_tool": "Vite 8.1.5",
  "router": "React Router DOM 7.18.1",
  "animation_engine": "Framer Motion 13.1.0",
  "http_client": "Axios 1.19.0",
  "styling_engine": "Pure CSS Custom Properties (Variables + Reset + Typography + Animations)",
  "utility_components": "Bootstrap 5.3.8 (CDN for Offcanvas/Grid utilities)",
  "typography_sources": "Google Fonts (Playfair Display, Manrope, JetBrains Mono)",
  "live_api_endpoints": "DummyJSON REST API (Products, Category Taxonomy, User CRUD)"
}
```

---

## 3. 🎨 Master Color Architecture & 5-Tier Surface Hierarchy

To deliver an airy, high-fashion light luxury experience that avoids both dark/all-black and casual grocery tones, AMEZA employs a structured **5-Tier Cashmere & Alabaster Hierarchy**:

$$\boxed{\text{Warm Cashmere Canvas (\#F6F3ED)}} \longrightarrow \boxed{\text{Refined Travertine (\#EDE8DF)}} \longrightarrow \boxed{\text{Pure Alabaster Silk Card (\#FFFFFF)}} \longrightarrow \boxed{\text{Luminous Hover (\#FAF8F5)}} \longrightarrow \boxed{\text{Velvet Espresso (\#211C1A)}}$$

### Complete Design Token Matrix (`src/styles/variables.css`)

```css
:root {
  /* ── 1. CASHMERE & ALABASTER SURFACES ── */
  --ameza-bg:           #F6F3ED; /* Warm Luminous Cashmere Linen base canvas */
  --ameza-section:      #EDE8DF; /* Refined Travertine section containers */
  --ameza-card:         #FFFFFF; /* Pure Alabaster Silk showcase card */
  --ameza-card-hover:   #FAF8F5; /* Luminous warm alabaster hover state */
  --ameza-deep:         #211C1A; /* Deep velvet espresso for footer, offcanvas, overlays */
  --ameza-glass-bg:     rgba(246, 243, 237, 0.90); /* Frosted cashmere glass backdrop */

  /* ── 2. ROYAL COGNAC BRONZE PRIMARY ACTION & ACCENTS ── */
  --ameza-primary:       #B87F4E; /* Rich Royal Cognac Bronze Primary CTA / Badges */
  --ameza-primary-hover: #C99260; /* Luminous Warm Cognac Glow */
  --ameza-accent:        #D4A373; /* Soft Amber Suede secondary highlights / star ratings */
  --ameza-accent-dark:   #6E4421; /* Deep Espresso Bronze grounding */

  /* ── 3. CRISP DEEP ESPRESSO TYPOGRAPHY ── */
  --ameza-text:          #1F1A17; /* Deep Espresso Noir primary text (Ultra-Crisp Contrast) */
  --ameza-text-secondary:#5C524B; /* Refined Warm Charcoal supporting body text */
  --ameza-text-muted:    #8C8178; /* Muted Cashmere Slate subtle captions & metadata */
  --ameza-white:         #FFFFFF; /* Crisp Silk Highlight */

  /* ── 4. SYSTEM & BORDERS ── */
  --ameza-border:        #E0D9CE; /* Soft Cashmere Contour Border */
  --ameza-border-strong: rgba(184, 127, 78, 0.50); /* Cognac Bronze strong border */
  --ameza-border-luxury: rgba(184, 127, 78, 0.30); /* Cognac Bronze luxury card border */
  --ameza-success:       #40916C; /* Sage Emerald Success */
  --ameza-error:         #C94A29; /* Terracotta Brick Error */
}
```

### Strategic Color Distribution
* **55–60%** Warm Cashmere Canvas (`#F6F3ED`) — Luminous, Warm, High-End Flagship Atmosphere
* **15–20%** Refined Travertine (`#EDE8DF`) — Section Containers & Micro-Surfaces
* **10–15%** Pure Alabaster Silk Card (`#FFFFFF`) — Product Cards & Elevated Modules
* **5–8%** Deep Espresso Noir Typography (`#1F1A17`) — Ultra-High Contrast Editorial Copy
* **5%** Royal Cognac Bronze (`#B87F4E`) — Primary Actions, Badges, CTAs, Highlights
* **2–3%** Soft Amber Suede (`#D4A373`) — Ratings & Secondary Accents
* **Grounded Contrast** Deep Velvet Espresso (`#211C1A`) — Footer Backdrop

---

## 4. ✍️ Typography Architecture

| Role | Font Family | Weights | Fluid Scale | Components & Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Editorial Display** | `Playfair Display`, serif | `500`, `600`, `700` | `clamp(24px, 4vw, 62px)` | Hero titles, section headings, editorial statements, modal headers |
| **Interface & Body** | `Manrope`, sans-serif | `400`, `500`, `600`, `700`, `800` | `12px – 16px` | Navigation links, product names, form inputs, buttons, filter chips |
| **Technical Metadata**| `JetBrains Mono`, monospace | `500`, `700` | `11px – 14px` | Deal countdown tickers, discount codes, SKUs, inventory status |

---

## 5. 🖥️ Pages & Component Status

1. **Header / Navigation**: Floating capsule pill in Pure Alabaster Glass `rgba(255, 255, 255, 0.92)` with `backdrop-filter: blur(24px)` and `#B87F4E` active pill indicator.
2. **Hero Sections (Home, Deals, About, Auth)**: Rendered on `#F6F3ED` / `#EDE8DF` with `#B87F4E` action buttons and Deep Espresso headings.
3. **Product Catalog & Filters**: Full taxonomy filter toolbar with `#B87F4E` accents, `#FFFFFF` pure alabaster product cards, and `#FAF8F5` hover states.
4. **Single Product View**: `#FFFFFF` product gallery container, `#B87F4E` price highlight & Add to Cart CTA, `#40916C` care features.
5. **Deals Engine**: Daily countdown timer with `#B87F4E` labels, flash deals grid, 5-column product deals with `#B87F4E` CTAs.
6. **Cart & Empty State**: `#FFFFFF` elevated cart cards with `#B87F4E` action triggers.
7. **Auth Experience (Login & Signup)**: Viewport-locked editorial split-screen with `#FFFFFF` form cards and `#B87F4E` primary CTAs.
8. **Admin Dashboard (Users)**: Full CRUD table on `#FFFFFF` with `#EDE8DF` table headers and `#B87F4E` edit triggers.
9. **Footer**: Deep Velvet Espresso `#211C1A` with `#B87F4E` section titles and newsletter subscribe.

---

## 6. 🚀 Build & Production Validation

- **Vite Build Result**: `Built in 2.04s` with `0 errors`.
- **Bundle Output**: Optimized production assets in `dist/`.
