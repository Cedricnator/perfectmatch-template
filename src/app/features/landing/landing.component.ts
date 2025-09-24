import { Component, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ThemeService } from "../../shared/services/theme.service";
import { HeroComponent } from "./components/hero/hero.component";
import { StepListComponent } from "./components/step-list/step-list.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AdsComponent } from "./components/ads/ads.component";
import { MembershipComponent } from "./components/membership/membership.component";
import { ButtonComponent } from "../../shared/components/ui/button/button.component";

@Component({
  selector: "app-landing",
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HeroComponent,
    StepListComponent,
    FooterComponent,
    AdsComponent,
    MembershipComponent,
    ButtonComponent,
  ],
  templateUrl: "./landing.component.html",
})
export default class LandingComponent {
  private sectionIds = ["como-funciona", "planes", "anuncios"];
  public readonly currentYear = new Date().getFullYear();
  public scrolled = false;
  public mobileOpen = false;
  public scrollProgress = 0;
  public activeSection: "como-funciona" | "planes" | "anuncios" | null = null;
  public theme: "light" | "dark" = "light";

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((t) => (this.theme = t));
  }

  private detectActiveSection() {
    const midpoint = window.scrollY + window.innerHeight * 0.25;
    let current: typeof this.activeSection = null;
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.offsetTop - 120; // header offset
      const bottom = top + el.offsetHeight;
      if (midpoint >= top && midpoint < bottom) {
        current = id as any;
        break;
      }
    }
    this.activeSection = current;
  }

  @HostListener("window:scroll")
  onScroll() {
    this.scrolled = window.scrollY > 8;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    this.scrollProgress =
      scrollHeight > 0 ? +((scrollTop / scrollHeight) * 100).toFixed(2) : 0;
    this.detectActiveSection();
  }

  @HostListener("window:resize")
  onResize() {
    this.detectActiveSection();
  }

  scrollTo(id: string, ev: Event, closeMobile = false) {
    ev.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 82; // offset header
      window.scrollTo({ top: y, behavior: "smooth" });
      if (closeMobile) this.mobileOpen = false;
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
