#!/usr/bin/env python3
"""Disassemble pairing-relevant APK methods with Androguard (read-only)."""
import sys,pathlib,json,zipfile,re,hashlib,argparse
p=argparse.ArgumentParser();p.add_argument('--deps',default='/tmp/vivo-reverse-python');args=p.parse_args()
sys.path.insert(0,args.deps)
from loguru import logger
logger.disable('androguard')
from androguard.core.dex import DEX
root=pathlib.Path(__file__).resolve().parent.parent
out=root/'evidence/wireless/android';out.mkdir(parents=True,exist_ok=True)
needles=['PAY_LOAD_1','vivo_connect','com.vivo.pcsuite.SERVICE','auth_status','compatGsonStr','10191','2200','randomId','pcCustomizedData','M-SEARCH','getPhone','scan/sid']
index=[];classes=[]
for apk in ['connbase','pcsuite']:
 path=root/f'pcsuite/updateApk/{apk}.apk'
 with zipfile.ZipFile(path) as z:
  for name in z.namelist():
   if not re.fullmatch(r'classes\d*\.dex',name):continue
   vm=DEX(z.read(name));print(f'parse {apk}/{name}',flush=True)
   for c in vm.get_classes():
    cls=c.get_name();body=[];matches=[];methods=[]
    keep_class=bool(re.search(r'^Lcom/vivo/(?:connbase/|connection/|connect/|pcsuite/(?:connect/|pcconnect/|service/|utils/|http/|server/))',cls))
    for m in c.get_methods():
     if not m.get_code():continue
     try:
      ins=[];offset=0;hits=[]
      for i in m.get_instructions():
       text=i.get_name()+' '+i.get_output();ins.append(f'{offset:06x}: {text}');offset+=i.get_length()
       for n in needles:
        if n in text:hits.append(n)
      if keep_class or hits:
       title=m.get_name()+m.get_descriptor();body.append('\nMETHOD '+title+'\n'+'\n'.join(ins));methods.append({'name':m.get_name(),'descriptor':m.get_descriptor(),'codeOffset':m.get_code_off(),'hits':sorted(set(hits))});matches+=hits
     except Exception as e:raise RuntimeError(f'{cls} {m.get_name()}: {e}') from e
    if body:
     dest=out/f'{apk}__{name}__{hashlib.sha256(cls.encode()).hexdigest()[:12]}.txt'
     fields=[]
     for f in c.get_fields():
      value=f.get_init_value()
      fields.append(f'{f.get_name()} {f.get_descriptor()} = '+repr(value.get_value() if value else None))
     header=f'APK {path.relative_to(root)}\nDEX {name}\nCLASS {cls}\nSUPER {c.get_superclassname()}\nFIELDS\n'+'\n'.join(fields)+'\n'
     dest.write_text(header+'\n'.join(body)+'\n');rec={'apk':apk,'dex':name,'class':cls,'source':str(dest.relative_to(root)),'matches':sorted(set(matches)),'methods':methods};index.append(rec)
    classes.append({'apk':apk,'dex':name,'class':cls})
(root/'evidence/wireless/android-methods.json').write_text(json.dumps(index,indent=2,ensure_ascii=False)+'\n')
(root/'evidence/wireless/android-classes.json').write_text(json.dumps(classes,indent=2)+'\n')
print(json.dumps({'classes':len(classes),'selected':len(index),'methods':sum(len(c['methods']) for c in index)}))
