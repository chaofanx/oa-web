import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import { ChatRoutingModule, routedComponents } from './chat-routing.module';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbChatModule } from '@nebular/theme';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ...routedComponents,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChatRoutingModule,
    NbCardModule,
    NbChatModule,
  ],
  exports: [
    RoomComponent,
  ],
})
export class ChatModule { }
