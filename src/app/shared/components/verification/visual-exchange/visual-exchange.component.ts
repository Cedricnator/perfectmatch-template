import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileAvatarComponent } from '../../ui/profile-avatar/profile-avatar.component';

@Component({
  selector: 'pm-visual-exchange',
  standalone: true,
  imports: [CommonModule, ProfileAvatarComponent],
  template: `
  <div class="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 max-w-xl space-y-5">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Verificación visual</h3>
        <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Ambos deben aprobar la fotografía para avanzar.</p>
      </div>
      <span class="px-2 py-1 text-[10px] rounded-full bg-orange-50 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400" *ngIf="status==='pending'">Pendiente</span>
      <span class="px-2 py-1 text-[10px] rounded-full bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400" *ngIf="status==='approved'">Aprobado</span>
      <span class="px-2 py-1 text-[10px] rounded-full bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-400" *ngIf="status==='rejected'">Rechazado</span>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="space-y-2">
        <p class="text-[10px] uppercase tracking-wide font-medium text-gray-500 dark:text-gray-500">Tu envío</p>
        <div class="aspect-[4/5] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] text-gray-500 dark:text-gray-400">Foto subida</div>
        <button class="w-full h-9 text-[11px] rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5">Reemplazar</button>
      </div>
      <div class="space-y-2">
        <p class="text-[10px] uppercase tracking-wide font-medium text-gray-500 dark:text-gray-500">De {{ otherName }}</p>
        <div class="aspect-[4/5] rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] text-gray-500 dark:text-gray-400">Esperando...</div>
        <div class="flex gap-2">
          <button class="flex-1 h-9 text-[11px] rounded-lg bg-success-500 text-white font-medium hover:bg-success-600">Aprobar</button>
          <button class="flex-1 h-9 text-[11px] rounded-lg bg-error-500 text-white font-medium hover:bg-error-600">Rechazar</button>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 text-[11px] text-gray-600 dark:text-gray-400">
      <pm-profile-avatar [name]="otherName" [size]="40" />
      <p>Se sugiere usar luz natural y fondo neutro. Sin filtros.</p>
    </div>
  </div>
  `
})
export class VisualExchangeComponent {
  @Input() status: 'pending' | 'approved' | 'rejected' = 'pending';
  @Input() otherName = 'Contacto';
}
