import { execFile } from 'node:child_process';
import { once } from 'node:events';
import { promisify } from 'node:util';
import { ApiError, official, requireThat } from './core.mjs';
import { isCameraAudio, startCameraAuthorization } from './camera.mjs';

const exec = promisify(execFile);
const maxPacket = 16 * 1024 * 1024;
const startCode = Buffer.from([0, 0, 0, 1]);

export function mirrorInput(body, info) {
  const { sessionId, width, height } = info;
  if (body.kind === 'pointer' || body.kind === 'scroll') {
    const { x, y } = body;
    requireThat(Number.isFinite(x) && x >= 0 && x <= 1 &&
      Number.isFinite(y) && y >= 0 && y <= 1, '触控坐标无效');
    const position = {
      point_x: Math.min(width - 1, Math.floor(x * width)),
      point_y: Math.min(height - 1, Math.floor(y * height)),
      screen_width: width, screen_height: height
    };
    if (body.kind === 'scroll') {
      const { hscroll = 0, vscroll = 0 } = body;
      requireThat([-1, 0, 1].includes(hscroll) && [-1, 0, 1].includes(vscroll) &&
        (hscroll || vscroll), '滚轮方向无效');
      return ['SCROLL_EVENT:' + JSON.stringify({
        hscroll: -hscroll, vscroll, wheel_ratio: Math.fround(vscroll ? 0.01 : 0.1), position, sessionId
      })];
    }
    const action = ['down', 'up', 'move'].indexOf(body.action);
    const buttons = body.buttons ?? 1;
    requireThat(action >= 0 && [1, 2, 4].includes(buttons), '鼠标按键或操作无效');
    return ['MOUSE_EVENT:' + JSON.stringify({ action, buttons, id: 0, position, sessionId })];
  }
  if (body.kind === 'text') {
    const { text } = body;
    requireThat(typeof text === 'string' && text.length > 0 && Buffer.byteLength(text) <= 4096 &&
      !text.includes('\0'), '请输入不超过 4096 字节的文本');
    return ['TEXT_EVENT:' + JSON.stringify({ newCursorPosition: 1, textEventType: 2, text, sessionId })];
  }
  requireThat(body.kind === 'key' && [3, 4, 187].includes(body.keycode), '不支持此控制操作');
  return [0, 1].map(action => 'KEYCODE_EVENT:' + JSON.stringify({ action, keycode: body.keycode, metastate: 0, sessionId }));
}

export class MirrorManager {
  active = null;
  constructor(phones, { mediaPort = 10381 } = {}) {
    this.phones = phones;
    this.mediaPort = mediaPort;
  }

  start(id, { source = 'screen', facing = 'rear', microphone = false } = {}) {
    requireThat(['screen', 'camera'].includes(source) && ['rear', 'front'].includes(facing) &&
      typeof microphone === 'boolean' && (source === 'camera' || !microphone), '媒体会话参数无效');
    const phone = this.phones.get(id);
    requireThat(phone.status === 'connected' && phone.ws?.readyState === 1, '请先连接手机');
    if (this.active) throw new ApiError(409, 'MIRROR_BUSY', '已有手机投屏或共享相机会话，请先关闭');
    const mirror = {
      id, phone, source, facing, microphone, status: 'permission', lastPoll: Date.now(), geometry: 0,
      controller: new AbortController(), sockets: [], pressedButton: 0
    };
    this.active = mirror;
    mirror.onClose = () => this.stop(id);
    const approved = () => {
      if (mirror.status !== 'permission') return;
      mirror.status = 'starting';
      clearTimeout(mirror.permissionTimer);
      mirror.lastVideo = Date.now();
      this.openWhenReady(mirror);
    };
    const fail = error => this.fail(mirror, error);
    const send = message => this.phones.sendMessage(phone, message, 'MIRROR_PERMISSION_FAILED', '手机媒体授权请求失败');
    if (source === 'camera') {
      startCameraAuthorization(mirror, { send, approved, fail });
    } else {
      mirror.onPermission = (data, binary) => {
        if (binary || data.length > 2048 || !data.toString().startsWith('res_authrity')) return;
        let auth;
        try { auth = JSON.parse(data.toString().slice('res_authrity'.length).replace(/^:/, '')).auth; }
        catch { return; }
        if (auth !== 1 && auth !== '1') fail('手机未允许投屏或已收回授权');
        else approved();
      };
      phone.ws.on('message', mirror.onPermission);
      send('req_authrity').catch(() => fail('无法请求手机投屏授权'));
    }
    phone.ws.once('close', mirror.onClose);
    mirror.permissionTimer = setTimeout(() => this.fail(mirror, source === 'camera'
      ? (mirror.permissionHint || '等待手机授权') + '，本次请求已超时' : '等待手机投屏授权超时'), 45000);
    mirror.watchdog = setInterval(() => {
      if (Date.now() - mirror.lastPoll > 12000 || phone.status !== 'connected') this.stop(id);
      else if ((mirror.status === 'starting' || (mirror.source === 'camera' && mirror.status === 'streaming')) &&
        Date.now() - mirror.lastVideo > 15000) this.fail(mirror, '等待手机画面超时');
    }, 1000);
    return this.poll(id);
  }

  stream(id, response) {
    const mirror = this.active;
    requireThat(mirror?.id === id && !mirror.controller.signal.aborted, '手机操控会话已关闭');
    if (mirror.stream) throw new ApiError(409, 'MIRROR_STREAM_BUSY', '投屏视频流已被打开');
    mirror.stream = response;
    response.on('close', () => {
      if (this.active === mirror && !mirror.controller.signal.aborted) this.stop(id);
    });
    response.writeHead(200, {
      'content-type': 'application/octet-stream', 'cache-control': 'no-store',
      'x-content-type-options': 'nosniff'
    });
    response.flushHeaders();
    this.openWhenReady(mirror);
  }

  openWhenReady(mirror) {
    if (mirror.status !== 'starting' || !mirror.stream || mirror.opening) return;
    mirror.opening = true;
    this.open(mirror).catch(() => this.fail(mirror, '无法打开手机投屏通道'));
  }

  async open(mirror) {
    const phone = mirror.phone;
    const signal = mirror.controller.signal;
    const endpoint = new URL(phone.baseUrl);
    endpoint.protocol = 'wss:';
    endpoint.port = String(this.mediaPort);
    if (phone.mode === 'usb') {
      const adb = process.env.ADB || 'adb';
      const args = ['-s', phone.serial, 'forward'];
      const { stdout } = await exec(adb, [...args, 'tcp:0', 'tcp:10381'], { timeout: 5000 });
      const port = Number(stdout.trim());
      requireThat(Number.isInteger(port) && port > 0 && port <= 65535, '无法建立 USB 投屏转发');
      const remove = () => exec(adb, [...args, '--remove', 'tcp:' + port], { timeout: 5000 }).catch(() => {});
      if (signal.aborted) { await remove(); return; }
      signal.addEventListener('abort', remove, { once: true });
      endpoint.port = String(port);
    }
    const camera = mirror.source === 'camera';
    const wsPath = camera ? '/camera_share/' : '/mirror/';
    const WS = official('ws');
    const connect = async (suffix, maxPayload) => {
      signal.throwIfAborted();
      const ws = new WS(new URL(wsPath + suffix, endpoint), 'v1.hc.vivo.com.cn', {
        headers: { Token: phone.token }, rejectUnauthorized: phone.rejectUnauthorized,
        localAddress: phone.localIp, maxPayload, handshakeTimeout: 5000, followRedirects: false
      });
      mirror.sockets.push(ws);
      ws.on('error', () => this.fail(mirror, '手机投屏通道连接失败'));
      ws.on('close', () => this.fail(mirror, '手机已关闭投屏通道'));
      await once(ws, 'open', { signal });
      return ws;
    };
    const video = await connect('screen', maxPacket);
    const control = await connect(camera ? 'config' : 'control', 64 * 1024);
    mirror.control = control;
    signal.throwIfAborted();
    video.on('message', (data, binary) => {
      if (signal.aborted) return;
      if ((!binary || camera) && data.length <= 4096 && data.subarray(0, 12).toString() === 'DEVICE_INFO:') {
        let info;
        try { info = JSON.parse(data.toString().slice(12)); } catch { return; }
        const { sessionId, video_width: width, video_height: height, mime_type: mime } = info || {};
        if (!Number.isInteger(sessionId) || sessionId < 0 || sessionId > 2147483647 ||
          ![width, height].every(n => Number.isInteger(n) && n > 0 && n <= 8192) ||
          (mime && mime !== 'video/avc')) {
          this.fail(mirror, '手机提供的投屏尺寸或编码不受支持');
          return;
        }
        const changed = mirror.info?.sessionId !== sessionId || mirror.info.width !== width || mirror.info.height !== height;
        mirror.info = { sessionId, width, height };
        if (camera && typeof info.with_audio === 'boolean') mirror.audioAvailable = info.with_audio;
        if (changed) {
          mirror.geometry++;
          mirror.status = 'starting';
          mirror.lastVideo = Date.now();
          mirror.pressedButton = 0;
        }
        this.send(mirror, 'COMMAND_EVENT:' + JSON.stringify({ action: 6, id: 0, sessionId }));
        return;
      }
      if (data.length < 21 || data.subarray(0, 6).toString() !== 'FRAME:' || !mirror.info) return;
      const payload = data.subarray(16);
      if (payload.subarray(0, 4).equals(startCode)) {
        mirror.lastVideo = Date.now();
        this.forward(mirror, payload, mirror.geometry);
        if (!signal.aborted) mirror.status = 'streaming';
      } else if (camera && mirror.microphone && isCameraAudio(payload)) {
        this.forward(mirror, payload, 0);
      }
    });
    video.send('SCREEN_START:' + JSON.stringify({
      app_package_name: 'mirror', device_type: 1, first_file_open: true, frame_with_time: true,
      image_quality: camera ? 3 : 2, max_size: camera ? 1920 : 1280, mime_type: 'video/avc', mime_type2: ['h264MP', 'h264BP'],
      mirror_type: 0, msg_send_key_mode: '0', need_open_file: false, no_audio: !mirror.microphone, pc_version: camera ? '650' : '0',
      refresh_rate: camera ? 30 : 20, screenPrivacy: false, show_touch_spot: false, split_frame: false,
      support_drag: false, video_height: camera ? 1 : 1560, video_width: camera ? 1 : 720, winId: '0'
    }));
  }

  forward(mirror, payload, geometry) {
    const output = mirror.stream;
    if (output.destroyed || output.writableLength + payload.length > maxPacket) {
      this.fail(mirror, '电脑无法及时接收手机媒体数据');
      return;
    }
    // Positive geometry identifies H.264. Zero is reserved for authorized AAC.
    const header = Buffer.allocUnsafe(8);
    header.writeUInt32BE(payload.length);
    header.writeUInt32BE(geometry, 4);
    output.cork();
    output.write(header);
    output.write(payload);
    output.uncork();
  }

  send(mirror, message) {
    const control = mirror.control;
    if (control?.readyState !== 1 || control.bufferedAmount > 64 * 1024) {
      this.fail(mirror, '手机控制通道不可用');
      return;
    }
    control.send(message, error => { if (error) this.fail(mirror, '手机控制通道发送失败'); });
  }

  poll(id) {
    const mirror = this.active;
    requireThat(mirror?.id === id, '手机操控会话已关闭');
    mirror.lastPoll = Date.now();
    return { status: mirror.status, error: mirror.error, geometry: mirror.geometry, audioAvailable: mirror.audioAvailable, permissionHint: mirror.permissionHint };
  }

  async switchCameraLens(id, facing) {
    requireThat(['front', 'rear'].includes(facing), '请选择前置或后置镜头');
    const mirror = this.active;
    requireThat(mirror?.id === id && mirror.source === 'camera' && mirror.status === 'streaming' &&
      mirror.phone.status === 'connected' && mirror.switchLens, '请等待共享相机画面就绪');
    if (mirror.facing === facing) return { facing };
    const result = await mirror.switchLens(facing);
    if (mirror.info && !mirror.controller.signal.aborted) {
      this.send(mirror, 'COMMAND_EVENT:' + JSON.stringify({ action: 6, id: 0, sessionId: mirror.info.sessionId }));
    }
    return result;
  }

  input(id, body) {
    const mirror = this.active;
    requireThat(mirror?.id === id && mirror.source === 'screen' && mirror.status === 'streaming' &&
      mirror.phone.status === 'connected' && mirror.info && !mirror.stream.destroyed, '投屏画面未就绪');
    requireThat(body.geometry === mirror.geometry, '手机画面已旋转，请重试');
    const messages = mirrorInput(body, mirror.info);
    if (body.kind === 'pointer') {
      const button = body.buttons ?? 1;
      requireThat(body.action === 'down' ? !mirror.pressedButton : mirror.pressedButton === button, '鼠标按键顺序无效');
      mirror.pressedButton = body.action === 'up' ? 0 : button;
    }
    for (const message of messages) this.send(mirror, message);
    return { ok: mirror.status === 'streaming' };
  }

  fail(mirror, error) {
    if (this.active !== mirror || mirror.controller.signal.aborted) return;
    mirror.status = 'failed';
    mirror.error = error;
    this.release(mirror);
    mirror.watchdog = setTimeout(() => this.stop(mirror.id), 12000);
  }

  stop(id = this.active?.id) {
    if (!this.active || this.active.id !== id) return;
    const mirror = this.active;
    this.active = null;
    this.release(mirror);
  }

  release(mirror) {
    clearTimeout(mirror.permissionTimer);
    clearInterval(mirror.watchdog);
    mirror.phone.ws?.off('message', mirror.onPermission);
    mirror.phone.ws?.off('close', mirror.onClose);
    mirror.controller.abort();
    for (const ws of mirror.sockets) ws.terminate();
    mirror.stream?.end();
  }
}
