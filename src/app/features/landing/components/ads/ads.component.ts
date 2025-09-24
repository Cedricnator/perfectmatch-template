import { Component } from '@angular/core';

@Component({
  selector: 'app-ads',
    standalone: true,
  template: `
    <section id="anuncios" class="px-6 md:px-10 py-14 md:py-20">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white/90">
          Espacio para anuncios dirigidos
        </h2>
        <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
          sponsors con segmentación básica (estado civil, intención, región). Oculto para miembros premium.
        </p>
        <div class="mt-6 h-32 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-500">
          Placeholder creativo 728x250
        </div>
      </div>
    </section>
  `,
})
export class AdsComponent  {}
