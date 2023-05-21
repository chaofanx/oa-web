import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';

const routes: Routes = [{
  path: '',
  component: RoomComponent,
  children: [{
    path: 'room',
    component: RoomComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}

export const routedComponents = [
  ChatComponent,
  RoomComponent,
];
