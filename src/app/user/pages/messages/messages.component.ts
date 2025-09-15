import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-messages',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="space-y-6">
    <h1 class="text-title-sm font-semibold text-gray-800 dark:text-white/90">Mensajes</h1>
    <div class="p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
      <p class="text-sm text-gray-600 dark:text-gray-400">Placeholder de chat. Sigue el flujo: verificación visual → pregunta/respuesta única → chat libre cuando ambos aprueben.</p>
    </div>
  </div>
  `
})
export default class MessagesComponent {}
