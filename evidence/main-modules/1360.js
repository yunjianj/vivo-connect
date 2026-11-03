// analysis/pretty/main.js:101295; webpack module 1360
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DownloadedUpdateHelper = void 0, t.createTempUpdateFile = async function(e, t, n) {
        let r = 0, i = s.join(t, e);
        for (let o = 0; o < 3; o++) try {
            return await (0, a.unlink)(i), i;
        } catch (o) {
            if ("ENOENT" === o.code) return i;
            n.warn("Error on remove temp update file: " + o), i = s.join(t, `${r++}-${e}`);
        }
        return i;
    };
    const r = n(7), i = n(4), o = n(1361), a = n(93), s = n(1);
    t.DownloadedUpdateHelper = class {
        constructor(e) {
            this.cacheDir = e, this._file = null, this._packageFile = null, this.versionInfo = null, 
            this.fileInfo = null, this._downloadedFileInfo = null;
        }
        get downloadedFileInfo() {
            return this._downloadedFileInfo;
        }
        get file() {
            return this._file;
        }
        get packageFile() {
            return this._packageFile;
        }
        get cacheDirForPendingUpdate() {
            return s.join(this.cacheDir, "pending");
        }
        async validateDownloadedPath(e, t, n, r) {
            if (null != this.versionInfo && this.file === e && null != this.fileInfo) return o(this.versionInfo, t) && o(this.fileInfo.info, n.info) && await (0, 
            a.pathExists)(e) ? e : null;
            const i = await this.getValidCachedUpdateFile(n, r);
            return null === i ? null : (r.info(`Update has already been downloaded to ${e}).`), 
            this._file = i, i);
        }
        async setDownloadedFile(e, t, n, r, i, o) {
            this._file = e, this._packageFile = t, this.versionInfo = n, this.fileInfo = r, 
            this._downloadedFileInfo = {
                fileName: i,
                sha512: r.info.sha512,
                isAdminRightsRequired: !0 === r.info.isAdminRightsRequired
            }, o && await (0, a.outputJson)(this.getUpdateInfoFile(), this._downloadedFileInfo);
        }
        async clear() {
            this._file = null, this._packageFile = null, this.versionInfo = null, this.fileInfo = null, 
            await this.cleanCacheDirForPendingUpdate();
        }
        async cleanCacheDirForPendingUpdate() {
            try {
                await (0, a.emptyDir)(this.cacheDirForPendingUpdate);
            } catch (e) {}
        }
        async getValidCachedUpdateFile(e, t) {
            const n = this.getUpdateInfoFile();
            if (!await (0, a.pathExists)(n)) return null;
            let o;
            try {
                o = await (0, a.readJson)(n);
            } catch (e) {
                let n = "No cached update info available";
                return "ENOENT" !== e.code && (await this.cleanCacheDirForPendingUpdate(), n += ` (error on read: ${e.message})`), 
                t.info(n), null;
            }
            if (!(null !== (null == o ? void 0 : o.fileName))) return t.warn("Cached update info is corrupted: no fileName, directory for cached update will be cleaned"), 
            await this.cleanCacheDirForPendingUpdate(), null;
            if (e.info.sha512 !== o.sha512) return t.info(`Cached update sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${o.sha512}, expected: ${e.info.sha512}. Directory for cached update will be cleaned`), 
            await this.cleanCacheDirForPendingUpdate(), null;
            const l = s.join(this.cacheDirForPendingUpdate, o.fileName);
            if (!await (0, a.pathExists)(l)) return t.info("Cached update file doesn't exist"), 
            null;
            const c = await function(e, t = "sha512", n = "base64", o) {
                return new Promise((a, s) => {
                    const l = (0, r.createHash)(t);
                    l.on("error", s).setEncoding(n), (0, i.createReadStream)(e, {
                        ...o,
                        highWaterMark: 1048576
                    }).on("error", s).on("end", () => {
                        l.end(), a(l.read());
                    }).pipe(l, {
                        end: !1
                    });
                });
            }(l);
            return e.info.sha512 !== c ? (t.warn(`Sha512 checksum doesn't match the latest available update. New update must be downloaded. Cached: ${c}, expected: ${e.info.sha512}`), 
            await this.cleanCacheDirForPendingUpdate(), null) : (this._downloadedFileInfo = o, 
            l);
        }
        getUpdateInfoFile() {
            return s.join(this.cacheDirForPendingUpdate, "update-info.json");
        }
    };
}
