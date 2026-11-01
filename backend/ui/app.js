const $=id=>document.getElementById(id);
const phases={'waiting-for-p2p':'等待手机加入 Wi-Fi Direct','waiting-for-phone':'等待手机扫码','waiting-for-wps':'手机已请求配对，正在授权','pairing-wifi':'已允许手机配对，等待无线连接','authenticating-wifi':'正在验证无线连接','waiting-for-dhcp':'正在为手机分配地址','waiting-for-phone-callback':'等待手机确认连接','connecting':'手机已扫码，正在连接'};
const state={token:null,sessions:[],jobs:[],selected:null,account:{},p2p:{},tab:'overview'};
let jobId,generation=0,expiry=0,running=false,polling=false,toastTimer;
const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
const icon=name=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');const use=document.createElementNS(svg.namespaceURI,'use');use.setAttribute('href','#i-'+name);svg.append(use);return svg;};
const el=(tag,text,className)=>Object.assign(document.createElement(tag),{...(text!==undefined?{textContent:text}:{}),...(className?{className}:{})});
const active=()=>state.sessions.find(s=>s.id===state.selected);
const connected=()=>active()?.status==='connected';
const deviceName=s=>s?.phone?.mobileDeviceName||s?.phone?.deviceName||s?.phone?.name||'vivo 手机';
const size=n=>{if(!Number.isFinite(n))return '—';if(n<1024)return n+' B';const units=['KiB','MiB','GiB'];let i=-1;do{n/=1024;i++;}while(n>=1024&&i<2);return n.toFixed(n>=10?0:1)+' '+units[i];};
function toast(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,5500);}
async function api(route,body,method=body===undefined?'GET':'POST'){
 const response=await fetch(route,{method,headers:{Authorization:`Bearer ${state.token}`,'Content-Type':'application/json'},...(body===undefined?{}:{body:JSON.stringify(body)})});
 const value=await response.json();if(!response.ok){const error=new Error(value.error?.message||`请求失败 (${response.status})`);error.code=value.error?.code;throw error;}return value;
}
function tab(name){state.tab=name;for(const key of ['overview','files','history'])$(key+'-view').hidden=key!==name;document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));}
function render(){
 const s=active(),online=connected();$('device-count').textContent=state.sessions.length;
 $('devices').replaceChildren();
 for(const session of state.sessions){const button=el('button',undefined,'device-button'+(s?.id===session.id?' selected':''));const label=el('div');label.append(el('strong',deviceName(session)),el('small',session.status==='connected'?'已连接':'未连接'));button.append(icon('phone'),label);if(session.status==='connected')button.append(el('span','','online-dot'));button.onclick=()=>{state.selected=session.id;render();tab('overview');};$('devices').append(button);}
 if(!state.sessions.length)$('devices').append(el('p','还没有连接的设备','sidebar-empty'));
 $('device-name').textContent=s?deviceName(s):'连接你的手机';$('breadcrumb-name').textContent=s?deviceName(s):'我的设备';
 $('device-subtitle').textContent=online?'手机与电脑已连接，开始传递你需要的文件。':'用手机官方互传扫码，让设备相连。';
 $('connection-badge').textContent=online?'已连接 · '+(s.transport==='wifi-direct'?'Wi-Fi Direct':s.mode==='usb'?'USB':'局域网'):'尚未连接';$('connection-badge').classList.toggle('neutral',!online);
 $('disconnect').hidden=!s;$('info-status').textContent=online?'已连接':'尚未连接';$('info-transport').textContent=s?(s.transport==='wifi-direct'?'Wi-Fi Direct':s.mode==='usb'?'USB 数据线':'局域网'):'—';$('info-ip').textContent=s?.ip||'—';$('info-pc-ip').textContent=s?.pcIp||'—';
 $('connection-note').textContent=online?(s.transport==='wifi-direct'?'手机通过独立直连网络连接，电脑继续使用原来的网络。':'设备已连接，可以安全发送和接收文件。'):'连接手机后，即可发送和接收文件。';
 $('choose-file').disabled=!online;$('file-input').disabled=!online;$('receive-path').disabled=!online;
 $('pair-shortcut').textContent=online?'连接另一台设备':'扫码连接手机';
 $('account').textContent=state.account.loggedIn?(state.account.nickName||'vivo 账号已登录'):state.account.login?.status==='waiting'?'等待浏览器登录…':'登录 vivo 账号';
 const jobs=state.jobs.filter(j=>['upload','download'].includes(j.kind)).sort((a,b)=>b.createdAt.localeCompare(a.createdAt));$('transfer-count').textContent=jobs.length;
 renderJobs($('recent-list'),jobs.slice(0,3));renderJobs($('history-list'),jobs);
}
function renderJobs(container,jobs){container.replaceChildren();if(!jobs.length){const empty=el('div',undefined,'empty-state');empty.append(icon('history'),el('span','还没有传输记录，发送第一个文件吧'));container.append(empty);return;}
 for(const j of jobs){const row=el('div',undefined,'transfer-row');const tile=el('div',undefined,'file-icon');tile.append(icon(j.kind==='upload'?'send':'down'));const body=el('div',undefined,'transfer-body');const name=j.fileName||j.result?.files?.[0]?.fileName||j.result?.files?.[0]?.path?.split('/').pop()||(j.kind==='upload'?'发送到手机':'接收到电脑');body.append(el('strong',name),el('small',`${j.kind==='upload'?'发送到手机':'从手机接收'} · ${size(j.totalSize??j.result?.totalSize)} · ${new Date(j.createdAt).toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'})}`));
 const label={queued:'等待传输',running:j.phase==='preflight'?'准备中':'正在传输',succeeded:'已完成',failed:'传输失败',cancelled:'已取消'}[j.status]||j.status;row.append(tile,body,el('span',label,'job-state '+j.status));
 if(j.status==='running'){const progress=el('progress');if(j.totalSize>0){progress.max=j.totalSize;progress.value=Math.min(j.bytes,j.totalSize);}body.append(progress);}
 if(j.error)body.append(el('small',j.error.message));
 if(['running','queued'].includes(j.status)){const cancel=el('button','取消','text-button');cancel.onclick=()=>api(`/api/jobs/${j.id}/cancel`,{}).then(refresh).catch(e=>toast(e.message));row.append(cancel);}
 if(j.kind==='download'&&j.status==='succeeded')for(const file of j.result.files||[]){const button=el('button','保存到电脑','text-button');button.title=file.path;button.onclick=()=>saveDownload(j.id,file.path).catch(e=>toast(e.message));row.append(button);}
 container.append(row);
 }
}
async function refresh(){if(!state.token||polling)return;polling=true;try{
 const [sessions,jobs,account,p2p]=await Promise.all([api('/api/sessions'),api('/api/jobs'),api('/api/account'),api('/api/p2p/status')]);
 Object.assign(state,{sessions,jobs,account,p2p});if(!sessions.some(s=>s.id===state.selected))state.selected=sessions.find(s=>s.status==='connected')?.id||sessions[0]?.id||null;render();
 }finally{polling=false;}}
function imageOff(){$('image').replaceChildren(el('span','等待生成二维码'));}
async function stopPair(){running=false;generation++;expiry=0;imageOff();if(jobId){const previous=jobId;jobId=null;await api(`/api/jobs/${previous}/cancel`,{}).catch(()=>{});}}
async function startPair(){
 await stopPair();const current=generation;running=true;$('refresh').disabled=true;$('status').textContent='正在生成连接二维码';$('diagnostic').textContent='';
 try{const direct=$('transport').value==='p2p';$('pair-help').hidden=!direct||state.p2p.ready;
 const data=await api(direct?'/api/sessions/p2p':'/api/sessions/scan',direct?{}:($('network').value?{pcIp:$('network').value}:{}));
 if(current!==generation){await api(`/api/jobs/${data.jobId}/cancel`,{});return;}
 jobId=data.jobId;expiry=Date.now()+data.expiresInMs;const img=el('img');img.alt='请使用手机官方互传扫描连接二维码';img.src=data.qrImage;$('image').replaceChildren(img);$('refresh').disabled=false;
 $('status').textContent=direct?'等待手机加入 Wi-Fi Direct':'等待手机扫码';$('message').textContent=direct?'使用手机官方互传扫描，电脑会继续保持原有网络连接。':'使用手机官方互传扫描此二维码，并在手机上确认连接。';
 while(running&&current===generation){await sleep(1000);if(current!==generation)break;const job=await api(`/api/jobs/${jobId}`);if(current!==generation)break;
 $('status').textContent=phases[job.phase]||'等待连接';if(job.networkProgress){const p=job.networkProgress;$('diagnostic').textContent=`无线接入 ${p.associatedStations||0} · 验证通过 ${p.authorizedStations||0} · 地址分配 ${p.dhcpAcks||0} · 配对请求 ${p.provisionRequests||0}`;}
 if(job.status==='succeeded'){running=false;expiry=0;imageOff();$('status').textContent='手机连接成功';state.selected=job.result.id;await refresh();await sleep(500);if($('pair-dialog').open)$('pair-dialog').close();toast('手机已连接');break;}
 if(job.status==='failed'){if(job.error?.code==='SCAN_EXPIRED'){imageOff();$('status').textContent='二维码已过期，正在刷新';await sleep(800);if(current===generation)await startPair();return;}running=false;expiry=0;imageOff();$('status').textContent='连接未完成';$('message').textContent=job.error?.message||'请重试';break;}
 if(job.status==='cancelled'){running=false;expiry=0;imageOff();$('status').textContent='已停止';break;}
 }
 }catch(e){if(current===generation){running=false;expiry=0;imageOff();$('status').textContent='暂时无法连接';$('message').textContent=e.message;}}
 finally{if(current===generation)$('refresh').disabled=false;}
}
async function openPair(){if(!state.token)return toast('请先从终端打开已授权的界面');await refresh();if(state.p2p.ready)$('transport').value='p2p';if(!$('pair-dialog').open)$('pair-dialog').showModal();await startPair();}
async function sendFiles(files){if(!connected())return toast('请先连接手机');const session=state.selected;
 for(const file of files){if(file.size>512*1024**2){toast(`${file.name} 超过单文件 512 MiB 上限`);continue;}toast('正在准备 '+file.name);
 try{const query=new URLSearchParams({sessionId:session,name:file.name,savePath:$('save-path').value.trim()||'/sdcard/Download'});
 const r=await fetch('/api/ui/files?'+query,{method:'POST',headers:{Authorization:`Bearer ${state.token}`,'Content-Type':'application/octet-stream','X-File-Size':String(file.size)},body:file});const result=await r.json();if(!r.ok)throw Error(result.error?.message||'无法发送文件');toast(file.name+' 已加入发送队列');await refresh();}catch(e){toast(e.message);}}
 $('file-input').value='';}
async function receive(path){if(!connected())return toast('请先连接手机');if(!path.startsWith('/'))return toast('请输入手机上的完整文件位置');await api(`/api/sessions/${state.selected}/downloads`,{paths:[path]});toast('正在从手机接收文件');tab('history');await refresh();}
async function saveDownload(id,path){const r=await fetch(`/api/jobs/${id}/file?path=${encodeURIComponent(path)}`,{headers:{Authorization:`Bearer ${state.token}`}});if(!r.ok)throw Error('无法保存文件，请重新连接本地界面');const url=URL.createObjectURL(await r.blob());const a=el('a');a.href=url;a.download=path.split('/').pop();a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);}
async function browse(){if(!connected())return toast('请先连接手机');$('files-message').textContent='正在读取手机文件…';
 try{const response=await api(`/api/sessions/${state.selected}/files`,{type:'REQUEST_POSTS_FILELIST',data:$('phone-path').value.trim()||'/',versionTag:1});let payload=response.data??response;if(typeof payload==='string')payload=JSON.parse(payload);const entries=Array.isArray(payload)?payload:payload.dataList||payload.fileList||payload.list||payload.items||[];
 $('file-list').replaceChildren();$('files-message').textContent=entries.length?`${entries.length} 个项目`:'这个目录还没有文件，或手机尚未授权访问。';
 for(const item of entries){const path=item.savePath||item.path;const name=item.fileName||item.name||path?.split('/').pop();if(!name||!path)continue;const directory=item.isDirectory===true||item.isDirectory==='true';const row=el('div',undefined,'file-row');const label=el('div',undefined,'file-label');label.append(el('strong',name),el('small',directory?'文件夹':size(Number(item.fileSize??item.size))));const action=el('button',directory?'打开':'接收','text-button');action.onclick=()=>{if(directory){$('phone-path').value=path;browse();}else receive(path).catch(e=>toast(e.message));};row.append(icon(directory?'folder':'file'),label,action);$('file-list').append(row);}
 }catch(e){$('files-message').textContent=e.message;}}
$('add-device').onclick=() =>openPair().catch(e=>toast(e.message));$('pair-shortcut').onclick=$('add-device').onclick;
$('close-pair').onclick=()=>{$('pair-dialog').close();stopPair();};$('pair-dialog').addEventListener('cancel',()=>stopPair());
$('refresh').onclick=()=>startPair();$('stop').onclick=async()=>{await stopPair();$('status').textContent='已停止';$('refresh').disabled=false;};
$('transport').onchange=()=>startPair();$('reload').onclick=()=>refresh().then(()=>toast('设备状态已更新')).catch(e=>toast(e.message));
for(const b of document.querySelectorAll('[data-tab]'))b.onclick=()=>{tab(b.dataset.tab);if(b.dataset.tab==='files')browse();};
$('history-nav').onclick=$('all-transfers').onclick=()=>tab('history');$('receive-shortcut').onclick=()=>{tab('files');browse();};
$('disconnect').onclick=async()=>{if(!active()||!confirm('断开与这台手机的连接？进行中的传输会停止。'))return;try{await api('/api/sessions/'+state.selected,undefined,'DELETE');await refresh();toast('已断开连接');}catch(e){toast(e.message);}};
$('choose-file').onclick=e=>{e.stopPropagation();$('file-input').click();};$('file-input').onchange=()=>sendFiles([...$('file-input').files]);
$('dropzone').onclick=e=>{if(!e.target.closest('button'))connected()?$('file-input').click():toast('请先连接手机');};$('dropzone').onkeydown=e=>{if(e.target===$('dropzone')&&['Enter',' '].includes(e.key)){e.preventDefault();$('dropzone').click();}};
for(const event of ['dragenter','dragover'])$('dropzone').addEventListener(event,e=>{e.preventDefault();$('dropzone').classList.add('dragover');});
for(const event of ['dragleave','drop'])$('dropzone').addEventListener(event,e=>{e.preventDefault();$('dropzone').classList.remove('dragover');if(event==='drop')sendFiles([...e.dataTransfer.files]);});
$('browse-form').onsubmit=e=>{e.preventDefault();browse();};$('receive-path').onclick=()=>receive($('phone-path').value.trim()).catch(e=>toast(e.message));
$('login').onclick=async()=>{if(state.account.loggedIn)return toast('vivo 账号已登录');try{await api('/api/account/login',{});toast('请在打开的官方账号页面完成登录');await refresh();}catch(e){toast(e.message);}};
setInterval(()=>{$('expiry').textContent=expiry?`二维码剩余 ${Math.max(0,Math.ceil((expiry-Date.now())/1000))} 秒`:'';},1000);
setInterval(()=>{if(state.token)refresh().catch(e=>{if(e.code==='UNAUTHORIZED'){state.token=null;sessionStorage.removeItem('vivo-ui-token');$('locked').hidden=false;$('dashboard').hidden=true;toast('页面授权已过期，请重新运行 npm run scan');}});},2500);
(async()=>{try{const ticket=new URLSearchParams(location.hash.slice(1)).get('ticket');history.replaceState(null,'',location.pathname);
 if(ticket){const r=await fetch('/api/ui/redeem',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ticket})});const result=await r.json();if(!r.ok)throw Error(result.error?.message||'页面授权失败');state.token=result.token;sessionStorage.setItem('vivo-ui-token',state.token);}else state.token=sessionStorage.getItem('vivo-ui-token');
 if(!state.token)return;await refresh();$('locked').hidden=true;$('dashboard').hidden=false;$('controls').hidden=false;
 for(const iface of await api('/api/network/interfaces')){const option=el('option',iface.name+' · '+iface.address);option.value=iface.address;$('network').append(option);}
 if(!state.sessions.some(s=>s.status==='connected'))await openPair();
 }catch(e){state.token=null;sessionStorage.removeItem('vivo-ui-token');toast(e.message);$('locked').hidden=false;}})();
