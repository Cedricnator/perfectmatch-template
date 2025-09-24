import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardTitleComponent } from '../../card/card-title.component';
import { CardDescriptionComponent } from '../../card/card-description.component';


@Component({
  selector: 'app-card-link-two',
  imports: [
    RouterModule,
    CardTitleComponent,
    CardDescriptionComponent,
],
  templateUrl: './card-link-two.component.html',
  styles: ``
})
export class CardLinkTwoComponent {

}
