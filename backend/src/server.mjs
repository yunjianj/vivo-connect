import http from 'node:http';
import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import { initState, ApiError, requireThat } from './core.mjs';
import { collect } from './http.mjs';
import { AccountManager } from './account.mjs';
import { PhoneManager } from './phone.mjs';
import { Jobs } from './jobs.mjs';
import { Transfers } from './transfers.mjs';
import { networkInterfaces } from './network.mjs';
import { LocalUi } from './ui.mjs';
import { P2pManager } from './p2p.mjs';
import { ScanManager } from './scan.mjs';
import { FileManager } from './files.mjs';

export async function createBackend({ stateDir, accountManager, phoneManager } = {}) {
  const state = await initState(stateDir);
  const accounts = accountManager || new AccountManager(state); await accounts.load();
  const phones = phoneManager || new PhoneManager(state, accounts);
  const ui = new LocalUi();
  const jobs = new Jobs();
  phones.onReplace = id => jobs.cancelSession(id, { exceptKind: 'reconnect' });
  const transfers = new Transfers(state, phones);
  const files = new FileManager(phones);
  const p2p = new P2pManager(state, phones, jobs);
  const scans = new ScanManager(state, accounts, phones, jobs);
  const reply = (res, status, value) => {
    res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' });
    res.end(JSON.stringify(value));
  };
  const server = http.createServer(async (req, res) => {
    try {
      const host = req.headers.host || '';
      requireThat(/^(127\.0\.0\.1|localhost)(:\d+)?$/.test(host), '不接受此 Host');
      if (req.headers.origin && req.headers.origin !== `http://${host}`) throw new ApiError(403, 'ORIGIN_REJECTED', '不接受跨站请求');
      const url = new URL(req.url, `http://${host}`);
      if (await ui.public(req, res, url, reply)) return;
      if (req.method === 'GET' && url.pathname === '/health') return reply(res, 200, { ok: true });
      const authorization = Buffer.from(req.headers.authorization || ''); const expected = Buffer.from(`Bearer ${state.apiToken}`);
      if ((authorization.length !== expected.length || !crypto.timingSafeEqual(authorization, expected)) && !ui.authorized(req.headers.authorization, `${req.method} ${url.pathname}`)) throw new ApiError(401, 'UNAUTHORIZED', '需要本地 API Bearer token');
      if(req.method==='POST'&&url.pathname==='/api/ui/files')return reply(res,202,await ui.upload(req,url,{state,transfers,jobs}));
      let body = {};
      if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
        const raw = await collect(req, 1024 * 1024);
        try { body = raw.length ? JSON.parse(raw.toString('utf8')) : {}; }
        catch { throw new ApiError(400, 'INVALID_JSON', '请求体必须是 JSON'); }
        requireThat(body && typeof body === 'object' && !Array.isArray(body), '请求体应为对象');
      }
      const route = `${req.method} ${url.pathname}`;
      if (route === 'POST /api/ui/tickets') return reply(res, 201, ui.ticket());
      if (route === 'GET /api/account') return reply(res, 200, accounts.status());
      if (route === 'POST /api/account/login') return reply(res, 202, await accounts.start(body));
      if (route === 'POST /api/account/login/complete') return reply(res, 200, await accounts.complete(body));
      if (route === 'DELETE /api/account') {
        // A logged-in phone must not retain stale account metadata after logout.
        await jobs.close(); await phones.close(); await accounts.logout();
        return reply(res, 200, { loggedIn: false });
      }
      if (route === 'GET /api/p2p/status') return reply(res,200,p2p.status());
      if (route === 'GET /api/p2p/capabilities') return reply(res,200,await p2p.capabilities(url.searchParams.get('interface')||undefined));
      if (route === 'POST /api/p2p/register') return reply(res,200,await p2p.register(body));
      if (route === 'POST /api/p2p/heartbeat') return reply(res,200,p2p.heartbeat(body.id,body.progress));
      if (route === 'POST /api/p2p/unregister') return reply(res,200,await p2p.unregister(body.id));
      if (route === 'POST /api/sessions/p2p') return reply(res,202,await p2p.scan());
      if (route === 'GET /api/network/interfaces') return reply(res, 200, networkInterfaces());
      if (route === 'GET /api/devices/usb') return reply(res, 200, await phones.usbDevices());
      if (route === 'POST /api/devices/discover') return reply(res, 200, await phones.discover(body));
      if (route === 'POST /api/sessions/scan') return reply(res, 202, await scans.start(body));
      if (route === 'GET /api/sessions') return reply(res, 200, phones.list());
      if (route === 'POST /api/sessions') {
        const options = phones.prepareConnection(body);
        return reply(res, 202, jobs.create('connect', (_job, signal) => phones.connect(options, signal)));
      }
      if (route === 'GET /api/jobs') return reply(res, 200, [...jobs.items.values()].map(j => jobs.public(j)));
      const fileAction = url.pathname.match(/^\/api\/sessions\/([\w-]+)\/files\/(move|rename|delete|mkdir|size)$/);
      if (req.method === 'POST' && fileAction) return reply(res, 200, await files.execute(fileAction[1], fileAction[2], body));
      const connectionAction = url.pathname.match(/^\/api\/sessions\/([\w-]+)\/(disconnect|reconnect)$/);
      if (req.method === 'POST' && connectionAction) {
        const [, id, action] = connectionAction;
        phones.get(id);
        if (action === 'disconnect') {
          await jobs.cancelSession(id);
          return reply(res, 200, await phones.pause(id));
        }
        return reply(res, 202, jobs.create('reconnect', (_job, signal) => phones.reconnect(id, signal), id));
      }
      let match = url.pathname.match(/^\/api\/sessions\/([\w-]+)(?:\/(files|uploads|downloads))?$/);
      if (match) {
        const [, id, action] = match;
        if (req.method === 'DELETE' && !action) { await jobs.cancelSession(id); await phones.disconnect(id); return reply(res, 200, { disconnected: true }); }
        if (req.method === 'GET' && !action) return reply(res, 200, phones.public(phones.get(id)));
        if (req.method === 'POST' && action === 'files') return reply(res, 200, await phones.files(id, body));
        if (req.method === 'POST' && ['uploads', 'downloads'].includes(action)) {
          transfers.session(id);
          return reply(res, 202, jobs.create(action === 'uploads' ? 'upload' : 'download',
            (job, signal) => transfers[action === 'uploads' ? 'upload' : 'download'](id, body, job, signal), id));
        }
      }
      match = url.pathname.match(/^\/api\/jobs\/([\w-]+)(?:\/(cancel|file))?$/);
      if (match) {
        const [, id, action] = match;
        if (req.method === 'GET' && !action) return reply(res, 200, jobs.public(jobs.get(id)));
        if (req.method === 'POST' && action === 'cancel') return reply(res, 200, jobs.cancel(id));
        if (req.method === 'GET' && action === 'file') {
          const job = jobs.get(id); const name = url.searchParams.get('path');
          requireThat(job.kind === 'download' && job.status === 'succeeded' && job.result.files.some(f => f.path === name), '没有该已完成下载文件');
          const file = path.join(job.result.directory, name); const stat = await fs.stat(file);
          res.writeHead(200, { 'content-type': 'application/octet-stream', 'content-length': stat.size,
            'content-disposition': `attachment; filename*=UTF-8''${encodeURIComponent(path.basename(name))}`, 'cache-control': 'no-store' });
          await pipeline(createReadStream(file), res); return;
        }
      }
      throw new ApiError(404, 'NOT_FOUND', '接口不存在');
    } catch (error) {
      if (!res.headersSent && !res.destroyed) reply(res, error.status || 500, { error: { code: error.code || 'INTERNAL_ERROR', message: error.message, details: error.details } });
      else res.destroy();
    }
  });
  // Browser-selected files are streamed locally before the phone job starts.
  server.requestTimeout = 300000; server.headersTimeout = 10000;
  return { state, server, accounts, phones, jobs, transfers, scans, p2p, async close() {
    const closed = server.listening ? new Promise(resolve => server.close(resolve)) : Promise.resolve();
    await p2p.close(); await jobs.close(); await phones.close(); await accounts.close();
    server.closeAllConnections(); await closed;
  } };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const backend = await createBackend();
  const port = Number(process.env.PORT || 8765);
  requireThat(Number.isInteger(port) && port > 0 && port <= 65535, 'PORT 必须是有效端口');
  backend.server.listen(port, '127.0.0.1', () => {
    console.log(`vivo backend: http://127.0.0.1:${port}`);
    console.log(`API token: ${path.join(backend.state.dir, 'config.json')} 中的 apiToken 字段`);
  });
  let closing = false;
  for (const event of ['SIGINT', 'SIGTERM']) process.on(event, async () => { if (closing) return; closing = true; await backend.close(); process.exit(0); });
}
