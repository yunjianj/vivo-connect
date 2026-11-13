import fs from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { ApiError, requireThat, privateJson, readJson, abortError } from './core.mjs';
import { requestJson, request } from './http.mjs';

const GATEWAY = 'https://psuite.vivo.com.cn';
const LIMIT = 2 * 1024 ** 3;
const AUDIO_EXTENSIONS = ['.m4a', '.amr', '.wav', '.mp3', '.aac', '.flac', '.ogg', '.opus', '.3gp', '.mp4'];
function extension(raw, audio) {
  const meta = raw.metaList?.find(m => m.metaId && AUDIO_EXTENSIONS.includes(path.extname(m.file_name || '').toLowerCase()));
  const suffix = path.extname(meta?.file_name || audio.mDisplayName || '').toLowerCase();
  return AUDIO_EXTENSIONS.includes(suffix) ? suffix : '.m4a';
}
const digest = text => crypto.createHash('sha256').update(text).digest('hex');
const obj = value => value && typeof value === 'object' && !Array.isArray(value);
function decoded(value, label) {
  try { const data = typeof value === 'string' ? JSON.parse(value) : value; if (!obj(data)) throw new Error(); return data; }
  catch { throw new ApiError(502, 'RECORD_DATA_INVALID', `${label}格式无效，同步未保存`); }
}
function identifier(value) { return (typeof value === 'string' || Number.isSafeInteger(value)) && String(value).length > 0 && String(value).length <= 512; }
function version(value) { if (!identifier(value) || !/^\d+$/.test(String(value))) throw new ApiError(502, 'RECORD_DATA_INVALID', '录音同步版本无效'); return String(value); }
function changes(data, allowEmpty = false) {
  if ((Number(data.afterCount) === 0 || allowEmpty) && !data.dataList) return { addList: [], updateList: [], deleteList: [] };
  if (!obj(data.dataList) || !['addList', 'updateList', 'deleteList'].every(k => Array.isArray(data.dataList[k]))) throw new ApiError(502, 'RECORD_DATA_INVALID', '录音增量数据不完整，同步未保存');
  return data.dataList;
}
function media(raw) {
  const module = decoded(raw.moduleData, '录音资料');
  const audio = obj(module.mAudioBean) ? module.mAudioBean : module;
  const recognizes = module.mRecognizeItemInfoBean?.mRecognizeItemList || module.mTextArrangementItemInfoBean?.mRecognizeItemList || [];
  const summary = module.mSummaryRecognizeItem || module.mAiSummaryInfoBean || module.mSummaryInfoBean || {};
  const timestamp = Number(audio.mCreateTime || audio.createTime || audio.mDateAdded || audio.mDateModified || raw.lastUpdate) || 0;
  return { extension: extension(raw, audio), id: digest(String(raw.guid)), cloudVersion: String(raw.cloudVersion || ''),
    name: String(audio.title || audio.mDisplayName || '未命名录音'), duration: Number(audio.mDuration) || 0,
    size: Number(audio.mSize) || 0, date: timestamp > 0 && timestamp < 1e12 ? timestamp * 1000 : timestamp,
    inTrash: Number(raw.inRecycle) === 1,
    hasAudio: Array.isArray(raw.metaList) && raw.metaList.some(m => m.metaId),
    transcript: Array.isArray(recognizes) ? recognizes.map(r => String(r.content || r.text || '')).filter(Boolean).join('\n') : '',
    summary: typeof summary.content === 'string' ? summary.content : '',
    marks: module.mMarkItemInfoBean?.mMarkItemList || module.mMarkItemList || [] };
}
export class RecordingManager {
  constructor(state, accounts, jobs, { json = requestJson, stream = request } = {}) {
    Object.assign(this, { state, accounts, jobs, json, stream }); this.contexts = new Map(); this.active = new Map(); this.latest = new WeakMap();
  }
  account() {
    const a = this.accounts.account;
    if (!a?.openId || !a.token) throw new ApiError(409, 'RECORD_LOGIN_REQUIRED', '请先登录与手机录音云同步相同的 vivo 账号');
    if (a.regionCode && a.regionCode.toUpperCase() !== 'CN') throw new ApiError(409, 'RECORD_REGION_UNSUPPORTED', '当前录音云同步仅适配中国区账号');
    return a;
  }
  check(a, signal) {
    abortError(signal);
    if (this.accounts.account !== a) throw new ApiError(409, 'RECORD_ACCOUNT_CHANGED', '账号已切换，操作已停止');
  }
  folder(a) { return path.join(this.state.dir, 'recordings', digest(a.openId)); }
  async index(a) {
    const value = await readJson(path.join(this.folder(a), 'index.json'), { cloudVersion: '0', records: [], lastSync: null });
    if (!Array.isArray(value.records)) throw new ApiError(500, 'RECORD_CACHE_INVALID', '本地录音缓存格式无效');
    return value;
  }
  headers(a) { return { token: a.token, openId: a.openId, deviceId: a.deviceId, source: '2', version: '7.0.6.0', countryCode: a.regionCode || 'CN' }; }
  async call(a, route, body, signal) {
    this.check(a, signal);
    let value;
    try { value = await this.json(GATEWAY + route, { method: 'POST', headers: this.headers(a), json: body, signal, timeout: 20000 }); }
    catch (e) {
      if ([401, 403].includes(e.details?.status)) throw new ApiError(401, 'RECORD_LOGIN_EXPIRED', '录音云同步登录已过期，请重新登录');
      throw e;
    }
    this.check(a, signal);
    if (!obj(value) || !(value.code === 0 || value.status === 200)) {
      if ([401, 403, 21008].includes(Number(value?.code ?? value?.status))) throw new ApiError(401, 'RECORD_LOGIN_EXPIRED', '录音云同步登录已过期，请重新登录');
      throw new ApiError(502, 'RECORD_CLOUD_REJECTED', '云端未完成录音操作', { cloudCode: value?.code ?? value?.status });
    }
    return decoded(value.data, '云端响应');
  }
  async context(a, signal) {
    if (this.contexts.has(a)) return this.contexts.get(a);
    const info = await this.call(a, '/vbusiness/account/getUserInfo', {}, signal);
    if (!identifier(info.userId)) throw new ApiError(502, 'RECORD_UID_MISSING', '官方资料接口未返回录音同步账号标识');
    const context = { accountregion: 'CN', countrycode: 'CN', syncUri: 'SDK_RECORD', openid: a.openId, token: a.token, uid: String(info.userId),
      vaid: '', emmcid: '', av: '', aaid: '', imei: '', sdkVer: '', model: '', appVersionName: '', version: '', an: '' };
    this.contexts.clear(); this.contexts.set(a, context); return context;
  }
  async cloud(a, action, body, signal) {
    return this.call(a, '/recorder-api/suite/pc/record/' + action, { ...await this.context(a, signal), ...body }, signal);
  }
  async pull(a, signal) {
    const old = await this.index(a);
    const mapping = await this.cloud(a, 'pullmapping', { cloudMaxVersion: old.cloudVersion }, signal);
    const cursor = version(mapping.cloudMaxVersion);
    if (BigInt(cursor) < BigInt(version(old.cloudVersion))) throw new ApiError(502, 'RECORD_VERSION_REGRESSED', '云端录音版本回退，同步未保存');
    let delta = changes(mapping, cursor === String(old.cloudVersion));
    const mapped = [...delta.addList, ...delta.updateList, ...delta.deleteList];
    if (mapped.length > 100000 || mapped.some(row => !obj(row) || !identifier(row.guid))) throw new ApiError(502, 'RECORD_DATA_INVALID', '云端录音标识无效');
    if (mapped.some(r => !r.moduleData && Number(r.status) !== 3) || mapped.length > 30) {
      const ids = [...new Set(mapped.map(r => String(r.guid)))];
      const combined = { addList: [], updateList: [], deleteList: [] };
      for (let offset = 0; offset < ids.length; offset += 30) {
        const result = await this.cloud(a, 'pulldata', { cloudMaxVersion: cursor, ids: ids.slice(offset, offset + 30) }, signal);
        const chunk = changes(result);
        for (const key of Object.keys(combined)) combined[key].push(...chunk[key]);
      }
      const received = new Set(Object.values(combined).flat().map(r => String(r.guid)));
      if (ids.some(id => !received.has(id))) throw new ApiError(502, 'RECORD_BATCH_INCOMPLETE', '部分录音详情缺失，同步未保存');
      delta = combined;
    }
    const rows = new Map(old.records.map(r => [String(r.guid), r]));
    for (const raw of [...delta.addList, ...delta.updateList]) {
      if (!obj(raw) || !identifier(raw.guid)) throw new ApiError(502, 'RECORD_DATA_INVALID', '录音标识无效');
      if (Number(raw.status) === 3) rows.delete(String(raw.guid));
      else { media(raw); rows.set(String(raw.guid), raw); }
    }
    for (const raw of delta.deleteList) { if (!identifier(raw.guid)) throw new ApiError(502, 'RECORD_DATA_INVALID', '删除标识无效'); rows.delete(String(raw.guid)); }
    const next = { cloudVersion: cursor, records: [...rows.values()], lastSync: new Date().toISOString() };
    this.check(a, signal); await privateJson(path.join(this.folder(a), 'index.json'), next); return next;
  }
  async list() {
    const a = this.account(), data = await this.index(a), settings = await readJson(path.join(this.folder(a), 'settings.json'), { automatic: false });
    this.check(a);
    const last = this.latest.get(a); const lastJob = last ? this.jobs.get(last) : null;
    return { lastError: lastJob?.status === 'failed' ? lastJob.error?.message : null, items: data.records.map(media).sort((a, b) => b.date - a.date), lastSync: data.lastSync, automatic: settings.automatic === true, jobId: this.active.get(a)?.id || null };
  }
  start(action, run) {
    const a = this.account();
    if (this.active.has(a)) {
      if (action === 'record-sync' && this.active.get(a).kind === action) return this.active.get(a);
      throw new ApiError(409, 'RECORD_BUSY', '录音同步或操作仍在进行，请稍候');
    }
    const job = this.jobs.create(action, async (job, signal) => {
      try { this.check(a, signal); return await run(a, job, signal); }
      finally { this.active.delete(a); }
    });
    this.active.set(a, job); this.latest.set(a, job.id); return job;
  }
  sync() { return this.start('record-sync', async (a, job, signal) => { job.phase = 'synchronizing'; const result = await this.pull(a, signal); return { count: result.records.length, lastSync: result.lastSync }; }); }
  async configure({ automatic }) {
    requireThat(typeof automatic === 'boolean', 'automatic 必须是布尔值');
    const a = this.account(); await privateJson(path.join(this.folder(a), 'settings.json'), { automatic }); return { automatic };
  }
  async tick() {
    const a = this.accounts.account; if (!a?.openId || this.active.has(a)) return;
    const settings = await readJson(path.join(this.folder(a), 'settings.json'), {});
    if (settings.automatic && this.accounts.account === a) this.sync();
  }
  begin() { this.timer = setInterval(() => this.tick().catch(() => {}), 60000); this.timer.unref(); }
  close() { clearInterval(this.timer); this.contexts.clear(); }
  find(data, id) {
    requireThat(/^[0-9a-f]{64}$/.test(id), '录音标识无效');
    const row = data.records.find(r => digest(String(r.guid)) === id);
    if (!row) throw new ApiError(404, 'RECORD_NOT_FOUND', '录音不存在，请同步后重试'); return row;
  }
  modify(id, action, options) {
    requireThat(['rename', 'trash', 'restore'].includes(action), '录音操作无效');
    if (action === 'rename') requireThat(typeof options.name === 'string' && options.name.trim() && Buffer.byteLength(options.name) <= 255 && !/[/\\\x00-\x1f\x7f]/.test(options.name), '录音名称无效');
    requireThat(typeof options.cloudVersion === 'string' && /^\d+$/.test(options.cloudVersion), '需要所选录音版本');
    return this.start('record-' + action, async (a, job, signal) => {
      job.phase = 'synchronizing'; const data = await this.pull(a, signal), row = this.find(data, id);
      if (String(row.cloudVersion) !== options.cloudVersion) throw new ApiError(409, 'RECORD_CONFLICT', '录音已在其他设备更新，请同步后重新操作');
      if (action === 'rename') {
        const module = decoded(row.moduleData, '录音资料'), audio = obj(module.mAudioBean) ? module.mAudioBean : module;
        audio.title = audio.mDisplayName = options.name.trim(); audio.mDateModified = Date.now();
        if (audio !== module) { if ('title' in module) module.title = audio.title; if ('mDisplayName' in module) module.mDisplayName = audio.title; }
        const result = await this.cloud(a, 'pushdata', { cloudMaxVersion: data.cloudVersion, canRepeat: 'true', dataList: {
          addList: [], updateList: [{ ...row, moduleData: JSON.stringify(module), localVersion: String(Date.now()) }], deleteList: [] } }, signal);
        if (result.needCloudUpdateLocal || result.conflictList?.length) throw new ApiError(409, 'RECORD_CONFLICT', '云端返回版本冲突，请同步后确认名称');
        if (!result.dataList?.updateList?.some(r => String(r.guid) === String(row.guid))) throw new ApiError(502, 'RECORD_OPERATION_UNCONFIRMED', '云端未确认录音改名，请同步检查');
      } else await this.cloud(a, action === 'trash' ? 'totrash' : 'restore', { opList: [{ guid: row.guid, cloudVersion: row.cloudVersion }], opAll: false }, signal);
      try { const updated = await this.pull(a, signal); return { count: updated.records.length, lastSync: updated.lastSync }; }
      catch { throw new ApiError(502, 'RECORD_REFRESH_FAILED', '云端操作已提交，但重新同步失败；请同步检查，避免重复操作'); }
    });
  }
  async audioInfo(a, row, signal) {
    const module = decoded(row.moduleData, '录音资料'), audio = module.mAudioBean || module;
    const meta = row.metaList?.find(m => m.metaId && !/\.(png|jpg|jpeg|webp)$/i.test(m.file_name || m.file_path || ''));
    if (!meta) throw new ApiError(409, 'RECORD_AUDIO_MISSING', '该录音尚未上传音频，请在手机录音机中完成云同步');
    const result = await this.call(a, '/vclouddisk/api/suite/pc/meta/fileInfo.do', { metaId: meta.metaId, needPart: true, needThumb: false, ignoreOperator: true }, signal);
    const info = result.metaInfo;
    if (!obj(info) || String(info.metaId) !== String(meta.metaId) || info.asDir || !Number.isSafeInteger(Number(info.fileSize)) || Number(info.fileSize) < 0 || Number(info.fileSize) > LIMIT) throw new ApiError(502, 'RECORD_FILE_INVALID', '云端音频文件信息无效或超过 2 GiB');
    let domain; try { domain = new URL(info.domain); } catch { throw new ApiError(502, 'RECORD_FILE_INVALID', '云端音频域名无效'); }
    if (domain.protocol !== 'https:' || !/^clouddisk(?:-[a-z0-9]+)?\.vivo\.com\.cn$/i.test(domain.hostname) || domain.port || domain.username || domain.password) throw new ApiError(502, 'RECORD_FILE_HOST_REJECTED', '云端返回了不支持的音频下载域名');
    return { info, meta, domain: domain.origin, suffix: extension(row, audio) };
  }
  download(id) {
    return this.start('record-download', async (a, job, signal) => {
      const row = this.find(await this.index(a), id), { info, meta, domain, suffix } = await this.audioInfo(a, row, signal);
      const token = await this.call(a, '/vclouddisk/api/suite/pc/meta/getStsToken.do', { tokenType: 2 }, signal);
      if (typeof token.stsToken !== 'string' || !token.stsToken) throw new ApiError(502, 'RECORD_FILE_TOKEN_MISSING', '未取得录音下载凭据');
      const dir = path.join(this.folder(a), 'audio'); await fs.mkdir(dir, { recursive: true, mode: 0o700 });
      const file = path.join(dir, id + suffix), temp = file + '.' + job.id + '.part';
      job.phase = 'downloading'; job.totalSize = Number(info.fileSize);
      const checksum = String(info.checkSum || '');
      if (checksum && !/^(?:[a-f0-9]{32}|[a-f0-9]{64})$/i.test(checksum)) throw new ApiError(502, 'RECORD_CHECKSUM_UNSUPPORTED', '云端音频校验格式不支持');
      const hash = crypto.createHash(checksum.length === 32 ? 'md5' : 'sha256');
      const count = new Transform({ transform(chunk, _encoding, done) { job.bytes += chunk.length; hash.update(chunk); done(job.bytes > job.totalSize || job.bytes > LIMIT ? new ApiError(502, 'RECORD_SIZE_MISMATCH', '音频下载大小不匹配') : null, chunk); } });
      try {
        const response = await this.stream(domain + '/api/file/webdisk/download.do?asMedia=true', { signal, timeout: 120000,
          headers: { 'x-yun-ststoken': token.stsToken, 'x-yun-openid': a.openId, 'x-yun-metaid': String(meta.metaId) } });
        await pipeline(response, count, createWriteStream(temp, { flags: 'wx', mode: 0o600 }), { signal });
        this.check(a, signal); job.phase = 'verifying';
        if (job.bytes !== job.totalSize || (checksum && hash.digest('hex').toLowerCase() !== checksum.toLowerCase())) throw new ApiError(502, 'RECORD_CHECKSUM_MISMATCH', '录音文件大小或校验值不匹配');
        await fs.rename(temp, file); return { recordingId: id, file: '/api/recordings/' + id + '/file', bytes: job.bytes };
      } finally { await fs.rm(temp, { force: true }); }
    });
  }
  async file(id) {
    const a = this.account(), row = this.find(await this.index(a), id);
    const dir = path.join(this.folder(a), 'audio');
    const files = await fs.readdir(dir).catch(e => { if (e.code === 'ENOENT') return []; throw e; });
    const name = files.find(n => new RegExp('^' + id + '\\.(m4a|amr|wav|mp3|aac|flac|ogg|opus|3gp|mp4)$').test(n));
    if (!name) throw new ApiError(404, 'RECORD_NOT_DOWNLOADED', '请先下载该录音');
    this.check(a); const title = media(row).name.replace(/[/\\\x00-\x1f\x7f]/g, '_');
    return { path: path.join(dir, name), name: title.toLowerCase().endsWith(path.extname(name)) ? title : title + path.extname(name) };
  }
}
