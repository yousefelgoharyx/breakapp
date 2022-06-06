import RtmEngine from 'agora-react-native-rtm';
import {EventEmitter} from 'events';
const config = require('../agora.config.json');
export default class RtmAdapter extends EventEmitter {
  client;
  uid;

  constructor() {
    super();
    this.uid = null;
    this.client = new RtmEngine();
    this.instance = null;
    const events = [
      'tokenExpired',
      'remoteInvitationRefused',
      'remoteInvitationFailure',
      'remoteInvitationCanceled',
      'remoteInvitationAccepted',
      'messageReceived',
      'localInvitationRefused',
      'localInvitationReceivedByPeer',
      'localInvitationFailure',
      'localInvitationCanceled',
      'localInvitationAccepted',
      'error',
      'connectionStateChanged',
      'channelMessageReceived',
      'channelMemberLeft',
      'channelMemberJoined',
      'remoteInvitationReceived',
    ];
    events.forEach(event => {
      // @ts-ignore
      this.client.on(event, evt => {
        console.warn(event, evt);
        this.emit(event, evt);
      });
    });
  }

  async login(uid) {
    this.instance = await RtmEngine.createInstance(
      '14cc34ef77774273aaaba21749ac950c',
    );
    this.uid = uid;
    return this.instance;
  }

  async logout() {
    await this.client.logout();
    Logger.log('logout success');
  }

  async join(cid) {
    return this.client.joinChannel(cid);
  }

  async leave(cid) {
    return this.client.leaveChannel(cid);
  }

  async sendChannelMessage(param) {
    return this.client.sendMessageByChannelId(param.channel, param.message);
  }

  async destroy() {
    await this.client.destroyClient();
    Logger.log('destroy');
  }
}
