import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Presentational avatar with optional status and premium badge.
 * Usage: <pm-profile-avatar src="/images/user/owner.jpg" alt="Nombre" size="64" status="online" premium />
 */
@Component({
  selector: 'pm-profile-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="relative inline-flex" [style.width.px]="size" [style.height.px]="size">
    <div class="overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 w-full h-full flex items-center justify-center">
      <img *ngIf="src; else fallback" [src]="src" [alt]="alt || 'avatar'" class="w-full h-full object-cover" loading="lazy" />
      <ng-template #fallback>
        <span class="text-[11px] font-semibold text-gray-500 dark:text-gray-400">{{ initials }}</span>
      </ng-template>
    </div>
    <span *ngIf="status" class="absolute rounded-full border border-white dark:border-gray-900" [ngClass]="statusClass" [style.width.px]="statusSize" [style.height.px]="statusSize" [style.bottom.px]="3" [style.right.px]="3"></span>
    <span *ngIf="premium" class="absolute -bottom-1 -left-1 inline-flex items-center justify-center rounded-full bg-brand-500 text-white shadow-theme-xs" [style.width.px]="badgeSize" [style.height.px]="badgeSize" title="Premium">★</span>
  </div>
  `,
  styles: [``]
})
export class ProfileAvatarComponent {
  @Input() src?: string;
  @Input() alt?: string;
  @Input() name?: string;
  @Input() size = 64;
  @Input() premium = false;
  @Input() status?: 'online' | 'offline' | 'busy';

  get statusSize() { return Math.max(10, Math.round(this.size * 0.22)); }
  get badgeSize() { return Math.max(16, Math.round(this.size * 0.34)); }
  get initials() {
    if (this.name) {
      return this.name.split(/\s+/).slice(0,2).map(p => p[0]).join('').toUpperCase();
    }
    return 'PM';
  }
  get statusClass() {
    return {
      'bg-success-500': this.status === 'online',
      'bg-gray-400': this.status === 'offline',
      'bg-warning-500': this.status === 'busy'
    };
  }
}
