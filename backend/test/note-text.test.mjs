import test from 'node:test';
import assert from 'node:assert/strict';
import { noteTextParts, patchNoteText } from '../src/note-text.mjs';

test('rich-text edits retain byte-identical tags, attributes, comments and atomic attachments', () => {
  const html='<p style="text-align:left" data-value="a > b">旧文字 <strong>粗体</strong><!--keep--></p><vnote-image guid="asset"><span>图片内部</span></vnote-image><p><br></p>';
  const parts=noteTextParts(html);assert.equal(parts.length,3);assert.deepEqual(parts.map(p=>p.html),['旧文字 ','粗体','']);
  const changed=patchNoteText(html,[{id:parts[0].id,text:'新文字 & <内容>\n下一行'},{id:parts[2].id,text:'新增文字'}]);
  assert.equal(changed,'<p style="text-align:left" data-value="a > b">新文字 &amp; &lt;内容&gt;<br>下一行<strong>粗体</strong><!--keep--></p><vnote-image guid="asset"><span>图片内部</span></vnote-image><p><br>新增文字</p>');
});
test('text inside scripts, styles, custom atomic components and noneditable elements cannot be patched',()=>{
  const html='<style>hidden</style><script>"<p>not text</p>"</script><div contenteditable="false"><p>locked</p></div><svg><text>drawing</text></svg><p>可编辑</p><img src="keep.jpg">';
  assert.deepEqual(noteTextParts(html).map(p=>p.html),['可编辑']);assert.equal(patchNoteText(html,[]),html);
});
test('text ranges are tied to exact content and reject duplicate, unknown and oversize patches',()=>{
  const html='<p>原文</p>',part=noteTextParts(html)[0];
  assert.throws(()=>patchNoteText(html+' ',[{id:part.id,text:'改写'}]),e=>e.code==='NOTE_TEXT_CHANGED');
  assert.throws(()=>patchNoteText(html,[{id:part.id,text:'a'},{id:part.id,text:'b'}]),e=>e.status===400);
  assert.throws(()=>patchNoteText(html,[{id:part.id,text:'x'.repeat(512*1024+1)}]),e=>e.status===400);
  assert.equal(patchNoteText(html,[{id:part.id,text:'<script>alert(1)</script>'}]),'<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>');
});


test('an image-only note can append text without replacing its atomic component',()=>{
  const html='<vnote-image guid="keep-image"/>';
  const parts=noteTextParts(html);assert.equal(parts.length,1);
  assert.equal(patchNoteText(html,[{id:parts[0].id,text:'图片说明'}]),html+'<p>图片说明</p>');
});
