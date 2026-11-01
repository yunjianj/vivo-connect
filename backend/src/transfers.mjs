import fs from 'node:fs/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { official, requireThat, ApiError, abortError } from './core.mjs';
import { collect } from './http.mjs';

const LIMIT = 50 * 1024 ** 3;
async function stageTree(source, dest, signal, budget) {
  abortError(signal);
  const stat = await fs.lstat(source);
  if (stat.isSymbolicLink() || (!stat.isFile() && !stat.isDirectory())) throw new ApiError(400, 'UNSUPPORTED_FILE', '仅支持普通文件和目录，不传输符号链接或特殊文件');
  if (stat.isDirectory()) {
    await fs.mkdir(dest);
    let size = 0, count = 1;
    for (const name of await fs.readdir(source)) { const child = await stageTree(path.join(source,name), path.join(dest,name), signal, budget); size += child.size; count += child.count; }
    return { size, count, isDirectory: true, mtime: stat.mtimeMs };
  }
  budget.remaining -= stat.size;
  if (budget.remaining < 0) throw new ApiError(413, 'TRANSFER_TOO_LARGE', '基础后端单任务上限为 50 GiB');
  const disk = await fs.statfs(path.dirname(dest));
  if (disk.bavail * disk.bsize < stat.size + 104857600) throw new ApiError(409, 'LOCAL_STORAGE_FULL', '本地暂存空间不足');
  // Copy a snapshot: external changes to the source cannot mutate an in-flight tar.
  await fs.copyFile(source, dest, fs.constants.COPYFILE_FICLONE);
  const copied = await fs.stat(dest); const after = await fs.stat(source);
  if (copied.size !== stat.size || after.size !== stat.size || after.mtimeMs !== stat.mtimeMs) throw new ApiError(409, 'SOURCE_CHANGED', '上传文件在暂存时发生变化，请重试');
  return { size: copied.size, count: 1, isDirectory: false, mtime: stat.mtimeMs };
}
export function validArchivePath(name) {
  return typeof name === 'string' && name.length > 0 && !name.includes('\0') && !name.includes('\\') &&
    !path.posix.isAbsolute(name) && !/^[A-Za-z]:/.test(name) && !name.split('/').includes('..');
}
export async function inspectTar(file, maxBytes = LIMIT) {
  const tar = official('tar'); const entries = []; const seen = new Set(); let bad, totalSize = 0;
  await tar.t({ file, strict: true, onentry: entry => {
    const name = entry.path.replace(/\/$/, '');
    if (!validArchivePath(name) || !['File', 'Directory'].includes(entry.type) || seen.has(name)) bad = '归档含不安全路径、链接、重复路径或特殊文件';
    seen.add(name); totalSize += entry.size;
    if (!Number.isSafeInteger(totalSize) || totalSize > maxBytes) bad = '解包大小超过本地限制';
    entries.push({ path: name, type: entry.type, size: entry.size });
  } });
  if (bad || !entries.length) throw new ApiError(502, 'INVALID_ARCHIVE', bad || '手机返回了空归档');
  return { entries, totalSize };
}
export async function sha256(file) {
  const hash = crypto.createHash('sha256');
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}
export class Transfers {
  constructor(state, phones) { this.state = state; this.phones = phones; }
  session(id) { const s = this.phones.get(id); requireThat(s.status === 'connected', '手机会话已断开'); return s; }
  async upload(sessionId, options, job, signal) {
    const s = this.session(sessionId);
    requireThat(Array.isArray(options.paths) && options.paths.length > 0 && options.paths.length <= 1000 && options.paths.every(p => typeof p === 'string' && path.isAbsolute(p)), 'paths 必须是本地绝对路径数组（1–1000 项）');
    requireThat(typeof options.savePath === 'string' && options.savePath.startsWith('/'), 'savePath 必须是手机目标目录绝对路径');
    requireThat(['rename', 'overwrite'].includes(options.ifDuplicated || 'rename'), 'ifDuplicated 应为 rename 或 overwrite');
    const stage = path.join(this.state.dir, 'tmp', job.id);
    await fs.mkdir(stage, { recursive: true, mode: 0o700 });
    try {
      const roots = new Set(), items = []; const budget = { remaining: LIMIT }; let totalSize = 0, totalCount = 0;
      for (const source of options.paths) {
        const name = path.basename(source);
        requireThat(name && name !== '.' && !roots.has(name), '上传根文件名不能重复'); roots.add(name);
        const stat = await stageTree(source, path.join(stage,name), signal, budget);
        totalSize += stat.size; totalCount += stat.count;
        if (totalSize > LIMIT) throw new ApiError(413, 'TRANSFER_TOO_LARGE', '基础后端单任务上限为 50 GiB');
        items.push({ index: -1, isDirectory: stat.isDirectory, fileName: name, fileSize: stat.size,
          savePath: '', date: Math.trunc(stat.mtime), fileType: 'UNKNOWN', mimeType: official('mime-types').lookup(name) || 'application/octet-stream',
          ifDuplicated: options.ifDuplicated || 'rename', fileReturn: false });
      }
      abortError(signal); job.phase = 'preflight'; job.totalSize = totalSize;
      const body = { id: job.id, dropFileItems: items, totalSize, totalCount, screen_w: 0, screen_h: 0, x: 0, y: 0,
        type: 'TO_PC_FILE_MANAGER', savePath: options.savePath };
      const preResponse = await this.phones.stream(s, `/pc_file_manager/drop_files_info?id=${job.id}`,
        { method: 'POST', json: body, signal });
      const preBody = (await collect(preResponse)).toString('utf8').trim();
      // Official checkUploadInfo calls handleUploadRes(response) WITHOUT the
      // optional body-status check. HTTP 200 may have no body or no status key.
      let pre;try { pre = preBody ? JSON.parse(preBody) : undefined; } catch { /* Some versions return plain text. */ }
      const statusRejected = pre?.status !== undefined && pre.status !== 0 && pre.status !== '0';
      const codeRejected = pre?.code !== undefined && !/^0+$/.test(String(pre.code));
      if (preResponse.statusCode !== 200 || statusRejected || codeRejected) throw new ApiError(409, 'UPLOAD_PREFLIGHT_REJECTED', '手机拒绝上传预检',
        { httpStatus: preResponse.statusCode, status: pre?.status, phoneCode: pre?.code });
      const archive = official('tar').c({ cwd: stage, portable: true, strict: true }, [...roots]);
      const counter = new Transform({ transform(chunk, enc, done) { job.bytes += chunk.length; done(null, chunk); } });
      archive.on('error', error => counter.destroy(error)); counter.on('close', () => archive.destroy());
      const abort = () => { archive.destroy(signal.reason); counter.destroy(signal.reason); };
      signal.addEventListener('abort', abort, { once: true });
      job.phase = 'uploading';
      try {
        const response = await this.phones.stream(s, `/upload/drop_file_to_phone?id=${job.id}&type=tar`,
          { method: 'POST', body: archive.pipe(counter), signal, timeout: 3600000, headers: { 'content-type': 'application/x-tar' } });
        let result;
        try { result = JSON.parse((await collect(response)).toString('utf8')); }
        catch { throw new ApiError(502, 'UPLOAD_UNCONFIRMED', '上传响应不是有效 JSON，不能确认完成'); }
        const mapped = result?.data?.dropFileItems;
        const allMapped = Array.isArray(mapped) && items.every(i => mapped.some(m => m.fileName === i.fileName && typeof m.savePath === 'string' && m.savePath));
        if ((result.status !== undefined && Number(result.status) !== 0) || (result.code !== undefined && String(result.code) !== '0000') ||
            !(allMapped || result.status === 0 || result.status === '0')) throw new ApiError(502, 'UPLOAD_UNCONFIRMED', '手机未确认上传完成', { phoneCode: result.code, status: result.status });
        return { id: job.id, files: mapped || items.map(i => ({ fileName: i.fileName })), totalSize,
          confirmation: 'phone-response', contentHashComparedWithPhone: false };
      } finally { signal.removeEventListener('abort', abort); archive.destroy(); counter.destroy(); }
    } finally { await fs.rm(stage, { recursive: true, force: true }); }
  }
  async download(sessionId, options, job, signal) {
    const s = this.session(sessionId);
    requireThat(Array.isArray(options.paths) && options.paths.length > 0 && options.paths.length <= 1000 && options.paths.every(p => typeof p === 'string' && p.startsWith('/')), 'paths 必须是手机绝对路径数组（1–1000 项）');
    const downloads = path.join(this.state.dir, 'downloads'); const temp = path.join(this.state.dir, 'tmp', job.id);
    await fs.mkdir(downloads, { recursive: true, mode: 0o700 }); await fs.mkdir(temp, { recursive: true, mode: 0o700 });
    const archivePath = path.join(temp, 'receive.tar'); const output = path.join(temp, 'files');
    try {
      job.phase = 'preflight';
      const pre = await this.phones.json(s, `/pc_file_manager/download_info?id=${job.id}`, { downloadList: options.paths,
        type: 'FROM_PC_FILE_MANAGER', total: 0, isDir: Boolean(options.isDirectory), isAlbum: false, albumList: [], dirList: [] }, signal);
      if (!pre || typeof pre !== 'object' || (Array.isArray(pre) && pre.length) ||
          (pre.code !== undefined && String(pre.code) !== '0000') ||
          (pre.status !== undefined && Number(pre.status) !== 0)) throw new ApiError(409, 'DOWNLOAD_PREFLIGHT_REJECTED', '手机拒绝下载预检或部分文件已不存在');
      if (pre.totalSize !== undefined && (!Number.isSafeInteger(pre.totalSize) || pre.totalSize < 0 || pre.totalSize > LIMIT)) throw new ApiError(413, 'TRANSFER_TOO_LARGE', '预检文件大小超过范围');
      job.totalSize = pre.totalSize;
      const disk = await fs.statfs(temp); const available = disk.bavail * disk.bsize;
      if (pre.totalSize && available < pre.totalSize * 2 + 104857600) throw new ApiError(409, 'LOCAL_STORAGE_FULL', '本地空间不足以暂存并解包文件');
      job.phase = 'downloading';
      const response = await this.phones.stream(s, `/pc_file_manager/download?id=${job.id}`, { signal, timeout: 3600000 });
      const counter = new Transform({ transform(chunk, enc, done) {
        job.bytes += chunk.length;
        if (job.bytes > LIMIT) done(new ApiError(413, 'TRANSFER_TOO_LARGE', '下载流超过 50 GiB')); else done(null, chunk);
      } });
      await pipeline(response, counter, createWriteStream(archivePath, { flags: 'wx', mode: 0o600 }), { signal });
      abortError(signal); job.phase = 'verifying';
      const manifest = await inspectTar(archivePath);
      if (pre.totalSize !== undefined && pre.totalSize !== manifest.totalSize) throw new ApiError(502, 'DOWNLOAD_SIZE_MISMATCH', '实际归档大小与手机预检不一致');
      await fs.mkdir(output, { mode: 0o700 });
      await official('tar').x({ file: archivePath, cwd: output, strict: true, preservePaths: false, noChmod: true, noMtime: true });
      const files = [];
      for (const entry of manifest.entries) {
        abortError(signal);
        if (entry.type !== 'File') continue;
        const file = path.join(output, entry.path); const stat = await fs.stat(file);
        if (stat.size !== entry.size) throw new Error('Extracted file size mismatch');
        files.push({ path: entry.path, size: entry.size, sha256: await sha256(file) });
      }
      abortError(signal);
      const dest = path.join(downloads, job.id); await fs.rename(output, dest);
      return { directory: dest, files, totalSize: manifest.totalSize, contentHashComparedWithPhone: false };
    } finally { await fs.rm(temp, { recursive: true, force: true }); }
  }
}
