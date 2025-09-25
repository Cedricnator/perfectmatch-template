import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../../shared/components/ui/button/button.component';

interface AlgoToggle { key:string; label:string; description:string; active:boolean; weight?:number; }

@Component({
  selector: 'pm-matching-settings-panel',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './matching-settings-panel.component.html',
})
export class MatchingSettingsPanelComponent {
  @Input() 
  public algos: AlgoToggle[] = [
    { key:'answers', label:'Coincidencia de respuestas', description:'Cruce directo de respuestas cerradas.', active:true, weight:30 },
    { key:'weighted', label:'Afinidad ponderada', description:'Factores con peso dinámico adaptativo.', active:true, weight:25 },
    { key:'interests', label:'Intereses comunes', description:'Overlap de categorías declaradas.', active:true, weight:15 },
    { key:'geo', label:'Proximidad geográfica', description:'Radio flexible según preferencias.', active:true, weight:15 },
    { key:'predictive', label:'Modelos predictivos', description:'Inferencias de compatibilidad extendida.', active:true, weight:15 }
  ];
}
