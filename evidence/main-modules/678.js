// analysis/pretty/main.js:61220; webpack module 678
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PacmanUpdater = void 0;
    const r = n(107), i = n(54), o = n(334);
    class a extends o.LinuxUpdater {
        constructor(e, t) {
            super(e, t);
        }
        doDownloadUpdate(e) {
            const t = e.updateInfoAndProvider.provider, n = (0, i.findFile)(t.resolveFiles(e.updateInfoAndProvider.info), "pacman", [ "AppImage", "deb", "rpm" ]);
            return this.executeDownload({
                fileExtension: "pacman",
                fileInfo: n,
                downloadUpdateOptions: e,
                task: async (e, t) => {
                    this.listenerCount(r.DOWNLOAD_PROGRESS) > 0 && (t.onProgress = e => this.emit(r.DOWNLOAD_PROGRESS, e)), 
                    await this.httpExecutor.download(n.url, e, t);
                }
            });
        }
        doInstall(e) {
            const t = this.installerPath;
            if (null == t) return this.dispatchError(new Error("No update filepath provided, can't quit and install")), 
            !1;
            try {
                a.installWithCommandRunner(t, this.runCommandWithSudoIfNeeded.bind(this), this._logger);
            } catch (e) {
                return this.dispatchError(e), !1;
            }
            return e.isForceRunAfter && this.app.relaunch(), !0;
        }
        static installWithCommandRunner(e, t, n) {
            var r;
            try {
                t([ "pacman", "-U", "--noconfirm", e ]);
            } catch (i) {
                n.warn(null !== (r = i.message) && void 0 !== r ? r : i), n.warn("pacman installation failed, attempting to update package database and retry");
                try {
                    t([ "pacman", "-Sy", "--noconfirm" ]), t([ "pacman", "-U", "--noconfirm", e ]);
                } catch (e) {
                    throw n.error("Retry after pacman -Sy failed"), e;
                }
            }
        }
    }
    t.PacmanUpdater = a;
}
