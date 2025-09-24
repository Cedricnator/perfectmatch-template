import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step { key: string; label: string; }

@Component({
  selector: 'app-onboarding-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onboarding-progress.component.html',
})
export class OnboardingProgressComponent {
  @Input() currentIndex = 0; // number of current step
  @Input() innerPercent = 40; // percent inside current step
  steps: Step[] = [
    { key: 'register', label: 'Registro básico' },
    { key: 'quiz', label: 'Cuestionario de personalidad' },
    { key: 'verify', label: 'Verificación visual' },
    { key: 'first-msg', label: 'Primer intercambio guiado' },
  ];
}
