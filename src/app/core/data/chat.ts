import { User } from './users';

export interface Message {
  text: string;
  reply: boolean;
  date: Date;
  user: User;
  files: File[];
}

export interface File {
  url: string;
  type: string;
  icon: boolean;
}
