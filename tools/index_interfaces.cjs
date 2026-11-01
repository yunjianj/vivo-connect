// Static syntax analysis only: never loads or executes the application bundles.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const acorn=require(path.join(root,'analysis/app/node_modules/terser/node_modules/acorn/dist/acorn.js'));
function walk(n,cb){if(!n||typeof n!=='object')return; if(n.type)cb(n);for(const [k,v] of Object.entries(n)){if(k==='loc')continue;if(Array.isArray(v))v.forEach(x=>walk(x,cb));else if(v&&typeof v==='object')walk(v,cb)}}
const all=[];const ipc=[];const http=[];const enums=[];const literals=[];const protos=[];
for(const filename of fs.readdirSync(path.join(root,'analysis/pretty')).filter(x=>x.endsWith('.js')).sort()){
 const name=filename.slice(0,-3);
 const file=`analysis/pretty/${name}.js`,s=fs.readFileSync(path.join(root,file),'utf8'),ast=acorn.parse(s,{ecmaVersion:'latest',locations:true,sourceType:'script'});
 let mods=[]; walk(ast,n=>{if(n.type==='ArrayExpression'&&n.elements.length>mods.length&&n.elements.filter(x=>x&&x.type==='FunctionExpression').length>n.elements.filter(Boolean).length*.8)mods=n.elements});
 let objects=[]; walk(ast,n=>{if(n.type==='ObjectExpression'){const ps=n.properties.filter(p=>p.value?.type==='FunctionExpression'&&/^\d+$/.test(String(p.key?.value??p.key?.name)));if(ps.length>objects.length)objects=ps}});
 if(objects.length>mods.length){mods=[];for(const p of objects)mods[Number(p.key.value??p.key.name)]=p.value}
 walk(ast,x=>{if(x.type==='Literal'&&typeof x.value==='string'){
  if(x.value.includes('syntax = "proto')){const hash=require('crypto').createHash('sha256').update(x.value).digest('hex').slice(0,12);const dest=`evidence/proto/${hash}.proto`;fs.mkdirSync(path.join(root,'evidence/proto'),{recursive:true});fs.writeFileSync(path.join(root,dest),x.value);protos.push({bundle:name,line:x.loc.start.line,path:dest})}
  if(/^(?:https?:\/\/|wss?:\/\/|\/(?:pc_|api\/|upload\/|download\/|skill\/))/.test(x.value)&&x.value.length<500)literals.push({bundle:name,line:x.loc.start.line,value:x.value});
 }});
 const records=[];mods.forEach((n,id)=>{if(!n)return;const raw=s.slice(n.start,n.end);const r={id,line:n.loc.start.line,endLine:n.loc.end.line,source:file};records.push(r);
  walk(n,x=>{if(x.type==='CallExpression'&&x.callee.type==='MemberExpression'&&['handle','on','once','invoke','send'].includes(x.callee.property.name)&&s.slice(x.callee.start,x.callee.end).includes('ipc')){ipc.push({bundle:name,module:id,line:x.loc.start.line,operation:s.slice(x.callee.start,x.callee.end),channel:x.arguments[0]?s.slice(x.arguments[0].start,x.arguments[0].end):'',signature:x.arguments[1]?s.slice(x.arguments[1].start,Math.min(x.arguments[1].end,x.arguments[1].start+300)):''})}
   if(x.type==='CallExpression'&&x.callee.type==='MemberExpression'&&['requestGet','requestPost','requestPut','requestDelete'].includes(x.callee.property.name)&&x.arguments[1]?.type==='Literal')http.push({bundle:name,module:id,line:x.loc.start.line,url:JSON.stringify(x.arguments[1].value),method:JSON.stringify(x.callee.property.name.slice(7).toLowerCase()),config:s.slice(x.start,x.end)});
   if(x.type==='ObjectExpression') {const url=x.properties.find(p=>p.key?.name==='url'),method=x.properties.find(p=>p.key?.name==='method');if(url&&method)http.push({bundle:name,module:id,line:x.loc.start.line,url:s.slice(url.value.start,url.value.end),method:s.slice(method.value.start,method.value.end),config:s.slice(x.start,x.end)});}
  });
  const groups=[...raw.matchAll(/\}\(\w+\s*=\s*t\.(\w+)\s*\|\|/g)].map(m=>m[1]);if(groups.length)enums.push({bundle:name,module:id,line:r.line,groups});
 });
 if(name==='main'){fs.mkdirSync(path.join(root,'evidence/main-modules'),{recursive:true});mods.forEach((n,id)=>{if(n)fs.writeFileSync(path.join(root,`evidence/main-modules/${id}.js`),`// ${file}:${n.loc.start.line}; webpack module ${id}\n`+s.slice(n.start,n.end)+'\n')})}
 all.push({bundle:name,modules:records});
}
for(const [n,v] of Object.entries({modules:all,ipc,http,enums,literals,protos}))fs.writeFileSync(path.join(root,`evidence/${n}.json`),JSON.stringify(v,null,2)+'\n');
console.log(JSON.stringify({bundles:all.length,modules:all.reduce((a,x)=>a+x.modules.length,0),literals:literals.length,protos:protos.length,ipc:ipc.length,http:http.length,enumModules:enums.length}));
