import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-user-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
  <nav class="fixed z-40 bottom-0 left-0 right-0 xl:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur border-t border-gray-200 dark:border-gray-800">
    <ul class="flex items-stretch justify-around">
      <li *ngFor="let item of items">
        <a [routerLink]="item.path" routerLinkActive="text-brand-500" class="flex flex-col items-center gap-1 px-4 py-2 text-[11px] font-medium text-gray-500 dark:text-gray-400">
          <span [innerHTML]="item.icon" class="size-5"></span>
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
  `
})
export class MobileUserNavComponent {
  items = [
    { path:'/user', label:'Inicio', icon:`<svg width='20' height='20' viewBox='0 0 24 24' fill='none'><path d='M12 5 5 11v8h5v-5h4v5h5v-8z' stroke='currentColor' stroke-width='2' stroke-linejoin='round'/></svg>`},
    { path:'/user/matches', label:'Matches', icon:`<svg width='20' height='20' viewBox='0 0 24 24' fill='none'><path d='M12 21s-6-4.35-9-9.19C-1 6.96 1.5 3 5.4 3c2.04 0 3.57 1.02 4.6 2.09C11.03 4.02 12.56 3 14.6 3 18.5 3 21 6.96 21 11.81 18 16.65 12 21 12 21Z' stroke='currentColor' stroke-width='1.7' stroke-linejoin='round'/></svg>`},
    { path:'/user/messages', label:'Mensajes', icon:`<svg width='20' height='20' viewBox='0 0 24 24' fill='none'><path d='M4 6h16v9H7.17L4 18.17V6Z' stroke='currentColor' stroke-width='2' stroke-linejoin='round'/></svg>`},
    { path:'/user/profile', label:'Perfil', icon:`<svg width='20' height='20' viewBox='0 0 24 24' fill='none'><path d='M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6.25 18c0-1.52 2.62-2.75 5.75-2.75s5.75 1.23 5.75 2.75v.5a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75v-.5Z' stroke='currentColor' stroke-width='1.8' stroke-linejoin='round'/></svg>`},
  ];
}
