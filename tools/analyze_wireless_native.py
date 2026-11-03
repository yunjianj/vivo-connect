#!/usr/bin/env python3
"""Annotate local PE disassembly with string references; no target execution."""
import pathlib,struct,re,json,bisect,subprocess,argparse
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--function',action='append',default=[],type=lambda value:int(value,0))
args=parser.parse_args()
root=pathlib.Path(__file__).resolve().parent.parent
exe=root/'samples/windows/v7.0.6.0-cn/pcsuite/vivoesService/win32/vivoesService.exe';b=exe.read_bytes();pe=struct.unpack_from('<I',b,0x3c)[0];count=struct.unpack_from('<H',b,pe+6)[0];opt=struct.unpack_from('<H',b,pe+20)[0];base=struct.unpack_from('<I',b,pe+24+28)[0];sections=[]
for i in range(count):
 at=pe+24+opt+40*i;name=b[at:at+8].rstrip(b'\0').decode();vsize,rva,size,off=struct.unpack_from('<IIII',b,at+8);sections.append(dict(name=name,va=base+rva,off=off,size=size))
def va_offset(va):
 for s in sections:
  if s['va']<=va<s['va']+s['size']:return s['off']+va-s['va']
def string(va):
 if not any(s['name']=='.rdata' and s['va']<=va<s['va']+s['size'] for s in sections):return None
 off=va_offset(va)
 if off is None:return None
 end=b.find(b'\0',off,off+1000)
 if end<0:return None
 raw=b[off:end]
 if len(raw)<2 or any(c<9 or 13<c<32 for c in raw):return None
 try:return raw.decode('utf8')
 except UnicodeDecodeError:return None
dump=root/'analysis/wireless/vivoesService.asm';dump.parent.mkdir(exist_ok=True,parents=True)
if not dump.exists():
 with dump.open('w') as f:subprocess.run(['objdump','-d','-Mintel',str(exe)],stdout=f,check=True)
lines=dump.read_text().split('\n');ins=[];line_to_func={};starts=[];byaddr={};last_int3=False
for index,line in enumerate(lines):
 m=re.match(r'\s*([0-9a-f]+):\s+((?:[0-9a-f]{2} )+)\s*([^\t].*)?',line)
 if not m or not m[3]:continue
 addr=int(m[1],16);asm=m[3].strip()
 if last_int3 and asm!='int3':starts.append(addr)
 last_int3=asm=='int3'
 ins.append((addr,index,asm));byaddr[addr]=asm
starts=sorted(set([0x401000]+starts))
def fn(addr):return starts[bisect.bisect_right(starts,addr)-1]
def resolve(addr):
 for _ in range(5):
  m=re.fullmatch(r'jmp\s+0x([0-9a-f]+)',byaddr.get(addr,''))
  if not m:break
  addr=int(m[1],16)
 return addr
names={};refs=[]
for addr,index,asm in ins:
 for m in re.finditer(r'0x([0-9a-f]{6,8})',asm):
  va=int(m[1],16);text=string(va)
  if text:
   refs.append(dict(address=addr,function=fn(addr),line=index+1,stringVA=va,fileOffset=va_offset(va),value=text))
   if re.fullmatch(r'[A-Za-z][\w:]+::[\w]+',text):names.setdefault(fn(addr),text)
wanted={r['function'] for r in refs if re.search(r'SSDPSocket::|Worker::connectSSDP|Worker::initTcp|Worker::sendTcp|Worker::recvTcp|BleGattClient::|BtFarawayDevice::|ClassicRfcommClient::|BluetoothClassicBase::|ConnectFlow::(?:wlan|btBuild|btData|retryWlan)|TcpSocketBase::|DataBuilderV[12]::|BleScanner::',r['value'])}
wanted.update(fn(x) for x in [0x4199f0,0x42c1d0,0x498590,0x5eef50,0x5ee680,0x5ef010,0x5f38c0,0x60ed40,0x60f590,0x4a3010,0x5e9010,0x5e8b00,0x5e8cb0,0x5e8d90])
wanted.update(fn(x) for x in args.function)
out=root/'evidence/wireless/native';out.mkdir(exist_ok=True,parents=True)
byline={}
for r in refs:byline.setdefault(r['line']-1,[]).append(r['value'])
functions=[]
instruction_addresses=[instruction[0] for instruction in ins]
for start in sorted(wanted):
 idx=bisect.bisect_right(starts,start);end=starts[idx] if idx<len(starts) else 2**32
 selected=[instruction for instruction in ins[bisect.bisect_left(instruction_addresses,start):bisect.bisect_left(instruction_addresses,end)] if instruction[2]!='int3'];body=[]
 for addr,index,asm in selected:
  comments=byline.get(index,[]);call=re.match(r'call\s+0x([0-9a-f]+)',asm)
  if call:
   target=resolve(int(call[1],16));comments=comments+[f'call resolved=0x{target:x} '+names.get(target,'')]
  body.append(lines[index]+(' ; '+json.dumps(comments,ensure_ascii=False) if comments else ''))
 name=names.get(start,f'fn_{start:x}');p=out/f'{start:08x}.asm';p.write_text(f'; {name}; image base 0x{base:x}; static annotation only\n'+'\n'.join(body)+'\n')
 functions.append({'name':name,'start':hex(start),'end':hex(end),'path':str(p.relative_to(root)),'strings':[r for r in refs if r['function']==start]})
(root/'evidence/wireless/native-functions.json').write_text(json.dumps(functions,indent=2,ensure_ascii=False)+'\n')
(root/'evidence/wireless/native-string-refs.json').write_text(json.dumps(refs,indent=2,ensure_ascii=False)+'\n')

# PE32 import map, keyed by IAT virtual address, for indirect call auditing.
def cstring(va):
 off=va_offset(va)
 return b[off:b.index(0,off)].decode('ascii')
imports={}
import_rva=struct.unpack_from('<I',b,pe+24+104)[0]
descriptor=va_offset(base+import_rva)
while descriptor is not None:
 original,stamp,chain,name_rva,iat=struct.unpack_from('<IIIII',b,descriptor)
 if not any([original,stamp,chain,name_rva,iat]):break
 dll=cstring(base+name_rva);thunks=va_offset(base+(original or iat));i=0
 while True:
  value=struct.unpack_from('<I',b,thunks+4*i)[0]
  if not value:break
  name=f'ordinal:{value & 65535}' if value & 0x80000000 else cstring(base+value+2)
  imports[hex(base+iat+4*i)]={'dll':dll,'name':name};i+=1
 descriptor+=20
(root/'evidence/wireless/native-imports.json').write_text(json.dumps(imports,indent=2)+'\n')

print(json.dumps({'functions':len(functions),'stringReferences':len(refs),'selected':[(r['name'],r['start']) for r in functions]},ensure_ascii=False))
