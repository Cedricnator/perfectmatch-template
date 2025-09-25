import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserStateService } from "../../services/user-state.service";
import { Observable } from "rxjs";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";

@Component({
  selector: "app-intention-selector",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./intention-selector.component.html",
})
export class IntentionSelectorComponent {
  private readonly state = inject(UserStateService);
  public options = ["Relación seria", "Conocer gente", "Amistad", "Explorar"];
  public intention$!: Observable<string | null>;

  constructor() {
    this.intention$ = this.state.intention$;
  }

  select(opt: string) {
    this.state.setIntention(opt);
  }
}
