import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'pm-staged-question',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
  <div class="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 max-w-xl space-y-4">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-[10px] uppercase tracking-wide font-medium text-brand-600 dark:text-brand-400">Fase 2</p>
        <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Intercambio de pregunta</h3>
        <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Cada parte formula y responde una única pregunta. Necesita aprobación mutua.</p>
      </div>
      <span class="px-2 py-1 text-[10px] rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">{{ phaseStatus }}</span>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="space-y-2">
        <p class="text-[11px] font-medium text-gray-700 dark:text-gray-300">Tu pregunta</p>
        <div class="min-h-[80px] rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-3 text-[11px] text-gray-500 dark:text-gray-400 flex items-center justify-center">
          {{ userQuestion || 'Escribe tu pregunta…' }}
        </div>
  <app-button size="sm" variant="secondary" className="w-full h-9 text-[11px]">Editar</app-button>
      </div>
      <div class="space-y-2">
        <p class="text-[11px] font-medium text-gray-700 dark:text-gray-300">Pregunta de {{ otherName }}</p>
        <div class="min-h-[80px] rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-3 text-[11px] text-gray-500 dark:text-gray-400 flex items-center justify-center">
          {{ otherQuestion || 'Esperando…' }}
        </div>
        <div class="flex gap-2">
          <app-button size="sm" variant="success" className="flex-1 h-9 text-[11px]">Aprobar</app-button>
          <app-button size="sm" variant="danger" className="flex-1 h-9 text-[11px]">Rechazar</app-button>
        </div>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2 pt-2">
      <div class="space-y-1">
        <p class="text-[10px] uppercase tracking-wide font-medium text-gray-500 dark:text-gray-500">Tu respuesta</p>
        <div class="min-h-[70px] rounded-lg border border-gray-200 dark:border-gray-800 p-3 text-[11px] text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 flex items-center">{{ userAnswer || 'Pendiente' }}</div>
      </div>
      <div class="space-y-1">
        <p class="text-[10px] uppercase tracking-wide font-medium text-gray-500 dark:text-gray-500">Respuesta de {{ otherName }}</p>
        <div class="min-h-[70px] rounded-lg border border-gray-200 dark:border-gray-800 p-3 text-[11px] text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 flex items-center">{{ otherAnswer || 'Pendiente' }}</div>
      </div>
    </div>
    <div class="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
      <p class="text-[11px] text-gray-500 dark:text-gray-400">Ambas respuestas deberán aprobarse para avanzar al chat libre.</p>
  <app-button size="sm" variant="primary" className="h-9 px-4 text-[11px]">Guardar</app-button>
    </div>
  </div>
  `
})
export class StagedQuestionComponent {
  @Input() otherName='Contacto';
  @Input() userQuestion?:string;
  @Input() otherQuestion?:string;
  @Input() userAnswer?:string;
  @Input() otherAnswer?:string;
  @Input() phaseStatus:'pendiente'|'en progreso'|'completado' = 'pendiente';
}
