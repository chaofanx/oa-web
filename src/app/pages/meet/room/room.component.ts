import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import TRTC from 'trtc-js-sdk';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import LibGenerateTestUserSig from './generate-usersig.js';
import { NavigationStart, Router } from '@angular/router';
import { from } from 'rxjs';
import { NbComponentStatus } from '@nebular/theme/components/component-status';

@Component({
  selector: 'ngx-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {

  constructor(private el: ElementRef,
              private router: Router,
              private dialogService: NbDialogService) {
    TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.DEBUG);
    TRTC.checkSystemRequirements().then((result) => {
      if (!result.result) {
        this.dialogService.open(ShowcaseDialogComponent, {
          context: {
            title: '系统检测',
          },
        });
        window.location.href = '/';
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.client && from(this.client.leave()).subscribe();
      }
    });
  }
  userId: string;
  roomId: number;

  status: NbComponentStatus = 'primary';
  private client: any;

  async joinRoom() {
    this.client = TRTC.createClient({
      mode: 'rtc',
      sdkAppId: this.genTestUserSig(this.userId).sdkAppId,
      userId: this.userId,
      userSig: this.genTestUserSig(this.userId).userSig,
    });
    try {
      // string to number
      this.roomId = +this.roomId;
      await this.client.join({ roomId: this.roomId });
      const localStream = TRTC.createStream({
        userId: this.userId,
        audio: true,
        video: true,
      });
      await localStream.initialize();
      localStream.play('localtracks');
      await this.client.publish(localStream);
    } catch (error) {
      console.error(error);
      alert('加入房间失败');
    }
  }

  private genTestUserSig(userID: string) {
    const SDKAPPID = 1400797945;
    const EXPIRETIME = 604800;
    const SECRETKEY = 'e34b6eee8e9211e42646cf603117fe162e598796e357b5440abd408b70fe4f1e';
    const generator = new LibGenerateTestUserSig(SDKAPPID, SECRETKEY, EXPIRETIME);
    const userSig = generator.genTestUserSig(userID);
    return {
      sdkAppId: SDKAPPID,
      userSig: userSig,
    };
  }

}
