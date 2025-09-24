import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from '../../services/user-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-intention-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90 mb-3">Intención</h3>
    <div class="flex flex-wrap gap-2">
      <button *ngFor="let opt of options" (click)="select(opt)" class="px-3 py-1.5 rounded-lg text-[11px] font-medium border transition"
        [ngClass]="(intention$ | async)===opt ? 'bg-brand-500 text-white border-brand-500 hover:bg-brand-600' : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'">
        {{ opt }}
      </button>
    </div>
  </div>
  `
})
export class IntentionSelectorComponent {
  options = ['Relación seria','Conocer gente','Amistad','Explorar'];
  intention$!: Observable<string | null>;
  constructor(private state: UserStateService) { this.intention$ = this.state.intention$; }
  select(opt: string){ this.state.setIntention(opt); }
}
