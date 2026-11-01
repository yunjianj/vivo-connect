import test from 'node:test';
import assert from 'node:assert/strict';
import { ScanManager, encryptPid, scanUrl } from '../src/scan.mjs';
import { Jobs } from '../src/jobs.mjs';

test('official QR sid and getPhone flow hands the same token to the phone session', async () => {
  const state = { name: 'Linux PC', deviceId: 'persistent-pc' }, accounts = { account: null };
  const jobs = new Jobs(); let connected; const requests = [];
  const scans = new ScanManager(state, accounts, { connect: async (options) => { connected = options; return { id: 'session', status: 'connected' }; } }, jobs,
    async (url, options) => {
      requests.push({ url, options });
      if (url.endsWith('/scan/sid')) return { code: 0, data: { sid: 'official-sid', timeout: 30000 } };
      return { code: 0, data: JSON.stringify({ ip: ['192.0.2.1'], connectionId: 'phone-connection-id' }) };
    }, {render:async()=> 'data:image/svg+xml;base64,PHN2Zy8+',selectNetwork:()=>({address:'192.0.2.2'})});
  const result = await scans.start({ pcIp: '192.0.2.2' }); const qr = new URL(result.qrText);
  const job = jobs.get(result.jobId); await job.done;
  assert.equal(result.qrImage, 'data:image/svg+xml;base64,PHN2Zy8+'); assert.equal(job.status, 'succeeded'); assert.equal(connected.token, qr.searchParams.get('t'));
  assert.equal(connected.connectionId, 'phone-connection-id'); assert.equal(qr.searchParams.get('ls'), 'false');
  assert.equal(qr.searchParams.get('s'), 'official-sid'); assert.equal(qr.searchParams.get('f'), 'pc');
  assert.equal(requests[1].options.headers.userId, '71f6033b2caa9784');
  assert.deepEqual(requests[1].options.json, { sid: 'official-sid' });
  assert.equal(Buffer.from(encryptPid('pc-id'), 'base64').length, 128);
});

test('failed official QR response does not manufacture a connection', async () => {
  const jobs = new Jobs();
  const scans = new ScanManager({ name: 'PC', deviceId: 'pc' }, { account: null }, { connect: () => assert.fail('must not connect') }, jobs,
    async url => url.endsWith('/scan/sid') ? { code: 0, data: { sid: 'sid', timeout: 1000 } } : { code: 10003 }, {render:async()=> 'image',selectNetwork:()=>({address:'192.0.2.2'})});
  const result = await scans.start({ pcIp: '192.0.2.2' }); const job = jobs.get(result.jobId); await job.done;
  assert.equal(job.status, 'failed'); assert.equal(job.error.code, 'SCAN_EXPIRED');
  const qr = new URL(scanUrl({ sid: 's&bad=1', token: 'token', state: { name: '电脑', deviceId: 'pc' } }));
  assert.equal(qr.searchParams.get('s'), 's&bad=1'); assert(!qr.searchParams.has('bad'));
});


test('scan distinguishes a returned phone address from transport isolation', async()=>{
 const jobs=new Jobs();const scans=new ScanManager({name:'PC',deviceId:'pc'},{account:null},
  {connect:async()=>{const e=new Error('unreachable');e.code='EHOSTUNREACH';throw e;}},jobs,
  async url=>url.endsWith('/scan/sid')?{code:0,data:{sid:'sid',timeout:1000}}:{code:0,data:JSON.stringify({ip:['192.0.2.5']})},
  {render:async()=> 'image',selectNetwork:()=>({address:'192.0.2.2'})});
 const result=await scans.start();const job=jobs.get(result.jobId);await job.done;
 assert.equal(job.error.code,'PHONE_UNREACHABLE');assert.deepEqual(job.phoneIps,['192.0.2.5']);
 assert.equal(job.error.details.attempts[0].code,'EHOSTUNREACH');
});
