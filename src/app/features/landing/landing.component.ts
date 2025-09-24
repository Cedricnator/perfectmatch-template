import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900">
    <!-- Glass Header -->
    <div class="fixed inset-x-0 top-0 z-50 group/header" [class.pt-safe]="true">
      <div class="mx-auto max-w-7xl px-5 md:px-10">
        <div class="relative h-16 flex items-center justify-between gap-6 rounded-b-2xl border border-transparent border-b-gray-200/70 dark:border-b-white/5 bg-white/60 dark:bg-gray-900/55 backdrop-blur-md supports-[backdrop-filter]:bg-white/45 dark:supports-[backdrop-filter]:bg-gray-900/40 shadow-[0_2px_6px_-2px_rgba(16,24,40,0.08)] transition-all duration-300" [class.shadow-lg]="scrolled" [class.h-14]="scrolled">
          <!-- Scroll progress bar -->
          <span class="pointer-events-none absolute left-0 top-0 h-0.5 bg-gradient-to-r from-brand-500 via-brand-400 to-brand-300 rounded-tr-full rounded-br-full transition-[width] duration-200" [style.width.%]="scrollProgress"></span>
          <!-- Brand -->
          <a routerLink="/" class="flex items-center gap-2 font-semibold text-gray-800 dark:text-white/90 tracking-tight text-sm md:text-base">
            <img src="/images/logo/logo.svg" class="h-6 w-auto dark:hidden" alt="PerfectMatch logo" loading="lazy"/>
            <img src="/images/logo/logo-dark.svg" class="h-6 w-auto hidden dark:block" alt="PerfectMatch logo" loading="lazy"/>
            <span class="relative">
              Perfect<span class="text-brand-600 dark:text-brand-400">Match</span>
              <span class="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-brand-500/80 via-brand-400/60 to-transparent"></span>
            </span>
          </a>
          <!-- Nav (desktop) -->
          <nav class="hidden md:flex items-center gap-1 text-xs font-medium" aria-label="Primaria">
            <a (click)="scrollTo('como-funciona',$event)" [class.nav-active]="activeSection==='como-funciona'" class="px-3 h-9 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">Cómo funciona</a>
            <a (click)="scrollTo('planes',$event)" [class.nav-active]="activeSection==='planes'" class="px-3 h-9 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">Planes</a>
            <a (click)="scrollTo('anuncios',$event)" [class.nav-active]="activeSection==='anuncios'" class="px-3 h-9 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">Sponsors</a>
          </nav>
          <!-- Right actions -->
          <div class="flex items-center gap-1 md:gap-3">
            <button type="button" (click)="toggleTheme()" class="h-9 w-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/5" aria-label="Cambiar tema">
              <span *ngIf="theme==='light'" class="text-[15px]">🌙</span>
              <span *ngIf="theme==='dark'" class="text-[15px]">☀️</span>
            </button>
            <a routerLink="/auth/login" class="hidden sm:inline-flex h-9 px-4 rounded-lg text-xs font-medium border border-gray-300 bg-white/70 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-300 dark:hover:bg-white/5">Iniciar sesión</a>
            <a routerLink="/auth/register" class="hidden sm:inline-flex h-9 px-4 rounded-lg text-xs font-medium bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600">Crear cuenta</a>
            <!-- Mobile menu toggle -->
            <button type="button" (click)="mobileOpen=!mobileOpen" class="md:hidden h-9 w-9 rounded-lg border border-gray-300 bg-white/70 flex items-center justify-center text-gray-600 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-300 dark:hover:bg-white/5" [attr.aria-expanded]="mobileOpen" aria-controls="mobileNav" aria-label="Menú">
              <span *ngIf="!mobileOpen">☰</span>
              <span *ngIf="mobileOpen">×</span>
            </button>
          </div>
          <!-- Mobile menu panel -->
          <div *ngIf="mobileOpen" id="mobileNav" class="absolute top-full left-0 right-0 mt-1 origin-top rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-4 flex flex-col gap-2 md:hidden shadow-theme-lg animate-fade-up">
            <a (click)="scrollTo('como-funciona',$event,true)" class="px-3 h-10 flex items-center rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5" [class.nav-active]="activeSection==='como-funciona'">Cómo funciona</a>
            <a (click)="scrollTo('planes',$event,true)" class="px-3 h-10 flex items-center rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5" [class.nav-active]="activeSection==='planes'">Planes</a>
            <a (click)="scrollTo('anuncios',$event,true)" class="px-3 h-10 flex items-center rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5" [class.nav-active]="activeSection==='anuncios'">Sponsors</a>
            <div class="mt-2 pt-2 border-t border-gray-200 dark:border-gray-800 flex gap-2">
              <a routerLink="/auth/login" class="flex-1 h-10 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white/70 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-300 dark:hover:bg-white/5">Iniciar sesión</a>
              <a routerLink="/auth/register" class="flex-1 h-10 inline-flex items-center justify-center rounded-lg bg-brand-500 text-xs font-medium text-white hover:bg-brand-600">Crear cuenta</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero (offset by fixed header) -->
    <header class="px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-white to-brand-50 dark:from-gray-900 dark:to-gray-900/40">
      <div class="max-w-5xl mx-auto text-center">
        <h1 class="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white/90">
          Conexiones reales con personas compatibles
        </h1>
        <p class="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          PerfectMatch te guía con cuestionarios de personalidad, coincidencias inteligentes y comunicación progresiva para construir relaciones auténticas y seguras.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/auth/register" class="inline-flex justify-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600">
            Comenzar gratis
          </a>
          <a routerLink="/auth/login" class="inline-flex justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">
            Ya tengo cuenta
          </a>
        </div>
        <p class="mt-3 text-xs text-gray-500 dark:text-gray-500">Prueba inicial sin tarjeta • Cancelas cuando quieras</p>
      </div>
    </header>

    <!-- Steps -->
  <section id="como-funciona" class="px-6 md:px-10 py-14 md:py-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white/90 text-center">Cómo funciona</h2>
        <div class="mt-10 grid gap-6 md:grid-cols-4">
          <div class="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div class="text-sm font-medium text-brand-600 mb-1">Paso 1</div>
            <h3 class="font-semibold text-gray-800 dark:text-white/90">Registro</h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Crea tu cuenta y configura datos básicos de perfil.</p>
          </div>
          <div class="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div class="text-sm font-medium text-brand-600 mb-1">Paso 2</div>
            <h3 class="font-semibold text-gray-800 dark:text-white/90">Cuestionarios</h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Responde instrumentos de personalidad y preferencias.</p>
          </div>
            <div class="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div class="text-sm font-medium text-brand-600 mb-1">Paso 3</div>
            <h3 class="font-semibold text-gray-800 dark:text-white/90">Matches sugeridos</h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Explora coincidencias priorizadas por compatibilidad.</p>
          </div>
          <div class="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div class="text-sm font-medium text-brand-600 mb-1">Paso 4</div>
            <h3 class="font-semibold text-gray-800 dark:text-white/90">Conexión segura</h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Verificación visual y chat progresivo para confianza mutua.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Membership Upsell -->
  <section id="planes" class="px-6 md:px-10 py-14 md:py-20 bg-gray-50 dark:bg-gray-900/40 border-y border-gray-200 dark:border-gray-800">
      <div class="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 class="text-2xl font-semibold text-gray-800 dark:text-white/90">Planes de membresía flexibles</h2>
          <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">Desbloquea filtros avanzados, ver quién te vio, reintentos en pruebas de compatibilidad y control de privacidad mejorado.</p>
          <ul class="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-0.5">✓</span> Filtros por estilo de vida e intención</li>
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-0.5">✓</span> Recomendaciones priorizadas</li>
            <li class="flex items-start gap-2"><span class="text-brand-500 mt-0.5">✓</span> Modo incógnito y control de visibilidad</li>
          </ul>
          <div class="mt-6 flex gap-3">
            <a routerLink="/auth/register" class="inline-flex justify-center rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white shadow-theme-xs hover:bg-brand-600">Comenzar prueba</a>
            <a routerLink="/user" class="inline-flex justify-center rounded-lg border border-gray-300 dark:border-gray-700 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">Ver matches demo</a>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <p class="text-3xl font-semibold text-gray-800 dark:text-white/90">7d</p>
            <p class="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-500">Prueba gratis</p>
          </div>
          <div class="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <p class="text-3xl font-semibold text-gray-800 dark:text-white/90">+32%</p>
            <p class="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-500">Éxito en coincidencias</p>
          </div>
          <div class="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <p class="text-3xl font-semibold text-gray-800 dark:text-white/90">Seguridad</p>
            <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Moderación activa</p>
          </div>
          <div class="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <p class="text-3xl font-semibold text-gray-800 dark:text-white/90">IA</p>
            <p class="mt-1 text-xs text-gray-600 dark:text-gray-400">Algoritmos extensibles</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ads placeholder (solo para no suscritos) -->
  <section id="anuncios" class="px-6 md:px-10 py-14 md:py-20">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white/90">Espacio para anuncios dirigidos</h2>
        <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">Aquí los estudiantes podrán integrar un módulo de sponsors con segmentación básica (estado civil, intención, región). Oculto para miembros premium.</p>
        <div class="mt-6 h-32 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-500">Placeholder creativo 728x250</div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-6 md:px-10 py-10 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-500">
      PerfectMatch © {{ currentYear }} · Plataforma educativa de ejemplo.
    </footer>
  </div>
  `,
})
export default class LandingComponent { 
  readonly currentYear = new Date().getFullYear();
  scrolled = false;
  mobileOpen = false;
  scrollProgress = 0;
  activeSection: 'como-funciona' | 'planes' | 'anuncios' | null = null;
  theme: 'light' | 'dark' = 'light';
  private sectionIds = ['como-funciona','planes','anuncios'];
  constructor(private themeService: ThemeService){
    this.themeService.theme$.subscribe(t => this.theme = t);
  }
  @HostListener('window:scroll') onScroll(){
    this.scrolled = window.scrollY > 8;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    this.scrollProgress = scrollHeight > 0 ? +( (scrollTop / scrollHeight) * 100 ).toFixed(2) : 0;
    this.detectActiveSection();
  }
  @HostListener('window:resize') onResize(){ this.detectActiveSection(); }
  scrollTo(id:string, ev:Event, closeMobile=false){
    ev.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 82; // offset header
      window.scrollTo({ top: y, behavior:'smooth' });
      if (closeMobile) this.mobileOpen = false;
    }
  }
  private detectActiveSection(){
    const midpoint = window.scrollY + window.innerHeight * 0.25;
    let current: typeof this.activeSection = null;
    for (const id of this.sectionIds){
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.offsetTop - 120; // header offset
      const bottom = top + el.offsetHeight;
      if (midpoint >= top && midpoint < bottom){ current = id as any; break; }
    }
    this.activeSection = current;
  }
  toggleTheme(){ this.themeService.toggleTheme(); }
}
