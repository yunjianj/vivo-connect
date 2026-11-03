#!/usr/bin/env python3
"""Verify generated source links, route coverage, hashes, and extracted proto."""
import collections,hashlib,json,pathlib,re,shutil,subprocess
root=pathlib.Path(__file__).resolve().parent.parent
errors=[];links=0
for f in [root/'README.md',*sorted((root/'docs').glob('*.md'))]:
 for target in re.findall(r'\]\(([^)]+)\)',f.read_text()):
  if '://' in target or target.startswith('#'):continue
  target=target.strip('<>');name,_,anchor=target.partition('#');dest=(f.parent/name).resolve();links+=1
  if not dest.exists():errors.append(f'{f.name}: missing {target}');continue
  if re.fullmatch(r'L\d+',anchor):
   line=int(anchor[1:]);count=len(dest.read_text().split('\n'))
   if not 1<=line<=count:errors.append(f'{f.name}: invalid line {target}')
for f in (root/'evidence').glob('*.json'):json.loads(f.read_text())
routes=json.loads((root/'evidence/local-routes.json').read_text());counts=collections.Counter((r['port'],r['transport']) for r in routes)
assert counts=={(9199,'http'):42,(9199,'websocket'):1,(9200,'http'):15},counts
for r in routes:
 source=(root/r['source']).read_text().split('\n');actual=source[r['line']-1].strip()
 if not actual.startswith(r['name']+'('):errors.append(f"incorrect method link {r['name']} -> {actual}")
manifest=json.loads((root/'evidence/extraction.json').read_text());assert hashlib.sha256((root/manifest['archive']).read_bytes()).hexdigest()==manifest['sha256']
proto=(root/'evidence/proto/1fe88f158662.proto').read_bytes();assert hashlib.sha256(proto).hexdigest().startswith('1fe88f158662')
assert b'message MessageBase' in proto and b'message ForwardMessage' in proto
proto_compiled=False
if shutil.which('protoc'):
 subprocess.run(['protoc','--proto_path=evidence/proto','--descriptor_set_out=evidence/proto/connection.pb','--include_source_info','evidence/proto/1fe88f158662.proto'],cwd=root,check=True)
 proto_compiled=True
# Compare every generated main module against its claimed beautified bundle region.
source=(root/'analysis/pretty/main.js').read_text()
line_offsets=[0]
line_offsets.extend(m.end() for m in re.finditer('\n',source))
for f in (root/'evidence/main-modules').glob('*.js'):
 data=f.read_text();first,body=data.split('\n',1);line=int(re.search(r'main.js:(\d+)',first)[1]);offset=line_offsets[line-1];start=source.find('function(',offset)
 if start<0 or start>source.find('\n',offset):errors.append(f'bad module offset {f.name}');continue
 if not source.startswith(body.rstrip('\n'),start):errors.append(f'module mismatch {f.name}')
report={'protoCompiled':proto_compiled,'dynamicDeviceTestsPerformed':False,'markdownLinksChecked':links,'routeCounts':{f'{p}/{t}':n for (p,t),n in counts.items()},'mainModulesChecked':len(list((root/'evidence/main-modules').glob('*.js'))),'errors':errors}
(root/'evidence/verification.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report));raise SystemExit(bool(errors))
