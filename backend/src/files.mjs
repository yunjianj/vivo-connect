import path from 'node:path';
import { ApiError, requireThat } from './core.mjs';
import { requestJson } from './http.mjs';

function phonePath(value, field, allowRoot = false) {
  requireThat(typeof value === 'string' && value.startsWith('/') && value.length <= 4096 &&
    !/[\\\x00-\x1f\x7f]/.test(value) && !value.split('/').some(p => p === '.' || p === '..'), `${field} 必须是手机绝对路径，不能包含 .、..、反斜杠或控制字符`);
  const normalized = path.posix.normalize(value);
  requireThat(allowRoot || normalized !== '/', `${field} 不能是根目录`);
  return normalized;
}
function fileName(value) {
  requireThat(typeof value === 'string' && value.trim() && value !== '.' && value !== '..' &&
    !/[/\\\x00-\x1f\x7f]/.test(value) && Buffer.byteLength(value) <= 255, 'name 必须是单个有效文件名（最多 255 字节）');
  return value;
}
function checked(value, action) {
  if (!value || typeof value !== 'object' || Array.isArray(value) || String(value.code) !== '0000') {
    const code = String(value?.code);
    const known = { '0014': [409, 'FILE_EXISTS', '目标名称已存在'], '0015': [404, 'FILE_NOT_FOUND', '源文件不存在'], '0012': [409, 'PHONE_STORAGE_FULL', '手机存储空间不足'] }[code];
    throw new ApiError(known?.[0] || 502, known?.[1] || 'FILE_OPERATION_REJECTED', known?.[2] || `${action}未成功`, { phoneCode: value?.code });
  }
  return value;
}

export class FileManager {
  constructor(phones) { this.phones = phones; }
  session(id) {
    const s = this.phones.get(id);
    requireThat(s.status === 'connected', '手机会话已断开');
    return s;
  }
  async get(s, route, params) {
    return requestJson(s.baseUrl + route + '?' + new URLSearchParams(params), this.phones.options(s));
  }
  async execute(id, action, options) {
    const s = this.session(id);
    if (action === 'rename' || action === 'move') {
      const source = phonePath(options.path, 'path');
      const target = action === 'rename'
        ? path.posix.join(path.posix.dirname(source), fileName(options.name))
        : phonePath(options.destination, 'destination');
      requireThat(target !== source && !target.startsWith(source + '/'), '目标不能与源路径相同或位于源目录内');
      // Use the phone's path rename operation; never emulate move by copy/delete.
      const response = checked(await this.phones.json(s, '/pc_file_manager/file_rename', {
        srcPath: source, newPath: target, newName: path.posix.basename(target)
      }), '移动或重命名');
      if (!response.data) throw new ApiError(502, 'FILE_OPERATION_UNCONFIRMED', '手机未确认移动或重命名完成');
      return { path: target, response };
    }
    if (action === 'mkdir') {
      const parent = phonePath(options.path, 'path', true), name = fileName(options.name);
      const response = checked(await this.get(s, '/pc_file_manager/create_directory', { path: parent, name }), '创建目录');
      return { path: path.posix.join(parent, name), response };
    }
    if (action === 'delete') {
      requireThat(Array.isArray(options.paths) && options.paths.length > 0 && options.paths.length <= 1000, 'paths 必须是手机绝对路径数组（1–1000 项）');
      const paths = options.paths.map(p => phonePath(p, 'paths'));
      requireThat(new Set(paths).size === paths.length && !paths.some(p => paths.some(other => other !== p && p.startsWith(other + '/'))), 'paths 不能重复或同时包含父目录和子路径');
      const response = checked(await this.phones.json(s, '/pc_file_manager/delete_info', { list: paths, bucketId: [] }), '删除');
      const data = response.data;
      if (!Number.isSafeInteger(data?.total) || data.total <= 0 || ![0, 13].includes(Number(data.failType)) ||
          (data.successTotal !== undefined && data.successTotal !== data.total)) {
        throw new ApiError(502, 'FILE_DELETE_INCOMPLETE', '手机未确认全部删除完成，可能已删除部分文件；请刷新列表', { response });
      }
      return { paths, response };
    }
    if (action === 'size') {
      const source = phonePath(options.path, 'path', true);
      const response = checked(await this.get(s, '/pc_file_manager/query_directory_size', { path: source }), '查询目录大小');
      if (!Number.isSafeInteger(response.data?.size) || response.data.size < 0) throw new ApiError(502, 'FILE_OPERATION_UNCONFIRMED', '手机返回的目录大小无效');
      return { path: source, size: response.data.size };
    }
    throw new ApiError(404, 'NOT_FOUND', '文件操作不存在');
  }
}
