// analysis/pretty/main.js:61461; webpack module 681
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NsisUpdater = void 0;
    const r = n(36), i = n(1), o = n(223), a = n(676), s = n(107), l = n(54), c = n(93), u = n(1373), d = n(15);
    class h extends o.BaseUpdater {
        constructor(e, t) {
            super(e, t), this._verifyUpdateCodeSignature = (e, t) => (0, u.verifySignature)(e, t, this._logger);
        }
        get verifyUpdateCodeSignature() {
            return this._verifyUpdateCodeSignature;
        }
        set verifyUpdateCodeSignature(e) {
            e && (this._verifyUpdateCodeSignature = e);
        }
        doDownloadUpdate(e) {
            const t = e.updateInfoAndProvider.provider, n = (0, l.findFile)(t.resolveFiles(e.updateInfoAndProvider.info), "exe");
            return this.executeDownload({
                fileExtension: "exe",
                downloadUpdateOptions: e,
                fileInfo: n,
                task: async (i, o, a, s) => {
                    const l = n.packageInfo, u = null != l && null != a;
                    if (u && e.disableWebInstaller) throw (0, r.newError)(`Unable to download new version ${e.updateInfoAndProvider.info.version}. Web Installers are disabled`, "ERR_UPDATER_WEB_INSTALLER_DISABLED");
                    u || e.disableWebInstaller || this._logger.warn("disableWebInstaller is set to false, you should set it to true if you do not plan on using a web installer. This will default to true in a future version."), 
                    (u || e.disableDifferentialDownload || await this.differentialDownloadInstaller(n, e, i, t, r.CURRENT_APP_INSTALLER_FILE_NAME)) && await this.httpExecutor.download(n.url, i, o);
                    const h = await this.verifySignature(i);
                    if (null != h) throw await s(), (0, r.newError)(`New version ${e.updateInfoAndProvider.info.version} is not signed by the application owner: ${h}`, "ERR_UPDATER_INVALID_SIGNATURE");
                    if (u && await this.differentialDownloadWebPackage(e, l, a, t)) try {
                        await this.httpExecutor.download(new d.URL(l.path), a, {
                            headers: e.requestHeaders,
                            cancellationToken: e.cancellationToken,
                            sha512: l.sha512
                        });
                    } catch (e) {
                        try {
                            await (0, c.unlink)(a);
                        } catch (e) {}
                        throw e;
                    }
                }
            });
        }
        async verifySignature(e) {
            let t;
            try {
                if (t = (await this.configOnDisk.value).publisherName, null == t) return null;
            } catch (e) {
                if ("ENOENT" === e.code) return null;
                throw e;
            }
            return await this._verifyUpdateCodeSignature(Array.isArray(t) ? t : [ t ], e);
        }
        doInstall(e) {
            const t = this.installerPath;
            if (null == t) return this.dispatchError(new Error("No update filepath provided, can't quit and install")), 
            !1;
            const r = [ "--updated" ];
            e.isSilent && r.push("/S"), e.isForceRunAfter && r.push("--force-run"), this.installDirectory && r.push("/D=" + this.installDirectory);
            const o = null == this.downloadedUpdateHelper ? null : this.downloadedUpdateHelper.packageFile;
            null != o && r.push("--package-file=" + o);
            const a = () => {
                this.spawnLog(i.join(process.resourcesPath, "elevate.exe"), [ t ].concat(r)).catch(e => this.dispatchError(e));
            };
            return e.isAdminRightsRequired ? (this._logger.info("isAdminRightsRequired is set to true, run installer using elevate.exe"), 
            a(), !0) : (this.spawnLog(t, r).catch(e => {
                const r = e.code;
                this._logger.info(`Cannot run installer: error code: ${r}, error message: "${e.message}", will be executed again using elevate if EACCES, and will try to use electron.shell.openItem if ENOENT`), 
                "UNKNOWN" === r || "EACCES" === r ? a() : "ENOENT" === r ? n(2).shell.openPath(t).catch(e => this.dispatchError(e)) : this.dispatchError(e);
            }), !0);
        }
        async differentialDownloadWebPackage(e, t, n, o) {
            if (null == t.blockMapSize) return !0;
            try {
                const l = {
                    newUrl: new d.URL(t.path),
                    oldFile: i.join(this.downloadedUpdateHelper.cacheDir, r.CURRENT_APP_PACKAGE_FILE_NAME),
                    logger: this._logger,
                    newFile: n,
                    requestHeaders: this.requestHeaders,
                    isUseMultipleRangeRequest: o.isUseMultipleRangeRequest,
                    cancellationToken: e.cancellationToken
                };
                this.listenerCount(s.DOWNLOAD_PROGRESS) > 0 && (l.onProgress = e => this.emit(s.DOWNLOAD_PROGRESS, e)), 
                await new a.FileWithEmbeddedBlockMapDifferentialDownloader(t, this.httpExecutor, l).download();
            } catch (e) {
                return this._logger.error("Cannot download differentially, fallback to full download: " + (e.stack || e)), 
                "win32" === process.platform;
            }
            return !1;
        }
    }
    t.NsisUpdater = h;
}
