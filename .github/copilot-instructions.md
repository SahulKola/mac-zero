# Copilot Instructions — mac-zero

> **Quick reference for AI agents.** For comprehensive guidance, see [.docs/AGENT.md](.docs/AGENT.md).

## 🎯 What is this project?

A statically generated Angular 21 landing page for VS Code productivity — demonstrating modern web development with zero runtime server dependency.

## 🛠 Tech Stack

| Layer               | Technology                       | Version                                          |
| ------------------- | -------------------------------- | ------------------------------------------------ |
| **Framework**       | Angular                          | 21.x (latest) — Standalone components only       |
| **Rendering**       | Angular SSG                      | `outputMode: 'static'` — all routes pre-rendered |
| **Styling**         | Tailwind CSS                     | 4.x — utility-first with custom components       |
| **Language**        | TypeScript                       | Strict mode — no `any`, no `!` assertions        |
| **Package Manager** | pnpm                             | 10.x — never npm/yarn                            |
| **Testing**         | Vitest + Angular Testing Library | Latest                                           |
| **E2E**             | Playwright                       | Chromium + Firefox                               |
| **Deployment**      | Static (Netlify/GitHub Pages)    | `dist/browser/` output                           |

## ⚡ Essential Commands

```bash
pnpm dev              # Dev server → http://localhost:4200
pnpm build            # Production SSG build → dist/browser/
pnpm serve:static     # Serve dist/browser locally
pnpm test             # Unit tests (Vitest)
pnpm test:watch       # Watch mode
pnpm e2e              # Playwright E2E tests
pnpm lint             # ESLint check
pnpm lint:fix         # Auto-fix linting issues
pnpm typecheck        # TypeScript verification
pnpm format           # Prettier format
```

## 📁 Project Structure

```
mac-zero/
├── .docs/             ← Full AGENT.md documentation
├── .github/
│   └── copilot-instructions.md  ← This file
├── src/
│   ├── app/
│   │   ├── core/      ← Services, guards, interceptors
│   │   ├── features/  ← Route-level components (lazy)
│   │   ├── shared/    ← Reusable dumb components
│   │   ├── app.ts     ← Root component
│   │   └── app.routes.ts
│   ├── styles.css     ← Global Tailwind styles
│   └── index.html
├── angular.json       ← Build config (outputMode: 'static')
├── tailwind.config.js ← Tailwind theme
├── tsconfig.json      ← TypeScript config
└── package.json
```

## ⚙️ Angular SSG Essentials

### Standalone Components (Required)

```typescript
// ✅ Correct
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, HeroCtaComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}

// ❌ Never use NgModule
```

### Signal-Based Reactivity (Preferred)

```typescript
// Local/derived state → Signals
readonly count = signal(0);
readonly doubled = computed(() => this.count() * 2);

// Async streams → RxJS only
readonly tools$ = this.toolsService.getAll();
```

### Always Use `isPlatformBrowser` Guard

```typescript
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

private readonly platformId = inject(PLATFORM_ID);

ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {
    // safe to use window, localStorage, etc.
  }
}
```

### Lazy-Load Feature Routes

```typescript
// ✅ Do this
{
  path: 'guide',
  loadComponent: () =>
    import('./features/guide/guide.component')
      .then(m => m.GuideComponent),
}
```

### Use `inject()` Over Constructor

```typescript
// ✅ Preferred
private readonly router = inject(Router);

// ❌ Avoid
constructor(private router: Router) {}
```

## 🎨 Tailwind Conventions

- **Never write inline styles** for static values — use Tailwind classes
- **Use responsive prefixes** (`sm:`, `md:`, `lg:`) — mobile-first
- **Always include dark variants** — `dark:` on every color class
- **Custom components** → `@layer components` in `src/styles.css`
- **One-off utilities** → Use dynamic Tailwind patterns, not arbitrary values

### Example: Custom Button Class

```css
/* src/styles.css */
@layer components {
  .btn-primary {
    @apply px-6 py-3 rounded-lg bg-brand-600 text-white
           hover:bg-brand-700 active:scale-95
           focus-visible:ring-2 focus-visible:ring-brand-500
           transition-all duration-150 disabled:opacity-50;
  }
}
```

## 🚀 Routing & Pre-rendering

Every route must be explicitly listed in `app.routes.ts` with a `title` property:

```typescript
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Home — mac-zero',
  },
];
```

At build time, Angular SSG pre-renders all lazy-loaded routes automatically.

## 📊 Performance Mandates

| Metric                       | Target         |
| ---------------------------- | -------------- |
| **LCP**                      | < 1.0s         |
| **CLS**                      | < 0.05         |
| **INP**                      | < 100ms        |
| **Lighthouse Performance**   | ≥ 95           |
| **Lighthouse Accessibility** | 100            |
| **Lighthouse SEO**           | 100            |
| **Initial JS bundle**        | < 80kB gzipped |

### Images Must Use `NgOptimizedImage`

```html
<img ngSrc="/assets/images/hero.webp" width="1200" height="630" alt="descriptive text" priority />
```

## ♿ Accessibility Standards (WCAG 2.2 AA)

- Every interactive element must be keyboard accessible
- All images need `alt` text (decorative images use `alt=""`)
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Every page must have exactly **one** `<h1>`
- Heading hierarchy must be sequential (h1 → h2 → h3, no skips)
- Focus indicators must have 3:1 contrast ratio

## 📝 Code Style & Naming

| Item               | Convention                 | Example                      |
| ------------------ | -------------------------- | ---------------------------- |
| Component class    | PascalCase                 | `HeroComponent`              |
| Component selector | kebab-case + `app-` prefix | `app-hero`                   |
| Service            | PascalCase + `Service`     | `ToolsService`               |
| Signal             | camelCase (no `$`)         | `readonly count = signal(0)` |
| Observable         | camelCase + `$` suffix     | `readonly tools$`            |
| Interface          | PascalCase (no `I` prefix) | `Tool`                       |
| CSS class          | kebab-case                 | `btn-primary`                |

### TypeScript Strict Rules

- ✅ `const` by default — never `var`
- ✅ `readonly` on unmodified properties
- ✅ Proper types — never `any`
- ✅ No `!` non-null assertions — use narrowing instead
- ❌ No barrel files (`index.ts`) — they cause circular imports

## 🔗 Git & Commit Conventions

### Branch Naming

```
feat/add-hero-section
fix/mobile-nav-focus
perf/optimize-images
docs/update-setup-guide
refactor/signals-migration
```

### Commit Messages (Conventional Commits)

```
feat: add VS Code features showcase section
fix: resolve CLS on hero image at 375px viewport
perf: defer resources grid below fold with @defer
a11y: add aria-label to dark mode toggle
docs: update copilot-instructions.md
chore: bump Angular to 21.2
```

### PR Requirements

- ✅ All CI checks pass (lint, typecheck, test, build)
- ✅ Lighthouse CI scores do not regress
- ✅ At least one reviewer approval
- ✅ PR description lists: what changed, why, how to test

## ❌ Agent Must-Nots

These are hard stops. If a task requires one of these, **pause and ask for clarification**.

```
❌ Use NgModule — standalone only
❌ Use npm/yarn — pnpm only
❌ Add console.log to committed code
❌ Disable TypeScript strict mode
❌ Use any — use unknown + narrowing
❌ Inline static styles
❌ Import from barrel index.ts
❌ Use default change detection — OnPush everywhere
❌ Remove accessibility attributes
❌ Decrease test coverage
❌ Add synchronous <script> tag to index.html
❌ Use window/document without isPlatformBrowser guard
❌ Modify .docs/AGENT.md without human approval
```

## 🔍 Common Debugging

### SSG build fails with "ERROR"

```bash
pnpm build 2>&1 | grep "ERROR"
# Common cause: window/document access outside isPlatformBrowser guard
```

### Tailwind classes not applying

Ensure the class name appears **fully** in source (Tailwind cannot detect dynamic strings):

```typescript
// ❌ Wrong — Tailwind won't detect this
const cls = `text-${size}-lg`;

// ✅ Right
const cls = size === 'lg' ? 'text-lg' : 'text-base';
```

### Signals not updating view

- Verify `ChangeDetectionStrategy.OnPush` is set
- Ensure signal is accessed in template (not just in methods)
- Check that `computed()` signal is used correctly

---

**For comprehensive guidance on architecture, conventions, and detailed patterns, see [.docs/AGENT.md](.docs/AGENT.md).**

_Last updated: May 2026 — AI agents should reference this file first, then .docs/AGENT.md for detailed guidance._
