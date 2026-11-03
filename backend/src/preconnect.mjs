import crypto from 'node:crypto';
import net from 'node:net';
import { ApiError, tokenFor } from './core.mjs';
import { requestJson } from './http.mjs';
import { BluetoothChannel } from './bluetooth.mjs';
import { connectPrimaryRequest, deviceInfoRequest, isPrimaryAccepted } from './preconnect-protocol.mjs';
import { sameDirectSubnet } from './p2p.mjs';

const DIRECTORY = 'https://connection-center.vivo.com.cn/device/list';
const mac = /^(?:[0-9a-f]{2}:){5}[0-9a-f]{2}$/i;
export function validPreconnectPeer(peer) {
  return peer && ['deviceId', 'randomId', 'accountOpenId'].every(key => typeof peer[key] === 'string'
    && peer[key].length > 0 && peer[key].length <= 512 && !peer[key].includes('\0'))
    && typeof peer.bluetooth === 'string' && mac.test(peer.bluetooth);
}

export class OfficialPreconnect {
  constructor(state, accounts, { request = requestJson, open = options => BluetoothChannel.open(options) } = {}) {
    Object.assign(this, { state, accounts, request, open });
  }
  async directory(account, signal) {
    if (!account?.openId || !account.token || !account.deviceId) throw new ApiError(409, 'PRECONNECT_LOGIN_REQUIRED', '同账号自动连接需要在客户端登录 vivo 账号');
    if (this.cache?.account === account && this.cache.expires > Date.now()) return this.cache.devices;
    // The token is bound to the login callback's deviceId. The local PC UUID is
    // not interchangeable with that header (verified against the official API).
    const response = await this.request(DIRECTORY, { signal, timeout: 10000, headers: {
      token: account.token, userId: account.openId, deviceId: account.deviceId,
      source: '2', version: '7.0.6.0', countryCode: account.regionCode || 'CN'
    } });
    if (response?.code !== 0 || !Array.isArray(response.data)) throw new ApiError(502, 'PRECONNECT_DIRECTORY_REJECTED', '官方设备发现接口未成功，请核对账号登录状态', { code: response?.code });
    const devices = response.data.slice(0, 100).filter(d => d?.type === 1 && d.userId === account.openId)
      .map(d => ({ deviceId: d.deviceId, randomId: d.ext?.randomId, bluetooth: d.bluetooth,
        accountOpenId: account.openId, name: d.name })).filter(validPreconnectPeer);
    this.cache = { account, expires: Date.now() + 60000, devices }; return devices;
  }
  async peer(session, signal) {
    const account = this.accounts.account;
    if (!account?.openId) throw new ApiError(409, 'PRECONNECT_LOGIN_REQUIRED', '同账号自动连接需要在客户端登录 vivo 账号');
    const cached = validPreconnectPeer(session.preconnect) && session.preconnect.accountOpenId === account.openId ? session.preconnect : null;
    let devices;
    try { devices = await this.directory(account, signal); }
    catch (error) { if (signal?.aborted || !cached) throw error; return cached; }
    const candidates = cached ? devices.filter(d => d.deviceId === cached.deviceId)
      : devices.filter(d => d.name === session.info?.mobileDeviceName);
    if (candidates.length !== 1) throw new ApiError(409, 'PRECONNECT_DEVICE_UNAVAILABLE', '官方发现列表中没有唯一匹配的历史手机');
    const { name, ...peer } = candidates[0]; return peer;
  }
  async connect(session, network, signal, complete = options => options, authorize = () => undefined) {
    const account = this.accounts.account;
    const peer = await this.peer(session, signal);
    // Enable the adapter once on an app-start reconnect attempt. Subsequent
    // retries respect a user switching the radio off during this app lifetime.
    const powerOn = !this.radioInitialized; this.radioInitialized = true;
    const channel = await this.open({ address: peer.bluetooth, timeout: 60000, signal, powerOn });
    let releasePairing;
    try {
      const info = deviceInfoRequest({ deviceId: this.state.deviceId, deviceName: this.state.name,
        openId: account.openId, accountName: account.phone || '', isConnectNow: true });
      channel.send(info);
      const response = (await channel.waitFor(f => f.channel === '' && f.message.cmd === 'device_info' && f.message.reqId === info.reqId)).message;
      if (response.code !== '0000' || response.data?.openId !== account.openId) {
        throw new ApiError(409, 'PRECONNECT_ACCOUNT_MISMATCH', '手机与客户端的 vivo 账号不一致或预连接被拒绝');
      }
      releasePairing = await authorize(peer);
      const token = tokenFor(network.ip), connectionId = crypto.randomUUID();
      const request = connectPrimaryRequest({ deviceId: this.state.deviceId, deviceName: this.state.name,
        openId: account.openId, accountName: account.phone || '', phoneDeviceId: peer.deviceId,
        phoneRandomId: peer.randomId, token, connectionId, ssid: network.ssid,
        password: network.passphrase, deviceAddress: network.bssid,
        connectType: '1', businessConnectType: 3, pcPcsuiteVersion: 7060, isAutoConnect: true });
      channel.send(request);
      const result = (await channel.waitFor(f => f.channel === '' && f.message.cmd === 'connect_primary'
        && f.message.reqId === request.reqId, 35000)).message;
      if (!isPrimaryAccepted(result, request.reqId)) {
        this.cache = null;
        const busy = result.data?.userDialogSelectResult === 'busy';
        const value = String(result.data?.userDialogSelectResult || '');
        const outcome = /^(agree|busy|refuse|failed|[0-9]{1,3})$/.test(value) ? value : 'unknown';
        const authenticationFailed = outcome === '28' || outcome === '15';
        throw new ApiError(409, busy ? 'PRECONNECT_PHONE_BUSY' : authenticationFailed ? 'PRECONNECT_AUTH_FAILED' : 'PRECONNECT_PHONE_REFUSED',
          busy ? '手机当前忙碌，稍后自动重试' : authenticationFailed ? '手机预连接认证未通过，正在重新获取发现信息' : '手机拒绝了自动建链，请确认手机 Wi-Fi、解锁状态和互联授权', { code: result.code, result: outcome });
      }
      if (!net.isIPv4(result.localAddress) || !sameDirectSubnet(result.localAddress, network.ip)) {
        throw new ApiError(502, 'PRECONNECT_ADDRESS_INVALID', '手机返回的地址不属于当前直连组');
      }
      return await complete({ mode: 'existing', transport: 'wifi-direct', ip: result.localAddress,
        pcIp: network.ip, token, connectionId, isAutoConnect: true, preconnect: peer });
    } finally { try { await releasePairing?.(); } finally { await channel.close(); } }
  }
}
