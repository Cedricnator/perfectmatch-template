import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Visual only circular ring to show porcentaje de compatibilidad (0-100)
 * Usage: <pm-compatibility-ring [value]="82" size="72" label="Compatibilidad" />
 */
@Component({
  selector: 'pm-compatibility-ring',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="inline-flex flex-col items-center gap-1" [style.width.px]="size" [style.height.px]="size">
    <div class="relative" [style.width.px]="size" [style.height.px]="size">
      <svg [attr.width]="size" [attr.height]="size" [attr.viewBox]="'0 0 ' + size + ' ' + size" class="block">
        <circle class="text-gray-200 dark:text-gray-700" [attr.stroke-width]="stroke" stroke="currentColor" fill="transparent" [attr.r]="radius" [attr.cx]="center" [attr.cy]="center" />
        <circle class="text-brand-500 transition-[stroke-dashoffset] duration-700 ease-out" [attr.stroke-width]="stroke" stroke-linecap="round" stroke="currentColor" fill="transparent" [attr.r]="radius" [attr.cx]="center" [attr.cy]="center" [attr.stroke-dasharray]="circumference" [attr.stroke-dashoffset]="dashOffset" />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center text-[11px] font-medium select-none">
        <span class="text-xs font-semibold text-gray-800 dark:text-white/90">{{ value }}%</span>
        <span class="text-[9px] tracking-wide uppercase text-gray-500 dark:text-gray-400" *ngIf="label">{{ label }}</span>
      </div>
    </div>
  </div>
  `,
  styles: [``]
})
export class CompatibilityRingComponent {
  @Input() value = 0; // 0-100
  @Input() size = 72;
  @Input() stroke = 6;
  @Input() label?: string;

  get center() { return this.size / 2; }
  get radius() { return (this.size - this.stroke) / 2; }
  get circumference() { return 2 * Math.PI * this.radius; }
  get dashOffset() { return this.circumference - (this.value / 100) * this.circumference; }
}
