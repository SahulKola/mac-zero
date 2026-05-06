import { Component, ChangeDetectionStrategy, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav
      class="sticky top-0 z-40 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/95 dark:bg-neutral-900/95 backdrop-blur-md"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo — compact, no heavy weight -->
          <a
            routerLink="/"
            class="flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors focus-ring rounded"
          >
            <span class="text-xl leading-none">⚡</span>
            <span class="hidden sm:inline text-xl">mac-zero</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6">
            <a
              routerLink="/"
              routerLinkActive="text-neutral-900 dark:text-neutral-100 font-medium"
              [routerLinkActiveOptions]="{ exact: true }"
              class="text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >Home</a
            >
            <a
              routerLink="/vscode-guide"
              routerLinkActive="text-neutral-900 dark:text-neutral-100 font-medium"
              class="text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >VS Code</a
            >
            <a
              routerLink="/mac-setup"
              routerLinkActive="text-neutral-900 dark:text-neutral-100 font-medium"
              class="text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >Mac Setup</a
            >
            <a
              routerLink="/resources"
              routerLinkActive="text-neutral-900 dark:text-neutral-100 font-medium"
              class="text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >Resources</a
            >
            <a
              routerLink="/productivity-tools"
              routerLinkActive="text-neutral-900 dark:text-neutral-100 font-medium"
              class="text-base text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >Productivity</a
            >
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-1">
            <button
              (click)="toggleDarkMode()"
              class="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors focus-ring"
              [attr.aria-label]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <svg
                *ngIf="!isDarkMode()"
                class="w-4 h-4 text-neutral-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <svg
                *ngIf="isDarkMode()"
                class="w-4 h-4 text-neutral-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>

            <!-- Mobile Menu Button -->
            <button
              (click)="toggleMenu()"
              class="md:hidden p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors focus-ring"
              [attr.aria-label]="isMenuOpen() ? 'Close menu' : 'Open menu'"
            >
              <svg
                *ngIf="!isMenuOpen()"
                class="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                *ngIf="isMenuOpen()"
                class="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div
          *ngIf="isMenuOpen()"
          class="md:hidden py-3 space-y-0.5 border-t border-neutral-200 dark:border-neutral-800"
        >
          <a
            routerLink="/"
            (click)="closeMenu()"
            routerLinkActive="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            [routerLinkActiveOptions]="{ exact: true }"
            class="block px-3 py-1.5 rounded-md text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Home
          </a>
          <a
            routerLink="/vscode-guide"
            (click)="closeMenu()"
            routerLinkActive="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            class="block px-3 py-1.5 rounded-md text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            VS Code
          </a>
          <a
            routerLink="/mac-setup"
            (click)="closeMenu()"
            routerLinkActive="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            class="block px-3 py-1.5 rounded-md text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Mac Setup
          </a>
          <a
            routerLink="/resources"
            (click)="closeMenu()"
            routerLinkActive="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            class="block px-3 py-1.5 rounded-md text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Resources
          </a>
          <a
            routerLink="/productivity-tools"
            (click)="closeMenu()"
            routerLinkActive="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            class="block px-3 py-1.5 rounded-md text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Productivity
          </a>
        </div>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isMenuOpen = signal(false);
  readonly isDarkMode = signal(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem('theme');
      const isDark = stored ? stored === 'dark' : true;
      this.isDarkMode.set(isDark);
      this.applyTheme(isDark);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  toggleDarkMode() {
    const newValue = !this.isDarkMode();
    this.isDarkMode.set(newValue);
    this.applyTheme(newValue);
  }

  private applyTheme(isDark: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      const html = document.documentElement;
      if (isDark) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
