import path from 'node:path';
import os from 'node:os';
import net from 'node:net';
import crypto from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import { ApiError, official, requireThat, ROOT, tokenFor, abortError } from './core.mjs';
import { request, requestJson, checkBusiness } from './http.mjs';
import { pairLan, discover } from './pairing.mjs';
import { selectInterface } from './network.mjs';
const exec = promisify(execFile);

export class PhoneManager {
  sessions = new Map();
  constructor(state, accounts) { this.state = state; this.accounts = accounts; }
  adb() { const lib = official('@vivo/adbkit'); return { lib, client: lib.createClient({ bin: process.env.ADB || 'adb' }) }; }
  async usbDevices() { return (await this.adb().client.listDevices()).map(d => ({ serial: d.id, state: d.type })); }
  async discover(options) { return discover({ ...options, deviceId: this.state.deviceId, openId: this.accounts.account?.openId }); }
  list() { return [...this.sessions.values()].map(s => this.public(s)); }
  public(s) { return { id: s.id, mode: s.mode, transport: s.transport || s.mode, ip: s.ip, pcIp: s.localIp, serial: s.serial, baseUrl: s.baseUrl, status: s.status,
    phone: s.info, version: s.version, lastMessageAt: s.lastMessageAt, lastError: s.lastError }; }
  get(id) { const session = this.sessions.get(id); if (!session) throw new ApiError(404, 'SESSION_NOT_FOUND', '手机会话不存在'); return session; }
  prepareConnection(options) {
    requireThat(['lan', 'usb', 'existing'].includes(options.mode), 'mode 应为 lan、usb 或 existing');
    if (options.mode === 'lan') {
      requireThat(net.isIPv4(options.ip), 'ip 必须是手机实际 IPv4，请使用发现结果中的 ip');
      return { ...options, pcIp: selectInterface(options.pcIp, { targetIp: options.ip }).address };
    }
    if (options.mode === 'existing' && options.pcIp !== undefined) return { ...options, pcIp: selectInterface(options.pcIp, { targetIp: options.ip }).address };
    return options;
  }
  async connect(options, signal, replacing) {
    options = this.prepareConnection(options);
    requireThat(['lan', 'usb', 'existing'].includes(options.mode), 'mode 应为 lan、usb 或 existing');
    const mode = options.mode;
    const connectionId = typeof options.connectionId === 'string' && options.connectionId.length <= 128 ? options.connectionId : crypto.randomUUID();
    const s = { id: crypto.randomUUID(), connectionId, mode, transport: options.transport, status: 'connecting', token: options.mode === 'existing' ? options.token : tokenFor(options.pcIp || ''), rejectUnauthorized: options.verifyTls === true };
    requireThat(typeof s.token === 'string' && /^[A-Za-z0-9._~-]{4,256}$/.test(s.token), '连接 token 格式错误');
    this.sessions.set(s.id, s);
    try {
      if (mode === 'usb') await this.connectUsb(s, options);
      else {
        requireThat(net.isIPv4(options.ip), 'ip 必须是手机 IPv4');
        s.ip = options.ip;
        if (options.pcIp) s.localIp = options.pcIp;
        if (mode === 'lan') {
          requireThat(net.isIPv4(options.pcIp), 'pcIp 必须是本机 IPv4');
          await pairLan({ ip: options.ip, state: this.state, account: this.accounts.account, token: s.token, signal, localAddress: s.localIp });
        }
        const port = options.port ?? 10380;
        requireThat(Number.isInteger(port) && port > 0 && port <= 65535, 'port 不合法');
        s.baseUrl = `${options.scheme === 'http' ? 'http' : 'https'}://${s.ip}:${port}`;
      }
      abortError(signal);
      const versionBody = this.versionBody(s);
      if (mode === 'usb') {
        let initial;
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            initial = await requestJson(`http://127.0.0.1:${s.forwardPort}/version`, this.options(s, { json: versionBody, method: 'POST', signal, timeout: 4000 }));
            break;
          } catch (error) {
            abortError(signal);
            if (attempt === 2) throw error;
            await delay(1500, undefined, { signal });
          }
        }
        checkBusiness(initial, '/version');
        s.baseUrl = `${options.scheme === 'http' ? 'http' : 'https'}://127.0.0.1:${s.forwardPort}`;
      }
      s.version = checkBusiness(await this.json(s, '/version', versionBody, signal), '/version').data;
      if (Number(s.version?.enpVer || 1) > 1) throw new ApiError(409, 'UNSUPPORTED_PROTOCOL', '手机加密协议版本高于当前实现');
      const user = this.accounts.account;
      const base = await this.json(s, '/base-info', { pc_name: this.state.name, pcDeviceId: this.state.deviceId,
        isLogin: Boolean(user?.openId), openid: user?.openId || '', pcLoginAccount: user?.phone || '',
        isAutoConnect: false, pcSystemType: process.env.VIVO_PC_SYSTEM_TYPE || '1', isSupVdfs: false,
        token: s.token, isPcOsSupportExtScreen: false, pcBleId: '', deviceAvatarUri: '' }, signal);
      s.info = checkBusiness(base, '/base-info').data;
      await this.heartbeat(s, signal);
      s.status = 'connected'; await this.adoptDevice(s, replacing); return this.public(s);
    } catch (error) {
      await this.cleanup(s); this.sessions.delete(s.id); throw error;
    }
  }
  sameDevice(a, b) {
    const left = a.info || {}, right = b.info || {};
    const ble = value => value === undefined || value === null || String(value) === '0' ? '' : String(value).toLowerCase();
    const x = ble(left.phoneBleId), y = ble(right.phoneBleId);
    if (x && y) return x === y;
    if (left.mobileDeviceId && right.mobileDeviceId) return left.mobileDeviceId === right.mobileDeviceId;
    return Boolean(a.serial && b.serial && a.serial === b.serial);
  }
  async adoptDevice(session, replacing) {
    const previous = [...this.sessions.values()].filter(s => s !== session && (s === replacing || this.sameDevice(s, session)));
    if (!previous.length) return;
    const stableId = replacing?.id || previous[0].id;
    for (const old of previous) {
      await this.onReplace?.(old.id);
      await this.cleanup(old);
      this.sessions.delete(old.id);
    }
    this.sessions.delete(session.id);
    session.id = stableId;
    this.sessions.set(stableId, session);
  }
  versionBody(s) { return { version: '7.0.6', connBaseVersionCode: 1155, pcSuiteVersionCode: 70007,
    timestamp: Date.now(), connectionId: s.connectionId, pcDeviceId: this.state.deviceId, isAutoConnect: false,
    token: s.token, isOversea: false, pcOsType: 'linux', pcOsVersion: os.release() }; }
  options(s, extra = {}) { return { rejectUnauthorized: s.rejectUnauthorized, localAddress: s.localIp, ...extra,
    headers: { newToken: s.token, version: '7.0.6', 'X-ES-HTTP-VERSION': '1', ...extra.headers } }; }
  json(s, route, body, signal) { return requestJson(s.baseUrl + route, this.options(s, { method: 'POST', json: body, signal })); }
  stream(s, route, extra = {}) { return request(s.baseUrl + route, this.options(s, extra)); }
  async connectUsb(s, options) {
    requireThat(typeof options.serial === 'string' && options.serial.length > 0, 'serial 必填');
    s.serial = options.serial; s.ip = '127.0.0.1';
    const { client } = this.adb();
    if (!(await client.isInstalled(s.serial, 'com.vivo.pcsuite'))) {
      if (!options.installApk) throw new ApiError(409, 'PHONE_APP_MISSING', '手机未安装官方 com.vivo.pcsuite；可显式设置 installApk=true 安装随包 APK');
      await client.install(s.serial, path.join(ROOT, 'pcsuite/updateApk/pcsuite.apk'));
    }
    await client.startActivity(s.serial, { action: 'vivo.intent.action.PCSUITE_INTENT', flags: 268435456, extras: { intent_from: 1104 } });
    const service = { component: 'com.vivo.pcsuite/.service.AdbPortalService', extras: { from: 'pc', foreground: 0,
      pc_name: this.state.name, token: s.token, user_name: this.accounts.account?.phone || '', connectionId: s.connectionId, isTransferConnect: 0 } };
    try { await client.startService(s.serial, service); }
    catch { await client.startService(s.serial, { ...service, foreground: 1 }); }
    // The shipped adbkit fork discards tcp:0's allocated-port result. Use the
    // official Android platform-tools CLI for this one operation, avoiding races.
    const result = await exec(process.env.ADB || 'adb', ['-s', s.serial, 'forward', 'tcp:0', 'tcp:10380'], { timeout: 15000 });
    s.forwardPort = Number(result.stdout.trim());
    if (!Number.isInteger(s.forwardPort) || s.forwardPort <= 0 || s.forwardPort > 65535) throw new Error('ADB did not return allocated forward port');
  }
  async heartbeat(s, signal) {
    const WebSocket = official('ws');
    const ws = s.ws = new WebSocket(s.baseUrl.replace(/^http/, 'ws') + '/ws/heart-beat',
      ['v1.hc.vivo.com.cn', s.token], { rejectUnauthorized: s.rejectUnauthorized, localAddress: s.localIp, handshakeTimeout: 10000, maxPayload: 4 * 1024 * 1024 });
    ws.on('error', () => { s.status = 'disconnected'; s.lastError = '心跳连接异常'; });
    ws.on('close', () => { clearInterval(s.heartTimer); s.status = 'disconnected'; });
    ws.on('message', data => {
      s.lastMessageAt = Date.now();
      if (data.toString() === 'close') { s.lastError = '手机关闭了会话'; ws.close(); }
    });
    await once(ws, 'open', { signal });
    ws.send('{"state":"normal"}');
    s.heartTimer = setInterval(() => { if (ws.readyState === WebSocket.OPEN) ws.send('{"state":"normal"}'); }, 5000);
    s.heartTimer.unref();
  }
  async files(id, params = {}) {
    const s = this.get(id);
    requireThat(s.status === 'connected', '手机会话已断开');
    const value = await this.json(s, '/pc_file_manager/channel', { category: '', data: '', fileCount: 0,
      sortCondition: 0, groupBy: 0, type: 'REQUEST_POSTS_HOMEDATA', pageIndex: 0, pageNumber: 200, firstFlag: false, ...params });
    if (value?.code !== undefined && String(value.code) !== '0000') throw new ApiError(502, 'FILE_LIST_REJECTED', '手机未允许读取文件', { phoneCode: value.code });
    return value;
  }
  async cleanup(s) {
    clearInterval(s.heartTimer); s.ws?.terminate();
    if (s.forwardPort) await exec(process.env.ADB || 'adb', ['-s', s.serial, 'forward', '--remove', `tcp:${s.forwardPort}`], { timeout: 5000 }).catch(() => {});
  }
  async pause(id) {
    const s = this.get(id); await this.cleanup(s); s.status = 'disconnected';
    return this.public(s);
  }
  async reconnect(id, signal) {
    const s = this.get(id);
    if (s.status === 'connected') return this.public(s);
    if (s.reconnecting) throw new ApiError(409, 'RECONNECT_ACTIVE', '设备正在重新连接');
    s.reconnecting = true;
    try {
      await this.cleanup(s);
      const url = new URL(s.baseUrl);
      const result = await this.connect(s.mode === 'usb'
        ? { mode: 'usb', serial: s.serial, verifyTls: s.rejectUnauthorized }
        : { mode: 'existing', ip: s.ip, pcIp: s.localIp, token: s.token,
            port: Number(url.port || (url.protocol === 'http:' ? 80 : 443)),
            scheme: url.protocol.slice(0, -1), transport: s.transport || s.mode,
            verifyTls: s.rejectUnauthorized }, signal, s);
      return result;
    } finally { s.reconnecting = false; }
  }
  async disconnect(id) { const s = this.get(id); await this.cleanup(s); this.sessions.delete(id); }
  async close() { await Promise.all([...this.sessions.values()].map(s => this.cleanup(s))); this.sessions.clear(); }
}
