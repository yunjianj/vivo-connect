#!/usr/bin/env node
// Read-only USB protocol probe: no installs, uploads, deletes, or full media downloads.
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { PhoneManager } from '../backend/src/phone.mjs';
import { AccountManager } from '../backend/src/account.mjs';
import { GalleryManager } from '../backend/src/gallery.mjs';
import { requestJson } from '../backend/src/http.mjs';

const serial = process.argv[2];
if (!serial) throw new Error('Usage: node tools/probe-gallery.mjs <USB serial> [report.json]');
const stateDir = process.env.VIVO_STATE_DIR || path.join(os.homedir(), '.local/share/vivo-connect');
const config = JSON.parse(await fs.readFile(path.join(stateDir, 'config.json'), 'utf8'));
const accounts = new AccountManager({ dir: stateDir }); await accounts.load();
const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-gallery-probe-'));
const phones = new PhoneManager({ ...config, dir: temp }, accounts);
const gallery = new GalleryManager(phones);
const report = { checkedAt: new Date().toISOString(), transport: 'usb', readOnly: true, probes: [] };
function shape(value, depth = 0) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return { type: 'array', length: value.length, first: depth < 3 && value.length ? shape(value[0], depth + 1) : undefined };
  if (typeof value === 'object' && depth < 3) return Object.fromEntries(Object.entries(value).slice(0, 40).map(([k, v]) => [k, shape(v, depth + 1)]));
  return typeof value;
}
async function probe(name, run) {
  try { const details = await run(); report.probes.push({ name, ok: true, ...details }); }
  catch (e) { report.probes.push({ name, ok: false, error: e.code || e.name, phoneCode: e.details?.phoneCode, httpStatus: e.details?.status }); }
  console.log(JSON.stringify(report.probes.at(-1)));
}
try {
  const connected = await phones.connect({ mode: 'usb', serial, installApk: false }, AbortSignal.timeout(60000));
  const s = phones.get(connected.id);
  report.connected = true;
  await probe('album-authorization-handshake', () => gallery.authorize(s.id));
  await probe('album-response-shape' , async () => {
    const raw = await requestJson(s.baseUrl + '/pc_back/album_collect_info', phones.options(s));
    return { phoneCode: raw.code, shape: shape(raw) };
  });
  let albums;
  await probe('normalized-albums', async () => { albums = (await gallery.albums(s.id)).albums; return { count: albums.length }; });
  let photos;
  await probe('photos-first-page', async () => {
    photos = await gallery.list(s.id, { kind: 'photos', pageNumber: 3 });
    return { items: photos.items.length, hasMore: photos.hasMore, total: photos.total, shape: shape(photos.items) };
  });
  await probe('photos-second-page', async () => {
    const next = await gallery.list(s.id, { kind: 'photos', pageIndex: 1, pageNumber: 3 });
    if (next.items.length && photos && !photos.hasMore) throw new Error('False end of gallery');
    const overlap = next.items.filter(n => photos?.items.some(p => p.savePath === n.savePath)).length;
    if (overlap) throw new Error('Repeated photo page');
    return { items: next.items.length, overlap };
  });
  await probe('videos-first-page', async () => { const data = await gallery.list(s.id, { kind: 'videos', pageNumber: 3 }); return { items: data.items.length, hasMore: data.hasMore, total: data.total }; });
  for (const groupBy of [1, 4]) await probe('photos-group-' + groupBy, async () => {
    const raw = await phones.json(s, '/pc_file_manager/channel', { category: '', data: '', fileCount: 0,
      type: 'REQUEST_POSTS_IMAGELIST', groupBy, sortCondition: 5, pageIndex: 0, pageNumber: 3, firstFlag: false });
    return { phoneCode: raw.code, shape: shape(raw) };
  });
  let detail;
  if (albums?.length) await probe('album-detail', async () => {
    const a = albums.find(a => a.count > 0) || albums[0];
    detail = await gallery.list(s.id, { kind: 'album', keyID: a.keyID, bucketIDs: a.bucketIDs, pageNumber: 3 });
    return { items: detail.items.length, hasMore: detail.hasMore, shape: shape(detail.items) };
  });
  if (detail?.items.length) await probe('album-thumbnail', async () => {
    const data = await gallery.thumbnail(s.id, { path: detail.items[0].savePath });
    return { mime: data.mime, bytes: Buffer.from(data.base64, 'base64').length };
  });
  if (photos?.items.length) await probe('photo-thumbnail', async () => {
    const data = await gallery.thumbnail(s.id, { path: photos.items[0].savePath });
    return { mime: data.mime, bytes: Buffer.from(data.base64, 'base64').length };
  });
} catch (e) {
  report.connected = false; report.connectionError = e.code || e.name;
  console.log(JSON.stringify({ connected: false, error: report.connectionError }));
} finally {
  await phones.close(); await fs.rm(temp, { recursive: true, force: true });
  report.connectionClosed = true;
  if (process.argv[3]) await fs.writeFile(process.argv[3], JSON.stringify(report, null, 2) + '\n', { mode: 0o600 });
}
if (!report.connected || report.probes.some(p => !p.ok)) process.exitCode = 1;
