# Pixflow Studio — Website Template

A modern, bilingual (EN/BG), subscription-based web design business website built with **Astro**, **Tailwind CSS**, and **TypeScript**.

---

## Tech Stack

- [Astro 4](https://astro.build) — static site generator
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first CSS
- [TypeScript](https://www.typescriptlang.org) — type safety
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — automatic sitemap

---

## Project Structure

```
pixflow-studio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.astro       # Responsive navigation with lang switcher
│   │   │   └── Footer.astro    # Footer with links and contact
│   │   └── sections/
│   │       ├── Hero.astro      # Hero section
│   │       ├── Services.astro  # Services grid
│   │       ├── Pricing.astro   # Pricing cards
│   │       ├── Process.astro   # How it works steps
│   │       ├── Trust.astro     # Trust features + testimonials
│   │       └── Contact.astro   # Contact form + direct contact
│   ├── content/
│   │   ├── en/                 # English content
│   │   │   ├── company.json    # Brand, nav, hero, footer
│   │   │   ├── services.json
│   │   │   ├── pricing.json
│   │   │   ├── process.json
│   │   │   ├── trust.json
│   │   │   └── contact.json
│   │   └── bg/                 # Bulgarian content (same structure)
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell, meta, OG tags
│   ├── pages/
│   │   ├── index.astro         # English page (/)
│   │   └── bg/
│   │       └── index.astro     # Bulgarian page (/bg/)
│   └── styles/
│       └── global.css          # Tailwind + custom component classes
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Editing Content

All content is stored in `src/content/en/` and `src/content/bg/`. You never need to touch components to update text, pricing, or services.

| File | What to edit |
|------|-------------|
| `company.json` | Brand name, hero headline, nav labels, footer |
| `services.json` | Service cards (icon, title, description) |
| `pricing.json` | Plans, prices, features, CTA labels |
| `process.json` | Steps in the "How it works" section |
| `trust.json` | Trust features + testimonials |
| `contact.json` | Form labels, email, phone |

---

## Connecting the Contact Form

The contact form at `src/components/sections/Contact.astro` is ready for wiring up. To connect it:

**Option A — Formspree (easiest)**
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint URL
3. In `Contact.astro`, replace the simulated fetch with:
```js
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { Accept: 'application/json' },
});
if (!response.ok) throw new Error('Failed');
```

**Option B — Cloudflare Pages Functions**
Add a `functions/api/contact.ts` handler that sends email via Resend or SendGrid.

---

## Deploying to Cloudflare Pages

1. Push to a GitHub repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) → Create a project
3. Connect your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**

That's it. Cloudflare Pages serves the static site globally with free CDN, HTTPS, and custom domain support.

---

## Adding a New Language

1. Duplicate `src/content/en/` → `src/content/[lang]/`
2. Translate all JSON files
3. Create `src/pages/[lang]/index.astro` copying the BG page pattern
4. Update `astro.config.mjs` sitemap locales
5. Update language switcher URLs in `Nav.astro` and `Footer.astro`

---

## Using as a Client Template

This project is designed as a reusable template. To spin up a new client site:

1. Duplicate the entire project folder
2. Edit only `src/content/en/` and `src/content/bg/` JSON files
3. Update `astro.config.mjs` `site:` URL
4. Update `public/favicon.svg` with client branding
5. Deploy to Cloudflare Pages
