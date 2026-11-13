import crypto from 'node:crypto';
import { ApiError, requireThat } from './core.mjs';
const block = /^(p|div|li|h[1-6]|td|th|blockquote|pre)$/;
const opaque = /^(script|style|head|title|template|svg|math|canvas|iframe|object|embed|audio|video|vnote-.+)$/;
const empty = /^(br|img|hr|input|meta|link|source|track|wbr|area|base|col|param|embed)$/;
const tags = /<!--[\s\S]*?-->|<![^>]*>|<\/?[a-zA-Z][\w:.-]*(?:[^>"']|"[^"]*"|'[^']*')*>/g;
export const escapeNoteText = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Tokenize without reserializing HTML: all tags, attributes, comments and opaque
// atomic components retain their original bytes. Only selected text ranges change.
export function noteTextParts(content) {
  if (typeof content !== 'string') return [];
  const fingerprint = crypto.createHash('sha256').update(content).digest('hex');
  const parts = [], stack = []; let offset = 0;
  const append = (start, end, allowEmpty = false) => {
    if (stack.some(s => s.protected)) return;
    const html = content.slice(start, end);
    if (!allowEmpty && !html.trim()) return;
    const id = crypto.createHash('sha256').update(`${fingerprint}:${start}:${end}`).digest('hex');
    parts.push({ id, html, start, end });
    for (const frame of stack) frame.text = true;
  };
  for (const match of content.matchAll(tags)) {
    append(offset, match.index); const tag = match[0]; offset = match.index + tag.length;
    if (/^<!/.test(tag)) continue;
    const name = tag.match(/^<\/?([\w:.-]+)/)[1].toLowerCase();
    if (/^<\//.test(tag)) {
      const index = stack.findLastIndex(frame => frame.name === name);
      if (index >= 0) {
        if (block.test(name) && !stack[index].text) append(match.index, match.index, true);
        stack.splice(index);
      }
    } else if (!empty.test(name) && !/\/\s*>$/.test(tag)) {
      stack.push({ name, text: false, protected: opaque.test(name) || /\bcontenteditable\s*=\s*(?:"false"|'false'|false)(?:\s|>)/i.test(tag) });
    }
    if (parts.length > 2000) return [];
  }
  append(offset, content.length);
  if (parts.length === 0 && content.trim() && !stack.some(s => s.protected)) {
    append(content.length, content.length, true); if (parts.length) parts[0].appendParagraph = true;
  }
  return parts.length <= 2000 ? parts : [];
}
export function patchNoteText(content, edits) {
  requireThat(Array.isArray(edits) && edits.length <= 2000, '文字修改列表无效');
  const parts = new Map(noteTextParts(content).map(p => [p.id, p])), seen = new Set(); let total = 0;
  const replacements = edits.map(edit => {
    requireThat(edit && typeof edit.id === 'string' && typeof edit.text === 'string' && !edit.text.includes('\0') && !seen.has(edit.id), '文字修改内容无效或重复');
    total += Buffer.byteLength(edit.text); requireThat(total <= 512 * 1024, '修改文字超过 512 KiB'); seen.add(edit.id);
    const part = parts.get(edit.id);
    if (!part) throw new ApiError(409, 'NOTE_TEXT_CHANGED', '笔记文字结构已变化，请重新打开后编辑');
    const text = escapeNoteText(edit.text).replace(/\r\n|\r|\n/g, '<br>');
    return { ...part, text: part.appendParagraph ? '<p>' + text + '</p>' : text };
  });
  let result = content;
  for (const part of replacements.sort((a, b) => b.start - a.start)) result = result.slice(0, part.start) + part.text + result.slice(part.end);
  if (Buffer.byteLength(result) > 2 * 1024 * 1024) throw new ApiError(413, 'NOTE_CONTENT_INVALID', '修改后的正文超过 2 MiB');
  return result;
}
export function noteTextDigest(content) {
  const named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
  return noteTextParts(content).map(p => p.html.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (all, name) => {
    if (name[0] !== '#') return named[name.toLowerCase()];
    const n = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : Number(name.slice(1));
    return n > 0 && n <= 0x10ffff && !(n >= 0xd800 && n <= 0xdfff) ? String.fromCodePoint(n) : all;
  })).join('\n').slice(0, 1000);
}
