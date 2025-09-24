import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChatPreview { id:number; name:string; last:string; unread:number; }

@Component({
  selector: 'app-chat-preview-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 h-full flex flex-col">
    <h3 class="text-sm font-semibold text-gray-800 dark:text-white/90 mb-4">Mensajes recientes</h3>
    <ul class="space-y-3 flex-1 overflow-auto">
      <li *ngFor="let c of chats" class="flex items-start gap-3">
        <div class="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-[11px] font-medium text-gray-500">{{ c.name.slice(0,2) }}</div>
        <div class="min-w-0 flex-1">
          <p class="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">{{ c.name }}</p>
          <p class="text-[11px] text-gray-500 dark:text-gray-500 truncate">{{ c.last }}</p>
        </div>
        <span *ngIf="c.unread>0" class="ml-auto rounded-full bg-brand-500 text-white text-[10px] px-1.5 py-0.5">{{ c.unread }}</span>
      </li>
      <li *ngIf="!chats.length" class="text-[11px] text-gray-500 dark:text-gray-500 text-center py-4">Sin conversaciones.</li>
    </ul>
    <div class="pt-4">
      <button class="w-full h-9 rounded-lg text-xs font-medium bg-brand-500 text-white hover:bg-brand-600">Abrir mensajes</button>
    </div>
  </div>
  `
})
export class ChatPreviewListComponent {
  chats: ChatPreview[] = [
    { id:1, name:'Andrea', last:'¿Cómo te fue hoy? 😊', unread: 2 },
    { id:2, name:'Luis', last:'Interesante lo del trekking!', unread: 0 },
    { id:3, name:'María', last:'Coincidimos en jazz y cine.', unread: 1 },
  ];
}
