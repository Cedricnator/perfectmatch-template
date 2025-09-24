import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="px-6 md:px-10 py-10 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-500">
      PerfectMatch © {{ currentYear }} ·.
    </footer>
  `,
})
export class FooterComponent  {
  public readonly currentYear = new Date().getFullYear();
}
