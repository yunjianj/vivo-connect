import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export class ApiError extends Error {
  constructor(status, code, message, details) { super(message); Object.assign(this, { status, code, details }); }
}
export function requireThat(ok, message) { if (!ok) throw new ApiError(400, 'INVALID_ARGUMENT', message); }
export const secret = () => crypto.randomBytes(32).toString('hex');
export const tokenFor = ip => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const nonce = Array.from({ length: 4 }, () => alphabet[crypto.randomInt(alphabet.length)]).join('');
  return crypto.createHash('sha256').update(ip + nonce).digest('hex');
};
export function official(name) {
  const candidates = [process.env.VIVO_OFFICIAL_APP, path.join(ROOT, 'analysis/app')].filter(Boolean);
  for (const dir of candidates) {
    try { return createRequire(path.join(path.resolve(dir), 'package.json'))(name); }
    catch (e) { if (e.code !== 'MODULE_NOT_FOUND') throw e; }
  }
  throw new ApiError(503, 'OFFICIAL_MODULE_MISSING', `缺少官方随包模块 ${name}；请运行 python tools/extract_asar.py 或配置 VIVO_OFFICIAL_APP`);
}
export async function privateJson(file, value) {
  await fs.mkdir(path.dirname(file), { recursive: true, mode: 0o700 });
  const temp = file + '.' + crypto.randomUUID() + '.tmp';
  await fs.writeFile(temp, JSON.stringify(value, null, 2) + '\n', { mode: 0o600 });
  await fs.rename(temp, file);
}
export async function readJson(file, fallback) {
  try { return JSON.parse(await fs.readFile(file, 'utf8')); }
  catch (e) { if (e.code === 'ENOENT') return fallback; throw e; }
}
export async function initState(dir = process.env.VIVO_STATE_DIR || path.join(ROOT, '.vivo-connect')) {
  dir = path.resolve(dir);
  await fs.mkdir(dir, { recursive: true, mode: 0o700 });
  const configPath = path.join(dir, 'config.json');
  const config = await readJson(configPath, null) || { deviceId: crypto.randomUUID(), name: os.hostname(), apiToken: secret() };
  await privateJson(configPath, config);
  return { dir, ...config };
}
export function accountPublic(account) {
  return account ? { loggedIn: true, openId: account.openId, phone: account.phone || '',
    nickName: account.nickName || '', source: account.source, loggedInAt: account.loggedInAt } : { loggedIn: false };
}
export function abortError(signal) { if (signal?.aborted) throw signal.reason || new Error('Cancelled'); }
