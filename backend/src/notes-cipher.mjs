import crypto from 'node:crypto';
import { readFileSync } from 'node:fs';
import { ApiError } from './core.mjs';
const publicKey = readFileSync(new URL('./notes-public-key.pem', import.meta.url));
function crc32(bytes) {
  let value = 0xffffffff;
  for (const byte of bytes) { value ^= byte; for (let i = 0; i < 8; ++i) value = (value >>> 1) ^ ((value & 1) ? 0xedb88320 : 0); }
  return (value ^ 0xffffffff) >>> 0;
}
const ascii = () => Buffer.from(Array.from({ length: 16 }, () => '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'[crypto.randomInt(36)]).join(''));
export class NotesCipher {
  constructor() { this.key = ascii(); this.iv = ascii(); }
  encrypt(value) {
    const token = Buffer.from('com.android.notes');
    const wrapped = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, this.key);
    const header = Buffer.alloc(10 + token.length + this.iv.length + wrapped.length);
    header.writeUInt16BE(32, 0); header.writeUInt16BE(203, 2); header.writeUInt16BE(1, 4); header[6] = 65; header[7] = token.length;
    token.copy(header, 8); this.iv.copy(header, 8 + token.length); header.writeUInt16BE(wrapped.length, 24 + token.length); wrapped.copy(header, 26 + token.length);
    const prefix = Buffer.alloc(10); prefix.writeUInt16BE(10 + header.length); prefix.writeBigUInt64BE(BigInt(crc32(header)), 2);
    const cipher = crypto.createCipheriv('aes-128-cbc', this.key, this.iv);
    return Buffer.concat([prefix, header, cipher.update(JSON.stringify(value)), cipher.final()]).toString('base64url');
  }
  decrypt(value) {
    try {
      if (typeof value !== 'string' || !/^[A-Za-z0-9_+/=-]+$/.test(value) || value.length > 8 * 1024 * 1024) throw new Error();
      const bytes = Buffer.from(value, 'base64url'), length = bytes.readUInt16BE(0);
      if (length < 36 || length >= bytes.length || bytes.readUInt16BE(12) !== 203 || bytes.readBigUInt64BE(2) !== BigInt(crc32(bytes.subarray(10, length)))) throw new Error();
      const decipher = crypto.createDecipheriv('aes-128-cbc', this.key, this.iv);
      return JSON.parse(Buffer.concat([decipher.update(bytes.subarray(length)), decipher.final()]).toString('utf8'));
    } catch { throw new ApiError(502, 'NOTE_CIPHER_INVALID', '笔记云端加密响应校验失败'); }
  }
}
