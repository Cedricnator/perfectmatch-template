import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompatibilityRingComponent } from '../../ui/compatibility-ring/compatibility-ring.component';
import { ProfileAvatarComponent } from '../../ui/profile-avatar/profile-avatar.component';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'pm-match-mini-card',
  standalone: true,
  imports: [CommonModule, CompatibilityRingComponent, ProfileAvatarComponent, ButtonComponent],
  template: `
  <div class="group relative p-4 rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 hover:shadow-md transition-shadow overflow-hidden">
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-brand-500/5 to-brand-500/0 pointer-events-none transition-opacity"></div>
    <div class="flex items-center gap-3">
      <pm-profile-avatar [name]="name" [size]="54" [premium]="premium" status="online" />
      <div class="min-w-0 flex-1">
        <p class="text-sm font-semibold text-gray-800 dark:text-white/90 truncate">{{ name }}, {{ age }}</p>
        <p class="text-[11px] text-gray-500 dark:text-gray-400 truncate">{{ location }}</p>
        <div class="mt-1 flex items-center gap-1.5">
          <span class="inline-flex items-center gap-1 rounded-md bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400 px-2 py-0.5 text-[10px] font-medium">{{ compatibility }}% match</span>
          <span *ngIf="badge" class="inline-flex items-center rounded-md bg-orange-50 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400 px-1.5 py-0.5 text-[10px] font-medium">{{ badge }}</span>
        </div>
      </div>
      <div class="hidden sm:block">
        <pm-compatibility-ring [value]="compatibility" [size]="54" [stroke]="5"></pm-compatibility-ring>
      </div>
    </div>
    <p *ngIf="bio" class="mt-3 text-[11px] leading-4 text-gray-600 dark:text-gray-400 line-clamp-3">{{ bio }}</p>
    <div class="mt-4 flex items-center gap-2 text-[11px]">
      <app-button size="sm" variant="secondary">Ver</app-button>
      <app-button size="sm" variant="primary">Conectar</app-button>
    </div>
  </div>
  `,
  styles:[``]
})
export class MatchMiniCardComponent {
  @Input() name = '';
  @Input() age = 0;
  @Input() location = '';
  @Input() compatibility = 0;
  @Input() premium = false;
  @Input() badge?: string;
  @Input() bio?: string;
}
