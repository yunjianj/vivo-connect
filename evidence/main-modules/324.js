// analysis/pretty/main.js:34458; webpack module 324
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NoOpLogger = t.AppUpdater = void 0;
    const r = n(36), i = n(7), o = n(8), a = n(12), s = n(93), l = n(326), c = n(1335), u = n(1), d = n(665), h = n(1360), p = n(1362), f = n(1364), _ = n(670), m = n(1365), g = n(30), v = n(1370), y = n(107);
    class E extends a.EventEmitter {
        get channel() {
            return this._channel;
        }
        set channel(e) {
            if (null != this._channel) {
                if ("string" != typeof e) throw (0, r.newError)("Channel must be a string, but got: " + e, "ERR_UPDATER_INVALID_CHANNEL");
                if (0 === e.length) throw (0, r.newError)("Channel must be not an empty string", "ERR_UPDATER_INVALID_CHANNEL");
            }
            this._channel = e, this.allowDowngrade = !0;
        }
        addAuthHeader(e) {
            this.requestHeaders = Object.assign({}, this.requestHeaders, {
                authorization: e
            });
        }
        get netSession() {
            return (0, f.getNetSession)();
        }
        get logger() {
            return this._logger;
        }
        set logger(e) {
            this._logger = null == e ? new b : e;
        }
        set updateConfigPath(e) {
            this.clientPromise = null, this._appUpdateConfigPath = e, this.configOnDisk = new c.Lazy(() => this.loadUpdateConfig());
        }
        get isUpdateSupported() {
            return this._isUpdateSupported;
        }
        set isUpdateSupported(e) {
            e && (this._isUpdateSupported = e);
        }
        get isUserWithinRollout() {
            return this._isUserWithinRollout;
        }
        set isUserWithinRollout(e) {
            e && (this._isUserWithinRollout = e);
        }
        constructor(e, t) {
            super(), this.autoDownload = !0, this.autoInstallOnAppQuit = !0, this.autoRunAppAfterInstall = !0, 
            this.allowPrerelease = !1, this.fullChangelog = !1, this.allowDowngrade = !1, this.disableWebInstaller = !1, 
            this.disableDifferentialDownload = !1, this.forceDevUpdateConfig = !1, this.previousBlockmapBaseUrlOverride = null, 
            this._channel = null, this.downloadedUpdateHelper = null, this.requestHeaders = null, 
            this._logger = console, this.signals = new y.UpdaterSignal(this), this._appUpdateConfigPath = null, 
            this._isUpdateSupported = e => this.checkIfUpdateSupported(e), this._isUserWithinRollout = e => this.isStagingMatch(e), 
            this.clientPromise = null, this.stagingUserIdPromise = new c.Lazy(() => this.getOrCreateStagingUserId()), 
            this.configOnDisk = new c.Lazy(() => this.loadUpdateConfig()), this.checkForUpdatesPromise = null, 
            this.downloadPromise = null, this.updateInfoAndProvider = null, this._testOnlyOptions = null, 
            this.on("error", e => {
                this._logger.error("Error: " + (e.stack || e.message));
            }), null == t ? (this.app = new p.ElectronAppAdapter, this.httpExecutor = new f.ElectronHttpExecutor((e, t) => this.emit("login", e, t))) : (this.app = t, 
            this.httpExecutor = null);
            const n = this.app.version, i = (0, d.parse)(n);
            if (null == i) throw (0, r.newError)(`App version is not a valid semver version: "${n}"`, "ERR_UPDATER_INVALID_VERSION");
            this.currentVersion = i, this.allowPrerelease = function(e) {
                const t = (0, d.prerelease)(e);
                return null != t && t.length > 0;
            }(i), null != e && (this.setFeedURL(e), "string" != typeof e && e.requestHeaders && (this.requestHeaders = e.requestHeaders));
        }
        getFeedURL() {
            return "Deprecated. Do not use it.";
        }
        setFeedURL(e) {
            const t = this.createProviderRuntimeOptions();
            let n;
            n = "string" == typeof e ? new _.GenericProvider({
                provider: "generic",
                url: e
            }, this, {
                ...t,
                isUseMultipleRangeRequest: (0, m.isUrlProbablySupportMultiRangeRequests)(e)
            }) : (0, m.createClient)(e, this, t), this.clientPromise = Promise.resolve(n);
        }
        checkForUpdates() {
            if (!this.isUpdaterActive()) return Promise.resolve(null);
            let e = this.checkForUpdatesPromise;
            if (null != e) return this._logger.info("Checking for update (already in progress)"), 
            e;
            const t = () => this.checkForUpdatesPromise = null;
            return this._logger.info("Checking for update"), e = this.doCheckForUpdates().then(e => (t(), 
            e)).catch(e => {
                throw t(), this.emit("error", e, "Cannot check for updates: " + (e.stack || e).toString()), 
                e;
            }), this.checkForUpdatesPromise = e, e;
        }
        isUpdaterActive() {
            return !(!this.app.isPackaged && !this.forceDevUpdateConfig) || (this._logger.info("Skip checkForUpdates because application is not packed and dev update config is not forced"), 
            !1);
        }
        checkForUpdatesAndNotify(e) {
            return this.checkForUpdates().then(t => (null == t ? void 0 : t.downloadPromise) ? (t.downloadPromise.then(() => {
                const r = E.formatDownloadNotification(t.updateInfo.version, this.app.name, e);
                new (n(2).Notification)(r).show();
            }), t) : (null != this._logger.debug && this._logger.debug("checkForUpdatesAndNotify called, downloadPromise is null"), 
            t));
        }
        static formatDownloadNotification(e, t, n) {
            return null == n && (n = {
                title: "A new update is ready to install",
                body: "{appName} version {version} has been downloaded and will be automatically installed on exit"
            }), n = {
                title: n.title.replace("{appName}", t).replace("{version}", e),
                body: n.body.replace("{appName}", t).replace("{version}", e)
            };
        }
        async isStagingMatch(e) {
            const t = e.stagingPercentage;
            let n = t;
            if (null == n) return !0;
            if (n = parseInt(n, 10), isNaN(n)) return this._logger.warn("Staging percentage is NaN: " + t), 
            !0;
            n /= 100;
            const i = await this.stagingUserIdPromise.value, o = r.UUID.parse(i).readUInt32BE(12) / 4294967295;
            return this._logger.info(`Staging percentage: ${n}, percentage: ${o}, user id: ${i}`), 
            o < n;
        }
        computeFinalHeaders(e) {
            return null != this.requestHeaders && Object.assign(e, this.requestHeaders), e;
        }
        async isUpdateAvailable(e) {
            const t = (0, d.parse)(e.version);
            if (null == t) throw (0, r.newError)(`This file could not be downloaded, or the latest version (from update server) does not have a valid semver version: "${e.version}"`, "ERR_UPDATER_INVALID_VERSION");
            const n = this.currentVersion;
            if ((0, d.eq)(t, n)) return !1;
            if (!await Promise.resolve(this.isUpdateSupported(e))) return !1;
            if (!await Promise.resolve(this.isUserWithinRollout(e))) return !1;
            const i = (0, d.gt)(t, n), o = (0, d.lt)(t, n);
            return !!i || this.allowDowngrade && o;
        }
        checkIfUpdateSupported(e) {
            const t = null == e ? void 0 : e.minimumSystemVersion, n = (0, o.release)();
            if (t) try {
                if ((0, d.lt)(n, t)) return this._logger.info(`Current OS version ${n} is less than the minimum OS version required ${t} for version ${n}`), 
                !1;
            } catch (e) {
                this._logger.warn(`Failed to compare current OS version(${n}) with minimum OS version(${t}): ${(e.message || e).toString()}`);
            }
            return !0;
        }
        async getUpdateInfoAndProvider() {
            await this.app.whenReady(), null == this.clientPromise && (this.clientPromise = this.configOnDisk.value.then(e => (0, 
            m.createClient)(e, this, this.createProviderRuntimeOptions())));
            const e = await this.clientPromise, t = await this.stagingUserIdPromise.value;
            return e.setRequestHeaders(this.computeFinalHeaders({
                "x-user-staging-id": t
            })), {
                info: await e.getLatestVersion(),
                provider: e
            };
        }
        createProviderRuntimeOptions() {
            return {
                isUseMultipleRangeRequest: !0,
                platform: null == this._testOnlyOptions ? process.platform : this._testOnlyOptions.platform,
                executor: this.httpExecutor
            };
        }
        async doCheckForUpdates() {
            this.emit("checking-for-update");
            const e = await this.getUpdateInfoAndProvider(), t = e.info;
            if (!await this.isUpdateAvailable(t)) return this._logger.info(`Update for version ${this.currentVersion.format()} is not available (latest version: ${t.version}, downgrade is ${this.allowDowngrade ? "allowed" : "disallowed"}).`), 
            this.emit("update-not-available", t), {
                isUpdateAvailable: !1,
                versionInfo: t,
                updateInfo: t
            };
            this.updateInfoAndProvider = e, this.onUpdateAvailable(t);
            const n = new r.CancellationToken;
            return {
                isUpdateAvailable: !0,
                versionInfo: t,
                updateInfo: t,
                cancellationToken: n,
                downloadPromise: this.autoDownload ? this.downloadUpdate(n) : null
            };
        }
        onUpdateAvailable(e) {
            this._logger.info(`Found version ${e.version} (url: ${(0, r.asArray)(e.files).map(e => e.url).join(", ")})`), 
            this.emit("update-available", e);
        }
        downloadUpdate(e = new r.CancellationToken) {
            const t = this.updateInfoAndProvider;
            if (null == t) {
                const e = new Error("Please check update first");
                return this.dispatchError(e), Promise.reject(e);
            }
            if (null != this.downloadPromise) return this._logger.info("Downloading update (already in progress)"), 
            this.downloadPromise;
            this._logger.info("Downloading update from " + (0, r.asArray)(t.info.files).map(e => e.url).join(", "));
            const n = e => {
                if (!(e instanceof r.CancellationError)) try {
                    this.dispatchError(e);
                } catch (e) {
                    this._logger.warn("Cannot dispatch error event: " + (e.stack || e));
                }
                return e;
            };
            return this.downloadPromise = this.doDownloadUpdate({
                updateInfoAndProvider: t,
                requestHeaders: this.computeRequestHeaders(t.provider),
                cancellationToken: e,
                disableWebInstaller: this.disableWebInstaller,
                disableDifferentialDownload: this.disableDifferentialDownload
            }).catch(e => {
                throw n(e);
            }).finally(() => {
                this.downloadPromise = null;
            }), this.downloadPromise;
        }
        dispatchError(e) {
            this.emit("error", e, (e.stack || e).toString());
        }
        dispatchUpdateDownloaded(e) {
            this.emit(y.UPDATE_DOWNLOADED, e);
        }
        async loadUpdateConfig() {
            return null == this._appUpdateConfigPath && (this._appUpdateConfigPath = this.app.appUpdateConfigPath), 
            (0, l.load)(await (0, s.readFile)(this._appUpdateConfigPath, "utf-8"));
        }
        computeRequestHeaders(e) {
            const t = e.fileExtraDownloadHeaders;
            if (null != t) {
                const e = this.requestHeaders;
                return null == e ? t : {
                    ...t,
                    ...e
                };
            }
            return this.computeFinalHeaders({
                accept: "*/*"
            });
        }
        async getOrCreateStagingUserId() {
            const e = u.join(this.app.userDataPath, ".updaterId");
            try {
                const t = await (0, s.readFile)(e, "utf-8");
                if (r.UUID.check(t)) return t;
                this._logger.warn("Staging user id file exists, but content was invalid: " + t);
            } catch (e) {
                "ENOENT" !== e.code && this._logger.warn("Couldn't read staging user ID, creating a blank one: " + e);
            }
            const t = r.UUID.v5((0, i.randomBytes)(4096), r.UUID.OID);
            this._logger.info("Generated new staging user ID: " + t);
            try {
                await (0, s.outputFile)(e, t);
            } catch (e) {
                this._logger.warn("Couldn't write out staging user ID: " + e);
            }
            return t;
        }
        get isAddNoCacheQuery() {
            const e = this.requestHeaders;
            if (null == e) return !0;
            for (const t of Object.keys(e)) {
                const e = t.toLowerCase();
                if ("authorization" === e || "private-token" === e) return !1;
            }
            return !0;
        }
        async getOrCreateDownloadHelper() {
            let e = this.downloadedUpdateHelper;
            if (null == e) {
                const t = (await this.configOnDisk.value).updaterCacheDirName, n = this._logger;
                null == t && n.error("updaterCacheDirName is not specified in app-update.yml Was app build using at least electron-builder 20.34.0?");
                const r = u.join(this.app.baseCachePath, t || this.app.name);
                null != n.debug && n.debug("updater cache dir: " + r), e = new h.DownloadedUpdateHelper(r), 
                this.downloadedUpdateHelper = e;
            }
            return e;
        }
        async executeDownload(e) {
            const t = e.fileInfo, n = {
                headers: e.downloadUpdateOptions.requestHeaders,
                cancellationToken: e.downloadUpdateOptions.cancellationToken,
                sha2: t.info.sha2,
                sha512: t.info.sha512
            };
            this.listenerCount(y.DOWNLOAD_PROGRESS) > 0 && (n.onProgress = e => this.emit(y.DOWNLOAD_PROGRESS, e));
            const i = e.downloadUpdateOptions.updateInfoAndProvider.info, o = i.version, a = t.packageInfo;
            const l = await this.getOrCreateDownloadHelper(), c = l.cacheDirForPendingUpdate;
            await (0, s.mkdir)(c, {
                recursive: !0
            });
            const d = function() {
                const t = decodeURIComponent(e.fileInfo.url.pathname);
                return t.toLowerCase().endsWith("." + e.fileExtension.toLowerCase()) ? u.basename(t) : e.fileInfo.info.url;
            }();
            let p = u.join(c, d);
            const f = null == a ? null : u.join(c, `package-${o}${u.extname(a.path) || ".7z"}`), _ = async n => {
                await l.setDownloadedFile(p, f, i, t, d, n), await e.done({
                    ...i,
                    downloadedFile: p
                });
                const r = u.join(c, "current.blockmap");
                return await (0, s.pathExists)(r) && await (0, s.copyFile)(r, u.join(l.cacheDir, "current.blockmap")), 
                null == f ? [ p ] : [ p, f ];
            }, m = this._logger, g = await l.validateDownloadedPath(p, i, t, m);
            if (null != g) return p = g, await _(!1);
            const v = async () => (await l.clear().catch(() => {}), await (0, s.unlink)(p).catch(() => {})), E = await (0, 
            h.createTempUpdateFile)("temp-" + d, c, m);
            try {
                await e.task(E, n, f, v), await (0, r.retry)(() => (0, s.rename)(E, p), {
                    retries: 60,
                    interval: 500,
                    shouldRetry: e => !!(e instanceof Error && /^EBUSY:/.test(e.message)) || (m.warn("Cannot rename temp file to final file: " + (e.message || e.stack)), 
                    !1)
                });
            } catch (e) {
                throw await v(), e instanceof r.CancellationError && (m.info("cancelled"), this.emit("update-cancelled", i)), 
                e;
            }
            return m.info(`New version ${o} has been downloaded to ${p}`), await _(!0);
        }
        async differentialDownloadInstaller(e, t, n, r, i) {
            try {
                if (null != this._testOnlyOptions && !this._testOnlyOptions.isUseDifferentialDownload) return !0;
                const r = t.updateInfoAndProvider.provider, o = await r.getBlockMapFiles(e.url, this.app.version, t.updateInfoAndProvider.info.version, this.previousBlockmapBaseUrlOverride);
                this._logger.info(`Download block maps (old: "${o[0]}", new: ${o[1]})`);
                const a = async e => {
                    const n = await this.httpExecutor.downloadToBuffer(e, {
                        headers: t.requestHeaders,
                        cancellationToken: t.cancellationToken
                    });
                    if (null == n || 0 === n.length) throw new Error(`Blockmap "${e.href}" is empty`);
                    try {
                        return JSON.parse((0, g.gunzipSync)(n).toString());
                    } catch (t) {
                        throw new Error(`Cannot parse blockmap "${e.href}", error: ${t}`);
                    }
                }, l = {
                    newUrl: e.url,
                    oldFile: u.join(this.downloadedUpdateHelper.cacheDir, i),
                    logger: this._logger,
                    newFile: n,
                    isUseMultipleRangeRequest: r.isUseMultipleRangeRequest,
                    requestHeaders: t.requestHeaders,
                    cancellationToken: t.cancellationToken
                };
                this.listenerCount(y.DOWNLOAD_PROGRESS) > 0 && (l.onProgress = e => this.emit(y.DOWNLOAD_PROGRESS, e));
                const c = async (e, t) => {
                    const n = u.join(t, "current.blockmap");
                    await (0, s.outputFile)(n, (0, g.gzipSync)(JSON.stringify(e)));
                }, d = async e => {
                    const t = u.join(e, "current.blockmap");
                    try {
                        if (await (0, s.pathExists)(t)) return JSON.parse((0, g.gunzipSync)(await (0, s.readFile)(t)).toString());
                    } catch (e) {
                        this._logger.warn(`Cannot parse blockmap "${t}", error: ${e}`);
                    }
                    return null;
                }, h = await a(o[1]);
                await c(h, this.downloadedUpdateHelper.cacheDirForPendingUpdate);
                let p = await d(this.downloadedUpdateHelper.cacheDir);
                return null == p && (p = await a(o[0])), await new v.GenericDifferentialDownloader(e.info, this.httpExecutor, l).download(p, h), 
                !1;
            } catch (e) {
                if (this._logger.error("Cannot download differentially, fallback to full download: " + (e.stack || e)), 
                null != this._testOnlyOptions) throw e;
                return !0;
            }
        }
    }
    t.AppUpdater = E;
    class b {
        info(e) {}
        warn(e) {}
        error(e) {}
    }
    t.NoOpLogger = b;
}
