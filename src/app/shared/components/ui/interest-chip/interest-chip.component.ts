import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Visual chip para intereses (puede ser estático o con toggle). No persiste estado.
 * Usage: <pm-interest-chip label="Viajes" [active]="true" (toggled)="..." />
 */
@Component({
  selector: 'pm-interest-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button type="button" (click)="toggle()" [attr.aria-pressed]="active" class="px-3 h-8 rounded-full border text-[11px] font-medium transition-colors select-none focus:outline-none focus:ring-2 focus:ring-brand-500/30"
    [ngClass]="active ? 'bg-brand-500 border-brand-500 text-white dark:bg-brand-500 dark:border-brand-500' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5'">
    <ng-content />{{ label }}
  </button>
  `,
  styles: [``]
})
export class InterestChipComponent {
  @Input() label = '';
  @Input() active = false;
  @Output() toggled = new EventEmitter<boolean>();
  toggle(){
    this.active = !this.active;
    this.toggled.emit(this.active);
  }
}
