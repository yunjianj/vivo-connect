import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { AccountManager, payloadFromHtml } from '../src/account.mjs';
import { createBackend } from '../src/server.mjs';
import { importAccount } from '../../tools/import-account.mjs';

async function state(t) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-login-test-')); t.after(() => fs.rm(dir, { recursive: true, force: true }));
  return { dir, deviceId: 'test-pc', name: 'Test PC' };
}

test('manual login never launches a browser, saved callback imports without echoing secrets', async t => {
  const value = await state(t); const app = await createBackend({ stateDir: value.dir }); t.after(() => app.close());
  app.server.listen(0, '127.0.0.1'); await once(app.server, 'listening');
  const port = app.server.address().port;
  const response = await fetch(`http://127.0.0.1:${port}/api/account/login`, { method: 'POST', headers: { authorization: `Bearer ${app.state.apiToken}`, 'content-type': 'application/json' }, body: JSON.stringify({ mode: 'manual' }) });
  assert.equal(response.status, 202);
  const login = await response.json(); assert.equal(login.mode, 'manual'); assert.equal(login.completionRequired, true);
  const repeat = await app.accounts.start({ mode: 'manual' }); assert.equal(repeat.id, login.id);
  await assert.rejects(app.accounts.complete({ id: 'wrong', payload: 'open&secret&pc&CN' }), { code: 'LOGIN_NOT_PENDING' });
  await assert.rejects(app.accounts.complete({ id: login.id, payload: 'open&secret&pc&CN', callbackUrl: 'https://evil.example' }), { code: 'INVALID_ARGUMENT' });
  const file = path.join(value.dir, 'callback.html');
  await fs.writeFile(file, `<html><input value='open&#38;private-token&amp;device&amp;CN&amp;sum&amp;cloud&amp;csrf' type='hidden'></html>`);
  const result = await importAccount(file, { stateDir: value.dir, port });
  assert.equal(result.loggedIn, true); assert.equal(result.login.phase, 'authenticated');
  assert(!JSON.stringify(result).includes('private-token'));
  assert.equal(JSON.parse(await fs.readFile(path.join(value.dir, 'account.json'), 'utf8')).token, 'private-token');
  await assert.rejects(app.accounts.complete({ id: login.id, payload: 'open&secret&pc&CN' }), { code: 'LOGIN_NOT_PENDING' });
  assert.throws(() => payloadFromHtml('<input type="hidden" value="login-page-without-callback">'), { code: 'LOGIN_PAYLOAD_MISSING' });
});

test('WebDriver default automation retries transient navigation and saves the callback', async t => {
  const value = await state(t); const driver = path.join(value.dir, 'driver.mjs'); const browser = path.join(value.dir, 'browser');
  await fs.writeFile(browser, '#!/bin/sh\nexit 0\n', { mode: 0o700 });
  await fs.writeFile(driver, `#!/usr/bin/env node
import http from 'node:http'; let reads=0;
const server=http.createServer(async(req,res)=>{let body='';for await(const c of req)body+=c;let value=null;
if(req.url==='/session'){const caps=JSON.parse(body).capabilities.alwaysMatch;if(caps.pageLoadStrategy!=='none')throw Error('wrong wait strategy');value={sessionId:'mock'};}
if(req.url.endsWith('/execute/sync')){if(!reads++){res.writeHead(500);res.end(JSON.stringify({value:{error:'javascript error'}}));return;}value={url:'https://psuite.vivo.com.cn/vbusiness/account/cookie/getHtml?openid=mock',ready:'complete',value:'open&private-token&device&CN'};}
res.end(JSON.stringify({value}));});server.listen(0,'127.0.0.1',()=>console.log('ChromeDriver was started successfully on port '+server.address().port+'.'));
`, { mode: 0o700 });
  const priorBrowser = process.env.VIVO_BROWSER, priorDriver = process.env.VIVO_WEBDRIVER;
  process.env.VIVO_BROWSER = browser; process.env.VIVO_WEBDRIVER = driver;
  t.after(() => { for (const [key, old] of [['VIVO_BROWSER', priorBrowser], ['VIVO_WEBDRIVER', priorDriver]]) { if (old === undefined) delete process.env[key]; else process.env[key] = old; } });
  const accounts = new AccountManager(value); t.after(() => accounts.close()); await accounts.load();
  const result = await accounts.start(); assert.equal(result.provider, 'webdriver'); assert.equal(result.mode, 'browser');
  await accounts.job.done;
  assert.equal(accounts.job.status, 'succeeded', accounts.job.error); assert.equal(accounts.status().loggedIn, true);
  assert.equal(accounts.job.phase, 'authenticated'); assert(!JSON.stringify(accounts.status()).includes('private-token'));
});
