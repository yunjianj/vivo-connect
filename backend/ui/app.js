const $=id=>document.getElementById(id);
let token, jobId, generation=0, expiry=0, running=false;
const phaseNames={'waiting-for-p2p':'等待手机加入 Wi-Fi Direct','authenticating-wifi':'手机已接入，正在验证无线连接','waiting-for-wps':'手机已请求无线配对，等待授权','pairing-wifi':'已允许手机配对，等待建立无线连接','waiting-for-dhcp':'手机已通过无线验证，等待分配地址','waiting-for-phone-callback':'已分配手机地址，等待手机确认连接','waiting-for-phone':'等待手机扫码','connecting':'手机已扫码，正在连接','succeeded':'手机连接成功','cancelled':'已停止','failed':'连接未完成'};
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function api(route,body,method=body===undefined?'GET':'POST'){
 const response=await fetch(route,{method,headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},...(body===undefined?{}:{body:JSON.stringify(body)})});
 const value=await response.json();if(!response.ok){const error=new Error(value.error?.message||`HTTP ${response.status}`);error.code=value.error?.code;throw error;}return value;
}
function imageOff(){ $('image').replaceChildren(Object.assign(document.createElement('span'),{textContent:'等待生成二维码'})); }
async function stop(){running=false;generation++;expiry=0;imageOff();if(jobId){const previous=jobId;jobId=null;await api(`/api/jobs/${previous}/cancel`,{}).catch(()=>{});}}
async function start(){
 await stop();const current=generation;running=true;$('refresh').disabled=true;$('status').textContent='正在申请官方二维码';$('diagnostic').textContent='';
 try{
  const direct=$('transport').value==='p2p';
  const data=await api(direct?'/api/sessions/p2p':'/api/sessions/scan',direct?{}:($('network').value?{pcIp:$('network').value}:{}));
  if(current!==generation){await api(`/api/jobs/${data.jobId}/cancel`,{});return;}
  jobId=data.jobId;expiry=Date.now()+data.expiresInMs;
  const img=document.createElement('img');img.alt='请使用手机官方互传扫描的连接二维码';img.src=data.qrImage;$('image').replaceChildren(img);$('refresh').disabled=false;
  $('status').textContent=direct?'等待手机加入 Wi-Fi Direct':'等待手机扫码';$('message').textContent=direct?`直连网关 ${data.pcIp}。请用手机官方互传扫描；此模式不使用校园网手机 IP。`:`本机地址 ${data.pcIp}。请扫描图片，不要在手机浏览器打开二维码内的链接。`;
  while(running&&current===generation){
   await sleep(1000);if(current!==generation)break;
   const job=await api(`/api/jobs/${jobId}`);if(current!==generation)break;$('status').textContent=phaseNames[job.status]||phaseNames[job.phase]||'等待处理';
   if(direct&&job.networkProgress){const p=job.networkProgress;$('diagnostic').textContent=`无线接入 ${p.associatedStations||0} · 验证通过 ${p.authorizedStations||0} · 地址请求 ${p.dhcpDiscoveries||0} · 地址分配 ${p.dhcpAcks||0} · 配对请求 ${p.provisionRequests||0} · 验证失败 ${p.pskFailures||0}`;}
   if(job.phoneIps?.length){expiry=0;$('message').textContent='手机已返回 IP，正在测试服务连接。';$('diagnostic').textContent=JSON.stringify({phoneIps:job.phoneIps,attempts:job.attempts||[]},null,2);}
   if(job.status==='succeeded'){running=false;expiry=0;imageOff();$('status').textContent='手机连接成功';$('message').textContent=`sessionId: ${job.result.id}`;break;}
   if(job.status==='failed'){
    if(job.error?.code==='SCAN_EXPIRED'){imageOff();$('status').textContent='二维码已过期，正在自动刷新';await sleep(1000);if(current===generation)await start();return;}
    running=false;expiry=0;imageOff();$('message').textContent=job.error?.message||'连接失败';$('diagnostic').textContent=JSON.stringify({code:job.error?.code,details:job.error?.details},null,2);break;
   }
   if(job.status==='cancelled'){running=false;expiry=0;imageOff();break;}
  }
 }catch(error){if(current===generation){running=false;expiry=0;imageOff();$('status').textContent='暂时无法连接';$('message').textContent=error.message;}}
 finally{if(current===generation)$('refresh').disabled=false;}
}
$('refresh').addEventListener('click',start);$('stop').addEventListener('click',async()=>{await stop();$('status').textContent='已停止';$('refresh').disabled=false;});
setInterval(()=>{$('expiry').textContent=expiry?`二维码剩余 ${Math.max(0,Math.ceil((expiry-Date.now())/1000))} 秒`:'';},1000);
(async()=>{
 try{
  const ticket=new URLSearchParams(location.hash.slice(1)).get('ticket');history.replaceState(null,'',location.pathname);
  if(!ticket)return;
  const response=await fetch('/api/ui/redeem',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ticket})});const result=await response.json();
  if(!response.ok)throw new Error(result.error?.message||'页面授权失败');token=result.token;
  $('locked').hidden=true;$('controls').hidden=false;
  const interfaces=await api('/api/network/interfaces');
  for(const iface of interfaces){const option=document.createElement('option');option.value=iface.address;option.textContent=`${iface.name} · ${iface.address}${iface.recommended?'':'（虚拟 / 隧道）'}`;$('network').append(option);}
  const p2p=await api('/api/p2p/status');if(p2p.ready)$('transport').value='p2p';
  const account=await api('/api/account');$('account').textContent=account.loggedIn?'vivo 账号已登录':'未登录账号，连接仍需手机授权';
  await start();
 }catch(error){$('status').textContent='无法打开扫码页面';$('message').textContent=error.message;}
})();
