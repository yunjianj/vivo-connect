import test from 'node:test';
import assert from 'node:assert/strict';
import { Readable } from 'node:stream';
import { Transfers } from '../src/transfers.mjs';

const session = { id: 'phone', info: { innerRoot: '/storage/emulated/0' } };
const signal = () => new AbortController().signal;
const jsonStream = value => Readable.from([Buffer.from(JSON.stringify(value))]);

test('download size accepts the phone top-level dataList response', async () => {
  const transfers = new Transfers({}, { files: async () => ({ dataList: [
    { savePath: '/storage/emulated/0/example.txt', fileSize: 123, isDirectory: false }
  ], totalCount: 1 }) });
  assert.equal(await transfers.downloadSize(session, ['/storage/emulated/0/example.txt'], signal()), 123);
});

test('download size includes files, recursive directory sizes, and zero-byte files across parent directories', async () => {
  const listings = [], sizes = [];
  const phones = {
    files: async (id, params) => {
      assert.equal(id, 'phone'); listings.push(params.data);
      if (params.data === '/') return { code: '0000', data: JSON.stringify({ dataList: [
        { savePath: '/storage/emulated/0/a.txt', fileSize: '123' },
        { savePath: '/storage/emulated/0/empty', fileSize: 0 },
        { savePath: '/storage/emulated/0/folder', isDirectory: true, fileSize: 0 }
      ] }) };
      return { code: '0000', data: [{ savePath: '/sdcard/Download/b.txt', fileSize: 77 }] };
    },
    stream: async (_s, route, options) => {
      sizes.push(new URL(route, 'http://phone').searchParams.get('path'));
      assert(options.signal);
      return jsonStream({ code: '0000', data: { size: '1000' } });
    }
  };
  const transfers = new Transfers({}, phones);
  assert.equal(await transfers.downloadSize(session, ['/sdcard/a.txt', '/sdcard/empty', '/sdcard/folder', '/sdcard/Download/b.txt'], signal()), 1200);
  assert.deepEqual(listings, ['/', '/storage/emulated/0/Download']);
  assert.deepEqual(sizes, ['/storage/emulated/0/folder']);
});

test('download metadata lookup follows pagination before concluding a file is missing', async () => {
  const pages = [];
  const transfers = new Transfers({}, { files: async (_id, params) => {
    pages.push(params.pageIndex);
    return { data: { dataList: params.pageIndex === 0 ? Array.from({ length: 200 }, (_, i) => ({ savePath: `/sdcard/f${i}`, fileSize: 1 })) : [{ savePath: '/sdcard/target', fileSize: 42 }] } };
  } });
  assert.equal(await transfers.downloadSize(session, ['/sdcard/target'], signal()), 42);
  assert.deepEqual(pages, [0, 1]);
});

test('unknown, invalid, or oversized metadata cannot silently become a zero-byte progress denominator', async () => {
  for (const fileSize of [undefined, -1, 'not a size', Number.MAX_SAFE_INTEGER]) {
    const transfers = new Transfers({}, { files: async () => ({ data: [{ savePath: '/sdcard/a', fileSize }] }) });
    await assert.rejects(transfers.downloadSize(session, ['/sdcard/a'], signal()), { code: fileSize === Number.MAX_SAFE_INTEGER ? 'TRANSFER_TOO_LARGE' : 'DOWNLOAD_SIZE_UNKNOWN' });
  }
  const transfers = new Transfers({}, { files: async () => ({ data: [] }) });
  await assert.rejects(transfers.downloadSize(session, ['/sdcard/missing'], signal()), { code: 'DOWNLOAD_FILE_NOT_FOUND' });
  await assert.rejects(transfers.downloadSize(session, ['/sdcard/a', '/storage/emulated/0/a'], signal()), { code: 'INVALID_ARGUMENT' });
  await assert.rejects(transfers.downloadSize(session, ['/sdcard/a', '/sdcard/a/b'], signal()), { code: 'INVALID_ARGUMENT' });
  const controller = new AbortController(); controller.abort(new Error('cancelled'));
  await assert.rejects(transfers.downloadSize(session, ['/sdcard/a'], controller.signal), /cancelled/);
});
