import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [
    RouterLink,
  ],
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
