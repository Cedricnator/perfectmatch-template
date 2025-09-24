import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from '../../services/user-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interests-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90 mb-3">Intereses</h3>
    <div class="flex flex-wrap gap-2">
      <button *ngFor="let i of interests"
        (click)="toggle(i)"
        class="px-3 py-1.5 rounded-full text-[11px] font-medium border transition"
        [ngClass]="(selected$ | async)?.includes(i) ? 'bg-brand-500 text-white border-brand-500 hover:bg-brand-600' : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'">
        {{ i }}
      </button>
    </div>
  </div>
  `
})
export class InterestsSelectorComponent {
  @Input() interests: string[] = ['Viajes','Música','Cine','Gastronomía','Lectura','Senderismo','Tecnología','Fotografía'];
  selected$!: Observable<string[]>;
  constructor(private state: UserStateService) { this.selected$ = this.state.interests$; }
  toggle(i: string){ this.state.toggleInterest(i); }
}
