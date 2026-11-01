#!/usr/bin/env python3
"""Static-reconstruction reference for vivo LAN discovery and legacy pairing.

No network access occurs on import. Discovery and pairing require explicit CLI
subcommands. Modern sign generation is offline and needs the peer challenge.
"""
import argparse
import base64
import hashlib
import ipaddress
import json
import secrets
import socket
import string
import struct
import subprocess
import time
import uuid

MAGIC = b'PAY_LOAD_1'
DISCOVERY_GROUP = '239.255.255.250'
DISCOVERY_PORT = 2200
PAIRING_PORT = 10191
MAX_FRAME = 1024 * 1024  # Implementation bound, not an inferred server limit.


def connection_token(pc_ip, nonce=None):
    nonce = nonce or ''.join(secrets.choice(string.ascii_lowercase + string.ascii_uppercase + string.digits) for _ in range(4))
    return hashlib.sha256((pc_ip + nonce).encode('utf-8')).hexdigest()


def frame(payload):
    body = json.dumps(payload, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
    if len(body) > MAX_FRAME:
        raise ValueError('frame exceeds local implementation bound')
    return MAGIC + struct.pack('>I', len(body)) + body


class FrameDecoder:
    """Incremental decoder: handles fragmented and coalesced TCP reads."""
    def __init__(self):
        self.buffer = bytearray()

    def feed(self, data):
        self.buffer.extend(data)
        messages = []
        while len(self.buffer) >= 14:
            if self.buffer[:10] != MAGIC:
                raise ValueError('unexpected pairing frame magic')
            length = struct.unpack('>I', self.buffer[10:14])[0]
            if not 0 < length <= MAX_FRAME:
                raise ValueError('invalid or excessive pairing frame length')
            if len(self.buffer) < 14 + length:
                break
            messages.append(json.loads(self.buffer[14:14+length].decode('utf-8')))
            del self.buffer[:14+length]
        return messages


def search_packet(device_id, open_id=''):
    for text in [device_id, open_id]:
        if any(c in text for c in '\r\n'):
            raise ValueError('discovery header values cannot contain newlines')
    return ('M-SEARCH * HTTP/1.1\r\n'
            f'Host:{DISCOVERY_GROUP}:{DISCOVERY_PORT}\r\n'
            'Man:"ssdp:discover"\r\nMX:5\r\nST:vivo_connect\r\n'
            f'deviceId:{device_id}\r\nopenId:{open_id}\r\n'
            'Service:com.vivo.share.CONNECT_PC\r\n\r\n').encode('utf-8')


def parse_discovery(data):
    text = data.decode('utf-8').rstrip('\0\r\n ')
    lines = text.split('\r\n')
    if not lines or lines[0] not in ['RESPONSE * HTTP/1.1', 'NOTIFY * HTTP/1.1', 'M-SEARCH * HTTP/1.1']:
        raise ValueError('not a vivo discovery packet')
    headers = {}
    for line in lines[1:]:
        if ':' in line:
            k, v = line.split(':', 1)
            headers[k.lower()] = v.strip()
    result = {'startLine': lines[0], 'headers': headers}
    if 'compatgsonstr' in headers:
        decoded = base64.b64decode(headers['compatgsonstr'], validate=True)
        result['device'] = json.loads(decoded.decode('utf-8'))
    return result


def legacy_request(pc_device_id, pc_name, token, open_id='', account=''):
    # extra_info is a JSON STRING in the Payload DTO, not an embedded object.
    return {'bytes': [0], 'deviceName': pc_name, 'channel': 0,
            'id': 87654321, 'open_Id': open_id,
            'service_id': 'com.vivo.pcsuite.SERVICE',
            'target_id': pc_device_id, 'account': account, 'type': 1,
            'extra_info': json.dumps({'connectType': 1, 'token': token}, separators=(',', ':'))}


def modern_sign(peer_seed, pc_open_id, connection_id, token, seed=None):
    """Reconstruction from x86 code; not a device-validated handshake.

    peer_seed must come from the real peer's discovery/preconnection state.
    This function does not discover that state or perform mobile authorization.
    """
    seed = seed or str(uuid.uuid4())
    if not token or not peer_seed:
        raise ValueError('connection token and peer challenge are required')
    key = hashlib.sha256((peer_seed + seed).encode('utf-8')).digest()
    plaintext = '|'.join([pc_open_id, connection_id, token]).encode('utf-8')
    encrypted = subprocess.run(['openssl', 'enc', '-aes-256-cbc', '-K', key.hex(),
                                '-iv', '00'*16], input=plaintext,
                               stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True).stdout
    return {'seed': seed, 'sign': encrypted.hex()}


def discover(interface, device_id, timeout=5):
    ipaddress.IPv4Address(interface)
    deadline = time.monotonic() + timeout
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP) as sock:
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        sock.bind(('', DISCOVERY_PORT))
        interface_bytes = socket.inet_aton(interface)
        sock.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_IF, interface_bytes)
        sock.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP,
                        socket.inet_aton(DISCOVERY_GROUP) + interface_bytes)
        sock.sendto(search_packet(device_id), (DISCOVERY_GROUP, DISCOVERY_PORT))
        seen = set()
        while time.monotonic() < deadline:
            sock.settimeout(max(.01, deadline-time.monotonic()))
            try:
                data, address = sock.recvfrom(65535)
            except socket.timeout:
                break
            if address[0] == interface or (address[0], data) in seen:
                continue
            seen.add((address[0], data))
            try:
                result = parse_discovery(data)
                result['senderIp'] = address[0]
                yield result
            except (ValueError, UnicodeError):
                continue


def pair_legacy(ip, pc_ip, pc_device_id, pc_name, timeout=60):
    ipaddress.IPv4Address(ip)
    token = connection_token(pc_ip)
    decoder = FrameDecoder()
    intermediate = []
    with socket.create_connection((ip, PAIRING_PORT), timeout=5) as sock:
        sock.sendall(frame(legacy_request(pc_device_id, pc_name, token)))
        deadline = time.monotonic() + timeout
        while time.monotonic() < deadline:
            sock.settimeout(max(.01, deadline-time.monotonic()))
            data = sock.recv(16384)
            if not data:
                raise ConnectionError('peer closed before pairing result')
            for response in decoder.feed(data):
                status = response.get('bytes') if isinstance(response, dict) else None
                if status and isinstance(status, list):
                    if status[0] in (11, 13):
                        intermediate.append(response)
                        continue
                    return {'accepted': status[0] == 1, 'pairingStatus': status[0],
                            'response': response, 'intermediateResponses': intermediate,
                            'session': {'ip': ip, 'port': 10380, 'connectionToken': token}
                            if status[0] == 1 else None,
                            'businessSessionVerified': False}
    raise TimeoutError('no pairing result')


def main():
    p = argparse.ArgumentParser(description=__doc__)
    sub = p.add_subparsers(dest='command', required=True)
    d = sub.add_parser('discover', help='send vivo discovery on the selected LAN interface')
    d.add_argument('--interface', required=True)
    d.add_argument('--device-id', required=True)
    d.add_argument('--timeout', type=float, default=5)
    r = sub.add_parser('pair-legacy', help='request legacy pairing; user must accept on phone')
    r.add_argument('--ip', required=True)
    r.add_argument('--pc-ip', required=True)
    r.add_argument('--device-id', required=True)
    r.add_argument('--name', default='vivo-port-prototype')
    r.add_argument('--timeout', type=float, default=60)
    args = p.parse_args()
    if args.timeout <= 0:
        p.error('--timeout must be positive')
    if args.command == 'discover':
        for result in discover(args.interface, args.device_id, args.timeout):
            print(json.dumps(result, ensure_ascii=False))
    else:
        print(json.dumps(pair_legacy(args.ip, args.pc_ip, args.device_id, args.name, args.timeout), ensure_ascii=False))


if __name__ == '__main__':
    main()
