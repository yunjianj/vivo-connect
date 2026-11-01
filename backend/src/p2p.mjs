import http from 'node:http';
import net from 'node:net';
import crypto from 'node:crypto';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { ApiError, requireThat, ROOT, tokenFor } from './core.mjs';
import { selectInterface } from './network.mjs';
import { renderQr } from './qr.mjs';
const exec=promisify(execFile);
export function directQr(network,token,state){
 const url=new URL('https://psuite.vivo.com.cn/vbusiness');
 url.search=new URLSearchParams({s:crypto.randomUUID(),f:'pc',t:token,u:'',d:state.name,id:state.deviceId,
  ls:'true',we:'true',wid:network.ssid,wpw:network.passphrase,wm:network.bssid,gw:network.ip,pb:'0'});
 // No lip: the official APK takes its immediate qrConnectP2P branch.
 return url.toString();
}
export function sameDirectSubnet(ip,gateway){return net.isIPv4(ip)&&ip!==gateway&&ip.split('.').slice(0,3).join('.')===gateway.split('.').slice(0,3).join('.');}
export class P2pManager{
 constructor(state,phones,jobs,{render=renderQr,selectNetwork=selectInterface,port=9199}={}){Object.assign(this,{state,phones,jobs,render,selectNetwork,port});}
 status(){const n=this.network;return {ready:!!n&&this.expires>Date.now(),experimental:true,...(n?{stationInterface:n.stationInterface,groupInterface:n.groupInterface,ip:n.ip,frequency:n.frequency}:{}),...(this.progress?{progress:this.progress}:{}),pairingActive:!!this.pending,...(this.pending?{pairingId:this.pending.jobId}:{}),requiresAdmin:true};}
 async capabilities(interfaceName){
  const name=interfaceName||this.selectNetwork().name;
  requireThat(/^[A-Za-z0-9_.:-]{1,15}$/.test(name),'interface 名称不合法');
  const {stdout}=await exec('python',[path.join(ROOT,'tools/wifi_capabilities.py'),name],{timeout:10000,maxBuffer:262144});
  return {...JSON.parse(stdout),requiresAdmin:true,experimental:true};
 }
 async register(n){
  requireThat(n&&typeof n.id==='string'&&/^[\w-]{1,64}$/.test(n.id),'helper id 格式错误');
  requireThat(typeof n.ssid==='string'&&n.ssid.startsWith('DIRECT-')&&Buffer.byteLength(n.ssid)<=32,'SSID 必须是 P2P DIRECT 网络');
  requireThat(typeof n.passphrase==='string'&&Buffer.byteLength(n.passphrase)>=8&&Buffer.byteLength(n.passphrase)<=63,'P2P 密码格式错误');
  requireThat(/^(?:[0-9a-f]{2}:){5}[0-9a-f]{2}$/i.test(n.bssid),'P2P BSSID 格式错误');
  requireThat(typeof n.groupInterface==='string'&&n.groupInterface!==n.stationInterface&&/^[\w.:-]{1,15}$/.test(n.groupInterface),'必须使用独立 P2P 接口');
  requireThat(net.isIPv4(n.ip)&&/^192\.168\.\d+\.1$/.test(n.ip)&&n.cidr===n.ip.replace(/\.1$/,'.0/24'),'必须使用独立 /24 私有子网');
  const iface=this.selectNetwork(n.ip);requireThat(iface.name===n.groupInterface,'网关地址不属于 P2P 接口');
  if(this.network)throw new ApiError(409,'P2P_ALREADY_ACTIVE','已有直连助手，请先停止旧助手');
  const server=http.createServer((req,res)=>this.callback(req,res));
  await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(this.port,n.ip,resolve);});
  this.server=server;this.network={...n};this.expires=Date.now()+15000;
  this.watch=setInterval(()=>{if(this.expires<Date.now())this.close().catch(()=>{});},3000);this.watch.unref();
  return this.status();
 }
 heartbeat(id,progress){
  if(!this.network||this.network.id!==id)throw new ApiError(404,'P2P_HELPER_GONE','P2P 助手未注册或后端已重启');
  this.expires=Date.now()+15000;
  if(progress&&typeof progress==='object'){
   const safe={};for(const key of ['associatedStations','authorizedStations','dhcpDiscoveries','dhcpOffers','dhcpAcks','provisionRequests','pairingAuthorizations','wpsFailures','wpsSuccesses','pskFailures']){
    if(Number.isSafeInteger(progress[key])&&progress[key]>=0&&progress[key]<=1000000)safe[key]=progress[key];
   }
   this.progress=safe;
   if(this.pending){const job=this.jobs.get(this.pending.jobId);job.networkProgress={...safe};
    job.phase=safe.authorizedStations>0?(safe.dhcpAcks>0?'waiting-for-phone-callback':'waiting-for-dhcp'):
      safe.associatedStations>0?'authenticating-wifi':safe.provisionRequests>0?(safe.pairingAuthorizations>0?'pairing-wifi':'waiting-for-wps'):'waiting-for-p2p';}
  }
  return this.status();
 }
 callback(req,res){
  const answer=(status,value)=>{res.writeHead(status,{'content-type':'application/json','cache-control':'no-store'});res.end(JSON.stringify(value));};
  let url;try{url=new URL(req.url,'http://localhost');}catch{return answer(400,{code:'000001'});}
  const peer=req.socket.remoteAddress?.replace(/^::ffff:/,'');
  if(req.method!=='GET'||url.pathname!=='/notifyConnection')return answer(404,{code:'000001'});
  if(!this.network||!this.pending||!sameDirectSubnet(peer,this.network.ip))return answer(403,{code:'000001'});
  // Phone-provided phoneIp is not trusted: only the sender on this group is used.
  const pending=this.pending;this.pending=null;answer(200,{code:'000000',data:'ok'});pending.resolve(peer);
 }
 async scan(){
  if(this.creatingScan)throw new ApiError(409,'P2P_SCAN_ACTIVE','二维码正在生成');
  this.creatingScan=true;
  try{return await this.createScan();}finally{this.creatingScan=false;}
 }
 async createScan(){
  if(!this.status().ready)throw new ApiError(409,'P2P_NOT_READY','请先在终端运行 sudo python tools/p2p_helper.py --interface <校园网网卡>');
  if(this.pending)throw new ApiError(409,'P2P_SCAN_ACTIVE','已有等待中的 P2P 二维码，请先停止旧任务');
  const network={...this.network};const token=tokenFor(network.ip);const qrText=directQr(network,token,this.state);const qrImage=await this.render(qrText);
  if(!this.status().ready||this.network.id!==network.id)throw new ApiError(409,'P2P_NOT_READY','二维码生成期间直连助手已停止');
  const expiresInMs=180000;
  const job=this.jobs.create('p2p-connect',async(job,signal)=>{
   job.phase='waiting-for-p2p';
   const ip=await new Promise((resolve,reject)=>{
    const timeout=setTimeout(()=>finish(new ApiError(410,'SCAN_EXPIRED','等待手机加入直连组超时，请刷新二维码',{networkProgress:this.progress})),expiresInMs);
    const aborted=()=>finish(signal.reason||new Error('Cancelled'));
    const finish=(error,ip)=>{clearTimeout(timeout);signal.removeEventListener('abort',aborted);this.pending=null;error?reject(error):resolve(ip);};
    this.pending={jobId:job.id,resolve:ip=>finish(null,ip),reject:finish};signal.addEventListener('abort',aborted,{once:true});if(signal.aborted)aborted();
   });
   job.phase='connecting';job.phoneIps=[ip];
   const result=await this.phones.connect({mode:'existing',ip,pcIp:network.ip,token,connectionId:crypto.randomUUID(),transport:'wifi-direct'},signal);
   return {...result,transport:'wifi-direct'};
  });
  return {jobId:job.id,qrImage,qrText,pcIp:network.ip,expiresInMs,transport:'wifi-direct',experimental:true};
 }
 async unregister(id){requireThat(this.network?.id===id,'P2P 助手 id 不匹配');await this.close();return {ready:false};}
 async close(){
  clearInterval(this.watch);this.pending?.reject(new Error('P2P 助手已停止'));this.pending=null;
  const server=this.server;this.server=null;this.network=null;this.progress=null;
  if(server){server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
 }
}
