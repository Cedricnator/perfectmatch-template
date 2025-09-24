import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pm-social-auth-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="grid gap-3">
    <button (click)="provider.emit('google')" class="h-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5">
      <span class="text-[18px]">🟢</span> Continuar con Google
    </button>
    <button (click)="provider.emit('meta')" class="h-11 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5">
      <span class="text-[18px]">📘</span> Continuar con Meta
    </button>
  <button (click)="provider.emit('email')" class="h-11 rounded-xl bg-brand-500 text-white font-medium text-sm hover:bg-brand-600">Usar correo</button>
  </div>
  `
})
export class SocialAuthButtonsComponent { @Output() provider = new EventEmitter<string>(); }
