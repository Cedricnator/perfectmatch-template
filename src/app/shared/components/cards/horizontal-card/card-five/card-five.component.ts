import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardTitleComponent } from '../../card/card-title.component';
import { CardDescriptionComponent } from '../../card/card-description.component';

@Component({
  selector: 'app-card-five',
  imports: [
    RouterModule,
    CardTitleComponent,
    CardDescriptionComponent,
  ],
  templateUrl: './card-five.component.html',
  styles: ``
})
export class CardFiveComponent {

}
