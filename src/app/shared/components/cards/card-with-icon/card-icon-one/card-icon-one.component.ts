import { Component } from '@angular/core';
import { CardDescriptionComponent } from '../../card/card-description.component';
import { CardTitleComponent } from '../../card/card-title.component';

@Component({
  selector: 'app-card-icon-one',
  imports: [
    CardTitleComponent,
    CardDescriptionComponent,
  ],
  templateUrl: './card-icon-one.component.html',
  styles: ``
})
export class CardIconOneComponent {

}
