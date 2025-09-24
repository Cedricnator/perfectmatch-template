import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipe/safe-html.pipe';
import { RouterModule } from '@angular/router';
import { ButtonSize, ButtonType, ButtonVariant } from './button.types';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe, RouterModule],
  templateUrl: './button.component.html',
  styles: `:host{display:contents}`,
  host: { 'class':'pm-btn-host' },
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() block = false;
  @Input() pill = false;
  @Input() circle = false;
  @Input() type: ButtonType = 'button';
  @Input() routerLink?: any; // optional for link mode
  @Input() href?: string;    // external link
  @Input() startIcon?: string;
  @Input() endIcon?: string;
  @Input() ariaLabel?: string;
  @Input() className = '';

  @Output() btnClick = new EventEmitter<Event>();

  private readonly variantMap: Record<string,string> = {
    primary: 'bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white/5',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5',
    danger: 'bg-error-500 text-white hover:bg-error-600',
    success: 'bg-success-500 text-white hover:bg-success-600',
    subtle: 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-white/5',
    soft: 'bg-brand-500/15 text-brand-600 hover:bg-brand-500/25 dark:bg-brand-500/20 dark:text-brand-300 dark:hover:bg-brand-500/30'
  };

  private readonly sizeMap: Record<string,string> = {
    xs: 'h-7 px-2.5 text-[11px] rounded-md',
    sm: 'h-8 px-3 text-xs',
    md: 'h-9 px-4 text-xs',
    lg: 'h-10 px-5 text-sm',
    icon: 'size-9 p-0 justify-center'
  };
  
  get isLink(){ 
    return !!(this.routerLink || this.href); 
  }

  get btnClasses(): string {
    const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 disabled:opacity-50 disabled:cursor-not-allowed select-none';
    const variant = this.variantMap[this.variant] || this.variantMap['primary'];
    const size = this.sizeMap[this.size] || this.sizeMap['md'];
    const shape = (this.pill || this.circle) ? 'rounded-full' : '';
    const width = this.block ? 'w-full' : '';
    const loading = this.loading ? 'relative' : '';
    return [base, variant, size, shape, width, loading, this.className].filter(Boolean).join(' ');
  }

  onClick(ev: Event): void {
    if (this.disabled || this.loading) { ev.preventDefault(); ev.stopPropagation(); return; }
    this.btnClick.emit(ev);
  }
}
