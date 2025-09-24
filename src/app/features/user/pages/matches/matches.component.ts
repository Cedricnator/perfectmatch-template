import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatchMiniCardComponent } from '../../../../shared/components/ui/match-mini-card/match-mini-card.component';
import { VerifiedBadgeComponent } from '../../../../shared/components/ui/verified-badge/verified-badge.component';

@Component({
  selector: 'app-user-matches',
  standalone: true,
  imports: [CommonModule, MatchMiniCardComponent, VerifiedBadgeComponent],
  templateUrl: './matches.component.html', 
})
export default class MatchesComponent {
  public demo = [
    { name:'Andrea', age:29, location:'Madrid', c:92, premium:true, badge:'Nuevo', bio:'Trekking + brunch + jazz en vinilo.' },
    { name:'Luis', age:31, location:'Valencia', c:88, premium:false, badge:'Visual', bio:'Trail running, cine independiente y cocina.' },
    { name:'María', age:28, location:'Sevilla', c:86, premium:false, bio:'Experimentando recetas y podcasts ciencia.' },
    { name:'Paola', age:30, location:'Bilbao', c:83, premium:true, badge:'Plus', bio:'Arte contemporáneo y cafés locales.' },
    { name:'Jorge', age:33, location:'Granada', c:80, premium:false, bio:'Escalada, documentales y cocina italiana.' },
    { name:'Elena', age:27, location:'Madrid', c:78, premium:false, bio:'Fotografía analógica y literatura.' },
  ];
}
