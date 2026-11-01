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
 const denied=await fetch(base+'/api/account/login',{method:'POST',headers:{Authorization:`Bearer ${token}`}});assert.equal(denied.status,401);
 assert.equal((await fetch(base+'/api/ui/tickets',{method:'POST',headers:{Authorization:`Bearer ${token}`}})).status,401);
 const crossSite=await fetch(base+'/api/ui/redeem',{method:'POST',headers:{Origin:'https://evil.invalid'},body:'{}'});assert.equal(crossSite.status,403);
});
