import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { Readable } from 'node:stream';
import { sha256, Transfers } from '../src/transfers.mjs';

const session = { id: 'phone', info: { innerRoot: '/storage/emulated/0' } };
const signal = () => new AbortController().signal;
const jsonStream = value => Readable.from([Buffer.from(JSON.stringify(value))]);

test('download size accepts the phone top-level dataList response', async () => {
  const transfers = new Transfers({}, { files: async () => ({ dataList: [
    { savePath: '/storage/emulated/0/example.txt', fileSize: 123, isDirectory: false }
  ], totalCount: 1 }) });
  assert.equal((await transfers.downloadSelection(session, ['/storage/emulated/0/example.txt'], signal())).totalSize, 123);
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
  assert.deepEqual(await transfers.downloadSelection(session, ['/sdcard/a.txt', '/sdcard/empty', '/sdcard/folder', '/sdcard/Download/b.txt'], signal()), {
    totalSize: 1200, downloadList: ['/sdcard/a.txt', '/sdcard/empty', '/sdcard/Download/b.txt'], dirList: ['/sdcard/folder']
  });
  assert.deepEqual(listings, ['/', '/storage/emulated/0/Download']);
  assert.deepEqual(sizes, ['/storage/emulated/0/folder']);
});

test('download metadata lookup follows pagination before concluding a file is missing', async () => {
  const pages = [];
  const transfers = new Transfers({}, { files: async (_id, params) => {
    pages.push(params.pageIndex);
    return { data: { dataList: params.pageIndex === 0 ? Array.from({ length: 200 }, (_, i) => ({ savePath: `/sdcard/f${i}`, fileSize: 1 })) : [{ savePath: '/sdcard/target', fileSize: 42 }] } };
  } });
  assert.equal((await transfers.downloadSelection(session, ['/sdcard/target'], signal())).totalSize, 42);
  assert.deepEqual(pages, [0, 1]);
});

test('unknown, invalid, or oversized metadata cannot silently become a zero-byte progress denominator', async () => {
  for (const fileSize of [undefined, -1, 'not a size', Number.MAX_SAFE_INTEGER]) {
    const transfers = new Transfers({}, { files: async () => ({ data: [{ savePath: '/sdcard/a', fileSize }] }) });
    await assert.rejects(transfers.downloadSelection(session, ['/sdcard/a'], signal()), { code: fileSize === Number.MAX_SAFE_INTEGER ? 'TRANSFER_TOO_LARGE' : 'DOWNLOAD_SIZE_UNKNOWN' });
  }
  const transfers = new Transfers({}, { files: async () => ({ data: [] }) });
  await assert.rejects(transfers.downloadSelection(session, ['/sdcard/missing'], signal()), { code: 'DOWNLOAD_FILE_NOT_FOUND' });
  await assert.rejects(transfers.downloadSelection(session, ['/sdcard/a', '/storage/emulated/0/a'], signal()), { code: 'INVALID_ARGUMENT' });
  await assert.rejects(transfers.downloadSelection(session, ['/sdcard/a', '/sdcard/a/b'], signal()), { code: 'INVALID_ARGUMENT' });
  const controller = new AbortController(); controller.abort(new Error('cancelled'));
  await assert.rejects(transfers.downloadSelection(session, ['/sdcard/a'], controller.signal), /cancelled/);
});

test('receives populated directories with nonzero TAR directory sizes or a zero preflight total', async t => {
  const state = { dir: await fs.mkdtemp(path.join(os.tmpdir(), 'vivo-directory-test-')) };
  t.after(() => fs.rm(state.dir, { recursive: true, force: true }));
  const source = path.join(state.dir, 'source');
  const folder = '测试目录';
  const phoneFolder = '/sdcard/' + folder;
  const phoneFile = '/sdcard/extra.txt';
  await fs.mkdir(path.join(source, folder, '子目录'), { recursive: true });
  await fs.mkdir(path.join(source, folder, '空目录'));
  const nested = `${folder}/子目录/内容.txt`;
  await fs.writeFile(path.join(source, nested), 'content');
  await fs.writeFile(path.join(source, 'extra.txt'), 'extra');

  for (const mixed of [false, true]) {
    const job = { id: mixed ? 'mixed' : 'directory', bytes: 0 };
    const files = mixed ? ['extra.txt'] : [];
    const expectedSize = mixed ? 12 : 7;
    const archive = execFileSync('/usr/bin/tar', ['--format=ustar', '-cf', '-', '-C', source, folder, ...files]);
    // vivo includes the directory's stat size in the header with no directory payload.
    assert.equal(archive[156], '5'.charCodeAt(0));
    archive.write('00000006574\0', 124, 'ascii');
    archive.fill(0x20, 148, 156);
    const checksum = archive.subarray(0, 512).reduce((sum, byte) => sum + byte, 0);
    archive.write(checksum.toString(8).padStart(6, '0') + '\0 ', 148, 'ascii');
    const notifications = [];
    let preflight;
    const transfers = new Transfers(state, {
      get: () => ({ ...session, status: 'connected' }),
      files: async () => ({ data: [
        { savePath: '/storage/emulated/0/' + folder, isDirectory: 'true', fileSize: 0 },
        { savePath: phoneFile, fileSize: 5 }
      ] }),
      json: async (_s, _route, body) => {
        preflight = body;
        if (body.dirList.length !== 1 || body.downloadList.includes(phoneFolder)) return { code: '0015' };
        return mixed ? { code: '0000', data: { totalCount: 5, totalSize: expectedSize } }
          : { totalCount: 5, totalSize: 0 };
      },
      stream: async (_s, route) => route.startsWith('/pc_file_manager/query_directory_size?')
        ? jsonStream({ code: '0000', data: { size: mixed ? 6 : 7 } }) : Readable.from([archive]),
      transferResult: async (_s, result, data) => notifications.push({ result, data })
    });
    const paths = mixed ? [phoneFolder, phoneFile] : [phoneFolder];
    const result = await transfers.download('phone', { paths }, job, signal());
    assert.deepEqual(preflight.dirList, [phoneFolder]);
    assert.deepEqual(preflight.downloadList, mixed ? [phoneFile] : []);
    assert.equal(preflight.isDir, true);
    assert.equal(preflight.total, mixed ? expectedSize - 1 : expectedSize);
    assert.equal(result.totalSize, expectedSize);
    assert.equal(result.files.find(file => file.path === nested).sha256, await sha256(path.join(source, nested)));
    assert.equal(await fs.readFile(path.join(result.directory, nested), 'utf8'), 'content');
    if (mixed) assert.equal(await fs.readFile(path.join(result.directory, 'extra.txt'), 'utf8'), 'extra');
    assert.deepEqual(await fs.readdir(path.join(result.directory, folder, '空目录')), []);
    assert.deepEqual(notifications, [{ result: 'success', data: { successCount: 5, id: job.id } }]);
  }
});
