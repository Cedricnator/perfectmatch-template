import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

/**
 * pmButton directive: Attach to native button or anchor to apply unified design system styles.
 * Usage: <button pmButton variant="primary" size="md">Texto</button>
 * Variants: primary, secondary, outline, ghost, danger, success, subtle, soft
 * Sizes: xs, sm, md, lg, icon
 */
@Directive({
  selector: '[pmButton]',
  standalone: true
})
export class PmButtonDirective implements OnChanges {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'subtle' | 'soft' = 'primary';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'icon' = 'md';
  @Input() pill = false;
  @Input() loading = false;
  @Input() block = false;
  @Input() circle = false; // for perfectly round icon buttons regardless of size

  private base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 select-none';

  private variantClasses: Record<string,string> = {
    primary: 'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/5',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5',
    danger: 'bg-error-500 text-white hover:bg-error-600',
    success: 'bg-success-500 text-white hover:bg-success-600',
    subtle: 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-white/5',
    soft: 'bg-brand-500/15 text-brand-600 hover:bg-brand-500/25 dark:bg-brand-500/20 dark:text-brand-300 dark:hover:bg-brand-500/30'
  };

  private sizeClasses: Record<string,string> = {
    xs: 'h-7 px-2.5 text-[11px] rounded-md',
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-xs',
    lg: 'h-10 px-5 text-sm',
    icon: 'size-9 p-0 justify-center'
  };

  constructor(private el: ElementRef<HTMLButtonElement>, private rd: Renderer2) {}

  ngOnChanges(_: SimpleChanges): void {
    this.apply();
  }

  ngOnInit(){ this.apply(); }

  private apply(){
    const el = this.el.nativeElement;
    // Remove any previously injected token classes (ones starting with 'pm-btn-') if we used that approach later.
    // Build class string.
    const classes = [
      this.base,
      this.variantClasses[this.variant] || '',
      this.sizeClasses[this.size] || '',
  this.pill || this.circle ? 'rounded-full' : '',
      this.block ? 'w-full' : ''
    ].filter(Boolean).join(' ');

    // We do not wipe user classes; we append if not already present to avoid clobbering specific layouts.
    const existing = el.getAttribute('class') || '';
    const tokens = new Set((existing + ' ' + classes).trim().split(/\s+/));
    el.setAttribute('class', Array.from(tokens).join(' '));

    if (this.loading) {
      // aria-busy for accessibility
      this.rd.setAttribute(el, 'aria-busy', 'true');
      // Add spinner if not present
      if (!el.querySelector('.pm-btn-spinner')) {
        const span = this.rd.createElement('span');
        this.rd.addClass(span, 'pm-btn-spinner');
        this.rd.addClass(span, 'animate-spin');
        this.rd.addClass(span, 'size-4');
        this.rd.addClass(span, 'border-2');
        this.rd.addClass(span, 'border-white/50');
        this.rd.addClass(span, 'border-t-white');
        this.rd.addClass(span, 'rounded-full');
        this.rd.insertBefore(el, span, el.firstChild);
      }
    } else {
      this.rd.removeAttribute(el, 'aria-busy');
      const spinner = el.querySelector('.pm-btn-spinner');
      if (spinner) this.rd.removeChild(el, spinner);
    }
  }
}
