import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { OfficialPreconnect, validPreconnectPeer } from '../src/preconnect.mjs';
import { RememberedDevices } from '../src/remembered.mjs';

const account = { openId: 'account', token: 'login-token', deviceId: 'login-device', regionCode: 'CN' };
const state = { deviceId: 'local-pc-uuid', name: 'PC' };
const network = { ip: '192.168.49.1', ssid: 'DIRECT-example', passphrase: 'test-password', bssid: '02:00:00:00:00:01' };
const peer = { deviceId: 'cloud-guid', randomId: 'random', bluetooth: '02:00:00:00:00:02', accountOpenId: account.openId };
const session = { info: { mobileDeviceName: 'Phone' } };
function setup({ result = 'agree', code = '0000', ip = '192.168.49.22', remoteAccount = account.openId } = {}) {
  const sent = []; let closed = false, opens = 0;
  const channel = { send: message => sent.push(message), close: async () => { closed = true; },
    waitFor: async predicate => {
      const request = sent.at(-1);
      const message = request.cmd === 'device_info'
        ? { cmd: request.cmd, reqId: request.reqId, code: '0000', data: { openId: remoteAccount } }
        : { cmd: request.cmd, reqId: request.reqId, code, localAddress: ip, data: { userDialogSelectResult: result } };
      const frame = { channel: '', message }; assert(predicate(frame)); return frame;
    } };
  const manager = new OfficialPreconnect(state, { account }, {
    request: async (url, options) => {
      assert.equal(url, 'https://connection-center.vivo.com.cn/device/list');
      assert.equal(options.headers.deviceId, account.deviceId); assert.notEqual(options.headers.deviceId, state.deviceId);
      assert.equal(options.headers.token, account.token); assert.equal(options.method, undefined);
      return { code: 0, data: [{ ...peer, userId: account.openId, type: 1, name: 'Phone', ext: { randomId: peer.randomId } }] };
    }, open: async options => { opens++; assert.equal(options.address, peer.bluetooth); assert.equal(options.powerOn, opens === 1); return channel; }
  });
  return { manager, sent, get closed() { return closed; } };
}

test('official reconnect keeps Bluetooth alive through HTTPS/WSS and returns fresh credentials without a QR', async () => {
  const test = setup();
  let pairing = false;
  const result = await test.manager.connect(session, network, undefined, async options => {
    assert.equal(test.closed, false); assert.equal(options.ip, '192.168.49.22');
    assert.equal(pairing, true);
    assert.equal(options.pcIp, network.ip); assert.equal(options.transport, 'wifi-direct');
    assert.equal(options.token.length, 64); assert.equal(options.isAutoConnect, true);
    assert.deepEqual(options.preconnect, peer); return { connected: true };
  }, () => { assert.equal(test.sent.at(-1).cmd, 'device_info'); pairing = true; return () => { pairing = false; }; });
  assert.deepEqual(result, { connected: true }); assert.equal(test.closed, true);
  assert.equal(pairing, false);
  assert.equal(test.sent[0].cmd, 'device_info'); assert.equal(test.sent[1].cmd, 'connect_primary');
  assert.equal(test.sent[1].param.isAutoConnect, '1');
  assert.equal(JSON.parse(test.sent[1].param.extra_info).connectType, 3);
});

test('refusal, busy, account mismatch and addresses outside the GO cannot reach business connection', async () => {
  for (const [options, code] of [[{ result: 'refuse' }, 'PRECONNECT_PHONE_REFUSED'],
    [{ result: 'busy' }, 'PRECONNECT_PHONE_BUSY'], [{ remoteAccount: 'other-account' }, 'PRECONNECT_ACCOUNT_MISMATCH'],
    [{ ip: '10.0.0.20' }, 'PRECONNECT_ADDRESS_INVALID']]) {
    const test = setup(options); let connected = false, pairing = false;
    await assert.rejects(test.manager.connect(session, network, undefined, () => { connected = true; },
      () => { pairing = true; return () => { pairing = false; }; }), { code });
    assert.equal(connected, false); assert.equal(test.closed, true);
    assert.equal(pairing, false);
    if (code === 'PRECONNECT_ACCOUNT_MISMATCH') assert.equal(test.sent.length, 1);
  }
});

test('business failure closes the finite Bluetooth helper, and each retry gets a new token', async () => {
  const test = setup(); let previous;
  await assert.rejects(test.manager.connect(session, network, undefined, options => {
    previous = options.token; throw new Error('business failed');
  }), /business failed/);
  assert.equal(test.closed, true);
  const next = await test.manager.connect(session, network);
  assert.notEqual(next.token, previous);
});

test('reboot cache permits offline discovery only for the same logged-in account and cancellation is preserved', async () => {
  const manager = new OfficialPreconnect(state, { account }, { request: async () => { throw new Error('offline'); } });
  assert.deepEqual(await manager.peer({ preconnect: peer }), peer);
  await assert.rejects(manager.peer({ preconnect: { ...peer, accountOpenId: 'other' } }), /offline/);
  const controller = new AbortController(); controller.abort(new Error('cancelled'));
  await assert.rejects(manager.peer({ preconnect: peer }, controller.signal), /offline/);
  manager.accounts.account = null;
  await assert.rejects(manager.peer({ preconnect: peer }), { code: 'PRECONNECT_LOGIN_REQUIRED' });
});

test('ambiguous same-name devices require a recorded cloud identity', async () => {
  const manager = new OfficialPreconnect(state, { account });
  manager.directory = async () => [{ ...peer, name: 'Phone' }, { ...peer, deviceId: 'other', name: 'Phone' }];
  await assert.rejects(manager.peer(session), { code: 'PRECONNECT_DEVICE_UNAVAILABLE' });
  const selected = await manager.peer({ ...session, preconnect: peer }); assert.equal(selected.deviceId, peer.deviceId);
});

test('confirmed preconnection metadata survives a new RememberedDevices instance in a private state file', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-preconnect-'));
  try {
    const device = { id: 'saved-phone', mode: 'existing', transport: 'wifi-direct', ip: '192.168.49.22',
      localIp: network.ip, baseUrl: 'https://192.168.49.22:10380', token: 'saved-token',
      remembered: true, info: session.info, preconnect: peer };
    const first = new RememberedDevices({ dir }, { sessions: new Map([[device.id, device]]) });
    await first.save(); const phones = { sessions: new Map() };
    const second = new RememberedDevices({ dir }, phones); await second.load();
    assert.deepEqual(phones.sessions.get(device.id).preconnect, peer);
    assert.equal(phones.sessions.get(device.id).status, 'disconnected');
    assert.equal((await fs.stat(path.join(dir, 'devices.json'))).mode & 0o777, 0o600);
    assert(!validPreconnectPeer({ ...peer, bluetooth: 'not-a-mac' }));
  } finally { await fs.rm(dir, { recursive: true, force: true }); }
});
