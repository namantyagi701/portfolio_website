# Naman Tyagi — Portfolio Website

> Personal developer portfolio for Naman Tyagi: Full-Stack & AI Systems Developer specializing in React, Node.js, PostgreSQL (pgvector), and scalable distributed systems.

## Live Demo
<!-- TODO: Replace with your actual deployed URL once deployed -->
- **URL**: [https://portfolio-namantyagi701.vercel.app](https://portfolio-namantyagi701.vercel.app)

## Preview
<!-- TODO: Add portfolio screenshot to docs/screenshot.png -->
![Screenshot](./docs/screenshot.png)

## Features
- **Editorial Film Aesthetic**: Minimalist high-contrast dark theme (`#0a0a0a`) with vivid crimson accents (`#d90f1e`), crisp monospace metadata indicators, and film playhead timeline markers.
- **Single Source of Truth**: Unified content schema in `src/data/content.js` controlling bio, metrics, projects, and contact info.
- **Cinematic Interactive Demos**: Interactive project details modal with keyboard focus trap, ESC dismissal, and trigger focus restoration.
- **Performant Smooth Scrolling**: Integrated Lenis smooth scroll paired with fluid Framer Motion animations.
- **Responsive Layout**: Designed for mobile through ultra-wide screens with full-bleed vector typography.
- **Full SEO & Open Graph Ready**: Complete meta tags, Twitter card tags, canonical links, XML sitemap, `robots.txt`, and branded 1200x630 OG image.
- **Accessible (WCAG AA compliant)**: High-contrast text, minimum 12px font sizes, visible `:focus-visible` rings, and ARIA labels on interactive elements.

## Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Linting**: [oxlint](https://oxc.rs/)

## Local Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/namantyagi701/portfolio_website.git
cd portfolio_website

# Install dependencies
npm install
```

### Development
```bash
# Start local dev server
npm run dev
```

### Linting
```bash
# Run oxlint for static analysis
npm run lint
```

### Production Build
```bash
# Compile and bundle for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure
```text
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI (lint + build)
├── public/
│   ├── favicon.svg             # Branded SVG favicon
│   ├── og-image.png            # 1200x630 Open Graph preview image
│   ├── robots.txt              # Search engine crawler directives
│   └── sitemap.xml             # XML sitemap
├── src/
│   ├── components/
│   │   ├── common/             # Reusable UI primitives (Button, Modal, etc.)
│   │   ├── layout/             # Navbar, Background noise
│   │   └── sections/           # Hero, About, TechStrip, FeaturedProjects, Stats, Experience, MarqueeCTA, Footer
│   ├── data/
│   │   └── content.js          # Single source of truth for all content & metrics
│   ├── App.jsx                 # Root application component & Lenis provider
│   ├── index.css               # Design tokens, typography, and utility rules
│   └── main.jsx                # Application mount point
├── index.html                  # HTML entry point with complete SEO metadata
├── package.json
└── vite.config.js
```

## Deployment Notes
The repository is optimized for zero-config static hosting on **Vercel**, **Netlify**, or **GitHub Pages**:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+
