#!/usr/bin/env python3
"""Offline durable-profile tests. No wireless commands are executed."""
import os,pathlib,tempfile,unittest
from unittest.mock import Mock
from p2p_persistent import PersistentGroup,atomic_private
from wifi_capabilities import Nl80211,attributes
import struct

class PersistentTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory();self.addCleanup(self.tmp.cleanup)
        self.root=pathlib.Path(self.tmp.name);self.profile=PersistentGroup(self.root/'state')
        self.runtime=self.root/'runtime.conf'
        self.runtime.write_text('ctrl_interface=/run/test/ctrl\ndevice_name=vivo-connect-linux\n')
        self.peers='02:01:02:03:04:05 02:01:02:03:04:06/ff:ff:ff:ff:ff:ff'
        def response(command):
            if command=='LIST_NETWORKS':return 'network id / ssid / bssid / flags\n7\tDIRECT-test\tany\t[P2P-PERSISTENT]\n'
            if command=='GET_NETWORK 7 mode':return '3'
            if command=='GET_NETWORK 7 p2p_client_list':return self.peers
            return 'OK'
        self.control=Mock();self.control.request.side_effect=response

    def test_identity_ssid_psk_and_clients_survive_process_restart(self):
        self.profile.prepare(self.runtime)
        networks='network={\n ssid="DIRECT-old"\n psk="old-group-password"\n disabled=2\n mode=3\n p2p_client_list=02:01:02:03:04:05\n}\n'
        atomic_private(self.profile.file,('ctrl_interface=/run/old/ctrl\npersistent_reconnect=1\n'+networks).encode())
        restored=PersistentGroup(self.root/'state')
        self.assertEqual(restored.mac,self.profile.mac)
        result=restored.prepare(self.runtime).read_text()
        self.assertIn(networks,result);self.assertNotIn('/run/old',result)
        self.assertIn('update_config=1',result);self.assertIn('persistent_reconnect=0',result)
        self.assertNotIn('persistent_reconnect=1',result)
        self.assertEqual(restored.file.stat().st_mode&0o777,0o600)
        self.assertEqual(restored.command(self.control,2412),'P2P_GROUP_ADD persistent=7 freq=2412')

    def test_new_group_is_persistent_and_save_failure_is_not_ignored(self):
        self.control.request.side_effect=lambda command:'network id / ssid / bssid / flags\n' if command=='LIST_NETWORKS' else 'FAIL'
        self.assertEqual(self.profile.command(self.control,2412),'P2P_GROUP_ADD persistent freq=2412')
        with self.assertRaises(RuntimeError):self.profile.save(self.control)

    def test_saving_clients_never_discovers_or_invites_and_saves_changes(self):
        self.profile.save(self.control)
        self.profile.save(self.control)
        self.assertEqual([c.args[0] for c in self.control.request.call_args_list].count('SAVE_CONFIG'),1)
        self.peers='02:01:02:03:04:07'
        self.profile.save(self.control)
        commands=[c.args[0] for c in self.control.request.call_args_list]
        self.assertEqual(commands.count('SAVE_CONFIG'),2)
        self.assertFalse(any(c.startswith(('P2P_INVITE','P2P_FIND','P2P_PEER','WPS_PBC')) for c in commands))

    def test_untrusted_or_multicast_peer_entries_and_symlink_state_are_rejected(self):
        self.peers='any 01:01:02:03:04:05 00:00:00:00:00:00 02:01:02:03:04:05/00:00:00:00:00:00;bad'
        self.assertEqual(self.profile.peers(self.control),[])
        self.profile.file.symlink_to(self.runtime)
        with self.assertRaises(OSError):self.profile.prepare(self.runtime)

    def test_stable_mac_is_supplied_to_netlink_without_touching_station(self):
        nl=object.__new__(Nl80211);nl.family=42;nl.request=Mock()
        nl.create_go(0,'p2p-vc-123456',mac=self.profile.mac)
        args=nl.request.call_args.args[2];fields=dict(attributes(args))
        self.assertEqual(fields[6],self.profile.mac)
        self.assertEqual(struct.unpack('I',fields[5])[0],9)
        with self.assertRaises(ValueError):nl.create_go(0,'wlp2s0',mac=self.profile.mac)

if __name__=='__main__':unittest.main(verbosity=2)
