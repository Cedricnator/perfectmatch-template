import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Generic skeleton block. Visual only.
 * Usage: <pm-skeleton width="100%" height="120" radius="16" />
 */
@Component({
  selector: 'pm-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pm-skeleton" [ngStyle]="style"></div>
  `,
  styles: [`
    .pm-skeleton { position:relative; overflow:hidden; background:linear-gradient(90deg,var(--sk-bg-start,#f1f5f4),var(--sk-bg-mid,#e3ebe8),var(--sk-bg-start,#f1f5f4)); background-size:200% 100%; animation: pmShine 1.3s linear infinite; }
    @media (prefers-color-scheme: dark) {
      .pm-skeleton { --sk-bg-start: #1f2a24; --sk-bg-mid:#29352f; }
    }
    @keyframes pmShine { 0% { background-position:0% 50%; } 100% { background-position: -200% 50%; } }
  `]
})
export class SkeletonComponent {
  @Input() width: string | number = '100%';
  @Input() height: string | number = 16;
  @Input() radius: string | number = 8;
  get style(){
    return {
      width: typeof this.width === 'number' ? this.width + 'px' : this.width,
      height: typeof this.height === 'number' ? this.height + 'px' : this.height,
      borderRadius: typeof this.radius === 'number' ? this.radius + 'px' : this.radius
    } as any;
  }
}
