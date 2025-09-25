import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileAvatarComponent } from "../../../../../shared/components/ui/profile-avatar/profile-avatar.component";
import { VerifiedBadgeComponent } from "../../../../../shared/components/ui/verified-badge/verified-badge.component";
import { CompatibilityRingComponent } from "../../../../../shared/components/ui/compatibility-ring/compatibility-ring.component";
import { ButtonComponent } from "../../../../../shared/components/ui/button/button.component";

@Component({
  selector: "pm-match-summary-panel",
  standalone: true,
  imports: [
    CommonModule,
    CompatibilityRingComponent,
    ProfileAvatarComponent,
    VerifiedBadgeComponent,
    ButtonComponent,
  ],
  templateUrl: "./match-summary-panel.component.html",
})
export class MatchSummaryPanelComponent {
  @Input() name = "";
  @Input() age = 0;
  @Input() location = "";
  @Input() premium = false;
  @Input() verified = false;
  @Input() compatibility = 0;
  @Input() interests: string[] = [];
  @Input() distanceKm?: number;
  @Input() affinity = 0;
  @Input() interestScore = 0;
  @Input() geoScore = 0;
}
