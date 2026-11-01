#!/usr/bin/env python3
"""Offline tests of the reconstructed codec; no phone/network is contacted."""
import base64
import hashlib
import json
import shutil
import struct
import subprocess
import unittest
from unittest.mock import patch
import wireless_pairing as w


class CodecTests(unittest.TestCase):
    def test_token(self):
        self.assertEqual(w.connection_token('192.168.1.2', 'aB19'), hashlib.sha256(b'192.168.1.2aB19').hexdigest())

    def test_utf8_byte_length(self):
        packet = w.frame({'name': '手机📱'})
        self.assertEqual(packet[:10], b'PAY_LOAD_1')
        self.assertEqual(struct.unpack('>I', packet[10:14])[0], len(packet[14:]))
        self.assertEqual(json.loads(packet[14:]), {'name': '手机📱'})

    def test_fragmentation_and_coalescing(self):
        stream = w.frame({'bytes': [11]}) + w.frame({'bytes': [1]})
        for chunk in [1, 7, 14, len(stream)]:
            decoder = w.FrameDecoder()
            results = []
            for i in range(0, len(stream), chunk):
                results.extend(decoder.feed(stream[i:i+chunk]))
            self.assertEqual(results, [{'bytes': [11]}, {'bytes': [1]}])
            self.assertFalse(decoder.buffer)

    def test_invalid_frames(self):
        for packet in [b'wrongmagic' + struct.pack('>I', 2) + b'{}',
                       w.MAGIC + struct.pack('>I', 0),
                       w.MAGIC + struct.pack('>I', w.MAX_FRAME+1)]:
            with self.assertRaises(ValueError):
                w.FrameDecoder().feed(packet)

    def test_discovery(self):
        device = {'deviceId': 'phone', 'deviceName': '测试手机', 'port': 10191}
        encoded = base64.b64encode(json.dumps(device, ensure_ascii=False).encode())
        result = w.parse_discovery(b'RESPONSE * HTTP/1.1\r\nDATE:2026-11-01 10:00:00\r\ncompatGsonStr:' + encoded + b'\r\n\r\n')
        self.assertEqual(result['device'], device)
        self.assertEqual(result['headers']['date'], '2026-11-01 10:00:00')
        self.assertIn(b'Host:239.255.255.250:2200\r\n', w.search_packet('pc'))
        self.assertTrue(w.search_packet('pc').endswith(b'\r\n\r\n'))
        with self.assertRaises(ValueError):
            w.search_packet('pc\r\nInjected:1')

    def test_legacy_nested_json_string(self):
        request = w.legacy_request('pc-id', '电脑', 'tok')
        self.assertEqual(request['target_id'], 'pc-id')
        self.assertEqual(request['bytes'], [0])
        self.assertIsInstance(request['extra_info'], str)
        self.assertEqual(json.loads(request['extra_info']), {'connectType': 1, 'token': 'tok'})

    @unittest.skipUnless(shutil.which('openssl'), 'openssl unavailable')
    def test_modern_sign_decryption(self):
        seed = '12345678-1234-4234-8234-123456789abc'
        result = w.modern_sign('peer-challenge', 'pc-open-id', 'connection-id', 'token', seed)
        key = hashlib.sha256(('peer-challenge' + seed).encode()).hexdigest()
        plain = subprocess.run(['openssl', 'enc', '-d', '-aes-256-cbc', '-K', key,
                                '-iv', '00'*16], input=bytes.fromhex(result['sign']),
                               stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True).stdout
        self.assertEqual(plain, b'pc-open-id|connection-id|token')
        self.assertEqual(result['seed'], seed)
        self.assertEqual(result['sign'], result['sign'].lower())
        with self.assertRaises(ValueError):
            w.modern_sign('', '', '', 'token')

    def test_busy_then_accept(self):
        class FakeSocket:
            def __enter__(self): return self
            def __exit__(self, *args): pass
            def sendall(self, data): self.request = data
            def settimeout(self, timeout): pass
            def recv(self, size): return w.frame({'bytes': [11]}) + w.frame({'bytes': [1]})
        with patch.object(w.socket, 'create_connection', return_value=FakeSocket()):
            result = w.pair_legacy('192.0.2.1', '192.0.2.2', 'pc-id', 'test')
        self.assertTrue(result['accepted'])
        self.assertFalse(result['businessSessionVerified'])
        self.assertEqual(len(result['intermediateResponses']), 1)
        self.assertEqual(len(result['session']['connectionToken']), 64)


if __name__ == '__main__':
    unittest.main(verbosity=2)
