import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compatibility-ring',
  standalone: true,
  template: `
  <div class="relative inline-flex items-center justify-center" [style.width.px]="size" [style.height.px]="size">
    <svg [attr.width]="size" [attr.height]="size" [attr.viewBox]="'0 0 '+size+' '+size" class="rotate-[-90deg]">
      <circle
        [attr.cx]="size/2" [attr.cy]="size/2" [attr.r]="radius" stroke-width="4"
        class="stroke-gray-200 dark:stroke-gray-700 fill-none" />
      <circle
        [attr.cx]="size/2" [attr.cy]="size/2" [attr.r]="radius" stroke-width="4" fill="none"
        [attr.stroke-dasharray]="circumference" [attr.stroke-dashoffset]="dashOffset"
        class="transition-all duration-500 ease-out stroke-brand-500" stroke-linecap="round" />
    </svg>
    <span class="absolute text-[10px] font-medium text-gray-600 dark:text-gray-400">{{ percent }}%</span>
  </div>
  `
})
export class CompatibilityRingComponent {
  @Input() percent = 0; // 0..100
  @Input() size = 42;
  get radius() { return (this.size / 2) - 6; }
  get circumference() { return 2 * Math.PI * this.radius; }
  get dashOffset() { return this.circumference - (this.percent / 100) * this.circumference; }
}
