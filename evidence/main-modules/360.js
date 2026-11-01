// analysis/pretty/main.js:39477; webpack module 360
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(11), o = n(63), a = n(2), s = n(7), l = r.__importDefault(n(6)), c = r.__importDefault(n(1)), u = r.__importDefault(n(4)), d = r.__importDefault(n(1499)), h = r.__importDefault(n(26)), p = n(32), f = r.__importDefault(n(8)), {spawn: _} = n(10), m = r.__importDefault(n(10)), g = n(46), v = r.__importDefault(n(340)), y = n(236), E = r.__importDefault(n(137)), b = h.default.getHotVersion();
    l.default.setItem("hotVersion", b);
    const w = !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT);
    let S = "win32" === process.platform ? "pc_toast.exe" : "mac_toast.exe";
    var T;
    !function(e) {
        e.Success = "success", e.Failure = "failure", e.None = "none";
    }(T || (T = {}));
    const A = {
        innerUrl: "https://pcsuite-api.vivo.com/",
        exSgUrl: "https://asia-pcsuite-api.vivoglobal.com/",
        exInUrl: "https://in-pcsuite-api.vivoglobal.com/",
        exRuUrl: "https://ru-pcsuite-api.vivoglobal.com/",
        exEu1Url: "https://eu-pcsuite-api.vivoglobal.com/",
        exEu2Url: "https://de-gdpr-pcsuite-api.vivoglobal.com/"
    };
    class O {
        constructor() {
            this.initEvent(), this.updaterDir = c.default.join(a.app.getPath("appData"), "pcsuite-updater"), 
            this.patchZipDir = c.default.join(this.updaterDir, "patch-pending"), this.setReqBaseURL(A), 
            this.setReqHeaders(), this.isDownloading = !1, this.isUpdateing = !1, this.getUpdateResult() !== T.Failure && l.default.setItem("hadPatchUpdateVersion", ""), 
            this.executePath = c.default.join(p.PathUtil.getPcToastPath(), S);
        }
        static getInstance() {
            return this.instance || (this.instance = new O), this.instance;
        }
        setReqBaseURL(e) {
            let t = "";
            if (w) {
                const n = l.default.getItem("serverRoomLabel");
                console.log(`update change lang:${n} set url`), t = n ? "in" == n ? e.exInUrl : "asia" === n ? e.exSgUrl : "ru" === n ? e.exRuUrl : "eu1" === n ? e.exEu1Url : "eu2" === n ? e.exEu2Url : e.exSgUrl : e.exSgUrl;
            } else t = e.innerUrl;
            console.log("hotupdate url:" + t), d.default.setBaseURL(t);
        }
        setReqHeaders() {
            d.default.setGlobalHeader("version", a.app.getVersion()), b && d.default.setGlobalHeader("hotVersion", b), 
            d.default.setGlobalHeader("platform", "win32" === process.platform ? "1" : "2"), 
            "win32" !== process.platform && d.default.setGlobalHeader("chip", "arm64" === process.arch ? "1" : "2"), 
            "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "") && d.default.setGlobalHeader("channelCode", "br");
        }
        checkPatchInfo(e = !1) {
            var t, n;
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const r = yield d.default.getUpgradeDetail();
                    if (global.__log.info("checkPatchInfo, " + JSON.stringify(r)), 200 === r.code) {
                        this.patchInfo = Object.assign(Object.assign({}, r.data), {
                            patchZipName: new URL(r.data.patchZipUrl).searchParams.get("fileName"),
                            patchJsonName: new URL(r.data.patchJsonUrl).searchParams.get("fileName")
                        });
                        const i = l.default.getItem("hadPatchUpdateVersion") || "";
                        i && i !== (null === (t = this.patchInfo) || void 0 === t ? void 0 : t.hotVersion) && l.default.setItem("hadPatchUpdateVersion", "");
                        const o = l.default.getItem("patchUpdateNotifyVersion") || "";
                        o && o !== (null === (n = this.patchInfo) || void 0 === n ? void 0 : n.hotVersion) && l.default.removeItem("patchUpdateNotifyVersion"), 
                        e || setTimeout(() => {
                            this.handlePatchPackageDownload();
                        }, 5e3);
                    } else -1 === r.code ? (global.__log.info("未查询到增量包信息，或当前已为最新版本"), l.default.setItem("hadPatchUpdateVersion", ""), 
                    this.patchInfo = null, l.default.removeItem("patchUpdateNotifyVersion")) : (this.patchInfo = null, 
                    global.__log.info("checkPatchInfo data.code !== 200 " + r.msg));
                } catch (e) {
                    global.__log.info("checkPatchInfo error " + (e.message || e));
                }
            });
        }
        handlePatchPackageUpdate() {
            var e;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (this.patchInfo) try {
                    global.__log.info("增量重启"), this.isUpdateing = !0;
                    const e = yield d.default.getJsonFile(this.patchInfo.patchJsonUrl);
                    console.log("patchJson", e);
                    const t = c.default.dirname(a.app.getPath("exe")), n = Object.assign(Object.assign(Object.assign({}, e), this.patchInfo), {
                        inst_path: t,
                        zip_file: c.default.join(this.patchZipDir, this.patchInfo.patchZipName),
                        sale_area: "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "") ? "BR" : "EN" : "CN"
                    }), r = JSON.stringify(n, null, 2), i = c.default.join(this.patchZipDir, "update.json");
                    let o = c.default.join(this.updaterDir, "win32" === process.platform ? "update.exe" : "update");
                    u.default.existsSync(o) || (global.__log.info("pcsuite-updater updateTool not exist "), 
                    o = c.default.join(t, "win32" === process.platform ? "update.exe" : "../Resources/uninstall/update")), 
                    "win32" !== process.platform && u.default.chmodSync(o, 365), global.__log.info("handlePatchPackageUpdate updateJsonPath: " + i), 
                    global.__log.info("handlePatchPackageUpdate updateExePath: " + o), u.default.writeFileSync(i, r), 
                    l.default.setItem("hadPatchUpdateVersion", this.patchInfo.hotVersion);
                    const s = _(`"${o}"`, [ `"${i}"` ], {
                        detached: !0,
                        shell: !0,
                        stdio: [ "ignore" ]
                    });
                    s && (s.on("error", e => {
                        if (global.__log.info("handlePatchPackageUpdate onmessage onerror"), global.__log.info(e), 
                        e.message.includes("ENOENT") || e.message.includes("UNKNOWN")) {
                            const e = {
                                cmd: o,
                                params: [ i ]
                            };
                            E.default(e);
                        }
                        return !1;
                    }), s.on("message", e => (global.__log.info("handlePatchPackageUpdate onmessage"), 
                    global.__log.info(e), !1)), s.on("exit", (e, t) => (global.__log.info(`handlePatchPackageUpdate onexit: code=${e},signal=${t}`), 
                    !1)), s.on("close", (e, t) => (global.__log.info(`handlePatchPackageUpdate onclose: code=${e},signal=${t}`), 
                    !1))), s.unref(), global.__log.info("handlePatchPackageUpdate spawn end");
                } catch (t) {
                    null === (e = null === o.mainWindow || void 0 === o.mainWindow ? void 0 : o.mainWindow.webContents) || void 0 === e || e.send(i.HOT_UPDATE_MESSAGE_ENUM.UPDATE_ERROR), 
                    this.isUpdateing = !1, global.__log.error("handlePatchPackageUpdate  error: " + ((null == t ? void 0 : t.message) || t));
                } else global.__log.info("handlePatchPackageUpdate patchInfo is null");
            });
        }
        handlePatchPackageDownload() {
            if (!this.patchInfo) return void global.__log.info("handlePatchPackageDownload patchInfo is null");
            if (this.isDownloading) return void global.__log.info("patch资源正在下载中...");
            this.isDownloading = !0, this.downLoadUpdateExe(this.patchInfo).then(e => {
                global.__log.info("download update tool has response: " + e);
            }).catch(e => {
                global.__log.error("download update tool has response error: " + ((null == e ? void 0 : e.message) || e));
            }), this.downLoadPatchPackage(this.patchInfo, e => {
                console.log("下载进度: " + JSON.stringify(e));
            }).then(e => {
                var t, n;
                global.__log.info("handlePatchPackageDownload success: " + e);
                const r = l.default.getItem("patchUpdateNotifyVersion") || "";
                if (global.__log.info(`handlePatchPackageDownload notification condition: getUpdateResult: ${this.getUpdateResult()}, hadNotify: ${r}, isUpdating: ${this.isUpdateing}, windowIsVisible:${I()}`), 
                v.default(y.PATCH_UPDATE_ANALYTICS_SINGLE_EVENT.PATCH_RESOURCE_DOWNLOAD_DONE, {
                    silent_version_code: (null === (t = this.patchInfo) || void 0 === t ? void 0 : t.hotVersion) || "",
                    result: 1,
                    fail_reason: ""
                }), this.getUpdateResult() !== T.Failure && I() && !r && !this.isUpdateing) {
                    global.__log.info("trgggier notification");
                    const e = "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? g.getLocalesJson("framework") : {}, t = {
                        title: e.patchUpdateNotifyTitle || "vivo办公套件有更新可用",
                        msg: e.patchUpdateNotifyBody || "更新包含性能优化和稳定性提升，重启应用可生效。"
                    };
                    "darwin" === process.platform ? (this.notification || this.createNotification(t), 
                    null === (n = this.notification) || void 0 === n || n.show()) : this.toast(t);
                }
            }).catch(e => {
                var t;
                global.__log.error("handlePatchPackageDownload error: " + ((null == e ? void 0 : e.message) || e)), 
                v.default(y.PATCH_UPDATE_ANALYTICS_SINGLE_EVENT.PATCH_RESOURCE_DOWNLOAD_DONE, {
                    silent_version_code: (null === (t = this.patchInfo) || void 0 === t ? void 0 : t.hotVersion) || "",
                    result: 0,
                    fail_reason: null == e ? void 0 : e.message
                });
            }).finally(() => {
                global.__log.info("handlePatchPackageDownload finish"), this.isDownloading = !1;
            });
        }
        downLoadUpdateExe(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const t = c.default.join(this.updaterDir, "win32" === process.platform ? "update.exe" : "update");
                    if (u.default.existsSync(t)) {
                        return (yield N(t)) === e.exeSha512 ? (global.__log.info("update tool hash一致"), 
                        Promise.resolve("update tool文件已存在: " + t)) : (global.__log.info("update tool hash不一致, 重新下载"), 
                        C(e.exeUrl, t, () => {}));
                    }
                    return global.__log.info("update tool not exist"), C(e.exeUrl, t, () => {});
                } catch (e) {
                    return Promise.reject("downLoadUpdateExe error: " + ((null == e ? void 0 : e.message) || e));
                }
            });
        }
        downLoadPatchPackage(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const n = c.default.join(this.patchZipDir, e.patchZipName);
                    if (u.default.existsSync(n)) {
                        return (yield N(n)) === e.zipSha512 ? (global.__log.info("zip升级包已存在: " + n), Promise.resolve("zip升级包已存在', " + n)) : (global.__log.info("patchzip hash不一致, 重新下载"), 
                        this.cleanPatchZipDir(), C(e.patchZipUrl, n, t));
                    }
                    return this.cleanPatchZipDir(), C(e.patchZipUrl, n, t);
                } catch (e) {
                    return Promise.reject("downLoadPatchPackage error: " + ((null == e ? void 0 : e.message) || e));
                }
            });
        }
        cleanPatchZipDir() {
            if (u.default.existsSync(this.patchZipDir)) {
                u.default.readdirSync(this.patchZipDir).forEach(e => {
                    const t = c.default.join(this.patchZipDir, e);
                    u.default.unlinkSync(t), global.__log.info(`文件 ${t} 已删除`);
                }), global.__log.info("所有文件已删除");
            } else u.default.mkdirSync(this.patchZipDir, {
                recursive: !0
            });
        }
        patchDownloadNotInstalled() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    if (global.__log.info("patchDownloadNotInstalled ready"), yield this.checkPatchInfo(!0), 
                    this.patchInfo && this.patchInfo.hotVersion) {
                        const e = c.default.join(this.patchZipDir, this.patchInfo.patchZipName);
                        if (this.getUpdateResult() === T.Failure) return void global.__log.info("patchDownloadNotInstalled had update fail");
                        if (u.default.existsSync(e)) {
                            global.__log.info("应用启动后增量更新");
                            const t = yield N(e);
                            return void (t === this.patchInfo.zipSha512 ? (this.closeNotification(), this.handlePatchPackageUpdate()) : global.__log.info("patchDownloadNotInstalled patchzip hash不一致 hash: " + t));
                        }
                        global.__log.info("patchZip not exist");
                    } else global.__log.info("patchDownloadNotInstalled patchInfo is null"), this.closeNotification();
                } catch (e) {
                    global.__log.error("hot patchDownloadNotInstalled error" + ((null == e ? void 0 : e.message) || e));
                }
            });
        }
        getNotificationInstanse() {
            return "win32" === process.platform ? this.toastProcessSpawn : this.notification;
        }
        initEvent() {
            console.log("HotUpgradeManager initEvent"), a.ipcMain.on(i.HOT_UPDATE_MESSAGE_ENUM.DOWNLOAD_UPDATE, () => {
                this.handlePatchPackageDownload();
            }), a.ipcMain.on(i.HOT_UPDATE_MESSAGE_ENUM.CONFIRM_UPDATE, () => {
                this.handlePatchPackageUpdate();
            }), a.ipcMain.on(i.HOT_UPDATE_MESSAGE_ENUM.CLOSE_NOTIFICATION, () => {
                this.closeNotification();
            }), a.ipcMain.on(i.APP_MESSAGE_ENUM.NETWORK_STATUS_CHANGE, (e, t) => {
                var n;
                global.__log.info("增量升级监听网络状态变化: " + t), t || (v.default(y.PATCH_UPDATE_ANALYTICS_SINGLE_EVENT.PATCH_RESOURCE_DOWNLOAD_DONE, {
                    silent_version_code: (null === (n = this.patchInfo) || void 0 === n ? void 0 : n.hotVersion) || "",
                    result: 0,
                    fail_reason: "Network offline"
                }), this.isDownloading = !1);
            }), a.ipcMain.handle(i.HOT_UPDATE_MESSAGE_ENUM.CHECK_IS_UPDATING, () => this.isUpdateing), 
            a.ipcMain.handle(i.HOT_UPDATE_MESSAGE_ENUM.GET_PATCH_INFO, () => this.patchInfo);
        }
        toast({title: e, msg: t}) {
            var n;
            let r = [];
            r = "darwin" === f.default.platform() ? [ "-title", e, "-informativeText", t, "-source", "7", "-appID", "com.vivo.pcsuite", "-id", "patch_update_1111" ] : [ "-t", e, "-m", t, "-appID", "com.vivo.pcsuite", "-md", "7", "-id", "patch_update_1111" ], 
            v.default(y.PATCH_UPDATE_ANALYTICS_SINGLE_EVENT.SYSTEM_NOTIFICATION_SHOW, ""), console.log("this.executePath", this.executePath), 
            l.default.setItem("patchUpdateNotifyVersion", null === (n = this.patchInfo) || void 0 === n ? void 0 : n.hotVersion), 
            this.toastProcessSpawn = _(this.executePath, r).on("error", e => {
                if (global.__log.info("toast err: " + e), l.default.removeItem("patchUpdateNotifyVersion"), 
                e.message.includes("ENOENT") || e.message.includes("UNKNOWN")) {
                    const e = {
                        cmd: this.executePath,
                        params: r
                    };
                    E.default(e);
                }
            });
        }
        closeToast() {
            global.__log.info("[toast-manager.ts][closeToast] id: patch_update_1111"), m.default.spawn(this.executePath, [ "-appID", "com.vivo.pcsuite", "-close", "patch_update_1111" ]).on("error", e => {
                if (global.__log.info("closeToast err: " + e), e.message.includes("ENOENT") || e.message.includes("UNKNOWN")) {
                    const e = {
                        cmd: this.executePath,
                        params: [ "-appID", "com.vivo.pcsuite", "-close", "patch_update_1111" ]
                    };
                    E.default(e);
                }
            });
        }
        closeNotification() {
            "darwin" === process.platform ? this.notification && this.notification.close() : this.closeToast();
        }
        createNotification(e) {
            a.Notification.isSupported() ? (this.notification = new a.Notification({
                title: e.title,
                body: e.msg,
                silent: !1,
                hasReply: !1,
                timeoutType: "never",
                sound: "",
                urgency: "normal"
            }), this.notification.on("click", e => {
                var t;
                null === (t = null === o.mainWindow || void 0 === o.mainWindow ? void 0 : o.mainWindow.webContents) || void 0 === t || t.send(i.HOT_UPDATE_MESSAGE_ENUM.UPDATE_NOTIFICATION_CLICK, this.patchInfo), 
                console.log("notification click", e);
            }), this.notification.on("close", () => {
                console.log("notification close");
            }), this.notification.on("show", () => {
                var e;
                l.default.setItem("patchUpdateNotifyVersion", null === (e = this.patchInfo) || void 0 === e ? void 0 : e.hotVersion), 
                console.log("notification show");
            })) : global.__log.info("notification not support");
        }
        getUpdateResult() {
            const e = l.default.getItem("hadPatchUpdateVersion") || "";
            return e ? e === b ? T.Success : T.Failure : T.None;
        }
    }
    function C(e, t, n) {
        return new Promise((r, i) => {
            try {
                const e = c.default.dirname(t);
                u.default.existsSync(e) || u.default.mkdirSync(e, {
                    recursive: !0
                });
            } catch (e) {
                i("目录创建失败: " + e);
            }
            d.default.downloadFile(e, n).then(e => {
                const n = u.default.createWriteStream(t);
                e.data.pipe(n), n.on("finish", () => {
                    r("文件下载完成，保存路径: " + t);
                }), n.on("error", e => {
                    i("下载文件时发生错误: " + e);
                });
            }).catch(e => {
                i("请求失败: " + e);
            });
        });
    }
    function N(e, t = "sha512") {
        return new Promise((n, r) => {
            const i = s.createHash(t), o = u.default.createReadStream(e);
            o.on("error", r), i.on("error", r), o.on("data", e => {
                i.update(e);
            }), o.on("end", () => {
                const e = i.digest("hex");
                n(e);
            });
        });
    }
    function I() {
        return null === o.mainWindow || void 0 === o.mainWindow ? void 0 : o.mainWindow.isVisible();
    }
    t.default = O.getInstance();
}
