import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoomComponent } from './room/room.component';
import { MeetComponent } from './meet.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateMeetComponent } from './appointment/create-meet/create-meet.component';
import { OfflineComponent } from './offline/offline.component';

const routes: Routes = [{
  path: '',
  component: MeetComponent,
  children: [
    {
      path: 'appointment',
      component: AppointmentComponent,
    },
    {
      path: 'room',
      component: RoomComponent,
    },
    {
      path: 'offline',
      component: OfflineComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetRoutingModule {
}

export const routedComponents = [
  MeetComponent,
  RoomComponent,
  MeetComponent,
  AppointmentComponent,
  CreateMeetComponent,
  OfflineComponent,
];
