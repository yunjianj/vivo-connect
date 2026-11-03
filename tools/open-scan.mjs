#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { ROOT } from '../backend/src/core.mjs';
try {
 const config=JSON.parse(await fs.readFile(path.join(process.env.VIVO_STATE_DIR||path.join(ROOT,'.vivo-connect'),'config.json'),'utf8'));
 const port=Number(process.env.PORT||8765);if(!Number.isInteger(port)||port<1||port>65535)throw Error('PORT 不合法');
 const base=`http://127.0.0.1:${port}`;
 const response=await fetch(base+'/api/ui/tickets',{method:'POST',headers:{authorization:`Bearer ${config.apiToken}`},signal:AbortSignal.timeout(5000)});
 const data=await response.json();if(!response.ok)throw Error(data.error?.message||'请重启更新后的后端');
 const url=base+'/scan#ticket='+data.ticket;
 // Only a one-use, 60-second ticket is passed to the system browser, not the API token.
 const child=spawn('xdg-open',[url],{stdio:'ignore',detached:true});
 child.on('error',()=>{console.log('请在本机浏览器打开以下一次性链接：\n'+url);});child.unref();
 console.log('已打开 vivo Connect 设备界面，可连接手机、发送文件并查看传输记录。');
}catch(error){console.error(error.message);process.exitCode=1;}
