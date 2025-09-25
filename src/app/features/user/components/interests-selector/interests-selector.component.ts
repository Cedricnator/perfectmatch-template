import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserStateService } from "../../services/user-state.service";
import { Observable } from "rxjs";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";

@Component({
  selector: "app-interests-selector",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./interests-selector.component.html",
})
export class InterestsSelectorComponent {
  @Input() 
  interests: string[] = [
    "Viajes",
    "Música",
    "Cine",
    "Gastronomía",
    "Lectura",
    "Senderismo",
    "Tecnología",
    "Fotografía",
  ];

  selected$!: Observable<string[]>;

  constructor(private state: UserStateService) {
    this.selected$ = this.state.interests$;
  }

  toggle(i: string) {
    this.state.toggleInterest(i);
  }
}
