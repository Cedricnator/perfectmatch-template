import { Component, OnInit } from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'app-step-list',
  imports: [StepComponent],
  templateUrl: './step-list.component.html',
})
export class StepListComponent {
  steps = [
    {
      step: 'Paso 1',
      title: 'Registro',
      description: 'Crea tu cuenta y configura datos básicos de perfil.'
    },
    {
      step: 'Paso 2',
      title: 'Explora',
      description: 'Navega por los perfiles y encuentra personas que te interesen.'
    },
    {
      step: 'Paso 3',
      title: 'Conecta',
      description: 'Envía mensajes y comienza a interactuar con tus coincidencias.'
    },
    {
      step: 'Paso 4',
      title: 'Conexión segura',
      description: 'Verificación visual y chat progresivo para confianza mutua..'
    }
  ]
}
