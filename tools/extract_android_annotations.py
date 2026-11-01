#!/usr/bin/env python3
"""Extract DEX field annotations, including Gson wire names, without execution."""
import pathlib,zipfile,struct,json,re
root=pathlib.Path(__file__).resolve().parent.parent;result=[]
for apk in ['connbase','pcsuite']:
 with zipfile.ZipFile(root/f'samples/windows/v7.0.6.0-cn/pcsuite/updateApk/{apk}.apk') as z:
  for dex in z.namelist():
   if not re.fullmatch(r'classes\d*\.dex',dex):continue
   b=z.read(dex)
   def u(at):return struct.unpack_from('<I',b,at)[0]
   def leb(at):
    v=shift=0
    while True:
     x=b[at];at+=1;v|=(x&127)<<shift
     if not x&128:return v,at
     shift+=7
   strings=[]
   for i in range(u(56)):
    at=u(u(60)+i*4);_,at=leb(at);strings.append(b[at:b.index(0,at)].decode('utf8','replace'))
   types=[strings[u(u(68)+i*4)] for i in range(u(64))]
   def value(at):
    head=b[at];at+=1;t=head&31;n=(head>>5)+1
    if t==0x1e:return None,at
    if t==0x1f:return bool(head>>5),at
    if t==0x1c:
     count,at=leb(at);values=[]
     for _ in range(count):v,at=value(at);values.append(v)
     return values,at
    if t==0x1d:return annotation(at)
    v=int.from_bytes(b[at:at+n],'little');at+=n
    return (strings[v] if t==0x17 else types[v] if t==0x18 else v),at
   def annotation(at):
    typ,at=leb(at);count,at=leb(at);items={}
    for _ in range(count):name,at=leb(at);v,at=value(at);items[strings[name]]=v
    return {'type':types[typ],'elements':items},at
   for i in range(u(96)):
    at=u(100)+i*32;cls=types[u(at)];ann=u(at+20)
    if not ann or not cls.startswith('Lcom/vivo/'):continue
    for j in range(u(ann+4)):
     fid,aset=struct.unpack_from('<II',b,ann+16+8*j);fieldat=u(84)+fid*8;name=strings[u(fieldat+4)];typ=types[struct.unpack_from('<H',b,fieldat+2)[0]]
     for k in range(u(aset)):
      aoff=u(aset+4+k*4);a,_=annotation(aoff+1)
      result.append({'apk':apk,'dex':dex,'class':cls,'field':name,'fieldType':typ,'annotation':a})
p=root/'evidence/wireless/android-field-annotations.json';p.write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n');print(f'{len(result)} field annotations')
