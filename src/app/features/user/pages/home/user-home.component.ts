import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OnboardingProgressComponent } from "../../components/onboarding-progress/onboarding-progress.component";
import { MatchCardComponent } from "../../components/match-card/match-card.component";
import { MembershipPlansComponent } from "../../components/membership-plans/membership-plans.component";
import { SponsorBannerComponent } from "../../components/sponsor-banner/sponsor-banner.component";
import { ChatPreviewListComponent } from "../../components/chat-preview-list/chat-preview-list.component";
import { VisualVerificationComponent } from "../../components/visual-verification/visual-verification.component";
import { DailyQuestionComponent } from "../../components/daily-question/daily-question.component";
import { ProfileCompletionComponent } from "../../components/profile-completion/profile-completion.component";
import { UserBadgesComponent } from "../../components/user-badges/user-badges.component";
import { InViewportDirective } from "../../../../shared/directives/in-viewport.directive";
import { CompatibilityRingComponent } from "../../../../shared/components/ui/compatibility-ring/compatibility-ring.component";
import { ProfileAvatarComponent } from "../../../../shared/components/ui/profile-avatar/profile-avatar.component";
import { InterestChipComponent } from "../../../../shared/components/ui/interest-chip/interest-chip.component";
import { SkeletonComponent } from "../../../../shared/components/ui/skeleton/skeleton.component";

@Component({
  selector: "app-user-home",
  standalone: true,
  imports: [
    CommonModule,
    OnboardingProgressComponent,
    MatchCardComponent,
    MembershipPlansComponent,
    SponsorBannerComponent,
    ChatPreviewListComponent,
    VisualVerificationComponent,
    DailyQuestionComponent,
    ProfileCompletionComponent,
    UserBadgesComponent,
    InViewportDirective,
    CompatibilityRingComponent,
    ProfileAvatarComponent,
    InterestChipComponent,
    SkeletonComponent,
  ],
  templateUrl: `./user-home.component.html`,
})
export default class UserHomeComponent {
  public sample = [
    {
      name: "Andrea",
      age: 29,
      location: "CDMX",
      c: 92,
      premium: true,
      bio: "Amante del trekking, jazz y brunch dominical.",
    },
    {
      name: "Luis",
      age: 31,
      location: "Guadalajara",
      c: 87,
      premium: false,
      bio: "Cine independiente + trail running. Buscando algo serio.",
    },
    {
      name: "María",
      age: 28,
      location: "Monterrey",
      c: 81,
      premium: false,
      bio: "Cocinar fusión, podcasts de ciencia y viajes.",
    },
    {
      name: "Paola",
      age: 30,
      location: "CDMX",
      c: 78,
      premium: true,
      bio: "Arte contemporáneo y cafés locales.",
    },
    {
      name: "Jorge",
      age: 33,
      location: "Puebla",
      c: 75,
      premium: false,
      bio: "Escalada, documentales y cocina italiana.",
    },
    {
      name: "Elena",
      age: 27,
      location: "CDMX",
      c: 73,
      premium: false,
      bio: "Fotografía analógica y literatura.",
    },
  ];
}
