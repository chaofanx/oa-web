import { Injectable } from '@angular/core';
import { Meet, MeetRoom, Status } from '../data/meet';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeetService {

  rooms: MeetRoom[] = [
    {
      name: 'Hyperdrive',
      desc: '大会议室',
      max: 30,
      room: '大会议室',
      address: 'B12',
      status: 1,
    },
    {
      name: 'Holodesk',
      desc: '会议室',
      max: 9,
      room: '会议室',
      address: 'B12',
      status: 1,
    },
    {
      name: 'Graphene',
      desc: '会议室',
      max: 7,
      room: '会议室',
      address: 'A9',
      status: 1,
    },
  ];

  meets: Meet[] = [
    {
      id: 1,
      type: 1,
      title: '会议1',
      description: '会议1',
      startTime: new Date(1560000000000),
      endTime: new Date(1560000000000),
      creator: '管理员',
      attendees: '用户1,用户2,用户3',
      meeting: '132132',
      status: Status.APPROVED,
    },
    {
      id: 2,
      type: 2,
      title: '周会2',
      description: 'Hyperdrive讨论一下本周进度',
      startTime: new Date(1560000000000),
      endTime: new Date(1560000000000),
      creator: '管理员',
      attendees: '用户1,用户2,用户3',
      meeting: '12楼Hyperdrive会议室',
      status: Status.APPROVED,
    },
  ];

  constructor(
  ) { }

  addMeet(meet: Meet): Observable<boolean> {
    this.meets.push(meet);
    return of(true);
  }

  getApprovedMeets(): Observable<Meet[]> {
    return of(this.meets.filter(meet => meet.status === Status.APPROVED));
  }

  getAllMeets(): Observable<Meet[]> {
    return of(this.meets);
  }

  accept(approval: Meet): Observable<boolean> {
    approval.status = Status.APPROVED;
    const index = this.meets.findIndex(d => d.id === approval.id);
    if (index !== -1) {
      this.meets[index] = approval;
      return of(true);
    }
    return of(false);
  }

  reject(approval: Meet): Observable<boolean> {
    approval.status = Status.REJECTED;
    const index = this.meets.findIndex(d => d.id === approval.id);
    if (index !== -1) {
      this.meets[index] = approval;
      return of(true);
    }
    return of(false);
  }

  getRooms(): Observable<MeetRoom[]> {
    return of(this.rooms);
  }

  saveRoom(data: MeetRoom): Observable<boolean> {
    this.rooms.push(data);
    return of(true);
  }

  deleteRoom(data: MeetRoom): Observable<boolean> {
    const index = this.rooms.findIndex(d => d.name === data.name);
    if (index !== -1) {
      this.rooms.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
