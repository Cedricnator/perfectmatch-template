import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsor-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsor-banner.component.html',
})
export class SponsorBannerComponent { 
  @Input() hidden = false; 
}
