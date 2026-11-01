#!/usr/bin/env python3
"""Read ASAR without executing the target; record missing unpacked files."""
import argparse, hashlib, json, pathlib, struct
p=argparse.ArgumentParser(); p.add_argument('archive',nargs='?',default='pcsuite/resources/app.asar'); p.add_argument('--output',default='analysis/app'); a=p.parse_args()
archive=pathlib.Path(a.archive); out=pathlib.Path(a.output); report={'archive':str(archive),'sha256':hashlib.sha256(archive.read_bytes()).hexdigest(),'extracted':0,'missing_unpacked':[]}
with archive.open('rb') as f:
    _,header_size,_,json_size=struct.unpack('<4I', f.read(16)); header=json.loads(f.read(json_size)); base=8+header_size
    def extract(tree,rel=pathlib.Path()):
        for name,meta in tree.items():
            if name in ('.','..') or '/' in name or '\\' in name: raise ValueError('unsafe ASAR path')
            dest=out/rel/name
            if 'files' in meta: extract(meta['files'],rel/name); continue
            if 'link' in meta: continue
            if meta.get('unpacked'):
                source=pathlib.Path(str(archive)+'.unpacked')/rel/name
                if not source.exists(): report['missing_unpacked'].append(str(rel/name)); continue
                data=source.read_bytes()
            else:
                f.seek(base+int(meta.get('offset',0))); data=f.read(meta['size'])
                if len(data)!=meta['size']: raise ValueError('truncated ASAR entry')
            dest.parent.mkdir(parents=True,exist_ok=True); dest.write_bytes(data); report['extracted']+=1
    extract(header['files'])
pathlib.Path('evidence').mkdir(exist_ok=True);pathlib.Path('evidence/extraction.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:v if k!='missing_unpacked' else len(v) for k,v in report.items()}))
