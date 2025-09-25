import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from '../../services/user-state.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-visual-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visual-verification.component.html',
})
export class VisualVerificationComponent {
  private readonly state = inject(UserStateService);
  
  public readonly statusLabel$ = this.state.verificationStatus$.pipe(map(s => {
    this.currentStatus = s;
    switch(s){
      case 'pending': return 'Pendiente';
      case 'submitted': return 'En revisión';
      case 'approved': return 'Verificado';
      case 'rejected': return 'Rechazado';
    }
    return '—';
  }));
  
  public readonly statusClass$ = this.state.verificationStatus$.pipe(map(s => {
    switch(s){
      case 'approved': return 'bg-success-100 text-success-700 dark:bg-success-500/15 dark:text-success-400';
      case 'submitted': return 'bg-brand-100 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400';
      case 'rejected': return 'bg-error-100 text-error-600 dark:bg-error-500/15 dark:text-error-400';
      default: return 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  }));
  
  public currentStatus: string = 'pending';

  onUpload(_evt: Event){
    this.state.setVerification('submitted');
    setTimeout(()=> this.state.setVerification('approved'), 1800);
  }
}
