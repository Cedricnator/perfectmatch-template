import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from '../shared/components/header/app-header.component';
import { AppSidebarComponent } from '../shared/components/app-sidebar/app-sidebar.component';
import { BackdropComponent } from '../shared/components/backdrop/backdrop.component';
import { SidebarService } from '../shared/services/sidebar.service';
import { userNavItems, userOtherItems } from './user-navbar-items';

@Component({
  selector: 'app-user-root',
  standalone: true,
  imports: [CommonModule, RouterModule, AppHeaderComponent, AppSidebarComponent, BackdropComponent],
  template: `
  <div class="min-h-screen xl:flex">
    <div>
      <app-sidebar></app-sidebar>
      <app-backdrop></app-backdrop>
    </div>
    <div class="flex-1 transition-all duration-300 ease-in-out xl:ml-[290px]">
      <app-header />
      <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
        <router-outlet />
      </div>
    </div>
  </div>
  `
})
export default class UserComponent {
  private readonly sidebarService = inject(SidebarService);

  constructor() {
    this.sidebarService.setMenuItems(userNavItems);
    this.sidebarService.setOtherMenuItems(userOtherItems);
  }
}
