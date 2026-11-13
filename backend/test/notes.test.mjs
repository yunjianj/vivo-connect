import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { once } from 'node:events';
import { Readable } from 'node:stream';
import { NotesManager, simpleNote, convertibleTextNote } from '../src/notes.mjs';
import { NotesCipher } from '../src/notes-cipher.mjs';
import { Jobs } from '../src/jobs.mjs';
import { createBackend } from '../src/server.mjs';
const hash = x => crypto.createHash('sha256').update(String(x)).digest('hex');
const attachment = Buffer.from('simulated-note-attachment');
const note = (guid = 'note-a', seq = 1) => ({ guid, updateSequenceNum: seq, title: '笔记示例', contentDigest: '正文摘要', deleted: 1, updateTime: 1700000000000, createTime: 1690000000000, encryptType: 0, noteBookGuid: 'book-a', type: 1, unknownField: { keep: true } });
const resource = { guid: 'resource-a', noteGuid: 'note-a', updateSequenceNum: 1, deleted: 1, resourceKey: 'meta-a', name: '图片.jpg', resourceSize: attachment.length, mime: 'jpg' };
test('text-only styled paragraphs can be converted without admitting embedded or hidden content',()=>{
  assert.equal(convertibleTextNote('<div style="font-size:16px"><span>第一行</span></div><div><br></div><div>第二行</div>'),true);
  for(const html of ['<div>文字<img src="x"></div>','<vnote-image/>','<p hidden>秘密</p>','<div contenteditable="false">锁定</div>','<span style="display:none">隐藏</span>','<p>文字</p><!--keep-->']) assert.equal(convertibleTextNote(html),false);
  assert.equal(convertibleTextNote('<p>文字</p>',[resource]),false);
});
test('cloud timeouts distinguish reads from uncertain writes without retrying',async t=>{
  const {manager}=await setup(t); let calls=0;
  manager.json=async()=>{calls++;throw Object.assign(new Error('timeout'),{code:'UPSTREAM_TIMEOUT'});};
  await assert.rejects(manager.cloud(manager.accounts.account,'/sync/getSyncState',{},undefined,false),e=>e.code==='NOTE_CLOUD_TIMEOUT' && e.message.includes('读取'));
  await assert.rejects(manager.cloud(manager.accounts.account,'/sync/updateSync/v2',{},undefined),e=>e.code==='NOTE_CLOUD_TIMEOUT' && e.message.includes('尚未确认'));
  assert.equal(calls,2);
});
const testCipher = () => ({ encrypt: v => JSON.stringify(v), decrypt: v => JSON.parse(v) });
async function setup(t) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-notes-test-'));t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const accounts = { account: { openId: 'account-a', token: 'private-token', deviceId: 'login-device', regionCode: 'CN' } }, jobs = new Jobs();t.after(() => jobs.close());
  const f = { target: 2, notes: [note(), note('note-b', 2)], trash: [], content: '<p>普通文本</p>', resources: [], calls: [], badPage: false, fail: false, malformed: false, badHash: false, badHost: false, partial: false, readingChanged: false, onCall: null };
  const json = async (url, options) => {
    let route = new URL(url).pathname, body = options.json?.jvq_param ? JSON.parse(options.json.jvq_param) : options.json;
    f.calls.push({ route, body, headers: options.headers });assert.equal(options.headers.token, 'private-token');
    if (f.onCall) { const fn = f.onCall; f.onCall = null; fn(); }
    if (f.fail) throw Object.assign(new Error('offline'), { code: 'ECONNRESET' });
    let data;
    if (route.endsWith('getSyncState')) data = { updateCount: f.target, fullSyncBefore: 0 };
    else if (route.endsWith('getSyncChunk/v2')) {
      if (f.partial && Number(body.afterUsn) >= 1) throw new Error('page failed');
      const selected = f.notes.filter(n => n.updateSequenceNum > Number(body.afterUsn)).slice(0, 1);
      data = { notes: selected, noteBooks: [{ guid: 'book-a', name: '工作', updateSequenceNum: 1, deleted: 1 }], resources: f.resources, tags: [], chunkHighUsn: f.badPage ? body.afterUsn : (selected.at(-1)?.updateSequenceNum ?? f.target), updateCount: f.target, delete: { notes: [] }, remove: { notes: [] } };
      if (f.malformed) delete data.notes;
    } else if (route.endsWith('getRecentlyDeleted/v2')) data = { notes: f.trash, documents: null };
    else if (route.endsWith('getIncludeItem/v2')) { const n = f.notes.find(n => n.guid === body.guid) || f.trash.find(n => n.guid === body.guid); data = { ...n, resources: f.resources };if(f.readingChanged){data.updateSequenceNum+=1;} }
    else if (route.endsWith('getContent/v2')) { data = f.content; if(f.changeAfterContent){f.notes.find(n=>n.guid===body.guid).updateSequenceNum=++f.target;} }
    else if (/\/(createSync|updateSync)\/v2$/.test(route)) { const changed = body.notes[0];f.target++;const old=f.notes.find(n => n.guid===changed.guid);f.notes=f.notes.filter(n => n.guid!==changed.guid).concat({ ...old, ...changed, updateSequenceNum:f.target });if(changed.content)f.content=changed.content;data={notes:[{guid:changed.guid,updateSequenceNum:f.target}],updateCount:f.target}; }
    else if (route.endsWith('/note/expunge')) { if(f.noWrite) return {code:0,data:[]}; assert.deepEqual(body.delete, []);assert.equal(body.remove.length,1);const n=f.notes.find(n => n.guid===body.remove[0]);f.notes=f.notes.filter(row=>row!==n);f.trash=[{...n,deleted:0,updateSequenceNum:++f.target}];data=[{guid:n.guid,updateSequenceNum:f.target}]; }
    else if (route.endsWith('/service/recover')) { assert.equal(body.notes.length,1);const n=f.trash.find(n=>n.guid===body.notes[0]);f.trash=[];f.notes.push({...n,deleted:1,updateSequenceNum:++f.target});data={notes:[{guid:n.guid,updateSequenceNum:f.target}]}; }
    else if(route.endsWith('/fileInfo.do'))data={metaInfo:{metaId:'meta-a',fileSize:attachment.length,asDir:false,domain:f.badHost?'https://evil.example/':'https://clouddisk-cn09.vivo.com.cn',checkSum:f.badHash?'0'.repeat(64):crypto.createHash('sha256').update(attachment).digest('hex')}};
    else if(route.endsWith('/getStsToken.do'))data={stsToken:'temporary-sts'};
    else throw new Error('Unexpected cloud route');
    return options.json?.jvq_param ? { jvq_response: JSON.stringify({ code: 0, data }) } : { code: 0, data };
  };
  const stream = async (url, options) => { assert.equal(new URL(url).hostname,'clouddisk-cn09.vivo.com.cn');assert.equal(options.headers.token,undefined);assert.equal(options.headers['x-yun-ststoken'],'temporary-sts');return Readable.from([attachment]); };
  const manager=new NotesManager({dir},accounts,jobs,{json,stream,cipher:testCipher});t.after(()=>manager.close());
  const run=async job=>{await jobs.get(job.id).done;return jobs.get(job.id);};
  return {dir,accounts,jobs,f,manager,run,json,stream};
}

test('notes cipher matches an independent official implementation vector and rejects corrupt responses', async () => {
  const v=JSON.parse(await fs.readFile(new URL('../../evidence/notes/cipher-vector.json',import.meta.url),'utf8'));
  const c=new NotesCipher();c.key=Buffer.from(v.key);c.iv=Buffer.from(v.iv);assert.deepEqual(c.decrypt(v.encrypted),v.sample);
  const encoded=c.encrypt(v.sample);assert.deepEqual(c.decrypt(encoded),v.sample);assert.deepEqual(c.decrypt(Buffer.from(encoded,'base64url').toString('base64')),v.sample);
  const corrupt=Buffer.from(encoded,'base64url');corrupt[20]^=1;assert.throws(()=>c.decrypt(corrupt.toString('base64url')),e=>e.code==='NOTE_CIPHER_INVALID');
  assert.throws(()=>new NotesCipher().decrypt(encoded),e=>e.code==='NOTE_CIPHER_INVALID');
});

test('sync follows chunkHighUsn rather than global updateCount and atomically preserves notebooks and index',async t=>{
  const {manager,run,f}=await setup(t);assert.equal((await run(manager.sync())).status,'succeeded');
  const list=await manager.list();assert.equal(list.items.length,2);assert.equal(list.items[0].notebook,'工作');
  assert.deepEqual(f.calls.filter(c=>c.route.endsWith('getSyncChunk/v2')).map(c=>c.body.afterUsn),['0','1']);
  assert(!JSON.stringify(list).includes('private-token'));
  const before=f.calls.length;await run(manager.sync());assert(!f.calls.slice(before).some(c=>c.route.endsWith('getSyncChunk/v2')));
});

test('partial, malformed or stalled pages and regressed versions never replace the old cache',async t=>{
  const {manager,run,f,accounts}=await setup(t);f.partial=true;assert.equal((await run(manager.sync())).status,'failed');assert.equal((await manager.index(accounts.account)).version,'0');
  f.partial=false;await run(manager.sync());const old=await manager.index(accounts.account);f.target=3;f.badPage=true;
  assert.equal((await run(manager.sync())).error.code,'NOTE_PAGE_STALLED');assert.deepEqual(await manager.index(accounts.account),old);
  f.badPage=false;f.malformed=true;assert.equal((await run(manager.sync())).error.code,'NOTE_DATA_INVALID');assert.deepEqual(await manager.index(accounts.account),old);
  f.target=1;f.malformed=false;assert.equal((await run(manager.sync())).error.code,'NOTE_VERSION_REGRESSED');
});

test('detail reads content separately, caches by version, and never opens encrypted notes',async t=>{
  const {manager,run,f}=await setup(t);await run(manager.sync());const n=hash('note-a');
  const detail=await manager.detail(n);assert.equal(detail.content,'<p>普通文本</p>');assert.equal(detail.editable,true);
  const count=f.calls.length;await manager.detail(n);assert.equal(f.calls.length,count);
  f.notes[0].encryptType=1;f.notes[0].updateSequenceNum=++f.target;await run(manager.sync());
  const row=(await manager.list()).items.find(n=>n.id===hash('note-a'));assert.equal(row.title,'加密笔记');assert.equal(row.digest,'');
  await assert.rejects(manager.detail(n),e=>e.code==='NOTE_LOCKED');
});

test('resource-only changes invalidate cached details and complex note content cannot be overwritten',async t=>{
  const {manager,run,f}=await setup(t);await run(manager.sync());const n=hash('note-a');await manager.detail(n);
  f.target=3;f.resources=[resource];await run(manager.sync());const detail=await manager.detail(n);assert.equal(detail.attachments.length,1);assert.equal(detail.editable,true);assert.equal(detail.editMode,'text-parts');
  const result=await run(manager.modify(n,'save',{title:'新标题',text:'替换正文',version:'1'}));assert.equal(result.error.code,'NOTE_COMPLEX_CONTENT');assert(!f.calls.some(c=>c.route.endsWith('updateSync/v2')));
  assert.equal(simpleNote('<p onclick="unsafe()">x</p>'),false);assert.equal(simpleNote('<vnote-image/>'),false);
});

test('edits use observed versions and omit unmodified rich content; trash uses remove, never permanent delete',async t=>{
  const {manager,run,f}=await setup(t);await run(manager.sync());const n=hash('note-a');
  assert.equal((await run(manager.modify(n,'rename',{title:'新名称',version:'0'}))).error.code,'NOTE_CONFLICT');
  assert.equal((await run(manager.modify(n,'rename',{title:'新名称',version:'1'}))).status,'succeeded');
  const sent=f.calls.find(c=>c.route.endsWith('updateSync/v2')).body.notes[0];assert.equal(sent.content,undefined);assert.deepEqual(sent.unknownField,{keep:true});assert.equal(sent.noteBookGuid,'book-a');assert.equal(f.notes.find(n=>n.guid==='note-a').unknownField.keep,true);
  let seq=String(f.target);assert.equal((await run(manager.modify(n,'trash',{version:seq}))).status,'succeeded');assert.equal((await manager.list()).items.find(i=>i.id===n).inTrash,true);
  seq=String(f.target);assert.equal((await run(manager.modify(n,'restore',{version:seq}))).status,'succeeded');assert.equal((await manager.list()).items.find(i=>i.id===n).inTrash,false);
});

test('new notes escape plaintext rather than accepting markup; cancelled sync does not perform cloud requests',async t=>{
  const {manager,run,jobs,f}=await setup(t);const job=manager.sync();jobs.cancel(job.id);assert.equal((await run(job)).status,'cancelled');assert.equal(f.calls.length,0);
  const created=await run(manager.modify(null,'create',{title:'示例',text:'<script>literal</script>\n下一行'}));assert.equal(created.status,'succeeded');
  const body=f.calls.find(c=>c.route.endsWith('createSync/v2')).body.notes[0];assert(body.content.includes('&lt;script&gt;'));assert(!body.content.includes('<script>'));
});

test('attachment export checks allowed host, size, checksum, membership and uses no account token on CDN',async t=>{
  const {manager,run,f}=await setup(t);f.resources=[resource];await run(manager.sync());const n=hash('note-a'),r=hash('resource-a');
  f.badHost=true;assert.equal((await run(manager.download(n,r))).error.code,'NOTE_ATTACHMENT_HOST_REJECTED');f.badHost=false;
  f.badHash=true;assert.equal((await run(manager.download(n,r))).error.code,'NOTE_ATTACHMENT_CHECKSUM');f.badHash=false;
  assert.equal((await run(manager.download(n,r))).status,'succeeded');assert.deepEqual(await fs.readFile((await manager.file(n,r)).path),attachment);
  assert.equal((await run(manager.download(n,hash('another-resource')))).error.code,'NOTE_ATTACHMENT_MISSING');
});

test('account switch isolates notes, caches and auto settings and aborts an in-flight old-account response',async t=>{
  const {manager,run,f,accounts}=await setup(t);await run(manager.sync());await manager.configure({automatic:true});
  accounts.account={...accounts.account,openId:'account-b'};assert.equal((await manager.list()).items.length,0);assert.equal((await manager.list()).automatic,false);
  f.onCall=()=>{accounts.account={...accounts.account};};assert.equal((await run(manager.sync())).error.code,'NOTE_ACCOUNT_CHANGED');
  accounts.account=null;assert.throws(()=>manager.sync(),e=>e.code==='NOTE_LOGIN_REQUIRED');
});

test('note HTTP APIs require bearer auth and keep cloud credentials and filesystem paths out of responses',async t=>{
  const f=await setup(t);const accounts={...f.accounts,async load(){},async close(){}};
  const app=await createBackend({stateDir:path.join(f.dir,'http'),accountManager:accounts,notesOptions:{json:f.json,stream:f.stream,cipher:testCipher}});t.after(()=>app.close());
  app.server.listen(0,'127.0.0.1');await once(app.server,'listening');
  const call=(route,method='GET',body,token=app.state.apiToken)=>fetch(`http://127.0.0.1:${app.server.address().port}`+route,{method,headers:{authorization:'Bearer '+token,'content-type':'application/json'},body:body?JSON.stringify(body):undefined});
  assert.equal((await call('/api/notes','GET',undefined,'wrong')).status,401);
  const response=await call('/api/notes/sync','POST',{});assert.equal(response.status,202);const job=await response.json();await app.jobs.get(job.id).done;
  const list=await(await call('/api/notes')).json();assert.equal(list.items.length,2);assert(!JSON.stringify(list).includes('private-token'));
  const detail=await(await call('/api/notes/'+hash('note-a'))).json();assert.equal(detail.content,'<p>普通文本</p>');assert(!JSON.stringify(detail).includes('userId'));
  assert.equal((await call('/api/notes/'+hash('missing'))).status,404);
});


test('a note changed between metadata and body reads is never accepted into the content cache',async t=>{
  const {manager,run,f,accounts}=await setup(t);await run(manager.sync());f.changeAfterContent=true;
  await assert.rejects(manager.detail(hash('note-a')),e=>e.code==='NOTE_CHANGED');
  await assert.rejects(fs.access(path.join(manager.folder(accounts.account),'content',hash('note-a')+'.json')));
});


test('a successful HTTP/business status without the expected cloud change is not reported as saved',async t=>{
  const {manager,run,f}=await setup(t);await run(manager.sync());f.noWrite=true;
  const result=await run(manager.modify(hash('note-a'),'trash',{version:'1'}));
  assert.equal(result.status,'failed');assert.equal(result.error.code,'NOTE_OPERATION_UNCONFIRMED');
});


test('formatted notes with attachments can edit visible text without changing markup or resource associations',async t=>{
  const {manager,run,f}=await setup(t);f.resources=[resource];
  f.content='<p style="font-size:16px">旧文字 <strong>重点</strong></p><vnote-image guid="resource-a"/>';
  await run(manager.sync());const id=hash('note-a'),before=await manager.detail(id);
  assert.equal(before.editable,true);assert.equal(before.editMode,'text-parts');assert.equal(before.textParts.length,2);
  const result=await run(manager.modify(id,'save',{title:'新标题',version:'1',edits:[{id:before.textParts[0].id,text:'新文字 & 内容 '}]}));
  assert.equal(result.status,'succeeded');assert.equal(f.content,'<p style="font-size:16px">新文字 &amp; 内容 <strong>重点</strong></p><vnote-image guid="resource-a"/>');
  assert.deepEqual(f.resources,[resource]);const sent=f.calls.find(c=>c.route.endsWith('updateSync/v2')).body;
  assert.deepEqual(sent.resources,[]);assert.equal(sent.notes[0].unknownField.keep,true);
});
