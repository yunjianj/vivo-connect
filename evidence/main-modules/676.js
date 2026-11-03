// analysis/pretty/main.js:61140; webpack module 676
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FileWithEmbeddedBlockMapDifferentialDownloader = void 0;
    const r = n(93), i = n(673), o = n(30);
    class a extends i.DifferentialDownloader {
        async download() {
            const e = this.blockAwareFileInfo, t = e.size, n = t - (e.blockMapSize + 4);
            this.fileMetadataBuffer = await this.readRemoteBytes(n, t - 1);
            const i = s(this.fileMetadataBuffer.slice(0, this.fileMetadataBuffer.length - 4));
            await this.doDownload(await async function(e) {
                const t = await (0, r.open)(e, "r");
                try {
                    const e = (await (0, r.fstat)(t)).size, n = Buffer.allocUnsafe(4);
                    await (0, r.read)(t, n, 0, n.length, e - n.length);
                    const i = Buffer.allocUnsafe(n.readUInt32BE(0));
                    return await (0, r.read)(t, i, 0, i.length, e - n.length - i.length), await (0, 
                    r.close)(t), s(i);
                } catch (e) {
                    throw await (0, r.close)(t), e;
                }
            }(this.options.oldFile), i);
        }
    }
    function s(e) {
        return JSON.parse((0, o.inflateRawSync)(e).toString());
    }
    t.FileWithEmbeddedBlockMapDifferentialDownloader = a;
}
