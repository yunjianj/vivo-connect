import { spawn } from 'node:child_process';
import { ApiError } from './core.mjs';

export function renderQr(text) {
  return new Promise((resolve, reject) => {
    // Payload goes through stdin, so pairing credentials never appear in argv.
    const child = spawn(process.env.QRENCODE || 'qrencode', ['-t', 'SVG', '--inline', '-l', 'Q', '-m', '4', '-o', '-'], { stdio: ['pipe', 'pipe', 'pipe'] });
    const chunks = []; let size = 0, settled = false;
    const finish = (error, data) => { if (settled) return; settled = true; clearTimeout(timer); error ? reject(error) : resolve(data); };
    const timer = setTimeout(() => { child.kill(); finish(new ApiError(500, 'QR_RENDER_FAILED', '二维码生成超时')); }, 5000);
    child.on('error', () => finish(new ApiError(503, 'QR_RENDERER_MISSING', '请安装 qrencode，或用 QRENCODE 指定可执行文件')));
    child.stdin.on('error', () => {}); child.stderr.resume();
    child.stdout.on('data', chunk => { size += chunk.length; if (size > 2*1024*1024) { child.kill(); finish(new Error('QR image too large')); } else chunks.push(chunk); });
    child.on('close', code => {
      if (code !== 0) return finish(new ApiError(500, 'QR_RENDER_FAILED', '二维码生成失败'));
      const svg = Buffer.concat(chunks); if (!svg.toString().includes('<svg')) return finish(new Error('Invalid QR SVG'));
      finish(null, 'data:image/svg+xml;base64,' + svg.toString('base64'));
    });
    child.stdin.end(text);
  });
}
