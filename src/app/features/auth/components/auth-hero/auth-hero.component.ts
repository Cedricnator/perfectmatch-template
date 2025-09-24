import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pm-auth-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white via-brand-50/60 to-brand-100/40 dark:from-gray-900 dark:via-gray-900/60 dark:to-gray-800/40 p-8 md:p-10">
    <div class="absolute inset-0 pointer-events-none opacity-60 [mask-image:radial-gradient(circle_at_30%_35%,#000 40%,transparent)]">
      <div class="absolute -top-16 -left-24 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"></div>
      <div class="absolute bottom-0 -right-10 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"></div>
    </div>
    <div class="relative">
      <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-gray-800 dark:text-white/90">{{ title }}</h1>
      <p class="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-prose" *ngIf="subtitle">{{ subtitle }}</p>
      <ng-content />
    </div>
  </div>
  `
})
export class AuthHeroComponent {
  @Input() title = 'Crea tu cuenta';
  @Input() subtitle?: string = 'Accede a experiencias basadas en compatibilidad real.';
}
