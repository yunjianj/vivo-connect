import fs from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { ApiError, requireThat, privateJson, readJson, abortError } from './core.mjs';
import { requestJson, request } from './http.mjs';
import { noteTextParts, patchNoteText, noteTextDigest } from './note-text.mjs';
import { NotesCipher } from './notes-cipher.mjs';
const HOST = 'https://psuite.vivo.com.cn';
const hash = text => crypto.createHash('sha256').update(String(text)).digest('hex');
const object = v => v && typeof v === 'object' && !Array.isArray(v);
const id = v => (typeof v === 'string' || Number.isSafeInteger(v)) && String(v).length > 0 && String(v).length <= 512;
function usn(v) { if (!id(v) || !/^\d+$/.test(String(v))) throw new ApiError(502, 'NOTE_DATA_INVALID', '云端笔记版本无效'); return String(v); }
function rows(v) { if (v == null) return []; if (!Array.isArray(v) || v.some(r => !object(r) || !id(r.guid))) throw new ApiError(502, 'NOTE_DATA_INVALID', '笔记同步条目无效'); return v; }
function item(n, books) {
  const locked = Number(n.encryptType) === 1;
  return { id: hash(n.guid), version: usn(n.updateSequenceNum), title: locked ? '加密笔记' : String(n.title || n.contentDigest?.split('\n')[0] || '未命名笔记'),
    digest: locked ? '' : String(n.contentDigest || ''), date: Number(n.updateTime) || 0, createdAt: Number(n.createTime) || 0,
    locked, inTrash: Number(n.deleted) === 0, notebook: books.find(b => String(b.guid) === String(n.noteBookGuid))?.name || '未分类',
    notebookId: hash(n.noteBookGuid || '0'), type: Number(n.type) || 0 };
}
const escape = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export function simpleNote(content, resources = []) {
  return resources.length === 0 && typeof content === 'string' && !/<\/?(?!p\b|br\b|div\b)[a-z][\w-]*\b/i.test(content) && !/<(?:p|div)\s+[^>]+>/i.test(content);
}
// Permit explicit conversion of text-only HTML, but never discard embedded
// objects, hidden content, comments or non-editable regions as plain text.
export function convertibleTextNote(content, resources = []) {
  if (resources.length || typeof content !== 'string' || /<!--|<!|<\?|\b(?:contenteditable|hidden|aria-hidden)\s*(?:=|\s|>)/i.test(content) || /(?:display\s*:\s*none|visibility\s*:\s*hidden)/i.test(content)) return false;
  const withoutTags = content.replace(/<\/?(?:p|div|br|span|strong|b|em|i|u|s|strike)(?:\s+(?:[^>"']|"[^"]*"|'[^']*')*)?\s*\/?>/gi, '');
  return !/[<>]/.test(withoutTags);
}
export class NotesManager {
  constructor(state, accounts, jobs, { json = requestJson, stream = request, cipher = () => new NotesCipher() } = {}) {
    Object.assign(this, { state, accounts, jobs, json, stream, cipher }); this.active = new WeakMap(); this.latest = new WeakMap();
  }
  account() {
    const a = this.accounts.account;
    if (!a?.openId || !a.token) throw new ApiError(409, 'NOTE_LOGIN_REQUIRED', '请先登录与手机原子笔记相同的 vivo 账号');
    if (a.regionCode && a.regionCode.toUpperCase() !== 'CN') throw new ApiError(409, 'NOTE_REGION_UNSUPPORTED', '当前笔记云同步仅支持中国区账号'); return a;
  }
  check(a, signal) { abortError(signal); if (a !== this.accounts.account) throw new ApiError(409, 'NOTE_ACCOUNT_CHANGED', '账号已切换，笔记操作已停止'); }
  folder(a) { return path.join(this.state.dir, 'notes', hash(a.openId)); }
  headers(a) { return { openId: a.openId, token: a.token, deviceId: a.deviceId, source: '2', version: '7.0.6.0', countryCode: 'CN' }; }
  async call(a, route, body, signal, encrypted = true) {
    this.check(a, signal); const c = encrypted ? this.cipher() : null;
    let value;
    try { value = await this.json(HOST + route, { method: 'POST', headers: this.headers(a), json: c ? { jvq_param: c.encrypt(body) } : body, signal, timeout: 20000 }); }
    catch (e) {
      if ([401, 403].includes(e.details?.status)) throw new ApiError(401, 'NOTE_LOGIN_EXPIRED', '笔记云同步登录已过期，请重新登录');
      if (e.code === 'UPSTREAM_TIMEOUT') {
        const write = /\/(?:createSync|updateSync|expunge|recover)(?:\/|$)/.test(route);
        throw new ApiError(504, 'NOTE_CLOUD_TIMEOUT', write
          ? '提交云端笔记时连接超时，操作结果尚未确认；请先同步并检查内容，避免重复提交'
          : '读取云端笔记时连接超时，请检查网络后重试');
      }
      throw e;
    }
    this.check(a, signal);
    if (value?.jvq_response) { if (!c) throw new ApiError(502, 'NOTE_CIPHER_INVALID', '云端返回了意外的加密响应'); value = c.decrypt(value.jvq_response); }
    if (!object(value) || value.code !== 0) {
      if ([401, 403, 21008].includes(Number(value?.code))) throw new ApiError(401, 'NOTE_LOGIN_EXPIRED', '笔记云同步登录已过期，请重新登录');
      if ([50300, 50301].includes(Number(value?.code))) throw new ApiError(409, 'NOTE_CONFLICT', '笔记已在其他设备更新，请刷新后重试');
      throw new ApiError(502, 'NOTE_CLOUD_REJECTED', '云端未完成笔记请求', { cloudCode: value?.code });
    }
    return value.data;
  }
  cloud(a, route, body, signal, encrypted = true) { return this.call(a, '/vbusiness' + route, body, signal, encrypted); }
  async index(a) { const data = await readJson(path.join(this.folder(a), 'index.json'), { version: '0', notes: [], noteBooks: [], resources: [], tags: [], lastSync: null }); for (const key of ['notes', 'noteBooks', 'resources', 'tags']) rows(data[key]); usn(data.version); return data; }
  async pull(a, signal) {
    const old = await this.index(a), state = await this.cloud(a, '/sync/getSyncState', { type: 0 }, signal, false);
    const target = usn(state?.updateCount);
    if (BigInt(target) < BigInt(old.version)) throw new ApiError(502, 'NOTE_VERSION_REGRESSED', '云端笔记版本回退，原有缓存未改动');
    const reset = BigInt(old.version) < BigInt(usn(state.fullSyncBefore ?? 0));
    const snapshot = reset ? { notes: [], noteBooks: [], resources: [], tags: [] } : old;
    const maps = Object.fromEntries(['notes', 'noteBooks', 'resources', 'tags'].map(k => [k, new Map(snapshot[k].map(r => [String(r.guid), r]))]));
    let cursor = reset ? '0' : old.version, pages = 0;
    while (BigInt(cursor) < BigInt(target)) {
      if (++pages > 10000) throw new ApiError(502, 'NOTE_PAGE_LIMIT', '笔记同步分页过多，原有缓存未改动');
      const chunk = await this.cloud(a, '/sync/getSyncChunk/v2', { type: 0, afterUsn: cursor, maxEntries: 100, syncProtocolVersion: 200 }, signal);
      if (!object(chunk) || !['notes', 'noteBooks', 'resources', 'tags'].every(k => Array.isArray(chunk[k]))) throw new ApiError(502, 'NOTE_DATA_INVALID', '笔记分页数据不完整，原有缓存未改动');
      const next = usn(chunk?.chunkHighUsn);
      if (BigInt(next) <= BigInt(cursor)) throw new ApiError(502, 'NOTE_PAGE_STALLED', '笔记同步游标没有推进，原有缓存未改动');
      for (const key of Object.keys(maps)) {
        for (const row of rows(chunk[key])) { usn(row.updateSequenceNum); if (Number(row.deleted) === -1) maps[key].delete(String(row.guid)); else maps[key].set(String(row.guid), row); }
        for (const row of rows(chunk.delete?.[key])) maps[key].delete(String(row.guid));
        for (const row of rows(chunk.remove?.[key])) maps[key].delete(String(row.guid));
      }
      cursor = next;
    }
    // The recycle bin is a separate authoritative snapshot. Neither deletion
    // bucket in a normal sync chunk is sufficient to reconstruct it.
    for (const [guid, row] of maps.notes) if (Number(row.deleted) === 0) maps.notes.delete(guid);
    const trashSeen = new Set(); let trashComplete = false;
    for (let page = 1; page <= 10000; page++) {
      const response = await this.cloud(a, '/service/getRecentlyDeleted/v2', { type: 0, page, maxEntries: 100 }, signal);
      if (!object(response) || !(response.notes == null || Array.isArray(response.notes))) throw new ApiError(502, 'NOTE_DATA_INVALID', '笔记回收站响应无效');
      const deleted = rows(response.notes);
      for (const row of deleted) {
        if (trashSeen.has(String(row.guid))) throw new ApiError(502, 'NOTE_PAGE_STALLED', '回收站返回了重复分页');
        trashSeen.add(String(row.guid)); maps.notes.set(String(row.guid), { ...row, deleted: 0 });
      }
      if (deleted.length < 100) { trashComplete = true; break; }
    }
    if (!trashComplete) throw new ApiError(502, 'NOTE_PAGE_LIMIT', '回收站分页过多，原有缓存未改动');
    const next = { epoch: reset ? crypto.randomUUID() : (old.epoch || 'initial'), version: cursor, lastSync: new Date().toISOString(), ...Object.fromEntries(Object.entries(maps).map(([k, v]) => [k, [...v.values()]])) };
    for (const note of next.notes) item(note, next.noteBooks);
    this.check(a, signal); await privateJson(path.join(this.folder(a), 'index.json'), next); return next;
  }
  async list() {
    const a = this.account(), data = await this.index(a), settings = await readJson(path.join(this.folder(a), 'settings.json'), { automatic: false }); this.check(a);
    const last = this.latest.get(a), previous = last ? this.jobs.get(last) : null;
    return { accountKey: hash(a.openId), unclassifiedId: hash('0'), items: data.notes.map(n => item(n, data.noteBooks)).sort((a, b) => b.date - a.date),
      notebooks: data.noteBooks.filter(b => Number(b.deleted) === 1).map(b => ({ id: hash(b.guid), name: String(b.name || '') })),
      lastSync: data.lastSync, automatic: settings.automatic === true, jobId: this.active.get(a)?.id || null, lastError: previous?.status === 'failed' ? previous.error.message : null };
  }
  find(data, noteId) { requireThat(/^[a-f0-9]{64}$/.test(noteId), '笔记标识无效'); const note = data.notes.find(n => hash(n.guid) === noteId); if (!note) throw new ApiError(404, 'NOTE_NOT_FOUND', '笔记不存在，请重新同步'); return note; }
  async read(a, note, signal) {
    if (Number(note.encryptType) === 1) throw new ApiError(403, 'NOTE_LOCKED', '加密笔记请在官方客户端解锁查看');
    const index = await this.index(a);
    const related = index.resources.filter(r => String(r.noteGuid) === String(note.guid)).map(r => [String(r.guid), String(r.updateSequenceNum)]).sort();
    const resourceRevision = hash(JSON.stringify(related));
    const cached = await readJson(path.join(this.folder(a), 'content', hash(note.guid) + '.json'), null);
    if (cached?.version === String(note.updateSequenceNum) && cached.resourceRevision === resourceRevision && cached.epoch === (index.epoch || 'initial')) { this.check(a, signal); return cached; }
    const detail = await this.cloud(a, '/note/getIncludeItem/v2', { guid: note.guid, syncProtocolVersion: 200 }, signal);
    if (!object(detail) || String(detail.guid) !== String(note.guid) || Number(detail.encryptType) === 1) throw new ApiError(409, 'NOTE_CHANGED', '笔记已更改或加密，请重新同步');
    if (String(detail.updateSequenceNum) !== String(note.updateSequenceNum)) throw new ApiError(409, 'NOTE_CHANGED', '笔记已在其他设备更新，请同步后重新打开');
    const content = await this.cloud(a, '/note/getContent/v2', { guid: note.guid }, signal);
    if (typeof content !== 'string' || Buffer.byteLength(content) > 2 * 1024 * 1024) throw new ApiError(502, 'NOTE_CONTENT_INVALID', '笔记正文格式无效或超过 2 MiB');
    // Detect edits between metadata and content reads, before accepting the cache.
    const verified = await this.cloud(a, '/note/getIncludeItem/v2', { guid: note.guid, syncProtocolVersion: 200 }, signal);
    if (!object(verified) || String(verified.guid) !== String(note.guid) || String(verified.updateSequenceNum) !== String(detail.updateSequenceNum) || Number(verified.encryptType) === 1) throw new ApiError(409, 'NOTE_CHANGED', '读取期间笔记已更新，请重新同步');
    const resources = rows(detail.resources).filter(r => Number(r.deleted) === 1);
    const result = { epoch: index.epoch || 'initial', version: String(detail.updateSequenceNum), resourceRevision, content, resources, editable: Number(detail.type) !== 100 && simpleNote(content, resources) };
    this.check(a, signal); await privateJson(path.join(this.folder(a), 'content', hash(note.guid) + '.json'), result); return result;
  }
  async detail(noteId, signal) {
    const a = this.account(), data = await this.index(a), note = this.find(data, noteId), value = await this.read(a, note, signal);
    const simple = Number(note.type) !== 100 && simpleNote(value.content, value.resources);
    const parts = Number(note.type) === 100 ? [] : noteTextParts(value.content);
    const convertible = Number(note.type) !== 100 && convertibleTextNote(value.content, value.resources);
    return { ...item(note, data.noteBooks), content: value.content, editable: simple || convertible || parts.length > 0,
      editMode: simple ? 'plain' : convertible ? 'plain-convert' : 'text-parts', textParts: simple || convertible ? [] : parts.map(({ id, html }) => ({ id, html })),
      attachments: value.resources.map(r => ({ id: hash(r.guid), name: String(r.name || '附件'), size: Number(r.resourceSize) || 0, mime: String(r.mime || '') })) };
  }
  start(kind, run) {
    const a = this.account(), existing = this.active.get(a);
    if (existing) { if (kind === 'note-sync' && existing.kind === kind) return existing; throw new ApiError(409, 'NOTE_BUSY', '笔记同步或操作仍在进行'); }
    const job = this.jobs.create(kind, async (job, signal) => { try { this.check(a, signal); return await run(a, job, signal); } finally { this.active.delete(a); } });
    this.active.set(a, job); this.latest.set(a, job.id); return job;
  }
  sync() { return this.start('note-sync', async (a, job, signal) => { job.phase = 'synchronizing'; const data = await this.pull(a, signal); return { count: data.notes.length, lastSync: data.lastSync }; }); }
  async configure({ automatic }) { requireThat(typeof automatic === 'boolean', 'automatic 必须是布尔值'); const a = this.account(); await privateJson(path.join(this.folder(a), 'settings.json'), { automatic }); return { automatic }; }
  begin() { this.timer = setInterval(() => this.tick().catch(() => {}), 60000); this.timer.unref(); }
  async tick() { const a = this.accounts.account; if (!a?.openId || this.active.has(a)) return; const settings = await readJson(path.join(this.folder(a), 'settings.json'), {}); if (settings.automatic && this.accounts.account === a) this.sync(); }
  close() { clearInterval(this.timer); }
  modify(noteId, action, options) {
    requireThat(['create', 'rename', 'save', 'trash', 'restore'].includes(action), '笔记操作无效');
    if (['create', 'rename', 'save'].includes(action)) requireThat(typeof options.title === 'string' && options.title.trim().length > 0 && Buffer.byteLength(options.title) <= 1024 && !/[\x00-\x1f\x7f]/.test(options.title), '标题无效');
    if (action === 'create' || (action === 'save' && options.edits === undefined)) requireThat(typeof options.text === 'string' && Buffer.byteLength(options.text) <= 512 * 1024 && !options.text.includes('\0'), '笔记文本无效或超过 512 KiB');
    if (action !== 'create') requireThat(typeof options.version === 'string' && /^\d+$/.test(options.version), '需要所选笔记版本');
    return this.start('note-' + action, async (a, job, signal) => {
      job.phase = 'synchronizing'; const data = await this.pull(a, signal), now = Date.now(); let note;
      if (action !== 'create') {
        note = this.find(data, noteId);
        if (Number(note.encryptType) === 1) throw new ApiError(403, 'NOTE_LOCKED', '请使用官方客户端管理加密笔记');
        if (String(note.updateSequenceNum) !== options.version) throw new ApiError(409, 'NOTE_CONFLICT', '笔记已在其他设备更新，请刷新后重试');
      }
      let content = ['create', 'save'].includes(action) && options.edits === undefined ? options.text.split('\n').map(line => '<p>' + (line ? escape(line) : '<br>') + '</p>').join('') : undefined;
      const update = { ...(note || {}), guid: note?.guid || crypto.randomUUID(), title: options.title?.trim(), updateTime: now, attrUpdateTime: now };
      delete update.content; delete update.tags; delete update.resources;
      if (action === 'create') Object.assign(update, { content, contentDigest: options.text.slice(0, 1000), contentUpdateTime: now, createTime: now,
        deleted: 1, type: 1, encryptType: 0, noteBookGuid: '0', syncProtocolVersion: 200, bgColor: '101', stickTop: 0, importantLevel: 0 });
      if (action === 'save') {
        const detail = await this.read(a, note, signal);
        if (Number(note.type) === 100) throw new ApiError(409, 'NOTE_COMPLEX_CONTENT', '手写画布请使用官方客户端编辑');
        if (options.edits !== undefined) content = patchNoteText(detail.content, options.edits);
        else if (!simpleNote(detail.content, detail.resources) && !(options.convertToPlain === true && convertibleTextNote(detail.content, detail.resources))) throw new ApiError(409, 'NOTE_COMPLEX_CONTENT', '此笔记需使用保留格式的文字编辑方式');
        if (options.edits === undefined || options.edits.length > 0) Object.assign(update, { content, contentDigest: options.edits !== undefined ? noteTextDigest(content) : options.text.slice(0, 1000), contentUpdateTime: now });
      }
      if (['create', 'save', 'rename'].includes(action)) {
        const result = await this.cloud(a, action === 'create' ? '/sync/createSync/v2' : '/sync/updateSync/v2', {
          type: 0, lastUpdateCount: data.version, noteBooks: [], notes: [update], tags: [], resources: [] }, signal);
        if (!object(result) || !rows(result.notes).some(n => String(n.guid) === String(update.guid))) throw new ApiError(502, 'NOTE_WRITE_UNCONFIRMED', '云端未确认笔记保存，请重新同步检查');
      } else if (action === 'trash') {
        await this.cloud(a, '/note/expunge', { lastUpdateCount: data.version, delete: [], remove: [note.guid] }, signal, false);
      } else await this.cloud(a, '/service/recover', { type: 0, lastUpdateCount: data.version, notes: [note.guid], documents: [] }, signal, false);
      try {
        const refreshed = await this.pull(a, signal), changed = refreshed.notes.find(n => String(n.guid) === String(note?.guid || update.guid));
        let confirmed = Boolean(changed);
        if (action === 'trash') confirmed = changed && Number(changed.deleted) === 0;
        else if (action === 'restore') confirmed = changed && Number(changed.deleted) === 1;
        else confirmed = changed && changed.title === options.title.trim();
        if (confirmed && ['create', 'save'].includes(action)) confirmed = (await this.read(a, changed, signal)).content === content;
        if (!confirmed) throw new ApiError(502, 'NOTE_OPERATION_UNCONFIRMED', '云端未确认笔记操作结果，请同步检查，避免重复提交');
        return { noteId: hash(note?.guid || update.guid) };
      } catch (error) {
        if (error.code === 'NOTE_OPERATION_UNCONFIRMED') throw error;
        throw new ApiError(502, 'NOTE_REFRESH_FAILED', '云端操作已提交，但重新同步失败；请同步检查，避免重复操作');
      }
    });
  }
  download(noteId, attachmentId) {
    requireThat(/^[a-f0-9]{64}$/.test(attachmentId), '附件标识无效');
    return this.start('note-download', async (a, job, signal) => {
      const note = this.find(await this.index(a), noteId), detail = await this.read(a, note, signal), resource = detail.resources.find(r => hash(r.guid) === attachmentId);
      if (!resource?.resourceKey) throw new ApiError(404, 'NOTE_ATTACHMENT_MISSING', '附件尚未上传或已经移除');
      const data = await this.call(a, '/vclouddisk/api/suite/pc/meta/fileInfo.do', { metaId: resource.resourceKey, needPart: true, needThumb: false, ignoreOperator: true }, signal, false);
      const info = data?.metaInfo; let domain;
      try { domain = new URL(info.domain); } catch { throw new ApiError(502, 'NOTE_ATTACHMENT_INVALID', '附件文件信息无效'); }
      if (String(info.metaId) !== String(resource.resourceKey) || domain.protocol !== 'https:' || !/^clouddisk(?:-[a-z0-9]+)?\.vivo\.com\.cn$/i.test(domain.hostname) || domain.port || domain.username || domain.password || info.asDir) throw new ApiError(502, 'NOTE_ATTACHMENT_HOST_REJECTED', '附件下载域名或标识无效');
      const total = Number(info.fileSize), checksum = String(info.checkSum || '');
      if (!Number.isSafeInteger(total) || total < 0 || total > 512 * 1024 * 1024 || (checksum && !/^(?:[a-f0-9]{32}|[a-f0-9]{64})$/i.test(checksum))) throw new ApiError(502, 'NOTE_ATTACHMENT_INVALID', '附件超过 512 MiB 或校验格式不支持');
      const token = await this.call(a, '/vclouddisk/api/suite/pc/meta/getStsToken.do', { tokenType: 2 }, signal, false);
      if (!token?.stsToken || typeof token.stsToken !== 'string') throw new ApiError(502, 'NOTE_ATTACHMENT_TOKEN_MISSING', '未取得附件下载凭据');
      const dir = path.join(this.folder(a), 'attachments'); await fs.mkdir(dir, { recursive: true, mode: 0o700 });
      const file = path.join(dir, hash(JSON.stringify([noteId, attachmentId, resource.resourceKey, String(resource.updateSequenceNum)]))), temp = file + '.' + job.id + '.part';
      job.phase = 'downloading'; job.totalSize = total; const sum = crypto.createHash(checksum.length === 32 ? 'md5' : 'sha256');
      const count = new Transform({ transform(chunk, _encoding, done) { job.bytes += chunk.length; sum.update(chunk); done(job.bytes > total ? new ApiError(502, 'NOTE_ATTACHMENT_SIZE', '附件大小不匹配') : null, chunk); } });
      try {
        const response = await this.stream(domain.origin + '/api/file/webdisk/download.do', { signal, timeout: 120000, headers: { 'x-yun-ststoken': token.stsToken, 'x-yun-openid': a.openId, 'x-yun-metaid': String(resource.resourceKey) } });
        await pipeline(response, count, createWriteStream(temp, { flags: 'wx', mode: 0o600 }), { signal }); this.check(a, signal);
        if (job.bytes !== total || (checksum && sum.digest('hex').toLowerCase() !== checksum.toLowerCase())) throw new ApiError(502, 'NOTE_ATTACHMENT_CHECKSUM', '附件校验失败');
        await fs.rename(temp, file); return { file: '/api/notes/' + noteId + '/attachments/' + attachmentId + '/file' };
      } finally { await fs.rm(temp, { force: true }); }
    });
  }
  async file(noteId, attachmentId) {
    requireThat(/^[a-f0-9]{64}$/.test(attachmentId), '附件标识无效');
    const a = this.account(), note = this.find(await this.index(a), noteId), detail = await this.read(a, note), resource = detail.resources.find(r => hash(r.guid) === attachmentId);
    if (!resource) throw new ApiError(404, 'NOTE_ATTACHMENT_MISSING', '附件不存在');
    const file = path.join(this.folder(a), 'attachments', hash(JSON.stringify([noteId, attachmentId, resource.resourceKey, String(resource.updateSequenceNum)])));
    try { await fs.access(file); } catch { throw new ApiError(404, 'NOTE_ATTACHMENT_NOT_DOWNLOADED', '请先下载附件'); }
    this.check(a); return { path: file, name: String(resource.name || '附件').replace(/[/\\\x00-\x1f\x7f]/g, '_') };
  }
}
