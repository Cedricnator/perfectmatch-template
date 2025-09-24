import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompatibilityRingComponent } from '../compatibility-ring/compatibility-ring.component';

@Component({
  selector: 'app-match-card',
  standalone: true,
  imports: [CommonModule, CompatibilityRingComponent],
  template: `
  <div class="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 flex flex-col gap-4 shadow-theme-xs hover:shadow-theme-sm transition">
    <div class="flex items-start gap-3">
      <div class="relative">
        <div class="h-14 w-14 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-xs font-medium text-gray-500 dark:text-gray-400">
          <img *ngIf="image" [src]="image" alt="avatar" class="h-full w-full object-cover rounded-xl" />
          <span *ngIf="!image">IMG</span>
        </div>
        <span *ngIf="premium" class="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded bg-brand-500 text-white font-medium">PRO</span>
      </div>
      <div class="min-w-0">
        <p class="font-semibold text-gray-800 dark:text-white/90 truncate">{{ name }} <span *ngIf="age" class="font-normal text-gray-500 dark:text-gray-400">· {{ age }}</span></p>
        <p class="text-[13px] text-gray-500 dark:text-gray-400 truncate" *ngIf="location">{{ location }}</p>
      </div>
      <div class="ml-auto pt-1">
        <app-compatibility-ring [percent]="compatibility"></app-compatibility-ring>
      </div>
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-400 line-clamp-3" *ngIf="bio">{{ bio }}</p>
    <div class="flex gap-2 mt-auto">
      <button class="flex-1 h-9 rounded-lg border border-gray-300 dark:border-gray-700 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">Ver</button>
      <button class="flex-1 h-9 rounded-lg bg-brand-500 text-white text-xs font-medium hover:bg-brand-600">Conectar</button>
    </div>
  </div>
  `
})
export class MatchCardComponent {
  @Input() name = 'Usuario';
  @Input() age?: number;
  @Input() location?: string;
  @Input() image?: string;
  @Input() bio?: string;
  @Input() compatibility = 0;
  @Input() premium = false;
}
