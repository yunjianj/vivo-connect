// analysis/pretty/main.js:133370; webpack module 1742
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(12), o = r.__importStar(n(4)), a = r.__importDefault(n(55)), s = n(1743), l = n(803), c = r.__importDefault(n(355)), u = r.__importDefault(n(50));
    class d extends i.EventEmitter {
        constructor(e = {}) {
            var t;
            super(), this.mStatus = s.VClawInstallStatus.NOT_INSTALLED, this.mAbortController = null, 
            this.mVersionInfo = null, this.mProgressInterval = null, this.mOptions = {
                mainWindow: null !== (t = e.mainWindow) && void 0 !== t ? t : global.__mainWindow,
                storage: e.storage
            };
        }
        isInstalled() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const e = yield c.default.getInstance().isInstalled();
                    return global.__log.info("[VClawInstaller] 检查安装状态: " + e), e;
                } catch (e) {
                    return global.__log.error("[VClawInstaller] 检查安装状态失败: " + e), !1;
                }
            });
        }
        getStatus() {
            return this.mStatus;
        }
        install() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[VClawInstaller] 开始安装");
                const {config: e, downloadPath: t} = yield l.getVClawInstallPaths(), n = process.platform;
                let r = !1;
                try {
                    if (yield this.isInstalled()) return global.__log.warn("[VClawInstaller] VClaw已安装，跳过"), 
                    this.mStatus = s.VClawInstallStatus.INSTALLED, this.notifyInstallProgress(100), 
                    void this.notifyInstallSuccess();
                    this.mStatus = s.VClawInstallStatus.DOWNLOADING, this.mAbortController = new AbortController, 
                    this.mVersionInfo ? global.__log.info("[VClawInstaller] 使用已缓存的版本信息") : (global.__log.info("[VClawInstaller] 获取版本信息"), 
                    this.mVersionInfo = yield l.fetchVersionInfo(e.feedUrl));
                    const i = l.selectTargetFile(this.mVersionInfo.files);
                    if (!i) throw new Error("未找到合适的下载文件");
                    r = !0, yield this.downloadFile(i.url, t, i.size), global.__log.info("[VClawInstaller] 校验文件哈希");
                    const a = yield o.promises.stat(t);
                    if (global.__log.info(`[VClawInstaller] 下载文件实际大小: ${a.size} bytes, 期望大小: ${i.size} bytes`), 
                    global.__log.info("[VClawInstaller] 期望哈希: " + i.sha512), this.mStatus = s.VClawInstallStatus.INSTALLING, 
                    "darwin" === n) yield this.installMac(t, e.installPath), r = !0; else {
                        if ("win32" !== n) throw new Error("Unsupported platform: " + n);
                        yield this.installWindows(t, e.installPath), r = !0;
                    }
                    yield this.saveInstallInfo(e), this.mStatus = s.VClawInstallStatus.INSTALLED, r = !1, 
                    global.__log.info("[VClawInstaller] 安装完成"), this.emit("installed"), this.notifyInstallSuccess();
                } catch (i) {
                    this.mStatus = s.VClawInstallStatus.ERROR, global.__log.error("[VClawInstaller] 安装失败: " + i), 
                    r && (yield this.cleanupOnCancel(t, e.installPath, n)), this.notifyInstallError(i instanceof Error ? i.message : String(i));
                } finally {
                    this.mAbortController = null, this.mProgressInterval && (clearInterval(this.mProgressInterval), 
                    this.mProgressInterval = null);
                }
            });
        }
        cancel() {
            this.mAbortController && (global.__log.info("[VClawInstaller] 取消安装"), this.mAbortController.abort(), 
            this.mProgressInterval && (clearInterval(this.mProgressInterval), this.mProgressInterval = null), 
            this.mStatus = s.VClawInstallStatus.NOT_INSTALLED, this.emit("cancelled"));
        }
        downloadFile(e, t, n = 0) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[VClawInstaller] 开始下载: ${e}, 文件大小: ${n} bytes`);
                const i = process.platform;
                try {
                    yield o.promises.access(t), global.__log.info("[VClawInstaller] 检测到文件已存在，删除旧文件: " + t), 
                    yield o.promises.unlink(t);
                } catch (e) {
                    global.__log.info("[VClawInstaller] 文件不存在，准备下载新文件: " + t);
                }
                const s = o.createWriteStream(t);
                let l = 0, c = Date.now(), u = 0;
                const d = this.mAbortController ? new a.default.CancelToken(e => {
                    var t, n;
                    (null === (t = this.mAbortController) || void 0 === t ? void 0 : t.signal.aborted) ? (global.__log.info("[VClawInstaller] 下载: cancel1"), 
                    e("安装已取消")) : null === (n = this.mAbortController) || void 0 === n || n.signal.addEventListener("abort", () => {
                        global.__log.info("[VClawInstaller] 下载: cancel2"), e("安装已取消");
                    });
                }) : void 0;
                yield new Promise((t, o) => r.__awaiter(this, void 0, void 0, function*() {
                    a.default({
                        method: "GET",
                        url: e,
                        responseType: "stream",
                        timeout: 3e4,
                        cancelToken: d
                    }).then(e => {
                        const r = parseInt(e.headers["content-length"] || "0", 10), a = n > 0 ? n : r, d = "win32" === i ? 50 : 99;
                        e.data.on("error", e => {
                            var t;
                            global.__log.error("[VClawInstaller] 响应流错误: " + (e.message || e)), s.close(), (null === (t = this.mAbortController) || void 0 === t ? void 0 : t.signal.aborted) ? o(e) : o("Network Error");
                        }), s.on("finish", () => {
                            global.__log.info("[VClawInstaller] writer finish"), s.close();
                        }), s.on("close", () => {
                            var e;
                            if (global.__log.info("[VClawInstaller] writer close"), null === (e = this.mAbortController) || void 0 === e ? void 0 : e.signal.aborted) global.__log.info("[VClawInstaller] 下载: cancel5"), 
                            o(new Error("下载已取消")); else {
                                if (global.__log.info("[VClawInstaller] 下载完成"), a > 0) {
                                    const e = (Date.now() - c) / 1e3, t = this.calculateSpeed(l, e);
                                    this.notifyInstallProgress(d, t, l, a);
                                }
                                t();
                            }
                        }), s.on("error", e => {
                            var t;
                            global.__log.error("[VClawInstaller] writer error: " + e), s.close(), (null === (t = this.mAbortController) || void 0 === t ? void 0 : t.signal.aborted) ? (global.__log.info("[VClawInstaller] 下载: cancel6"), 
                            o(new Error("下载已取消"))) : (global.__log.error("[VClawInstaller] 写入失败: " + e), o(e));
                        }), e.data.on("data", e => {
                            var t;
                            if (null === (t = this.mAbortController) || void 0 === t ? void 0 : t.signal.aborted) return global.__log.info("[VClawInstaller] 下载: cancel3"), 
                            s.destroy(), void o(new Error("下载已取消"));
                            l += e.length;
                            const n = Date.now();
                            if (n - u >= 1e3 && a > 0) {
                                u = n;
                                const e = Math.min(d, Math.floor(l / a * d)), t = (n - c) / 1e3, r = this.calculateSpeed(l, t);
                                this.notifyInstallProgress(e, r, l, a);
                            }
                        }), e.data.pipe(s);
                    }).catch(e => {
                        global.__log.info("[VClawInstaller] axios: error " + JSON.stringify(e)), s.close(), 
                        o(e);
                    });
                }));
            });
        }
        installMac(e, t) {
            var n;
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[VClawInstaller] macOS安装: ${e} -> ${t}`), yield l.extractZip(e, t, null === (n = this.mAbortController) || void 0 === n ? void 0 : n.signal), 
                this.notifyInstallProgress(100), (yield o.promises.access(e).then(() => !0).catch(() => !1)) && (yield o.promises.unlink(e));
            });
        }
        installWindows(e, t) {
            var n;
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info(`[VClawInstaller] Windows安装: ${e} -> ${t}`);
                let r = 50, i = 50, a = 0;
                this.notifyInstallProgress(r), this.mProgressInterval = setInterval(() => {
                    a++;
                    const e = Math.min(1, a / 45), t = 1 - Math.pow(1 - e, 3), n = 1 * (Math.random() - .5);
                    r = Math.min(99, 50 + 49 * t + n);
                    const o = Math.floor(r);
                    o > i && (i = o, this.notifyInstallProgress(i));
                }, 1e3);
                try {
                    yield l.installWindowsInstaller(e, t, null === (n = this.mAbortController) || void 0 === n ? void 0 : n.signal);
                } finally {
                    this.mProgressInterval && (clearInterval(this.mProgressInterval), this.mProgressInterval = null);
                }
                this.notifyInstallProgress(100), (yield o.promises.access(e).then(() => !0).catch(() => !1)) && (yield o.promises.unlink(e));
            });
        }
        notifyInstallProgress(e, t, n, r) {
            this.emit("install-progress", e), u.default.$emit(d.IPC_CHANNEL_INSTALL_PROGRESS, {
                percentage: e,
                speed: t,
                downloaded: n,
                total: r
            });
        }
        notifyInstallSuccess() {
            u.default.$emit(d.IPC_CHANNEL_INSTALL_SUCCESS);
        }
        notifyInstallError(e) {
            global.__log.info("[VClawInstaller] notifyInstallError: " + e), u.default.$emit(d.IPC_CHANNEL_INSTALL_ERROR, e);
        }
        saveInstallInfo(e) {
            var t;
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = {
                    version: (null === (t = this.mVersionInfo) || void 0 === t ? void 0 : t.version) || "1.0.0",
                    installedAt: (new Date).toISOString(),
                    installPath: e.installPath
                };
                this.mOptions.storage && (yield this.mOptions.storage.set(d.STORAGE_KEY, n), global.__log.info("[VClawInstaller] 安装信息已保存"));
            });
        }
        getInstallInfo() {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (this.mOptions.storage) {
                    return yield this.mOptions.storage.get(d.STORAGE_KEY);
                }
                return null;
            });
        }
        setVersionInfo(e) {
            this.mVersionInfo = e, global.__log.info("[VClawInstaller] 版本信息已设置");
        }
        getVersionInfo() {
            return this.mVersionInfo;
        }
        calculateSpeed(e, t) {
            if (t <= 0) return "0 B/s";
            const n = e / t;
            return n < 1024 ? n.toFixed(1) + " B/s" : n < 1048576 ? (n / 1024).toFixed(1) + " KB/s" : (n / 1048576).toFixed(1) + " MB/s";
        }
        cleanupOnCancel(e, t, n) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (global.__log.info("[VClawInstaller] 开始清理取消安装的文件"), yield o.promises.access(e).then(() => !0).catch(() => !1)) try {
                    yield o.promises.unlink(e), global.__log.info("[VClawInstaller] 已删除下载文件: " + e);
                } catch (e) {
                    global.__log.error("[VClawInstaller] 删除下载文件失败: " + e);
                }
                if ("darwin" === n && (yield o.promises.access(t).then(() => !0).catch(() => !1))) try {
                    yield o.promises.rm(t, {
                        recursive: !0,
                        force: !0
                    }), global.__log.info("[VClawInstaller] 已删除部分解压目录: " + t);
                } catch (e) {
                    global.__log.error("[VClawInstaller] 删除部分解压目录失败: " + e);
                }
                if ("win32" === n && (yield o.promises.access(t).then(() => !0).catch(() => !1))) try {
                    const e = yield o.promises.readdir(t);
                    e.length > 0 ? (global.__log.warn("[VClawInstaller] Windows 安装目录不为空，可能需要手动清理: " + t), 
                    global.__log.warn("[VClawInstaller] 目录内容: " + e.join(", "))) : (yield o.promises.rmdir(t), 
                    global.__log.info("[VClawInstaller] 已删除空安装目录: " + t));
                } catch (e) {
                    global.__log.error("[VClawInstaller] 检查/删除安装目录失败: " + e);
                }
            });
        }
    }
    t.default = d, d.STORAGE_KEY = "vclaw-installation", d.IPC_CHANNEL_INSTALL_PROGRESS = "vclaw:install-progress", 
    d.IPC_CHANNEL_INSTALL_SUCCESS = "vclaw:install-success", d.IPC_CHANNEL_INSTALL_ERROR = "vclaw:install-error";
}
