import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from '../../services/user-state.service';
import { Observable } from 'rxjs';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-interests-selector',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
  <div class="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90 mb-3">Intereses</h3>
    <div class="flex flex-wrap gap-2">
  <app-button *ngFor="let i of interests" size="sm" [pill]="true" variant="subtle" (btnClick)="toggle(i)"
        [class.bg-brand-500]="(selected$|async)?.includes(i)" [class.text-white]="(selected$|async)?.includes(i)" [class.border-brand-500]="(selected$|async)?.includes(i)" [class.hover\:bg-brand-600]="(selected$|async)?.includes(i)"
        class="border" [class.border-gray-300]="!(selected$|async)?.includes(i)" [class.dark\:border-gray-700]="!(selected$|async)?.includes(i)">
        {{ i }}
      </app-button>
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
