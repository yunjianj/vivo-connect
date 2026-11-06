import test from 'node:test';
import assert from 'node:assert/strict';
import { renderQr } from '../src/qr.mjs';

// qrencode is an explicit UI dependency, not a network QR service.
test('actual QR renderer creates a self-contained SVG from stdin',async()=>{
 const image=await renderQr('https://example.invalid/vivo-offline-test');
 assert(image.startsWith('data:image/svg+xml;base64,'));
 const svg=Buffer.from(image.split(',')[1],'base64').toString();assert(svg.includes('<svg'));assert(!svg.includes('<script'));
});

