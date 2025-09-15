import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [CommonModule],
  template: `<h3 class="text-gray-800 dark:text-white/90 font-semibold"> <ng-content></ng-content> </h3>`
})
export class CardTitleComponent {}
