import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { createBackend } from '../src/server.mjs';
import { PhoneManager } from '../src/phone.mjs';
import { collect } from '../src/http.mjs';

async function setup(t) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-files-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const entries = new Map([['/sdcard/原文件.txt', 'contents'], ['/sdcard/existing.txt', 'existing']]);
  const records = [];
  let override;
  const phone = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const body = req.method === 'POST' ? JSON.parse((await collect(req)).toString()) : Object.fromEntries(url.searchParams);
    records.push({ method: req.method, route: url.pathname, body, token: req.headers.newtoken });
    const reply = value => { res.setHeader('content-type', 'application/json'); res.end(JSON.stringify(value)); };
    if (override !== undefined) return reply(override);
    if (url.pathname.endsWith('/file_rename')) {
      if (!entries.has(body.srcPath)) return reply({ code: '0015', data: false });
      if (entries.has(body.newPath)) return reply({ code: '0014', data: false });
      entries.set(body.newPath, entries.get(body.srcPath)); entries.delete(body.srcPath);
      return reply({ code: '0000', data: true });
    }
    if (url.pathname.endsWith('/delete_info')) {
      for (const p of body.list) entries.delete(p);
      return reply({ code: '0000', data: { total: body.list.length, successTotal: body.list.length, failType: 0 } });
    }
    if (url.pathname.endsWith('/create_directory')) {
      entries.set(path.posix.join(body.path, body.name), 'directory');
      return reply({ code: '0000' });
    }
    if (url.pathname.endsWith('/query_directory_size')) return reply({ code: '0000', data: { size: 123 } });
    res.writeHead(404); res.end();
  });
  phone.listen(0, '127.0.0.1'); await once(phone, 'listening');
  t.after(() => { phone.closeAllConnections(); phone.close(); });
  const phones = new PhoneManager({}, {});
  phones.sessions.set('test-phone', { id: 'test-phone', status: 'connected', baseUrl: `http://127.0.0.1:${phone.address().port}`, token: 'phone-secret' });
  const app = await createBackend({ stateDir: dir, phoneManager: phones });
  t.after(() => app.close());
  app.server.listen(0, '127.0.0.1'); await once(app.server, 'listening');
  const api = async (action, body, token = app.state.apiToken) => {
    const response = await fetch(`http://127.0.0.1:${app.server.address().port}/api/sessions/test-phone/files/${action}`, {
      method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify(body)
    });
    return { status: response.status, data: await response.json() };
  };
  return { api, entries, records, phones, override: value => { override = value; } };
}

test('file API moves, renames, creates, sizes and deletes through official phone routes', async t => {
  const { api, entries, records } = await setup(t);
  assert.equal((await api('mkdir', { path: '/sdcard', name: '目标 & #📁' })).status, 200);
  assert(entries.has('/sdcard/目标 & #📁'));
  const moved = await api('move', { path: '/sdcard/原文件.txt', destination: '/sdcard/目标 & #📁/文件.txt' });
  assert.equal(moved.status, 200);
  assert.equal(entries.get(moved.data.path), 'contents');
  assert(!entries.has('/sdcard/原文件.txt'));
  const renamed = await api('rename', { path: moved.data.path, name: '新名字.txt' });
  assert.equal(renamed.status, 200);
  assert.equal(entries.get(renamed.data.path), 'contents');
  assert.equal((await api('size', { path: '/sdcard/目标 & #📁' })).data.size, 123);
  assert.equal((await api('delete', { paths: [renamed.data.path, '/sdcard/existing.txt'] })).status, 200);
  assert(!entries.has(renamed.data.path));
  assert(!entries.has('/sdcard/existing.txt'));
  assert(records.every(r => r.token === 'phone-secret'));
  assert.deepEqual(records[0], { method: 'GET', route: '/pc_file_manager/create_directory', body: { path: '/sdcard', name: '目标 & #📁' }, token: 'phone-secret' });
  assert.deepEqual(records.at(-1).body, { list: [renamed.data.path, '/sdcard/existing.txt'], bucketId: [] });
});

test('invalid or unauthenticated requests never reach the phone', async t => {
  const { api, records, phones } = await setup(t);
  for (const [action, body] of [
    ['delete', { paths: [] }], ['delete', { paths: ['/'] }], ['delete', { paths: ['/a', '/a/b'] }],
    ['delete', { paths: ['/a/', '/a'] }], ['delete', { paths: Array(1001).fill('/a') }],
    ['move', { path: '/a', destination: '/a/child' }], ['move', { path: '/a', destination: '/a/' }],
    ['move', { path: '/a/../b', destination: '/c' }], ['move', { path: '/a', destination: 'relative' }],
    ['rename', { path: '/a', name: '../b' }], ['rename', { path: '/a', name: '\u0000' }],
    ['mkdir', { path: '/sdcard', name: ' ' }], ['size', { path: '/a\\b' }]
  ]) assert.equal((await api(action, body)).status, 400, JSON.stringify(body));
  assert.equal((await api('delete', { paths: ['/a'] }, 'wrong')).status, 401);
  phones.get('test-phone').status = 'disconnected';
  assert.equal((await api('delete', { paths: ['/a'] })).status, 400);
  phones.sessions.delete('test-phone');
  assert.equal((await api('delete', { paths: ['/a'] })).status, 404);
  assert.equal(records.length, 0);
});

test('phone rejection, missing confirmations and partial deletion are reported accurately', async t => {
  const { api, entries, override } = await setup(t);
  const conflict = await api('rename', { path: '/sdcard/原文件.txt', name: 'existing.txt' });
  assert.equal(conflict.status, 409); assert.equal(conflict.data.error.code, 'FILE_EXISTS');
  assert(entries.has('/sdcard/原文件.txt'));
  assert.equal((await api('move', { path: '/sdcard/missing', destination: '/sdcard/new' })).status, 404);
  for (const value of [{}, [], null, { code: '0000', data: false }]) {
    override(value);
    assert.equal((await api('move', { path: '/sdcard/原文件.txt', destination: '/sdcard/new' })).status, 502);
  }
  for (const data of [undefined, {}, { total: 0, failType: 0 }, { total: 2, successTotal: 1, failType: 20 }, { total: 2, successTotal: 1, failType: 0 }]) {
    override({ code: '0000', data });
    const result = await api('delete', { paths: ['/sdcard/a', '/sdcard/b'] });
    assert.equal(result.status, 502); assert.equal(result.data.error.code, 'FILE_DELETE_INCOMPLETE');
  }
  override({ code: '0012' });
  assert.equal((await api('mkdir', { path: '/sdcard', name: 'new' })).status, 409);
  override({ code: '0000', data: { size: -1 } });
  assert.equal((await api('size', { path: '/sdcard' })).status, 502);
  override({ code: '0000', data: { total: 1, successTotal: 1, failType: 13 } });
  assert.equal((await api('delete', { paths: ['/sdcard/a'] })).status, 200);
});
