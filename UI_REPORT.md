# 👑 AMEZA — Comprehensive UI/UX Design System & Implementation Report

## Executive Summary
The **AMEZA** digital flagship has undergone a complete, authoritative transformation into a **Premium Modern Luxury Editorial E-Commerce Experience**. Inspired by the quiet luxury, restraint, and sophisticated typography of leading contemporary houses (Celine, The Row, Chanel, Bottega Veneta), this design system replaces all generic e-commerce conventions with a serene, high-end editorial rhythm.

---

## 🎨 Master Neutral Luxury Palette & Restraint Ratio

| Token | Hex Value | Role & Visual Weight |
| :--- | :--- | :--- |
| `--ameza-bg` | `#F3EFE7` | **Warm Cashmere** (Primary Canvas, ~60% of viewport) |
| `--ameza-section` | `#E7E0D5` | **Warm Travertine** (Section Containers, ~20% of viewport) |
| `--ameza-card` | `#FCFAF6` | **Soft Porcelain** (Elevated Product & Content Cards) |
| `--ameza-card-hover` | `#F4EFE7` | **Luminous Hover State** |
| `--ameza-deep` | `#241E1A` | **Deep Espresso** (Strategic Contrast Pause & Footer) |
| `--ameza-primary` | `#A96F45` | **Muted Cognac** (**Strict 3–5% visual presence for CTAs & active states**) |
| `--ameza-primary-hover` | `#BE8459` | **Warm Cognac Hover** |
| `--ameza-accent` | `#C7A98E` | **Soft Sandstone** (Subtle Accents) |
| `--ameza-border` | `#D8CFC3` | **Hairline Border Definition** |
| `--ameza-text` | `#241E1A` | **Deep Espresso Main Typography** |
| `--ameza-text-secondary` | `#625850` | **Warm Secondary Body Copy** |
| `--ameza-text-muted` | `#958A80` | **Muted Metadata** |

---

## ✍️ Editorial Typography Hierarchy

1. **`Playfair Display` (Serif)**:
   - Reserved for Campaign Hero titles, section headings, magazine spotlights, and editorial statements.
   - **Weight**: `500` (understated elegance, avoiding clumsy 700/800 bold weights).
   - **Letter-spacing**: `-0.025em`.
   - **Line-height**: `0.98 – 1.08`.
2. **`Manrope` (Sans-Serif)**:
   - For all navigation, product cards, body copy, form fields, filter chips, and primary buttons.
   - **Line-height**: `1.6 – 1.65`.
3. **`JetBrains Mono` (Monospace)**:
   - Used strictly for technical parameters (SKU codes, inventory counters, countdown clock digits).

---

## 🏛️ Component Transformations

### 1. Minimal Capsule Navigation
- Centered floating capsule on desktop: `rgba(252, 250, 246, 0.94)`, `backdrop-filter: blur(18px)`, `border: 1px solid rgba(36, 30, 26, 0.10)`.
- Wordmark: `Playfair Display` with `letter-spacing: 0.08em` and Muted Cognac dot.
- Active pill indicator powered by Framer Motion `layoutId`.

### 2. Product Presentation
- Soft Porcelain `#FCFAF6` cards with `#F0EBE3` natural light image container.
- Restrained hover: `translateY(-4px)` with image `scale(1.03)` and subtle Cognac border shift (`rgba(169, 111, 69, 0.30)`).

### 3. Campaign Home Hero
- 50/50 editorial composition: Left content with Playfair Display heading (`font-weight: 500`), primary `#A96F45` CTA, and clean editorial underline link (`Explore the edit →`). Right visual with subtle ambient lighting.

### 4. Dark Editorial Section (Visual Pause)
- Single dark section on homepage with `#241E1A` Deep Espresso background, `#FFFFFF` heading, `#C7A98E` sandstone accent, and `#A96F45` CTA.

### 5. Private Edit Deals Experience
- Transformed from cheap discount sales into **"THE PRIVATE EDIT"** with refined `-20%` pill indicators and magazine spotlight composition.

### 6. Authentication & User Management
- 50/50 campaign split with `#FFFFFF` card and `#F6F3ED` input fields.
- Admin dashboard transformed into a luxury directory with Cashmere canvas, Soft Porcelain table, and Travertine header.

---

## 🧪 Build & Performance Verification
- `npm run build` completed with **0 errors** in **1.39s**.
- Zero horizontal overflow across all breakpoints (`320px` to `2560px`).
