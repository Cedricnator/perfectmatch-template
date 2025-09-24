import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from '../../shared/components/header/app-header.component';
import { SidebarService } from '../../shared/services/sidebar.service';
import { userNavItems, userOtherItems } from './user-navbar-items';
import { MobileUserNavComponent } from './components/mobile-user-nav/mobile-user-nav.component';

@Component({
  selector: 'app-user-root',
  standalone: true,
  imports: [CommonModule, RouterModule, AppHeaderComponent, MobileUserNavComponent],
  templateUrl: './user.component.html', 
})
export default class UserComponent {
  private readonly sidebarService = inject(SidebarService);
  userHeaderLinks = [
    { label: 'Inicio', path: '/user' },
    { label: 'Matches', path: '/user/matches' },
    { label: 'Mensajes', path: '/user/messages' },
    { label: 'Perfil', path: '/user/profile' },
  ];

  constructor(){
    this.sidebarService.setMenuItems(userNavItems);
    this.sidebarService.setOtherMenuItems(userOtherItems);
    // Indicator logic removed; navigation consolidated in header.
  }
}
