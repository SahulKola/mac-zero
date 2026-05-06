# mac-zero

A clean, creative, and productive VS Code landing page for frontend developers. Built with **Angular 21** (SSG), **Tailwind CSS 4**, and deployed as a fully static site.

## ✨ Features

- **Statically Generated (SSG)**: Zero server runtime dependency — pre-renders all routes at build time
- **Angular 21**: Latest standalone components with signals-based reactivity
- **Tailwind CSS 4**: Modern utility-first styling with dark mode support
- **Performance First**: Sub-1s LCP, < 0.05 CLS, Lighthouse 100 on accessibility & SEO
- **Fully Accessible**: WCAG 2.2 AA compliant with keyboard navigation
- **TypeScript Strict**: No `any`, no `!` assertions — full type safety
- **Testing Ready**: Vitest + Angular Testing Library + Playwright E2E

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20.x (use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm))
- pnpm >= 10.x

### Installation

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open http://localhost:4200
```

## 📦 Available Commands

```bash
# Development
pnpm dev              # Start dev server with HMR
pnpm dev:inspect      # Debug mode

# Building
pnpm build            # Production SSG build → dist/browser/
pnpm build:watch      # Watch mode during development
pnpm serve:static     # Serve static build locally

# Testing
pnpm test             # Run unit tests once
pnpm test:watch       # Watch mode
pnpm test:ui          # Open Vitest UI
pnpm test:coverage    # Generate coverage report

# E2E Testing
pnpm e2e              # Run Playwright tests (headless)
pnpm e2e:ui           # Open Playwright UI
pnpm e2e:debug        # Debug mode

# Code Quality
pnpm lint             # Check for ESLint issues
pnpm lint:fix         # Auto-fix ESLint issues
pnpm format           # Format code with Prettier
pnpm format:check     # Check formatting without writing
pnpm typecheck        # TypeScript strict check

# Analysis
pnpm analyze          # Bundle analysis with webpack-bundle-analyzer
pnpm prerender:preview # Preview SSG pre-rendering
```

## 📁 Project Structure

```
mac-zero/
├── .docs/                        ← Comprehensive AGENT.md documentation
├── .github/
│   └── copilot-instructions.md  ← Quick ref for AI agents
├── .vscode/
│   ├── settings.json            ← Editor config (Prettier, ESLint on save)
│   ├── extensions.json          ← Recommended extensions
│   ├── skills/                  ← Custom agent skills
│   │   ├── add-route/
│   │   ├── create-component/
│   │   └── format-and-commit/
│   └── tasks.json               ← VS Code tasks
├── e2e/                         ← Playwright E2E tests
├── src/
│   ├── app/
│   │   ├── core/               ← Singleton services, guards, interceptors
│   │   ├── features/           ← Route-level components (lazy-loaded)
│   │   ├── shared/             ← Reusable dumb components
│   │   └── app.routes.ts       ← Route definitions
│   ├── assets/
│   ├── styles.css              ← Global Tailwind + custom classes
│   └── index.html
├── angular.json                 ← Angular config (outputMode: 'static')
├── tailwind.config.js           ← Tailwind theme
├── vitest.config.ts             ← Unit testing config
├── playwright.config.ts         ← E2E testing config
└── package.json
```

## 🎯 Architecture Overview

### Angular SSG (Static Site Generation)

All routes are pre-rendered to static HTML files at build time. No server needed at runtime.

### Routing Pattern

Every route uses lazy loading for optimal code splitting:

```typescript
{
  path: 'features',
  loadComponent: () =>
    import('./features/example/example.component')
      .then(m => m.ExampleComponent),
  title: 'Page Title — mac-zero',
}
```

### Signals-Based Reactivity

```typescript
readonly count = signal(0);
readonly doubled = computed(() => this.count() * 2);
toggle(): void {
  this.count.update(v => v + 1);
}
```

### Standalone Components

All components use the standalone API with `OnPush` change detection:

```typescript
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
```

## ♿ Accessibility (WCAG 2.2 AA)

- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Alt text on images
- ✅ One `<h1>` per page
- ✅ Sequential heading hierarchy
- ✅ Respects `prefers-reduced-motion`

## 🧪 Testing

```bash
pnpm test:watch       # Unit tests
pnpm e2e:ui           # E2E tests with UI
```

## 📊 Performance Targets

| Metric                   | Target         |
| ------------------------ | -------------- |
| LCP                      | < 1.0s         |
| CLS                      | < 0.05         |
| INP                      | < 100ms        |
| Lighthouse Performance   | ≥ 95           |
| Lighthouse Accessibility | 100            |
| Initial JS bundle        | < 80kB gzipped |

## 🤖 AI Agent Customization

This project includes comprehensive customization files:

- **[.docs/AGENT.md](.docs/AGENT.md)** — Complete reference (1000+ lines)
- **[.github/copilot-instructions.md](.github/copilot-instructions.md)** — Quick reference
- **[.vscode/skills/](.vscode/skills/)** — Custom automation skills

## 🚀 Deployment

```bash
pnpm build
# Output: dist/browser/
```

Deploy `dist/browser/` to any static host (Netlify, GitHub Pages, Cloudflare Pages, etc.).

---

**For comprehensive guidance, see [.docs/AGENT.md](.docs/AGENT.md).**
