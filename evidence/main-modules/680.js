// analysis/pretty/main.js:61312; webpack module 680
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MacUpdater = void 0;
    const r = n(36), i = n(93), o = n(4), a = n(1), s = n(39), l = n(324), c = n(54), u = n(10), d = n(7);
    class h extends l.AppUpdater {
        constructor(e, t) {
            super(e, t), this.nativeUpdater = n(2).autoUpdater, this.squirrelDownloadedUpdate = !1, 
            this.nativeUpdater.on("error", e => {
                this._logger.warn(e), this.emit("error", e);
            }), this.nativeUpdater.on("update-downloaded", () => {
                this.squirrelDownloadedUpdate = !0, this.debug("nativeUpdater.update-downloaded");
            });
        }
        debug(e) {
            null != this._logger.debug && this._logger.debug(e);
        }
        closeServerIfExists() {
            this.server && (this.debug("Closing proxy server"), this.server.close(e => {
                e && this.debug("proxy server wasn't already open, probably attempted closing again as a safety check before quit");
            }));
        }
        async doDownloadUpdate(e) {
            let t = e.updateInfoAndProvider.provider.resolveFiles(e.updateInfoAndProvider.info);
            const n = this._logger;
            let o = !1;
            try {
                this.debug("Checking for macOS Rosetta environment");
                o = (0, u.execFileSync)("sysctl", [ "sysctl.proc_translated" ], {
                    encoding: "utf8"
                }).includes("sysctl.proc_translated: 1"), n.info(`Checked for macOS Rosetta environment (isRosetta=${o})`);
            } catch (e) {
                n.warn("sysctl shell command to check for macOS Rosetta environment failed: " + e);
            }
            let s = !1;
            try {
                this.debug("Checking for arm64 in uname");
                const e = (0, u.execFileSync)("uname", [ "-a" ], {
                    encoding: "utf8"
                }).includes("ARM");
                n.info("Checked 'uname -a': arm64=" + e), s = s || e;
            } catch (e) {
                n.warn("uname shell command to check for arm64 failed: " + e);
            }
            s = s || "arm64" === process.arch || o;
            const l = e => {
                var t;
                return e.url.pathname.includes("arm64") || (null === (t = e.info.url) || void 0 === t ? void 0 : t.includes("arm64"));
            };
            t = s && t.some(l) ? t.filter(e => s === l(e)) : t.filter(e => !l(e));
            const d = (0, c.findFile)(t, "zip", [ "pkg", "dmg" ]);
            if (null == d) throw (0, r.newError)("ZIP file not provided: " + (0, r.safeStringifyJson)(t), "ERR_UPDATER_ZIP_FILE_NOT_FOUND");
            const h = e.updateInfoAndProvider.provider;
            return this.executeDownload({
                fileExtension: "zip",
                fileInfo: d,
                downloadUpdateOptions: e,
                task: async (t, r) => {
                    const o = a.join(this.downloadedUpdateHelper.cacheDir, "update.zip");
                    let s = !0;
                    ((0, i.pathExistsSync)(o) ? !e.disableDifferentialDownload : (n.info("Unable to locate previous update.zip for differential download (is this first install?), falling back to full download"), 
                    0)) && (s = await this.differentialDownloadInstaller(d, e, t, h, "update.zip")), 
                    s && await this.httpExecutor.download(d.url, t, r);
                },
                done: async t => {
                    if (!e.disableDifferentialDownload) try {
                        const e = a.join(this.downloadedUpdateHelper.cacheDir, "update.zip");
                        await (0, i.copyFile)(t.downloadedFile, e);
                    } catch (e) {
                        this._logger.warn("Unable to copy file for caching for future differential downloads: " + e.message);
                    }
                    return this.updateDownloaded(d, t);
                }
            });
        }
        async updateDownloaded(e, t) {
            var n;
            const r = t.downloadedFile, a = null !== (n = e.info.size) && void 0 !== n ? n : (await (0, 
            i.stat)(r)).size, l = this._logger, c = "fileToProxy=" + e.url.href;
            this.closeServerIfExists(), this.debug(`Creating proxy server for native Squirrel.Mac (${c})`), 
            this.server = (0, s.createServer)(), this.debug(`Proxy server for native Squirrel.Mac is created (${c})`), 
            this.server.on("close", () => {
                l.info(`Proxy server for native Squirrel.Mac is closed (${c})`);
            });
            const u = e => {
                const t = e.address();
                return "string" == typeof t ? t : "http://127.0.0.1:" + (null == t ? void 0 : t.port);
            };
            return await new Promise((e, n) => {
                const i = (0, d.randomBytes)(64).toString("base64").replace(/\//g, "_").replace(/\+/g, "-"), s = Buffer.from("autoupdater:" + i, "ascii"), h = `/${(0, 
                d.randomBytes)(64).toString("hex")}.zip`;
                this.server.on("request", (t, s) => {
                    const c = t.url;
                    if (l.info(c + " requested"), "/" === c) {
                        if (!t.headers.authorization || -1 === t.headers.authorization.indexOf("Basic ")) return s.statusCode = 401, 
                        s.statusMessage = "Invalid Authentication Credentials", s.end(), void l.warn("No authenthication info");
                        const e = t.headers.authorization.split(" ")[1], n = Buffer.from(e, "base64").toString("ascii"), [r, o] = n.split(":");
                        if ("autoupdater" !== r || o !== i) return s.statusCode = 401, s.statusMessage = "Invalid Authentication Credentials", 
                        s.end(), void l.warn("Invalid authenthication credentials");
                        const a = Buffer.from(`{ "url": "${u(this.server)}${h}" }`);
                        return s.writeHead(200, {
                            "Content-Type": "application/json",
                            "Content-Length": a.length
                        }), void s.end(a);
                    }
                    if (!c.startsWith(h)) return l.warn(c + " requested, but not supported"), s.writeHead(404), 
                    void s.end();
                    l.info(`${h} requested by Squirrel.Mac, pipe ${r}`);
                    let d = !1;
                    s.on("finish", () => {
                        d || (this.nativeUpdater.removeListener("error", n), e([]));
                    });
                    const p = (0, o.createReadStream)(r);
                    p.on("error", e => {
                        try {
                            s.end();
                        } catch (e) {
                            l.warn("cannot end response: " + e);
                        }
                        d = !0, this.nativeUpdater.removeListener("error", n), n(new Error(`Cannot pipe "${r}": ${e}`));
                    }), s.writeHead(200, {
                        "Content-Type": "application/zip",
                        "Content-Length": a
                    }), p.pipe(s);
                }), this.debug(`Proxy server for native Squirrel.Mac is starting to listen (${c})`), 
                this.server.listen(0, "127.0.0.1", () => {
                    this.debug(`Proxy server for native Squirrel.Mac is listening (address=${u(this.server)}, ${c})`), 
                    this.nativeUpdater.setFeedURL({
                        url: u(this.server),
                        headers: {
                            "Cache-Control": "no-cache",
                            Authorization: "Basic " + s.toString("base64")
                        }
                    }), this.dispatchUpdateDownloaded(t), this.autoInstallOnAppQuit ? (this.nativeUpdater.once("error", n), 
                    this.nativeUpdater.checkForUpdates()) : e([]);
                });
            });
        }
        handleUpdateDownloaded() {
            this.autoRunAppAfterInstall ? this.nativeUpdater.quitAndInstall() : this.app.quit(), 
            this.closeServerIfExists();
        }
        quitAndInstall() {
            this.squirrelDownloadedUpdate ? this.handleUpdateDownloaded() : (this.nativeUpdater.on("update-downloaded", () => this.handleUpdateDownloaded()), 
            this.autoInstallOnAppQuit || this.nativeUpdater.checkForUpdates());
        }
    }
    t.MacUpdater = h;
}
