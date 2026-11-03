#!/usr/bin/env node
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import { createBackend } from '../backend/src/server.mjs';
import { detectBrowser,executable,WebDriver } from '../backend/src/browser.mjs';
const dir=await fs.mkdtemp(path.join(os.tmpdir(),'vivo-ui-smoke-'));let app,browser;
try{
 app=await createBackend({stateDir:path.join(dir,'state')});
 app.scans.selectNetwork=()=>({address:'192.0.2.2'});
 app.scans.cloudRequest=async(url,options)=>{
  if(url.endsWith('/scan/sid'))return {code:0,data:{sid:'offline-ui-test',timeout:180000}};
  return new Promise((resolve,reject)=>{options.signal.addEventListener('abort',()=>reject(new Error('Test closed')),{once:true});});
 };
 app.server.listen(0,'127.0.0.1');await once(app.server,'listening');const base=`http://127.0.0.1:${app.server.address().port}`;
 const ticketResponse=await fetch(base+'/api/ui/tickets',{method:'POST',headers:{Authorization:`Bearer ${app.state.apiToken}`}});const {ticket}=await ticketResponse.json();
 browser=await WebDriver.launch({binary:await detectBrowser(),driver:await executable('chromedriver'),profile:path.join(dir,'browser'),headless:true});
 await browser.command(`/session/${browser.id}/window/rect`,{width:1200,height:900});
 await browser.navigate(base+'/scan#ticket='+ticket);
 let result;
 for(let i=0;i<100;i++){
  result=await browser.execute(`const e=document.querySelector('#image img');return {ready:!!e&&e.complete&&e.naturalWidth>0,status:document.querySelector('#status')?.textContent,fragment:location.hash,controls:!document.querySelector('#controls')?.hidden}`);
  if(result.ready)break;await delay(100);
 }
 assert(result.ready,JSON.stringify(result));assert.equal(result.fragment,'');assert(result.controls);assert.equal(result.status,'等待手机扫码');
 app.p2p.network={id:'offline-p2p',stationInterface:'wlan-test',groupInterface:'p2p-test',ip:'192.168.49.1',ssid:'DIRECT-xy offline',passphrase:'offline-test-password',bssid:'02:11:22:33:44:55'};app.p2p.expires=Date.now()+30000;
 await browser.execute(`document.querySelector('#transport').value='p2p';document.querySelector('#refresh').click();`);
 for(let i=0;i<100;i++){
  result=await browser.execute(`const e=document.querySelector('#image img');return {ready:!!e&&e.complete&&e.naturalWidth>0,status:document.querySelector('#status')?.textContent}`);
  if(result.ready&&result.status==='等待手机加入 Wi-Fi Direct')break;await delay(100);
 }
 assert(result.ready);assert.equal(result.status,'等待手机加入 Wi-Fi Direct');
 for(const [progress,expected] of [[{associatedStations:1,authorizedStations:1,dhcpAcks:0},'正在为手机分配地址'],[{associatedStations:1,authorizedStations:1,dhcpAcks:1},'等待手机确认连接']]){
  app.p2p.heartbeat('offline-p2p',progress);
  for(let i=0;i<30;i++){
   result=await browser.execute(`return {status:document.querySelector('#status').textContent,diagnostic:document.querySelector('#diagnostic').textContent}`);
   if(result.status===expected)break;await delay(100);
  }
  assert.equal(result.status,expected);assert(result.diagnostic.includes('验证通过 1'));
 }
 const screenshot=await browser.command(`/session/${browser.id}/screenshot`);await fs.writeFile('/tmp/vivo-scan-ui.png',Buffer.from(screenshot,'base64'));
 console.log('PASS: real browser displayed QR, removed the ticket, and displayed wireless authentication / DHCP / callback progress. P2P, cloud and phone state were mocked. Screenshot: /tmp/vivo-scan-ui.png');
}finally{await browser?.close();await app?.close();await fs.rm(dir,{recursive:true,force:true,maxRetries:5,retryDelay:100});}
