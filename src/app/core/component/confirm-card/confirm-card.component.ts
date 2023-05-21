import { Component, Input, OnDestroy } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-confirm-card',
  templateUrl: './confirm-card.component.html',
  styleUrls: ['./confirm-card.component.scss'],
})
export class ConfirmCardComponent implements OnDestroy {

  @Input() title: string;
  @Input() content: string;
  @Input() method: () => void;

  constructor(protected ref: NbDialogRef<ConfirmCardComponent>) { }

  ngOnDestroy() {
    this.ref.close(false);
  }

  submit() {
    this.method();
    this.ref.close(true);
  }

}
