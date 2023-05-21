import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { NbCalendarDayCellComponent } from '@nebular/theme';

@Component({
  selector: 'ngx-meet-day-sell',
  template: `
      <div>{{ day }}</div>
      <span class="caption">{{ status }}</span>
  `,
  styleUrls: ['./meet-day-sell.component.scss'],
})
export class MeetDaySellComponent extends NbCalendarDayCellComponent<Date> {
  @HostBinding('class') classes = 'day-cell';
  @Input() status: string;

  @HostListener('click') onClick() {
    // do work
    console.log('==============');
    console.log(this.selectedValue);
    console.log(this.visibleDate);
    console.log(this.select);
  }

}
