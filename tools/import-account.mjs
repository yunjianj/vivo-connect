#!/usr/bin/env node
// Import a user-saved official callback page without echoing account credentials.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { payloadFromHtml } from '../backend/src/account.mjs';
import { ROOT } from '../backend/src/core.mjs';

export async function importAccount(file, { stateDir = process.env.VIVO_STATE_DIR || path.join(ROOT, '.vivo-connect'), port = process.env.PORT || 8765 } = {}) {
  if (!file) throw new Error('用法：node tools/import-account.mjs <登录后保存的官方回调页.html>');
  if (!/^\d+$/.test(String(port)) || Number(port) < 1 || Number(port) > 65535) throw new Error('PORT 不合法');
  const payload = payloadFromHtml(await fs.readFile(file, 'utf8'));
  const config = JSON.parse(await fs.readFile(path.join(stateDir, 'config.json'), 'utf8'));
  const headers = { authorization: `Bearer ${config.apiToken}`, 'content-type': 'application/json' };
  const base = `http://127.0.0.1:${port}`;
  const call = async (route, options = {}) => {
    const res = await fetch(base + route, { ...options, headers, signal: AbortSignal.timeout(10000), redirect: 'error' });
    const value = await res.json();
    if (!res.ok) throw new Error(value.error?.message || `本地后端返回 HTTP ${res.status}`);
    return value;
  };
  const status = await call('/api/account');
  if (status.login?.mode !== 'manual' || status.login.status !== 'waiting') throw new Error('请先 POST /api/account/login 发起手动登录，再导入回调页');
  return call('/api/account/login/complete', { method: 'POST', body: JSON.stringify({ id: status.login.id, payload }) });
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { const result = await importAccount(process.argv[2]); console.log(JSON.stringify(result)); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
