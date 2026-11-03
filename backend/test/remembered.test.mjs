import test from 'node:test';
import assert from 'node:assert/strict';
import { RememberedDevices } from '../src/remembered.mjs';
import { Jobs } from '../src/jobs.mjs';

test('automatic reconnect backs off failures, limits parallel attempts, and respects pause and stop', async () => {
  const s = { id: 'phone', remembered: true, status: 'disconnected', autoConnect: true };
  let attempts = 0;
  const jobs = new Jobs();
  const phones = { sessions: new Map([['phone', s]]), reconnect: async () => { attempts++; throw new Error('unreachable'); } };
  const remembered = new RememberedDevices({ dir: '/unused' }, phones, jobs);
  remembered.stopped = false;
  remembered.tick(); remembered.tick();
  assert.equal(jobs.items.size, 1);
  await [...jobs.items.values()][0].done;
  assert.equal(attempts, 1); assert.equal(s.autoConnect, true); assert(s.retryAt >= Date.now() + 4500);
  remembered.tick(); assert.equal(jobs.items.size, 1);
  s.retryAt = 0; remembered.tick(); await [...jobs.items.values()].at(-1).done;
  assert.equal(attempts, 2); assert(s.retryAt >= Date.now() + 9500);
  s.retryAt = 0; s.autoConnect = false; remembered.tick(); assert.equal(attempts, 2);
  s.autoConnect = true; remembered.stop(); remembered.tick(); assert.equal(attempts, 2);
});

test('Wi-Fi Direct waits for the phone to join and resumes immediately without stale backoff', async () => {
  const s = { id: 'phone', remembered: true, status: 'disconnected', autoConnect: true, retryAt: Date.now()+60000 };
  let ready = false, attempts = 0;
  const jobs = new Jobs();
  const phones = { sessions: new Map([['phone',s]]), reconnectState: () => ready ? null : { code:'P2P_PHONE_NOT_JOINED',message:'waiting for station' }, reconnect: async () => { attempts++; return {}; } };
  const remembered = new RememberedDevices({dir:'/unused'},phones,jobs); remembered.stopped=false;
  remembered.tick(); remembered.tick(); assert.equal(jobs.items.size,0); assert.equal(s.reconnectWait.code,'P2P_PHONE_NOT_JOINED');
  assert.equal(s.autoConnect,true);
  ready=true; remembered.tick(); assert.equal(jobs.items.size,1);
  await [...jobs.items.values()][0].done; assert.equal(attempts,1); assert.equal(s.reconnectWait,undefined);
});

test('official phone busy retries leave the 30 second preconnection lease time to expire', async () => {
  const s = { id: 'phone', remembered: true, autoConnect: true };
  const remembered = new RememberedDevices({ dir: '/unused' }, {}, {});
  await remembered.failed(s, { code: 'PRECONNECT_PHONE_BUSY', message: 'busy' });
  assert(s.retryAt >= Date.now() + 34500);
  assert.equal(s.autoConnect, true);
});
