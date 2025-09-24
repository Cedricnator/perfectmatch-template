import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'pm-question-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
  <div class="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 max-w-xl mx-auto space-y-5">
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-[11px] uppercase tracking-wide font-semibold text-brand-600 dark:text-brand-400 mb-1">Pregunta {{ index + 1 }} / {{ total }}</p>
        <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90">{{ title }}</h3>
        <p class="mt-1 text-xs text-gray-600 dark:text-gray-400" *ngIf="description">{{ description }}</p>
      </div>
      <span class="px-2 py-1 text-[10px] rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">{{ category }}</span>
    </div>
    <div class="grid gap-2" *ngIf="type==='single'">
      <app-button *ngFor="let o of options" size="md" variant="subtle"
        class="justify-start h-10 px-4 text-left border hover:bg-gray-50 dark:hover:bg-white/5"
        (btnClick)="select(o)"
        [ngClass]="value===o
          ? 'bg-brand-500 text-white border-brand-500'
          : 'bg-white border-gray-200 text-gray-600 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300'">
        {{ o }}
      </app-button>
    </div>
    <div class="space-y-2" *ngIf="type==='scale'">
      <div class="flex justify-between text-[10px] text-gray-500 dark:text-gray-500"><span>{{ scaleLabels[0] }}</span><span>{{ scaleLabels[1] }}</span></div>
      <div class="flex items-center gap-2">
        <app-button *ngFor="let n of scaleArray" size="xs" [circle]="true" variant="subtle"
          class="size-8 !p-0 border hover:bg-gray-50 dark:hover:bg-white/5"
          (btnClick)="select(n)"
          [ngClass]="value===n
            ? 'bg-brand-500 text-white border-brand-500'
            : 'bg-white border-gray-200 text-gray-600 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300'">
          {{ n }}
        </app-button>
      </div>
    </div>
    <div class="pt-2 flex items-center justify-between">
      <app-button variant="outline" size="md" (btnClick)="back.emit()" className="h-9 px-4 text-xs">Atrás</app-button>
      <app-button variant="primary" size="md" (btnClick)="next.emit(value)" className="h-9 px-5 text-xs">Continuar</app-button>
    </div>
  </div>
  `
})
export class QuestionCardComponent {
  @Input() index = 0;
  @Input() total = 1;
  @Input() title = '';
  @Input() description?: string;
  @Input() category = 'General';
  @Input() type: 'single' | 'scale' = 'single';
  @Input() options: string[] = [];
  @Input() scaleRange: [number, number] = [1,5];
  @Input() scaleLabels: [string, string] = ['Bajo','Alto'];
  @Input() value: any;
  @Output() next = new EventEmitter<any>();
  @Output() back = new EventEmitter<void>();
  scaleArray: number[] = [];
  ngOnInit(){
    if (this.type==='scale') {
      const [a,b] = this.scaleRange; this.scaleArray = Array.from({length:(b-a+1)}, (_,i)=>a+i);
    }
  }
  select(v:any){ this.value = v; }
}
