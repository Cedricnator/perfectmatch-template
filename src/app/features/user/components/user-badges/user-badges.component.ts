import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from '../../services/user-state.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-badges',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="flex flex-wrap gap-2">
    <span *ngFor="let b of badges$ | async" class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      <span [innerHTML]="b.icon" class="size-3.5"></span>
      {{ b.label }}
    </span>
  </div>
  `
})
export class UserBadgesComponent {
  private readonly state = inject(UserStateService);
  readonly badges$ = this.state.verificationStatus$.pipe(map(v => {
    const list: {label:string; icon:string}[] = [];
    if (v === 'approved') list.push({label:'Verificado', icon:`<svg viewBox='0 0 24 24' fill='none'><path d='m4 13 4 4 12-12' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>`});
    list.push({label:'Miembro Free', icon:`<svg viewBox='0 0 24 24' fill='none'><path d='M12 3 4 8v8l8 5 8-5V8Z' stroke='currentColor' stroke-width='2' stroke-linejoin='round'/></svg>`});
    return list;
  }));
}
