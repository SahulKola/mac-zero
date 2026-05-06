import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center max-w-md mx-auto px-4">
        <div class="mb-8 text-7xl font-bold text-neutral-200 dark:text-neutral-800">404</div>
        <h1 class="heading-md mb-4 text-neutral-950 dark:text-neutral-50">Page Not Found</h1>
        <p class="body-lg text-neutral-700 dark:text-neutral-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a routerLink="/" class="btn-primary">Return Home</a>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
