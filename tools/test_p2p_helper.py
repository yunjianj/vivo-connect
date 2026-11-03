#!/usr/bin/env python3
"""Offline guard/decoder tests. Never starts a real P2P group."""
import ipaddress,json,struct,unittest,os,pathlib,tempfile,time
from types import SimpleNamespace
from unittest.mock import patch
import p2p_helper as h
from wifi_capabilities import attr,parse_combinations

class P2pTests(unittest.TestCase):
    def test_backend_connection_errors_explain_local_service_and_port(self):
        helper=object.__new__(h.Helper)
        helper.backend='http://127.0.0.1:18765';helper.config={'apiToken':'test-only'}
        for error in (h.urllib.error.URLError(ConnectionRefusedError(111,'Connection refused')),TimeoutError()):
            with patch.object(h.urllib.request.OpenerDirector,'open',side_effect=error):
                with self.assertRaisesRegex(RuntimeError,'127.0.0.1:18765.*npm start.*--port'):
                    helper.api('/api/p2p/status')
        error=h.urllib.error.HTTPError(helper.backend,401,'Unauthorized',{},None)
        with patch.object(h.urllib.request.OpenerDirector,'open',side_effect=error):
            with self.assertRaisesRegex(RuntimeError,'鉴权失败.*--state-dir'):
                helper.api('/api/p2p/status')

    def test_gui_owner_identity_and_stale_pid_guard(self):
        identity=h.process_identity(os.getpid())
        self.assertEqual(identity[0],os.getuid())
        self.assertTrue(identity[1].isdecimal())
        self.assertIsNone(h.process_identity(2147483647))
        with tempfile.TemporaryDirectory() as directory:
            pathlib.Path(directory,'config.json').write_text('{}')
            helper=SimpleNamespace(args=SimpleNamespace(state_dir=directory),stop=False)
            with self.assertRaisesRegex(RuntimeError,'身份不匹配'):
                h.watch_owner(helper,os.getpid(),'0')
            h.watch_owner(helper,os.getpid(),identity[1])
            with patch.object(h,'process_identity',return_value=None):
                for _ in range(30):
                    if helper.stop:break
                    time.sleep(.05)
                self.assertTrue(helper.stop)

    def test_gui_lease_revocation_stops_helper_without_killing_window(self):
        with tempfile.TemporaryDirectory() as directory:
            pathlib.Path(directory,'config.json').write_text('{}')
            lease=pathlib.Path(directory,'lease');lease.touch()
            helper=SimpleNamespace(args=SimpleNamespace(state_dir=directory,owner_lease=str(lease)),stop=False)
            h.watch_owner(helper,os.getpid(),h.process_identity(os.getpid())[1])
            lease.unlink()
            for _ in range(30):
                if helper.stop:break
                time.sleep(.05)
            self.assertTrue(helper.stop)

    def test_driver_concurrency(self):
        def u(n):return struct.pack('I',n)
        limits=attr(1,attr(1,u(1))+attr(2,attr(2,b'')))+attr(2,attr(1,u(1))+attr(2,attr(8,b'')+attr(9,b'')))
        combo=attr(1,attr(1,limits)+attr(2,u(3))+attr(4,u(2)))
        self.assertTrue(parse_combinations(combo)[0]['stationAndP2pGo'])
        limits=attr(1,attr(1,u(1))+attr(2,attr(2,b'')+attr(9,b'')))
        combo=attr(1,attr(1,limits)+attr(2,u(1))+attr(4,u(1)))
        self.assertFalse(parse_combinations(combo)[0]['stationAndP2pGo'])
    def test_avoid_existing_routes(self):
        network=h.choose_subnet([{'dst':'default'},{'dst':'192.168.49.0/24'},{'dst':'10.202.0.0/15'}])
        self.assertEqual(network,ipaddress.ip_network('192.168.50.0/24'))
        with self.assertRaises(RuntimeError):h.choose_subnet([{'dst':'192.168.0.0/16'}])
    def test_busctl_void_and_object(self):
        with patch.object(h,'run',return_value=''):self.assertIsNone(h.dbus('call','path','iface','GroupAdd'))
        with patch.object(h,'run',return_value=json.dumps({'type':'o','data':['/test']})):self.assertEqual(h.dbus('call','path','iface','GetInterface'),'/test')
        with patch.object(h,'run',return_value=json.dumps({'type':'ao','data':['/one','/two']})):self.assertEqual(h.prop('path','iface','Interfaces'),['/one','/two'])
    def test_cleanup_only_own_group(self):
        helper=object.__new__(h.Helper);helper.registered=False;helper.dhcp=None
        helper.group={'object':'/new/group','interface':'p2p-new'};helper.address='192.168.49.1/24'
        with patch.object(h,'run') as run,patch.object(h,'dbus') as dbus:
            helper.cleanup()
            run.assert_called_once_with(['ip','address','del','192.168.49.1/24','dev','p2p-new'])
            dbus.assert_called_once_with('call','/new/group',h.P2P,'Disconnect')
    def test_group_info_never_returns_station_as_a_group_without_go_role(self):
        with patch.object(h,'prop',side_effect=['wlp2s0','/']):self.assertIsNone(h.group_info('/station'))
        with patch.object(h,'prop',side_effect=['p2p-peer','/group','client']):self.assertIsNone(h.group_info('/group-iface'))

    def test_station_only_control_object_is_valid_with_separate_group_policy(self):
        def prop(obj,iface,key):
            return {'Ifname':'wlp2s0','P2PDeviceConfig':{'NoGroupIface':{'type':'b','data':False}},'State':'completed'}[key]
        with patch.object(h,'prop',side_effect=prop):
            parent,policy=h.inspect_group_policy('wlp2s0',['/station'])
            self.assertEqual(parent,'/station')
            self.assertFalse(policy['dedicatedP2pParent'])
            self.assertTrue(policy['policyAllowsSeparateGroup'])
            h.require_group_policy(policy)
    def test_no_group_iface_true_or_unknown_refuses_reuse(self):
        for value in [True,None,0,'false']:
            with self.assertRaises(RuntimeError):h.require_group_policy({'noGroupIface':value,'stationState':'completed'})
    def test_inactive_station_refuses_group_creation(self):
        with self.assertRaises(RuntimeError):h.require_group_policy({'noGroupIface':False,'stationState':'disconnected'})
    def test_multiple_physical_control_objects_are_ambiguous(self):
        with patch.object(h,'prop',side_effect=['wlp2s0','wlan1']):
            with self.assertRaises(RuntimeError):h.inspect_group_policy('wlp2s0',['/one','/two'])
    def test_dedicated_control_object_remains_supported(self):
        def prop(obj,iface,key):
            if key=='Ifname':return 'wlp2s0' if obj=='/station' else 'p2p-dev-wlp2s0'
            return {'P2PDeviceConfig':{'NoGroupIface':False},'State':'completed'}[key]
        with patch.object(h,'prop',side_effect=prop):
            parent,policy=h.inspect_group_policy('wlp2s0',['/station','/p2p'])
            self.assertEqual(parent,'/p2p');self.assertTrue(policy['dedicatedP2pParent'])
    def test_unavailable_p2p_configuration_fails_closed(self):
        with patch.object(h,'prop',side_effect=['wlp2s0',[]]):
            with self.assertRaises(RuntimeError):h.inspect_group_policy('wlp2s0',['/station'])

    def frequency_cap(self,no_ir=False,channels=2):
        def channel(mhz,no_ir=False):return {'frequency':mhz,'disabled':False,'noIr':no_ir,'radar':False,'no20MHz':False,'irConcurrent':no_ir}
        return {'frequency':5785,'combinations':[{'stationAndP2pGo':True,'channels':channels}],
                'frequencies':[channel(5785,no_ir),channel(2412)]}
    def test_frequency_same_channel_when_unrestricted(self):
        plan=h.plan_frequency(self.frequency_cap());self.assertEqual(plan['goFrequency'],5785);self.assertEqual(plan['reason'],'same-channel')
    def test_frequency_no_ir_uses_legal_second_channel_without_changing_station(self):
        cap=self.frequency_cap(no_ir=True);plan=h.plan_frequency(cap)
        self.assertEqual(plan['stationFrequency'],5785);self.assertEqual(plan['goFrequency'],2412)
        self.assertEqual(plan['reason'],'separate-channel');self.assertEqual(cap['frequency'],5785)
    def test_single_channel_radio_refuses_no_ir_fallback(self):
        with self.assertRaises(RuntimeError):h.plan_frequency(self.frequency_cap(no_ir=True,channels=1))
    def test_unknown_or_unusable_channels_are_not_assumed_safe(self):
        cap=self.frequency_cap(no_ir=True);cap['frequencies'][1]['disabled']=True
        with self.assertRaises(RuntimeError):h.plan_frequency(cap)
        cap['frequencies']=[]
        with self.assertRaises(RuntimeError):h.plan_frequency(cap)
    def test_channel_limit_uses_only_valid_concurrency_combinations(self):
        cap=self.frequency_cap(no_ir=True,channels=1);cap['combinations'].append({'stationAndP2pGo':False,'channels':2})
        with self.assertRaises(RuntimeError):h.plan_frequency(cap)
    def test_dbus_error_identifies_method_without_argument_values(self):
        from types import SimpleNamespace
        result=SimpleNamespace(returncode=1,stderr='Call failed: Did not receive correct message arguments.')
        with patch.object(h.subprocess,'run',return_value=result):
            with self.assertRaises(RuntimeError) as caught:
                h.dbus('call','/station',h.P2P,'GroupAdd','a{sv}',1,'private-key','s','private-value')
        self.assertIn('P2PDevice.GroupAdd',str(caught.exception));self.assertNotIn('private-value',str(caught.exception));self.assertNotIn('private-key',str(caught.exception))

    def test_group_started_signal_can_identify_object_absent_from_global_list(self):
        helper=object.__new__(h.Helper);helper.before={'/station'};helper.args=__import__('types').SimpleNamespace(interface='wlp2s0')
        record={'type':'signal','interface':h.P2P,'member':'GroupStarted','path':'/station',
                'payload':{'type':'a{sv}','data':[{'role':{'type':'s','data':'GO'},'interface_object':{'type':'o','data':'/new'},'group_object':{'type':'o','data':'/group'}}]}}
        event=h.parse_group_event(record)
        with patch.object(h,'prop',return_value='p2p-new'):
            self.assertEqual(helper.find_started_group(event),{'object':'/new','group':'/group','interface':'p2p-new'})
        record['member']='GONegotiationSuccess'
        self.assertIsNone(h.parse_group_event(record)) # This event can contain credentials; never subscribe to it.
    def test_recovery_never_deletes_station_or_active_go(self):
        helper=object.__new__(h.Helper);helper.args=__import__('types').SimpleNamespace(interface='wlp2s0');helper.stage=lambda *a,**k:None
        with self.assertRaises(RuntimeError):helper.recover_stale('wlp2s0',0)
        info={'name':'p2p-new','index':7,'phy':0,'type':9,'frequency':2412}
        with patch.object(h,'kernel_interfaces',return_value=[info]),patch.object(h,'Nl80211') as nl:
            with self.assertRaises(RuntimeError):helper.recover_stale('p2p-new',0)
            nl.assert_not_called()
    def test_explicit_recovery_deletes_only_inactive_unregistered_target(self):
        helper=object.__new__(h.Helper);helper.args=__import__('types').SimpleNamespace(interface='wlp2s0');helper.stage=lambda *a,**k:None
        info={'name':'p2p-new','index':7,'phy':0,'type':9,'frequency':0}
        with patch.object(h,'kernel_interfaces',return_value=[info]),patch.object(h,'link_is_inactive',return_value=True),patch.object(h,'objects',return_value=[]),patch.object(h,'Nl80211') as nl:
            helper.recover_stale('p2p-new',0);nl.return_value.delete_interface.assert_called_once_with(7)
    def test_failed_creation_cleans_only_new_inactive_interfaces(self):
        helper=object.__new__(h.Helper);helper.args=__import__('types').SimpleNamespace(interface='wlp2s0');helper.stage=lambda *a,**k:None
        helper.group_requested=True;helper.before_kernel={3,6};helper.station_phy=0
        interfaces=[{'name':'wlp2s0','index':3,'phy':0,'type':2,'frequency':5785},
                    {'name':'p2p-old','index':6,'phy':0,'type':9,'frequency':0},
                    {'name':'p2p-new','index':7,'phy':0,'type':9,'frequency':0}]
        with patch.object(h,'kernel_interfaces',return_value=interfaces),patch.object(h,'link_is_inactive',return_value=True),patch.object(h,'objects',return_value=[]),patch.object(h,'Nl80211') as nl:
            helper.cleanup_pending_interfaces();nl.return_value.delete_interface.assert_called_once_with(7)
    def test_full_start_accepts_event_then_validates_kernel_before_ip(self):
        import tempfile,pathlib
        from types import SimpleNamespace
        from wifi_capabilities import attr
        from contextlib import ExitStack
        with tempfile.TemporaryDirectory() as directory:
            pathlib.Path(directory,'config.json').write_text('{"apiToken":"test"}')
            helper=h.Helper(SimpleNamespace(interface='wlp2s0',state_dir=directory,port=8765,recover_stale=None))
            cap=self.frequency_cap(no_ir=True);cap.update({'phy':0,'supportsStationAndP2pGo':True})
            station={'name':'wlp2s0','index':3,'phy':0,'type':2,'frequency':5785}
            group={'name':'p2p-new','index':7,'phy':0,'type':9,'frequency':2412}
            state={'created':False};commands=[]
            def objects():return ['/station'] # The new group never appears in this list.
            def prop(obj,iface,key):
                return {'Ifname':'p2p-new' if obj=='/new' else 'wlp2s0','Group':'/','P2PDeviceConfig':{'NoGroupIface':False},'State':'completed',
                        'SSID':list(b'DIRECT-xy test'),'Passphrase':'test-password','BSSID':[2,1,2,3,4,5]}[key]
            def dbus(action,obj,iface,name,*args):
                if name=='GroupAdd':state['created']=True
                if name=='Disconnect':state['created']=False
            def run(args,timeout=10):
                commands.append(args)
                if args[:4]==['ip','-j','route','show']:return '[]'
                if args[:4]==['ip','-j','route','get']:return '[{"dev":"p2p-new"}]'
                return ''
            def api(route,body=None):
                if route=='/api/p2p/register':helper.stop=True
                return {'ready':True}
            event={'member':'GroupStarted','path':'/station','payload':{'role':'GO','interface_object':'/new','group_object':'/group'}}
            with ExitStack() as stack:
                stack.enter_context(patch.object(h.os,'geteuid',return_value=0));stack.enter_context(patch.object(h.os,'open',return_value=99));stack.enter_context(patch.object(h.fcntl,'flock'))
                nl=stack.enter_context(patch.object(h,'Nl80211'));nl.return_value.probe.return_value=cap
                nl.return_value.request.return_value=[attr(1,struct.pack('I',0))+attr(5,struct.pack('I',9))]
                stack.enter_context(patch('socket.if_nametoindex',return_value=7))
                stack.enter_context(patch.object(h,'station_snapshot',return_value={'addresses':['10.0.0.2'],'connection':'campus'}))
                stack.enter_context(patch.object(h,'objects',side_effect=objects));stack.enter_context(patch.object(h,'prop',side_effect=prop));stack.enter_context(patch.object(h,'dbus',side_effect=dbus))
                stack.enter_context(patch.object(h,'kernel_interfaces',side_effect=lambda:[station,group] if state['created'] else [station]))
                events=stack.enter_context(patch.object(h,'GroupEvents'));events.return_value.drain.return_value=[event]
                stack.enter_context(patch.object(h,'run',side_effect=run));stack.enter_context(patch.object(helper,'api',side_effect=api));stack.enter_context(patch.object(helper,'stage'))
                stack.enter_context(patch.object(h.time,'sleep'));popen=stack.enter_context(patch.object(h.subprocess,'Popen'));popen.return_value.poll.return_value=None
                stack.enter_context(patch('builtins.print'))
                helper.start();self.assertTrue(helper.registered);self.assertEqual(helper.group['interface'],'p2p-new')
                self.assertIn(['ip','address','add','192.168.49.1/24','dev','p2p-new'],commands)
                self.assertFalse(any(c[:4]==['ip','link','set','dev'] and c[4]=='wlp2s0' for c in commands))
                helper.cleanup();events.return_value.close.assert_called_once()

    def test_nl80211_delete_waits_for_ack_and_targets_exact_ifindex(self):
        from wifi_capabilities import Nl80211,attributes
        from unittest.mock import Mock
        client=object.__new__(Nl80211);client.seq=0;client.family=42;client.socket=Mock()
        client.socket.recv.return_value=struct.pack('IHHIIi',20,2,0,1,0,0)
        client.delete_interface(7)
        packet=client.socket.sendto.call_args.args[0]
        length,family,flags,seq,pid=struct.unpack_from('IHHII',packet)
        self.assertTrue(flags&4);self.assertEqual(packet[16],8)
        self.assertEqual(dict(attributes(packet[20:]))[3],struct.pack('I',7))

    def test_recovery_is_idempotent_if_system_already_removed_target(self):
        helper=object.__new__(h.Helper);helper.args=__import__('types').SimpleNamespace(interface='wlp2s0');helper.stage=lambda *a,**k:None
        with patch.object(h,'kernel_interfaces',return_value=[]),patch.object(h,'Nl80211') as nl:
            helper.recover_stale('p2p-new',0);nl.assert_not_called()

    def event_helper(self):
        helper=object.__new__(h.Helper);helper.before={'/station'};helper.group=None
        helper.args=__import__('types').SimpleNamespace(interface='wlp2s0');helper.stage=lambda *a,**k:None
        event={'member':'GroupStarted','path':'/station','payload':{'role':'GO','interface_object':'/new','group_object':'/group'}}
        return helper,event

    def test_started_then_finished_batch_never_reads_removed_object(self):
        helper,event=self.event_helper()
        with patch.object(h,'prop') as prop:
            with self.assertRaisesRegex(RuntimeError,'NetworkManager'):
                helper.consume_group_events([event,{**event,'member':'GroupFinished'}])
            prop.assert_not_called();self.assertIsNone(helper.group)

    def test_disappearing_started_object_waits_for_terminal_event(self):
        helper,event=self.event_helper()
        with patch.object(h,'prop',side_effect=RuntimeError('Method "Get" doesn\'t exist')):
            pending=helper.consume_group_events([event]);self.assertEqual(pending,event)
        with self.assertRaisesRegex(RuntimeError,'已被撤销'):
            helper.consume_group_events([{**event,'member':'GroupFinished'}],pending)
        self.assertIsNone(helper.group)

    def test_temporarily_unavailable_started_object_can_become_readable(self):
        helper,event=self.event_helper()
        with patch.object(h,'prop',side_effect=RuntimeError('UnknownObject')):
            pending=helper.consume_group_events([event])
        with patch.object(h,'prop',return_value='p2p-new'):
            self.assertIsNone(helper.consume_group_events([],pending))
        self.assertEqual(helper.group['interface'],'p2p-new')

    def test_access_denied_is_not_retried_as_a_vanished_object(self):
        helper,event=self.event_helper()
        with patch.object(h,'prop',side_effect=RuntimeError('AccessDenied')):
            with self.assertRaisesRegex(RuntimeError,'AccessDenied'):helper.consume_group_events([event])

    def test_object_scan_skips_vanished_object_but_keeps_permission_errors(self):
        with patch.object(h,'objects',return_value=['/gone','/live']),patch.object(h,'prop',side_effect=[RuntimeError('UnknownObject'),'p2p-new']):
            self.assertEqual(h.named_objects('p2p-new'),['/live'])
        with patch.object(h,'objects',return_value=['/denied']),patch.object(h,'prop',side_effect=RuntimeError('AccessDenied')):
            with self.assertRaisesRegex(RuntimeError,'AccessDenied'):h.named_objects('p2p-new')

    def test_unrelated_group_events_do_not_abort_our_start(self):
        helper,event=self.event_helper()
        self.assertIsNone(helper.consume_group_events([{**event,'path':'/other','member':'GroupFinished'}]))

if __name__=='__main__':unittest.main(verbosity=2)
