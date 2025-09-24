import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'pm-chat-gate',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-sm">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-[10px] uppercase font-medium tracking-wide text-brand-600 dark:text-brand-400">Fase 3</p>
          <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90 flex items-center gap-2">
            <span>Puerta de Chat</span>
            <span class="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full"
              [ngClass]="statusBadgeClasses">{{ statusLabel }}</span>
          </h3>
          <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Desbloquea el chat completando pasos previos y confirmando intención genuina.</p>
        </div>
  <app-button size="xs" variant="outline" className="h-8 px-3 text-[11px] bg-white/70 dark:bg-white/5">Detalles</app-button>
      </div>

      <ol class="mt-5 space-y-3">
        <li *ngFor="let step of gateSteps; let i = index" class="flex items-start gap-3">
          <div class="relative flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-semibold"
               [ngClass]="stepCircleClasses(step.state)">
            <ng-container [ngSwitch]="step.state">
              <span *ngSwitchCase="'done'">✓</span>
              <span *ngSwitchCase="'current'">{{ i+1 }}</span>
              <span *ngSwitchDefault>{{ i+1 }}</span>
            </ng-container>
          </div>
          <div class="flex-1">
            <p class="text-[11px] font-medium" [ngClass]="stateTitleClasses(step.state)">{{ step.title }}</p>
            <p class="text-[10px] mt-0.5 text-gray-500 dark:text-gray-500" *ngIf="step.desc">{{ step.desc }}</p>
          </div>
          <div class="w-14 text-right">
            <span *ngIf="step.state==='locked'" class="text-[10px] text-gray-400">Bloq.</span>
            <span *ngIf="step.state==='current'" class="text-[10px] text-brand-600 dark:text-brand-400 font-medium">Ahora</span>
            <span *ngIf="step.state==='done'" class="text-[10px] text-success-600 dark:text-success-400">Hecho</span>
          </div>
        </li>
      </ol>

      <div class="mt-6 p-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-white/5">
        <p class="text-[11px] font-medium text-gray-700 dark:text-gray-300 mb-2">Requisito activo</p>
        <p class="text-[11px] text-gray-600 dark:text-gray-400" *ngIf="activeRequirement; else placeholder">{{ activeRequirement }}</p>
        <ng-template #placeholder>
          <p class="text-[11px] text-gray-500 dark:text-gray-500 italic">No hay requisitos pendientes.</p>
        </ng-template>
        <div class="mt-3 flex gap-2">
          <app-button size="sm" variant="primary" className="flex-1 h-9 text-[11px]" *ngIf="status!=='unlocked'">Completar</app-button>
          <app-button size="sm" variant="success" className="flex-1 h-9 text-[11px]" *ngIf="status==='unlocked'">Entrar al Chat</app-button>
        </div>
      </div>

      <div class="mt-5 flex items-center justify-between text-[10px] text-gray-500 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800 pt-3">
        <p>Seguridad centrada en conexiones reales.</p>
  <app-button size="xs" variant="ghost" className="underline px-0 h-auto">¿Por qué?</app-button>
      </div>
    </div>
  `
})
export class ChatGateComponent {
  @Input() status: 'locked' | 'progress' | 'unlocked' = 'locked';
  @Input() activeRequirement?: string;

  get statusLabel() {
    switch (this.status) {
      case 'locked': return 'Bloqueado';
      case 'progress': return 'En progreso';
      case 'unlocked': return 'Abierto';
    }
  }

  get statusBadgeClasses() {
    switch (this.status) {
      case 'locked': return 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
      case 'progress': return 'bg-brand-500/15 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300';
      case 'unlocked': return 'bg-success-500/20 text-success-600 dark:bg-success-500/25 dark:text-success-400';
    }
  }

  gateSteps = [
    { title: 'Verificación visual', desc: 'Ambos confirmados', state: 'done' as const },
    { title: 'Intercambio de pregunta', desc: 'Aprobación mutua', state: 'current' as const },
    { title: 'Liberar chat seguro', desc: 'Acceso progresivo', state: 'locked' as const }
  ];

  stepCircleClasses(state: 'done' | 'current' | 'locked') {
    return {
      'bg-success-500 text-white': state === 'done',
      'bg-brand-500 text-white animate-pulse': state === 'current',
      'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-500': state === 'locked'
    };
  }

  stateTitleClasses(state: 'done' | 'current' | 'locked') {
    return {
      'text-success-600 dark:text-success-400': state === 'done',
      'text-brand-600 dark:text-brand-400': state === 'current',
      'text-gray-600 dark:text-gray-400': state === 'locked'
    };
  }
}
