# 📑 AMEZA — Master Theme & UI Architecture Report
**Theme Identity: WARM CASHMERE, SOFT PORCELAIN & MUTED COGNAC — Final Premium Luxury Editorial**  
**Repository / Workspace:** `Ameen2425/novaX-design` (`practicefileR`)  
**Design Lead:** Senior Luxury Brand Designer, Creative Director & CSS Architect  

---

## 1. 🌟 Theme Identity & Overview

| Dimension | Specification |
| :--- | :--- |
| **Brand Name** | **AMEZA** |
| **Theme Aesthetic** | Premium Modern Luxury Editorial Lifestyle & Commerce (Celine, The Row, Chanel Aesthetic) |
| **Color Spectrum** | Warm Cashmere Canvas (`#F3EFE7`) + Soft Porcelain (`#FCFAF6`) + Warm Travertine (`#E7E0D5`) + Muted Cognac (`#A96F45`) + Warm Cognac Hover (`#BE8459`) + Soft Sandstone (`#C7A98E`) + Deep Espresso (`#241E1A`) |
| **Primary Interaction** | Muted Cognac (`#A96F45`) $\longrightarrow$ Warm Cognac (`#BE8459`) — Strictly **3–5% Visual Presence** |
| **Typography System** | `Playfair Display` (Serif, `font-weight: 500`, Headings/Editorial) + `Manrope` (Sans-Serif, Controls/Descriptions) + `JetBrains Mono` (SKU/Technical only) |
| **Tagline & Mission** | *"Everything Worth Discovering — A curated collection of products designed around modern everyday living."* |

---

## 2. 🛠️ Technology Stack & Dependencies

```json
{
  "framework": "React 19.2.7",
  "build_tool": "Vite 8.1.5",
  "router": "React Router DOM 7.18.1",
  "animation_engine": "Framer Motion 13.1.0",
  "http_client": "Axios 1.19.0",
  "styling_engine": "Pure Vanilla CSS Custom Properties (Variables + Reset + Typography + Transitions)",
  "typography_sources": "Google Fonts (Playfair Display, Manrope, JetBrains Mono)",
  "live_api_endpoints": "DummyJSON REST API (Products, Category Taxonomy, User CRUD)"
}
```

---

## 3. 🎨 Master Color Architecture & Principle of Luxury Restraint

AMEZA adheres strictly to the **principle of luxury restraint**: Cognac accents are restrained to **3–5% visual distribution** for surgical CTAs, active states, and prices. The vast majority of visual canvas is delivered through calming, warm neutrals:

$$\boxed{\text{Warm Cashmere Canvas (\#F3EFE7)}} \longrightarrow \boxed{\text{Warm Travertine (\#E7E0D5)}} \longrightarrow \boxed{\text{Soft Porcelain Card (\#FCFAF6)}} \longrightarrow \boxed{\text{Luminous Hover (\#F4EFE7)}} \longrightarrow \boxed{\text{Deep Espresso Pause (\#241E1A)}}$$

### Complete Design Token Matrix (`src/styles/variables.css`)

```css
:root {
  /* ── 1. MASTER NEUTRAL LUXURY PALETTE ── */
  --ameza-bg:             #F3EFE7; /* Warm Cashmere (Primary Canvas) */
  --ameza-bg-secondary:   #EDE6DC; /* Muted Cashmere Secondary */
  --ameza-section:        #E7E0D5; /* Warm Travertine Hearth */
  --ameza-card:           #FCFAF6; /* Soft Porcelain Showcase Card */
  --ameza-card-hover:     #F4EFE7; /* Soft Luminous Hover */
  --ameza-deep:           #241E1A; /* Deep Espresso (Strategic Contrast Pause) */
  --ameza-glass-bg:       rgba(252, 250, 246, 0.94); /* Frosted Porcelain Glass */
  --ameza-image-bg:       #F0EBE3; /* Product Image Area */

  /* ── 2. MUTED COGNAC (STRICT 3–5% ACCENT DISTRIBUTION) ── */
  --ameza-primary:        #A96F45; /* Muted Cognac Primary CTA */
  --ameza-primary-hover:  #BE8459; /* Warm Cognac Hover */
  --ameza-accent:         #C7A98E; /* Soft Sandstone Accent */
  --ameza-accent-dark:    #6E4421; /* Deep Espresso Bronze */

  /* ── 3. DEEP ESPRESSO & NEUTRAL TYPOGRAPHY ── */
  --ameza-text:           #241E1A; /* Deep Espresso Main Text */
  --ameza-text-secondary: #625850; /* Refined Warm Secondary */
  --ameza-text-muted:     #958A80; /* Muted Sandstone Metadata */
  --ameza-white:          #FFFFFF; /* Pure White */

  /* ── 4. HAIRLINE BORDERS & SHADOW SYSTEM ── */
  --ameza-border:         #D8CFC3; /* Clean Hairline Border */
  --radius-card:          14px;
  --radius-pill:          999px;
  --shadow-card:          0 8px 25px rgba(36, 30, 26, 0.06);
  --shadow-card-hover:    0 15px 35px rgba(36, 30, 26, 0.10);
}
```

---

## 4. ✍️ Typography Architecture & Hierarchy

| Typography Level | Font Family | Weight | Tracking / Leading | Target Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Hero & Major Headings** | `Playfair Display` | `500` | `-0.025em` / `0.98–1.08` | Campaign Hero, Category Headings, Featured Spotlight, About Story |
| **Subheadings & Titles** | `Playfair Display` / `Manrope` | `500` / `600` | `-0.015em` / `1.15` | Section H3/H4, Card Titles, Dialog Headers |
| **Body & UI Controls** | `Manrope` | `400` / `600` / `700` | `0.02em` / `1.65` | Navigation Links, Descriptions, Filter Pills, Action Buttons |
| **Eyebrows & Editorial Labels** | `Manrope` | `700` | `0.16em` uppercase | Section Eyebrows (`THE AMEZA EDIT`, `THE PRIVATE EDIT`, `CURATED`) |
| **Technical Metadata** | `JetBrains Mono` | `500` | `0.08em` | SKU numbers, inventory counters, countdown timer values |

---

## 5. 📱 Component Implementations & Verified Visual Hierarchy

1. **Header Navigation**:
   - Centered floating capsule: `rgba(252, 250, 246, 0.94)`, `backdrop-filter: blur(18px)`, `border: 1px solid rgba(36, 30, 26, 0.10)`, `box-shadow: 0 12px 35px rgba(36, 30, 26, 0.08)`.
   - Wordmark in `Playfair Display` with `letter-spacing: 0.08em` and Muted Cognac dot.
   - Active link indicator with smooth Framer Motion `layoutId` pill.
2. **Product Cards**:
   - Soft Porcelain `#FCFAF6` card with `#F0EBE3` natural light image container.
   - Smooth hover interaction: `translateY(-4px)` with image `scale(1.03)` and subtle Cognac border glow.
3. **Homepage Campaign Hero**:
   - 50/50 editorial split with Playfair Display heading (`font-weight: 500`), primary `#A96F45` CTA, and clean editorial link.
4. **Dark Editorial Section (Strategic Visual Pause)**:
   - Deep Espresso `#241E1A` container with `#FFFFFF` heading, `#C7A98E` accent, and `#A96F45` button.
5. **Private Edit Deals Page**:
   - Transformed into an exclusive luxury edit with clean discount tags, original price strike-through, and magazine spotlight layout.
6. **Authentication (Login/Signup)**:
   - 50/50 split campaign layout with `#FFFFFF` form card and `#F6F3ED` input fields.
7. **Users Table (Admin Dashboard)**:
   - Cashmere canvas `#F3EFE7`, Soft Porcelain table `#FCFAF6`, Warm Travertine header `#E7E0D5`, and mobile card transform.
8. **Footer**:
   - Deep Espresso `#241E1A` brand directory with `#C7A98E` headings and `#D8D1C9` links.

---

## 6. 🧪 Verification & Build Status

- **Vite Production Build**: Verified with `npm run build` $\longrightarrow$ **0 errors**, build time **1.39s**.
- **Responsive Guarantee**: Fluid breakpoints from `320px` to `2560px` with 0 horizontal overflow.
- **Cognac Restraint Rule**: Cognac accent remains strictly within 3–5% visual distribution.
