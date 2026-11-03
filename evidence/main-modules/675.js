// analysis/pretty/main.js:61072; webpack module 675
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AppImageUpdater = void 0;
    const r = n(36), i = n(10), o = n(93), a = n(4), s = n(1), l = n(223), c = n(676), u = n(54), d = n(107);
    class h extends l.BaseUpdater {
        constructor(e, t) {
            super(e, t);
        }
        isUpdaterActive() {
            return null != process.env.APPIMAGE || this.forceDevUpdateConfig ? super.isUpdaterActive() : (null == process.env.SNAP ? this._logger.warn("APPIMAGE env is not defined, current application is not an AppImage") : this._logger.info("SNAP env is defined, updater is disabled"), 
            !1);
        }
        doDownloadUpdate(e) {
            const t = e.updateInfoAndProvider.provider, n = (0, u.findFile)(t.resolveFiles(e.updateInfoAndProvider.info), "AppImage", [ "rpm", "deb", "pacman" ]);
            return this.executeDownload({
                fileExtension: "AppImage",
                fileInfo: n,
                downloadUpdateOptions: e,
                task: async (i, a) => {
                    const s = process.env.APPIMAGE;
                    if (null == s) throw (0, r.newError)("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
                    (e.disableDifferentialDownload || await this.downloadDifferential(n, s, i, t, e)) && await this.httpExecutor.download(n.url, i, a), 
                    await (0, o.chmod)(i, 493);
                }
            });
        }
        async downloadDifferential(e, t, n, r, i) {
            try {
                const o = {
                    newUrl: e.url,
                    oldFile: t,
                    logger: this._logger,
                    newFile: n,
                    isUseMultipleRangeRequest: r.isUseMultipleRangeRequest,
                    requestHeaders: i.requestHeaders,
                    cancellationToken: i.cancellationToken
                };
                return this.listenerCount(d.DOWNLOAD_PROGRESS) > 0 && (o.onProgress = e => this.emit(d.DOWNLOAD_PROGRESS, e)), 
                await new c.FileWithEmbeddedBlockMapDifferentialDownloader(e.info, this.httpExecutor, o).download(), 
                !1;
            } catch (e) {
                return this._logger.error("Cannot download differentially, fallback to full download: " + (e.stack || e)), 
                "linux" === process.platform;
            }
        }
        doInstall(e) {
            const t = process.env.APPIMAGE;
            if (null == t) throw (0, r.newError)("APPIMAGE env is not defined", "ERR_UPDATER_OLD_FILE_NOT_FOUND");
            let n;
            (0, a.unlinkSync)(t);
            const o = s.basename(t), l = this.installerPath;
            if (null == l) return this.dispatchError(new Error("No update filepath provided, can't quit and install")), 
            !1;
            n = s.basename(l) !== o && /\d+\.\d+\.\d+/.test(o) ? s.join(s.dirname(t), s.basename(l)) : t, 
            (0, i.execFileSync)("mv", [ "-f", l, n ]), n !== t && this.emit("appimage-filename-updated", n);
            const c = {
                ...process.env,
                APPIMAGE_SILENT_INSTALL: "true"
            };
            return e.isForceRunAfter ? this.spawnLog(n, [], c) : (c.APPIMAGE_EXIT_AFTER_INSTALL = "true", 
            (0, i.execFileSync)(n, [], {
                env: c
            })), !0;
        }
    }
    t.AppImageUpdater = h;
}
