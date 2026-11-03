// analysis/pretty/main.js:111937; webpack module 1498
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importStar(n(8)), o = r.__importDefault(n(4)), a = r.__importDefault(n(1)), s = r.__importDefault(n(10)), l = n(2), c = n(662), u = r.__importDefault(n(6)), d = r.__importDefault(n(729)), h = n(63), p = n(11), f = r.__importDefault(n(110)), _ = n(46), m = r.__importDefault(n(28)), g = r.__importDefault(n(360)), v = "darwin" === i.platform(), y = !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT), E = {
        innerUrl: "https://pcsuite-api.vivo.com/version/upgrade/detail/mac",
        exSgUrl: "https://asia-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac",
        exInUrl: "https://in-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac",
        exRuUrl: "https://ru-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac",
        exEu1Url: "https://eu-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac",
        exEu2Url: "https://de-gdpr-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac"
    }, b = {
        innerUrl: "https://pcsuite-api.vivo.com/version/upgrade/detail/mac/arm64",
        exSgUrl: "https://asia-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64",
        exInUrl: "https://in-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64",
        exRuUrl: "https://ru-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64",
        exEu1Url: "https://eu-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64",
        exEu2Url: "https://de-gdpr-pcsuite-api.vivoglobal.com/version/upgrade/detail/mac/arm64"
    }, w = {
        innerUrl: "https://pcsuite-api.vivo.com/version/upgrade/detail/windows",
        exSgUrl: "https://asia-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows",
        exInUrl: "https://in-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows",
        exRuUrl: "https://ru-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows",
        exEu1Url: "https://eu-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows",
        exEu2Url: "https://de-gdpr-pcsuite-api.vivoglobal.com/version/upgrade/detail/windows"
    };
    class S {
        static getInstance() {
            return this.instance || (this.instance = new S), this.instance;
        }
        checkUpdate() {
            g.default.checkPatchInfo();
            let e = this, t = !1;
            function n(e, t) {
                const n = t.map(e => "string" == typeof e ? e : JSON.stringify(e)).join(" ");
                return n ? `${e} ${n}` : e;
            }
            c.autoUpdater.logger = {
                info: (...e) => {
                    const t = n("[updater]", e);
                    "[updater]" !== t && global.__log.info(t);
                },
                warn: (...e) => {
                    const t = n("[updater]", e);
                    "[updater]" !== t && global.__log.warn(t);
                },
                error: (...e) => global.__log.error(n("[updater]", e)),
                debug: (...e) => {
                    const t = n("[updater:debug]", e);
                    "[updater:debug]" !== t && global.__log.info(t);
                }
            }, c.autoUpdater.autoDownload = !1;
            const i = _.getPcDeviceId();
            global.__log.info("checkout update send pcDeviceId " + i);
            let d, y = "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "");
            global.__log.info("checkout update send isBr " + y), c.autoUpdater.requestHeaders = {
                "pcsuite-version": "" + l.app.getVersion(),
                pcDeviceId: i,
                channelCode: y ? "br" : ""
            }, function(e) {
                e.UPDATE_PROCESS = "Could not get code signature for running application", e.UPDATE_SHA512 = "sha512 checksum mismatch, expected", 
                e.UPDATE_NETWORK_ERR = "net::ERR", e.LATEST_YML_ERR = "Cannot parse update info from latest.yml in the latest release artifacts", 
                e.DOWNLOAD_UNAUTHORIZED = "OSStatus错误-60006", e.EBUSY = "EBUSY", e.ENOENT = "ENOENT", 
                e.UNKNOWN = "spawn UNKNOWN", e.POWERSHELL_ERR = "powershell.exe -NoProfile -NonInteractive -InputFormat", 
                e.PSMODULEPATH_NULL = "PSModulePath=", e.NOT_SIGNED = "is not signed by the application owner";
            }(d || (d = {})), c.autoUpdater.on("error", function(t) {
                var n, r, i, s, c, f, _;
                let g = t.toString();
                if (g.includes(d.UPDATE_PROCESS)) null === (n = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === n || n.send(p.UPDATE_MESSAGE_ENUM.ERROR_UPDATE_PROCESS); else if (g.includes(d.UPDATE_SHA512)) null === (r = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === r || r.send(p.UPDATE_MESSAGE_ENUM.UPDATE_SHA512); else if (g.includes(d.UPDATE_NETWORK_ERR)) null === (i = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === i || i.send(p.UPDATE_MESSAGE_ENUM.UPDATE_NETWORK_ERR); else if (g.includes(d.LATEST_YML_ERR)) null === (s = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === s || s.send(p.UPDATE_MESSAGE_ENUM.LATEST_YML_ERR); else if (g.includes(d.DOWNLOAD_UNAUTHORIZED)) global.__log.info("DOWNLOAD_UNAUTHORIZED"), 
                null === (c = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === c || c.send(p.UPDATE_MESSAGE_ENUM.DOWNLOAD_UNAUTHORIZED); else if (g.includes(d.EBUSY)) e.checkAndKillUpdateProcess(); else if (g.includes(d.ENOENT) || g.includes(d.UNKNOWN) || g.includes(d.POWERSHELL_ERR) || g.includes(d.PSMODULEPATH_NULL)) {
                    let e = u.default.getItem("downloadedFile") || null;
                    if (!e) {
                        const t = g.match(/-LiteralPath\s+'([^']+)'/i);
                        if (t) e = t[1], global.__log.info("DragFile extracted path from error: " + e); else {
                            const t = a.default.join(l.app.getPath("home"), "AppData", "Local", "pcsuite-updater", "pending");
                            try {
                                const n = o.default.readdirSync(t).find(e => e.endsWith(".exe"));
                                n && (e = a.default.join(t, n), global.__log.info("DragFile found pending exe: " + e));
                            } catch (e) {
                                global.__log.info("DragFile read pending dir error: " + e);
                            }
                        }
                    }
                    if (u.default.setItem("closeAfterUpdate", {
                        closeAfterUpdate: 0
                    }), u.default.setItem("updateDir", {
                        updateDir: ""
                    }), global.__log.info("DragFile updater path: " + e), e) try {
                        null === h.mainWindow || void 0 === h.mainWindow || h.mainWindow.hide();
                        const t = {
                            cmd: e,
                            params: []
                        };
                        m.default.launch(JSON.stringify(t)), global.__log.info("DragFile updater success");
                    } catch (t) {
                        global.__log.info("DragFile updater error:" + t);
                    } else global.__log.info("DragFile updater null");
                } else g.includes(d.NOT_SIGNED) ? (global.__log.info("updater NOT_SIGNED"), null === (f = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === f || f.send(p.UPDATE_MESSAGE_ENUM.NOT_SIGNED)) : null === (_ = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === _ || _.send(p.UPDATE_MESSAGE_ENUM.OTHER_ERRR, g);
                global.__log.info("updater error :", t);
            }), c.autoUpdater.on("checking-for-update", function(e) {
                var t;
                global.__log.info("checking-for-update:", e), null === (t = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === t || t.send("checking-update");
            }), c.autoUpdater.on("update-available", function(e) {
                var n, r;
                global.__log.info("update-available:", e), t ? null === (r = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === r || r.send(p.UPDATE_MESSAGE_ENUM.UPDATE_MESSAGE, {
                    info: e,
                    test: !0
                }) : (null === (n = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === n || n.send(p.UPDATE_MESSAGE_ENUM.APP_UPDATE_MESSAGE, {
                    info: e,
                    test: !0
                }), t = !0);
            }), c.autoUpdater.on("update-not-available", function(e) {
                var n, r;
                global.__log.info("update-not-available"), t ? null === (r = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === r || r.send(p.UPDATE_MESSAGE_ENUM.UPDATE_MESSAGE, {
                    info: e,
                    test: !1
                }) : (null === (n = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === n || n.send(p.UPDATE_MESSAGE_ENUM.APP_UPDATE_MESSAGE, {
                    info: e,
                    test: !1
                }), t = !0);
            }), c.autoUpdater.on("download-progress", function(e) {
                var t;
                null === (t = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === t || t.send(p.UPDATE_MESSAGE_ENUM.UPDATE_PROCESS, e);
            }), c.autoUpdater.on("update-downloaded", function(e) {
                var t;
                return r.__awaiter(this, void 0, void 0, function*() {
                    yield f.default.getInstance().setRelaunchflags(), yield f.default.getInstance().setKillServiceflags(), 
                    global.__log.info("update-downloaded--------" + (null == e ? void 0 : e.downloadedFile)), 
                    v && (f.default.getInstance().setRelaunchflags(), f.default.getInstance().setRestartNowflags(), 
                    global.__quitFromUpdate = !0), null === (t = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === t || t.send(p.UPDATE_MESSAGE_ENUM.DOWNLOADED, {
                        info: e,
                        falg: !0
                    });
                });
            }), l.ipcMain.on(p.UPDATE_MESSAGE_ENUM.CHECK_FOR_UPDATE, () => {
                if (g.default.checkPatchInfo(), v) try {
                    const e = s.default.execFileSync("uname", [ "-a" ], {
                        encoding: "utf8"
                    });
                    if (global.__log.info("get mac arch result: " + e), !e) return global.__log.info("get mac arch result null"), 
                    this.setUpdateUrl(E), void c.autoUpdater.checkForUpdates();
                    e.includes("ARM") || "arm64" == process.arch ? (global.__log.info("check update set ARM url"), 
                    this.setUpdateUrl(b)) : (global.__log.info("check update set intel url"), this.setUpdateUrl(E)), 
                    c.autoUpdater.checkForUpdates();
                } catch (e) {
                    global.__log.info("catch mac arch error: " + e), this.setUpdateUrl(E), c.autoUpdater.checkForUpdates();
                } else this.setUpdateUrl(w), c.autoUpdater.checkForUpdates();
            }), l.ipcMain.on(p.UPDATE_MESSAGE_ENUM.DOWNLOAD_UPDATE, () => {
                global.__log.info("download start"), e.checkAndKillUpdateProcess();
                let t = new c.CancellationToken;
                global.__log.info("downloadUpdate------"), c.autoUpdater.downloadUpdate(t), l.ipcMain.on(p.UPDATE_MESSAGE_ENUM.STOP_DOWNLOAD, () => {
                    global.__log.info("download stop"), t.cancel();
                });
            }), l.ipcMain.on(p.UPDATE_MESSAGE_ENUM.CONFIRM_UPDATE, () => r.__awaiter(this, void 0, void 0, function*() {
                var e;
                u.default.setItem("closeAfterUpdate", {
                    closeAfterUpdate: 0
                }), u.default.setItem("updateDir", {
                    updateDir: ""
                }), null === (e = null === h.mainWindow || void 0 === h.mainWindow ? void 0 : h.mainWindow.webContents) || void 0 === e || e.send(p.APP_MESSAGE_ENUM.SERVICE_STOPPING_MESSAGE), 
                v ? (f.default.getInstance().setRelaunchflags(), f.default.getInstance().setRestartNowflags(), 
                global.__quitFromUpdate = !0, null === h.mainWindow || void 0 === h.mainWindow || h.mainWindow.close()) : c.autoUpdater.quitAndInstall(!1, !1), 
                global.__log.info("update relaunch");
            })), l.ipcMain.on(p.APP_MESSAGE_ENUM.CLOSE_APP, () => {
                u.default.setItem("openTime", {
                    openTime: ""
                }), l.app.quit();
            });
        }
        checkAndKillUpdateProcess() {
            return r.__awaiter(this, void 0, void 0, function*() {
                if ("win32" === process.platform) try {
                    s.default.exec('tasklist /FI "IMAGENAME eq 2.0.exe" /FO CSV /NH', (e, t, n) => {
                        if (e) return void global.__log.info("check update process err:" + e);
                        let r = t.toLowerCase().indexOf("2.0.exe".toLocaleLowerCase()) > -1;
                        global.__log.info(`update process status:${r} and processID:${t}`), r && s.default.exec("taskkill /im 2.0.exe /f");
                    });
                } catch (e) {
                    global.__log.info("catch update process error:" + e);
                }
            });
        }
        setUpdateUrl(e) {
            let t = "";
            if (y) {
                const n = u.default.getItem("serverRoomLabel");
                global.__log.info(`update change lang:${n} set url`), t = n ? "in" == n ? e.exInUrl : "asia" === n ? e.exSgUrl : "ru" === n ? e.exRuUrl : "eu1" === n ? e.exEu1Url : "eu2" === n ? e.exEu2Url : e.exSgUrl : e.exSgUrl;
            } else t = e.innerUrl;
            global.__log.info("update url:" + t), c.autoUpdater.setFeedURL({
                provider: "generic",
                url: t
            });
        }
        clearUpdateData() {
            u.default.setItem("closeAfterUpdate", {
                closeAfterUpdate: 0
            }), u.default.setItem("updateDir", {
                updateDir: ""
            }), h.mainWindow || (h.createWindow().then(() => {
                h.createNotificationBrowserWindow();
            }), d.default());
        }
        updateInstall(e) {
            var t, n;
            return r.__awaiter(this, void 0, void 0, function*() {
                let i = this;
                global.__log.info("updateInfoObj--------" + JSON.stringify(e)), this.sha512 = null == e ? void 0 : e.sha512;
                let c = ((null == e ? void 0 : e.path) || "").split("/") || [], d = c[c.length - 1];
                this.fileName = d.split("?")[0];
                let h = null === (n = null === (t = u.default.getItem("updateDir")) || void 0 === t ? void 0 : t.updateDir) || void 0 === n ? void 0 : n.split("\\");
                h.pop(), h = h.join("\\"), global.__log.info(`download sh512 and fileName-----${this.sha512}------${this.fileName}`);
                try {
                    this.sha512 && this.fileName && h ? o.default.readFile(h + "\\update-info.json", "utf-8", function(e, t) {
                        var n;
                        return r.__awaiter(this, void 0, void 0, function*() {
                            if (e) return global.__log.info("updateInstall__err-----" + e), void i.clearUpdateData();
                            let r = JSON.parse(t.trim());
                            if (global.__log.info("readFile have data -----" + JSON.stringify(t)), i.sha512 == r.sha512 && i.fileName == r.fileName) {
                                global.__log.info(`comparison sha512 and fileName--------${r.sha512}------${r.fileName}`);
                                let e = a.default.resolve(a.default.dirname(l.app.getPath("exe")), "resources/elevate.exe"), t = null === (n = u.default.getItem("updateDir")) || void 0 === n ? void 0 : n.updateDir;
                                global.__log.info(`get updater path------${e}------${t}`), global.__log.info("process start");
                                (yield s.default.spawn(e, [ t, "--updated", "--force-run" ], {
                                    detached: !0,
                                    stdio: "ignore"
                                })).unref(), global.__log.info("process end"), u.default.setItem("closeAfterUpdate", {
                                    closeAfterUpdate: 0
                                }), u.default.setItem("updateDir", {
                                    updateDir: ""
                                }), u.default.setItem("openTime", {
                                    openTime: ""
                                }), l.app.quit();
                            } else i.clearUpdateData();
                        });
                    }) : i.clearUpdateData();
                } catch (e) {
                    i.clearUpdateData();
                }
            });
        }
        downloadNotInstalled() {
            global.__log.info("downloadNotInstalled ready"), c.autoUpdater.checkForUpdates(), 
            c.autoUpdater.once("update-available", e => {
                global.__log.info("has update do updateInstall"), this.updateInstall(e);
            }), c.autoUpdater.once("update-not-available", () => {
                global.__log.info("not has upadter"), this.clearUpdateData();
            });
        }
    }
    t.default = S.getInstance();
}
