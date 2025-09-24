import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-daily-question',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
  <div class="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">Pregunta del día</h3>
    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">¿Qué plan ideal propondrías para una primera cita?</p>
    <div class="mt-4 grid gap-2 sm:grid-cols-2">
      <app-button *ngFor="let opt of options" size="sm" variant="subtle" className="justify-start w-full text-left" (btnClick)="answer=opt"
        [class.bg-brand-500]="answer===opt" [class.text-white]="answer===opt" [class.border-brand-500]="answer===opt" [class.shadow]="answer===opt" [class.hover\:bg-brand-600]="answer===opt"
        class="border w-full" [class.border-gray-300]="answer!==opt" [class.dark\:border-gray-700]="answer!==opt">{{ opt }}</app-button>
    </div>
    <p *ngIf="answer" class="mt-3 text-[11px] text-brand-600 dark:text-brand-400">Respuesta guardada (placeholder)</p>
  </div>
  `
})
export class DailyQuestionComponent {
  options = ['Café tranquilo','Paseo al aire libre','Museo y helado','Cocinar juntos'];
  answer: string | null = null;
}
