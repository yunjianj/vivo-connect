import assert from 'node:assert/strict';
import test from 'node:test';
import { bluetoothSign, connectPrimaryRequest, deviceInfoRequest, encodePreconnectFrame,
  isPrimaryAccepted, PreconnectDecoder, PRECONNECT_UUID } from '../src/preconnect-protocol.mjs';

const authentication = {
  phoneDeviceId: 'phone-guid-example', phoneRandomId: 'phone-random-example',
  openId: 'account-example', connectionId: 'connection-example', token: 'token-example', seed: 'pc-seed-example'
};

test('phone seed formula matches an independent OpenSSL AES-CBC vector', () => {
  // Synthetic inputs, not captured credentials. The formula/zero IV/PKCS7
  // are cross-checked against current phone Lo4/g.e and Lig/e.b.
  assert.deepEqual(bluetoothSign(authentication), { seed: authentication.seed,
    sign: 'ed2cab7b8a3be8d5230dccb79fd757b06f957bff7cd984b71910d78b74d49ee9117f40c955862e16ee5d237405edea4df2dc47ff0f0d8b71a6911926cebc505b' });
  assert.notEqual(bluetoothSign({ ...authentication, phoneDeviceId: 'other-device' }).sign, bluetoothSign(authentication).sign);
  assert.notEqual(bluetoothSign({ ...authentication, phoneRandomId: 'other-random' }).sign, bluetoothSign(authentication).sign);
  for (const field of ['phoneDeviceId', 'phoneRandomId', 'openId', 'connectionId', 'token']) {
    assert.throws(() => bluetoothSign({ ...authentication, [field]: '' }));
  }
  assert.throws(() => bluetoothSign({ ...authentication, openId: 'ambiguous|account' }));
});

test('RFCOMM decodes split UTF8 and separate coalesced #bri handshake frames', () => {
  // Android connect/r prepends #bri to its own frame; it is not a JSON suffix.
  const handshake = { device_id: 'base-id', device_name: '测试手机', version: 2 };
  const response = { reqId: '1', cmd: 'device_info', code: '0000', data: { openId: 'account-example' } };
  const bytes = Buffer.concat([encodePreconnectFrame(handshake, '#bri'), encodePreconnectFrame(response)]);
  assert.equal(bytes.readUInt32BE(10), Buffer.byteLength('#bri' + JSON.stringify(handshake)));
  const decoder = new PreconnectDecoder();
  const messages = [];
  for (const byte of bytes) messages.push(...decoder.feed(Buffer.of(byte)));
  assert.deepEqual(messages, [{ channel: '#bri', message: handshake }, { channel: '', message: response }]);
  decoder.end();
  assert.deepEqual(new PreconnectDecoder().feed(bytes), messages);
});

test('malformed and truncated frames cannot become preconnect success', () => {
  const frame = encodePreconnectFrame({ code: '0000' });
  const decoder = new PreconnectDecoder(); decoder.feed(frame.subarray(0, -1));
  assert.throws(() => decoder.end(), /Truncated/);
  const oversized = Buffer.from(frame); oversized.writeUInt32BE(1024 * 1024 + 1, 10);
  assert.throws(() => new PreconnectDecoder().feed(oversized), /length/);
  const invalidMagic = Buffer.from(frame); invalidMagic[0] = 0;
  assert.throws(() => new PreconnectDecoder().feed(invalidMagic), /magic/);
  const invalidUtf8 = Buffer.from(frame); invalidUtf8[14] = 0xff;
  assert.throws(() => new PreconnectDecoder().feed(invalidUtf8));
  assert.throws(() => encodePreconnectFrame({}, '#bad'), /channel/);
});

test('device-info and authenticated connect retain the phone DTO field names', () => {
  assert.equal(PRECONNECT_UUID, '8fa9c715-bd1f-596c-a1b0-13162b15c892');
  const info = deviceInfoRequest({ deviceId: 'pc', deviceName: '电脑', openId: 'account', requestId: 'request' });
  assert.equal(info.cmd, 'device_info'); assert.equal(info.param.isConnectNow, false);
  const args = { ...authentication, deviceId: 'pc', deviceName: '电脑', ssid: 'DIRECT-example',
    password: 'test-password', deviceAddress: '02:00:00:00:00:01', connectType: '1',
    businessConnectType: 2, pcPcsuiteVersion: 7060, requestId: 'request' };
  const request = connectPrimaryRequest(args);
  assert.equal(request.cmd, 'connect_primary'); assert.equal(request.param.connect_type, '1');
  const extra = JSON.parse(request.param.extra_info);
  assert.equal(extra.sign, bluetoothSign(authentication).sign); assert.equal(extra.token, authentication.token);
  assert.equal(extra.connectType, 2);
  assert.throws(() => connectPrimaryRequest({ ...args, pcPcsuiteVersion: '7.0.6.0' }));
  assert.throws(() => connectPrimaryRequest({ ...args, phoneRandomId: undefined }));
});

test('code 0000 alone is insufficient: refusal, busy, other commands and stale replies fail', () => {
  const reply = { cmd: 'connect_primary', reqId: 'request', code: '0000', data: { userDialogSelectResult: 'agree' } };
  assert.equal(isPrimaryAccepted(reply, 'request'), true);
  for (const result of ['refuse', 'busy', 'failed', undefined]) {
    assert.equal(isPrimaryAccepted({ ...reply, data: { userDialogSelectResult: result } }, 'request'), false);
  }
  assert.equal(isPrimaryAccepted(reply, 'old-request'), false);
  assert.equal(isPrimaryAccepted({ ...reply, cmd: 'device_info' }, 'request'), false);
  assert.equal(isPrimaryAccepted({ ...reply, code: '0001' }, 'request'), false);
});
