import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagedQuestionComponent } from '../staged-question/staged-question.component';
import { ChatGateComponent } from '../chat-gate/chat-gate.component';

@Component({
  selector: 'pm-escalation-panel',
  standalone: true,
  imports: [CommonModule, StagedQuestionComponent, ChatGateComponent],
  template: `
    <div class="space-y-6">
      <div class="flex flex-col md:flex-row gap-6">
        <pm-staged-question class="flex-1" [otherName]="otherName" [phaseStatus]="questionPhase"
          [userQuestion]="userQuestion" [otherQuestion]="otherQuestion" [userAnswer]="userAnswer" [otherAnswer]="otherAnswer" />
        <pm-chat-gate class="w-full md:max-w-sm" [status]="chatStatus" [activeRequirement]="activeRequirement" />
      </div>
      <div class="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/70">
        <p class="text-[11px] font-medium text-gray-700 dark:text-gray-300 mb-2">Fases de escalado</p>
        <div class="flex flex-wrap gap-2 text-[10px]">
          <span class="px-2 py-1 rounded-full bg-success-500/15 text-success-600 dark:bg-success-500/20 dark:text-success-400">1. Match + Verificación</span>
          <span class="px-2 py-1 rounded-full" [ngClass]="phaseChipClasses(questionPhase)">2. Intercambio</span>
          <span class="px-2 py-1 rounded-full" [ngClass]="phaseChipClasses(chatPhaseState)">3. Chat Seguro</span>
          <span class="px-2 py-1 rounded-full bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400">4. Extendido (futuro)</span>
        </div>
      </div>
    </div>
  `
})
export class EscalationPanelComponent {
  @Input() otherName='Contacto';
  @Input() questionPhase:'pendiente'|'en progreso'|'completado'='pendiente';
  @Input() userQuestion?:string;
  @Input() otherQuestion?:string;
  @Input() userAnswer?:string;
  @Input() otherAnswer?:string;
  @Input() chatStatus:'locked'|'progress'|'unlocked'='locked';
  @Input() activeRequirement?:string;

  get chatPhaseState(): 'pendiente' | 'en progreso' | 'completado' {
    switch(this.chatStatus){
      case 'locked': return 'pendiente';
      case 'progress': return 'en progreso';
      case 'unlocked': return 'completado';
    }
  }

  phaseChipClasses(phase:'pendiente'|'en progreso'|'completado'){
    return {
      'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400': phase==='pendiente',
      'bg-brand-500/15 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300': phase==='en progreso',
      'bg-success-500/15 text-success-600 dark:bg-success-500/20 dark:text-success-400': phase==='completado'
    };
  }
}
