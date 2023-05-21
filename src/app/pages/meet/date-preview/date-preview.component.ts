import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { MeetDaySellComponent } from '../meet-day-sell/meet-day-sell.component';

@Component({
  selector: 'ngx-date-preview',
  templateUrl: './date-preview.component.html',
  styleUrls: ['./date-preview.component.scss'],
})
export class DatePreviewComponent {

  constructor(
    protected ref: NbDialogRef<DatePreviewComponent>,
  ) {
  }

  date = new Date();
  dayCellComponent = MeetDaySellComponent;

}
