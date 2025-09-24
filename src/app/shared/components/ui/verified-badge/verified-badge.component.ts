import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Badge visual para verificación (solo estética). Variantes: 'visual' | 'id' | 'pro' */
@Component({
  selector: 'pm-verified-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium select-none"
      [ngClass]="variantClass" [attr.title]="title || tooltipText">
      <svg *ngIf="icon !== false" width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9.5 12.5l2 2 4-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <ng-content />
      <span *ngIf="!hasProjected">{{ labelText }}</span>
    </span>
  `,
  styles:[``]
})
export class VerifiedBadgeComponent {
  @Input() variant: 'visual' | 'id' | 'pro' = 'visual';
  @Input() icon: boolean = true;
  @Input() title?: string;
  @Input() label?: string;

  get hasProjected(){ return !!this.label; }
  get labelText(){
    if (this.label) return this.label;
    switch(this.variant){
      case 'visual': return 'Verificado';
      case 'id': return 'ID Verificada';
      case 'pro': return 'Plus';
    }
  }
  get tooltipText(){
    switch(this.variant){
      case 'visual': return 'Identidad visual confirmada';
      case 'id': return 'Documento revisado';
      case 'pro': return 'Beneficios avanzados';
    }
  }
  get variantClass(){
    return {
      'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400': this.variant==='visual',
      'bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-400': this.variant==='id',
      'bg-orange-50 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400': this.variant==='pro'
    };
  }
}
