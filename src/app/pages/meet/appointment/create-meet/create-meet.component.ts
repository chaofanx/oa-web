import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { UserService } from '../../../../core/service/users.service';
import { User } from '../../../../core/data/users';
import { MeetService } from '../../../../core/service/meet.service';
import { MeetRoom, Status } from '../../../../core/data/meet';

@Component({
  selector: 'ngx-create-meet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-meet.component.html',
  styleUrls: ['./create-meet.component.scss'],
})
export class CreateMeetComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<CreateMeetComponent>,
    private userService: UserService,
    private meetService: MeetService,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
    this.meetService.getRooms()
      .subscribe(rooms => this.rooms = rooms);
  }

  rooms: MeetRoom[];
  room: MeetRoom;
  name: string;
  date = new Date();
  startTime = new Date();
  endTime = new Date();
  online = false;
  users: User[];
  attendees: string;

  cancel() {
    this.ref.close();
  }

  submit() {
    const attendees = this.users.join(',');
    this.meetService.addMeet({
      id: 0,
      status: Status.COMMITTED,
      title: this.name,
      description: '',
      startTime: this.startTime,
      endTime: this.endTime,
      type: this.online ? 1 : 2 ,
      attendees: attendees,
      meeting: this.online ? 'online' : '12楼Hyperdrive会议室',
      creator: this.userService.current.name,
    }).subscribe(ok => {
      if (ok) {
        this.toastrService.success('提交成功', '通知');
        this.ref.close();
      } else {
        this.toastrService.danger('提交失败', '通知');
      }
    });
    this.ref.close();
  }

}
