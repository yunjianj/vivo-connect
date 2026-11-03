#!/usr/bin/env python3
"""Run via dbus-run-session: real busctl monitor/emit, isolated from system Wi-Fi."""
import subprocess,time
from p2p_helper import GroupEvents,P2P
monitor=GroupEvents(bus_args=['--user'],sender=None)
try:
    monitor.wait_ready()
    subprocess.run(['busctl','--user','emit','/fi/w1/wpa_supplicant1/Interfaces/0',P2P,'GroupStarted','a{sv}','3',
                    'interface_object','o','/fi/w1/wpa_supplicant1/Interfaces/1','role','s','GO','group_object','o','/fi/w1/wpa_supplicant1/Groups/0'],check=True)
    for _ in range(30):
        events=monitor.drain()
        if events:
            assert events[0]['payload']['role']=='GO',events
            assert events[0]['payload']['interface_object']=='/fi/w1/wpa_supplicant1/Interfaces/1',events
            print('PASS: private D-Bus readiness barrier and GroupStarted event parsing; system Wi-Fi untouched.')
            break
        time.sleep(.1)
    else:raise AssertionError('No GroupStarted event received')
finally:monitor.close()
