import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compatibility-ring',
  standalone: true,
  templateUrl: './compatibility-ring.component.html',
})
export class CompatibilityRingComponent {
  @Input() percent = 0; // 0..100
  @Input() size = 42;
  get radius() { return (this.size / 2) - 6; }
  get circumference() { return 2 * Math.PI * this.radius; }
  get dashOffset() { return this.circumference - (this.percent / 100) * this.circumference; }
}
