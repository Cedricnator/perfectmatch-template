import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatchMiniCardComponent } from '../../../../shared/components/cards/match-mini-card/match-mini-card.component';
import { VerifiedBadgeComponent } from '../../../../shared/components/ui/verified-badge/verified-badge.component';

@Component({
  selector: 'app-user-matches',
  standalone: true,
  imports: [CommonModule, MatchMiniCardComponent, VerifiedBadgeComponent],
  template: `
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-title-sm font-semibold text-gray-800 dark:text-white/90">Sugerencias de Match</h1>
      <button class="px-4 py-2 text-sm rounded-lg bg-brand-500 text-white hover:bg-brand-600">Actualizar</button>
    </div>
    <div class="flex items-center gap-3 flex-wrap text-[11px]">
      <button class="px-3 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10">Recientes</button>
      <button class="px-3 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10">Alta compatibilidad</button>
      <button class="px-3 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10">Nuevos</button>
      <button class="px-3 h-8 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10">Verificados</button>
      <button class="px-3 h-8 rounded-full bg-brand-500 text-white hover:bg-brand-600">Filtrar +</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
      <pm-match-mini-card *ngFor="let m of demo" [name]="m.name" [age]="m.age" [location]="m.location" [compatibility]="m.c" [premium]="m.premium" [badge]="m.badge" [bio]="m.bio"></pm-match-mini-card>
    </div>

    <div class="border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 text-center text-xs text-gray-500 dark:text-gray-400">
      <p>Placeholder: paginación / infinite scroll / filtros avanzados (sólo estilo). Añade lógica real más adelante.</p>
      <div class="mt-3 inline-flex items-center gap-2"><pm-verified-badge variant="visual"></pm-verified-badge><pm-verified-badge variant="id"></pm-verified-badge><pm-verified-badge variant="pro"></pm-verified-badge></div>
    </div>
  </div>
  `
})
export default class MatchesComponent {
  demo = [
    { name:'Andrea', age:29, location:'Madrid', c:92, premium:true, badge:'Nuevo', bio:'Trekking + brunch + jazz en vinilo.' },
    { name:'Luis', age:31, location:'Valencia', c:88, premium:false, badge:'Visual', bio:'Trail running, cine independiente y cocina.' },
    { name:'María', age:28, location:'Sevilla', c:86, premium:false, bio:'Experimentando recetas y podcasts ciencia.' },
    { name:'Paola', age:30, location:'Bilbao', c:83, premium:true, badge:'Plus', bio:'Arte contemporáneo y cafés locales.' },
    { name:'Jorge', age:33, location:'Granada', c:80, premium:false, bio:'Escalada, documentales y cocina italiana.' },
    { name:'Elena', age:27, location:'Madrid', c:78, premium:false, bio:'Fotografía analógica y literatura.' },
  ];
}
