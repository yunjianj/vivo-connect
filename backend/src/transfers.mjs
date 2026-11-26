import fs from 'node:fs/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawn } from 'node:child_process';
import { createInterface } from 'node:readline';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { official, requireThat, ApiError, abortError } from './core.mjs';
import { collect } from './http.mjs';

const LIMIT = 50 * 1024 ** 3;
function runTar(args, signal, errorCode, message) {
  abortError(signal);
  const env = { ...process.env, LC_ALL: 'C' };
  delete env.TAR_OPTIONS;
  const child = spawn('/usr/bin/tar', ['--force-local', ...args], {
    env, signal, stdio: ['ignore', 'pipe', 'ignore']
  });
  let spawnError;
  child.on('error', error => { spawnError = error; });
  const done = new Promise((resolve, reject) => {
    child.once('close', (code, stoppedBy) => {
      if (signal?.aborted) reject(signal.reason);
      else if (spawnError?.code === 'ENOENT') reject(new ApiError(500, 'TAR_UNAVAILABLE', '文件传输需要安装系统 GNU tar'));
      else if (spawnError || code !== 0) reject(new ApiError(502, errorCode, message, { exitCode: code, signal: stoppedBy }));
      else resolve();
    });
  });
  return { child, done };
}

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
const tarEscapes = { a: '\u0007', b: '\b', f: '\f', n: '\n', r: '\r', t: '\t', v: '\v', '"': '"', '\\': '\\' };
const utf8Path = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true });
export async function inspectTar(file, maxBytes = LIMIT, signal) {
  const { child, done } = runTar([
    // Keep raw paths visible to validation before tar can strip leading slashes.
    '--list', '--verbose', '--absolute-names', '--numeric-owner', '--full-time', '--quoting-style=c', '--file', file
  ], signal, 'INVALID_ARCHIVE', '系统 tar 无法读取手机归档');
  const entries = [], seen = new Set();
  let totalSize = 0;
  const readManifest = async () => {
    const lines = createInterface({ input: child.stdout, crlfDelay: Infinity });
    for await (const line of lines) {
      abortError(signal);
      // In the C locale, GNU tar quotes each name and escapes non-ASCII bytes in octal.
      const member = /^([-d])\S{9} +\d+\/\d+ +(\d+) +\S+ +\S+ +"((?:[^"\\]|\\(?:[0-3][0-7]{2}|[abfnrtv"\\]))*)"$/.exec(line);
      const invalidMember = () => new ApiError(502, 'INVALID_ARCHIVE', '归档含不安全路径、链接、重复路径或特殊文件');
      if (!member) throw invalidMember();
      const [, kind, sizeText, quotedName] = member;
      let rawName;
      try {
        const bytes = quotedName.replace(/\\([0-3][0-7]{2}|[abfnrtv"\\])/g,
          (_, escape) => tarEscapes[escape] ?? String.fromCharCode(parseInt(escape, 8)));
        rawName = utf8Path.decode(Buffer.from(bytes, 'latin1'));
      } catch { throw invalidMember(); }
      if (!validArchivePath(rawName)) throw invalidMember();
      const name = path.posix.normalize(rawName).replace(/\/$/, '');
      if (seen.has(name)) throw invalidMember();
      seen.add(name);
      // vivo may store the directory's filesystem size in its TAR header.
      // Directory entries carry no file payload and do not count toward the transfer total.
      const size = kind === 'd' ? 0 : Number(sizeText);
      totalSize += size;
      if (!Number.isSafeInteger(totalSize) || totalSize > maxBytes) throw new ApiError(502, 'INVALID_ARCHIVE', '解包大小超过本地限制');
      entries.push({ path: name, type: kind === 'd' ? 'Directory' : 'File', size });
    }
  };
  try {
    await Promise.all([done, readManifest()]);
    if (!entries.length) throw new ApiError(502, 'INVALID_ARCHIVE', '手机返回了空归档');
    return { entries, totalSize };
  } finally {
    child.kill();
    await done.catch(() => {});
  }
}
export async function sha256(file) {
  const hash = crypto.createHash('sha256');
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex');
}
export class Transfers {
  constructor(state, phones) { this.state = state; this.phones = phones; }
  session(id) { const s = this.phones.get(id); requireThat(s.status === 'connected', '手机会话已断开'); return s; }
  async downloadSelection(s, paths, signal) {
    const root = s.info?.innerRoot || '/storage/emulated/0';
    const canonical = value => {
      let normalized = path.posix.normalize(value).replace(/\/$/, '') || '/';
      for (const alias of ['/sdcard', '/mnt/sdcard', '/storage/self/primary']) {
        if (normalized === alias || normalized.startsWith(alias + '/')) { normalized = root + normalized.slice(alias.length); break; }
      }
      return normalized;
    };
    const sources = paths.map(canonical);
    requireThat(new Set(sources).size === sources.length && !sources.some(p => sources.some(other => other !== p && p.startsWith(other + '/'))), '下载路径不能重复或同时包含父目录和子路径');
    const parents = new Map();
    for (const source of sources) {
      const parent = path.posix.dirname(source);
      if (!parents.has(parent)) parents.set(parent, new Set());
      parents.get(parent).add(source);
    }
    const directories = new Set();
    let totalSize = 0;
    for (const [parent, pending] of parents) {
      // Resolve metadata before download_info: its total drives the phone UI.
      // Follow the same FILELIST schema as the official file browser.
      for (let pageIndex = 0; pending.size && pageIndex < 100; pageIndex++) {
        abortError(signal);
        const response = await this.phones.files(s.id, { type: 'REQUEST_POSTS_FILELIST',
          data: parent === root ? '/' : parent, versionTag: 1, pageIndex, pageNumber: 200 }, signal);
        // Phone versions may return the list directly as {dataList, totalCount},
        // or wrap it in data (sometimes serialized as JSON).
        let data = response?.data ?? response;
        if (typeof data === 'string') {
          try { data = JSON.parse(data); } catch { throw new ApiError(502, 'DOWNLOAD_SIZE_UNKNOWN', '手机返回的文件信息无效'); }
        }
        const items = Array.isArray(data) ? data : data?.dataList;
        if (!Array.isArray(items)) throw new ApiError(502, 'DOWNLOAD_SIZE_UNKNOWN', '无法获取下载文件大小，请刷新手机文件列表后重试');
        for (const item of items) {
          if (typeof item.savePath !== 'string') continue;
          const source = canonical(item.savePath);
          if (!pending.has(source)) continue;
          let size = item.fileSize;
          if (item.isDirectory === true || item.isDirectory === 'true') {
            directories.add(source);
            const result = await this.phones.stream(s, '/pc_file_manager/query_directory_size?' + new URLSearchParams({ path: item.savePath }), { signal });
            let value;
            try { value = JSON.parse((await collect(result)).toString('utf8')); }
            catch { throw new ApiError(502, 'DOWNLOAD_SIZE_UNKNOWN', '手机返回的目录大小无效'); }
            if (String(value?.code) !== '0000') throw new ApiError(502, 'DOWNLOAD_SIZE_UNKNOWN', '手机未允许查询目录大小');
            size = value.data?.size;
          }
          if (typeof size === 'string' && /^\d+$/.test(size)) size = Number(size);
          if (!Number.isSafeInteger(size) || size < 0) throw new ApiError(502, 'DOWNLOAD_SIZE_UNKNOWN', '无法确定下载文件大小，请刷新手机文件列表后重试');
          totalSize += size;
          if (!Number.isSafeInteger(totalSize) || totalSize > LIMIT) throw new ApiError(413, 'TRANSFER_TOO_LARGE', '下载文件大小超过 50 GiB');
          pending.delete(source);
        }
        if (items.length < 200) break;
      }
      if (pending.size) throw new ApiError(404, 'DOWNLOAD_FILE_NOT_FOUND', '无法在手机目录中找到所选下载文件，请刷新后重试');
    }
    const downloadList = [], dirList = [];
    for (const [index, source] of sources.entries()) {
      const list = directories.has(source) ? dirList : downloadList;
      list.push(paths[index]);
    }
    return { totalSize, downloadList, dirList };
  }
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
      const { child: archive, done } = runTar([
        '--create', '--file', '-', '--directory', stage, '--format=posix', '--owner=0', '--group=0', '--numeric-owner',
        '--pax-option=delete=atime,delete=ctime,exthdr.name=%d/PaxHeaders/%f', '--', ...roots
      ], signal, 'TAR_CREATE_FAILED', '系统 tar 无法打包上传文件');
      const counter = new Transform({ transform(chunk, enc, done) { job.bytes += chunk.length; done(null, chunk); } });
      job.phase = 'uploading';
      try {
        const [response] = await Promise.all([
          this.phones.stream(s, `/upload/drop_file_to_phone?id=${job.id}&type=tar`,
            { method: 'POST', body: counter, signal, timeout: 3600000, headers: { 'content-type': 'application/x-tar' } }),
          pipeline(archive.stdout, counter, { signal }), done
        ]);
        let result;
        try { result = JSON.parse((await collect(response)).toString('utf8')); }
        catch { throw new ApiError(502, 'UPLOAD_UNCONFIRMED', '上传响应不是有效 JSON，不能确认完成'); }
        const mapped = result?.data?.dropFileItems;
        const allMapped = Array.isArray(mapped) && items.every(i => mapped.some(m => m.fileName === i.fileName && typeof m.savePath === 'string' && m.savePath));
        if ((result.status !== undefined && Number(result.status) !== 0) || (result.code !== undefined && String(result.code) !== '0000') ||
            !(allMapped || result.status === 0 || result.status === '0')) throw new ApiError(502, 'UPLOAD_UNCONFIRMED', '手机未确认上传完成', { phoneCode: result.code, status: result.status });
        return { id: job.id, files: mapped || items.map(i => ({ fileName: i.fileName })), totalSize,
          confirmation: 'phone-response', contentHashComparedWithPhone: false };
      } finally {
        archive.kill();
        counter.destroy();
        await done.catch(() => {});
      }
    } finally { await fs.rm(stage, { recursive: true, force: true }); }
  }
  async download(sessionId, options, job, signal) {
    const s = this.session(sessionId);
    requireThat(Array.isArray(options.paths) && options.paths.length > 0 && options.paths.length <= 1000 && options.paths.every(p => typeof p === 'string' && p.startsWith('/')), 'paths 必须是手机绝对路径数组（1–1000 项）');
    const downloads = path.join(this.state.dir, 'downloads'); const temp = path.join(this.state.dir, 'tmp', job.id);
    await fs.mkdir(downloads, { recursive: true, mode: 0o700 }); await fs.mkdir(temp, { recursive: true, mode: 0o700 });
    const archivePath = path.join(temp, 'receive.tar'); const output = path.join(temp, 'files');
    let prepared = false, saved = false, totalCount = options.paths.length;
    try {
      job.phase = 'preflight';
      const { totalSize, downloadList, dirList } = await this.downloadSelection(s, options.paths, signal);
      job.totalSize = totalSize;
      const pre = await this.phones.json(s, `/pc_file_manager/download_info?id=${job.id}`, {
        id: job.id, downloadList, dirList, type: 'FROM_PC_FILE_MANAGER', total: totalSize,
        isDir: dirList.length > 0 || Boolean(options.isDirectory), isAlbum: false, albumList: []
      }, signal);
      const info = pre?.data ?? pre;
      if (!pre || typeof pre !== 'object' || (Array.isArray(pre) && pre.length) ||
          (Array.isArray(info) && info.length) ||
          (pre.code !== undefined && String(pre.code) !== '0000') ||
          (pre.status !== undefined && Number(pre.status) !== 0)) throw new ApiError(409, 'DOWNLOAD_PREFLIGHT_REJECTED', '手机拒绝下载预检或部分文件已不存在');
      prepared = true;
      if (Number.isSafeInteger(info.totalCount) && info.totalCount > 0) totalCount = info.totalCount;
      if (info.totalSize !== undefined && (!Number.isSafeInteger(info.totalSize) || info.totalSize < 0 || info.totalSize > LIMIT)) throw new ApiError(413, 'TRANSFER_TOO_LARGE', '预检文件大小超过范围');
      // A zero preflight total can accompany nonempty directories on the phone.
      job.totalSize = info.totalSize || totalSize;
      const disk = await fs.statfs(temp); const available = disk.bavail * disk.bsize;
      if (available < job.totalSize * 2 + 104857600) throw new ApiError(409, 'LOCAL_STORAGE_FULL', '本地空间不足以暂存并解包文件');
      job.phase = 'downloading';
      const response = await this.phones.stream(s, `/pc_file_manager/download?id=${job.id}`, { signal, timeout: 3600000 });
      const counter = new Transform({ transform(chunk, enc, done) {
        job.bytes += chunk.length;
        if (job.bytes > LIMIT) done(new ApiError(413, 'TRANSFER_TOO_LARGE', '下载流超过 50 GiB')); else done(null, chunk);
      } });
      await pipeline(response, counter, createWriteStream(archivePath, { flags: 'wx', mode: 0o600 }), { signal });
      abortError(signal); job.phase = 'verifying';
      const manifest = await inspectTar(archivePath, LIMIT, signal);
      if (job.totalSize !== manifest.totalSize) throw new ApiError(502, 'DOWNLOAD_SIZE_MISMATCH', '实际归档大小与手机预检不一致');
      await fs.mkdir(output, { mode: 0o700 });
      const extraction = runTar([
        '--extract', '--file', archivePath, '--directory', output, '--no-same-owner', '--no-same-permissions',
        '--touch', '--no-overwrite-dir'
      ], signal, 'INVALID_ARCHIVE', '系统 tar 无法解包手机归档');
      extraction.child.stdout.resume();
      await extraction.done;
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
      saved = true;
      // The official client ends the phone's sending UI over the heartbeat WS.
      // Finishing the HTTP download alone leaves that UI waiting at 99%.
      job.phase = 'notifying';
      try { await this.phones.transferResult(s, 'success', { successCount: totalCount, id: job.id }); }
      catch (error) {
        throw new ApiError(502, 'TRANSFER_NOTIFY_FAILED', '文件已保存，但无法通知手机传输完成', { directory: dest, files, notificationCode: error.code });
      }
      return { directory: dest, files, totalSize: manifest.totalSize, contentHashComparedWithPhone: false };
    } catch (error) {
      if (prepared && !saved) {
        // Cancellation must still send its terminal message after signal abort.
        // A disconnected phone cannot be notified; preserve the original error.
        await this.phones.transferResult(s, signal.aborted ? 'cancel' : 'fail', {
          id: job.id, successCount: 0, failCount: totalCount,
          ...(signal.aborted ? { type: 'send' } : { failCode: error.code === 'LOCAL_STORAGE_FULL' || error.code === 'ENOSPC' ? 1 : 0 })
        }).catch(() => {});
      }
      throw error;
    } finally { await fs.rm(temp, { recursive: true, force: true }); }
  }
}
