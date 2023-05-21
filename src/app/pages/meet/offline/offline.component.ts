import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MeetService } from '../../../core/service/meet.service';
import { MeetRoom } from '../../../core/data/meet';
import { DatePreviewComponent } from '../date-preview/date-preview.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
})
export class OfflineComponent {

  constructor(
    private meetService: MeetService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) {
    this.meetService.getRooms()
      .subscribe(data => {
        this.source.load(data);
      });
  }

  source: LocalDataSource = new LocalDataSource();

  settings = {
    // mode: 'external',
    actions: {
      position: 'right',
      columnTitle: '操作',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
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
      name: {
        title: '会议室名称',
        type: 'string',
      },
      desc: {
        title: '描述',
        type: 'string',
      },
      max: {
        title: '容纳人数',
        type: 'number',
      },
      room: {
        title: '房间',
        type: 'string',
      },
      address: {
        title: '会议室地址',
        type: 'string',
      },
      status: {
        title: '状态',
        type: 'string',
      },
    },
  };

  reload() {
    this.meetService.getRooms()
      .subscribe(data => {
        this.source.load(data);
      });
  }

  save(event) {
    const data = event.data as MeetRoom;
    this.meetService.saveRoom(data).subscribe(res => {
      if (res) {
        this.toastrService.success('保存成功', '通知');
      } else {
        this.toastrService.danger('保存失败', '通知');
      }
    });
    this.reload();
  }

  rowSelect(event) {
    this.dialogService.open(DatePreviewComponent, {
      context: {},
    });
  }

  onDeleteConfirm(event): void {
    const data = event.data as MeetRoom;
    this.meetService.deleteRoom(data).subscribe(res => {
      if (res) {
        this.toastrService.success('删除成功', '通知');
      } else {
        this.toastrService.danger('删除失败', '通知');
      }
    });
    this.reload();
  }
}
