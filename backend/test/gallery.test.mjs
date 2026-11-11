import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { once, EventEmitter } from 'node:events';
import { createBackend } from '../src/server.mjs';
import { PhoneManager } from '../src/phone.mjs';
import { collect } from '../src/http.mjs';

const photo = '/storage/emulated/0/DCIM/雪 & #.jpg';
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=', 'base64');
async function setup(t) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-gallery-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const records = []; let override;
  const phone = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const body = req.method === 'POST' ? JSON.parse((await collect(req)).toString()) : Object.fromEntries(url.searchParams);
    records.push({ route: url.pathname, method: req.method, body, token: req.headers.newtoken });
    if (typeof override === 'function') return override(req, res);
    if (override instanceof Buffer) return res.end(override);
    if (override !== undefined) return res.end(JSON.stringify(override));
    if (url.pathname.endsWith('/thumb')) return res.end(png);
    let value;
    if (url.pathname.endsWith('/album_collect_info')) value = { code: '0000', data: [{ name: '相机', keyID: 'camera', bucketIDs: [7, 8], count: 2 }] };
    else if (url.pathname.endsWith('/album_collect_detail')) value = { code: '0000', data: [{ data: photo, display_name: '雪 & #.jpg', size: '120', date_modified: 1700000000 }] };
    else value = { code: '0000', dataList: [{ savePath: photo, fileName: '雪 & #.jpg', fileSize: '120', date: 1700000000000 }], totalCount: 2 };
    res.end(JSON.stringify(value));
  });
  phone.listen(0, '127.0.0.1'); await once(phone, 'listening');
  t.after(() => { phone.closeAllConnections(); phone.close(); });
  const phones = new PhoneManager({}, {});
  const authState = { reply: { auth: 1, source: 0, state: 1 }, requests: 0 };
  const ws = new EventEmitter(); ws.readyState = 1;
  ws.send = (message, callback) => { assert.equal(message, 'RE_CONNECT_ALBUM:'); ++authState.requests; callback?.(); queueMicrotask(() => ws.emit('message', Buffer.from('RE_CONNECT_ALBUM:' + JSON.stringify(authState.reply)), false)); };
  ws.terminate = () => { ws.readyState = 3; ws.emit('close'); };
  phones.sessions.set('gallery-phone', { id: 'gallery-phone', status: 'connected', ws, baseUrl: `http://127.0.0.1:${phone.address().port}`, token: 'private-phone-token' });
  const app = await createBackend({ stateDir: dir, phoneManager: phones });
  t.after(() => app.close());
  app.server.listen(0, '127.0.0.1'); await once(app.server, 'listening');
  const api = async (action, body, token = app.state.apiToken) => {
    const response = await fetch(`http://127.0.0.1:${app.server.address().port}/api/sessions/gallery-phone/gallery/${action}`, {
      method: body === undefined ? 'GET' : 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body)
    });
    return { status: response.status, data: await response.json() };
  };
  return { api, records, phones, authState, override(value) { override = value; } };
}

test('gallery uses official album and media schemas, pagination and session credentials', async t => {
  const { api, records } = await setup(t);
  const albums = await api('albums'); assert.equal(albums.status, 200);
  assert.deepEqual(albums.data.albums[0], { name: '相机', keyID: 'camera', bucketIDs: [7, 8], count: 2 });
  const first = await api('list', { pageNumber: 1 });
  assert.equal(first.data.items[0].savePath, photo); assert.equal(first.data.items[0].fileSize, 120);
  assert.equal(first.data.hasMore, true);
  assert.deepEqual(records.at(-1).body, { category: '', data: '', fileCount: 0, type: 'REQUEST_POSTS_IMAGELIST', groupBy: 1, sortCondition: 5, pageIndex: 0, pageNumber: 1, firstFlag: false });
  assert.equal((await api('list', { pageIndex: 1, pageNumber: 1 })).data.hasMore, true);
  await api('list', { kind: 'videos', sortCondition: 4 });
  assert.equal(records.at(-1).body.type, 'REQUEST_POSTS_VIDEOLIST');
  const detail = await api('list', { kind: 'album', keyID: 'camera', bucketIDs: [7, 8] });
  assert.equal(detail.data.items[0].date, 1700000000000);
  assert.deepEqual(records.at(-1).body, { list: [7, 8], keyID: 'camera', pageIndex: 0, pageNumber: 100, sortCondition: 5 });
  assert(records.every(r => r.token === 'private-phone-token'));
  assert(!JSON.stringify(detail).includes('private-phone-token'));
});

test('thumbnail proxies binary data and encodes Unicode/reserved characters correctly', async t => {
  const { api, records } = await setup(t);
  const thumb = await api('thumbnail', { path: photo });
  assert.equal(thumb.status, 200); assert.equal(thumb.data.mime, 'image/png');
  assert.deepEqual(Buffer.from(thumb.data.base64, 'base64'), png);
  assert.equal(records[0].method, 'GET'); assert.equal(records[0].body.fileUri, photo);
  assert.equal(records[0].body.type, 'fileManager'); assert.match(records[0].body.date, /^\d+$/);
});

test('gallery validates paging, albums, paths, auth and disconnected sessions before phone access', async t => {
  const { api, records, phones } = await setup(t);
  for (const body of [{ pageIndex: -1 }, { pageNumber: 201 }, { pageNumber: 0 }, { kind: 'anything' }, { sortCondition: 9 }, { kind: 'album', keyID: 'x', bucketIDs: '7' }])
    assert.equal((await api('list', body)).status, 400);
  for (const p of ['https://example.org/a', '/etc/passwd', '/sdcard/../a', '/sdcard/a\u0000', '/sdcard/a\\b', '/sdcard/'])
    assert.equal((await api('thumbnail', { path: p })).status, 400);
  assert.equal((await api('albums', undefined, 'wrong')).status, 401);
  phones.get('gallery-phone').status = 'disconnected';
  assert.equal((await api('albums')).status, 400); assert.equal(records.length, 0);
});

test('phone refusal and malformed lists never appear as an empty successful gallery', async t => {
  const { api, override } = await setup(t);
  override({ code: '9999', data: [] });
  let result = await api('albums'); assert.equal(result.status, 502); assert.equal(result.data.error.code, 'GALLERY_REJECTED');
  for (const value of [{ code: '0000', data: {} }, { code: '0000', data: 'bad json' }]) {
    override(value); result = await api('list', {}); assert.equal(result.status, 502); assert.equal(result.data.error.code, 'GALLERY_DATA_INVALID');
  }
  override({ code: '0000', data: [{ data: photo, display_name: 'x', size: '' }, { data: photo, display_name: 'x' }] });
  result = await api('list', { kind: 'album', keyID: 'camera', bucketIDs: [7] });
  assert.equal(result.data.items.length, 1); assert.equal(result.data.items[0].fileSize, -1);
});

test('thumbnail rejects JSON, redirects and oversized content without forwarding tokens', async t => {
  const { api, override, records } = await setup(t);
  override((req, res) => { res.writeHead(302, { location: 'http://127.0.0.1:1/token-leak' }); res.end(); });
  assert.equal((await api('thumbnail', { path: photo })).data.error.code, 'UPSTREAM_HTTP');
  assert.equal(records.length, 1);
  override({ code: '9999' }); assert.equal((await api('thumbnail', { path: photo })).data.error.code, 'THUMBNAIL_INVALID');
  override(Buffer.alloc(2 * 1024 * 1024 + 1));
  const result = await api('thumbnail', { path: photo }); assert.equal(result.status, 413);
});


test('official gallery permission is required; denied auth never reads albums and refresh retries', async t => {
  const { api, authState, records, phones } = await setup(t);
  authState.reply = { auth: 0 };
  assert.equal((await api('albums')).data.error.code, 'GALLERY_AUTH_DENIED'); assert.equal(records.length, 0);
  authState.reply = { auth: '1' };
  assert.equal((await api('list', {})).status, 403); assert.equal(records.length, 0);
  authState.reply = { auth: 1 };
  assert.equal((await api('albums')).status, 200);
  const count = authState.requests;
  assert.equal((await api('list', {})).status, 200); assert.equal(authState.requests, count);
  assert.equal(phones.get('gallery-phone').ws.listenerCount('message'), 0);
  assert.equal(phones.get('gallery-phone').ws.listenerCount('close'), 0);
});

test('photo daily headers are removed and pagination counts media rather than header rows', async t => {
  const { api, override } = await setup(t);
  override({ dataList: [{ isGroup: true, savePath: '', groupName: 'today' }, { isGroup: false, savePath: photo, fileName: '照片.jpg', fileSize: 120 }], totalCount: 2 });
  let result = await api('list', { pageNumber: 1 });
  assert.equal(result.status, 200); assert.equal(result.data.items.length, 1); assert.equal(result.data.hasMore, true);
  override({ dataList: [{ isGroup: true, savePath: '', groupName: 'yesterday' }] });
  result = await api('list', { pageNumber: 1 }); assert.equal(result.data.hasMore, false);
});


test('a phone page-local totalCount cannot hide subsequent full photo or video pages', async t => {
  const { api, override } = await setup(t);
  override({ dataList: [{ savePath: photo, fileName: '照片.jpg' }], totalCount: 1 });
  for (const kind of ['photos', 'videos']) {
    const result = await api('list', { kind, pageIndex: 2, pageNumber: 1 });
    assert.equal(result.data.hasMore, true); assert.equal(result.data.total, null);
  }
  override({ dataList: [], totalCount: 0 });
  assert.equal((await api('list', { pageNumber: 1 })).data.hasMore, false);
});
