import { Component, input, } from '@angular/core';

@Component({
  selector: 'app-step',
  imports: [],
  templateUrl: './step.component.html',
})
export class StepComponent {
  public stepNumber = input.required();
  public title = input.required();
  public description = input.required();
}
