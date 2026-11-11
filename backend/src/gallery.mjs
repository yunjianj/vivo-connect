import path from 'node:path';
import { ApiError, requireThat } from './core.mjs';
import { request, requestJson, collect } from './http.mjs';

function storagePath(value) {
  requireThat(typeof value === 'string' && value.length <= 4096 &&
    !/[\\\x00-\x1f\x7f]/.test(value) && !value.split('/').some(v => v === '.' || v === '..') &&
    /^\/(storage\/emulated\/\d+|sdcard|mnt\/sdcard|storage\/self\/primary)\/.+/.test(value), '需要手机共享存储中的文件路径');
  return path.posix.normalize(value);
}
function payload(value) {
  if (value?.code !== undefined && String(value.code) !== '0000') {
    throw new ApiError(502, 'GALLERY_REJECTED', String(value.code) === '9999' ? '请在手机上允许访问图库' : '手机未允许读取图库', { phoneCode: value.code });
  }
  let data = value?.data ?? value;
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch { throw new ApiError(502, 'GALLERY_DATA_INVALID', '手机返回的图库数据无效'); }
  }
  return data;
}
export function mediaItem(item) {
  const savePath = storagePath(item.savePath ?? item.data);
  const name = item.fileName ?? item.display_name ?? path.posix.basename(savePath);
  const rawSize = item.fileSize ?? item.size;
  const size = rawSize === undefined || rawSize === null || rawSize === '' ? -1 : Number(rawSize);
  return { savePath, fileName: String(name), fileSize: Number.isSafeInteger(size) && size >= 0 ? size : -1,
    date: Number(item.date ?? (Number(item.date_modified || item.date_added || 0) * 1000)) || 0,
    isVideo: /\.(mp4|mkv|webm|mov|avi|3gp|m4v|ts)$/i.test(name), isLivePhoto: Boolean(item.isLivePhoto) };
}
export class GalleryManager {
  constructor(phones) { this.phones = phones; this.authorized = new WeakSet(); this.pendingAuth = new WeakMap(); }
  async authorize(id) { await this.ensureAuthorization(this.session(id), true); return { authorized: true }; }
  async ensureAuthorization(s, force = false) {
    if (this.pendingAuth.has(s)) return this.pendingAuth.get(s);
    if (!force && this.authorized.has(s)) return;
    this.authorized.delete(s);
    const ws = s.ws;
    if (!ws || ws.readyState !== 1) throw new ApiError(409, 'GALLERY_AUTH_UNAVAILABLE', '手机授权通道未连接，请重新连接手机');
    const pending = new Promise((resolve, reject) => {
      const cleanup = () => { clearTimeout(timer); ws.off('message', receive); ws.off('close', closed); };
      const fail = error => { cleanup(); reject(error); };
      const closed = () => fail(new ApiError(409, 'GALLERY_AUTH_UNAVAILABLE', '图库授权时手机连接已断开'));
      const receive = (bytes, binary) => {
        if (binary || !bytes.toString().startsWith('RE_CONNECT_ALBUM:')) return;
        let response;
        try { response = JSON.parse(bytes.toString().slice('RE_CONNECT_ALBUM:'.length)); }
        catch { return fail(new ApiError(502, 'GALLERY_AUTH_INVALID', '手机返回的图库授权响应无效')); }
        cleanup();
        if (response?.auth !== true && response?.auth !== 1) return reject(new ApiError(403, 'GALLERY_AUTH_DENIED', '手机未授权图库访问，请在手机上允许后刷新'));
        this.authorized.add(s); resolve();
      };
      const timer = setTimeout(() => fail(new ApiError(504, 'GALLERY_AUTH_TIMEOUT', '手机图库授权超时，请保持手机解锁后刷新')), 15000);
      ws.on('message', receive); ws.on('close', closed);
      this.phones.sendMessage(s, 'RE_CONNECT_ALBUM:', 'GALLERY_AUTH_SEND_FAILED', '无法请求手机图库授权').catch(fail);
    });
    this.pendingAuth.set(s, pending);
    try { await pending; } finally { this.pendingAuth.delete(s); }
  }
  session(id) {
    const s = this.phones.get(id); requireThat(s.status === 'connected', '手机会话已断开'); return s;
  }
  async albums(id) {
    const s = this.session(id); await this.ensureAuthorization(s, true);
    const data = payload(await requestJson(s.baseUrl + '/pc_back/album_collect_info', this.phones.options(s)));
    if (!Array.isArray(data)) throw new ApiError(502, 'GALLERY_DATA_INVALID', '手机返回的相册数据无效');
    return { albums: data.map(a => ({ name: String(a.name ?? ''), keyID: a.keyID, bucketIDs: a.bucketIDs,
      count: Number(a.count) || 0 })).filter(a => a.keyID !== undefined && Array.isArray(a.bucketIDs)) };
  }
  async list(id, options) {
    const s = this.session(id);
    const { pageIndex = 0, pageNumber = 100, kind = 'photos', sortCondition = 5 } = options;
    requireThat(Number.isInteger(pageIndex) && pageIndex >= 0 && pageIndex <= 100000, 'pageIndex 无效');
    requireThat(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= 200, 'pageNumber 必须为 1–200');
    requireThat(['photos', 'videos', 'album'].includes(kind) && [4, 5].includes(sortCondition), '图库类型或排序无效');
    let raw;
    if (kind === 'album') {
      requireThat(['string', 'number'].includes(typeof options.keyID) && String(options.keyID).length <= 1024 &&
        Array.isArray(options.bucketIDs) && options.bucketIDs.length <= 1000 &&
        options.bucketIDs.every(v => ['string', 'number'].includes(typeof v) && String(v).length <= 1024), '相册标识无效');
      await this.ensureAuthorization(s);
      raw = await this.phones.json(s, '/pc_back/album_collect_detail', {
        list: options.bucketIDs, keyID: options.keyID, pageIndex, pageNumber, sortCondition
      });
    } else {
      if (kind === 'photos') await this.ensureAuthorization(s);
      raw = await this.phones.json(s, '/pc_file_manager/channel', { category: '', data: '', fileCount: 0,
        type: kind === 'photos' ? 'REQUEST_POSTS_IMAGELIST' : 'REQUEST_POSTS_VIDEOLIST', groupBy: kind === 'photos' ? 1 : 0,
        sortCondition, pageIndex, pageNumber, firstFlag: false });
    }
    const data = payload(raw), list = Array.isArray(data) ? data : data?.dataList;
    if (!Array.isArray(list)) throw new ApiError(502, 'GALLERY_DATA_INVALID', '手机返回的照片列表无效');
    const seen = new Set();
    const media = list.filter(item => item.isGroup !== true && item.isGroup !== 1 && item.isGroup !== 'true');
    const items = media.map(mediaItem).filter(i => { if (seen.has(i.savePath)) return false; seen.add(i.savePath); return true; });
    // Some phones report the current page size as totalCount (3, even when page 1
    // has another 3 records). A full page must remain navigable regardless of it.
    return { items, pageIndex, hasMore: media.length >= pageNumber, total: null };
  }
  async thumbnail(id, options, signal) {
    const s = this.session(id), fileUri = storagePath(options.path);
    const query = new URLSearchParams({ fileUri, date: String(Date.now()), type: 'fileManager' });
    const res = await request(s.baseUrl + '/pc_file_manager/thumb?' + query, { ...this.phones.options(s), signal });
    const bytes = await collect(res, 2 * 1024 * 1024);
    let mime;
    if (bytes.subarray(0, 3).equals(Buffer.from([255, 216, 255]))) mime = 'image/jpeg';
    else if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) mime = 'image/png';
    else if (bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP') mime = 'image/webp';
    if (!mime) throw new ApiError(502, 'THUMBNAIL_INVALID', '手机未返回可用缩略图');
    return { mime, base64: bytes.toString('base64') };
  }
}
