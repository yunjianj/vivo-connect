import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { once } from 'node:events';
import { createBackend } from '../src/server.mjs';
import { renderQr } from '../src/qr.mjs';

// qrencode is an explicit optional UI dependency, not a network QR service.
test('actual QR renderer creates a self-contained SVG from stdin',async()=>{
 const image=await renderQr('https://example.invalid/vivo-offline-test');
 assert(image.startsWith('data:image/svg+xml;base64,'));
 const svg=Buffer.from(image.split(',')[1],'base64').toString();assert(svg.includes('<svg'));assert(!svg.includes('<script'));
});

test('local scan UI redeems a one-use ticket and grants only scoped APIs',async t=>{
 const dir=await fs.mkdtemp(path.join(os.tmpdir(),'vivo-ui-test-'));t.after(()=>fs.rm(dir,{recursive:true,force:true}));
 const app=await createBackend({stateDir:dir});t.after(()=>app.close());app.server.listen(0,'127.0.0.1');await once(app.server,'listening');
 const base=`http://127.0.0.1:${app.server.address().port}`;
 const page=await fetch(base+'/scan');assert.equal(page.status,200);assert((await page.text()).includes('手机扫码连接'));
 assert(page.headers.get('content-security-policy').includes("frame-ancestors 'none'"));
 const ticketRes=await fetch(base+'/api/ui/tickets',{method:'POST',headers:{Authorization:`Bearer ${app.state.apiToken}`}});
 const {ticket}=await ticketRes.json();assert(ticket);
 const redeem=()=>fetch(base+'/api/ui/redeem',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ticket})});
 const response=await redeem();assert.equal(response.status,200);const {token}=await response.json();assert.notEqual(token,app.state.apiToken);
 assert.equal((await redeem()).status,401);
 const allowed=await fetch(base+'/api/account',{headers:{Authorization:`Bearer ${token}`}});assert.equal(allowed.status,200);
 const denied=await fetch(base+'/api/sessions/phone/uploads',{method:'POST',headers:{Authorization:`Bearer ${token}`}});assert.equal(denied.status,401);
 for(const method of ['GET','PUT','PATCH']) {
  const response=await fetch(base+'/api/sessions/phone/clipboard',{method,headers:{Authorization:`Bearer ${token}`}});
  assert.equal(response.status,401);
 }
 app.accounts.start=async()=>({status:'waiting'});
 assert.equal((await fetch(base+'/api/account/login',{method:'POST',headers:{Authorization:`Bearer ${token}`}})).status,202);
 assert.equal((await fetch(base+'/api/p2p/register',{method:'POST',headers:{Authorization:`Bearer ${token}`}})).status,401);
 assert.equal((await fetch(base+'/api/ui/tickets',{method:'POST',headers:{Authorization:`Bearer ${token}`}})).status,401);
 const crossSite=await fetch(base+'/api/ui/redeem',{method:'POST',headers:{Origin:'https://evil.invalid'},body:'{}'});assert.equal(crossSite.status,403);
});

test('browser upload stages only selected bytes, rejects traversal and size mismatch, and cleans temporary files',async t=>{
 const dir=await fs.mkdtemp(path.join(os.tmpdir(),'vivo-browser-upload-'));t.after(()=>fs.rm(dir,{recursive:true,force:true}));
 const app=await createBackend({stateDir:dir});t.after(()=>app.close());app.server.listen(0,'127.0.0.1');await once(app.server,'listening');
 app.phones.sessions.set('phone',{id:'phone',status:'connected'});
 let received;app.transfers.upload=async(id,options)=>{received={id,content:await fs.readFile(options.paths[0],'utf8'),file:options.paths[0],savePath:options.savePath};return {totalSize:8,files:[{fileName:'example.txt'}]};};
 const base=`http://127.0.0.1:${app.server.address().port}`;
 const ticketRes=await fetch(base+'/api/ui/tickets',{method:'POST',headers:{Authorization:`Bearer ${app.state.apiToken}`}});
 const redeemed=await fetch(base+'/api/ui/redeem',{method:'POST',body:JSON.stringify(await ticketRes.json())});const {token}=await redeemed.json();
 const upload=(name,size,body)=>fetch(base+'/api/ui/files?'+new URLSearchParams({name,sessionId:'phone'}),{method:'POST',headers:{Authorization:`Bearer ${token}`,'X-File-Size':String(size)},body});
 const response=await upload('example.txt',8,'12345678');assert.equal(response.status,202);const job=await response.json();await app.jobs.get(job.id).done;
 assert.equal(app.jobs.get(job.id).status,'succeeded');assert.equal(received.content,'12345678');assert.equal(received.savePath,'/sdcard/Download');
 await assert.rejects(fs.stat(received.file),{code:'ENOENT'});
 assert.equal((await upload('../secret',0,'')).status,400);
 assert.equal((await upload('big',513*1024**2,'')).status,400);
 assert.equal((await upload('short',8,'1234')).status,400);
 assert.deepEqual(await fs.readdir(path.join(dir,'tmp')),[]);
});
