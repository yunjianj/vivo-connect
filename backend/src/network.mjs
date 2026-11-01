import os from 'node:os';
import net from 'node:net';
import { ApiError } from './core.mjs';

const virtualName = /^(?:lo$|p2p-|docker|veth|br-|virbr|vmnet|vboxnet|tun|tap|wg\d|tailscale|utun|zt)|(?:^|[_-])(?:tun|vpn)(?:$|[_-])/i;
export function networkInterfaces(snapshot = os.networkInterfaces()) {
  return Object.entries(snapshot).flatMap(([name, records]) => (records || [])
    .filter(r => (r.family === 'IPv4' || r.family === 4) && !r.internal && net.isIPv4(r.address))
    .map(r => ({ name, address: r.address, netmask: r.netmask, cidr: r.cidr,
      recommended: !virtualName.test(name) })));
}
function ipv4Number(ip) { return ip.split('.').reduce((n, octet) => ((n << 8) | Number(octet)) >>> 0, 0); }
export function selectInterface(address, { targetIp, interfaces = networkInterfaces() } = {}) {
  const details = { interfaces };
  if (address !== undefined) {
    const found = interfaces.find(r => r.address === address);
    if (!net.isIPv4(address) || !found) throw new ApiError(400, 'LOCAL_IP_NOT_ASSIGNED',
      '指定地址未分配给本机网卡。请使用 GET /api/network/interfaces 返回的 address，或省略 interfaceIp/pcIp 自动选择', details);
    return found;
  }
  const preferred = interfaces.filter(r => r.recommended);
  if (net.isIPv4(targetIp)) {
    const matches = preferred.filter(r => net.isIPv4(r.netmask) &&
      ((ipv4Number(r.address) & ipv4Number(r.netmask)) >>> 0) === ((ipv4Number(targetIp) & ipv4Number(r.netmask)) >>> 0));
    const ranked = matches.sort((a,b) => ipv4Number(b.netmask) - ipv4Number(a.netmask));
    if (ranked.length === 1 || (ranked.length > 1 && ranked[0].netmask !== ranked[1].netmask)) return ranked[0];
  }
  if (preferred.length === 1) return preferred[0];
  throw new ApiError(400, preferred.length ? 'NETWORK_INTERFACE_REQUIRED' : 'NO_LAN_INTERFACE',
    preferred.length ? '存在多个可用网卡，请从 interfaces 中明确指定 interfaceIp/pcIp' : '未找到可自动选择的局域网 IPv4 网卡，请检查 Wi-Fi/有线连接或明确指定网卡地址', details);
}
