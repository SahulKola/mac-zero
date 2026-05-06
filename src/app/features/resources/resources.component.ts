import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen">
      <section class="section py-20">
        <div class="max-w-4xl mx-auto">
          <h1 class="heading-lg mb-4 text-neutral-950 dark:text-neutral-50">Curated Resources</h1>
          <p class="body-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
            Hand-picked tools, extensions, learning materials, and best practices for frontend
            developers using Angular, TypeScript, and modern web technologies.
          </p>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="max-w-4xl mx-auto space-y-8">
          <!-- Development Environment -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Development Environment
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://code.visualstudio.com/insiders/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  VS Code Insiders
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Daily build with latest features and improvements.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.iterm2.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">iTerm2</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Modern terminal replacement with advanced features and split panes.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://ohmyz.sh/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Oh My Zsh</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Framework for managing zsh configuration with plugins and themes.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://brew.sh/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Homebrew</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Package manager for macOS - install and manage development tools.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- CLI Tools & Package Managers -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              CLI Tools & Package Managers
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://pnpm.io/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">pnpm</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Fast, disk space efficient package manager - recommended for this project.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://angular.io/cli"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Angular CLI
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Official command-line tool for Angular development and scaffolding.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://nodejs.org/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Node.js</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  JavaScript runtime - foundation for all modern frontend tooling.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://git-scm.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Git</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Distributed version control system - essential for all development.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- Frontend Frameworks & Libraries -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Frontend Frameworks & Libraries
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://angular.io/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Angular</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Full-featured framework with TypeScript, built-in testing, and SSR/SSG support.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">TypeScript</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Typed superset of JavaScript - catch errors at compile time.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Tailwind CSS
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Utility-first CSS framework - build modern UIs without custom CSS.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://rxjs.dev/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">RxJS</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Reactive programming library for handling asynchronous operations.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- Testing & Quality -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Testing & Code Quality
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://vitest.dev/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Vitest</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Fast unit test framework with excellent IDE integration.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://playwright.dev/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Playwright</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  End-to-end testing framework for modern web apps.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://eslint.org/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">ESLint</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  JavaScript/TypeScript linter - find and fix code quality issues.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://prettier.io/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Prettier</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Code formatter - automatic style consistency across teams.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- VS Code Extensions -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Essential VS Code Extensions
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="card p-6">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Productivity
                </h3>
                <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>• ESLint - Linting integration</li>
                  <li>• Prettier - Code formatting</li>
                  <li>• GitHub Copilot - AI code completion</li>
                  <li>• GitLens - Git blame and history</li>
                  <li>• Live Server - Local dev server</li>
                </ul>
              </div>
              <div class="card p-6">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Angular & TypeScript
                </h3>
                <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>• Angular Language Service</li>
                  <li>• TypeScript Vue Plugin</li>
                  <li>• Angular Schematics</li>
                  <li>• Nx Console - Nx integration</li>
                  <li>• Error Lens - Inline errors</li>
                </ul>
              </div>
              <div class="card p-6">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Styling & UI
                </h3>
                <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>• Tailwind CSS IntelliSense</li>
                  <li>• PostCSS Language Support</li>
                  <li>• Color Picker</li>
                  <li>• Peacock - Color workspaces</li>
                  <li>• Colorize - Color highlighting</li>
                </ul>
              </div>
              <div class="card p-6">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Development Tools
                </h3>
                <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li>• Thunder Client - API testing</li>
                  <li>• Docker - Container support</li>
                  <li>• Remote SSH - Remote development</li>
                  <li>• REST Client - HTTP requests</li>
                  <li>• Better Comments - Comment formatting</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Learning Resources -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Learning Resources
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://angular.dev/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Angular.dev
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Official Angular documentation with tutorials and examples.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.typescriptlang.org/docs/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  TypeScript Handbook
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Comprehensive guide to TypeScript language features and best practices.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://web.dev/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Web.dev</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Google's guide to building modern web experiences.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://developer.mozilla.org/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  MDN Web Docs
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Authoritative reference for HTML, CSS, and JavaScript.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- Performance & DevOps -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Performance & DevOps
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.docker.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Docker</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Containerization for consistent development and deployment environments.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.nginx.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Nginx</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  High-performance web server and reverse proxy.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">GitHub</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Platform for version control and collaboration.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.vercel.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Vercel</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Frontend deployment platform with automatic optimizations.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- Best Practices -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Best Practices & Guidelines
            </h2>
            <div class="space-y-4">
              <div class="card p-6">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Code Quality
                </h3>
                <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li class="flex items-start">
                    <span class="mr-3">✓</span
                    ><span>Use TypeScript strict mode for all projects</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span
                    ><span>Configure ESLint and Prettier for consistent code style</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span
                    ><span
                      >Write unit tests for critical functionality (aim for 80%+ coverage)</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span
                    ><span>Use semantic HTML and ARIA for accessibility</span>
                  </li>
                </ul>
              </div>
              <div class="card p-6">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Performance
                </h3>
                <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li class="flex items-start">
                    <span class="mr-3">✓</span
                    ><span>Lazy load routes and components to reduce initial bundle size</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span><span>Use OnPush change detection strategy</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span><span>Optimize images with NgOptimizedImage</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span
                    ><span>Monitor bundle size and Core Web Vitals regularly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Static Site Generation & Deployment -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Static Site Generation & Deployment
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://angular.io/guide/prerendering"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Angular SSG Guide
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Official Angular documentation on static generation and pre-rendering.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.netlify.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Netlify</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Modern platform for deploying static sites with built-in CI/CD.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://pages.github.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  GitHub Pages
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Free static site hosting directly from GitHub repositories.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.cloudflare.com/pages/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Cloudflare Pages
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Edge-powered static site hosting with exceptional global performance.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- Browser DevTools & Debugging -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Browser DevTools & Performance Debugging
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://developer.chrome.com/docs/devtools/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Chrome DevTools
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Comprehensive browser tools for debugging, profiling, and performance analysis.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.webpagetest.org/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  WebPageTest
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Free tool for performance testing and analysis from multiple locations.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://pagespeed.web.dev/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  PageSpeed Insights
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Google's tool for analyzing page performance and mobile usability.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.lightningcss.dev/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Lightning CSS
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Extremely fast CSS compiler and minifier written in Rust.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- AI Tools & Productivity -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              AI Tools & Developer Productivity
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://github.com/features/copilot"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  GitHub Copilot
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  AI pair programmer for code generation, completion, and refactoring suggestions.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.tabnine.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Tabnine</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  AI code completion for faster and smarter development workflows.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://cursor.sh/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Cursor</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  AI-first code editor with advanced completion and refactoring capabilities.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.codeium.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Codeium</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Free AI code completion with excellent IDE integration.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- macOS Development Tools -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              macOS Development Tools
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.raycast.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Raycast</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Modern command launcher and productivity tool for macOS developers.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.alfredapp.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Alfred</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Powerful application launcher with workflows and automation capabilities.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://github.com/macvim-dev/macvim"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">MacVim</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Native Vim implementation for macOS with modern UI enhancements.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.typora.io/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Typora</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Minimal Markdown editor for macOS with live preview.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>

          <!-- Community & Content -->
          <div>
            <h2 class="heading-sm mb-6 text-neutral-950 dark:text-neutral-50">
              Community & Content Resources
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.youtube.com/@Angular"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Angular YouTube Channel
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Official Angular team channel with tutorials, releases, and deep dives.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://github.com/angular/angular"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Angular GitHub Repository
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Official Angular framework source code, issues, and discussions.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://dev.to/search?q=angular"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Dev.to Community
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Curated articles and discussions about Angular, TypeScript, and web development.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
              <a
                href="https://www.smashingmagazine.com/"
                target="_blank"
                class="card p-6 hover:shadow-lg transition-shadow"
              >
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Smashing Magazine
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  Professional articles on web design, development, and best practices.
                </p>
                <span class="text-xs font-medium text-neutral-800 dark:text-neutral-200"
                  >→ Learn More</span
                >
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- CTA Section -->
      <section class="section pb-20">
        <div class="max-w-4xl mx-auto">
          <div
            class="card p-8 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800"
          >
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              Ready to Get Started?
            </h2>
            <p class="text-neutral-800 dark:text-neutral-200 mb-6">
              Head over to the macOS Setup guide for step-by-step installation instructions and
              environment configuration.
            </p>
            <a routerLink="/mac-setup" class="btn-primary">macOS Setup Guide</a>
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent {}
