import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { Readable } from 'node:stream';
import { once } from 'node:events';
import { RecordingManager } from '../src/recordings.mjs';
import { Jobs } from '../src/jobs.mjs';
import { createBackend } from '../src/server.mjs';

const bytes = Buffer.from('test-audio-only');
function row(guid = 'guid-1', cloudVersion = '1') {
  return { guid, localId: 'local-' + guid, cloudVersion, localVersion: '12', status: 1, inRecycle: 0, lastUpdate: 1700000000000,
    moduleData: JSON.stringify({ mAudioBean: { title: '测试录音', mDisplayName: '测试录音', mDuration: 12000, mSize: bytes.length, mDateModified: 1700000000000 },
      mRecognizeItemInfoBean: { mRecognizeItemList: [{ content: '模拟转写' }] }, unknownFutureField: { preserve: true } }),
    metaList: [{ metaId: 'meta-' + guid, file_name: 'audio.m4a', file_path: '/phone/private/audio.m4a' }] };
}
const groups = (addList = [], updateList = [], deleteList = []) => ({ addList, updateList, deleteList });
async function setup(t) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-record-test-')); t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const a = { openId: 'account-a', token: 'secret-token', deviceId: 'login-device', regionCode: 'CN', cloudOpenId: 'wrong-cloud-uid' };
  const accounts = { account: a }, jobs = new Jobs(); t.after(() => jobs.close());
  const fixture = { cursor: '1', rows: [row()], delta: null, missingDetail: false, calls: [], badHash: false, badHost: false, fail: false, mutate: null };
  const json = async (url, options) => {
    const route = new URL(url).pathname, body = options.json; fixture.calls.push({ route, body, headers: options.headers });
    if (fixture.fail) throw Object.assign(new Error('offline'), { code: 'ECONNRESET' });
    if (fixture.mutate) { const fn = fixture.mutate; fixture.mutate = null; fn(); }
    assert.equal(options.headers.token, accounts.account.token);
    if (route.endsWith('/getUserInfo')) return { code: 0, data: { userId: 'real-numeric-uid' } };
    if (route.includes('/record/')) { assert.equal(body.uid, 'real-numeric-uid'); assert.equal(body.syncUri, 'SDK_RECORD'); }
    if (route.endsWith('/pullmapping')) {
      const list = body.cloudMaxVersion === fixture.cursor ? groups() : fixture.delta || groups(fixture.rows);
      if (body.cloudMaxVersion === fixture.cursor) return { status: 200, data: { cloudMaxVersion: fixture.cursor, afterCount: 493 } };
      return { status: 200, data: { cloudMaxVersion: fixture.cursor, afterCount: Object.values(list).flat().length, dataList: list } };
    }
    if (route.endsWith('/pulldata')) {
      assert(body.ids.length <= 30);
      return { status: 200, data: { cloudMaxVersion: fixture.cursor, dataList: groups(fixture.missingDetail ? [] : fixture.rows.filter(r => body.ids.includes(r.guid))) } };
    }
    if (route.endsWith('/pushdata')) { fixture.rows = body.dataList.updateList.map(r => ({ ...r, cloudVersion: String(Number(fixture.cursor) + 1) })); fixture.cursor = String(Number(fixture.cursor) + 1); return { status: 200, data: { cloudMaxVersion: fixture.cursor, dataList: groups([], fixture.rows) } }; }
    if (route.endsWith('/totrash') || route.endsWith('/restore')) {
      assert.equal(body.opAll, false); assert.equal(body.opList.length, 1);
      fixture.cursor = String(Number(fixture.cursor) + 1); fixture.rows = fixture.rows.map(r => ({ ...r, cloudVersion: fixture.cursor, inRecycle: route.endsWith('/totrash') ? 1 : 0 })); return { status: 200, data: {} };
    }
    if (route.endsWith('/fileInfo.do')) return { code: 0, data: { metaInfo: { metaId: 'meta-guid-1', asDir: false, fileSize: bytes.length,
      domain: fixture.badHost ? 'https://evil.example/' : 'https://clouddisk-cn09.vivo.com.cn', checkSum: fixture.badHash ? '0'.repeat(32) : crypto.createHash('md5').update(bytes).digest('hex') } } };
    if (route.endsWith('/getStsToken.do')) { assert.equal(body.tokenType, 2); return { code: 0, data: { stsToken: 'short-lived-sts' } }; }
    throw new Error('Unexpected route');
  };
  const stream = async (url, options) => {
    assert.equal(new URL(url).hostname, 'clouddisk-cn09.vivo.com.cn');
    assert.deepEqual(Object.keys(options.headers).sort(), ['x-yun-metaid', 'x-yun-openid', 'x-yun-ststoken']);
    assert.equal(options.headers['x-yun-ststoken'], 'short-lived-sts');
    return Readable.from([bytes.subarray(0, 3), bytes.subarray(3)]);
  };
  const manager = new RecordingManager({ dir }, accounts, jobs, { json, stream }); t.after(() => manager.close());
  const run = async job => { await jobs.get(job.id).done; return jobs.get(job.id); };
  return { dir, accounts, jobs, fixture, manager, run, json, stream };
}

test('cloud sync resolves the real uid, preserves full metadata, and advances an atomic incremental cursor', async t => {
  const { manager, run, fixture } = await setup(t);
  assert.equal((await run(manager.sync())).status, 'succeeded');
  const list = await manager.list(); assert.equal(list.items[0].transcript, '模拟转写'); assert.equal(list.items[0].duration, 12000);
  assert(!JSON.stringify(list).includes('secret-token')); assert(!JSON.stringify(list).includes('/phone/private'));
  assert.equal((await run(manager.sync())).status, 'succeeded');
  fixture.cursor = '2'; fixture.delta = groups([], [{ ...row(), cloudVersion: '2', inRecycle: 1 }]);
  assert.equal((await run(manager.sync())).status, 'succeeded'); assert.equal((await manager.list()).items[0].inTrash, true);
  fixture.cursor = '3'; fixture.delta = groups([], [], [{ guid: 'guid-1', status: 3 }]);
  await run(manager.sync()); assert.equal((await manager.list()).items.length, 0);
  assert.equal(fixture.calls.filter(c => c.route.endsWith('getUserInfo')).length, 1);
});

test('detail batches are capped at 30 and incomplete or malformed deltas never advance the cursor', async t => {
  const { manager, run, fixture, accounts } = await setup(t);
  await run(manager.sync()); const old = await manager.index(accounts.account);
  fixture.cursor = '2'; fixture.rows = Array.from({ length: 61 }, (_, i) => row('g' + i)); fixture.delta = groups(fixture.rows.map(({ guid }) => ({ guid })));
  fixture.missingDetail = true;
  assert.equal((await run(manager.sync())).error.code, 'RECORD_BATCH_INCOMPLETE'); assert.deepEqual(await manager.index(accounts.account), old);
  fixture.missingDetail = false; assert.equal((await run(manager.sync())).status, 'succeeded');
  assert.equal((await manager.list()).items.length, 62);
  fixture.cursor = '3'; fixture.delta = groups([{ ...row('bad'), moduleData: 'invalid' }]);
  assert.equal((await run(manager.sync())).error.code, 'RECORD_DATA_INVALID'); assert.equal((await manager.index(accounts.account)).cloudVersion, '2');
  fixture.cursor = '1'; assert.equal((await run(manager.sync())).error.code, 'RECORD_VERSION_REGRESSED');
});

test('renaming preserves unknown cloud fields, requires matching versions, and trash operations target a single item', async t => {
  const { manager, run, fixture } = await setup(t); await run(manager.sync());
  const id = (await manager.list()).items[0].id;
  assert.equal((await run(manager.modify(id, 'rename', { name: '新名称', cloudVersion: '0' }))).error.code, 'RECORD_CONFLICT');
  assert.equal((await run(manager.modify(id, 'rename', { name: '新名称', cloudVersion: '1' }))).status, 'succeeded');
  const sent = fixture.calls.find(c => c.route.endsWith('/pushdata')).body.dataList.updateList[0];
  assert.deepEqual(JSON.parse(sent.moduleData).unknownFutureField, { preserve: true }); assert.equal(sent.metaList[0].metaId, 'meta-guid-1');
  assert.equal((await manager.list()).items[0].name, '新名称');
  assert.equal((await run(manager.modify(id, 'trash', { cloudVersion: '2' }))).status, 'succeeded'); assert.equal((await manager.list()).items[0].inTrash, true);
  assert.equal((await run(manager.modify(id, 'restore', { cloudVersion: '3' }))).status, 'succeeded'); assert.equal((await manager.list()).items[0].inTrash, false);
});

test('audio downloads use only temporary CDN credentials and reject bad hosts or checksum mismatch', async t => {
  const { manager, run, fixture, accounts } = await setup(t); await run(manager.sync()); const id = (await manager.list()).items[0].id;
  fixture.badHost = true; assert.equal((await run(manager.download(id))).error.code, 'RECORD_FILE_HOST_REJECTED');
  fixture.badHost = false; fixture.badHash = true; assert.equal((await run(manager.download(id))).error.code, 'RECORD_CHECKSUM_MISMATCH');
  assert.deepEqual(await fs.readdir(path.join(manager.folder(accounts.account), 'audio')), []);
  fixture.badHash = false; const result = await run(manager.download(id)); assert.equal(result.status, 'succeeded');
  assert.deepEqual(await fs.readFile((await manager.file(id)).path), bytes); assert(!JSON.stringify(result.result).includes('sts'));
});

test('account changes cancel cloud access and isolate cached data and automatic settings', async t => {
  const { manager, run, accounts, fixture } = await setup(t); await run(manager.sync()); await manager.configure({ automatic: true });
  accounts.account = { ...accounts.account, openId: 'account-b' };
  assert.equal((await manager.list()).items.length, 0); assert.equal((await manager.list()).automatic, false);
  fixture.mutate = () => { accounts.account = { ...accounts.account }; };
  assert.equal((await run(manager.sync())).error.code, 'RECORD_ACCOUNT_CHANGED');
  accounts.account = null; assert.throws(() => manager.sync(), e => e.code === 'RECORD_LOGIN_REQUIRED');
});

test('recording HTTP APIs retain local authentication, return jobs and stream only known cached audio', async t => {
  const f = await setup(t);
  const accounts = { ...f.accounts, async load() {}, status: () => ({ loggedIn: true }), async close() {} };
  const app = await createBackend({ stateDir: path.join(f.dir, 'http'), accountManager: accounts, recordingOptions: { json: f.json, stream: f.stream } });
  t.after(() => app.close()); app.server.listen(0, '127.0.0.1'); await once(app.server, 'listening');
  const call = (route, method = 'GET', body, token = app.state.apiToken) => fetch(`http://127.0.0.1:${app.server.address().port}` + route, { method, headers: { authorization: 'Bearer ' + token, 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  assert.equal((await call('/api/recordings', 'GET', undefined, 'wrong')).status, 401);
  const started = await call('/api/recordings/sync', 'POST', {}); assert.equal(started.status, 202);
  const job = await started.json(); await app.jobs.get(job.id).done;
  const list = await (await call('/api/recordings')).json(); assert.equal(list.items.length, 1);
  assert.equal((await call('/api/recordings/' + list.items[0].id + '/file')).status, 404);
  const download = await (await call('/api/recordings/' + list.items[0].id + '/download', 'POST', {})).json(); await app.jobs.get(download.id).done;
  assert.deepEqual(Buffer.from(await (await call('/api/recordings/' + list.items[0].id + '/file')).arrayBuffer()), bytes);
});
