import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStateService } from '../../services/user-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-completion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-completion.component.html',
})
export class ProfileCompletionComponent {
  private readonly state = inject(UserStateService);

  @Input() label = 'potenciado';
  completion$!: Observable<number>;

  constructor() { 
    this.completion$ = this.state.profileCompletion$; 
  }
}
