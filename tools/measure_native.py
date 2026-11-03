#!/usr/bin/env python3
"""Measure one native GUI and the separately running backend, without phone writes."""
import argparse,json,pathlib,subprocess,time,os
ROOT=pathlib.Path(__file__).resolve().parent.parent

def memory(pid):
    fields={}
    for line in pathlib.Path(f'/proc/{pid}/smaps_rollup').read_text().splitlines():
        if ':' in line:
            key,value=line.split(':',1)
            if key in ('Rss','Pss','Private_Dirty','Private_Clean'):fields[key+'KiB']=int(value.split()[0])
    return fields

def main():
    parser=argparse.ArgumentParser();parser.add_argument('--demo',action='store_true');args=parser.parse_args()
    binary=ROOT/'build/native/release/vivo-connect'
    command=[str(binary),'--quit-after','12']+(['--demo'] if args.demo else [])
    process=subprocess.Popen(command,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
    try:
        samples=[]
        for _ in range(3):
            time.sleep(3)
            if process.poll() is not None:
                raise RuntimeError('Native window exited before measurement: '+process.stderr.read()[:500])
            samples.append(memory(process.pid))
        maps=pathlib.Path(f'/proc/{process.pid}/maps').read_text().lower()
        unwanted=[name for name in ['libqt6','libqt5','libwebkit','libcef','chromium','chrome/'] if name in maps]
        backends=[]
        for path in pathlib.Path('/proc').iterdir():
            if not path.name.isdigit():continue
            try:
                argv=(path/'cmdline').read_bytes().split(b'\0')
                if len(argv)>1 and argv[0].rsplit(b'/',1)[-1]==b'node' and argv[1]==b'backend/src/server.mjs' and (path/'cwd').resolve()==ROOT:
                    backends.append(memory(int(path.name)))
            except (OSError,PermissionError):pass
        record={'renderer':'winit-software','mode':'demo' if args.demo else 'existing local backend; read-only status polling',
                'sampleIntervalSeconds':3,'guiSamples':samples,'backendSamples':backends,'unexpectedGuiLibraries':unwanted,
                'binaryBytes':binary.stat().st_size,'scope':'RSS/PSS from smaps_rollup for the GUI process and separately for existing Node backend. Excludes compositor, login browser, file picker and privileged P2P helper.'}
        path=ROOT/'evidence/native-gui-memory.json';path.write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n')
        print(json.dumps(record,ensure_ascii=False))
        process.wait(timeout=20)
    finally:
        if process.poll() is None:process.terminate();process.wait(timeout=10)
if __name__=='__main__':main()
