import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InterestsSelectorComponent } from "../../components/interests-selector/interests-selector.component";
import { IntentionSelectorComponent } from "../../components/intention-selector/intention-selector.component";
import { VisualVerificationComponent } from "../../components/visual-verification/visual-verification.component";

@Component({
  selector: "app-user-profile",
  standalone: true,
  imports: [
    CommonModule,
    InterestsSelectorComponent,
    IntentionSelectorComponent,
    VisualVerificationComponent,
  ],
  templateUrl: "./profile.component.html",
})
export default class UserProfileComponent {}
