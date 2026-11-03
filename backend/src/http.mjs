import http from 'node:http';
import https from 'node:https';
import { pipeline } from 'node:stream/promises';
import { ApiError } from './core.mjs';

export async function collect(stream, max = 4 * 1024 * 1024) {
  const chunks = []; let size = 0;
  for await (const chunk of stream) {
    size += chunk.length;
    if (size > max) { stream.destroy(); throw new ApiError(413, 'BODY_TOO_LARGE', '响应或请求超过大小限制'); }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}
// No redirects: never forward a phone token to an unverified alternate host.
export function request(url, { method = 'GET', headers = {}, json, body, signal,
  timeout = 15000, rejectUnauthorized = true, localAddress } = {}) {
  return new Promise((resolve, reject) => {
    const target = new URL(url);
    if (!['http:', 'https:'].includes(target.protocol)) return reject(new Error('Unsupported protocol'));
    if (json !== undefined) {
      body = Buffer.from(JSON.stringify(json));
      headers = { ...headers, 'content-type': 'application/json', 'content-length': body.length };
    }
    const req = (target.protocol === 'https:' ? https : http).request(target,
      { method, headers, signal, rejectUnauthorized, localAddress }, res => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          res.resume(); reject(new ApiError(502, 'UPSTREAM_HTTP', `对端 HTTP ${res.statusCode}`, { status: res.statusCode }));
        } else resolve(res);
      });
    req.setTimeout(timeout, () => req.destroy(new ApiError(504, 'UPSTREAM_TIMEOUT', '连接对端服务超时')));
    req.on('error', reject);
    if (body?.pipe) pipeline(body, req).catch(reject);
    else req.end(body);
  });
}
export async function requestJson(url, options) {
  const res = await request(url, options);
  try { return JSON.parse((await collect(res)).toString('utf8')); }
  catch (e) { if (e instanceof SyntaxError) throw new ApiError(502, 'UPSTREAM_JSON', '对端返回了非 JSON 内容'); throw e; }
}
export function checkBusiness(value, stage) {
  if (!value || typeof value !== 'object' || Array.isArray(value) || String(value.code) !== '0000') {
    throw new ApiError(502, 'PHONE_REJECTED', `${stage} 未成功`, { phoneCode: value?.code });
  }
  return value;
}
