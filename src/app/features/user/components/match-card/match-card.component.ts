import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CompatibilityRingComponent } from "../compatibility-ring/compatibility-ring.component";
import { ButtonComponent } from "../../../../shared/components/ui/button/button.component";

@Component({
  selector: "app-match-card",
  standalone: true,
  imports: [CommonModule, CompatibilityRingComponent, ButtonComponent],
  templateUrl: "./match-card.component.html",
})
export class MatchCardComponent {
  @Input() name = "Usuario";
  @Input() age?: number;
  @Input() location?: string;
  @Input() image?: string;
  @Input() bio?: string;
  @Input() compatibility = 0;
  @Input() premium = false;
}
