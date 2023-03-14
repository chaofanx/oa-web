import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RoomComponent} from './room/room.component';
import {MeetComponent} from './meet.component';

const routes: Routes = [{
  path: '',
  component: MeetComponent,
  children: [
    {
      path: 'room',
      component: RoomComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetRoutingModule { }

export const routedComponents = [
  MeetComponent,
];
