import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
})
export default class MessagesComponent {}
