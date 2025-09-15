import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-matches',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-title-sm font-semibold text-gray-800 dark:text-white/90">Sugerencias de Match</h1>
      <button class="px-4 py-2 text-sm rounded-lg bg-brand-500 text-white hover:bg-brand-600">Actualizar</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
      <div class="p-4 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900" *ngFor="let i of [1,2,3,4,5,6]">
        <div class="flex items-center gap-3">
          <div class="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-800"></div>
          <div>
            <p class="font-medium text-gray-800 dark:text-white/90">Usuario {{i}}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Compatibilidad estimada: 82%</p>
          </div>
        </div>
        <div class="mt-4 flex items-center gap-2">
          <button class="px-3 py-2 text-sm rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-white/5 dark:text-white/90">Ver</button>
          <button class="px-3 py-2 text-sm rounded-lg bg-brand-500 text-white hover:bg-brand-600">Enviar solicitud</button>
        </div>
      </div>
    </div>
  </div>
  `
})
export default class MatchesComponent {}
