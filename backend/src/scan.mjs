import crypto from 'node:crypto';
import net from 'node:net';
import { ApiError, requireThat, tokenFor, abortError } from './core.mjs';
import { selectInterface } from './network.mjs';
import { renderQr } from './qr.mjs';
import { requestJson } from './http.mjs';

const BASE = 'https://psuite.vivo.com.cn/vbusiness';
// Public production RSA key from the official rsaEncrypt implementation.
const PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDD/1z/ZaMFv7uz1kvqGjJpw8B8tHWukJIey5Y4RRpBiBesxPhcfXFqaYA3OnamQAoJnCY+7Vrmk6j6x8px7Tq4iF8Ebim77dfFEpqvfJaVXdg8gzIVoGO/5L6ucSx9NDEl7T3CiFOCy4mPlTQ4nOksidxvLi9mpNAaKSdvtGw01wIDAQAB';
export function encryptPid(id) {
  return crypto.publicEncrypt({ key: crypto.createPublicKey({ key: Buffer.from(PUBLIC_KEY, 'base64'), type: 'spki', format: 'der' }),
    padding: crypto.constants.RSA_PKCS1_PADDING }, Buffer.from(id)).toString('base64');
}
export function scanUrl({ sid, token, state, account }) {
  let host = state.name.replace(/[\u{10000}-\u{10FFFF}]/gu, '口');
  if (host.length > 6) host = host.slice(0,3) + '****' + host.slice(-3);
  const url = new URL(BASE);
  url.search = new URLSearchParams({ s: sid, f: 'pc', t: token, u: account?.phone || '', d: host,
    mac: '', ls: 'false', pb: '0', id: state.deviceId });
  return url.toString();
}
export class ScanManager {
  constructor(state, accounts, phones, jobs, cloudRequest = requestJson, { render = renderQr, selectNetwork = selectInterface } = {}) {
    Object.assign(this, { state, accounts, phones, jobs, cloudRequest, render, selectNetwork });
  }
  async start({ pcIp } = {}) {
    pcIp = this.selectNetwork(pcIp).address;
    requireThat(net.isIPv4(pcIp), 'pcIp 必须是本机 IPv4');
    const pid = encryptPid(this.state.deviceId);
    const response = await this.cloudRequest(BASE + '/scan/sid', { headers: { pid }, timeout: 10000 });
    if (response?.code !== 0 || typeof response.data?.sid !== 'string' ||
        !Number.isFinite(response.data?.timeout) || response.data.timeout <= 0 || response.data.timeout > 600000) {
      throw new ApiError(502, 'SCAN_SID_FAILED', '官方扫码接口未分配有效 sid', { cloudCode: response?.code });
    }
    const { sid, timeout } = response.data;
    const token = tokenFor(pcIp);
    const qrText = scanUrl({ sid, token, state: this.state, account: this.accounts.account });
    const qrImage = await this.render(qrText);
    const job = this.jobs.create('scan-connect', async (job, signal) => {
      job.phase = 'waiting-for-phone';
      const result = await this.cloudRequest(BASE + '/scan/getPhone', { method: 'POST', json: { sid },
        headers: { pid, userId: '71f6033b2caa9784' }, timeout: timeout + 3000, signal });
      if (result?.code === 10003 || result?.code === '10003') throw new ApiError(410, 'SCAN_EXPIRED', '等待手机扫描超时，请扫描刷新后的二维码；生成二维码本身不代表手机已扫码', { cloudCode: result.code });
      if (result?.code !== 0 || typeof result.data !== 'string') throw new ApiError(502, 'SCAN_PHONE_FAILED', '官方扫码结果未成功或已过期，请创建新二维码', { cloudCode: result?.code });
      let phone;
      try { phone = JSON.parse(result.data); }
      catch { throw new ApiError(502, 'SCAN_PHONE_INVALID', '官方扫码结果内容不是有效 JSON'); }
      const ips = (Array.isArray(phone.ip) ? phone.ip : [phone.ip]).filter(net.isIPv4);
      if (!ips.length) throw new ApiError(502, 'SCAN_PHONE_INVALID', '扫码结果未提供可连接的 IPv4');
      job.phase = 'connecting'; job.phoneIps = ips; job.attempts = []; let lastError;
      for (const ip of ips) {
        abortError(signal);
        try { return await this.phones.connect({ mode: 'existing', ip, token, pcIp, connectionId: phone.connectionId }, signal); }
        catch (error) { lastError = error; job.attempts.push({ ip, code: error.code || 'CONNECTION_FAILED' }); }
      }
      abortError(signal);
      if (job.attempts.every(a => ['ECONNREFUSED','EHOSTUNREACH','ENETUNREACH','ETIMEDOUT','UPSTREAM_TIMEOUT'].includes(a.code))) {
        throw new ApiError(502, 'PHONE_UNREACHABLE', '官方扫码已返回手机地址，但本机无法访问手机服务；请检查校园网设备隔离、防火墙或改用手机热点/USB。此任务使用校园网局域网通道，可切换到 Wi-Fi Direct 独立通路', { ips, attempts: job.attempts });
      }
      throw lastError;
    });
    // QR text intentionally contains the short-lived pairing token, just as the
    // official QR does. Do not log it or publish it through unauthenticated APIs.
    return { jobId: job.id, qrText, qrImage, pcIp, expiresInMs: timeout };
  }
}
