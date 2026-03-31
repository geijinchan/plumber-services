# AquaFix — Plumber Services Website

A complete, production-ready plumber services website built with clean HTML, CSS, and JavaScript. No frameworks needed — open any `.html` file directly in a browser.

## 📁 File Structure

```
aquafix/ 
├── index.html          ← Homepage with 3D pipe animation
├── services.html       ← Full services listing page
├── about.html          ← About us + team page
├── pricing.html        ← Pricing packages + rates table
├── booking.html        ← Online booking form
├── contact.html        ← Contact form + Google Maps
├── css/
│   └── style.css       ← Shared styles (fonts, nav, footer, buttons)
├── js/
│   ├── components.js   ← Shared nav, footer & WhatsApp button
│   └── main.js         ← Scroll animations & active nav highlight
└── README.md
```

## 🌟 Features

- **3D Interactive Hero** — Three.js pipe system with mouse parallax, animated water drops, and rotating valves
- **6 Pages** — Home, Services, About, Pricing, Booking, Contact
- **Booking Form** — With service card selector, validation, confirmation screen, and auto-WhatsApp message
- **WhatsApp Button** — Floating button on every page with pre-filled message
- **Google Maps** — Embedded Ludhiana map on Contact page
- **Scroll Animations** — Fade-in on scroll for all sections
- **Fully Responsive** — Desktop, tablet, and mobile layouts
- **Clean & Professional** — DM Serif Display + DM Sans fonts, blue/white palette

## 🚀 How to Use

1. **Open locally:** Just double-click `index.html` — no server needed
2. **Deploy:** Upload the entire `aquafix/` folder to any web host (Netlify, Vercel, cPanel, etc.)

## ✏️ Customization

| Thing to change | Where |
|---|---|
| Business name | `js/components.js` — `injectNav()` and `injectFooter()` |
| Phone number | Find & replace `+911234567890` across all files |
| WhatsApp number | Find & replace `wa.me/911234567890` |
| Email | Find & replace `hello@aquafix.in` |
| City / Address | `contact.html` and `index.html` |
| Google Maps location | Replace the `src` URL in the `<iframe>` in `contact.html` |
| Prices | `pricing.html` — rates table and pricing cards |
| Team members | `about.html` — `.team-card` sections |

## 📱 Pages Overview

| Page | Description |
|---|---|
| `index.html` | Hero with 3D, services preview, how it works, testimonials, CTA |
| `services.html` | Full service cards with tags, why choose us |
| `about.html` | Story, stats, certifications, team, values |
| `pricing.html` | 3 packages, rates table, FAQ |
| `booking.html` | Service selector, booking form, WhatsApp auto-message |
| `contact.html` | Contact cards, message form, Google Maps, service areas, hours |

## 🔧 Tech Used

- **Three.js r128** — 3D scene (loaded from CDN)
- **Google Fonts** — DM Serif Display + DM Sans
- **Vanilla JS** — No frameworks, no dependencies
- **CSS Variables** — Easy theming and color changes
