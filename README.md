# ☕ Café Delight

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=flat-square)](https://alaaaljumaa.github.io/coffee/)
[![Made with HTML](https://img.shields.io/badge/HTML-5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Made with CSS](https://img.shields.io/badge/CSS-3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, responsive, accessible multi-page website for a fictional café — built with **vanilla HTML, CSS, and JavaScript**. No frameworks, no build step, no dependencies.

> Design language: warm editorial café aesthetic — terracotta accents, deep forest darks, serif display headings, and generous white space.

🔗 **Live site:** [https://alaaaljumaa.github.io/coffee/](https://alaaaljumaa.github.io/coffee/)

---

## 📖 Overview

Café Delight is a complete static website template for a coffee shop, bakery, or any small hospitality business. It ships with four fully designed pages, a sticky frosted-glass header, a mobile-friendly navigation menu, a JavaScript-powered menu filter, a contact form, and a modern About page with team, story, stats, and CTA sections.

The project is intentionally **framework-free** — it loads fast, works offline after the first visit, and can be hosted anywhere that serves static files (GitHub Pages, Netlify, Vercel, Cloudflare Pages, any shared host, or even a USB stick).

🌐 **See it live →** [https://alaaaljumaa.github.io/coffee/](https://alaaaljumaa.github.io/coffee/)

---

## ✨ Features

### Pages
- **`index.html`** — Home with hero, featured offerings grid
- **`about.html`** — Story, stats, values, team, CTA
- **`menu.html`** — Filterable menu (Drinks / Food) with status counter
- **`contact.html`** — Contact form, phone, email, address

### Functionality
- 🍔 **Responsive mobile navigation** — collapse into a hamburger menu below 768px, closes on `Escape`
- 🔍 **Menu category filter** — filter by Drinks / Food with a live "Showing X of Y items" status
- 📅 **Auto-updating footer year** — never goes out of date
- 📝 **Contact form** — HTML5 validation with clear labels and autocomplete hints
- 🖼️ **Progressive image loading** — `loading="lazy"` + `decoding="async"` + explicit `width`/`height` to prevent layout shift

### Accessibility
- ♿ **Skip-to-content link** for keyboard users
- 🎯 **Visible focus rings** on every interactive element
- 🏷️ **Semantic landmarks** — `<header>`, `<nav aria-label="Main">`, `<main>`, `<footer>`
- 🗣️ **ARIA attributes** — `aria-current="page"`, `aria-expanded`, `aria-controls`, `role="status"`
- 🎨 **WCAG AA contrast** across the palette
- 🎞️ **`prefers-reduced-motion`** respected — all transitions disabled for users who prefer it

### SEO & Social
- 📄 Per-page `<title>` and `<meta name="description">`
- 🔗 Open Graph tags (`og:title`, `og:description`, `og:type`)
- 📱 `<meta name="theme-color">` — colors the mobile browser chrome
- 🌐 `<html lang="en">` for screen readers and search engines

### Performance
- ⚡ **Zero JavaScript dependencies** — no jQuery, no frameworks, no polyfills
- 🎨 **CSS custom properties** — one source of truth for colors, radii, shadows, and fonts
- 📦 **System font stack** — no web font downloads, instant text render
- 🚀 **~15 KB of CSS + ~1.5 KB of JS** (uncompressed)

---

## 🛠️ Tools & Technologies Used

### Core stack

| Layer | Technology | Why |
|---|---|---|
| **Markup** | HTML5 | Semantic elements, native form validation, ARIA |
| **Styling** | CSS3 | Grid, Flexbox, custom properties, `clamp()`, `aspect-ratio`, `backdrop-filter` |
| **Behavior** | Vanilla JavaScript (ES6+) | ~60 lines, no dependencies, no build step |

### CSS techniques used
- **CSS Custom Properties** (`:root` design tokens) — single source of truth for the palette
- **CSS Grid** — `repeat(auto-fit, minmax(...))` for responsive card layouts
- **Flexbox** — navigation and card internals
- **`clamp()`** — fluid typography that scales smoothly across viewports
- **`aspect-ratio`** — consistent card image cropping
- **`backdrop-filter: blur()`** — frosted-glass sticky header
- **`@media (prefers-reduced-motion)`** — motion accessibility
- **`@media (max-width: 768px)`** — mobile-first responsive breakpoints
- **`linear-gradient()` + `radial-gradient()`** — layered hero overlays

### JavaScript features used
- **`document.getElementById` / `querySelector`** — DOM selection
- **`classList.toggle`** — nav open/close
- **`dataset`** — reading `data-category` from menu items
- **`addEventListener`** — click and `change` handlers
- **`new Date().getFullYear()`** — dynamic footer year
- **`<script defer>`** — non-blocking script loading

### Design assets
- **Inline SVG icons** — coffee cup, leaf, Wi-Fi, calendar (no icon library)
- **Data-URI SVG favicon** — ☕ emoji as favicon, zero network request
- **Unsplash photography** — free commercial-use photos (hotlinked; swap for local files in production)

### Recommended dev tools (optional)
These are **not required** to run the site, but they improve the workflow:

| Tool | Purpose |
|---|---|
| [VS Code](https://code.visualstudio.com/) | Editor |
| [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (VS Code extension) | Live reload during development |
| [Prettier](https://prettier.io/) | Consistent code formatting |
| [Squoosh](https://squoosh.app/) | Convert images to WebP / resize before deploying |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/) (built into Chrome DevTools) | Performance / accessibility / SEO auditing |
| [WAVE](https://wave.webaim.org/) | Accessibility evaluation |

---

## 📁 File Structure
