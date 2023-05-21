import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbToastrService } from '@nebular/theme';
import { MeetService } from '../../../core/service/meet.service';
import { Meet } from '../../../core/data/meet';

@Component({
  selector: 'ngx-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.scss'],
})
export class MeetComponent {

  constructor(
    private meetService: MeetService,
    private toastrService: NbToastrService,
  ) {
    this.meetService.getAllMeets()
      .subscribe(data => {
        this.source.load(data);
      });
  }

  settings = {
    mode: 'external',
    actions: {
      add: false,
      position: 'right',
      columnTitle: '操作',
    },
    edit: {
      editButtonContent: '<i class="nb-checkmark"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-close"></i>',
    },
    filter: true,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      title: {
        title: '会议名',
        type: 'string',
      },
      status: {
        title: '状态',
        type: 'string',
      },
      creator: {
        title: '申请人',
        type: 'string',
      },
      startTime: {
        title: '申请时间',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  reloadData() {
    this.meetService.getAllMeets()
      .subscribe(data => this.source.load(data));
  }

  onEditConfirm(event): void {
    const approval = event.data as Meet;
    this.meetService.accept(approval);
    this.toastrService.success('已通过', '提示');
    this.reloadData();
  }

  onDeleteConfirm(event): void {
    const approval = event.data as Meet;
    this.meetService.reject(approval);
    this.toastrService.danger('已拒绝', '提示');
    this.reloadData();
  }

}
