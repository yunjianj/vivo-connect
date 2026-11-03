import { EventEmitter } from 'node:events';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { ApiError, ROOT } from './core.mjs';
import { encodePreconnectFrame, PreconnectDecoder } from './preconnect-protocol.mjs';

// One finite connection owned by the requesting backend job. The helper exits
// on stdin EOF, cancellation, close or timeout; it is never detached/autostarted.
export class BluetoothChannel extends EventEmitter {
  constructor({ signal, timeout = 45000, address, powerOn = false, spawnHelper = spawn } = {}) {
    super(); this.frames = []; this.decoder = new PreconnectDecoder();
    this.ready = Promise.withResolvers(); this.closed = false;
    this.child = spawnHelper(process.env.VIVO_PYTHON || 'python3', [path.join(ROOT, 'tools/bluetooth_transport.py')],
      { stdio: ['pipe', 'pipe', 'pipe'] });
    this.done = new Promise(resolve => this.child.once('close', resolve));
    let buffer = '';
    this.child.stdout.setEncoding('utf8');
    this.child.stdout.on('data', chunk => {
      buffer += chunk;
      if (buffer.length > 3 * 1024 * 1024) return this.fail(new Error('Bluetooth helper output too large'));
      for (;;) {
        const newline = buffer.indexOf('\n'); if (newline < 0) break;
        const line = buffer.slice(0, newline); buffer = buffer.slice(newline + 1);
        try {
          const event = JSON.parse(line);
          if (event.type === 'ready') { this.address = event.address; this.ready.resolve(this); }
          else if (event.type === 'error') this.fail(new ApiError(503, event.code.startsWith('BLUETOOTH_') ? event.code : 'BLUETOOTH_' + event.code,
            event.reason === 'br-connection-key-missing' ? '蓝牙配对密钥已失效，请在系统蓝牙设置重新配对这台手机' : event.code === 'BLUETOOTH_OFF' ? '电脑蓝牙已关闭' : '官方蓝牙预连接失败', event.reason ? { reason: event.reason } : undefined));
          else if (event.type === 'data') for (const frame of this.decoder.feed(Buffer.from(event.data, 'base64'))) {
            this.frames.push(frame); if (this.frames.length > 32) this.frames.shift();
            this.emit('frame', frame);
          }
        } catch (error) { this.fail(error); }
      }
    });
    this.child.stderr.resume(); // Never expose raw D-Bus/phone identifiers in logs.
    this.child.stdin.on('error', error => this.fail(error));
    this.child.once('error', error => this.fail(error));
    this.child.once('close', () => {
      if (!this.closed) {
        try { this.decoder.end(); } catch (error) { return this.fail(error); }
        this.fail(new ApiError(503, 'BLUETOOTH_CLOSED', '蓝牙预连接已关闭'));
      }
    });
    this.abort = () => this.fail(signal.reason || new Error('Cancelled'));
    this.signal = signal; signal?.addEventListener('abort', this.abort, { once: true });
    this.child.stdin.write(JSON.stringify({ address, powerOn, timeout: Math.ceil(timeout / 1000) }) + '\n');
    this.timer = setTimeout(() => this.fail(new ApiError(504, 'BLUETOOTH_TIMEOUT', '等待官方蓝牙预连接超时')), timeout);
    if (signal?.aborted) this.abort();
  }
  static async open(options) {
    const channel = new BluetoothChannel(options);
    try { return await channel.ready.promise; }
    catch (error) { await channel.close(); throw error; }
  }
  fail(error) {
    if (this.closed) return;
    this.failure = error; this.ready.reject(error); this.emit('failure', error); this.close();
  }
  send(message, channel = '#pcc') {
    if (this.closed) throw this.failure || new Error('Bluetooth channel closed');
    this.child.stdin.write(JSON.stringify({ send: encodePreconnectFrame(message, channel).toString('base64') }) + '\n');
  }
  waitFor(predicate, timeout = 15000) {
    const existing = this.frames.find(predicate); if (existing) return Promise.resolve(existing);
    if (this.closed) return Promise.reject(this.failure || new Error('Bluetooth channel closed'));
    return new Promise((resolve, reject) => {
      const cleanup = () => { clearTimeout(timer); this.off('frame', received); this.off('failure', failed); };
      const received = frame => { if (predicate(frame)) { cleanup(); resolve(frame); } };
      const failed = error => { cleanup(); reject(error); };
      const timer = setTimeout(() => failed(new ApiError(504, 'PRECONNECT_RESPONSE_TIMEOUT', '等待手机预连接响应超时')), timeout);
      this.on('frame', received); this.on('failure', failed);
    });
  }
  close() {
    if (!this.closed) {
      this.closed = true; clearTimeout(this.timer); this.signal?.removeEventListener('abort', this.abort);
      this.emit('failure', this.failure || new Error('Bluetooth channel closed'));
      this.child.stdin.end(); this.child.kill('SIGTERM');
      const kill = setTimeout(() => this.child.kill('SIGKILL'), 2000); kill.unref(); this.done.finally(() => clearTimeout(kill));
    }
    return this.done;
  }
}
