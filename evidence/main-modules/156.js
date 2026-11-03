// analysis/pretty/main.js:21518; webpack module 156
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(8)), o = n(104), a = n(10), s = n(32), l = r.__importDefault(n(1269)), c = n(2), u = r.__importDefault(n(55)), d = r.__importDefault(n(90)), h = n(131), p = r.__importDefault(n(89)), f = n(56), _ = n(100), m = n(305), g = r.__importDefault(n(4)), v = r.__importDefault(n(1)), y = r.__importDefault(n(216)), E = n(63), b = r.__importDefault(n(26)), w = r.__importDefault(n(349)), S = r.__importDefault(n(698)), T = r.__importDefault(n(6)), A = r.__importDefault(n(700)), O = "win32" === i.default.platform() ? n(699) : null;
    class C {
        constructor() {
            this.pcHostName = "";
        }
        static getInstance() {
            return null == this.instance && (this.instance = new C, this.instance.init()), this.instance;
        }
        init() {
            var e, t;
            this.getPlatformVersion(), setTimeout(() => {
                this.getPlatformVersion();
            }, 2e3), global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connction-manager-util.ts] init")), 
            setTimeout(() => {
                this.queryHostName();
            }, 200), c.ipcMain.handle(h.ConnectionMainEvent.GET_CURRENT_DEVICE_INFO, (e, t) => this.getDeviceInformation(t)), 
            this.onStartAdbProcess(), this.onPcsuiteStartSourceHandler(), this.onPowerSaveBlockerEvent(), 
            this.onGetFilesInfo(), this.onWindowFocus(), this.onToastHandler(), this.onCancelUsbConnect(), 
            this.onGetNetworkPermission(), this.onCheckSystemExtension(), this.onCheckShareCameraNeeded(), 
            this.onLaunchVCam(), this.initClipboardManager(), global && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[connction-manager-util.ts] init end"));
        }
        initClipboardManager() {
            var e, t;
            const n = A.default.getInstance(), r = p.default.getInstance().getWebContent();
            r ? (n.setWebContent(r), global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connection-main-util.ts][initClipboardManager] set webContent success"))) : global && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.warn("[connection-main-util.ts][initClipboardManager] webContent is null"));
        }
        onGetNetworkPermission() {
            c.ipcMain.on(f.ConnectionRendererEvent.GET_NETWORK_PERMISSION, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                var e;
                global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connction-manager-util.ts][GET_NETWORK_PERMISSION] agrs: " + JSON.stringify(t))), 
                this.getMacNetworkPermission();
            }));
        }
        onCancelUsbConnect() {
            c.ipcMain.handle(f.ConnectionRendererEvent.CANCEL_USB_CONNECT, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                var e;
                return global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connction-manager-util.ts][CANCEL_USB_CONNECT] agrs: " + JSON.stringify(t))), 
                p.default.getInstance().cancelUsbConnect(null == t ? void 0 : t.device);
            })), console.log("onCancelUsbConnect ...: ");
        }
        onToastHandler() {
            c.ipcMain.on(f.ConnectionRendererEvent.SHOW_TOAST, (e, t) => {
                var n;
                global && (null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info("[connction-manager-util.ts][SHOW_TOAST] agrs: " + JSON.stringify(t))), 
                w.default.getInstance().toast(t);
            }), c.ipcMain.on(f.ConnectionRendererEvent.CLOSE_TOAST, (e, t) => {
                var n;
                global && (null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info("[connction-manager-util.ts][CLOSE_TOAST] agrs: " + JSON.stringify(t))), 
                w.default.getInstance().closeToast(t);
            });
        }
        onWindowFocus() {
            c.ipcMain.on(f.ConnectionRendererEvent.FOCUS_MAIN_WINDOW, () => {
                var e;
                global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connction-manager-util.ts][FOCUS_MAIN_WINDOW] mainWindow: " + !!E.mainWindow)), 
                E.mainWindow && (E.mainWindow.isMinimized() && E.mainWindow.restore(), E.mainWindow.show(), 
                E.mainWindow.focus());
            });
        }
        onLaunchVCam() {
            c.ipcMain.on(f.ConnectionRendererEvent.LAUNCH_VCAM, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                var e;
                global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connection-main-util.ts][LAUNCH_VCAM] agrs: " + JSON.stringify(t))), 
                yield S.default.getInstance().launchVCamProcess(t);
            }));
        }
        onCheckSystemExtension() {
            c.ipcMain.handle(f.ConnectionRendererEvent.CHECK_SYSTEM_EXTENSION, (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                var e;
                return global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connection-main-util.ts][CHECK_SYSTEM_EXTENSION] args: " + JSON.stringify(t))), 
                this.checkSystemExtensionExists(null == t ? void 0 : t.extensionIdentifier);
            }));
        }
        onCheckShareCameraNeeded() {
            c.ipcMain.handle(f.ConnectionRendererEvent.CHECK_SHARE_CAMERA_NEEDED, () => r.__awaiter(this, void 0, void 0, function*() {
                var e, t;
                if (global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connection-main-util.ts][CHECK_SHARE_CAMERA_NEEDED]")), 
                "win32" !== i.default.platform()) return !0;
                try {
                    return O.allowInvokeShareCamera();
                } catch (e) {
                    return global && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[connection-main-util.ts][CHECK_SHARE_CAMERA_NEEDED] error: " + e)), 
                    !0;
                }
            }));
        }
        getMacNetworkPermission() {
            var e, t, r;
            if ("darwin" === i.default.platform()) try {
                const e = n(1431), {app: r} = n(2), i = v.default.resolve(v.default.dirname(r.getPath("exe")), "../", "Resources/vivoesService/VivoConnService/libLocalNetworkChecker.dylib");
                global && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[connection-main-util.ts][getMacNetworkPermission] dylibPath: " + i));
                const o = e.load(i), a = e.proto("void PermissionCallback(int)"), s = o.func("checkLocalNetworkPermissionWithCallback", "void", [ e.pointer(a) ]);
                this.permissionCallback = e.register(e => {
                    var t, n;
                    global && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[connection-main-util.ts][getMacNetworkPermission] result: " + e));
                    const r = p.default.getInstance().getWebContent();
                    r ? r.send(f.ConnectionRendererEvent.GET_NETWORK_PERMISSION, {
                        result: e
                    }) : global && (null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info("[connection-main-util.ts][getMacNetworkPermission] webContent is null"));
                }, e.pointer(a)), s(this.permissionCallback);
            } catch (e) {
                global && (null === (r = null === global || void 0 === global ? void 0 : global.__log) || void 0 === r || r.info("[connection-main-util.ts][getMacNetworkPermission] error: " + e));
            } else global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connection-main-util.ts][getMacNetworkPermission] Not Mac"));
        }
        onGetFilesInfo() {
            c.ipcMain.handle(m.CLOUD_TRANSFER_EVENT.GET_FILES_INFO, (e, t, n = 1e6, o = !0) => r.__awaiter(this, void 0, void 0, function*() {
                var e, a;
                if (!Array.isArray(t) || !t.length) return global && (null === (a = global.__log) || void 0 === a || a.info("[connection-main-util.ts][GET_FILES_INFO] err: invalid path list")), 
                {
                    fileList: [],
                    fileInfo: [],
                    totalSize: 0
                };
                try {
                    const e = {
                        fileList: [],
                        fileInfo: [],
                        totalSize: 0,
                        fileTypes: [],
                        isExceedRecursionMaxCount: !1
                    };
                    for (let a = 0; a < t.length; a++) {
                        const s = t[a], l = s.replace(/\\/g, "/").replace(/(\/[^/]*)$/i, ""), c = 1, u = (t, a, s, c, d) => r.__awaiter(this, void 0, void 0, function*() {
                            var r, h, p, f, _, m;
                            let y = c;
                            try {
                                const c = yield (E = t, new Promise((e, t) => {
                                    g.default.stat(E, (n, r) => {
                                        n ? t(n) : e(r);
                                    });
                                }));
                                if (c.isDirectory()) {
                                    const r = {
                                        fileName: v.default.basename(t),
                                        filePath: t,
                                        isDirectory: !0,
                                        isInFolder: !!d,
                                        size: c.size,
                                        modifiedTime: (null === (f = null === (p = c.mtime) || void 0 === p ? void 0 : p.getTime) || void 0 === f ? void 0 : f.call(p)) || Date.now(),
                                        fileType: "",
                                        relativePath: t.replace(/\\/g, "/").replace(l, "").replace(/(\/[^/]*)$/i, ""),
                                        children: []
                                    };
                                    if (s.push(r), o && a.push(r), y >= n) return e.isExceedRecursionMaxCount = !0, 
                                    void (global && (null === (_ = global.__log) || void 0 === _ || _.info(`[connection-main-util.ts][GET_FILES_INFO] exceed traverseMaxCount, count: ${y}, traverseMaxCount: ${n}, path: ${t}`)));
                                    y++;
                                    const i = g.default.readdirSync(t);
                                    for (let n = 0; n < i.length; n++) {
                                        const o = i[n], a = v.default.join(t, o);
                                        yield u(a, e.fileList, r.children, y, !0);
                                    }
                                } else {
                                    if ("darwin" === i.default.platform() && ".DS_Store" == v.default.basename(t)) return;
                                    if ("win32" === i.default.platform() && "desktop.ini" == v.default.basename(t)) return;
                                    const n = {
                                        fileName: v.default.basename(t),
                                        filePath: t,
                                        isDirectory: !1,
                                        isInFolder: !!d,
                                        size: c.size,
                                        modifiedTime: (null === (h = null === (r = c.mtime) || void 0 === r ? void 0 : r.getTime) || void 0 === h ? void 0 : h.call(r)) || Date.now(),
                                        fileType: v.default.extname(t).toLowerCase().replace(".", ""),
                                        relativePath: t.replace(/\\/g, "/").replace(l, "").replace(/(\/[^/]*)$/i, "")
                                    };
                                    n.fileType && !e.fileTypes.includes(n.fileType) && e.fileTypes.push(n.fileType), 
                                    s.push(n), a.push(Object.assign({}, n)), e.totalSize += n.size;
                                }
                            } catch (e) {
                                if (global && (null === (m = global.__log) || void 0 === m || m.info("[connection-main-util.ts][GET_FILES_INFO][readFile] error: " + e)), 
                                e && "EACCES" == e.code || "EPERM" == e.code) throw e;
                            }
                            var E;
                        });
                        yield u(s, e.fileList, e.fileInfo, c);
                    }
                    return e;
                } catch (t) {
                    return global && (null === (e = global.__log) || void 0 === e || e.info("[connection-main-util.ts][GET_FILES_INFO] err: " + t)), 
                    {
                        fileList: [],
                        fileInfo: [],
                        totalSize: 0,
                        error: t ? {
                            code: t.code,
                            message: t.message || ""
                        } : null
                    };
                }
            }));
        }
        onPowerSaveBlockerEvent() {
            c.ipcMain.handle(f.ConnectionRendererEvent.START_POWER_SAVE_BLOCKER, (e, t) => c.powerSaveBlocker.start(t)), 
            c.ipcMain.handle(f.ConnectionRendererEvent.STOP_POWER_SAVE_BLOCKER, (e, t) => {
                c.powerSaveBlocker.stop(t);
            });
        }
        onStartAdbProcess() {
            c.ipcMain.on(f.ConnectionRendererEvent.START_ADB_PROCESS, (e, t) => {
                var n;
                global && (null === (n = global.__log) || void 0 === n || n.info("[connection-main-util.ts][onStartAdbProcess] arg: " + JSON.stringify(t))), 
                p.default.getInstance().startAdbProcess();
            });
        }
        onPcsuiteStartSourceHandler() {
            c.ipcMain.once("GET_PCSUITE_START_SOURCE", (e, t) => {
                var n, r, i;
                "usbToast" == y.default.get().source && (null === (n = global.__log) || void 0 === n || n.info("[connection-main-util.ts][onGetPcsuiteStartSource] CmdInfoManager.source is usbToast"), 
                (null === (r = null === global || void 0 === global ? void 0 : global.__mainWindow) || void 0 === r ? void 0 : r.webContents) && (this.webContent = null === (i = null === global || void 0 === global ? void 0 : global.__mainWindow) || void 0 === i ? void 0 : i.webContents, 
                this.webContent.send("USB_TOAST_CLICK", y.default.get().source)));
            });
        }
        getDeviceInformation(e) {
            return new Promise(t => {
                const n = p.default.getInstance().getWebContent();
                if (!n || !e) return void t(null);
                n.send(f.ConnectionRendererEvent.GET_RENDERER_CURRENT_DEVICE_INFO, {
                    deviceType: e || _.DeviceType.PHONE
                });
                const r = setTimeout(() => {
                    c.ipcMain.removeAllListeners(f.ConnectionRendererEvent.GET_RENDERER_CURRENT_DEVICE_INFO), 
                    t(null);
                }, 3e3);
                c.ipcMain.once(f.ConnectionRendererEvent.GET_RENDERER_CURRENT_DEVICE_INFO, (e, n) => {
                    clearTimeout(r), t(n);
                });
            });
        }
        getConnectProcessIsEnd(e) {
            return new Promise(t => {
                const n = p.default.getInstance().getWebContent();
                if (!n || !e) return void t(!1);
                n.send(f.ConnectionRendererEvent.GET_CONNECT_PROCESS_IS_END, {
                    connectionId: e
                });
                const r = setTimeout(() => {
                    c.ipcMain.removeAllListeners(f.ConnectionRendererEvent.GET_CONNECT_PROCESS_IS_END), 
                    t(!1);
                }, 3e3);
                c.ipcMain.once(f.ConnectionRendererEvent.GET_CONNECT_PROCESS_IS_END, (e, n) => {
                    clearTimeout(r), t(null != (null == n ? void 0 : n.isEnd) && n.isEnd);
                });
            });
        }
        getPlatformVersion() {
            var e, t, n, r;
            const o = i.default.cpus(), s = {
                arch: i.default.arch(),
                cpuModel: o[0] && o[0].model || "",
                platform: i.default.platform(),
                version: i.default.release(),
                marketVersion: ""
            };
            global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info("[connction-manager-util.ts] getPlatformVersion: " + JSON.stringify(s)));
            const l = String(T.default.getItem("systemVersion") || "");
            if (l && (s.version = String(l), global && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("[connction-manager-util.ts] systemVersion: " + s.version))), 
            this.isSupportBleOrWlanConnect = !(s.cpuModel.includes("Snapdragon") || !s.platform.startsWith("win") && !s.platform.startsWith("darwin") || isNaN(parseInt(s.version)) || parseInt(s.version) < 10), 
            global && (null === (n = null === global || void 0 === global ? void 0 : global.__log) || void 0 === n || n.info("[config connection] isSupportBleOrWlanConnect: " + this.isSupportBleOrWlanConnect)), 
            this.platformInfo = s, "darwin" === s.platform) {
                let e = process.getSystemVersion();
                if (e) return s.marketVersion = e.trim(), this.platformInfo = s, s;
                a.exec("sw_vers -productVersion", (e, t, n) => {
                    var r;
                    return e ? (global && (null === (r = null === global || void 0 === global ? void 0 : global.__log) || void 0 === r || r.info("[connction-manager-util.ts] sw_vers -productVersion error: " + JSON.stringify(e))), 
                    s) : (s.marketVersion = t.trim(), this.platformInfo = s, s);
                });
            } else {
                global && (null === (r = null === global || void 0 === global ? void 0 : global.__log) || void 0 === r || r.info("[connction-manager-util.ts] 开始执行获取系统版本的命令"));
                const [e, t, n] = s.version.split(".").map(Number);
                e >= 10 && (s.marketVersion = n >= 22e3 ? "Microsoft Windows 11" : "Microsoft Windows 10");
            }
            return s;
        }
        getIsSupportBleOrWlanConnect() {
            return this.isSupportBleOrWlanConnect;
        }
        queryConnectionServiceBaseInfo() {
            return r.__awaiter(this, void 0, void 0, function*() {
                const e = JSON.stringify({
                    event: "getConnectionServiceBaseInfo",
                    app: "pcsuite",
                    args: []
                }), t = yield u.default.post(d.default.VIVOES_SERVER_URL, `${e.length}#${e}`, {
                    responseType: "text",
                    timeout: 3e3
                });
                global.__log.info("[queryConnectionServiceBaseInfo][httpRequest] res: " + t.data);
                const n = t.data;
                if ("string" != typeof n) throw new Error("wrong data type");
                let r = n.indexOf("#", 0);
                if (-1 == r) throw new Error("Bad data: " + n);
                let i = n.substring(r + 1).trim();
                if ("" === i) throw new Error("Bad data: " + n);
                return JSON.parse(i);
            });
        }
        queryHostName() {
            return new Promise(e => {
                if ("darwin" === i.default.platform()) this.pcHostName = i.default.hostname().replace(/.local$/, ""), 
                a.exec("scutil --get ComputerName", (t, n) => {
                    var r, i;
                    if (t) return global && (null === (r = null === global || void 0 === global ? void 0 : global.__log) || void 0 === r || r.info("darwin getHostName error: " + t)), 
                    void e(this.pcHostName);
                    this.pcHostName = "string" == typeof n ? n.trim() : this.pcHostName, e(this.pcHostName), 
                    global && (null === (i = null === global || void 0 === global ? void 0 : global.__log) || void 0 === i || i.info(`darwin getHostName stdout: ${n}, pcHostName: ${this.pcHostName}`));
                }); else {
                    const t = () => new Promise((t, n) => {
                        const r = a.spawn("cmd", [ "/c", "hostname" ]);
                        r.stdout.on("data", r => {
                            var i, o;
                            const a = l.default.decode(r, "GB18030"), s = l.default.encode(a, "UTF-8").toString().trim();
                            s && (null == s ? void 0 : s.length) <= 100 ? (this.pcHostName = s, t(this.pcHostName), 
                            e(this.pcHostName)) : (n(s), global && (null === (i = global.__log) || void 0 === i || i.info("win hostname abnormal: " + s))), 
                            global && (null === (o = global.__log) || void 0 === o || o.info(`win HostName: ${this.pcHostName}, hex: ${Buffer.from(r).toString("hex")}`));
                        }), r.on("error", e => {
                            var t;
                            n(e), global && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("win getHostName error: " + e));
                        }), r.stderr.on("data", e => {
                            var t;
                            n(e), global && (null === (t = null === global || void 0 === global ? void 0 : global.__log) || void 0 === t || t.info("win getHostName stderr: " + e));
                        });
                    });
                    this.queryConnectionServiceBaseInfo().then(n => {
                        var r, i, o;
                        0 === (null == n ? void 0 : n.error) && (null === (r = n.data) || void 0 === r ? void 0 : r.hostname) ? (global.__log.info("[queryConnectionServiceBaseInfo] hostname: " + (null === (i = n.data) || void 0 === i ? void 0 : i.hostname)), 
                        this.pcHostName = null === (o = n.data) || void 0 === o ? void 0 : o.hostname, e(this.pcHostName)) : t().catch(() => {
                            var t, n;
                            const r = b.default.getConfigIni();
                            r && (global && (null === (t = global.__log) || void 0 === t || t.info("win hostname configIni: " + !!r)), 
                            r.hostName && (this.pcHostName = r.hostName, global && (null === (n = global.__log) || void 0 === n || n.info("win hostname configIni pcHostName: " + this.pcHostName)), 
                            e(this.pcHostName))), e(this.pcHostName);
                        });
                    }).catch(n => {
                        t().catch(() => {
                            var t, n;
                            const r = b.default.getConfigIni();
                            r && (global && (null === (t = global.__log) || void 0 === t || t.info("win hostname configIni: " + !!r)), 
                            r.hostName && (this.pcHostName = r.hostName, global && (null === (n = global.__log) || void 0 === n || n.info("win hostname configIni pcHostName: " + this.pcHostName)))), 
                            e(this.pcHostName);
                        }), global.__log.info("[queryConnectionServiceBaseInfo] error: " + n);
                    });
                }
            });
        }
        getHostName() {
            return this.pcHostName;
        }
        getConnectedState() {
            return this.platformInfo || {
                arch: "",
                cpuModel: "",
                platform: "",
                version: ""
            };
        }
        getLocalhostIp() {
            var e;
            try {
                const e = i.default.networkInterfaces(), t = [];
                for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n) && !n.startsWith("Loopback Pseudo-Interface") && "lo0" !== n) {
                    const r = e[n] || [];
                    for (let e = 0; e < r.length; e++) {
                        const n = r[e];
                        if (n.family.startsWith("IPv4")) {
                            t.push(n);
                            break;
                        }
                    }
                }
                return t;
            } catch (t) {
                return global && (null === (e = global.__log) || void 0 === e || e.info("[ConnectionModule][connection-main-util.ts][getLocalhostIp] error: " + JSON.stringify(t))), 
                [];
            }
        }
        pingIp(e, t) {
            return new Promise((n, r) => {
                var i;
                let o = null != t ? setTimeout(() => {
                    var e;
                    o = null, r(`ping timeout ${t}ms`), global && (null === (e = global.__log) || void 0 === e || e.info(`ping ip err: timeout ${t}ms`));
                }, t) : null;
                const s = "darwin" === this.platformInfo.platform ? "ping -c 3 -W 500 " + e : "ping -n 3 -w 500 " + e;
                global && (null === (i = global.__log) || void 0 === i || i.info("ping ip cmd: " + s)), 
                a.exec(s, (e, t, i) => {
                    var a, s;
                    e ? (null !== o && (clearTimeout(o), o = null), r(e), global && (null === (a = global.__log) || void 0 === a || a.info("ping ip err: " + e))) : (null !== o && (clearTimeout(o), 
                    o = null), n(t), global && (null === (s = global.__log) || void 0 === s || s.info("ping ip stdout: " + t)));
                });
            });
        }
        telnetIpPort(e, t, n = 5e3) {
            return new Promise((r, i) => {
                var l, c;
                global && (null === (l = global.__log) || void 0 === l || l.info(`telnet ip&port ip: ${e}, port: ${t}`));
                let u = setTimeout(() => {
                    var e;
                    u = null, i(`telnet timeout ${n}ms`), global && (null === (e = global.__log) || void 0 === e || e.info(`telnet ip&port err: timeout ${n}ms`));
                }, n);
                if ("darwin" !== this.platformInfo.platform) {
                    const n = new o.Socket;
                    return n.setTimeout(1e3), n.connect({
                        port: t,
                        host: e
                    }), n.once("connect", () => {
                        var e;
                        global && (null === (e = global.__log) || void 0 === e || e.info("socket connect")), 
                        null !== u && (clearTimeout(u), u = null, r(!0));
                    }), n.once("error", e => {
                        var t;
                        global && (null === (t = global.__log) || void 0 === t || t.info("telnet ip&port err: " + e)), 
                        null !== u && (clearTimeout(u), u = null, i(e));
                    }), n.once("close", e => {
                        var t;
                        global && (null === (t = global.__log) || void 0 === t || t.info("socket close hadError: " + e));
                    }), void n.once("timeout", () => {
                        var e;
                        global && (null === (e = global.__log) || void 0 === e || e.info("socket timeout")), 
                        n.end(), n.destroy();
                    });
                }
                const d = `echo -e "\\x1dclose\\x0d" | "${s.PathUtil.getTelnetPath()}" ${e} ${t}`;
                global && (null === (c = global.__log) || void 0 === c || c.info("telnet ip&port cmd: " + d)), 
                a.exec(d, (e, t, n) => {
                    var o, a;
                    e ? (null !== u && (clearTimeout(u), u = null, i(e)), global && (null === (o = global.__log) || void 0 === o || o.info("telnet ip&port err: " + e))) : (null !== u && (clearTimeout(u), 
                    u = null, r(t)), global && (null === (a = global.__log) || void 0 === a || a.info("telnet ip&port stdout: " + t)));
                });
            });
        }
        getHexCodeStr(e) {
            const t = [];
            for (let n of e) {
                const e = ("0" + n.charCodeAt(0).toString(16)).slice(-2).toUpperCase();
                t.push(e);
            }
            return t.join("");
        }
        checkSystemExtensionExists(e, t = 5e3) {
            return new Promise(n => {
                var r, o;
                if ("darwin" !== i.default.platform()) return global && (null === (r = null === global || void 0 === global ? void 0 : global.__log) || void 0 === r || r.info("[connection-main-util.ts][checkSystemExtensionExists] Not Mac")), 
                void n({
                    exists: !1,
                    unauthorized: !1,
                    output: "Not a Mac platform"
                });
                if (!e) return global && (null === (o = null === global || void 0 === global ? void 0 : global.__log) || void 0 === o || o.info("[connection-main-util.ts][checkSystemExtensionExists] extensionIdentifier is required")), 
                void n({
                    exists: !1,
                    unauthorized: !1,
                    output: "extensionIdentifier is required"
                });
                const s = setTimeout(() => {
                    var e;
                    global && (null === (e = null === global || void 0 === global ? void 0 : global.__log) || void 0 === e || e.info(`[connection-main-util.ts][checkSystemExtensionExists] timeout: ${t}ms`)), 
                    n({
                        exists: null,
                        unauthorized: !1,
                        output: "timeout"
                    });
                }, t);
                a.exec("systemextensionsctl list", (t, r, i) => {
                    var o, a;
                    if (clearTimeout(s), t) return global && (null === (o = null === global || void 0 === global ? void 0 : global.__log) || void 0 === o || o.info("[connection-main-util.ts][checkSystemExtensionExists] exec error: " + t)), 
                    void n({
                        exists: null,
                        unauthorized: !1,
                        output: i || t.message
                    });
                    global && (null === (a = null === global || void 0 === global ? void 0 : global.__log) || void 0 === a || a.info("[connection-main-util.ts][checkSystemExtensionExists] stdout: " + r));
                    const l = r.split("\n");
                    let c = !1, u = !1;
                    l.forEach(t => {
                        if (!t.includes(e)) return;
                        const n = t.match(/\[([^\]]+)\]/);
                        if (!n) return;
                        const r = n[1].trim(), i = r.split(/\s+/);
                        i.includes("activated") && i.includes("enabled") && (c = !0), r.includes("activated waiting for user") && (u = !0);
                    }), n({
                        exists: c,
                        unauthorized: u,
                        output: r
                    });
                });
            });
        }
    }
    t.default = C;
}
