import { Component } from '@angular/core';
import { NbDateService, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { CreateMeetComponent } from './create-meet/create-meet.component';
import { MeetService } from '../../../core/service/meet.service';

@Component({
  selector: 'ngx-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent {

  min: Date;
  max: Date;


  constructor(
    protected dateService: NbDateService<Date>,
    private dialogService: NbDialogService,
    private meetService: MeetService,
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
    this.meetService.getApprovedMeets()
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
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    filter: true,
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      type: {
        title: '会议类型',
        type: 'string',
      },
      title: {
        title: '主题',
        type: 'string',
      },
      description: {
        title: '描述',
        type: 'string',
      },
      startTime: {
        title: '开始时间',
        type: 'string',
      },
      endTime: {
        title: '结束时间',
        type: 'string',
      },
      reservedBy: {
        title: '预约人',
        type: 'string',
      },
      attendees: {
        title: '参会人员',
        type: 'string',
      },
      meeting: {
        title: '会议室',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  addMeet() {
    this.dialogService.open(CreateMeetComponent).onClose.subscribe(_ => {
      this.meetService.getApprovedMeets()
        .subscribe(data => {
          this.source.load(data);
        });
    });
  }
}
