import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraComponentsComponent } from './extra-components.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';

const routes: Routes = [{
  path: '',
  component: ExtraComponentsComponent,
  children: [
    {
      path: 'calendar',
      component: CalendarComponent,
    },
    {
      path: 'calendar-kit',
      component: CalendarKitFullCalendarShowcaseComponent,
    },
    {
      path: 'chat',
      component: ChatComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraComponentsRoutingModule {
}
