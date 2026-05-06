import { Component, input, ChangeDetectionStrategy } from '@angular/core';

export interface FeatureCardData {
  title: string;
  description: string;
  icon?: string;
  cta?: {
    label: string;
    href: string;
  };
}

@Component({
  selector: 'app-feature-card',
  standalone: true,
  template: `
    <div class="card hover:shadow-lg transition-shadow duration-300">
      @if (data().icon) {
        <div class="mb-4 text-4xl">{{ data().icon }}</div>
      }
      <h3 class="heading-sm text-neutral-950 dark:text-neutral-50 mb-3">
        {{ data().title }}
      </h3>
      <p class="text-neutral-700 dark:text-neutral-300 mb-4">
        {{ data().description }}
      </p>
      @if (data().cta) {
        <a
          [href]="data().cta!.href"
          class="text-neutral-800 dark:text-neutral-200 font-medium hover:text-neutral-950 dark:hover:text-neutral-100 inline-flex items-center gap-1"
        >
          {{ data().cta!.label }}
          <span>→</span>
        </a>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardComponent {
  readonly data = input.required<FeatureCardData>();
}
