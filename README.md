# Pranoy's Portfolio

A modern, interactive developer portfolio built with **Next.js 16**, **React 19**, **Three.js**, and **Framer Motion**. Features a 3D starfield background, dark/light theming, a playable Brick Breaker game, and live GitHub integration.

**Live:** https://pranoys-portfolio.vercel.app/

---

## Features

- **3D Spatial Background** — Animated Three.js starfield with rotating geometric shapes, lazy-loaded for performance.
- **Dark / Light Theme** — Cosmic-palette dark mode (default) and a light theme, powered by `next-themes`.
- **Scroll Animations** — Section entrance and reveal animations via Framer Motion and Intersection Observer, with `prefers-reduced-motion` support.
- **Live GitHub Stats** — Project cards pull stars, forks, and primary language from the GitHub API, cached with TanStack React Query.
- **Brick Breaker Game** — Canvas-based game with mouse/touch controls, lives, score tracking, and win/lose states.
- **Konami Code Easter Egg** — Enter `↑↑↓↓←→←→BA` anywhere to launch the Brick Breaker game.
- **Background Music** — Consent-first audio player with playlist, volume slider, and `localStorage` persistence.
- **Gallery** — Dedicated `/gallery` page with category-tagged images, lightbox navigation, and a video background.
- **Cursor Glow Effect** — Subtle glow that follows the cursor across the page.
- **Glass Morphism UI** — Backdrop-blur panels, custom scrollbar, and themed selection colors.
- **Responsive Design** — Mobile hamburger nav, touch-friendly game controls, and fluid layouts.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Data | TanStack React Query 5 |
| Theme | next-themes |
| UI Primitives | Radix UI (Dialog), Lucide React (icons) |
| Deployment | Vercel |

---

## Project Structure

```
pranoys-portfolio/
├── app/
│   ├── layout.tsx            # Root layout, fonts, providers, metadata
│   ├── page.tsx              # Home — single-page sections
│   ├── globals.css           # Global styles, CSS variables
│   └── gallery/
│       └── page.tsx          # Gallery page
├── components/
│   ├── background/           # SpatialBackground (3D), BackgroundVideo, BackgroundAudio
│   ├── effects/              # CursorGlow
│   ├── game/                 # BrickBreakerGame (canvas)
│   ├── layout/               # Navigation
│   ├── modals/               # MusicConsentModal
│   ├── providers/            # ThemeProvider, QueryProvider
│   ├── sections/             # Hero, About, Skills, Projects, BrickBreaker, Contact, Gallery
│   └── ui/                   # ThemeToggle, ImagePlaceholder
├── hooks/
│   ├── useKonamiCode.tsx     # Konami code detection
│   └── useScrollAnimation.tsx # Scroll-triggered animations & smooth scroll
├── public/
│   ├── images/               # Profile, gallery, OG image
│   ├── logos/                # Company & institution logos
│   ├── projectScreenshots/   # Project preview images
│   ├── *.mp3                 # Background music tracks
│   ├── Pranoy_Basu_Resume.pdf
│   └── favicon.svg
├── tailwind.config.ts
├── next.config.mjs
├── vercel.json
├── tsconfig.json
└── package.json
```

---

## Sections

| Section | Route / Anchor | Description |
|---------|----------------|-------------|
| Hero | `/#home` | Profile photo, name, tagline, video background, scroll indicator |
| About | `/#about` | Professional experience, internships, education timeline |
| Skills | `/#skills` | Technical skills, tools, certifications, hobbies |
| Projects | `/#projects` | Project cards with live GitHub stats |
| Brick Breaker | `/#brick-breaker` | Origin story and playable game |
| Contact | `/#contact` | Contact form and social links |
| Gallery | `/gallery` | Photo gallery with lightbox and category legend |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+

### Install & Run

```bash
# Clone the repository
git clone https://github.com/PranoyBasu/pranoys-portfolio.git
cd pranoys-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

> No environment variables are required. The GitHub API is called unauthenticated for public repository data.

---

## Deployment

The project is configured for **Vercel** via `vercel.json`:

- Region: `iad1`
- Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, etc.)
- Cache headers for static assets
- Console logs stripped in production

Push to your connected Vercel project or run:

```bash
npx vercel --prod
```

---

## Configuration Highlights

- **Tailwind** — Custom `cosmic` color palette, `glow`/`fadeIn`/`slideUp` keyframe animations, `class`-based dark mode.
- **Next.js** — Image optimization (AVIF, WebP), `optimizePackageImports` for Three.js and Framer Motion, `reactStrictMode` enabled.
- **TypeScript** — Strict mode, `@/*` path alias.

---

## License

This project is personal portfolio source code. Feel free to use it as inspiration, but please replace all personal content (images, text, resume) with your own.
