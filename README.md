# Stellar

Stellar is a modern, high-performance agency portal built with React 19, Vite 8, TypeScript, and Tailwind CSS v4. The platform showcases design and development services, case studies, blogs, and an interactive contact interface, all wrapped in a premium dark-themed UI featuring custom micro-interactions and smooth kinetic scrolling.

## Tech Stack

*   **Frontend Library:** React 19 (utilizing lazy loading, Suspense, and functional context providers)
*   **Build Tool & Dev Server:** Vite 8
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin and custom `@theme` variables)
*   **Animation & Interactions:** Framer Motion 12, Swiper (sliders), React CountUp (stats)
*   **Scrolling:** Lenis (kinetic smooth scrolling)
*   **Routing:** React Router v7
*   **SEO:** React Helmet Async (dynamic document titles and meta tag injection)
*   **Forms & Validation:** React Hook Form with Zod schema resolution

---

## Directory Structure

```text
src/
├── assets/       # Static assets, branding graphics, and placeholder images
├── components/   # Reusable UI elements (Navbar, Footer, SEO controller, cards, buttons)
├── constants/    # Hardcoded mock database files (services, projects, FAQ, team info)
├── context/      # Context providers (ThemeContext for light/dark mode persistence)
├── hooks/        # Custom react hooks (e.g. useLenis initialization)
├── layouts/      # Shared layout components (RootLayout with common shell elements)
├── pages/        # Page components mapped directly to router paths
├── types/        # TypeScript type interfaces defining main entities
├── index.css     # Global styles, scrollbar adjustments, and Tailwind v4 theme extensions
├── main.tsx      # DOM root rendering script
└── App.tsx       # Routing declaration and application entry point
```

---

## Technical Implementations

### Tailwind CSS v4 Theme Configuration
This project utilizes the Tailwind CSS v4 `@theme` directive inside [index.css](file:///Users/sakshamojha/Documents/Projects/Stellar/src/index.css) to customize base branding assets like fonts (`Plus Jakarta Sans`, `Outfit`), brand colors, and animations. Custom keyframe animations (`aurora`, `float`, `pulse-slow`) are declared directly inside the theme block:

```css
@theme {
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-display: 'Outfit', system-ui, -apple-system, sans-serif;

  --color-bg-dark: #050816;
  --color-bg-light: #f8fafc;

  --color-accent-blue: #3b82f6;
  --color-accent-purple: #a855f7;
  --color-accent-cyan: #06b6d4;

  --animate-aurora: aurora 20s linear infinite;
  --animate-float: float 6s ease-in-out infinite;
  --animate-pulse-slow: pulse-slow 8s ease-in-out infinite;
}
```

### Kinetic Scroll & Layout Shell
Smooth scrolling is implemented globally using Lenis and managed in [useLenis.ts](file:///Users/sakshamojha/Documents/Projects/Stellar/src/hooks/useLenis.ts). It hooks into the browser's `requestAnimationFrame` render loop to smooth keyboard and mousewheel inputs.

The layout is wrapped in a [RootLayout.tsx](file:///Users/sakshamojha/Documents/Projects/Stellar/src/layouts/RootLayout.tsx) which controls global UI layers:
*   A persistent, subtle noise overlay texture (`.noise-overlay`).
*   Top horizontal progress tracker showing scroll depth.
*   Lag-smoothed trailing circle cursor (`CustomCursor.tsx`).
*   GDPR cookie consent banner.
*   A geometric pre-loading spinner.

### Dynamic Router & Route Splitting
All views inside [App.tsx](file:///Users/sakshamojha/Documents/Projects/Stellar/src/App.tsx) are dynamically loaded via React's `lazy()` to minimize initial bundle size. Pages are chunked out and only requested by the client on route transition:

```typescript
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
// ... other route definitions
```

---

## Getting Started

### Prerequisites
Make sure you have Node.js (version 18 or above recommended) and npm installed.

### Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   cd Stellar
   ```
2. Install the package dependencies:
   ```bash
   npm install
   ```

### Running Locally
To boot the local development server:
```bash
npm run dev
```
The server will start, typically exposing the application on `http://localhost:5173`.

### Production Build
To run the TypeScript compilation and generate the static production bundle:
```bash
npm run build
```
This outputs compiled, optimized assets to the `dist/` directory.

### Code Quality (Linting)
To execute the ESLint rules defined in `eslint.config.js`:
```bash
npm run lint
```

---

## Features and Pages

*   **Home:** Overview of services, client statistics with countup counters, featured portfolio cards, and summary reviews.
*   **Services:** Comprehensive breakdown of development offerings, detailed processes, and tech stacks associated with each service type.
*   **Portfolio & Case Studies:** Interactive project catalog filterable by category. Click-through pathing exposes detail pages (`/portfolio/:id`) covering problem definitions, technical solutions, and metrics.
*   **Blog System:** Searchable and category-filterable knowledge hub. Individual posts (`/blog/:slug`) render structured content with author tags and reading time indicators.
*   **Tech Stack Directory:** Filterable page showcasing all technologies used across Stellar client projects.
*   **About Us & Processes:** Timeline detailing the agency's discovery, planning, development, and deployment milestones.
*   **Contact Form:** Type-safe contact page validated on submit using Zod.
*   **Theme Toggle:** Real-time Light/Dark mode switcher with state persistence in `localStorage`.
