// analysis/pretty/main.js:27509; webpack module 223
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BaseUpdater = void 0;
    const r = n(10), i = n(324);
    class o extends i.AppUpdater {
        constructor(e, t) {
            super(e, t), this.quitAndInstallCalled = !1, this.quitHandlerAdded = !1;
        }
        quitAndInstall(e = !1, t = !1) {
            this._logger.info("Install on explicit quitAndInstall");
            this.install(e, e ? t : this.autoRunAppAfterInstall) ? setImmediate(() => {
                n(2).autoUpdater.emit("before-quit-for-update"), this.app.quit();
            }) : this.quitAndInstallCalled = !1;
        }
        executeDownload(e) {
            return super.executeDownload({
                ...e,
                done: e => (this.dispatchUpdateDownloaded(e), this.addQuitHandler(), Promise.resolve())
            });
        }
        get installerPath() {
            return null == this.downloadedUpdateHelper ? null : this.downloadedUpdateHelper.file;
        }
        install(e = !1, t = !1) {
            if (this.quitAndInstallCalled) return this._logger.warn("install call ignored: quitAndInstallCalled is set to true"), 
            !1;
            const n = this.downloadedUpdateHelper, r = this.installerPath, i = null == n ? null : n.downloadedFileInfo;
            if (null == r || null == i) return this.dispatchError(new Error("No update filepath provided, can't quit and install")), 
            !1;
            this.quitAndInstallCalled = !0;
            try {
                return this._logger.info(`Install: isSilent: ${e}, isForceRunAfter: ${t}`), this.doInstall({
                    isSilent: e,
                    isForceRunAfter: t,
                    isAdminRightsRequired: i.isAdminRightsRequired
                });
            } catch (e) {
                return this.dispatchError(e), !1;
            }
        }
        addQuitHandler() {
            !this.quitHandlerAdded && this.autoInstallOnAppQuit && (this.quitHandlerAdded = !0, 
            this.app.onQuit(e => {
                this.quitAndInstallCalled ? this._logger.info("Update installer has already been triggered. Quitting application.") : this.autoInstallOnAppQuit ? 0 === e ? (this._logger.info("Auto install update on quit"), 
                this.install(!0, !1)) : this._logger.info("Update will be not installed on quit because application is quitting with exit code " + e) : this._logger.info("Update will not be installed on quit because autoInstallOnAppQuit is set to false.");
            }));
        }
        spawnSyncLog(e, t = [], n = {}) {
            this._logger.info(`Executing: ${e} with args: ${t}`);
            const i = (0, r.spawnSync)(e, t, {
                env: {
                    ...process.env,
                    ...n
                },
                encoding: "utf-8",
                shell: !0
            }), {error: o, status: a, stdout: s, stderr: l} = i;
            if (null != o) throw this._logger.error(l), o;
            if (null != a && 0 !== a) throw this._logger.error(l), new Error(`Command ${e} exited with code ${a}`);
            return s.trim();
        }
        async spawnLog(e, t = [], n, i = "ignore") {
            return this._logger.info(`Executing: ${e} with args: ${t}`), new Promise((o, a) => {
                try {
                    const s = {
                        stdio: i,
                        env: n,
                        detached: !0
                    }, l = (0, r.spawn)(e, t, s);
                    l.on("error", e => {
                        a(e);
                    }), l.unref(), void 0 !== l.pid && o(!0);
                } catch (e) {
                    a(e);
                }
            });
        }
    }
    t.BaseUpdater = o;
}
