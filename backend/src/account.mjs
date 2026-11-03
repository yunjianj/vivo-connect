import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import { detectBrowser, executable, WebDriver, stopChild } from './browser.mjs';
import { ApiError, official, privateJson, readJson, accountPublic, requireThat } from './core.mjs';

export const CALLBACK = 'https://psuite.vivo.com.cn/vbusiness/account/cookie/getHtml';
export function loginUrl() {
  // Parameters belong inside the SPA hash, matching the official renderer.
  return `https://passport.vivo.com.cn/#/login?client_id=130&redirect_uri=${CALLBACK}&type=1&theme=light&lang=zh_CN`;
}
export function parseLoginPayload(value) {
  requireThat(typeof value === 'string' && value.length <= 65536, '回调内容格式错误');
  const fields = value.split('&');
  if (fields.length < 4 || fields.length > 7 || !fields[0] || !fields[1] || ['null', 'undefined'].includes(fields[0]) || ['null', 'undefined'].includes(fields[1])) {
    throw new ApiError(502, 'INVALID_LOGIN_CALLBACK', '官方登录回调未包含有效账号凭据');
  }
  const [openId, token, deviceId, regionCode, checksum = '', cloudOpenId = '', csrfToken = ''] = fields;
  return { openId, token, deviceId, regionCode, checksum, cloudOpenId, csrfToken };
}
export function isLoginCallback(url) {
  try { const u = new URL(url); return u.origin === new URL(CALLBACK).origin && u.pathname === new URL(CALLBACK).pathname && u.searchParams.has('openid'); }
  catch { return false; }
}

// Read a browser-saved callback page as data; never execute its scripts.
export function payloadFromHtml(html) {
  requireThat(typeof html === 'string', '需要官方回调页 HTML');
  const decode = text => text.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (whole, entity) => {
    if (entity.startsWith('#')) {
      const n = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1));
      return n > 0 && n <= 0x10ffff && !(n >= 0xd800 && n <= 0xdfff) ? String.fromCodePoint(n) : whole;
    }
    return { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' }[entity.toLowerCase()];
  });
  for (const match of html.matchAll(/<input\b(?:[^"'<>]|"[^"]*"|'[^']*')*>/gi)) {
    const attrs = {};
    for (const attr of match[0].matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
      attrs[attr[1].toLowerCase()] = decode(attr[2] ?? attr[3] ?? attr[4]);
    }
    if (attrs.type?.toLowerCase() === 'hidden' && attrs.value) {
      try { parseLoginPayload(attrs.value); return attrs.value; } catch { /* Try another hidden input. */ }
    }
  }
  throw new ApiError(400, 'LOGIN_PAYLOAD_MISSING', '文件中没有官方登录回调凭据；请在登录后跳转的 psuite 回调页保存 HTML，而不是保存登录页');
}

export class Cdp {
  seq = 0; pending = new Map();
  constructor(socket) {
    this.socket = socket;
    socket.on('message', raw => {
      let value;
      try { value = JSON.parse(raw); } catch { return this.fail(new Error('Invalid browser response')); }
      const waiter = this.pending.get(value.id);
      if (!waiter) return;
      this.pending.delete(value.id); clearTimeout(waiter.timer);
      value.error ? waiter.reject(new Error(value.error.message)) : waiter.resolve(value.result);
    });
    socket.on('close', () => this.fail(new Error('登录浏览器已关闭')));
    socket.on('error', error => this.fail(error));
  }
  fail(error) { for (const item of this.pending.values()) { clearTimeout(item.timer); item.reject(error); } this.pending.clear(); }
  send(method, params = {}, timeout = 8000) {
    return new Promise((resolve, reject) => {
      const id = ++this.seq;
      const timer = setTimeout(() => { this.pending.delete(id); reject(new Error(`Browser command timeout: ${method}`)); }, timeout);
      this.pending.set(id, { resolve, reject, timer });
      this.socket.send(JSON.stringify({ id, method, params }), error => {
        if (error) { clearTimeout(timer); this.pending.delete(id); reject(error); }
      });
    });
  }
  close() { this.socket.close(); this.fail(new Error('Browser session closed')); }
}

export class AccountManager {
  constructor(state) { this.state = state; this.job = null; }
  async load() { this.account = await readJson(path.join(this.state.dir, 'account.json'), null); }
  status() { return { ...accountPublic(this.account), login: this.job ? { id: this.job.id, mode: this.job.mode, provider: this.job.provider, phase: this.job.phase, status: this.job.status, error: this.job.error } : null }; }
  async save(value, source = 'official-web-callback') {
    this.account = { ...value, source, loggedInAt: new Date().toISOString() };
    await privateJson(path.join(this.state.dir, 'account.json'), this.account);
  }
  async start({ mode = 'auto', provider = 'auto' } = {}) {
    requireThat(['auto', 'cdp', 'webdriver'].includes(provider), 'provider 应为 auto、webdriver 或 cdp');
    const browser = mode === 'manual' ? null : await detectBrowser();
    if (mode === 'auto') mode = browser ? 'browser' : 'manual';
    requireThat(['manual', 'browser'].includes(mode), 'mode 应为 manual 或 browser');
    if (this.job?.status === 'waiting') {
      if (this.job.mode === mode) return this.loginResponse();
      this.job.controller.abort(); await this.job.done;
    }
    if (mode === 'browser' && !browser) throw new ApiError(503, 'BROWSER_REQUIRED', '没有检测到可自动控制的浏览器；可安装 Chromium/Chrome 或使用 manual 模式');
    const driver = mode === 'browser' && provider !== 'cdp' ? await executable(process.env.VIVO_WEBDRIVER || 'chromedriver') : null;
    if (provider === 'webdriver' && !driver) throw new ApiError(503, 'DRIVER_REQUIRED', '没有找到 chromedriver；可配置 VIVO_WEBDRIVER');
    const selectedProvider = mode === 'manual' ? 'manual' : (driver ? 'webdriver' : 'cdp');
    const job = this.job = { id: crypto.randomUUID(), mode, provider: selectedProvider, phase: mode === 'manual' ? 'waiting-for-import' : 'launching', status: 'waiting', controller: new AbortController() };
    if (mode === 'browser') job.done = (driver ? this.runWebDriver(browser, driver, job) : this.runBrowser(browser, job)).catch(error => {
      if (this.job === job) { job.status = 'failed'; job.phase = 'failed'; job.error = error.message; }
    });
    return this.loginResponse();
  }
  loginResponse() {
    return { id: this.job.id, mode: this.job.mode, provider: this.job.provider, phase: this.job.phase, status: this.job.status, loginUrl: loginUrl(),
      ...(this.job.mode === 'manual' ? { completionRequired: true, instructions: '手动打开 loginUrl，完成登录后保存官方 psuite 回调页 HTML，运行 node tools/import-account.mjs <HTML文件路径> 导入。' } : {}) };
  }
  async complete({ id, payload, callbackUrl } = {}) {
    requireThat(typeof id === 'string' && id.length > 0, 'id 必填');
    if (!this.job || this.job.id !== id || this.job.mode !== 'manual' || this.job.status !== 'waiting') {
      throw new ApiError(409, 'LOGIN_NOT_PENDING', '没有匹配的手动登录请求，请重新获取登录链接');
    }
    if (callbackUrl !== undefined) requireThat(isLoginCallback(callbackUrl), '必须使用官方 psuite 登录回调地址');
    const value = parseLoginPayload(payload);
    await this.save(value, 'manual-official-callback');
    this.job.status = 'succeeded'; this.job.phase = 'authenticated';
    return this.status();
  }
  loginTimeout() {
    const timeout = Number(process.env.VIVO_LOGIN_TIMEOUT_MS || 900000);
    requireThat(Number.isFinite(timeout) && timeout >= 30000 && timeout <= 3600000, 'VIVO_LOGIN_TIMEOUT_MS 应为 30000–3600000');
    return timeout;
  }
  async runWebDriver(binary, driver, job) {
    const signal = job.controller.signal;
    const profile = await fs.mkdtemp(path.join(this.state.dir, 'login-browser-'));
    let browser;
    try {
      browser = await WebDriver.launch({ binary, driver, profile, signal });
      job.phase = 'loading-page';
      await browser.navigate(loginUrl());
      const deadline = Date.now() + this.loginTimeout();
      while (Date.now() < deadline) {
        signal.throwIfAborted();
        let page;
        try {
          page = await browser.execute(`const info=arguments[0]; const e=document.getElementById('originSuite_device_info');
            if(e)e.setAttribute('value', JSON.stringify(info));
            return {url:location.href,ready:document.readyState,value:document.querySelector('input[type="hidden"]')?.getAttribute('value')||''};`,
            [{ pcDeviceId: this.state.deviceId, pcDeviceName: this.state.name, client_id: 130 }]);
        } catch (error) {
          signal.throwIfAborted();
          if (['invalid session id', 'no such window', 'disconnected'].includes(error.driverCode)) throw new Error('登录浏览器已关闭，请重新发起登录');
          // Context changes and short command timeouts during navigation are not
          // authentication failures. Keep the page open until the overall limit.
          await delay(1000, undefined, { signal }); continue;
        }
        if (isLoginCallback(page?.url) && page.value) {
          job.phase = 'reading-callback'; await this.save(parseLoginPayload(page.value));
          job.status = 'succeeded'; job.phase = 'authenticated'; return;
        }
        job.phase = page?.ready === 'complete' || page?.ready === 'interactive' ? 'waiting-for-user' : 'loading-page';
        await delay(1000, undefined, { signal });
      }
      throw new Error('等待官方登录完成超时（默认 15 分钟），请重新发起登录');
    } finally { await browser?.close(); await fs.rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); }
  }
  async runBrowser(browser, job) {
    const signal = job.controller.signal;
    // Isolated profile: no access to any existing personal browser session.
    const profile = await fs.mkdtemp(path.join(this.state.dir, 'login-browser-'));
    let child, cdp; let childError;
    try {
      child = spawn(browser, [`--user-data-dir=${profile}`, '--remote-debugging-port=0',
        '--remote-debugging-address=127.0.0.1', '--no-first-run', '--no-default-browser-check', 'about:blank'], { stdio: 'ignore' });
      child.on('error', error => { childError = error; });
      const deadline = Date.now() + this.loginTimeout();
      let port;
      for (let i = 0; i < 100 && !signal.aborted; i++) {
        if (childError) throw childError;
        if (child.exitCode !== null) throw new Error('登录浏览器启动失败或已经关闭');
        try { port = Number((await fs.readFile(path.join(profile, 'DevToolsActivePort'), 'utf8')).split('\n')[0]); break; }
        catch (e) { if (e.code !== 'ENOENT') throw e; }
        await delay(100, undefined, { signal });
      }
      if (!port) throw new Error('未取得 Chromium 调试端口');
      const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.any([signal, AbortSignal.timeout(8000)]) });
      const pages = await response.json(); const page = pages.find(p => p.type === 'page');
      if (!page?.webSocketDebuggerUrl) throw new Error('未找到登录页');
      const WebSocket = official('ws'); const ws = new WebSocket(page.webSocketDebuggerUrl);
      await once(ws, 'open', { signal }); cdp = new Cdp(ws);
      await cdp.send('Page.enable');
      const info = JSON.stringify({ pcDeviceId: this.state.deviceId, pcDeviceName: this.state.name, client_id: 130 });
      await cdp.send('Page.addScriptToEvaluateOnNewDocument', { source: `addEventListener('DOMContentLoaded',()=>{let e=document.getElementById('originSuite_device_info');if(e)e.setAttribute('value',JSON.stringify(${info}));});` });
      job.phase = 'loading-page';
      // Navigation may stall on slow subresources; keep polling the page instead
      // of treating a single command timeout as failed authentication.
      let navigationError;
      cdp.send('Page.navigate', { url: loginUrl() }, this.loginTimeout()).catch(error => { navigationError = error; });
      while (Date.now() < deadline) {
        signal.throwIfAborted();
        if (navigationError && !/timeout/i.test(navigationError.message)) throw navigationError;
        if (childError) throw childError;
        if (child.exitCode !== null) throw new Error('登录浏览器已关闭');
        let result;
        try { result = await cdp.send('Runtime.evaluate', { returnByValue: true,
          expression: `JSON.stringify({url:location.href,ready:document.readyState,value:document.querySelector('input[type="hidden"]')?.getAttribute('value')||''})` });
        } catch (error) {
          if (!/context.*destroyed|Cannot find context|Browser command timeout: Runtime.evaluate/i.test(error.message)) throw error;
          await delay(200, undefined, { signal }); continue;
        }
        try {
          const resultValue = JSON.parse(result.result?.value || '{}');
          job.phase = resultValue.ready === 'complete' || resultValue.ready === 'interactive' ? 'waiting-for-user' : 'loading-page';
          if (isLoginCallback(resultValue.url) && resultValue.value) {
            await this.save(parseLoginPayload(resultValue.value)); job.status = 'succeeded'; job.phase = 'authenticated'; return;
          }
        } catch (error) { if (!(error instanceof SyntaxError)) throw error; }
        await delay(1000, undefined, { signal });
      }
      throw new Error('等待官方登录完成超时（默认 15 分钟），请重新发起登录');
    } finally {
      cdp?.close(); await stopChild(child);
      await fs.rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
    }
  }
  async logout() {
    if (this.job?.status === 'waiting') { this.job.controller.abort(); await this.job.done; }
    this.account = null;
    await fs.rm(path.join(this.state.dir, 'account.json'), { force: true });
    this.job = null;
  }
  async close() { if (this.job?.status === 'waiting') { this.job.controller.abort(); await this.job.done; } }
}
