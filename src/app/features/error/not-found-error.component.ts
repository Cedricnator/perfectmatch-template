import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GridShapeComponent } from '../../shared/components/common/grid-shape/grid-shape.component';

@Component({
  selector: 'app-not-found',
  imports: [
    GridShapeComponent,
    RouterLink,
  ],
  templateUrl: './not-found-error.component.html',
  styles: ``
})
export default class NotFoundErrorComponent {

  currentYear: number = new Date().getFullYear();
}
