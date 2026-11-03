import test from 'node:test';
import assert from 'node:assert/strict';
import { P2pManager,directQr,sameDirectSubnet } from '../src/p2p.mjs';
import { Jobs } from '../src/jobs.mjs';
const network={id:'helper-id',stationInterface:'wlan-test',groupInterface:'p2p-test',ip:'127.0.0.1',cidr:'192.168.49.0/24',ssid:'DIRECT-xy vivo',passphrase:'pass&word!long',bssid:'02:11:22:33:44:55',frequency:5785};

test('official local QR selects immediate P2P branch and escapes group credentials',()=>{
 const q=new URL(directQr(network,'token',{deviceId:'pc',name:'PC'}));
 for(const [key,value] of Object.entries({ls:'true',we:'true',wid:network.ssid,wpw:network.passphrase,wm:network.bssid,gw:network.ip}))assert.equal(q.searchParams.get(key),value);
 assert(!q.searchParams.has('lip'));assert(!q.searchParams.has('bad'));
 assert(sameDirectSubnet('192.168.49.20','192.168.49.1'));assert(!sameDirectSubnet('10.202.110.20','192.168.49.1'));
});

test('direct callback uses group sender, not campus query IP, and preserves token handoff',async()=>{
 const jobs=new Jobs();let connected;
 const p2p=new P2pManager({deviceId:'pc',name:'PC'},{connect:async options=>{connected=options;return {id:'session'};}},jobs,{render:async()=> 'image'});
 p2p.network={...network,ip:'192.168.49.1'};p2p.expires=Date.now()+10000;
 const qr=await p2p.scan();const job=jobs.get(qr.jobId);await new Promise(resolve=>setImmediate(resolve));
 let status;const response={writeHead:s=>{status=s;},end:()=>{}};
 p2p.callback({method:'GET',url:'/notifyConnection?phoneIp=10.202.110.20',socket:{remoteAddress:'10.202.110.20'}},response);assert.equal(status,403);assert(p2p.pending);
 p2p.callback({method:'GET',url:'/notifyConnection?phoneIp=10.202.110.20',socket:{remoteAddress:'192.168.49.20'}},response);assert.equal(status,200);
 await job.done;assert.equal(job.status,'succeeded');assert.equal(connected.ip,'192.168.49.20');assert.equal(connected.pcIp,'192.168.49.1');
 assert.equal(connected.token,new URL(qr.qrText).searchParams.get('t'));assert.equal(job.result.transport,'wifi-direct');
 await p2p.close();
});

test('direct mode requires live helper and cancellation removes callback waiter',async()=>{
 const jobs=new Jobs();const p2p=new P2pManager({deviceId:'pc',name:'PC'},{},jobs,{render:async()=> 'image'});
 await assert.rejects(p2p.scan(),{code:'P2P_NOT_READY'});p2p.network=network;p2p.expires=Date.now()+10000;
 const qr=await p2p.scan();await new Promise(resolve=>setImmediate(resolve));jobs.cancel(qr.jobId);await jobs.get(qr.jobId).done;
 assert.equal(jobs.get(qr.jobId).status,'cancelled');assert.equal(p2p.pending,null);await p2p.close();
});

test('helper registration rejects replacing the station interface',async()=>{
 const p2p=new P2pManager({}, {}, new Jobs());
 await assert.rejects(p2p.register({...network,groupInterface:network.stationInterface}),{code:'INVALID_ARGUMENT'});
});

test('helper progress distinguishes wireless authentication, DHCP and callback without exposing arbitrary data',async()=>{
 const jobs=new Jobs();const p2p=new P2pManager({deviceId:'pc',name:'PC'},{},jobs,{render:async()=> 'image'});
 p2p.network=network;p2p.expires=Date.now()+10000;
 const qr=await p2p.scan();await new Promise(resolve=>setImmediate(resolve));const job=jobs.get(qr.jobId);
 assert.equal(p2p.status().pairingActive,true);assert.equal(p2p.status().pairingId,qr.jobId);
 p2p.heartbeat(network.id,{associatedStations:1,authorizedStations:0,dhcpAcks:0,passphrase:'secret',mac:'private',dhcpOffers:-1});
 assert.equal(job.phase,'authenticating-wifi');assert.equal(job.networkProgress.associatedStations,1);
 assert(!JSON.stringify(p2p.status()).includes('secret'));assert(!('mac' in job.networkProgress));assert(!('dhcpOffers' in job.networkProgress));
 p2p.heartbeat(network.id,{associatedStations:1,authorizedStations:1,dhcpAcks:0});assert.equal(job.phase,'waiting-for-dhcp');
 p2p.heartbeat(network.id,{associatedStations:1,authorizedStations:1,dhcpAcks:1});assert.equal(job.phase,'waiting-for-phone-callback');
 p2p.heartbeat(network.id,{associatedStations:0,authorizedStations:0,provisionRequests:1});assert.equal(job.phase,'waiting-for-wps');
 p2p.heartbeat(network.id,{associatedStations:0,authorizedStations:0,provisionRequests:1,pairingAuthorizations:1});assert.equal(job.phase,'pairing-wifi');
 jobs.cancel(qr.jobId);await job.done;await p2p.close();assert.equal(p2p.progress,null);
 assert.equal(p2p.status().pairingActive,false);
});

test('reconnect distinguishes a ready group from a phone actually joined to it', () => {
 const p2p=new P2pManager({}, {}, new Jobs());
 const session={transport:'wifi-direct',ip:'192.168.49.79'};
 assert.equal(p2p.reconnectState(session).code,'P2P_NOT_READY');
 assert.equal(p2p.reconnectState({transport:'usb'}),null);
 p2p.network={ip:'192.168.49.1'};p2p.expires=Date.now()+15000;
 p2p.progress={associatedStations:0,authorizedStations:0};
 assert.equal(p2p.reconnectState(session).code,'P2P_PHONE_NOT_JOINED');
 p2p.progress.associatedStations=1;
 assert.equal(p2p.reconnectState(session).code,'P2P_AUTHENTICATING');
 p2p.progress.authorizedStations=1;assert.equal(p2p.reconnectState(session),null);
 p2p.network.ip='192.168.50.1';assert.equal(p2p.reconnectState(session).code,'P2P_ADDRESS_CHANGED');
});

test('persistent invitation requests require a remembered device with auto reconnect enabled', () => {
 const session={remembered:true,transport:'wifi-direct',status:'disconnected',autoConnect:true};
 const p2p=new P2pManager({}, {sessions:new Map([['phone',session]])}, new Jobs());
 p2p.network={id:'helper'};
 assert.equal(p2p.heartbeat('helper',{}).reconnectRequested,true);
 session.autoConnect=false;assert.equal(p2p.heartbeat('helper',{}).reconnectRequested,false);
 session.autoConnect=true;session.needsAuthorization=true;assert.equal(p2p.heartbeat('helper',{}).reconnectRequested,false);
 session.needsAuthorization=false;session.status='connected';assert.equal(p2p.heartbeat('helper',{}).reconnectRequested,false);
});

test('failed invitations and missing wireless pairing are not mislabeled as first use', () => {
 const p2p=new P2pManager({}, {}, new Jobs());
 p2p.network={ip:'192.168.49.1',persistentGroup:true};p2p.expires=Date.now()+15000;
 const session={transport:'wifi-direct',ip:'192.168.49.79'};
 p2p.progress={associatedStations:0,authorizedStations:0,persistentPeers:0};
 assert.equal(p2p.reconnectState(session).code,'P2P_PAIRING_UNAVAILABLE');
 p2p.progress.invitationStatus=8;
 assert.equal(p2p.reconnectState(session).code,'P2P_INVITATION_FAILED');
});

test('an active GO without a persistent network is not a restorable pairing', () => {
 const p2p=new P2pManager({}, {}, new Jobs());
 p2p.network={ip:'192.168.49.1',persistentGroup:true};p2p.expires=Date.now()+15000;
 p2p.progress={authorizedStations:0,associatedStations:0,persistentNetworks:0,persistentPeers:0};
 assert.equal(p2p.reconnectState({transport:'wifi-direct',ip:'192.168.49.79'}).code,'P2P_PROFILE_UNAVAILABLE');
});

test('verified official reconnect opens and closes the helper pairing window without a QR task', async () => {
 const phones={accounts:{account:{openId:'account'}},connect:async(options,signal,previous)=>{
  assert.equal(p2p.status().pairingActive,true);assert.equal(previous,session);return {status:'connected'};
 }};
 const p2p=new P2pManager({},phones,new Jobs());
 p2p.network={...network,ip:'192.168.49.1'};p2p.expires=Date.now()+15000;
 const session={transport:'wifi-direct',ip:'192.168.49.20'};
 p2p.progress={authorizedStations:0,persistentPeers:0,persistentNetworks:0};
 p2p.preconnect={connect:async(s,n,signal,complete,authorize)=>{
  assert.equal(p2p.status().pairingActive,false);const release=authorize();
  try{const status=p2p.heartbeat(network.id,{});assert.equal(status.pairingActive,true);assert.equal(typeof status.pairingId,'string');
   return await complete({token:'new-token'});
  }finally{release();}
 }};
 assert.equal(p2p.reconnectState(session),null);
 assert.deepEqual(await p2p.reconnect(session),{status:'connected'});
 assert.equal(p2p.status().pairingActive,false);assert.equal(p2p.status().pairingId,undefined);
 assert.equal(p2p.pending,undefined);
 p2p.autoPairing={id:'expired',networkId:network.id,expires:Date.now()-1};assert.equal(p2p.status().pairingActive,false);
});
