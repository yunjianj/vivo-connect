import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { ApiError } from './core.mjs';
import { collect } from './http.mjs';

export class LocalUi {
  tickets = new Map(); sessions = new Map();
  prune() { for(const map of [this.tickets,this.sessions]) for(const [key,expires] of map) if(expires < Date.now()) map.delete(key); }
  ticket() { this.prune(); const ticket = crypto.randomBytes(32).toString('hex'); this.tickets.set(ticket,Date.now()+60000); return { ticket, expiresInMs:60000 }; }
  authorized(header, route) {
    this.prune(); const token = header?.replace(/^Bearer /,'');
    if (!this.sessions.has(token)) return false;
    return /^(GET \/api\/(account|network\/interfaces|p2p\/status|jobs\/[\w-]+)|POST \/api\/(sessions\/(?:scan|p2p)|jobs\/[\w-]+\/cancel))$/.test(route);
  }
  async public(req,res,url,reply) {
    const assets = { '/scan':['index.html','text/html; charset=utf-8'], '/scan/app.js':['app.js','text/javascript; charset=utf-8'], '/scan/style.css':['style.css','text/css; charset=utf-8'] };
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
