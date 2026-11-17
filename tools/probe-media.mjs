#!/usr/bin/env node
// Bounded, read-only USB checks. Never installs, uploads, renames, moves or deletes files.
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { PhoneManager } from '../backend/src/phone.mjs';
import { AccountManager } from '../backend/src/account.mjs';
import { createBackend } from '../backend/src/server.mjs';

const serial = process.argv[2];
if (!serial) throw new Error('Usage: node tools/probe-media.mjs <USB serial> [report.json]');
const stateDir = process.env.VIVO_STATE_DIR || path.join(os.homedir(), '.local/share/vivo-connect');
const config = JSON.parse(await fs.readFile(path.join(stateDir, 'config.json'), 'utf8'));
const accounts = new AccountManager({ dir: stateDir }); await accounts.load();
const temp = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-media-probe-'));
const phones = new PhoneManager({ ...config, dir: temp }, accounts);
const report = { checkedAt: new Date().toISOString(), transport: 'usb', readOnly: true, pageSize: 3, probes: [] };
let app, id;
async function call(action, body) {
  const response = await fetch(`http://127.0.0.1:${app.server.address().port}/api/sessions/${id}/${action}`, {
    method: 'POST', headers: { authorization: 'Bearer ' + app.state.apiToken, 'content-type': 'application/json' },
    body: JSON.stringify(body), signal: AbortSignal.timeout(30000)
  });
  const data = await response.json();
  if (!response.ok) throw Object.assign(new Error('Probe request failed'), { code: data.error?.code, status: response.status, details: data.error?.details });
  return data;
}
async function probe(name, run) {
  try { report.probes.push({ name, ok: true, ...await run() }); }
  catch (e) { report.probes.push({ name, ok: false, error: e.code || e.name, httpStatus: e.status, phoneCode: e.details?.phoneCode }); }
  console.log(JSON.stringify(report.probes.at(-1)));
}
function checkItems(data) {
  if (!Array.isArray(data.items) || typeof data.hasMore !== 'boolean') throw Object.assign(new Error('Invalid list'), { code: 'INVALID_LIST' });
  if (data.items.some(v => typeof v.savePath !== 'string' || typeof v.fileName !== 'string' || !Number.isSafeInteger(v.fileSize))) throw Object.assign(new Error('Invalid item'), { code: 'INVALID_ITEM' });
  return { items: data.items.length, hasMore: data.hasMore, total: data.total };
}
try {
  id = (await phones.connect({ mode: 'usb', serial, installApk: false }, AbortSignal.timeout(60000))).id;
  report.connected = true;
  app = await createBackend({ stateDir: temp, phoneManager: phones });
  app.server.listen(0, '127.0.0.1'); await once(app.server, 'listening');
  let video;
  for (const kind of ['videos', 'music', 'documents', 'recent']) {
    let first;
    await probe(kind + '-first-page', async () => {
      first = await call('media/list', { kind, pageNumber: 3 });
      if (kind === 'videos') video = first.items?.[0];
      return checkItems(first);
    });
    if (first) await probe(kind + '-second-page', async () => {
      const next = await call('media/list', { kind, pageIndex: 1, pageNumber: 3 });
      const details = checkItems(next);
      const overlap = next.items.filter(v => first.items.some(p => p.savePath === v.savePath)).length;
      if (overlap || (next.items.length && !first.hasMore)) throw Object.assign(new Error('Invalid pagination'), { code: 'PAGINATION_INCONSISTENT' });
      return { ...details, overlap };
    });
    if (first && kind !== 'recent') for (const sortCondition of [0, 1, 2, 3, 4, 6, 7]) await probe(kind + '-sort-' + sortCondition, async () => {
      const data = await call('media/list', { kind, sortCondition, pageNumber: 3 });
      const details = checkItems(data);
      const values = data.items.map(v => sortCondition === 4 ? v.date : v.fileSize).filter(v => v >= 0);
      if ([4, 6, 7].includes(sortCondition) && values.some((v, i) => i && (sortCondition === 7 ? v > values[i - 1] : v < values[i - 1])))
        throw Object.assign(new Error('Invalid order'), { code: 'SORT_INCONSISTENT' });
      return details;
    });
  }
  for (const category of ['PDF', 'DOC', 'XLS', 'PPT', 'TXT', 'VCF', 'IWORK', 'CAD', 'PSD', 'XMIND', '其他']) await probe('documents-category-' + category, async () => checkItems(await call('media/list', { kind: 'documents', category, pageNumber: 3 })));
  if (video) await probe('video-thumbnail', async () => {
    const data = await call('gallery/thumbnail', { path: video.savePath });
    return { mime: data.mime, bytes: Buffer.from(data.base64, 'base64').length };
  });
  report.sessionStillConnected = phones.get(id).status === 'connected';
} catch (e) {
  report.connected = report.connected || false;
  report.connectionError = e.code || e.name;
  console.log(JSON.stringify({ connectionError: report.connectionError }));
} finally {
  if (app) await app.close(); else await phones.close();
  await fs.rm(temp, { recursive: true, force: true });
  report.connectionClosed = true;
  if (process.argv[3]) await fs.writeFile(process.argv[3], JSON.stringify(report, null, 2) + '\n', { mode: 0o600 });
}
if (!report.connected || report.connectionError || report.probes.some(p => !p.ok)) process.exitCode = 1;
