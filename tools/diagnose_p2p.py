#!/usr/bin/env python3
"""Read-only private supplicant inspection. Never prints keys or raw addresses."""
import argparse,hashlib,json,os,pathlib,re,select,socket,stat,tempfile,time

def report(kind,**values):print(json.dumps({'kind':kind,**values},ensure_ascii=False),flush=True)
def fields(text):return dict(line.split('=',1) for line in text.splitlines() if '=' in line)
def result_event(text):
    match=re.search(r'P2P-INVITATION-RESULT\s+.*?\bstatus=(\d{1,3})(?:\s|$)',text)
    if match:report('invitation-result',status=int(match[1]))
def inspect(seconds):
    if os.geteuid()!=0:raise RuntimeError('读取服务专用控制套接字需要一次系统授权')
    base=pathlib.Path('/run/vivo-connect-p2p')
    servers=[p for p in base.glob('vivo-p2p-*/ctrl/p2p-vc-*') if p.is_socket() and p.stat().st_uid==0]
    if len(servers)!=1:raise RuntimeError('无法唯一定位运行中的独立组套接字')
    with tempfile.TemporaryDirectory(prefix='vivo-p2p-diagnostic-',dir=base) as directory:
        with socket.socket(socket.AF_UNIX,socket.SOCK_DGRAM) as control:
            control.bind(directory+'/observer');control.connect(str(servers[0]));control.settimeout(3)
            def query(command):
                # No SET, CONNECT, INVITE, FIND, WPS, SAVE_CONFIG or teardown.
                if command not in ('ATTACH','DETACH','STATUS','LIST_NETWORKS','STA-FIRST') and not re.fullmatch(r'GET_NETWORK \d+ (?:mode|disabled|p2p_client_list)',command) and not re.fullmatch(r'STA-NEXT (?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}',command):raise RuntimeError('诊断命令不在只读白名单中')
                control.send(command.encode())
                deadline=time.monotonic()+3
                while time.monotonic()<deadline:
                    text=control.recv(65536).decode('utf8','replace').strip()
                    if text.startswith('<'):result_event(text);continue
                    return text
                raise TimeoutError('读取控制状态超时')
            query('ATTACH')
            status=fields(query('STATUS'))
            report('group',state=status.get('wpa_state'),mode=status.get('mode'),frequency=status.get('freq'),ssidFingerprint=hashlib.sha256(status.get('ssid','').encode()).hexdigest()[:12],hasDeviceAddress=bool(status.get('p2p_device_address')))
            network_lines=query('LIST_NETWORKS').splitlines()[1:]
            for line in network_lines:
                columns=line.split('\t')
                if len(columns)<4 or not columns[0].isdigit():continue
                index=columns[0];clients=query('GET_NETWORK '+index+' p2p_client_list').strip().split()
                clients=[v for v in clients if re.fullmatch(r'(?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}(?:/(?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2})?',v)]
                report('network',id=int(index),flags=columns[3],mode=query('GET_NETWORK '+index+' mode'),disabled=query('GET_NETWORK '+index+' disabled'),peerCount=len(clients),matchesActiveSSID=columns[1]==status.get('ssid'))
            entry=query('STA-FIRST');seen=set()
            while entry and not entry.startswith('FAIL'):
                mac=entry.splitlines()[0]
                if mac in seen or not re.fullmatch(r'(?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}',mac):break
                seen.add(mac);value=fields(entry)
                report('station',authorized='[AUTHORIZED]' in value.get('flags',''),hasP2pDeviceAddress=any('p2p' in key and 'addr' in key for key in value))
                entry=query('STA-NEXT '+mac)
            report('watching',seconds=seconds,stationCount=len(seen))
            deadline=time.monotonic()+seconds
            while time.monotonic()<deadline:
                if select.select([control],[],[],min(1,max(0,deadline-time.monotonic())))[0]:result_event(control.recv(65536).decode('utf8','replace'))
            query('DETACH')

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--seconds',type=int,default=20);args=parser.parse_args()
    if not 0<=args.seconds<=60:parser.error('seconds 必须为 0–60')
    inspect(args.seconds)
