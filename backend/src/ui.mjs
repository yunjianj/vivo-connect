import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { ApiError } from './core.mjs';
import { collect } from './http.mjs';
import path from 'node:path';
import { createWriteStream } from 'node:fs';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { requireThat } from './core.mjs';

export class LocalUi {
  tickets = new Map(); sessions = new Map();
  prune() { for(const map of [this.tickets,this.sessions]) for(const [key,expires] of map) if(expires < Date.now()) map.delete(key); }
  ticket() { this.prune(); const ticket = crypto.randomBytes(32).toString('hex'); this.tickets.set(ticket,Date.now()+60000); return { ticket, expiresInMs:60000 }; }
  authorized(header, route) {
    this.prune(); const token = header?.replace(/^Bearer /,'');
    if (!this.sessions.has(token)) return false;
    return /^(GET \/api\/(account|network\/interfaces|p2p\/status|sessions|jobs|jobs\/[\w-]+(?:\/file)?)|POST \/api\/(account\/login|ui\/files|sessions\/(?:scan|p2p)|sessions\/[\w-]+\/(?:files|downloads)|jobs\/[\w-]+\/cancel)|DELETE \/api\/sessions\/[\w-]+)$/.test(route);
  }
  async upload(req,url,{state,transfers,jobs}) {
    const id=url.searchParams.get('sessionId');transfers.session(id);
    const name=url.searchParams.get('name')||'';const size=Number(req.headers['x-file-size']);
    requireThat(name&&name===path.basename(name)&&!/[\\\x00-\x1f]/.test(name)&&Buffer.byteLength(name)<=255&&name!=='.'&&name!=='..','文件名不合法');
    requireThat(Number.isSafeInteger(size)&&size>=0&&size<=512*1024**2,'浏览器单个文件上限为 512 MiB');
    const savePath=url.searchParams.get('savePath')||'/sdcard/Download';
    requireThat(savePath.startsWith('/')&&!savePath.includes('\0'),'手机保存位置不合法');
    const dir=path.join(state.dir,'tmp','browser-'+crypto.randomUUID());await fs.mkdir(dir,{recursive:true,mode:0o700});
    const file=path.join(dir,name);let scheduled=false;
    try {
      const disk=await fs.statfs(dir);requireThat(disk.bavail*disk.bsize>=size*2+104857600,'本地暂存空间不足');
      let bytes=0;
      const counter=new Transform({transform(chunk,encoding,done){bytes+=chunk.length;done(bytes>size?new ApiError(413,'FILE_SIZE_MISMATCH','文件大小与声明不符'):null,chunk);}});
      await pipeline(req,counter,createWriteStream(file,{flags:'wx',mode:0o600}));
      requireThat(bytes===size,'文件接收不完整');
      const job=jobs.create('upload',async(job,signal)=>{
        try{return await transfers.upload(id,{paths:[file],savePath,ifDuplicated:'rename'},job,signal);}
        finally{await fs.rm(dir,{recursive:true,force:true});}
      },id);
      jobs.get(job.id).fileName=name;scheduled=true;return {...job,fileName:name};
    } finally {if(!scheduled)await fs.rm(dir,{recursive:true,force:true});}
  }
  async public(req,res,url,reply) {
    const assets = { '/':['index.html','text/html; charset=utf-8'], '/scan':['index.html','text/html; charset=utf-8'], '/scan/app.js':['app.js','text/javascript; charset=utf-8'], '/scan/style.css':['style.css','text/css; charset=utf-8'] };
    if(req.method==='GET' && assets[url.pathname]) {
      const [file,type]=assets[url.pathname];
      res.writeHead(200,{'content-type':type,'cache-control':'no-store','referrer-policy':'no-referrer','x-content-type-options':'nosniff',
        'content-security-policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'"});
      res.end(await fs.readFile(fileURLToPath(new URL('../ui/'+file,import.meta.url)))); return true;
    }
    if(req.method==='POST' && url.pathname==='/api/ui/redeem') {
      let data; try { data=JSON.parse((await collect(req,4096)).toString()); } catch {throw new ApiError(400,'INVALID_JSON','票据请求格式错误');}
      this.prune();
      if(typeof data?.ticket!=='string' || !this.tickets.has(data.ticket)) throw new ApiError(401,'UI_TICKET_INVALID','本地页面链接已过期或已使用，请重新运行 npm run scan');
      this.tickets.delete(data.ticket); const token=crypto.randomBytes(32).toString('hex'); this.sessions.set(token,Date.now()+3600000);
      reply(res,200,{token}); return true;
    }
    return false;
  }
}
