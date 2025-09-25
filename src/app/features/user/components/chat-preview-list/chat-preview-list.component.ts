import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChatPreview { id:number; name:string; last:string; unread:number; }

@Component({
  selector: 'app-chat-preview-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-preview-list.component.html',
})
export class ChatPreviewListComponent {
  chats: ChatPreview[] = [
    { id:1, name:'Andrea', last:'¿Cómo te fue hoy? 😊', unread: 2 },
    { id:2, name:'Luis', last:'Interesante lo del trekking!', unread: 0 },
    { id:3, name:'María', last:'Coincidimos en jazz y cine.', unread: 1 },
  ];
}
