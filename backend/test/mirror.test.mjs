import test from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter, once } from 'node:events';
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs/promises';
import https from 'node:https';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { official } from '../src/core.mjs';
import { MirrorManager, mirrorInput } from '../src/mirror.mjs';
import { isCameraAudio, lensConfig, rememberCameraStatus, startCameraAuthorization } from '../src/camera.mjs';

test('mirror rejects unbounded input and uses the phone geometry for touch and navigation', () => {
  const info = { sessionId: 7, width: 720, height: 1560 };
  const pointer = { kind: 'pointer', action: 'down', x: 1, y: 0.5 };
  assert.deepEqual(JSON.parse(mirrorInput(pointer, info)[0].slice('MOUSE_EVENT:'.length)), {
    action: 0, buttons: 1, id: 0,
    position: { point_x: 719, point_y: 780, screen_width: 720, screen_height: 1560 }, sessionId: 7
  });
  assert.equal(mirrorInput({ kind: 'key', keycode: 4 }, info).length, 2);
  for (const body of [{ ...pointer, x: -0.1 }, { ...pointer, y: NaN }, { kind: 'key', keycode: 1 }, { kind: 'text', text: 'a\0b' }])
    assert.throws(() => mirrorInput(body, info), { code: 'INVALID_ARGUMENT' });
});

const encoderAvailable = spawnSync('ffmpeg', ['-hide_banner', '-h', 'encoder=libx264']).stdout?.toString().includes('Encoder libx264');

for (const camera of [false, true]) test(`authorized ${camera ? 'camera' : 'mirror'} passes original media through one stream and stops on revocation`,
  { skip: !encoderAvailable, timeout: 12000 }, async t => {
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-mirror-test-'));
    t.after(() => fs.rm(dir, { recursive: true, force: true }));
    const key = path.join(dir, 'key.pem'), cert = path.join(dir, 'cert.pem');
    execFileSync('openssl', ['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-keyout', key, '-out', cert,
      '-days', '1', '-subj', '/CN=127.0.0.1'], { stdio: 'ignore' });
    const h264 = execFileSync('ffmpeg', ['-loglevel', 'error', '-f', 'lavfi', '-i', 'testsrc2=size=160x240:rate=20',
      '-frames:v', '100', '-c:v', 'libx264', '-preset', 'ultrafast', '-tune', 'zerolatency', '-f', 'h264', 'pipe:1']);
    const audio = Buffer.from([0xff, 0xf1, 0x4c, 0x80, 0x01, 0x1f, 0xfc, 0x00]);
    const videoPath = camera ? '/camera_share/screen' : '/mirror/screen';
    const controlPath = camera ? '/camera_share/config' : '/mirror/control';
    const options = camera ? { source: 'camera', facing: 'front', microphone: true } : {};
    const server = https.createServer({ key: await fs.readFile(key), cert: await fs.readFile(cert) });
    const WS = official('ws');
    const sockets = new WS.WebSocketServer({ server });
    const controlMessages = [], upgrades = [];
    sockets.on('connection', (ws, req) => {
      upgrades.push({ path: req.url, token: req.headers.token, subprotocol: ws.protocol });
      if (req.url === controlPath) ws.on('message', message => controlMessages.push(message.toString()));
      if (req.url === videoPath) ws.once('message', message => {
        if (!message.toString().startsWith('SCREEN_START:')) return;
        const start = JSON.parse(message.toString().slice('SCREEN_START:'.length));
        assert.equal(start.no_audio, !camera);
        ws.send('DEVICE_INFO:' + JSON.stringify({ mime_type: 'video/avc', sessionId: 25, video_width: 160, video_height: 240, with_audio: camera }));
        ws.send(Buffer.concat([Buffer.from('FRAME:'), Buffer.alloc(10), h264]));
        ws.send(Buffer.concat([Buffer.from('FRAME:'), Buffer.alloc(10), audio]));
      });
    });
    server.listen(0, '127.0.0.1'); await once(server, 'listening');
    const ws = new EventEmitter(); ws.readyState = 1;
    const phone = { status: 'connected', baseUrl: 'https://127.0.0.1', ws, token: 'test-phone-token', rejectUnauthorized: false };
    const permissionRequests = [];
    const manager = new MirrorManager({
      get: () => phone, sendMessage: async (target, message) => permissionRequests.push(message)
    }, { mediaPort: server.address().port });
    t.after(() => {
      manager.stop();
      for (const client of sockets.clients) client.terminate();
      sockets.close();
      server.close();
    });
    const emit = (type, data) => ws.emit('message', Buffer.from(type + ':' + JSON.stringify(data)), false);
    const config = { cameraShareMode: 1, normalCameraConfig: { cameraType: 'Back' } };
    const capabilities = { normalCameraCapability: { cameraInfos: ['Back', 'frontMaster'] } };
    function negotiate() {
      if (!camera) return;
      emit('PC_GET_CAMERA_CONFIG', config);
      assert.equal(permissionRequests.at(-1), 'PC_REQUEST_CAMERA_AUTH:{"share_mode":1,"start_from":"vivo Connect"}');
    }
    const reply = camera ? 'PC_RESPONSE_CAMERA_AUTH' : 'res_authrity';
    const pointer = { kind: 'pointer', action: 'down', x: 0.5, y: 0.5 };
    assert.equal(manager.start('phone', options).status, 'permission');
    assert.deepEqual(permissionRequests, camera ? ['PC_GET_CAMERA_CONFIG:'] : ['req_authrity']);
    assert.throws(() => manager.input('phone', pointer), { code: 'INVALID_ARGUMENT' });
    assert.deepEqual(upgrades, []);
    negotiate();
    emit(reply, { auth: 0 });
    assert.equal(manager.poll('phone').status, 'failed');
    assert.deepEqual(upgrades, []);
    manager.stop('phone');
    manager.start('phone', options);
    const relay = http.createServer((req, res) => manager.stream('phone', res));
    relay.listen(0, '127.0.0.1'); await once(relay, 'listening');
    t.after(() => { relay.closeAllConnections(); relay.close(); });
    const response = await fetch('http://127.0.0.1:' + relay.address().port);
    assert.equal(response.headers.get('content-type'), 'application/octet-stream');
    const frames = response.body.getReader();
    assert.deepEqual(upgrades, []);
    negotiate();
    emit(reply, { auth: '1' });
    if (camera) {
      assert.equal(permissionRequests.at(-1), 'PC_GET_CAMERA_CONFIG:');
      assert.deepEqual(upgrades, []);
      emit('PC_GET_CAMERA_CONFIG', config);
      assert.deepEqual(upgrades, []);
      emit('PC_GET_CAMERA_CAPABILITY', capabilities);
      assert.equal(permissionRequests.at(-1), 'PC_UPDATE_CAMERA_PARA:{"cameraShareMode":1,"normalCameraConfig":{"cameraType":"frontMaster"}}');
      assert.deepEqual(upgrades, []);
      emit('PC_UPDATE_CAMERA_PARA', { state: 1 });
      await delay(10);
    }
    let frame;
    for (let i = 0; i < 160; i++) {
      frame = manager.poll('phone');
      if (frame.status !== 'starting') break;
      await delay(30);
    }
    assert.equal(frame.status, 'streaming', frame.error);
    const chunks = [];
    let received = 0;
    while (received < h264.length + 8 + (camera ? audio.length + 8 : 0)) {
      const { value, done } = await frames.read();
      assert.equal(done, false);
      chunks.push(value);
      received += value.length;
    }
    const record = Buffer.concat(chunks);
    assert.equal(record.readUInt32BE(0), h264.length);
    assert.equal(record.readUInt32BE(4), frame.geometry);
    assert.deepEqual(record.subarray(8, h264.length + 8), h264);
    if (camera) {
      const microphone = record.subarray(h264.length + 8);
      assert.equal(microphone.readUInt32BE(0), audio.length);
      assert.equal(microphone.readUInt32BE(4), 0);
      assert.deepEqual(microphone.subarray(8), audio);
    } else assert.equal(record.length, h264.length + 8);
    assert.deepEqual(upgrades.map(v => v.path), [videoPath, controlPath]);
    assert(upgrades.every(v => v.token === phone.token && v.subprotocol === 'v1.hc.vivo.com.cn'));
    assert.equal(Object.hasOwn(manager.poll('phone'), 'image'), false);
    assert.throws(() => manager.input('phone', { ...pointer, geometry: frame.geometry + 1 }), { code: 'INVALID_ARGUMENT' });
    if (camera) {
      assert.throws(() => manager.input('phone', { ...pointer, geometry: frame.geometry }), { code: 'INVALID_ARGUMENT' });
      assert.equal(permissionRequests.filter(v => v.startsWith('PC_UPDATE_CAMERA_PARA:')).length, 1);
      const change = manager.switchCameraLens('phone', 'rear');
      assert.match(permissionRequests.at(-1), /"cameraType":"Back"/);
      assert.equal(manager.active.facing, 'front');
      await assert.rejects(manager.switchCameraLens('phone', 'rear'), { code: 'CAMERA_CONFIG_PENDING' });
      emit('PC_UPDATE_CAMERA_PARA', { state: 1 });
      assert.deepEqual(await change, { facing: 'rear' });
      assert.equal(manager.active.facing, 'rear');
      const rejected = manager.switchCameraLens('phone', 'front');
      assert.match(permissionRequests.at(-1), /"cameraType":"frontMaster"/);
      emit('PC_UPDATE_CAMERA_PARA', { state: -1 });
      await assert.rejects(rejected, { code: 'CAMERA_CONFIG_REJECTED' });
      assert.equal(manager.active.facing, 'rear');

    }
    else {
      const click = { ...pointer, geometry: frame.geometry, buttons: 2 };
      assert.equal(manager.input('phone', click).ok, true);
      assert.throws(() => manager.input('phone', { ...click, action: 'up', buttons: 1 }), { code: 'INVALID_ARGUMENT' });
      assert.equal(manager.input('phone', { ...click, action: 'up' }).ok, true);
      assert.equal(manager.input('phone', { kind: 'scroll', x: 0.5, y: 0.5, hscroll: 1, vscroll: -1, geometry: frame.geometry }).ok, true);
    }
    for (let i = 0; i < 50 && controlMessages.length < (camera ? 1 : 4); i++) await delay(10);
    assert(controlMessages[0].startsWith('COMMAND_EVENT:'));
    if (!camera) {
      const down = JSON.parse(controlMessages[1].slice('MOUSE_EVENT:'.length));
      const up = JSON.parse(controlMessages[2].slice('MOUSE_EVENT:'.length));
      assert.equal(down.buttons, 2); assert.equal(down.action, 0);
      assert.equal(up.buttons, 2); assert.equal(up.action, 1);
      const scroll = JSON.parse(controlMessages[3].slice('SCROLL_EVENT:'.length));
      assert.equal(scroll.hscroll, -1); assert.equal(scroll.vscroll, -1);
      assert.equal(scroll.wheel_ratio, Math.fround(0.01));
    }
    emit(reply, { auth: 0 });
    assert.equal(manager.poll('phone').status, 'failed');
    assert.equal((await frames.read()).done, true);
    assert.throws(() => manager.input('phone', { ...pointer, geometry: frame.geometry }), { code: 'INVALID_ARGUMENT' });
    manager.stop('phone');
    assert.equal(ws.listenerCount('message'), 0);
  });


test('camera rejects unadvertised lenses and incomplete AAC frames', () => {
  const config = { cameraShareMode: 2, liveCameraConfig: { cameraType: 'Master', videoOrientation: 0 } };
  const capabilities = { liveCameraCapability: { cameraInfos: ['Master'] } };
  assert.match(lensConfig(config, capabilities, 'rear'), /"cameraType":"Master","videoOrientation":0/);
  assert.throws(() => lensConfig(config, capabilities, 'front'), { code: 'CAMERA_LENS_UNAVAILABLE' });
  const audio = Buffer.from([0xff, 0xf1, 0x4c, 0x80, 0x01, 0x1f, 0xfc, 0x00]);
  assert.equal(isCameraAudio(audio), true);
  assert.equal(isCameraAudio(audio.subarray(0, 7)), false);
  assert.equal(isCameraAudio(Buffer.concat([audio, Buffer.from([0])])), false);
});

test('camera reuses early service status and never waits for capabilities before asking', async t => {
  const ws = new EventEmitter();
  const phone = { ws };
  rememberCameraStatus(phone, Buffer.from('PC_GET_CAMERA_STATUS:{"state":0}'), false);
  rememberCameraStatus(phone, Buffer.from('PC_GET_CAMERA_STATUS:{"state":null}'), false);
  const mirror = { phone, controller: new AbortController() };
  t.after(() => mirror.controller.abort());
  const frames = [];
  startCameraAuthorization(mirror, { send: async message => frames.push(message), approved: () => assert.fail('missing auth'), fail: assert.fail });
  assert.deepEqual(frames, ['PC_GET_CAMERA_CONFIG:', 'PC_ENABLE_CAMERA_AUTH:']);
  ws.emit('message', Buffer.from('PC_GET_CAMERA_CONFIG:{"cameraShareMode":2}'), false);
  assert.equal(frames.length, 2);
  ws.emit('message', Buffer.from('PC_GET_CAMERA_STATUS:{"state":1}'), false);
  assert.equal(frames.at(-1), 'PC_REQUEST_CAMERA_AUTH:{"share_mode":2,"start_from":"vivo Connect"}');
});
