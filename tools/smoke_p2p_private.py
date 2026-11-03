#!/usr/bin/env python3
"""Exercise the actual executable's private global control, without any NIC."""
import json,pathlib,subprocess,tempfile,time
from p2p_private import Control,MARKER,verified_binary

def main():
    binary=verified_binary()
    with tempfile.TemporaryDirectory(prefix='vivo-p2p-smoke-') as directory:
        root=pathlib.Path(directory);config=root/'supplicant.conf'
        config.write_text('ctrl_interface='+str(root/'ctrl')+'\nap_scan=0\n')
        server=root/'global'
        process=subprocess.Popen([str(binary),'-g',str(server)],stdout=subprocess.PIPE,stderr=subprocess.STDOUT,text=True)
        control=None
        try:
            for _ in range(100):
                if process.poll() is not None:raise RuntimeError('无网卡测试进程退出：'+process.stdout.read()[:1000])
                if server.exists():break
                time.sleep(.05)
            else:raise RuntimeError('无网卡测试控制接口未就绪')
            control=Control(server,root/'client')
            assert control.request('PING')=='PONG'
            assert control.request('VIVO_P2P_GROUP_ONLY')==MARKER
            assert control.request('ATTACH')=='OK'
            # There are no interfaces in this process and no system D-Bus link.
            assert control.request('INTERFACES')==''
        finally:
            if control:control.close()
            process.terminate()
            try:process.wait(timeout=3)
            except subprocess.TimeoutExpired:process.kill();process.wait()
            process.stdout.close()
        refused=subprocess.run([str(binary),'-Dnl80211','-i','vc-station-test','-c',str(config)],capture_output=True,text=True,timeout=10)
        assert refused.returncode!=0 and 'VIVO: refusing a non-private interface' in refused.stdout+refused.stderr
    print(json.dumps({'realExecutableTested':True,'globalControlOnly':True,'interfaces':0,'privateControlMarker':True,'stationNameRefused':True,'wirelessNetworkChanged':False}))

if __name__=='__main__':main()
