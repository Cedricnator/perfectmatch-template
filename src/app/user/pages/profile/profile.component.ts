import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="space-y-6">
    <h1 class="text-title-sm font-semibold text-gray-800 dark:text-white/90">Mi Perfil</h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 lg:col-span-2">
        <h2 class="font-medium text-gray-800 dark:text-white/90">Preferencias</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">Placeholder de formulario (edad preferida, ubicación, intereses).</p>
      </div>
      <div class="p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
        <h2 class="font-medium text-gray-800 dark:text-white/90">Progreso de cuestionario</h2>
        <div class="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
          <div class="h-2 rounded-full bg-brand-500" style="width: 60%"></div>
        </div>
        <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">60% completado</p>
      </div>
    </div>
  </div>
  `
})
export default class UserProfileComponent {}
