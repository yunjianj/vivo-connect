#!/usr/bin/env python3
"""Run offline checks and record their exact scope, without network traffic."""
import hashlib
import json
import pathlib
import subprocess
import sys
root = pathlib.Path(__file__).resolve().parent.parent
run = subprocess.run([sys.executable, str(root/'tools/test_wireless_pairing.py')],
                     cwd=root, text=True, capture_output=True)
print(run.stdout + run.stderr, end='')
files = ['samples/windows/v7.0.6.0-cn/pcsuite/vivoesService/win32/vivoesService.exe',
         'samples/windows/v7.0.6.0-cn/pcsuite/updateApk/connbase.apk', 'samples/windows/v7.0.6.0-cn/pcsuite/updateApk/pcsuite.apk',
         'tools/wireless_pairing.py', 'tools/test_wireless_pairing.py']
report = {
    'scope': 'static reconstruction and offline reference-code tests',
    'offlineTestsPassed': run.returncode == 0,
    'testOutput': run.stdout + run.stderr,
    'sampleAndCodeSha256': {f: hashlib.sha256((root/f).read_bytes()).hexdigest() for f in files},
    'androidSelectedClasses': len(json.loads((root/'evidence/wireless/android-methods.json').read_text())),
    'androidFieldAnnotations': len(json.loads((root/'evidence/wireless/android-field-annotations.json').read_text())),
    'networkDiscoveryPerformed': False,
    'realDevicePairingPerformed': False,
    'modernSignComparedWithOriginalProgram': False,
    'businessHttpsWssSessionVerified': False,
    'remaining': ['modern peer challenge acquisition and phone verifier',
                  'BLE advertisement layout and Wi-Fi Direct credential exchange',
                  'real-device authorization, TLS trust, and HTTPS/WSS token handoff']
}
(root/'evidence/wireless/verification.json').write_text(json.dumps(report, indent=2, ensure_ascii=False)+'\n')
raise SystemExit(run.returncode)
