import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[appInViewport]',
  standalone: true
})
export class InViewportDirective implements OnInit {
  @Input('appInViewport') animationClass = 'animate-fade-up';

  constructor(private el: ElementRef<HTMLElement>) {}

  public ngOnInit() {
    const native = this.el.nativeElement;
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            native.classList.add(this.animationClass);
            obs.unobserve(native);
          }
        }
      }, { threshold: 0.15 });
      obs.observe(native);
    } else {
      // Fallback: immediate reveal
      native.classList.add(this.animationClass);
    }
  }
}
