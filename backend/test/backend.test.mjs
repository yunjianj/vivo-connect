import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import https from 'node:https';
import net from 'node:net';
import { once } from 'node:events';
import { execFileSync } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { createBackend } from '../src/server.mjs';
import { official } from '../src/core.mjs';
import { collect } from '../src/http.mjs';
import { encodeFrame, Decoder, pairLan, searchPacket, parseDiscovery } from '../src/pairing.mjs';
import { loginUrl, isLoginCallback, parseLoginPayload, AccountManager } from '../src/account.mjs';
import { inspectTar, validArchivePath, sha256 } from '../src/transfers.mjs';
import { ClipboardManager, receiveClipboard, CLIPBOARD_LIMIT } from '../src/clipboard.mjs';

async function temp(t) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-backend-test-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true })); return dir;
}
async function listen(server) { server.listen(0, '127.0.0.1'); await once(server, 'listening'); return server.address().port; }
async function waitJob(app, id) {
  for (let i = 0; i < 1000; i++) { const job = app.jobs.get(id); if (!['queued', 'running'].includes(job.status)) return app.jobs.public(job); await delay(5); }
  throw new Error('Job did not finish');
}
async function api(app, method, route, body, authorized = true) {
  const response = await fetch(`http://127.0.0.1:${app.server.address().port}${route}`, { method,
    headers: { ...(authorized ? { authorization: `Bearer ${app.state.apiToken}` } : {}), 'content-type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body) });
  return { status: response.status, data: await response.json() };
}
async function mockPhone(t, dir) {
  const tar = official('tar'), WebSocket = official('ws');
  const source = path.join(dir, 'phone-source'); await fs.mkdir(source);
  const file = path.join(source, '手机.txt'); await fs.writeFile(file, '手机到电脑📱\n'.repeat(5000));
  const size = (await fs.stat(file)).size;
  const key = path.join(dir, 'key.pem'), cert = path.join(dir, 'cert.pem');
  execFileSync('openssl', ['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-keyout', key, '-out', cert,
    '-days', '1', '-subj', '/CN=127.0.0.1'], { stdio: 'ignore' });
  const records = { headers: [], requests: [], uploadCount: 0, rejectUpload: false, rejectVersion: false, badDownloadSize: false, transferResults: [] };
  const server = https.createServer({ key: await fs.readFile(key), cert: await fs.readFile(cert) }, async (req, res) => {
    try {
      records.headers.push(req.headers); records.requests.push(req.url);
      const url = new URL(req.url, 'https://localhost');
      const json = value => { res.setHeader('content-type', 'application/json'); res.end(JSON.stringify(value)); };
      if (url.pathname === '/version') { records.versionBody = JSON.parse((await collect(req)).toString()); return json({ code: records.rejectVersion ? '0004' : '0000', data: { enpVer: 1 } }); }
      if (url.pathname === '/base-info') { records.baseBody = JSON.parse((await collect(req)).toString()); return json({ code: '0000', data: records.baseInfo || { mobileDeviceName: 'mock vivo', mobileDeviceId: 'mock-phone' } }); }
      if (url.pathname === '/pc_file_manager/channel') return json({ code: '0000', data: [{ savePath: '/sdcard/手机.txt', fileSize: size }] });
      if (url.pathname === '/pc_file_manager/drop_files_info') {
        records.preflight = JSON.parse((await collect(req)).toString());
        if(records.preflightMode==='http-rejected'){res.writeHead(403);return res.end();}
        if(records.rejectUpload)return json({status:1});
        if(records.preflightMode==='code-rejected')return json({code:'0004'});
        if(records.preflightMode==='empty')return res.end();
        if(records.preflightMode==='text')return res.end('OK');
        return json(records.preflightMode==='status'?{status:0}:{});
      }
      if (url.pathname === '/upload/drop_file_to_phone') {
        records.uploadCount++;
        const data = await collect(req, 8 * 1024 ** 2);
        const file = path.join(dir, 'uploaded.tar'); await fs.writeFile(file, data);
        records.uploadManifest = await inspectTar(file);
        const out = path.join(dir, 'uploaded'); await fs.mkdir(out, { recursive: true });
        await tar.x({ file, cwd: out, strict: true });
        return json(records.unconfirmedUpload?{}:{ data: { dropFileItems: records.preflight.dropFileItems.map(item => ({ fileName: item.fileName, savePath: '/sdcard/Download/' + item.fileName })) } });
      }
      if (url.pathname === '/pc_file_manager/download_info') {
        records.downloadPreflight = JSON.parse((await collect(req)).toString());
        return json({ totalCount: 1, totalSize: records.badDownloadSize ? size+1 : size });
      }
      if (url.pathname === '/pc_file_manager/download' && records.slowDownload) { res.writeHead(200); res.write(Buffer.alloc(1024)); return; }
      if (url.pathname === '/pc_file_manager/download') { res.setHeader('content-type', 'application/x-tar'); tar.c({ cwd: source }, ['手机.txt']).pipe(res); return; }
      res.writeHead(404); res.end();
    } catch (e) { res.writeHead(500); res.end(e.message); }
  });
  const ws = new WebSocket.WebSocketServer({ server });
  ws.on('connection', (socket, req) => {
    records.protocols = req.headers['sec-websocket-protocol'];
    socket.on('message', data => {
      const message = data.toString();
      if (message.startsWith('CLIPBOARD_TEXT:')) (records.clipboardMessages ??= []).push(message);
      else if (message.startsWith('TRANS_FILE_')) records.transferResults.push(message);
      else records.heartbeat = message;
      socket.send('ok');
    });
  });
  const port = await listen(server);
  t.after(async () => { for (const socket of ws.clients) socket.terminate(); ws.close(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); });
  return { port, records, file, ws };
}

test('pairing codec handles fragmented UTF-8 frames and discovery response', () => {
  const packets = Buffer.concat([encodeFrame({ deviceName: '手机📱' }), encodeFrame({ bytes: [1] })]);
  const decoder = new Decoder(); const result = [];
  for (const byte of packets) result.push(...decoder.feed(Buffer.from([byte])));
  assert.deepEqual(result, [{ deviceName: '手机📱' }, { bytes: [1] }]);
  assert.throws(() => new Decoder().feed(Buffer.from('bad_magic!0000')));
  assert.match(searchPacket('pc').toString(), /Host:239.255.255.250:2200\r\n/);
  assert.throws(() => searchPacket('pc\r\ninjected'));
  const device = { deviceId: 'phone', deviceName: '手机' };
  assert.deepEqual(parseDiscovery(Buffer.from('RESPONSE * HTTP/1.1\r\ncompatGsonStr:' + Buffer.from(JSON.stringify(device)).toString('base64') + '\r\n'), '192.0.2.1').device, device);
});

test('LAN pairing waits through busy and decodes real TCP fragmentation', async t => {
  let payload;
  const server = net.createServer(socket => {
    const decoder = new Decoder(); socket.on('data', data => {
      const requests = decoder.feed(data); if (!requests.length) return;
      payload = requests[0]; const frames = Buffer.concat([encodeFrame({ bytes: [11] }), encodeFrame({ bytes: [1] })]);
      socket.write(frames.subarray(0, 9)); setTimeout(() => socket.end(frames.subarray(9)), 5);
    });
  });
  const port = await listen(server); t.after(() => new Promise(resolve => server.close(resolve)));
  await pairLan({ ip: '127.0.0.1', port, state: { name: 'PC', deviceId: 'pc-id' }, account: { openId: 'user-id' }, token: 'connection-token' });
  assert.equal(payload.target_id, 'pc-id'); assert.equal(payload.open_Id, 'user-id');
  assert.deepEqual(JSON.parse(payload.extra_info), { connectType: 1, token: 'connection-token' });
});

test('login uses official URL and strict callback origin, preserves official field order', () => {
  assert.match(loginUrl(), /#\/login\?client_id=130/);
  assert(isLoginCallback('https://psuite.vivo.com.cn/vbusiness/account/cookie/getHtml?openid=abc'));
  assert(!isLoginCallback('https://evil.example/vbusiness/account/cookie/getHtml?openid=abc'));
  assert.equal(parseLoginPayload('open&token&device&CN&sum&cloud&csrf').token, 'token');
  assert.throws(() => parseLoginPayload('open&null&device&CN'));
});

test('API authenticates local calls and preserves private identity', async t => {
  const dir = await temp(t); const app = await createBackend({ stateDir: dir }); t.after(() => app.close()); await listen(app.server);
  assert.equal((await api(app, 'GET', '/api/account', undefined, false)).status, 401);
  const publicAccount = await api(app, 'GET', '/api/account'); assert.equal(publicAccount.data.loggedIn, false);
  for (const [method, route] of [
    ['GET', '/'], ['GET', '/scan'], ['GET', '/scan/app.js'], ['GET', '/scan/style.css'],
    ['POST', '/api/ui/tickets'], ['POST', '/api/ui/redeem'], ['POST', '/api/ui/files'],
  ]) {
    const result = await api(app, method, route, method === 'POST' ? {} : undefined);
    assert.equal(result.status, 404, route);
    assert.equal(result.data.error.code, 'NOT_FOUND', route);
  }
  assert.equal((await api(app, 'POST', '/api/ui/redeem', {}, false)).status, 401);
  assert.equal((await fs.stat(path.join(dir, 'config.json'))).mode & 0o777, 0o600);
  const body = await fetch(`http://127.0.0.1:${app.server.address().port}/api/account`, { headers: { authorization: `Bearer ${app.state.apiToken}`, origin: 'https://evil.example' } });
  assert.equal(body.status, 403);
  const invalid = await fetch(`http://127.0.0.1:${app.server.address().port}/api/sessions`, { method: 'POST', headers: { authorization: `Bearer ${app.state.apiToken}` }, body: '{bad' });
  assert.equal(invalid.status, 400);
  const interfaces = await api(app, 'GET', '/api/network/interfaces');
  assert.equal(interfaces.status, 200); assert(Array.isArray(interfaces.data));
  const wrongLocal = await api(app, 'POST', '/api/devices/discover', { interfaceIp: 'not-an-ip' });
  assert.equal(wrongLocal.status, 400); assert.equal(wrongLocal.data.error.code, 'LOCAL_IP_NOT_ASSIGNED');
  const wrongLan = await api(app, 'POST', '/api/sessions', { mode: 'lan', ip: '192.0.2.1', pcIp: 'not-an-ip' });
  assert.equal(wrongLan.status, 400); assert.equal(wrongLan.data.error.code, 'LOCAL_IP_NOT_ASSIGNED');
  assert.equal(app.jobs.items.size, 0);

});

test('HTTPS/WSS connection, upload, download, hashes and failure states', async t => {
  const dir = await temp(t); const phone = await mockPhone(t, dir);
  const app = await createBackend({ stateDir: path.join(dir, 'state') }); t.after(() => app.close()); await listen(app.server);
  const token = 'test-connection-token';
  const start = await api(app, 'POST', '/api/sessions', { mode: 'existing', ip: '127.0.0.1', port: phone.port, token });
  assert.equal(start.status, 202);
  const connected = await waitJob(app, start.data.id); assert.equal(connected.status, 'succeeded', JSON.stringify(connected.error));
  const id = connected.result.id;
  assert(!JSON.stringify(connected).includes(token));
  assert.match(phone.records.protocols, /v1\.hc\.vivo\.com\.cn/); assert(phone.records.protocols.includes(token));
  assert.equal((await api(app, 'POST', `/api/sessions/${id}/files`, {})).data.data[0].savePath, '/sdcard/手机.txt');
  const source = path.join(dir, '电脑📄.txt'); await fs.writeFile(source, 'PC to phone\n'.repeat(200000));
  const upload = await api(app, 'POST', `/api/sessions/${id}/uploads`, { paths: [source], savePath: '/sdcard/Download' });
  const uploaded = await waitJob(app, upload.data.id); assert.equal(uploaded.status, 'succeeded', JSON.stringify(uploaded.error));
  assert.equal(await sha256(source), await sha256(path.join(dir, 'uploaded', path.basename(source))));
  assert.equal(phone.records.preflight.type, 'TO_PC_FILE_MANAGER');
  assert.equal(phone.records.preflight.dropFileItems[0].fileName, path.basename(source));
  const download = await api(app, 'POST', `/api/sessions/${id}/downloads`, { paths: ['/sdcard/手机.txt'] });
  const downloaded = await waitJob(app, download.data.id); assert.equal(downloaded.status, 'succeeded', JSON.stringify(downloaded.error));
  assert.equal(await sha256(phone.file), downloaded.result.files[0].sha256);
  assert.equal(phone.records.downloadPreflight.total, (await fs.stat(phone.file)).size, 'phone progress denominator must be payload bytes, not zero or TAR bytes');
  for (let i = 0; i < 100 && phone.records.transferResults.length < 1; i++) await delay(5);
  assert.deepEqual(phone.records.transferResults, ['TRANS_FILE_SUCCESS:' + JSON.stringify({ successCount: 1, id: download.data.id })]);
  const binary = await fetch(`http://127.0.0.1:${app.server.address().port}/api/jobs/${download.data.id}/file?path=${encodeURIComponent('手机.txt')}`, { headers: { authorization: `Bearer ${app.state.apiToken}` } });
  assert.equal(Buffer.from(await binary.arrayBuffer()).compare(await fs.readFile(phone.file)), 0);
  phone.records.rejectUpload = true;
  const rejected = await api(app, 'POST', `/api/sessions/${id}/uploads`, { paths: [source], savePath: '/sdcard/Download' });
  assert.equal((await waitJob(app, rejected.data.id)).status, 'failed'); assert.equal(phone.records.uploadCount, 1);
  phone.records.badDownloadSize = true;
  const bad = await api(app, 'POST', `/api/sessions/${id}/downloads`, { paths: ['/sdcard/手机.txt'] });
  const badJob = await waitJob(app, bad.data.id); assert.equal(badJob.status, 'failed'); assert.equal(badJob.error.code, 'DOWNLOAD_SIZE_MISMATCH');
  await assert.rejects(fs.stat(path.join(app.state.dir, 'downloads', bad.data.id)), { code: 'ENOENT' });
  phone.records.badDownloadSize = false; phone.records.slowDownload = true;
  const cancel = await api(app, 'POST', `/api/sessions/${id}/downloads`, { paths: ['/sdcard/手机.txt'] });
  for (let i=0; i<500 && !phone.records.requests.includes(`/pc_file_manager/download?id=${cancel.data.id}`); i++) await delay(5);
  for (let i=0; i<100 && app.jobs.get(cancel.data.id).bytes === 0; i++) await delay(5);
  const partial = app.jobs.public(app.jobs.get(cancel.data.id));
  assert.equal(partial.status, 'running'); assert(partial.bytes > 0 && partial.bytes < partial.totalSize);
  assert.equal(phone.records.downloadPreflight.total, partial.totalSize);
  await api(app, 'POST', `/api/jobs/${cancel.data.id}/cancel`);
  assert.equal((await waitJob(app, cancel.data.id)).status, 'cancelled');
  await assert.rejects(fs.stat(path.join(app.state.dir, 'tmp', cancel.data.id)), { code: 'ENOENT' });
  for (let i = 0; i < 100 && phone.records.transferResults.length < 3; i++) await delay(5);
  assert.deepEqual(phone.records.transferResults.slice(1), [
    'TRANS_FILE_FAIL:' + JSON.stringify({ id: bad.data.id, successCount: 0, failCount: 1, failCode: 0 }),
    'TRANS_FILE_CANCEL:' + JSON.stringify({ id: cancel.data.id, successCount: 0, failCount: 1, type: 'send' })
  ]);
  assert(phone.records.headers.every(h => h.newtoken === token));
  await api(app, 'DELETE', `/api/sessions/${id}`); assert.equal(app.phones.list().length, 0);
  phone.records.rejectVersion = true;
  const failed = await api(app, 'POST', '/api/sessions', { mode: 'existing', ip: '127.0.0.1', port: phone.port, token });
  assert.equal((await waitJob(app, failed.data.id)).status, 'failed'); assert.equal(app.phones.list().length, 0);
});

test('download retains verified files and reports a failed completion notification', async t => {
  const dir = await temp(t), phone = await mockPhone(t, dir);
  const app = await createBackend({ stateDir: path.join(dir, 'state') }); t.after(() => app.close()); await listen(app.server);
  const start = await api(app, 'POST', '/api/sessions', { mode: 'existing', ip: '127.0.0.1', port: phone.port, token: 'notification-test' });
  const id = (await waitJob(app, start.data.id)).result.id;
  app.phones.transferResult = async () => { throw new Error('simulated closed socket'); };
  const download = await api(app, 'POST', `/api/sessions/${id}/downloads`, { paths: ['/sdcard/手机.txt'] });
  const done = await waitJob(app, download.data.id);
  assert.equal(done.status, 'failed');
  assert.equal(done.error.code, 'TRANSFER_NOTIFY_FAILED');
  assert.equal(await sha256(path.join(done.error.details.directory, '手机.txt')), await sha256(phone.file));
  assert.equal(phone.records.transferResults.length, 0);
  await assert.rejects(fs.stat(path.join(app.state.dir, 'tmp', download.data.id)), { code: 'ENOENT' });
});

test('upload accepts official HTTP-200 preflight without status but still requires final confirmation',async t=>{
 const dir=await temp(t);const phone=await mockPhone(t,dir);
 const app=await createBackend({stateDir:path.join(dir,'state')});t.after(()=>app.close());await listen(app.server);
 const start=await api(app,'POST','/api/sessions',{mode:'existing',ip:'127.0.0.1',port:phone.port,token:'test-token'});
 const id=(await waitJob(app,start.data.id)).result.id;
 const source=path.join(dir,'tiny.txt');await fs.writeFile(source,'12345678');
 const upload=async()=>{
  const result=await api(app,'POST',`/api/sessions/${id}/uploads`,{paths:[source],savePath:'/sdcard/Download'});
  return waitJob(app,result.data.id);
 };
 for(const mode of ['no-status','status','empty','text']){
  phone.records.preflightMode=mode;
  const job=await upload();assert.equal(job.status,'succeeded',`${mode}: ${JSON.stringify(job.error)}`);
  assert.equal(await fs.readFile(path.join(dir,'uploaded','tiny.txt'),'utf8'),'12345678');
 }
 const count=phone.records.uploadCount;
 for(const mode of ['code-rejected','http-rejected']){
  phone.records.preflightMode=mode;const job=await upload();assert.equal(job.status,'failed');assert.equal(phone.records.uploadCount,count);
 }
 phone.records.preflightMode='empty';phone.records.unconfirmedUpload=true;
 const job=await upload();assert.equal(job.status,'failed');assert.equal(job.error.code,'UPLOAD_UNCONFIRMED');
});

test('archive validation rejects links and unsafe paths', async t => {
  assert(!validArchivePath('../escape')); assert(!validArchivePath('/absolute')); assert(!validArchivePath('a/../../b')); assert(!validArchivePath('C:\\escape')); assert(validArchivePath('正常/文件.txt'));
  const dir = await temp(t); await fs.writeFile(path.join(dir, 'real'), 'data'); await fs.symlink('real', path.join(dir, 'link'));
  const file = path.join(dir, 'links.tar'); await official('tar').c({ file, cwd: dir }, ['link']);
  await assert.rejects(inspectTar(file), { code: 'INVALID_ARCHIVE' });
});

test('job cancellation does not report successful completion', async t => {
  const dir = await temp(t); const app = await createBackend({ stateDir: dir }); t.after(() => app.close());
  const job = app.jobs.create('test', async (_job, signal) => { await delay(10000, undefined, { signal }); return 'wrong'; });
  app.jobs.cancel(job.id); const result = await waitJob(app, job.id); assert.equal(result.status, 'cancelled');
});

test('official account callback captured through browser CDP, persisted privately and redacted', async t => {
  const dir = await temp(t); const browser = path.join(dir, 'mock-browser.mjs');
  const wsPath = path.resolve('analysis/app/node_modules/ws/index.js');
  await fs.writeFile(browser, `#!/usr/bin/env node
import http from 'node:http'; import fs from 'node:fs'; import {createRequire} from 'node:module';
const require=createRequire(import.meta.url); const WebSocket=require(${JSON.stringify(wsPath)});
const profile=process.argv.find(s=>s.startsWith('--user-data-dir=')).slice(16);
let port; const server=http.createServer((req,res)=>res.end(JSON.stringify([{type:'page',webSocketDebuggerUrl:'ws://127.0.0.1:'+port}])));
const wss=new WebSocket.WebSocketServer({server}); wss.on('connection',s=>s.on('message',raw=>{const m=JSON.parse(raw);let result={};if(m.method==='Runtime.evaluate')result={result:{value:JSON.stringify({url:'https://psuite.vivo.com.cn/vbusiness/account/cookie/getHtml?openid=fake-open',value:'fake-open&fake-token&device&CN&sum&cloud&csrf'})}};s.send(JSON.stringify({id:m.id,result}));}));
server.listen(0,'127.0.0.1',()=>{port=server.address().port;fs.writeFileSync(profile+'/DevToolsActivePort',port+'\\n');});
`, { mode: 0o700 });
  const state = { dir, name: 'test', deviceId: 'pc-test' }; const accounts = new AccountManager(state); await accounts.load();
  const previous = process.env.VIVO_BROWSER; process.env.VIVO_BROWSER = browser;
  t.after(async () => { await accounts.close(); if (previous === undefined) delete process.env.VIVO_BROWSER; else process.env.VIVO_BROWSER = previous; });
  await accounts.start({ mode: 'browser', provider: 'cdp' }); await accounts.job.done;
  assert.equal(accounts.job.status, 'succeeded', accounts.job.error);
  assert.equal(accounts.status().loggedIn, true); assert(!JSON.stringify(accounts.status()).includes('fake-token'));
  assert.equal(JSON.parse(await fs.readFile(path.join(dir, 'account.json'), 'utf8')).token, 'fake-token');
  assert.equal((await fs.stat(path.join(dir, 'account.json'))).mode & 0o777, 0o600);
  await accounts.logout(); assert.equal(accounts.status().loggedIn, false);
  await assert.rejects(fs.stat(path.join(dir, 'account.json')), { code: 'ENOENT' });
});

test('retained device reconnects after manual and heartbeat disconnect; failed retry keeps history', async t => {
  const dir = await temp(t); const phone = await mockPhone(t, dir);
  const app = await createBackend({stateDir: path.join(dir, 'state')});
  t.after(() => app.close()); await listen(app.server);
  const start = await api(app, 'POST', '/api/sessions', {mode:'existing', ip:'127.0.0.1', port:phone.port, token:'reconnect-private-token', transport:'wifi-direct'});
  let id = (await waitJob(app, start.data.id)).result.id;
  assert.equal((await api(app,'POST',`/api/sessions/${id}/disconnect`,{})).status, 200);
  assert.equal(app.phones.list()[0].status,'disconnected');
  const retry = await api(app,'POST',`/api/sessions/${id}/reconnect`,{});
  const done = await waitJob(app,retry.data.id);
  assert.equal(done.status,'succeeded',JSON.stringify(done.error));
  assert.equal(app.phones.list().length,1);
  id = done.result.id;
  assert.equal(done.result.transport,'wifi-direct');
  assert(!JSON.stringify(done).includes('reconnect-private-token'));
  app.phones.get(id).ws.terminate();
  for(let i=0;i<100 && app.phones.get(id).status==='connected';i++)await delay(5);
  phone.records.rejectVersion = true;
  const failed = await api(app,'POST',`/api/sessions/${id}/reconnect`,{});
  assert.equal((await waitJob(app,failed.data.id)).status,'failed');
  assert.equal(app.phones.list().length,1);
  assert.equal(app.phones.get(id).status,'disconnected');
  phone.records.rejectVersion = false;
  const again = await api(app,'POST',`/api/sessions/${id}/reconnect`,{});
  assert.equal((await waitJob(app,again.data.id)).status,'succeeded');
  assert.equal(app.phones.list().length,1);
});

test('silent network loss times out heartbeat and permits reconnect', async t => {
  const dir = await temp(t), phone = await mockPhone(t, dir);
  const app = await createBackend({ stateDir: path.join(dir, 'state') });
  t.after(() => app.close()); await listen(app.server);
  app.phones.heartIntervalMs = 25; app.phones.heartTimeoutMs = 150;
  const start = await api(app, 'POST', '/api/sessions', { mode: 'existing', ip: '127.0.0.1', port: phone.port, token: 'heartbeat-test-token', transport: 'wifi-direct' });
  const result = await waitJob(app, start.data.id); assert.equal(result.status, 'succeeded');
  const id = result.result.id;
  await delay(250); assert.equal(app.phones.get(id).status, 'connected', 'pong keeps active session alive');
  const socket = [...phone.ws.clients][0]; socket._socket.pause();
  for (let i = 0; i < 100 && app.phones.get(id).status === 'connected'; i++) await delay(10);
  assert.equal(app.phones.get(id).status, 'disconnected');
  assert.equal(app.phones.get(id).lastError, '手机心跳超时');
  socket._socket.resume(); socket.terminate();
  const retry = await api(app, 'POST', `/api/sessions/${id}/reconnect`, {});
  const done = await waitJob(app, retry.data.id);
  assert.equal(done.status, 'succeeded', JSON.stringify(done.error));
  assert.equal(done.result.id, id);
  assert.equal(app.phones.list().length, 1);
});


test('QR fallback and explicit reconnect retain one stable device while distinct phones stay separate', async t => {
  const dir=await temp(t), phone=await mockPhone(t,dir);
  const app=await createBackend({stateDir:path.join(dir,'state')});t.after(()=>app.close());await listen(app.server);
  phone.records.baseInfo={mobileDeviceName:'same name',mobileDeviceId:'build-id',phoneBleId:'phone-a',innerRoot:'/storage/emulated/0'};
  const connect=async token=>{
    const job=await api(app,'POST','/api/sessions',{mode:'existing',ip:'127.0.0.1',port:phone.port,token,transport:'wifi-direct'});
    const done=await waitJob(app,job.data.id);assert.equal(done.status,'succeeded',JSON.stringify(done.error));return done.result.id;
  };
  const id=await connect('first-token');
  await api(app,'POST',`/api/sessions/${id}/disconnect`,{});
  app.phones.sessions.set('stale-history', {...app.phones.get(id), id:'stale-history', ws:undefined, heartTimer:undefined});
  assert.equal(await connect('new-qr-token'),id);
  assert.equal(app.phones.list().length,1);
  await api(app,'POST',`/api/sessions/${id}/disconnect`,{});
  const retry=await api(app,'POST',`/api/sessions/${id}/reconnect`,{});
  const done=await waitJob(app,retry.data.id);
  assert.equal(done.status,'succeeded',JSON.stringify(done.error));assert.equal(done.result.id,id);
  assert.equal(app.phones.list().length,1);
  phone.records.baseInfo={...phone.records.baseInfo,phoneBleId:'phone-b'};
  assert.notEqual(await connect('other-phone-token'),id);
  assert.equal(app.phones.list().length,2,'same model/build/name/IP is not device identity');
});

test('clipboard API exchanges exact text over heartbeat WS, deduplicates echoes and scopes content', async t => {
  const dir = await temp(t), phone = await mockPhone(t, dir);
  const app = await createBackend({ stateDir: path.join(dir, 'state') }); t.after(() => app.close()); await listen(app.server);
  const start = await api(app, 'POST', '/api/sessions', { mode: 'existing', ip: '127.0.0.1', port: phone.port, token: 'clipboard-test' });
  const id = (await waitJob(app, start.data.id)).result.id;
  const route = `/api/sessions/${id}/clipboard`;
  assert.equal((await api(app, 'GET', route)).data.text, null);
  const text = '手机📱:https://example.test/a:b\n第二行\u0000{"text":"原始文本"}';
  for (const socket of phone.ws.clients) socket.send('CLIPBOARD_TEXT:' + text);
  for (let i = 0; i < 100 && app.phones.get(id).clipboard?.text !== text; i++) await delay(5);
  const received = (await api(app, 'GET', route)).data;
  assert.equal(received.text, text); assert.equal(received.source, 'phone'); assert.equal(received.revision, 1);
  assert(!JSON.stringify((await api(app, 'GET', '/api/sessions')).data).includes('第二行'));
  assert.equal((await api(app, 'PUT', route, { text })).data.sent, false);
  assert.equal(phone.records.clipboardMessages?.length || 0, 0);
  const outbound = '电脑📋:line1\nline2';
  const sent = await api(app, 'PUT', route, { text: outbound });
  assert.equal(sent.status, 200); assert.equal(sent.data.source, 'pc'); assert.equal(sent.data.revision, 2);
  for (let i = 0; i < 100 && !phone.records.clipboardMessages?.length; i++) await delay(5);
  assert.deepEqual(phone.records.clipboardMessages, ['CLIPBOARD_TEXT:' + outbound]);
  for (const socket of phone.ws.clients) socket.send('CLIPBOARD_TEXT:' + outbound);
  await delay(20);
  assert.equal((await api(app, 'GET', route)).data.revision, 2);
  assert.equal((await api(app, 'PUT', route, { text: '' })).data.text, '');
  assert.equal((await api(app, 'PUT', route, { text: '中'.repeat(CLIPBOARD_LIMIT) })).status, 400);
  assert.equal((await api(app, 'PUT', route, { text: 123 })).status, 400);
  assert.equal((await api(app, 'PATCH', route, { enabled: 'false' })).status, 400);
  const paused = await api(app, 'PATCH', route, { enabled: false }); assert.equal(paused.data.text, null);
  for (const socket of phone.ws.clients) socket.send('CLIPBOARD_TEXT:ignored');
  await delay(20);
  assert.equal((await api(app, 'GET', route)).data.text, null);
  assert.equal((await api(app, 'PUT', route, { text: 'disabled' })).status, 409);
  await api(app, 'PATCH', route, { enabled: true });
  assert.equal((await api(app, 'GET', route, undefined, false)).status, 401);
  assert.equal((await api(app, 'GET', '/api/sessions/missing/clipboard')).status, 404);
  app.phones.sessions.set('other', { id: 'other', status: 'disconnected' });
  assert.equal((await api(app, 'GET', '/api/sessions/other/clipboard')).data.text, null);
  await api(app, 'POST', `/api/sessions/${id}/disconnect`, {});
  assert.equal((await api(app, 'GET', route)).data.text, null);
  assert.equal((await api(app, 'PUT', route, { text: 'offline' })).data.error.code, 'SESSION_DISCONNECTED');
});

test('clipboard ignores unrelated, binary and oversized messages; empty text and exact size are supported', () => {
  const s = { status: 'connected' }, phones = { get: () => s }, clipboard = new ClipboardManager(phones);
  for (const [message, binary] of [['ok', false], ['CLIPBOARD_TEXT:binary', true], ['CLIPBOARD_TEXT:' + 'x'.repeat(CLIPBOARD_LIMIT + 1), false]]) {
    receiveClipboard(s, Buffer.from(message), binary);
    assert.equal(clipboard.read('test').revision, 0);
  }
  receiveClipboard(s, Buffer.from('CLIPBOARD_TEXT:' + 'x'.repeat(CLIPBOARD_LIMIT)));
  assert.equal(clipboard.read('test').text.length, CLIPBOARD_LIMIT);
  receiveClipboard(s, Buffer.from('CLIPBOARD_TEXT:'));
  assert.equal(clipboard.read('test').text, '');
});

test('clipboard send errors and concurrent updates cannot publish stale text', async () => {
  const s = { status: 'connected', ws: { readyState: 1 } };
  let complete;
  const phones = { get: () => s, sendMessage: () => new Promise(resolve => { complete = resolve; }) };
  const clipboard = new ClipboardManager(phones);
  const first = clipboard.write('test', { text: 'old' });
  await assert.rejects(clipboard.write('test', { text: 'concurrent' }), { code: 'CLIPBOARD_BUSY' });
  receiveClipboard(s, Buffer.from('CLIPBOARD_TEXT:newer phone text'));
  complete(); await first;
  assert.equal(clipboard.read('test').text, 'newer phone text');
  const second = clipboard.write('test', { text: 'before pause' });
  clipboard.configure('test', { enabled: false }); clipboard.configure('test', { enabled: true });
  complete(); await second;
  assert.equal(clipboard.read('test').text, null);
  phones.sendMessage = async () => { throw new Error('socket failed'); };
  await assert.rejects(clipboard.write('test', { text: 'unsent' }), /socket failed/);
  assert.equal(clipboard.read('test').text, null);
});

test('remembered devices restore privately and reconnect without scanning after restart or network loss', async t => {
  const dir = await temp(t), phone = await mockPhone(t, dir), stateDir = path.join(dir, 'state');
  let app = await createBackend({ stateDir }); t.after(() => app.close()); await listen(app.server);
  const start = await api(app, 'POST', '/api/sessions', { mode: 'existing', ip: '127.0.0.1', port: phone.port, token: 'remembered-private-token', transport: 'wifi-direct' });
  const first = await waitJob(app, start.data.id); assert.equal(first.status, 'succeeded');
  const id = first.result.id;
  const file = path.join(stateDir, 'devices.json');
  assert.equal((await fs.stat(file)).mode & 0o777, 0o600);
  assert.equal(JSON.parse(await fs.readFile(file)).devices[0].token, 'remembered-private-token');
  await app.close();
  app = await createBackend({ stateDir }); await listen(app.server);
  // This test exercises the connection protocol over loopback, without a GO.
  app.p2p.reconnectState = () => null;
  assert.equal(app.phones.list()[0].id, id); assert.equal(app.phones.list()[0].status, 'disconnected');
  app.remembered.tick();
  let job = [...app.jobs.items.values()].find(j => j.kind === 'reconnect'); assert(job);
  assert.equal((await waitJob(app, job.id)).status, 'succeeded');
  assert.equal(app.phones.list().length, 1); assert.equal(app.phones.get(id).status, 'connected');
  assert.equal(phone.records.versionBody.isAutoConnect, true); assert.equal(phone.records.baseBody.isAutoConnect, true);
  assert(!JSON.stringify(app.phones.list()).includes('remembered-private-token'));
  assert(!JSON.stringify([...app.jobs.items.values()].map(j => app.jobs.public(j))).includes('remembered-private-token'));
  app.phones.get(id).ws.terminate();
  for (let i = 0; i < 100 && app.phones.get(id).status !== 'disconnected'; i++) await delay(5);
  app.remembered.tick(); job = [...app.jobs.items.values()].at(-1);
  assert.equal((await waitJob(app, job.id)).status, 'succeeded');
  assert.equal(app.phones.get(id).status, 'connected');
  assert(phone.records.requests.every(route => !/scan|preconnect|notifyConnection/.test(route)));
  await api(app, 'POST', `/api/sessions/${id}/disconnect`, {});
  const count = app.jobs.items.size; app.remembered.tick(); assert.equal(app.jobs.items.size, count);
  await app.close();
  app = await createBackend({ stateDir }); await listen(app.server);
  assert.equal(app.phones.get(id).autoConnect, false); app.remembered.tick(); assert.equal(app.jobs.items.size, 0);
  await api(app, 'DELETE', `/api/sessions/${id}`);
  assert.equal(JSON.parse(await fs.readFile(file)).devices.length, 0);
});

test('automatic reconnect backs off transport errors, stops on rejected credentials, and rejects a different device', async t => {
  const dir = await temp(t), phone = await mockPhone(t, dir);
  const app = await createBackend({ stateDir: path.join(dir, 'state') }); t.after(() => app.close()); await listen(app.server);
  const start = await api(app, 'POST', '/api/sessions', { mode: 'existing', ip: '127.0.0.1', port: phone.port, token: 'remembered-auth-token' });
  const id = (await waitJob(app, start.data.id)).result.id;
  app.phones.get(id).ws.terminate();
  for (let i=0; i<100 && app.phones.get(id).status !== 'disconnected'; i++) await delay(5);
  phone.records.rejectVersion = true;
  app.remembered.tick();
  const job = [...app.jobs.items.values()].at(-1);
  assert.equal((await waitJob(app, job.id)).status, 'failed');
  assert.equal(app.phones.get(id).autoConnect, false); assert.equal(app.phones.get(id).needsAuthorization, true);
  const count = app.jobs.items.size; app.remembered.tick(); assert.equal(app.jobs.items.size, count);
  phone.records.rejectVersion = false;
  phone.records.baseInfo = { mobileDeviceId: 'different-phone', mobileDeviceName: 'same address' };
  const retry = await api(app, 'POST', `/api/sessions/${id}/reconnect`, {});
  const done = await waitJob(app, retry.data.id);
  assert.equal(done.error.code, 'DEVICE_IDENTITY_MISMATCH');
  assert.equal(app.phones.get(id).info.mobileDeviceId, 'mock-phone');
  assert.equal(app.phones.get(id).status, 'disconnected');
  await api(app, 'DELETE', '/api/account');
  assert.equal(app.phones.list().length, 0);
  assert.equal(JSON.parse(await fs.readFile(path.join(app.state.dir, 'devices.json'))).devices.length, 0);
});
