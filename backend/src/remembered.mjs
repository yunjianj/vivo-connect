import path from 'node:path';
import net from 'node:net';
import { privateJson, readJson } from './core.mjs';
import { validPreconnectPeer } from './preconnect.mjs';

const AUTH_ERRORS = new Set(['PHONE_REJECTED', 'PAIR_REJECTED', 'UNSUPPORTED_PROTOCOL', 'DEVICE_IDENTITY_MISMATCH']);
export class RememberedDevices {
  constructor(state, phones, jobs) {
    this.file = path.join(state.dir, 'devices.json'); this.phones = phones; this.jobs = jobs;
    this.writing = Promise.resolve(); this.stopped = true;
  }
  async load() {
    const stored = await readJson(this.file, { version: 1, devices: [] });
    if (stored.version !== 1 || !Array.isArray(stored.devices)) return;
    for (const item of stored.devices.slice(0, 50)) {
      try {
        if (!item || typeof item.id !== 'string' || !/^[\w-]{1,128}$/.test(item.id) || !['usb', 'existing', 'lan'].includes(item.mode)) continue;
        const url = new URL(item.baseUrl);
        if (!['http:', 'https:'].includes(url.protocol) || !net.isIPv4(item.ip) || url.hostname !== item.ip || url.username || url.password || url.search || url.hash || url.pathname !== '/') continue;
        if (typeof item.token !== 'string' || !/^[A-Za-z0-9._~-]{4,256}$/.test(item.token)) continue;
        if (item.localIp !== undefined && !net.isIPv4(item.localIp)) continue;
        if (item.mode === 'usb' && (typeof item.serial !== 'string' || !item.serial)) continue;
        if (!item.info || typeof item.info !== 'object' || Array.isArray(item.info)) continue;
        if (!this.phones.sessions.has(item.id)) this.phones.sessions.set(item.id, {
          id: item.id, mode: item.mode, transport: item.transport, ip: item.ip, localIp: item.localIp,
          serial: item.serial, baseUrl: item.baseUrl, token: item.token, rejectUnauthorized: item.rejectUnauthorized === true,
          info: item.info, preconnect: validPreconnectPeer(item.preconnect) ? item.preconnect : undefined, autoConnect: item.autoConnect !== false, needsAuthorization: item.needsAuthorization === true,
          remembered: true, status: 'disconnected'
        });
      } catch { /* A malformed entry must never be used as a connection target. */ }
    }
  }
  save() {
    const devices = [...this.phones.sessions.values()].filter(s => s.remembered).slice(-50).map(s => ({
      id: s.id, mode: s.mode, transport: s.transport, ip: s.ip, localIp: s.localIp, serial: s.serial,
      baseUrl: s.baseUrl, token: s.token, rejectUnauthorized: s.rejectUnauthorized,
      preconnect: validPreconnectPeer(s.preconnect) ? s.preconnect : undefined,
      info: Object.fromEntries(['mobileDeviceName', 'mobileDeviceId', 'phoneBleId', 'innerRoot'].filter(k => s.info?.[k] !== undefined).map(k => [k, s.info[k]])),
      autoConnect: s.autoConnect !== false, needsAuthorization: s.needsAuthorization === true
    }));
    this.writing = this.writing.catch(() => {}).then(() => privateJson(this.file, { version: 1, devices }));
    return this.writing;
  }
  start() {
    this.stopped = false;
    this.timer = setInterval(() => this.tick(), 2000); this.timer.unref();
    this.initial = setTimeout(() => this.tick(), 100); this.initial.unref();
  }
  stop() { this.stopped = true; clearInterval(this.timer); clearTimeout(this.initial); }
  async failed(s, error) {
    s.retryCount = (s.retryCount || 0) + 1;
    const phoneLease = error.code === 'PRECONNECT_PHONE_BUSY' || error.code === 'PRECONNECT_PHONE_REFUSED'
      || error.code === 'BLUETOOTH_DISCONNECTED' ? 35000 : 0;
    // The phone retains a pending preconnection for 30 s. Reopening that
    // channel every 5 s can keep it busy instead of allowing it to expire.
    s.retryAt = Date.now() + Math.max(phoneLease, Math.min(60000, 5000 * 2 ** Math.min(s.retryCount - 1, 4)));
    s.lastError = error.message;
    if (AUTH_ERRORS.has(error.code) || (error.code === 'UPSTREAM_HTTP' && [401, 403].includes(error.details?.status))) {
      s.autoConnect = false; s.needsAuthorization = true;
      s.lastError = '手机授权已失效或设备身份不匹配，需要重新授权';
      await this.save();
    }
  }
  tick() {
    if (this.stopped) return;
    // One reconnect at a time, with per-device backoff. Never queue duplicate jobs.
    if ([...this.jobs.items.values()].some(j => ['connect', 'reconnect', 'scan-connect', 'p2p-connect'].includes(j.kind) && ['queued', 'running'].includes(j.status))) return;
    for (const s of this.phones.sessions.values()) {
      if (!s.remembered || s.autoConnect === false || s.status !== 'disconnected' || s.reconnecting) continue;
      const waiting = this.phones.reconnectState?.(s);
      if (waiting) { s.reconnectWait = waiting; continue; }
      if (s.reconnectWait) { delete s.reconnectWait; s.retryAt = 0; s.retryCount = 0; }
      if ((s.retryAt || 0) > Date.now()) continue;
      s.retryAt = Date.now() + 5000;
      this.jobs.create('reconnect', async (_job, signal) => {
        try {
          const result = await this.phones.reconnect(s.id, signal, { automatic: true });
          return result;
        } catch (error) {
          if (!signal.aborted && this.phones.sessions.get(s.id) === s) {
            await this.failed(s, error);
          }
          throw error;
        }
      }, s.id);
      break;
    }
  }
}
