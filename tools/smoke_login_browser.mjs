#!/usr/bin/env node
// A real headless browser regression against a local page, never a real account.
import http from 'node:http';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import { detectBrowser, executable, WebDriver } from '../backend/src/browser.mjs';

const binary = await detectBrowser(); const driver = await executable(process.env.VIVO_WEBDRIVER || 'chromedriver');
assert(binary && driver, '需要 Chromium/Chrome 和匹配的 chromedriver');
const profile = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-real-browser-')); let browser;
const held = new Set();
const server = http.createServer((req,res) => {
  if (req.url === '/hold') { held.add(res); res.on('close', () => held.delete(res)); return; }
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end(`<html><body>本地慢加载测试<script>setTimeout(()=>{const e=document.createElement('input');e.type='hidden';e.value='offline-test';document.body.append(e)},10000)</script><img src="/hold"></body></html>`);
});
try {
  server.listen(0, '127.0.0.1'); await once(server, 'listening');
  browser = await WebDriver.launch({ binary, driver, profile, headless: true });
  const before = Date.now(); await browser.navigate(`http://127.0.0.1:${server.address().port}/`);
  assert(Date.now() - before < 8000, 'navigation must not block on page load');
  let result;
  for (let i=0; i<40; i++) {
    result = await browser.execute(`return {ready:document.readyState,value:document.querySelector('input[type="hidden"]')?.value||''}`);
    if (result.value) break;
    await delay(500);
  }
  assert.equal(result.value, 'offline-test'); assert.equal(result.ready, 'interactive');
  console.log('PASS: real Chromium/ChromeDriver kept a slow-loading page open beyond 8 seconds and automatically read its delayed callback field. No official account was accessed.');
} finally {
  await browser?.close(); for(const res of held) res.destroy(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await fs.rm(profile, { recursive: true, force: true });
}
