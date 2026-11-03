#!/usr/bin/env python3
import pathlib,re,json,subprocess,hashlib,zipfile,struct
root=pathlib.Path(__file__).resolve().parent.parent
out=root/'evidence/native';out.mkdir(parents=True,exist_ok=True)
files=['vdfs/PcsuiteConnectSDK.dll','vivoScreen/VivoCastSDK.dll','vivoScreen/AvCSDK.dll','vivoScreen/AVSDK.dll','vivoesService/win32/vivoesService.exe','SyncService/vivoSyncService.exe','SyncService/vivoBackup.exe','vivoScreen/vivoScreen.exe','vdfs/vdfs.exe','vivorelay/vivorelay.exe']
records=[]
for name in files:
 p=root/'pcsuite'/name
 if not p.exists():continue
 result=subprocess.run(['objdump','-p',str(p)],capture_output=True,text=True)
 text=result.stdout
 lines=text.splitlines(); cutoff=next((i for i,l in enumerate(lines) if 'Base Relocations' in l),len(lines)); text='\n'.join(lines[:cutoff])+'\n'
 dest=out/(name.replace('/','__')+'.txt');dest.write_text(text)
 strings=[]
 data=p.read_bytes()
 for match in re.finditer(rb'[\x20-\x7e]{6,}',data):
  s=match.group().decode()
  if len(s)<500 and re.search(r'(?:https?://|wss?://|/pc_file_manager|/ws/|/base-info|/version|X-ES-|newToken|preconnect_|connbase|connectServer)',s,re.I): strings.append({'offset':match.start(),'value':s})
 records.append({'file':str(p.relative_to(root)),'sha256':hashlib.sha256(data).hexdigest(),'pe_headers':str(dest.relative_to(root)),'strings':strings})
(root/'evidence/native.json').write_text(json.dumps(records,indent=2)+'\n')
apks=[]
for p in (root/'samples/windows/v7.0.6.0-cn/pcsuite/updateApk').glob('*.apk'):
 with zipfile.ZipFile(p) as z:
  hits=[]
  for name in z.namelist():
   if not re.fullmatch(r'classes\d*\.dex',name):continue
   b=z.read(name);size,offset=struct.unpack_from('<II',b,56)
   for i in range(size):
    at=struct.unpack_from('<I',b,offset+i*4)[0]
    while b[at]&128:at+=1
    at+=1;end=b.find(b'\0',at);s=b[at:end].decode('utf8','replace')
    if len(s)<400 and re.search(r'^/(?:pc_|upload/|download/|ws/|version$|base-info$|fileManager|api/)|X-ES-HTTP|newToken|AdbPortalService|v1\.hc\.vivo',s):hits.append({'dex':name,'index':i,'value':s})
  apks.append({'file':str(p.relative_to(root)),'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'strings':hits})
(root/'evidence/android-strings.json').write_text(json.dumps(apks,indent=2)+'\n')
print(json.dumps({'nativeFiles':len(records),'apkFiles':len(apks),'apkMatches':sum(len(a['strings']) for a in apks)}))
