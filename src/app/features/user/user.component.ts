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
  indicatorTransform = 'translateX(0px)';
  indicatorWidth = 0;

  constructor(){
    this.sidebarService.setMenuItems(userNavItems);
    this.sidebarService.setOtherMenuItems(userOtherItems);
    queueMicrotask(() => this.computeIndicator());
    window.addEventListener('resize', () => this.computeIndicator(), { passive: true });
  }

  private computeIndicator(){
    const active = document.querySelector('.nav-active.nav-link') as HTMLElement | null;
    const list = active?.closest('ul');
    if (!active || !list) return;
    const listRect = list.getBoundingClientRect();
    const rect = active.getBoundingClientRect();
    this.indicatorWidth = rect.width;
    this.indicatorTransform = `translateX(${rect.left - listRect.left}px)`;
  }
}
