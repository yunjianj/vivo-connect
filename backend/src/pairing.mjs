import net from 'node:net';
import dgram from 'node:dgram';
import { ApiError, requireThat } from './core.mjs';
import { selectInterface } from './network.mjs';

const MAGIC = Buffer.from('PAY_LOAD_1');
export function encodeFrame(data) {
  const body = Buffer.from(JSON.stringify(data));
  const head = Buffer.alloc(14); MAGIC.copy(head); head.writeUInt32BE(body.length, 10);
  return Buffer.concat([head, body]);
}
export class Decoder {
  buffer = Buffer.alloc(0);
  feed(data) {
    this.buffer = Buffer.concat([this.buffer, data]); const values = [];
    while (this.buffer.length >= 14) {
      if (!this.buffer.subarray(0, 10).equals(MAGIC)) throw new Error('Invalid pairing magic');
      const size = this.buffer.readUInt32BE(10);
      if (!size || size > 1048576) throw new Error('Invalid pairing frame length');
      if (this.buffer.length < size + 14) break;
      values.push(JSON.parse(this.buffer.subarray(14, size+14).toString('utf8')));
      this.buffer = this.buffer.subarray(size+14);
    }
    return values;
  }
}
export function searchPacket(deviceId, openId = '') {
  requireThat(!/[\r\n]/.test(deviceId + openId), '设备标识包含换行');
  return Buffer.from(`M-SEARCH * HTTP/1.1\r\nHost:239.255.255.250:2200\r\nMan:"ssdp:discover"\r\nMX:5\r\nST:vivo_connect\r\ndeviceId:${deviceId}\r\nopenId:${openId}\r\nService:com.vivo.share.CONNECT_PC\r\n\r\n`);
}
export function parseDiscovery(packet, ip) {
  const [start, ...lines] = packet.toString('utf8').split('\r\n');
  if (!['RESPONSE * HTTP/1.1', 'NOTIFY * HTTP/1.1'].includes(start)) return null;
  const headers = {};
  for (const line of lines) { const i = line.indexOf(':'); if (i > 0) headers[line.slice(0,i).toLowerCase()] = line.slice(i+1).trim(); }
  const device = headers.compatgsonstr ? JSON.parse(Buffer.from(headers.compatgsonstr, 'base64').toString('utf8')) : {};
  return { ip, device, headers };
}
export function discover({ interfaceIp, deviceId, openId, timeout = 5000 } = {}) {
  interfaceIp = selectInterface(interfaceIp).address;
  requireThat(net.isIPv4(interfaceIp), 'interfaceIp 必须是本机 IPv4');
  requireThat(Number.isFinite(timeout) && timeout >= 100 && timeout <= 15000, 'timeout 应为 100–15000 毫秒');
  return new Promise((resolve, reject) => {
    const sock = dgram.createSocket({ type: 'udp4', reuseAddr: true }); const found = new Map(); let timer, settled = false;
    const finish = error => {
      if (settled) return; settled = true; clearTimeout(timer);
      try { sock.close(); } catch { /* A failed bind may already have closed it. */ }
      if (error && ['EADDRNOTAVAIL', 'ENODEV', 'ENETUNREACH'].includes(error.code)) {
        error = new ApiError(400, 'NETWORK_INTERFACE_UNAVAILABLE', '网卡地址已变化或无法发送组播，请重新查询 /api/network/interfaces', { interfaceIp });
      }
      error ? reject(error) : resolve([...found.values()]);
    };
    sock.once('error', finish);
    sock.on('message', (buf, peer) => {
      if (buf.length > 65507 || peer.address === interfaceIp) return;
      try { const item = parseDiscovery(buf, peer.address); if (item) { item.interfaceIp = interfaceIp; found.set(peer.address + ':' + (item.device?.deviceId || ''), item); } } catch { /* Ignore unrelated malformed datagrams. */ }
    });
    sock.bind(2200, () => {
      try {
        sock.setMulticastInterface(interfaceIp); sock.addMembership('239.255.255.250', interfaceIp);
        sock.send(searchPacket(deviceId, openId), 2200, '239.255.255.250', error => { if (error) finish(error); });
        timer = setTimeout(() => finish(), timeout);
      } catch (e) { finish(e); }
    });
  });
}
export function pairLan({ ip, port = 10191, state, account, token, timeout = 60000, signal, localAddress }) {
  requireThat(net.isIPv4(ip), 'ip 必须是手机 IPv4');
  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ host: ip, port, signal, localAddress }); const decoder = new Decoder();
    let settled = false;
    const finish = (error, value) => { if (settled) return; settled = true; clearTimeout(timer); socket.destroy(); error ? reject(error) : resolve(value); };
    const timer = setTimeout(() => finish(new ApiError(504, 'PAIR_TIMEOUT', '等待手机授权超时；目标版本可能不支持旧版局域网配对')), timeout);
    socket.on('error', error => finish(error));
    socket.on('end', () => finish(new Error('Phone closed before pairing result')));
    socket.on('connect', () => socket.write(encodeFrame({ bytes: [0], deviceName: state.name, channel: 0,
      id: 87654321, open_Id: account?.openId || '', service_id: 'com.vivo.pcsuite.SERVICE',
      target_id: state.deviceId, account: account?.phone || '', type: 1,
      extra_info: JSON.stringify({ connectType: 1, token }) })));
    socket.on('data', data => {
      try {
        for (const response of decoder.feed(data)) {
          const status = response?.bytes?.[0];
          if (status === undefined || status === 11 || status === 13) continue;
          if (status === 1) finish(null, response);
          else finish(new ApiError(409, 'PAIR_REJECTED', '手机未接受配对', { pairingStatus: status }));
        }
      } catch (e) { finish(e); }
    });
  });
}
