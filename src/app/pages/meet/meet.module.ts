import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MeetRoutingModule, routedComponents} from './meet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule, NbCalendarModule,
  NbCardModule, NbChatModule, NbCheckboxModule,
  NbDatepickerModule,
  NbInputModule, NbSelectWithAutocompleteModule, NbTabsetModule,
  NbTimepickerModule, NbToggleModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChatModule } from '../chat/chat.module';
import { MeetDaySellComponent } from './meet-day-sell/meet-day-sell.component';
import { DatePreviewComponent } from './date-preview/date-preview.component';


@NgModule({
  declarations: [
    ...routedComponents,
    MeetDaySellComponent,
    DatePreviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MeetRoutingModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbDatepickerModule,
    NbTimepickerModule,
    NbCheckboxModule,
    NbToggleModule,
    NbSelectWithAutocompleteModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    ChatModule,
    NbChatModule,
    NbCardModule,
    NbCalendarModule,
    Ng2SmartTableModule,
    NbTabsetModule,
  ],
})
export class MeetModule { }
