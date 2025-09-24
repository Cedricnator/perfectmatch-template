import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-question',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Pregunta del día</h3>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">¿Qué plan ideal propondrías para una primera cita?</p>
    <div class="mt-4 grid gap-2 sm:grid-cols-2">
      <button *ngFor="let opt of options" (click)="answer=opt" class="text-left px-3 py-2 rounded-xl border text-xs font-medium transition"
        [ngClass]="answer===opt ? 'bg-brand-500 text-white border-brand-500 shadow' : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'">
        {{ opt }}
      </button>
    </div>
    <p *ngIf="answer" class="mt-3 text-[11px] text-brand-600 dark:text-brand-400">Respuesta guardada (placeholder)</p>
  </div>
  `
})
export class DailyQuestionComponent {
  options = ['Café tranquilo','Paseo al aire libre','Museo y helado','Cocinar juntos'];
  answer: string | null = null;
}
