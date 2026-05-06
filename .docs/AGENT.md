# AGENT.md

> **For AI agents, Claude Code, VS Code Insiders Agents, and any automated tooling working in this repository.**
> Read this file completely before making any changes. This is the single source of truth for how work gets done here.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Repository Structure](#repository-structure)
4. [Development Environment](#development-environment)
5. [Commands Reference](#commands-reference)
6. [Angular SSG — Architecture & Conventions](#angular-ssg--architecture--conventions)
7. [Tailwind CSS — Conventions & Custom Classes](#tailwind-css--conventions--custom-classes)
8. [Component Guidelines](#component-guidelines)
9. [Routing & Pre-rendering](#routing--pre-rendering)
10. [Performance Mandates](#performance-mandates)
11. [Accessibility Standards](#accessibility-standards)
12. [SEO & Meta Strategy](#seo--meta-strategy)
13. [Testing Strategy](#testing-strategy)
14. [Code Style & Linting](#code-style--linting)
15. [Git Conventions](#git-conventions)
16. [VS Code Insiders & Agent Behaviour](#vs-code-insiders--agent-behaviour)
17. [CI/CD Pipeline](#cicd-pipeline)
18. [Agent-Specific Rules](#agent-specific-rules)
19. [What Agents Must Never Do](#what-agents-must-never-do)
20. [Debugging Reference](#debugging-reference)

---

## Project Overview

This is the **mac-zero** landing page — a clean, creative reference site for frontend developers setting up a new machine, discovering curated tools, and learning VS Code Insiders + Agent workflows. It is a **statically generated Angular application** deployed as a fully pre-rendered site with zero server dependency at runtime.

**Audience:** Frontend developers, primarily on macOS, who want an opinionated, fast, and beautiful setup guide they can trust.

**Goals:**

- Sub-1s LCP on a mid-range connection
- 100 Lighthouse score across all four categories on the homepage
- Fully accessible — WCAG 2.2 AA minimum, AAA where possible
- Every page pre-rendered at build time — no hydration flicker

---

## Tech Stack

| Layer           | Choice                               | Version                                     | Notes                                                 |
| --------------- | ------------------------------------ | ------------------------------------------- | ----------------------------------------------------- |
| Framework       | Angular                              | `^19.x` (latest)                            | Standalone components only — no NgModules             |
| Rendering       | Angular SSG                          | via `@angular/ssr` + `outputMode: 'static'` | All routes pre-rendered at build                      |
| Styling         | Tailwind CSS                         | `^4.x`                                      | Utility-first; custom classes via `@layer components` |
| Language        | TypeScript                           | `~5.5`                                      | Strict mode — no `any`, no `!` non-null assertions    |
| Package manager | pnpm                                 | `^9.x`                                      | Never use npm or yarn in this repo                    |
| Linting         | ESLint + Angular ESLint              | Latest                                      | Enforced in CI                                        |
| Formatting      | Prettier                             | `^3.x`                                      | Runs on save via VS Code settings                     |
| Testing         | Vitest + Angular Testing Library     | Latest                                      | Jest-compatible API                                   |
| E2E             | Playwright                           | Latest                                      | Chromium + Firefox only                               |
| Icons           | Lucide Angular                       | Latest                                      | Tree-shaken SVG icons only                            |
| Animations      | Angular Animations + @angular/cdk    | Latest                                      | No GSAP, no Framer unless approved                    |
| Deployment      | Static host (Netlify / GitHub Pages) | —                                           | Output dir: `dist/browser`                            |

---

## Repository Structure

```
dev-launchpad/
├── AGENT.md                         ← You are here
├── README.md                        ← Human-facing landing page/guide
├── .vscode/
│   ├── settings.json                ← Shared editor config (Prettier, ESLint on save)
│   ├── extensions.json              ← Recommended extensions list
│   └── launch.json                  ← Debug configs for Angular + Vitest
├── src/
│   ├── app/
│   │   ├── core/                    ← Singleton services, guards, interceptors
│   │   │   ├── services/
│   │   │   └── models/
│   │   ├── features/                ← Route-level feature components (lazy where possible)
│   │   │   ├── home/
│   │   │   ├── vscode-guide/
│   │   │   ├── mac-setup/
│   │   │   ├── resources/
│   │   │   └── tools/
│   │   ├── shared/                  ← Reusable dumb components, pipes, directives
│   │   │   ├── components/
│   │   │   ├── pipes/
│   │   │   └── directives/
│   │   ├── app.component.ts
│   │   ├── app.config.ts            ← provideRouter, provideClientHydration, etc.
│   │   └── app.routes.ts
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── icons/
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── styles/
│   │   ├── base.css                 ← @tailwind base + global resets
│   │   ├── components.css           ← @layer components — custom class definitions
│   │   └── utilities.css            ← @layer utilities — one-off helpers
│   └── index.html
├── public/                          ← Copied verbatim to output (robots.txt, sitemap.xml, etc.)
├── angular.json
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── vitest.config.ts
├── playwright.config.ts
├── .eslintrc.json
├── .prettierrc
├── .editorconfig
└── package.json
```

---

## Development Environment

### Prerequisites

```bash
# Node version (use nvm or fnm)
node >= 20.x (LTS)

# pnpm (must match lockfile)
pnpm >= 9.x

# Angular CLI (global)
pnpm add -g @angular/cli@latest
```

### First-time setup

```bash
# 1. Clone and install
git clone https://github.com/YOUR_USERNAME/mac-zero.git
cd mac-zero
pnpm install

# 2. Verify environment
pnpm ng version

# 3. Start dev server
pnpm dev
```

### Environment variables

No secrets belong in this repo — it is a public static site. If environment-specific values are needed:

- Define in `src/environments/environment.ts` and `environment.prod.ts`
- Never commit API keys — use `.env.local` (git-ignored) for local overrides
- Agents must never hardcode values that belong in environment files

---

## Commands Reference

```bash
# Development server (with HMR)
pnpm dev                          # → http://localhost:4200

# Build for production (SSG — pre-renders all routes)
pnpm build                        # → dist/browser/

# Serve the static build locally
pnpm serve:static                 # Uses http-server on dist/browser

# Run unit tests (Vitest)
pnpm test                         # Single run
pnpm test:watch                   # Watch mode

# Run E2E tests (Playwright)
pnpm e2e                          # Headless
pnpm e2e:ui                       # With Playwright UI

# Lint
pnpm lint                         # ESLint check
pnpm lint:fix                     # ESLint autofix

# Format
pnpm format                       # Prettier write
pnpm format:check                 # Prettier check (used in CI)

# Type check
pnpm typecheck                    # tsc --noEmit

# Analyse bundle
pnpm analyze                      # webpack-bundle-analyzer on stats.json

# Pre-render preview (renders all routes, opens browser)
pnpm prerender:preview
```

---

## Angular SSG — Architecture & Conventions

### Core configuration

SSG is enabled via `angular.json`:

```json
{
  "server": "src/main.server.ts",
  "outputMode": "static",
  "prerender": {
    "routesFile": "routes.txt"
  }
}
```

All routes that must be pre-rendered are listed in `routes.txt` at the project root. Agents adding new pages **must** add the route to `routes.txt`.

### Standalone components only

Every component must use the standalone API. Never use `NgModule`.

```typescript
// ✅ Correct
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroCtaComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}

// ❌ Never do this
@NgModule({ declarations: [HeroComponent] })
export class HeroModule {}
```

### Signal-based reactivity (preferred)

Use Angular Signals (`signal()`, `computed()`, `effect()`) for local state. Use RxJS only when dealing with async streams, HTTP, or platform events.

```typescript
// ✅ Preferred for local/derived state
readonly count = signal(0);
readonly doubled = computed(() => this.count() * 2);

// ✅ RxJS is appropriate for HTTP
readonly tools$ = this.toolsService.getAll();
```

### `inject()` over constructor injection

```typescript
// ✅
private readonly router = inject(Router);

// ❌ — avoid unless necessary for super() call
constructor(private router: Router) {}
```

### HTTP and data fetching

Use `HttpClient` via `provideHttpClient(withFetch())` in `app.config.ts`. At build time, data that feeds pre-rendered pages should come from local JSON files in `src/assets/data/` — not live APIs — to ensure the SSG build is deterministic.

```typescript
// For SSG-safe data loading
readonly tools = toSignal(
  inject(HttpClient).get<Tool[]>('/assets/data/tools.json')
);
```

### Transfer State

Always use Angular's `TransferState` for any data fetched during SSR/SSG so it is not re-fetched on client hydration:

```typescript
import { TransferState, makeStateKey } from '@angular/core';

const TOOLS_KEY = makeStateKey<Tool[]>('tools');
```

### `isPlatformBrowser` guard

Wrap any browser-only API (`window`, `localStorage`, `IntersectionObserver`, etc.):

```typescript
private readonly platformId = inject(PLATFORM_ID);

ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {
    // safe to use window/document here
  }
}
```

### Lazy loading

Feature routes must be lazy-loaded:

```typescript
// app.routes.ts
{
  path: 'vscode-guide',
  loadComponent: () =>
    import('./features/vscode-guide/vscode-guide.component')
      .then(m => m.VscodeGuideComponent),
}
```

---

## Tailwind CSS — Conventions & Custom Classes

### Configuration (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class', // Dark mode via .dark class on <html>
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono Variable', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#dce7ff',
          500: '#4f6ef7',
          600: '#3a56e8',
          900: '#1a2580',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
} satisfies Config;
```

### Custom component classes (`styles/components.css`)

Define reusable multi-utility patterns here using `@layer components`. Never write custom classes in component `.css` files unless they are truly component-scoped and cannot be expressed with Tailwind.

```css
@layer components {
  /* Primary button */
  .btn-primary {
    @apply inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
           bg-brand-600 text-white text-sm font-medium
           hover:bg-brand-500 active:scale-95
           transition-all duration-150 focus-visible:outline-none
           focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2;
  }

  /* Ghost button */
  .btn-ghost {
    @apply inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
           text-sm font-medium border border-neutral-200 dark:border-neutral-700
           hover:bg-neutral-100 dark:hover:bg-neutral-800
           transition-all duration-150 focus-visible:outline-none
           focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2;
  }

  /* Card surface */
  .card {
    @apply bg-white dark:bg-neutral-900
           border border-neutral-200 dark:border-neutral-800
           rounded-2xl p-6 shadow-sm;
  }

  /* Section container */
  .section {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24;
  }

  /* Gradient text heading */
  .heading-gradient {
    @apply bg-gradient-to-r from-brand-600 to-purple-600
           bg-clip-text text-transparent;
  }

  /* Code block inline */
  .code-inline {
    @apply font-mono text-sm bg-neutral-100 dark:bg-neutral-800
           text-brand-600 dark:text-brand-400
           px-1.5 py-0.5 rounded-md;
  }

  /* Tag / badge */
  .tag {
    @apply inline-flex items-center px-2.5 py-0.5 rounded-full
           text-xs font-medium bg-brand-50 dark:bg-brand-900/30
           text-brand-700 dark:text-brand-300
           border border-brand-200 dark:border-brand-800;
  }

  /* Navigation link */
  .nav-link {
    @apply text-sm font-medium text-neutral-600 dark:text-neutral-400
           hover:text-neutral-900 dark:hover:text-neutral-100
           transition-colors duration-150;
  }

  /* Active nav link */
  .nav-link-active {
    @apply text-sm font-medium text-brand-600 dark:text-brand-400;
  }

  /* Section heading */
  .section-heading {
    @apply text-3xl sm:text-4xl font-bold tracking-tight
           text-neutral-900 dark:text-neutral-100;
  }

  /* Body text */
  .body-text {
    @apply text-base text-neutral-600 dark:text-neutral-400 leading-relaxed;
  }

  /* Divider */
  .divider {
    @apply border-t border-neutral-200 dark:border-neutral-800 my-8;
  }

  /* Focus ring (for non-native elements) */
  .focus-ring {
    @apply focus-visible:outline-none
           focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2;
  }

  /* Skeleton loader */
  .skeleton {
    @apply animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-lg;
  }

  /* Prose override for markdown/rich content */
  .content-prose {
    @apply prose prose-neutral dark:prose-invert
           prose-headings:font-semibold
           prose-a:text-brand-600 dark:prose-a:text-brand-400
           prose-code:text-brand-600 dark:prose-code:text-brand-400
           prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800
           prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
           max-w-none;
  }
}
```

### Rules for agents writing Tailwind

- **Never write `style="..."` inline** unless it is a dynamic value that cannot be expressed statically (e.g. `[style.height.px]="dynamicHeight"`).
- **Never create a new `.css` file** for a component unless it has animation keyframes or a truly component-scoped style with no Tailwind equivalent.
- Use **responsive prefixes** (`sm:`, `md:`, `lg:`) mobile-first — the base style is mobile, overrides are larger.
- Use **dark mode variants** (`dark:`) on every color-bearing class.
- Avoid arbitrary values (`[something-weird]`) — if needed more than once, add it to `tailwind.config.ts`.

---

## Component Guidelines

### File naming

| File      | Pattern                               |
| --------- | ------------------------------------- |
| Component | `hero.component.ts`                   |
| Template  | `hero.component.html`                 |
| Styles    | `hero.component.css` (only if needed) |
| Spec      | `hero.component.spec.ts`              |
| Service   | `tools.service.ts`                    |
| Pipe      | `truncate.pipe.ts`                    |
| Directive | `scroll-reveal.directive.ts`          |

### Component anatomy

```typescript
import { Component, input, output, computed, inject } from '@angular/core';

@Component({
  selector: 'app-tool-card',
  standalone: true,
  imports: [
    /* only what this component needs */
  ],
  templateUrl: './tool-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // Always OnPush
})
export class ToolCardComponent {
  // 1. Inputs (signal-based)
  readonly tool = input.required<Tool>();
  readonly featured = input(false);

  // 2. Outputs
  readonly selected = output<Tool>();

  // 3. Injected services
  private readonly router = inject(Router);

  // 4. Derived state
  readonly label = computed(() => (this.featured() ? `⭐ ${this.tool().name}` : this.tool().name));

  // 5. Methods
  onSelect(): void {
    this.selected.emit(this.tool());
  }
}
```

### Change detection — always `OnPush`

Every component must use `ChangeDetectionStrategy.OnPush`. This is non-negotiable for performance in a static site context.

### Template rules

- No logic heavier than a ternary in templates — move to `computed()` or a method
- Use `@if`, `@for`, `@switch` (Angular 17+ control flow) — never `*ngIf`, `*ngFor`
- Always provide `track` in `@for`:

```html
@for (tool of tools(); track tool.id) {
<app-tool-card [tool]="tool" />
}
```

- Use `@defer` for below-the-fold content:

```html
@defer (on viewport) {
<app-resources-grid />
} @placeholder {
<div class="skeleton h-64 w-full"></div>
}
```

---

## Routing & Pre-rendering

### Route definition pattern

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'mac-zero — Frontend Developer Setup Guide',
  },
  {
    path: 'vscode-guide',
    loadComponent: () =>
      import('./features/vscode-guide/vscode-guide.component').then((m) => m.VscodeGuideComponent),
    title: 'VS Code Insiders Guide — mac-zero',
  },
  {
    path: 'mac-setup',
    loadComponent: () =>
      import('./features/mac-setup/mac-setup.component').then((m) => m.MacSetupComponent),
    title: 'macOS Setup Guide — mac-zero',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: '404 — mac-zero',
  },
];
```

### routes.txt

Every route that must be a separate HTML file at build time:

```
/
/vscode-guide
/mac-setup
/resources
/tools
```

Agents adding a new page must add its route here. Forgetting this means the page exists in Angular's router but is never pre-rendered — it will 404 on a static host.

---

## Performance Mandates

These are not suggestions. CI will fail if Lighthouse scores drop below thresholds.

| Metric                    | Target         |
| ------------------------- | -------------- |
| LCP                       | < 1.0s         |
| CLS                       | < 0.05         |
| FID / INP                 | < 100ms        |
| TTI                       | < 2.0s         |
| Lighthouse Performance    | ≥ 95           |
| Lighthouse Accessibility  | 100            |
| Lighthouse Best Practices | 100            |
| Lighthouse SEO            | 100            |
| Bundle size (initial JS)  | < 80kB gzipped |

### Image rules

- All images must use `NgOptimizedImage` (`NgOptimizedImage` from `@angular/common`).
- Every `<img>` needs `width` and `height` attributes to prevent CLS.
- Hero images must have `priority` attribute.
- Use `.webp` format. Fallback `.jpg` is acceptable.

```html
<img ngSrc="/assets/images/hero.webp" width="1200" height="630" alt="mac-zero hero" priority />
```

### Font loading

- Use `font-display: swap` in `@font-face` declarations.
- Preconnect to font origin in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### Defer non-critical scripts

Any third-party script (analytics, etc.) must use `defer` or `async`. Agents must not add synchronous `<script>` tags to `index.html`.

---

## Accessibility Standards

Minimum: **WCAG 2.2 AA**. Aim for AAA on text contrast and focus indicators.

### Rules

- Every interactive element must be keyboard accessible and have a visible focus indicator.
- Focus indicators must have 3:1 contrast ratio against adjacent colours (WCAG 2.2).
- All images need descriptive `alt` text. Decorative images use `alt=""`.
- Colour must not be the only way to convey information.
- Every page must have exactly one `<h1>`.
- Heading hierarchy must be sequential — no skipping levels (h1 → h2 → h3).
- All form inputs need associated `<label>` elements (use `htmlFor` / `[for]`).
- Use semantic HTML elements — `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Dynamic content changes must be announced via `aria-live` regions.
- Motion must be disabled when `prefers-reduced-motion: reduce` is active.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Landmark regions template

```html
<body>
  <a href="#main" class="sr-only focus:not-sr-only">Skip to main content</a>
  <app-nav />
  <main id="main">
    <router-outlet />
  </main>
  <app-footer />
</body>
```

---

## SEO & Meta Strategy

Use Angular's `Meta` and `Title` services. Inject them in each feature component or use a shared `SeoService`.

### SeoService pattern

```typescript
// core/services/seo.service.ts
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  set(config: { title: string; description: string; image?: string; url?: string }): void {
    this.title.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
  }
}
```

### Required meta per page

Every route component must call `SeoService.set()` in `ngOnInit` or a resolver:

- Unique `<title>` (format: `Page Name — mac-zero`)
- `description` (150–160 characters)
- `og:image` pointing to a page-specific 1200×630 OG image in `/public/og/`
- Canonical URL tag

### Structured data

Add `application/ld+json` script on the homepage:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "mac-zero",
  "description": "Frontend developer setup guide and resource hub",
  "url": "https://mac-zero.dev"
}
```

---

## Testing Strategy

### Unit tests (Vitest + Angular Testing Library)

- File location: co-located with source (`hero.component.spec.ts` next to `hero.component.ts`)
- Test behaviour, not implementation
- Use `render()` from `@testing-library/angular` for component tests

```typescript
import { render, screen } from '@testing-library/angular';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  it('renders the main heading', async () => {
    await render(HeroComponent);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
```

### E2E tests (Playwright)

- Location: `e2e/` at repo root
- Test critical user journeys, not every click
- Required E2E journeys:
  - Homepage loads and hero is visible
  - Navigation works between all top-level routes
  - Dark mode toggle persists across navigation
  - Copy-to-clipboard functionality on code blocks

### Coverage thresholds

```json
{
  "branches": 80,
  "functions": 85,
  "lines": 85,
  "statements": 85
}
```

Agents must not decrease coverage. If adding new code, add tests.

---

## Code Style & Linting

### TypeScript rules (enforced)

- `strict: true` in `tsconfig.json` — no `any`, no `!` non-null assertions
- Prefer `const` over `let`. Never use `var`.
- Prefer `readonly` on class properties that are not reassigned.
- Avoid barrel files (`index.ts`) — they cause circular dependencies and slow IDE performance.
- Import order: Angular core → Angular common → Third party → Local (enforced by ESLint).

### Naming conventions

| Item               | Convention                    | Example                         |
| ------------------ | ----------------------------- | ------------------------------- |
| Component class    | PascalCase                    | `ToolCardComponent`             |
| Component selector | kebab-case with `app-` prefix | `app-tool-card`                 |
| Service            | PascalCase + `Service`        | `ToolsService`                  |
| Signal             | camelCase (no `$` suffix)     | `readonly count = signal(0)`    |
| Observable         | camelCase with `$` suffix     | `readonly tools$`               |
| Interface          | PascalCase (no `I` prefix)    | `Tool`, `Route`                 |
| Type alias         | PascalCase                    | `ThemeMode = 'light' \| 'dark'` |
| Enum               | PascalCase                    | `IconSize`                      |
| Constant           | SCREAMING_SNAKE_CASE          | `MAX_RESULTS = 20`              |
| CSS class          | kebab-case                    | `.tool-card`, `.btn-primary`    |

### Prettier config (`.prettierrc`)

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "bracketSameLine": false
}
```

---

## Git Conventions

### Branch naming

```
feat/add-vscode-insiders-section
fix/hero-cta-focus-ring
chore/update-tailwind-v4
docs/add-mac-setup-guide
refactor/tools-service-signals
```

### Commit messages (Conventional Commits)

```
feat: add VS Code Insiders agent walkthrough page
fix: resolve CLS on tool card grid at mobile breakpoint
perf: defer resources grid below fold with @defer
a11y: add aria-label to dark mode toggle button
docs: update AGENT.md with new SSG route requirements
chore: bump Angular to 19.2
refactor: migrate ToolsService to signal-based state
test: add E2E test for dark mode persistence
```

### PR requirements

- All CI checks must pass (lint, typecheck, test, build)
- Lighthouse CI must not regress any score
- At least one reviewer approval
- PR description must list: what changed, why, and how to test

---

## VS Code Insiders & Agent Behaviour

### About VS Code Insiders

VS Code Insiders is the nightly/preview build of VS Code. It ships features weeks or months before the stable release. For this project, it is the **required** editor.

Key differences from stable VS Code relevant to this project:

- **Agent mode** — available earlier in Insiders; multi-step agentic task completion with tool use (file edit, terminal, browser)
- **MCP (Model Context Protocol) support** — connect AI agents to external tools (GitHub, Netlify, databases) directly in the editor
- **Inline chat improvements** — faster and more context-aware in Insiders builds
- **Copilot Edits** — multi-file edit sessions that this AGENT.md directly configures

### Recommended VS Code Insiders extensions

These are listed in `.vscode/extensions.json` and auto-suggested on repo open:

```json
{
  "recommendations": [
    "angular.ng-template",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "vitest.explorer",
    "ms-playwright.playwright",
    "github.copilot",
    "github.copilot-chat",
    "eamodio.gitlens",
    "usernamehw.errorlens",
    "streetsidesoftware.code-spell-checker",
    "mikestead.dotenv",
    "PKief.material-icon-theme",
    "antfu.vite",
    "christian-kohler.path-intellisense",
    "wayou.vscode-todo-highlight"
  ]
}
```

### Agent mode usage in this repo

When using VS Code Insiders agent mode (or Claude Code) in this repo, agents should:

1. **Always read this file first** before making any changes
2. **Run `pnpm typecheck` and `pnpm lint`** after every set of changes
3. **Never start the dev server** unless explicitly asked — use file operations only
4. **Ask before installing new packages** — every new dependency requires justification
5. **Prefer editing existing files** over creating new ones
6. **Respect the folder structure** — do not create files outside the established structure

### MCP servers for this project

Configured in `.vscode/mcp.json` (not committed — copy from `.vscode/mcp.example.json`):

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "${env:GITHUB_TOKEN}" }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "${workspaceFolder}/src"]
    }
  }
}
```

---

## CI/CD Pipeline

### GitHub Actions — `.github/workflows/ci.yml`

Runs on every push to `main` and every PR:

```yaml
steps:
  - Checkout
  - Setup Node 20 + pnpm
  - pnpm install --frozen-lockfile
  - pnpm format:check
  - pnpm lint
  - pnpm typecheck
  - pnpm test
  - pnpm build
  - Lighthouse CI (lhci autorun)
  - Deploy to Netlify (main branch only)
```

### Lighthouse CI config (`lighthouserc.json`)

```json
{
  "ci": {
    "collect": {
      "staticDistDir": "./dist/browser"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.95 }],
        "categories:accessibility": ["error", { "minScore": 1.0 }],
        "categories:best-practices": ["error", { "minScore": 1.0 }],
        "categories:seo": ["error", { "minScore": 1.0 }]
      }
    }
  }
}
```

---

## Agent-Specific Rules

These rules apply to any automated agent, AI assistant, or tool operating in this codebase.

### Before making any change

- [ ] Read this entire `AGENT.md`
- [ ] Understand the full scope of the requested change
- [ ] Check if an existing component/service already solves the need before creating new files
- [ ] Verify the affected routes are in `routes.txt` if adding a new page

### When adding a new component

- [ ] Place in the correct folder (`features/`, `shared/`, or `core/`)
- [ ] Use `ChangeDetectionStrategy.OnPush`
- [ ] Add to `imports` array of parent (standalone — no module)
- [ ] Write at least one unit test
- [ ] Ensure it is accessible (keyboard nav, ARIA, focus visible)
- [ ] Apply dark mode Tailwind variants

### When adding a new route / page

- [ ] Create component in `src/app/features/<route-name>/`
- [ ] Add lazy route to `app.routes.ts`
- [ ] Add path to `routes.txt`
- [ ] Set page `title` in the route definition
- [ ] Call `SeoService.set()` in the component with unique title, description, og:image
- [ ] Create a 1200×630 OG image in `public/og/<route-name>.png`

### When modifying styles

- [ ] Use Tailwind utility classes first
- [ ] If a pattern is used 3+ times, abstract to a custom class in `styles/components.css`
- [ ] Never write `style=""` for static values
- [ ] Include `dark:` variants for all colour classes
- [ ] Test at 375px, 768px, 1280px, 1440px breakpoints

### When adding a dependency

- [ ] Check if it is already provided by Angular or Tailwind before adding
- [ ] Check bundle impact with `pnpm analyze` after install
- [ ] Add `// DEPENDENCY REASON: <why>` comment at the import site if not obvious
- [ ] Use `pnpm add` — never `npm install` or `yarn add`

### When touching `index.html`

- [ ] Do not add synchronous `<script>` tags
- [ ] Do not remove `<base href="/">`
- [ ] Keep the `<noscript>` fallback
- [ ] Any new preload/preconnect must be validated not to cause unused preload warnings

---

## What Agents Must Never Do

These are hard stops. If an agent determines one of these is required to complete a task, it must pause and ask for clarification.

```
❌ Use NgModule — standalone components only
❌ Use npm or yarn — pnpm only
❌ Add console.log to committed code — use ErrorHandler service or devOnly guard
❌ Disable TypeScript strict mode or add @ts-ignore
❌ Use any — use unknown and narrow, or create a proper type
❌ Use inline styles for static values
❌ Import from barrel index.ts files
❌ Bypass ESLint with eslint-disable comments (except in rare, documented cases)
❌ Commit environment secrets or API keys
❌ Use default change detection — OnPush everywhere
❌ Remove accessibility attributes (aria-*, role, alt, etc.)
❌ Decrease test coverage
❌ Add a synchronous <script> tag to index.html
❌ Use window or document without isPlatformBrowser guard
❌ Forget to add a new route to routes.txt
❌ Delete or rewrite this AGENT.md without explicit human approval
```

---

## Debugging Reference

### SSG build fails

```bash
# Check which route is failing
pnpm build 2>&1 | grep "ERROR"

# Test pre-render in isolation
pnpm ng run mac-zero:prerender --route=/problematic-route
```

Common causes:

- `window`/`document` access outside `isPlatformBrowser` guard
- HTTP call in component constructor (use `ngOnInit` or a resolver)
- Missing route in `routes.txt`

### Tailwind classes not applying

```bash
# Ensure content paths in tailwind.config.ts cover your file
# Check for dynamic class construction (Tailwind purges dynamically built class strings)
```

Never do:

```typescript
// ❌ Tailwind cannot detect this at build time
const cls = `text-${size}-lg`;
```

Always do:

```typescript
// ✅ Full class name must appear in source
const cls = size === 'lg' ? 'text-lg' : 'text-base';
```

### Signals not triggering view update

- Verify `ChangeDetectionStrategy.OnPush` is set
- Ensure the signal is accessed in the template (not just in a method)
- `effect()` runs asynchronously — don't rely on it for synchronous view mutations

### Hydration mismatch errors

Look for: components rendering differently on server vs client. Common culprits:

- `Date.now()` or `Math.random()` in templates
- Platform-specific code without `isPlatformBrowser` guard
- Browser-only APIs in `ngOnInit` (not guarded)

---

_Last updated: May 2026 — Maintained by the repo owner. Agents must not modify this file without human approval._
