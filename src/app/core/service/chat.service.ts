import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../data/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  reply(content: Message): Observable<Message> {
    return this.httpClient.post<any>('/chat/reply', content)
      .pipe(
        map(data => data.data),
      );
  }
}
