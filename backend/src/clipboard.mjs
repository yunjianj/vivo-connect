import { ApiError, requireThat } from './core.mjs';

export const CLIPBOARD_PREFIX = 'CLIPBOARD_TEXT:';
export const CLIPBOARD_LIMIT = 64 * 1024;
function state(s) {
  return s.clipboard ??= { enabled: true, text: null, revision: 0, source: null, updatedAt: null };
}
function update(s, text, source) {
  const value = state(s);
  if (value.text === text) return;
  Object.assign(value, { text, source, revision: value.revision + 1, updatedAt: new Date().toISOString() });
}

// Only the prefix is removed: the remainder is text, never JSON or a command.
export function receiveClipboard(s, data, isBinary = false) {
  if (isBinary) return;
  const message = data.toString('utf8');
  if (!message.startsWith(CLIPBOARD_PREFIX) || !state(s).enabled) return;
  const text = message.slice(CLIPBOARD_PREFIX.length);
  if (Buffer.byteLength(text, 'utf8') > CLIPBOARD_LIMIT) return;
  update(s, text, 'phone');
}

export class ClipboardManager {
  constructor(phones) { this.phones = phones; }
  read(id) { return { ...state(this.phones.get(id)) }; }
  configure(id, options) {
    requireThat(typeof options.enabled === 'boolean', 'enabled 必须是布尔值');
    const value = state(this.phones.get(id));
    if (value.enabled !== options.enabled) {
      Object.assign(value, { enabled: options.enabled, text: null, source: null, updatedAt: null, revision: value.revision + 1 });
    }
    return { ...value };
  }
  async write(id, options) {
    requireThat(typeof options.text === 'string' && Buffer.byteLength(options.text, 'utf8') <= CLIPBOARD_LIMIT, 'text 必须是 UTF-8 文本，最多 64 KiB');
    const s = this.phones.get(id), value = state(s);
    if (!value.enabled) throw new ApiError(409, 'CLIPBOARD_DISABLED', '此会话剪贴板同步已暂停');
    if (s.status !== 'connected' || s.ws?.readyState !== 1) throw new ApiError(409, 'SESSION_DISCONNECTED', '手机会话已断开');
    if (s.clipboardSending) throw new ApiError(409, 'CLIPBOARD_BUSY', '剪贴板文本正在发送，请稍后重试');
    if (value.text === options.text) return { ...value, sent: false };
    const revision = value.revision;
    s.clipboardSending = true;
    try { await this.phones.sendMessage(s, CLIPBOARD_PREFIX + options.text, 'CLIPBOARD_SEND_FAILED', '无法发送手机剪贴板文本'); }
    finally { s.clipboardSending = false; }
    // A pause or disconnect during the send must not restore cleared text.
    if (s.clipboard === value && value.enabled && value.revision === revision) update(s, options.text, 'pc');
    return { ...state(s), sent: true };
  }
}
