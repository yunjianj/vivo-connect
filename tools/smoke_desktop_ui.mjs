#!/usr/bin/env node
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import {once} from 'node:events';
import {setTimeout as delay} from 'node:timers/promises';
import {createBackend} from '../backend/src/server.mjs';
import {detectBrowser,executable,WebDriver} from '../backend/src/browser.mjs';
const dir=await fs.mkdtemp(path.join(os.tmpdir(),'vivo-desktop-ui-'));let app,browser;
try{
 app=await createBackend({stateDir:path.join(dir,'state')});
 app.phones.sessions.set('desktop-phone',{id:'desktop-phone',mode:'existing',transport:'wifi-direct',status:'connected',ip:'192.168.49.79',localIp:'192.168.49.1',info:{mobileDeviceName:'vivo X200 Pro'}});
 app.accounts.account={openId:'offline-test',nickName:'已登录的 vivo 账号'};
 app.phones.json=async()=>({code:'0000',data:{dataList:[{fileName:'旅行清单.txt',savePath:'/sdcard/Download/旅行清单.txt',fileSize:48,isDirectory:false},{fileName:'照片',savePath:'/sdcard/Download/照片',isDirectory:true}]}});
 let received;
 app.transfers.upload=async(id,options)=>{received=await fs.readFile(options.paths[0],'utf8');return {totalSize:Buffer.byteLength(received),files:[{fileName:path.basename(options.paths[0]),savePath:'/sdcard/Download/'+path.basename(options.paths[0])}]};};
 app.transfers.download=async(id,options)=>{const directory=path.join(dir,'received');await fs.mkdir(directory,{recursive:true});await fs.writeFile(path.join(directory,'旅行清单.txt'),'offline file');return {directory,totalSize:12,files:[{path:'旅行清单.txt',size:12}]};};
 const previous=app.jobs.create('download',async()=>({totalSize:24000,files:[{path:'会议记录.pdf',size:24000}]}),'desktop-phone');await app.jobs.get(previous.id).done;
 app.server.listen(0,'127.0.0.1');await once(app.server,'listening');const base=`http://127.0.0.1:${app.server.address().port}`;
 const {ticket}=await (await fetch(base+'/api/ui/tickets',{method:'POST',headers:{Authorization:`Bearer ${app.state.apiToken}`}})).json();
 browser=await WebDriver.launch({binary:await detectBrowser(),driver:await executable('chromedriver'),profile:path.join(dir,'browser'),headless:true});
 await browser.command(`/session/${browser.id}/window/rect`,{width:1360,height:1100});await browser.navigate(base+'/scan#ticket='+ticket);
 for(let i=0;i<100;i++){if(await browser.execute(`return !document.querySelector('#dashboard').hidden&&document.querySelector('#device-name').textContent==='vivo X200 Pro'`))break;await delay(100);}
 assert.equal(await browser.execute(`return document.querySelector('#device-name').textContent`),'vivo X200 Pro');
 assert.equal(await browser.execute(`return document.querySelector('#pair-dialog').open`),false);
 assert.equal(await browser.execute(`return location.hash`),'');
 await browser.execute(`const dt=new DataTransfer();dt.items.add(new File(['desktop-upload-test'],'测试文件.txt',{type:'text/plain'}));document.querySelector('#dropzone').dispatchEvent(new DragEvent('drop',{bubbles:true,cancelable:true,dataTransfer:dt}));`);
 for(let i=0;i<100&&!received;i++)await delay(100);assert.equal(received,'desktop-upload-test');
 for(let i=0;i<50;i++){if(await browser.execute(`return document.querySelector('#recent-list').textContent.includes('测试文件.txt')`))break;await delay(100);}
 assert(await browser.execute(`return document.querySelector('#recent-list').textContent.includes('测试文件.txt')`));
 await browser.execute(`document.querySelector('#toast').hidden=true`);
 const shot=await browser.command(`/session/${browser.id}/screenshot`);await fs.writeFile('/tmp/vivo-desktop-ui.png',Buffer.from(shot,'base64'));
 await browser.execute(`document.querySelector('[data-tab="files"]').click()`);
 for(let i=0;i<100;i++){if(await browser.execute(`return document.querySelector('#file-list').textContent.includes('旅行清单.txt')`))break;await delay(100);}
 assert(await browser.execute(`return document.querySelector('#file-list').textContent.includes('旅行清单.txt')`));
 await browser.execute(`document.querySelector('#file-list .text-button').click()`);
 for(let i=0;i<100;i++){if(await browser.execute(`return !document.querySelector('#history-view').hidden&&document.querySelector('#history-list').textContent.includes('旅行清单.txt')`))break;await delay(100);}
 assert(await browser.execute(`return document.querySelector('#history-list').textContent.includes('旅行清单.txt')`));
 await browser.command(`/session/${browser.id}/window/rect`,{width:390,height:844});
 assert(await browser.execute(`return document.documentElement.scrollWidth<=innerWidth`));
 console.log('PASS: desktop dashboard, selected device, browser drag/upload, phone directory, receive action and mobile layout. Phone state mocked. Screenshot: /tmp/vivo-desktop-ui.png');
}finally{await browser?.close();await app?.close();await fs.rm(dir,{recursive:true,force:true});}
