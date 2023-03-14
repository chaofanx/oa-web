import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import {MeetComponent} from './meet.component';
import {RouterModule} from '@angular/router';
import {MeetRoutingModule, routedComponents} from './meet-routing.module';
import {FormsModule} from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ...routedComponents,
    RoomComponent,
    MeetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MeetRoutingModule,
    FormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
  ],
})
export class MeetModule { }
