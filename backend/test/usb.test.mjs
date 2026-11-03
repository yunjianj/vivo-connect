import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { PhoneManager } from '../src/phone.mjs';

test('USB reuses adbkit service intents, foreground fallback and platform-tools port allocation', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-adb-test-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const executable = path.join(dir, 'adb.mjs');
  const calls = path.join(dir, 'calls.jsonl');
  await fs.writeFile(executable, `#!/usr/bin/env node
import fs from 'node:fs';fs.appendFileSync(${JSON.stringify(calls)},JSON.stringify(process.argv.slice(2))+'\\n'); if(process.argv.includes('tcp:0'))console.log('39871');`, { mode: 0o700 });
  const before = process.env.ADB; process.env.ADB = executable;
  t.after(() => { if (before === undefined) delete process.env.ADB; else process.env.ADB = before; });
  const invoked = [];
  const phones = new PhoneManager({ name: 'Linux PC' }, { account: null });
  phones.adb = () => ({ client: {
    isInstalled: async () => true,
    startActivity: async (...args) => invoked.push(['activity', ...args]),
    startService: async (...args) => { invoked.push(['service', ...args]); if (args[1].foreground !== 1) throw new Error('needs foreground'); }
  } });
  const session = { token: 'connection-token', connectionId: 'connection-id' };
  await phones.connectUsb(session, { serial: 'phone-serial' });
  assert.equal(session.forwardPort, 39871);
  assert.equal(invoked[0][2].action, 'vivo.intent.action.PCSUITE_INTENT');
  assert.equal(invoked[1][2].component, 'com.vivo.pcsuite/.service.AdbPortalService');
  assert.equal(invoked[1][2].extras.token, 'connection-token');
  assert.equal(invoked[2][2].foreground, 1);
  await phones.cleanup(session);
  const argv = (await fs.readFile(calls, 'utf8')).trim().split('\n').map(JSON.parse);
  assert.deepEqual(argv[0], ['-s', 'phone-serial', 'forward', 'tcp:0', 'tcp:10380']);
  assert.deepEqual(argv[1], ['-s', 'phone-serial', 'forward', '--remove', 'tcp:39871']);
});
