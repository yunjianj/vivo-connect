// Reconstructed from Windows BtFarawayDevice / ConnectFlow and phone Lo4/g.
// Transport and discovery are separate: this module never opens a connection.
import { createCipheriv, createHash, randomUUID } from 'node:crypto';

export const PRECONNECT_UUID = '8fa9c715-bd1f-596c-a1b0-13162b15c892';
const MAGIC = Buffer.from('PAY_LOAD_1');
const MAX_BODY = 1024 * 1024; // Local implementation bound, not a phone limit.
const CHANNELS = new Set(['', '#bri', '#inn', '#ble', '#pcc']);
const utf8 = new TextDecoder('utf-8', { fatal: true });

function text(value, field) {
  if (typeof value !== 'string' || !value || value.length > 4096 || value.includes('\0')) {
    throw new Error(`Missing or invalid ${field}`);
  }
  return value;
}

export function encodePreconnectFrame(message, channel = '') {
  if (!CHANNELS.has(channel)) throw new Error('Unknown preconnect channel');
  const body = Buffer.from(channel + JSON.stringify(message));
  if (body.length > MAX_BODY) throw new Error('Preconnect frame exceeds local limit');
  const header = Buffer.alloc(14);
  MAGIC.copy(header); header.writeUInt32BE(body.length, 10);
  return Buffer.concat([header, body]);
}

export class PreconnectDecoder {
  #buffer = Buffer.alloc(0);
  feed(chunk) {
    this.#buffer = Buffer.concat([this.#buffer, chunk]);
    const messages = [];
    while (this.#buffer.length >= 14) {
      if (!this.#buffer.subarray(0, 10).equals(MAGIC)) throw new Error('Invalid preconnect magic');
      const length = this.#buffer.readUInt32BE(10);
      if (!length || length > MAX_BODY) throw new Error('Invalid preconnect frame length');
      if (this.#buffer.length < 14 + length) break;
      let body = utf8.decode(this.#buffer.subarray(14, 14 + length));
      this.#buffer = this.#buffer.subarray(14 + length);
      let channel = '';
      if (body.startsWith('#')) {
        channel = body.slice(0, 4);
        if (!CHANNELS.has(channel)) throw new Error('Unknown preconnect channel');
        body = body.slice(4);
      }
      const message = JSON.parse(body);
      if (!message || typeof message !== 'object' || Array.isArray(message)) throw new Error('Invalid preconnect message');
      messages.push({ channel, message });
    }
    return messages;
  }
  end() {
    if (this.#buffer.length) throw new Error('Truncated preconnect frame');
  }
}

export function deviceInfoRequest({ deviceId, deviceName, openId, accountName = '', requestId = randomUUID(), isConnectNow = false }) {
  return { version: '1', reqId: text(requestId, 'requestId'), cmd: 'device_info',
    param: { deviceId: text(deviceId, 'deviceId'), deviceName: text(deviceName, 'deviceName'),
      accountName, openId: text(openId, 'openId'), deviceType: 'pc', isConnectNow: Boolean(isConnectNow) } };
}

export function bluetoothSign({ phoneDeviceId, phoneRandomId, openId, connectionId, token, seed = randomUUID() }) {
  // Current phone: Lo4/g.e -> SHA256(uniqueId + SeedManager.randomID + pcSeed).
  // The device ID in a #bri handshake is a separate identifier; do not use it
  // here unless its equality with the discovery GUID has actually been verified.
  const challenge = text(phoneDeviceId, 'phoneDeviceId') + text(phoneRandomId, 'phoneRandomId');
  text(seed, 'seed'); text(openId, 'openId'); text(connectionId, 'connectionId'); text(token, 'token');
  if ([openId, connectionId, token].some(value => value.includes('|'))) throw new Error('Invalid signed field separator');
  const key = createHash('sha256').update(challenge + seed, 'utf8').digest();
  const cipher = createCipheriv('aes-256-cbc', key, Buffer.alloc(16));
  const sign = Buffer.concat([cipher.update(`${openId}|${connectionId}|${token}`, 'utf8'), cipher.final()]).toString('hex');
  return { seed, sign };
}

export function connectPrimaryRequest({ deviceId, deviceName, openId, accountName = '',
  phoneDeviceId, phoneRandomId, connectionId, token, ssid, password, deviceAddress,
  connectType, businessConnectType, pcPcsuiteVersion, isAutoConnect = true, requestId = randomUUID(), seed }) {
  // connectType and the numeric version must come from the transport caller;
  // a dotted display version is not valid for the phone's long DTO field.
  text(connectType, 'connectType');
  if (!Number.isSafeInteger(businessConnectType)) throw new Error('Invalid business connect type');
  if (!Number.isSafeInteger(pcPcsuiteVersion) || pcPcsuiteVersion <= 0) throw new Error('Invalid numeric PC version');
  const authentication = bluetoothSign({ phoneDeviceId, phoneRandomId, openId, connectionId, token, seed });
  return { version: '1', reqId: text(requestId, 'requestId'), cmd: 'connect_primary', param: {
    deviceId: text(deviceId, 'deviceId'), deviceName: text(deviceName, 'deviceName'), accountName,
    openId, deviceType: 'pc', connect_type: connectType, ssid: text(ssid, 'ssid'),
    password: text(password, 'password'), deviceAddress: text(deviceAddress, 'deviceAddress'),
    isAutoConnect: isAutoConnect ? '1' : '0', pcPcsuiteVersion,
    extra_info: JSON.stringify({ connectType: businessConnectType, ...authentication, token })
  } };
}

export function isPrimaryAccepted(message, requestId) {
  // The phone also returns code=0000 with userDialogSelectResult=refuse or busy.
  // Agreement still precedes association and the HTTPS/WSS business handshake.
  return message?.cmd === 'connect_primary' && message.reqId === requestId
    && message.code === '0000' && message.data?.userDialogSelectResult === 'agree';
}
