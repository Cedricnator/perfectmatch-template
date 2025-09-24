import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from '../../services/user-state.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-visual-verification',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <div class="flex items-start justify-between gap-4 flex-wrap">
      <div>
        <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Verificación visual</h3>
        <p class="mt-1 text-xs text-gray-600 dark:text-gray-400 max-w-sm">Sube una selfie comparada con tus fotos de perfil. Esto incrementa la confianza y prioriza tus coincidencias.</p>
      </div>
      <span class="text-[11px] px-2 py-1 rounded-full font-medium" [ngClass]="statusClass$ | async">{{ statusLabel$ | async }}</span>
    </div>
    <div class="mt-4 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center">
      <input type="file" accept="image/*" (change)="onUpload($event)" class="hidden" #fileInput>
      <button class="px-4 py-2 text-xs font-medium rounded-lg bg-brand-500 text-white hover:bg-brand-600" (click)="fileInput.click()" *ngIf="currentStatus==='pending' || currentStatus==='rejected'">Subir selfie</button>
      <p *ngIf="currentStatus==='submitted'" class="text-xs text-gray-600 dark:text-gray-400">Revisando... (ejemplo)</p>
      <p *ngIf="currentStatus==='approved'" class="text-xs text-gray-600 dark:text-gray-400">Aprobada. Puedes volver a verificar si cambias tus fotos.</p>
    </div>
  </div>
  `
})
export class VisualVerificationComponent {
  private readonly state = inject(UserStateService);
  currentStatus: string = 'pending';

  readonly statusLabel$ = this.state.verificationStatus$.pipe(map(s => {
    this.currentStatus = s;
    switch(s){
      case 'pending': return 'Pendiente';
      case 'submitted': return 'En revisión';
      case 'approved': return 'Verificado';
      case 'rejected': return 'Rechazado';
    }
    return '—';
  }));

  readonly statusClass$ = this.state.verificationStatus$.pipe(map(s => {
    switch(s){
      case 'approved': return 'bg-success-100 text-success-700 dark:bg-success-500/15 dark:text-success-400';
      case 'submitted': return 'bg-brand-100 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400';
      case 'rejected': return 'bg-error-100 text-error-600 dark:bg-error-500/15 dark:text-error-400';
      default: return 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  }));

  onUpload(_evt: Event){
    this.state.setVerification('submitted');
    setTimeout(()=> this.state.setVerification('approved'), 1800);
  }
}
