import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompatibilityRingComponent } from '../../ui/compatibility-ring/compatibility-ring.component';
import { ProfileAvatarComponent } from '../../ui/profile-avatar/profile-avatar.component';
import { VerifiedBadgeComponent } from '../../ui/verified-badge/verified-badge.component';

@Component({
  selector: 'pm-match-summary-panel',
  standalone: true,
  imports: [CommonModule, CompatibilityRingComponent, ProfileAvatarComponent, VerifiedBadgeComponent],
  template: `
  <div class="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 space-y-6 max-w-xl">
    <div class="flex items-start gap-4">
      <pm-profile-avatar [name]="name" [size]="72" [premium]="premium" status="online" />
      <div class="flex-1 min-w-0">
        <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90 flex items-center gap-2">{{ name }}, {{ age }}
          <pm-verified-badge *ngIf="verified" variant="visual" [icon]="true"></pm-verified-badge>
        </h3>
        <p class="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2">{{ location }}</p>
        <div class="mt-2 flex items-center gap-3">
          <pm-compatibility-ring [value]="compatibility" [size]="64" [stroke]="6" label="Match"></pm-compatibility-ring>
          <div class="text-[11px] text-gray-600 dark:text-gray-400 leading-5">
            <p><span class="text-gray-800 dark:text-white/90 font-medium">Compatibilidad:</span> {{ compatibility }}%</p>
            <p *ngIf="interests?.length">Intereses comunes: {{ interests.slice(0,4).join(', ') }}<span *ngIf="interests.length>4">…</span></p>
            <p *ngIf="distanceKm!==undefined">Distancia aprox: ~{{ distanceKm }} km</p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-3">
      <div class="p-3 rounded-xl bg-gray-50 dark:bg-white/5 text-center">
        <p class="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400 font-medium mb-1">Afinidad</p>
        <p class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ affinity }}%</p>
      </div>
      <div class="p-3 rounded-xl bg-gray-50 dark:bg-white/5 text-center">
        <p class="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400 font-medium mb-1">Intereses</p>
        <p class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ interestScore }}%</p>
      </div>
      <div class="p-3 rounded-xl bg-gray-50 dark:bg-white/5 text-center">
        <p class="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400 font-medium mb-1">Proximidad</p>
        <p class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ geoScore }}%</p>
      </div>
    </div>
    <div class="flex flex-wrap gap-2 text-[11px]">
      <button class="px-3 h-9 rounded-lg bg-brand-500 text-white font-medium hover:bg-brand-600">Enviar solicitud</button>
      <button class="px-3 h-9 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5">Ver perfil</button>
      <button class="px-3 h-9 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5">Descartar</button>
    </div>
  </div>
  `
})
export class MatchSummaryPanelComponent {
  @Input() name='';
  @Input() age=0;
  @Input() location='';
  @Input() premium=false;
  @Input() verified=false;
  @Input() compatibility=0;
  @Input() interests:string[]=[];
  @Input() distanceKm?:number;
  @Input() affinity=0;
  @Input() interestScore=0;
  @Input() geoScore=0;
}
