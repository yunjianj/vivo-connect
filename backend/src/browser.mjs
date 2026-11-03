import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';

export async function executable(name) {
  if (!name) return null;
  for (const candidate of name.includes('/') ? [path.resolve(name)] : (process.env.PATH || '').split(path.delimiter).map(dir => path.join(dir, name))) {
    try { await fs.access(candidate, fs.constants.X_OK); return candidate; } catch { /* Next candidate. */ }
  }
  return null;
}
export async function detectBrowser() {
  if (process.env.VIVO_BROWSER) {
    const binary = await executable(process.env.VIVO_BROWSER);
    if (!binary) throw new Error('VIVO_BROWSER 指向的程序不存在或不可执行');
    return binary;
  }
  for (const name of ['chromium', 'chromium-browser', 'google-chrome', 'google-chrome-stable', 'microsoft-edge', 'brave-browser']) {
    const binary = await executable(name); if (binary) return binary;
  }
  return null;
}
export async function stopChild(child) {
  if (!child || child.exitCode !== null || child.signalCode !== null) return;
  const exited = once(child, 'exit').catch(() => {});
  child.kill('SIGTERM');
  const timer = setTimeout(() => child.kill('SIGKILL'), 2000); timer.unref();
  try { await exited; } finally { clearTimeout(timer); }
}

// W3C WebDriver: pageLoadStrategy=none lets navigation return immediately;
// authentication and callback readiness are polled separately by the manager.
export class WebDriver {
  constructor(base, child, signal) { Object.assign(this, { base, child, signal }); }
  async command(route, body, { method = body === undefined ? 'GET' : 'POST', timeout = 30000, signal = this.signal } = {}) {
    const res = await fetch(this.base + route, { method, body: body === undefined ? undefined : JSON.stringify(body),
      headers: { 'content-type': 'application/json' }, redirect: 'error', signal: AbortSignal.any([signal, AbortSignal.timeout(timeout)].filter(Boolean)) });
    const data = await res.json();
    if (!res.ok || data.value?.error) {
      // Do not include raw driver response: callback URLs can contain tokens.
      const error = new Error(`浏览器命令失败：${data.value?.error || res.status}`); error.driverCode = data.value?.error; throw error;
    }
    return data.value;
  }
  static async launch({ driver, binary, profile, signal, headless = false }) {
    const child = spawn(driver, ['--port=0', '--allowed-ips=127.0.0.1', '--log-level=SEVERE'], { stdio: ['ignore', 'pipe', 'pipe'] });
    let port, spawnError, output = '';
    child.on('error', error => { spawnError = error; });
    const onOutput = data => { output = (output + data).slice(-4096); const match = output.match(/started successfully on port (\d+)/i); if (match) port = Number(match[1]); };
    child.stdout.on('data', onOutput); child.stderr.on('data', onOutput);
    let client;
    try {
      for (let i = 0; i < 150 && !port; i++) {
        signal?.throwIfAborted(); if (spawnError) throw spawnError;
        if (child.exitCode !== null) throw new Error('浏览器驱动启动失败');
        await delay(100, undefined, { signal });
      }
      if (!port) throw new Error('浏览器驱动没有返回监听端口');
      client = new WebDriver(`http://127.0.0.1:${port}`, child, signal);
      const args = [`--user-data-dir=${profile}`, '--no-first-run', '--no-default-browser-check'];
      if (headless) args.push('--headless=new');
      const value = await client.command('/session', { capabilities: { alwaysMatch: {
        browserName: /edge/i.test(path.basename(binary)) ? 'MicrosoftEdge' : 'chrome',
        pageLoadStrategy: 'none', acceptInsecureCerts: false,
        'goog:chromeOptions': { binary, args }
      } } }, { timeout: 60000 });
      client.id = value.sessionId; return client;
    } catch (error) { await stopChild(child); throw error; }
  }
  navigate(url) { return this.command(`/session/${this.id}/url`, { url }); }
  execute(script, args = []) { return this.command(`/session/${this.id}/execute/sync`, { script, args }); }
  async close() {
    try { if (this.id) await this.command(`/session/${this.id}`, undefined, { method: 'DELETE', signal: undefined, timeout: 5000 }); }
    catch { /* Driver may already have exited. */ }
    await stopChild(this.child);
  }
}
