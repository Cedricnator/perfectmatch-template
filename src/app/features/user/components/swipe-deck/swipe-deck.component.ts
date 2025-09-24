import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VerifiedBadgeComponent } from "../../../../shared/components/ui/verified-badge/verified-badge.component";

interface SwipeProfile {
  id: number;
  name: string;
  age: number;
  city: string;
  img: string;
  about: string;
}

@Component({
  selector: "app-swipe-deck",
  standalone: true,
  imports: [CommonModule, VerifiedBadgeComponent],
  styleUrl: "./swipe-deck.component.css",
  templateUrl: "./swipe-deck.component.html",
})
export class SwipeDeckComponent {
  public profiles: SwipeProfile[] = [
    {
      id: 1,
      name: "Lucía",
      age: 29,
      city: "Madrid",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&w=800&q=60",
      about:
        "Amante de los viajes lentos, el café de especialidad y las charlas eternas sobre cine.",
    },
    {
      id: 2,
      name: "María",
      age: 31,
      city: "Valencia",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&w=800&q=60",
      about:
        "Buscando una conexión auténtica. Me encanta cocinar fusión y practicar paddle surf.",
    },
    {
      id: 3,
      name: "Andrea",
      age: 27,
      city: "Sevilla",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&w=800&q=60",
      about: "Creativa, curiosa y fan de los atardeceres. Diseñadora UX.",
    },
    {
      id: 4,
      name: "Sofía",
      age: 30,
      city: "Barcelona",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&w=800&q=60",
      about: "Música en vinilo, museos pequeños y escapadas improvisadas.",
    },
  ];

  private profilesBackup() {
    return [
      {
        id: 1,
        name: "Lucía",
        age: 29,
        city: "Madrid",
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&w=800&q=60",
        about:
          "Amante de los viajes lentos, el café de especialidad y las charlas eternas sobre cine.",
      },
      {
        id: 2,
        name: "María",
        age: 31,
        city: "Valencia",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&w=800&q=60",
        about:
          "Buscando una conexión auténtica. Me encanta cocinar fusión y practicar paddle surf.",
      },
      {
        id: 3,
        name: "Andrea",
        age: 27,
        city: "Sevilla",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&w=800&q=60",
        about: "Creativa, curiosa y fan de los atardeceres. Diseñadora UX.",
      },
      {
        id: 4,
        name: "Sofía",
        age: 30,
        city: "Barcelona",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&w=800&q=60",
        about: "Música en vinilo, museos pequeños y escapadas improvisadas.",
      },
    ];
  }

  public swipe(kind: "like" | "nope" | "super") {
    this.profiles.shift();
  }
  
  public reset() {
    this.profiles = this.profilesBackup();
  }
}
