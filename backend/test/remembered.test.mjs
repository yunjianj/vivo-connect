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

test('Wi-Fi Direct waits for the direct service and resumes immediately without stale backoff', async () => {
  const s = { id: 'phone', remembered: true, status: 'disconnected', autoConnect: true, retryAt: Date.now()+60000 };
  let ready = false, attempts = 0;
  const jobs = new Jobs();
  const phones = { sessions: new Map([['phone',s]]), reconnectState: () => ready ? null : { code:'P2P_NOT_READY',message:'waiting for service' }, reconnect: async () => { attempts++; return {}; } };
  const remembered = new RememberedDevices({dir:'/unused'},phones,jobs); remembered.stopped=false;
  remembered.tick(); remembered.tick(); assert.equal(jobs.items.size,0); assert.equal(s.reconnectWait.code,'P2P_NOT_READY');
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


test('Wi-Fi Direct never falls back to saved credentials when preconnection is unavailable or fails', async () => {
  const { PhoneManager } = await import('../src/phone.mjs');
  for (const provider of ['missing','not-ready','failed']) {
    const phones = new PhoneManager({}, {});
    const session = {id:'phone',transport:'wifi-direct',status:'disconnected',ip:'192.168.49.79',token:'old',baseUrl:'https://192.168.49.79:10380'};
    phones.sessions.set(session.id,session);
    phones.cleanup = async () => {};
    phones.connect = async () => { assert.fail('must not connect to the saved address'); };
    const code=provider==='missing'?'PRECONNECT_UNAVAILABLE':provider==='not-ready'?'P2P_NOT_READY':'PRECONNECT_PHONE_BUSY';
    if(provider!=='missing')phones.reconnectWireless = async (previous) => { assert.equal(previous,session);throw Object.assign(new Error('waiting'),{code}); };
    await assert.rejects(phones.reconnect(session.id,undefined,{automatic:true}),{code});
    assert.equal(session.reconnecting,false);
  }
});

test('LAN reconnect continues to use its existing connection', async () => {
  const { PhoneManager } = await import('../src/phone.mjs');
  const phones=new PhoneManager({}, {});
  const session={id:'lan',transport:'lan',status:'disconnected',mode:'existing',ip:'192.168.1.2',token:'lan-token',baseUrl:'https://192.168.1.2:10380'};
  phones.sessions.set(session.id,session);phones.cleanup=async()=>{};
  phones.connect=async(options,signal,previous)=>{assert.equal(options.ip,session.ip);assert.equal(options.token,session.token);assert.equal(previous,session);return {status:'connected'};};
  assert.deepEqual(await phones.reconnect(session.id,undefined,{automatic:true}),{status:'connected'});
});
