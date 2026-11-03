import test from 'node:test';
import assert from 'node:assert/strict';
import { networkInterfaces, selectInterface } from '../src/network.mjs';

const records = networkInterfaces({
  lo: [{ family: 'IPv4', address: '127.0.0.1', internal: true }],
  wlp2s0: [{ family: 'IPv4', address: '10.203.106.63', netmask: '255.254.0.0', cidr: '10.203.106.63/15', internal: false }, { family: 'IPv6', address: '::1', internal: false }],
  singbox_tun: [{ family: 'IPv4', address: '172.18.0.1', netmask: '255.255.255.252', internal: false }]
});

test('LAN auto-selection prefers Wi-Fi over a tunnel and does not expose MAC addresses', () => {
  assert.equal(records.length, 2);
  assert.equal(selectInterface(undefined, { interfaces: records }).address, '10.203.106.63');
  assert.equal(records.find(r => r.name === 'singbox_tun').recommended, false);
  assert(!JSON.stringify(records).includes('mac'));
});

test('example or stale local IP is rejected before creating network sockets', () => {
  assert.throws(() => selectInterface('192.168.1.10', { interfaces: records }), error => {
    assert.equal(error.status, 400); assert.equal(error.code, 'LOCAL_IP_NOT_ASSIGNED');
    assert.equal(error.details.interfaces[0].address, '10.203.106.63'); return true;
  });
  assert.equal(selectInterface('172.18.0.1', { interfaces: records }).name, 'singbox_tun');
});

test('multiple LAN interfaces require a selection unless phone subnet disambiguates them', () => {
  const interfaces = [...records, { name: 'eth0', address: '192.168.50.1', netmask: '255.255.255.0', recommended: true }];
  assert.throws(() => selectInterface(undefined, { interfaces }), { code: 'NETWORK_INTERFACE_REQUIRED' });
  assert.equal(selectInterface(undefined, { interfaces, targetIp: '10.202.1.5' }).address, '10.203.106.63');
  assert.equal(selectInterface(undefined, { interfaces, targetIp: '192.168.50.25' }).address, '192.168.50.1');
  assert.throws(() => selectInterface(undefined, { interfaces: [] }), { code: 'NO_LAN_INTERFACE' });
});
