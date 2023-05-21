import { Component, OnInit } from '@angular/core';
import TRTC, { Client, LocalStream } from 'trtc-js-sdk';
import { NbDialogService } from '@nebular/theme';
import LibGenerateTestUserSig from './generate-usersig.js';
import { Router } from '@angular/router';
import { ChatService } from '../../chat/room/chat.service';
import { ConfirmCardComponent } from '../../../core/component/confirm-card/confirm-card.component';

@Component({
  selector: 'ngx-meet-room',
  templateUrl: './room.component.html',
  providers: [ChatService],
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {

  private client: Client;

  joined = false;
  sharedScreen = false;

  camera = true;
  microphone = true;
  userId: string;
  roomId: number;
  disable = 'background-color: red;';
  messages: any[];
  localStream: LocalStream;

  constructor(
    private router: Router,
    private dialogService: NbDialogService,
    protected chatService: ChatService,
  ) {
    this.messages = this.chatService.loadMessages();
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: '管理员',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    const botReply = this.chatService.reply(event.message);
    if (botReply) {
      setTimeout(() => {
        this.messages.push(botReply);
      }, 500);
    }
  }

  ngOnInit() {
    TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.DEBUG);
    TRTC.checkSystemRequirements().then((result) => {
      if (!result.result) {
        this.dialogService.open(ConfirmCardComponent, {
          context: {
            title: '系统检测',
          },
        });
      }
    });
  }

  async toggleCamera() {
    // await this.client.unpublish(this.streams.video);
    // this.streams.video.close();
    const videoTrack = this.localStream.getVideoTrack();
    if (videoTrack) {
      await this.localStream.removeTrack(videoTrack);
      videoTrack.stop();
    } else {
      const videoStream = TRTC.createStream({
        userId: this.userId,
        audio: false,
        video: true,
      });
      await videoStream.initialize();
      await this.localStream.addTrack(videoStream.getVideoTrack());
    }
  }

  /**
   * 切换麦克风状态
   */
  async toggleMicrophone() {
    this.localStream.muteAudio();
    const audioTrack = this.localStream.getAudioTrack();
    if (audioTrack) {
      audioTrack.stop();
    } else {
      // 打开麦克风，重新采集麦克风并替换 audio track
      const stream = TRTC.createStream({
        audio: true,
        video: false,
      });
      await stream.initialize();
      this.localStream.unmuteAudio();
      await this.localStream.replaceTrack(stream.getAudioTrack());
    }

  }

  hangup() {
    this.joined = false;
    this.localStream.close();
    this.client.leave().then();
    this.client.destroy();
  }

  async shareScreen() {
    // if (!this.streams.screen) {
    //   this.streams.screen = TRTC.createStream({
    //     userId: this.userId,
    //     screen: true,
    //   });
    //   await this.streams.screen.initialize();
    //   this.streams.screen.on('screen-sharing-stopped', async event => {
    //     // 取消推流
    //     await this.client.unpublish(this.streams.screen);
    //     // 停止采集屏幕分享
    //     this.streams.screen.close();
    //   });
    // }
    // if (this.sharedScreen) {
    //   await this.client.unpublish(this.streams.screen);
    //   this.streams.screen.close();
    // } else {
    //   await this.client.publish(this.streams.screen, {isAuxiliary: true});
    // }
  }

  async joinRoom() {
    this.joined = true;
    this.client = TRTC.createClient({
      mode: 'rtc',
      sdkAppId: this.genTestUserSig(this.userId).sdkAppId,
      userId: this.userId,
      userSig: this.genTestUserSig(this.userId).userSig,
    });
    this.client.on('stream-added', async event => {
      const remoteStream = event.stream;
      await this.client.subscribe(remoteStream);
      // 主路视频流，一般是推麦克风、摄像头的那路流
      if (remoteStream.getType() === 'main') {
        // 2. 播放主路视频流
        await remoteStream.play(`remoteTrack`);
      } else if (remoteStream.getType() === 'auxiliary') {
        // 辅路视频流，一般是推屏幕分享的那路流。
        // 2. 播放屏幕分享
        await remoteStream.play(`${remoteStream.getUserId()}_screen`);
      }
    });
    this.client.on('stream-subscribed', event => {
      const remoteStream = event.stream;
      // 播放远端流，传入的元素 ID 必须是页面里存在的 div 元素
      remoteStream.play('remoteTrack');
    });
    this.client.on('client-banned', error => {
      alert('banned');
    });
    try {
      this.roomId = +this.roomId;
      await this.client.join({ roomId: this.roomId });
      this.localStream = TRTC.createStream({
        userId: this.userId,
        video: this.camera,
        audio: this.microphone,
      });
      await this.localStream.initialize();
      await this.localStream.play(`localTrack`);
      await this.client.publish(this.localStream);
    } catch (error) {
      alert('加入房间失败' + error);
      const videoTrack = this.localStream.getVideoTrack();
      const audioTrack = this.localStream.getAudioTrack();
      if (videoTrack && audioTrack) {
        await this.localStream.removeTrack(videoTrack);
        videoTrack.stop();
        audioTrack.stop();
      }
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
