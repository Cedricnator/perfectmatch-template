import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from '../../services/user-state.service';
import { Observable } from 'rxjs';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-intention-selector',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
  <div class="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90 mb-3">Intención</h3>
    <div class="flex flex-wrap gap-2">
      <app-button *ngFor="let opt of options" size="sm" variant="subtle" (btnClick)="select(opt)"
        [class.bg-brand-500]="(intention$|async)===opt" [class.text-white]="(intention$|async)===opt" [class.border-brand-500]="(intention$|async)===opt" [class.hover\:bg-brand-600]="(intention$|async)===opt"
        [class.border]="true" [class.border-gray-300]="(intention$|async)!==opt" [class.dark\:border-gray-700]="(intention$|async)!==opt">
        {{ opt }}
      </app-button>
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
