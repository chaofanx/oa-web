export class MyDate extends Date {
  toString(): string {
    return this.toLocaleString();
  }
}
export interface Meet {
  id: number;
  type: number;
  title: string;
  description: string;
  startTime: MyDate;
  endTime: MyDate;
  creator: string;
  attendees: string;
  meeting: string;
  status: string;
}

export interface MeetRoom {
  name: string;
  desc: string;
  max: number;
  room: string;
  address: string;
  status: number;
}

export const Status = {
  COMMITTED: '已提交',
  APPROVED: '已审核',
  REJECTED: '已拒绝',
};
