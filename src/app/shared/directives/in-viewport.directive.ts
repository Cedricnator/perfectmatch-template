import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInViewport]',
  standalone: true
})
export class InViewportDirective implements OnInit {
  /**
   * Accepts one or multiple utility classes separated by spaces.
   * When the attribute is present without value (e.g. appInViewport) Angular sets an empty string.
   * We fallback to the default class in that scenario to avoid DOMTokenList errors.
   */
  @Input('appInViewport') set animationClass(value: string | undefined | null) {
    const v = (value ?? '').trim();
    this._animationClasses = v ? v.split(/\s+/) : ['animate-fade-up'];
  }

  private _animationClasses: string[] = ['animate-fade-up'];

  constructor(private el: ElementRef<HTMLElement>) {}

  public ngOnInit() {
    const native = this.el.nativeElement;
    const apply = () => {
      for (const cls of this._animationClasses) {
        if (cls) {
          try { 
            native.classList.add(cls); 
          } catch { 
            /* ignore invalid token */ 
          }
        }
      }
    };

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            apply();
            obs.unobserve(native);
          }
        }
      }, { threshold: 0.15 });
      obs.observe(native);
    } else {
      apply(); // Fallback: immediate reveal
    }
  }
}
