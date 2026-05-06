import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer
      class="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 py-12"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- About -->
          <div>
            <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-4">About</h3>
            <p class="text-sm text-neutral-700 dark:text-neutral-300">
              mac-zero is a productivity guide for frontend developers setting up VS Code on macOS.
            </p>
          </div>

          <!-- Links -->
          <div>
            <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-4">Resources</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  href="https://code.visualstudio.com/insiders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
                >
                  VS Code Insiders
                </a>
              </li>
              <li>
                <a
                  href="https://angular.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
                >
                  Angular Docs
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-4">Legal</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  class="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom -->
        <div
          class="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-700 dark:text-neutral-300"
        >
          <p>&copy; 2026 mac-zero. All rights reserved.</p>
          <div class="flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
