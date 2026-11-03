// analysis/pretty/main.js:61268; webpack module 679
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RpmUpdater = void 0;
    const r = n(107), i = n(54), o = n(334);
    class a extends o.LinuxUpdater {
        constructor(e, t) {
            super(e, t);
        }
        doDownloadUpdate(e) {
            const t = e.updateInfoAndProvider.provider, n = (0, i.findFile)(t.resolveFiles(e.updateInfoAndProvider.info), "rpm", [ "AppImage", "deb", "pacman" ]);
            return this.executeDownload({
                fileExtension: "rpm",
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
            const n = this.detectPackageManager([ "zypper", "dnf", "yum", "rpm" ]);
            try {
                a.installWithCommandRunner(n, t, this.runCommandWithSudoIfNeeded.bind(this), this._logger);
            } catch (e) {
                return this.dispatchError(e), !1;
            }
            return e.isForceRunAfter && this.app.relaunch(), !0;
        }
        static installWithCommandRunner(e, t, n, r) {
            if ("zypper" === e) return n([ "zypper", "--non-interactive", "--no-refresh", "install", "--allow-unsigned-rpm", "-f", t ]);
            if ("dnf" === e) return n([ "dnf", "install", "--nogpgcheck", "-y", t ]);
            if ("yum" === e) return n([ "yum", "install", "--nogpgcheck", "-y", t ]);
            if ("rpm" === e) return r.warn("Installing with rpm only (no dependency resolution)."), 
            n([ "rpm", "-Uvh", "--replacepkgs", "--replacefiles", "--nodeps", t ]);
            throw new Error(`Package manager ${e} not supported`);
        }
    }
    t.RpmUpdater = a;
}
