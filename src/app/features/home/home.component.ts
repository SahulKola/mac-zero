import { Component, ChangeDetectionStrategy, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen flex flex-col">
      <!-- Hero Section -->
      <section
        class="section min-h-[78vh] flex items-center py-20 sm:py-24 relative overflow-hidden"
      >
        <!-- Layered gradient background to make hero stand out -->
        <div class="absolute inset-0 -z-10">
          <div
            class="absolute inset-0 bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
          ></div>
          <div
            class="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(0,0,0,0.06)_45%,transparent_100%)] dark:bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_45%,transparent_100%)]"
          ></div>
        </div>

        <div class="max-w-5xl mx-auto w-full text-center">
          <h1
            class="heading-xl mb-6 text-neutral-950 dark:text-neutral-50 font-black tracking-tighter"
          >
            <span class="block">Frontend Development</span>
            <span class="block mt-2">Made Simple & Fast</span>
          </h1>

          <p
            class="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Master VS Code, configure your macOS environment perfectly, and unlock powerful
            productivity features. Everything you need to code faster and ship smarter.
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a routerLink="/vscode-guide" class="btn-primary px-8 py-3 text-base font-semibold">
              Explore VS Code Mastery
            </a>
            <a routerLink="/mac-setup" class="btn-secondary px-8 py-3 text-base font-semibold">
              macOS Setup Guide
            </a>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div
        class="h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
      ></div>

      <!-- Features Section -->
      <section class="section">
        <div class="max-w-4xl mx-auto">
          <h2 class="heading-md text-center mb-12 text-neutral-950 dark:text-neutral-50">
            What You'll Learn
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Feature 1: Performance -->
            <div class="card-accent p-8">
              <div class="icon-wrapper-accent mb-4">
                <svg
                  class="w-6 h-6 text-neutral-700 dark:text-neutral-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Performance First
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                Sub-1s load times, optimized bundles, and best practices for modern frontend
                applications.
              </p>
            </div>

            <!-- Feature 2: Developer Experience -->
            <div class="card-accent p-8">
              <div class="icon-wrapper-accent mb-4">
                <svg
                  class="w-6 h-6 text-neutral-700 dark:text-neutral-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                  <line x1="12" y1="12" x2="20" y2="7.5" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <line x1="12" y1="12" x2="4" y2="7.5" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                Clean Code
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                TypeScript strict mode, proper formatting, and zero console logs in production.
              </p>
            </div>

            <!-- Feature 3: Productivity Tools -->
            <div class="card-accent p-8">
              <div class="icon-wrapper-accent mb-4">
                <svg
                  class="w-6 h-6 text-neutral-700 dark:text-neutral-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                VS Code Mastery
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                Learn keyboard shortcuts, extensions, themes, and settings to maximize productivity.
              </p>
            </div>

            <!-- Feature 4: Setup Guide -->
            <div class="card-accent p-8">
              <div class="icon-wrapper-accent mb-4">
                <svg
                  class="w-6 h-6 text-neutral-700 dark:text-neutral-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="12" r="1" />
                  <path
                    d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"
                  />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                macOS Setup
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                Step-by-step guide for configuring your macOS environment for optimal development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div
        class="h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
      ></div>

      <!-- CTA Section -->
      <section class="section py-24">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="heading-md mb-6 text-neutral-950 dark:text-neutral-50">
            Ready to Optimize Your Workflow?
          </h2>
          <p class="body-base text-warm-700 dark:text-warm-300 mb-8">
            Explore our comprehensive guides and level up your frontend development skills.
          </p>
          <a routerLink="/resources" class="btn-primary"> View All Resources </a>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Browser-specific initialization if needed
    }
  }
}
