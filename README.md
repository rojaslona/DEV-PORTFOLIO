# Fullstack Developer Portfolio — React + TypeScript + Vite

A modern, responsive portfolio tailored for a Fullstack Developer. It showcases a tech-focused Bio and Experience, a Skills section with professional icons, a Projects section with stack badges and links (GitHub/Live/Docs), and a polished Contact form. Includes a compact, fully clickable theme toggle and social links (GitHub, LinkedIn) in the navbar and footer.

## Features
- Tech-focused layout and content
  - Hero with clear value prop and CTAs (Skills, Contact)
  - Bio with Highlights and an Experience timeline for software roles
  - Skills section with professional icons (Python, Java, Django, React, JS/TS, HTML, CSS, Postman)
  - Projects section with stack badges and links (Code, Live, Docs)
  - Contact form with software-oriented service options
- Theming and UI polish
  - Light/Dark theme with a smaller, fully clickable toggle
  - Smooth animations, gradients, and hover effects
- Social links
  - GitHub and LinkedIn icons in the navbar and footer

## Tech Stack
- React + TypeScript + Vite
- React Bootstrap + Bootstrap
- react-icons
- ESLint (strict TypeScript settings)

## Quick Start
Requirements: Node.js (18+ recommended), npm.

```zsh
# Install dependencies
npm install

# Start dev server (Vite)
npm run dev

# Typecheck and production build
npm run build

# Preview the production build
npm run preview
```

## Customize Your Portfolio
Edit the following files to tailor the site to your profile:

- Bio and Experience
  - `src/components/sections/Bio.tsx`
  - Update Highlights, copy, and Experience entries to match your background.

- Skills
  - `src/components/sections/Skills.tsx`
  - Replace, remove, or add skills. Icons come from `react-icons` (e.g., `react-icons/si`, `react-icons/fa`).

- Projects
  - `src/components/sections/Projects.tsx`
  - Update project cards: name, description, tech stack badges, and links (GitHub/Live).

- Navigation and Social Links
  - `src/components/layout/Navigation.tsx`
  - Brand label, section links, GitHub/LinkedIn icons.

- Footer
  - `src/components/layout/Footer.tsx`
  - GitHub/LinkedIn icons and footer copy.

- Theme Toggle (size/position/click area)
  - `src/index.css` (primary styles)
  - `src/App.css` (mobile adjustments)

- Site Title / Metadata
  - `index.html` (document title, favicon)

## Projects Data Model (optional advanced usage)
This template includes a lightweight “project card” model (refactored from a previous tracks system):

- Types
  - `src/types/index.ts`
    - `TrackRole` ➜ `'frontend' | 'backend' | 'fullstack' | 'devops'`
    - `MusicPlatformLinks` repurposed ➜ `{ github?: string; liveDemo?: string; docs?: string }`

- Cards (UI)
  - `src/components/tracks/TrackCard.tsx`
  - Displays cover image, title, owner/org, year, roles, tags, description, and buttons for GitHub/Live/Docs.

- Project Uploader (optional)
  - `src/components/tracks/TrackUpload.tsx`
  - Add/edit projects with roles, tags, and links (GitHub/Live/Docs). Audio features were removed.

Note: The folder name `tracks` remains for compatibility, but components now represent projects.

## Deployment
After `npm run build`, deploy the `dist/` folder to your hosting provider of choice:
- Static hosts: Netlify, Vercel, GitHub Pages, Cloudflare Pages
- Any static file server

Typical steps:
```zsh
npm run build
# Deploy the generated dist/ directory with your provider's CLI or dashboard
```

## Accessibility & Performance Tips
- Prefer semantic HTML and proper headings hierarchy in sections.
- Optimize project images (cover thumbnails) for faster loads.
- Use `rel="noopener noreferrer"` for external links (already applied).
- Keep animations subtle and performant (already tuned).

## What Changed From The Original Template
- Removed music-specific content and features (mixing/mastering/engineering, audio players, music platforms).
- Added tech-focused sections (Skills, Projects) and updated copy across the site.
- Navbar icons (GitHub/LinkedIn) now use snappy hover transitions aligned with other links.
- Theme toggle made smaller and fully clickable; positioned under the fixed navbar.

## License
Not specified in this template. Add a license if you plan to open-source your portfolio.
