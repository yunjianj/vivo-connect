// analysis/pretty/main.js:15008; webpack module 89
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DeviceManager = t.PROCESS_STATUS = void 0;
    const r = n(0), i = r.__importStar(n(409)), o = r.__importDefault(n(1)), a = n(2), s = n(56), l = r.__importStar(n(25)), c = r.__importStar(n(8)), u = n(32), d = r.__importDefault(n(90)), h = n(609), p = r.__importStar(n(127)), f = r.__importDefault(n(55)), _ = r.__importDefault(n(43)), m = r.__importDefault(n(1169)), g = r.__importDefault(n(103)), v = r.__importStar(n(4)), y = r.__importDefault(n(156)), E = n(1432), b = n(1433), w = n(100), S = r.__importDefault(n(6)), T = n(131), A = n(46), O = r.__importDefault(n(113));
    let C = p.default;
    const N = f.default.create();
    let I = !1;
    var R;
    !function(e) {
        e.NOT_STARTED = "NOT_STARTED", e.STARTING = "STARTING", e.STARTED = "STARTED", e.START_FAILED = "START_FAILED";
    }(R = t.PROCESS_STATUS || (t.PROCESS_STATUS = {}));
    class D {
        constructor() {
            this._adbProcessStatus = R.NOT_STARTED, this.startAdbProcessTimer = null, this._oldAdbDevices = [], 
            global.__log.info("adb getAppPath: " + a.app.getAppPath()), global.__log.info("adb getPath: " + a.app.getPath("exe"));
            let e = "adb";
            if ("darwin" === c.platform()) e = o.default.resolve(o.default.dirname(a.app.getPath("exe")), "../", "Resources/adb/adb"); else {
                const t = A.getSysVersion(), n = "number" == typeof t ? t : parseInt(t);
                global.__log.info(`[devicemanager.ts][constructor] sysVersion: ${t}, sysVersionNum: ${n}`), 
                e = n >= 10 ? o.default.resolve(o.default.dirname(a.app.getPath("exe")), "adb_41/adb") : o.default.resolve(o.default.dirname(a.app.getPath("exe")), "adb/adb");
            }
            global.__log.info("adb bin path: " + e), this.devices = [], this.queue = [], this.webContent = null, 
            this.consuming = !1, this.connecting = !1, this.portMap = new Map, this.currentPort = 10380, 
            this.token = "", this.vivoAccount = "", this.updateFiles = [];
        }
        static getInstance() {
            return D.instance || (D.instance = new D, D.instance._init()), D.instance;
        }
        startAdbProcess() {
            this.isNeedStartAdbProcess() ? (global.__log.info("[devicemanager.ts][startAdbProcess] init adb process"), 
            this._init()) : global.__log.info("[devicemanager.ts][startAdbProcess] no need to start adb process, adbProcessStatus: " + this.adbProcessStatus);
        }
        getAdbBinPath() {
            global.__log.info("adb getAppPath: " + a.app.getAppPath()), global.__log.info("adb getPath: " + a.app.getPath("exe"));
            let e = "adb";
            if ("darwin" === c.platform()) e = o.default.resolve(o.default.dirname(a.app.getPath("exe")), "../", "Resources/adb/adb"); else {
                const t = A.getSysVersion(), n = "number" == typeof t ? t : parseInt(t);
                global.__log.info(`[devicemanager.ts][constructor] sysVersion: ${t}, sysVersionNum: ${n}`), 
                e = n >= 10 ? o.default.resolve(o.default.dirname(a.app.getPath("exe")), "adb_41/adb") : o.default.resolve(o.default.dirname(a.app.getPath("exe")), "adb/adb");
            }
            return global.__log.info("adb bin path: " + e), e;
        }
        createAdbClient() {
            return r.__awaiter(this, void 0, void 0, function*() {
                console.time("createAdbClient");
                const e = this.getAdbBinPath();
                let t = parseInt(process.env.ANDROID_ADB_SERVER_PORT || "5037", 10);
                const [n, r] = yield m.default(u.getPortsByServiceName("win32" === c.platform() ? "adb.exe" : "adb"));
                if (global.__log.info(`[devicemanager.ts][createAdbClient] getPortsByServiceName adb: ports: ${r} err: ${n}`), 
                Array.isArray(r) && r.length > 0) t = r.includes(t) ? t : r[0]; else {
                    const [e, n] = yield m.default(u.isPortInUse(t));
                    global.__log.info(`[devicemanager.ts][createAdbClient] isPortInUse ${t}: ${n}`), 
                    e && global.__log.error("[devicemanager.ts][createAdbClient] isPortInUse err: " + e), 
                    n && (yield u.killProcessByPort(t));
                }
                console.timeEnd("createAdbClient"), this.client = i.createClient({
                    port: t,
                    host: "127.0.0.1",
                    bin: e
                }), global.__log.info("[devicemanager.ts][createAdbClient] adb use port: " + t);
            });
        }
        isNeedStartAdbProcess() {
            return this._adbProcessStatus !== R.STARTING && this._adbProcessStatus !== R.STARTED;
        }
        get adbProcessStatus() {
            return this._adbProcessStatus;
        }
        addUpdateJob(e = !0) {
            this.queue.push(() => C.delay(100).then(function() {
                return D.getInstance().update(e);
            })), this._consume();
        }
        addConnectJob(e, t, n, r) {
            this.queue.push(() => this.startConnectImpl(e, t, n, r)), this._consume();
        }
        _consume() {
            if (!0 === this.consuming) return;
            let e = this.queue.shift();
            e && (this.consuming = !0, e().then(() => {
                this.consuming = !1, this._consume();
            }));
        }
        _isCarMode(e) {
            return new Promise(t => {
                this.client.shell(e, "getprop sys.usb.state").then(i.util.readAll).then(e => {
                    const n = e.toString("utf8").trim(), r = n.includes("car,vusbd");
                    global.__log.info(`adb shell getprop sys.usb.state success: ${n} ${r}`), t(r);
                }).catch(e => {
                    global.__log.error("adb shell getprop sys.usb.state fail: " + (null == e ? void 0 : e.message)), 
                    t(!1);
                });
            });
        }
        _switchToChargingMode(e) {
            return new Promise((t, n) => {
                this.client.shell(e, "svc usb setFunctions none").then(i.util.readAll).then(e => {
                    global.__log.info("adb shell svc usb setFunctions none success: " + e.toString("utf8")), 
                    t();
                }).catch(e => {
                    global.__log.error("adb shell svc usb setFunctions none fail: " + (null == e ? void 0 : e.message)), 
                    n(e);
                });
            });
        }
        _init() {
            this._adbProcessStatus = R.STARTING;
            let e = this;
            null != this.startAdbProcessTimer && (clearTimeout(this.startAdbProcessTimer), this.startAdbProcessTimer = null), 
            this.startAdbProcessTimer = setTimeout(() => {
                this._adbProcessStatus === R.STARTING && (this._adbProcessStatus = R.START_FAILED), 
                this.startAdbProcessTimer = null;
            }, 12e4), null != this.startAdbProcessTimer && (clearTimeout(this.startAdbProcessTimer), 
            this.startAdbProcessTimer = null), this.startAdbProcessTimer = setTimeout(() => {
                this._adbProcessStatus === R.STARTING && (this._adbProcessStatus = R.START_FAILED), 
                this.startAdbProcessTimer = null;
            }, 12e4), this.createAdbClient().then(() => {
                e.client.version().then(t => (global.__log.info("adb version " + t), e._oldAdbDevices = [], 
                t < 39 ? (global.__log.info("adb version too low and kill ..."), e.client.kill().then(() => (global.__log.info("start delay ..."), 
                C.delay(5e3))).then(() => (global.__log.info("start trackDevices ..."), e.client.trackDevices())).catch(function(t) {
                    return global.__log.info("kill went wrong:", t), global.__log.info("start trackDevices ..."), 
                    e.client.trackDevices();
                })) : (global.__log.info("start trackDevices ..."), e.client.trackDevices()))).then(function(t) {
                    global.__log.info("trackDevices success ..."), e._adbProcessStatus = R.STARTED, 
                    null != e.startAdbProcessTimer && (clearTimeout(e.startAdbProcessTimer), e.startAdbProcessTimer = null), 
                    t.on("add", function(t) {
                        global.__log.info(`Device ${t.id} was plugged in`), global.__log.info(`device info: device id : ${t.id} ,  device type : ${t.type}, device id : ${t.id} `), 
                        e.portMap.set(t.id, e.generatePort()), "device" === t.type && e.addUpdateJob();
                    }), t.on("remove", function(t) {
                        global.__log.info("Device %s was remove", t.id), e.portMap.delete(t.id), e.addUpdateJob();
                    }), t.on("change", function(t) {
                        return r.__awaiter(this, void 0, void 0, function*() {
                            global.__log.info("Device %s was change", t.id);
                            (yield e._isCarMode(t.id)) && (yield e._switchToChargingMode(t.id)), e.addUpdateJob();
                        });
                    }), t.on("end", function() {
                        global.__log.info("Tracking stopped"), e._oldAdbDevices = [], e._adbProcessStatus = R.NOT_STARTED, 
                        null != e.startAdbProcessTimer && (clearTimeout(e.startAdbProcessTimer), e.startAdbProcessTimer = null), 
                        e.webContent && e.webContent.send(s.ConnectionRendererEvent.UPDATE_DEVICE_LIST, []);
                    }), t.on("error", function(t) {
                        e._oldAdbDevices = [], global.__log.info("tracker on Error! adb.exe maybe get killed!", t), 
                        e._adbProcessStatus = R.START_FAILED, null != e.startAdbProcessTimer && (clearTimeout(e.startAdbProcessTimer), 
                        e.startAdbProcessTimer = null), e.webContent && e.webContent.send(s.ConnectionRendererEvent.UPDATE_DEVICE_LIST, []), 
                        C.delay(4e3).then(() => {
                            global.__log.info("ready to run _init", t), e.startAdbProcess();
                        });
                    });
                }).catch(function(t) {
                    global.__log.info("trackDevices went wrong:", t), e._adbProcessStatus = R.START_FAILED, 
                    null != e.startAdbProcessTimer && (clearTimeout(e.startAdbProcessTimer), e.startAdbProcessTimer = null);
                });
            }).catch(e => {
                global.__log.error("[devicemanager.ts][_init] createAdbClient err: " + e);
            });
        }
        update(e = !0) {
            this.devices = [];
            let t = this.client, n = this;
            return t.listDevices().then(function(e) {
                return C.filter(e, function(e) {
                    return "device" === e.type;
                });
            }).then(function(e) {
                return C.filter(e, function(e) {
                    return t.shell(e.id, "settings get secure connbase_id").then(i.util.readAll).then(t => {
                        const n = t.toString("utf8").trim();
                        return n && (e.connbaseId = y.default.getInstance().getHexCodeStr(n.slice(0, 4)), 
                        global.__log.info("adb shell get connbase_id success: " + n)), !0;
                    }).catch(function(e) {
                        return global.__log.info("adb shell get connbase_id fail, will retry in 1min", e), 
                        setTimeout(() => {
                            n.addUpdateJob();
                        }, 6e4), !0;
                    });
                });
            }).then(function(e) {
                return C.map(e, function(e) {
                    return t.getProperties(e.id).then(function(t) {
                        global.__log.info(`getProperties ro.vivo.device.overseas: ${t["ro.vivo.product.overseas"]} `), 
                        global.__log.info(`devicemanager.ts process.env.IS_EXPORT: ${"undefined" != typeof __buildConfig__ ? __buildConfig__.IS_EXPORT : ""} `), 
                        "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT && "yes" != t["ro.vivo.product.overseas"] || !("undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT || "yes" != t["ro.vivo.product.overseas"]) || (n.devices.push(e), 
                        l.isEmpty(t["ro.vivo.market.name"]) ? l.isEmpty(t["ro.config.marketing_name"]) ? l.isEmpty(t["ro.oppo.market.name"]) ? l.isEmpty(t["ro.vivo.camera.watermark"]) ? e.model = t["ro.product.model"] : e.model = t["ro.vivo.camera.watermark"] : e.model = t["ro.oppo.market.name"] : e.model = t["ro.config.marketing_name"] : e.model = t["ro.vivo.market.name"], 
                        global.__log.info(`getProperties model : ${e.id} , ${e.model}`), e.brand = (t["ro.product.brand"] || "").toLowerCase(), 
                        global.__log.info(`[devicemanager.ts][getProperties] sys.usb.office.suite = ${t["sys.usb.office.suite"]}, sys.usb.office.suite.support = ${t["sys.usb.office.suite.support"]}`), 
                        e.isSelectedSuite = ("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT) && t["sys.usb.office.suite"], 
                        e.isSupportSuite = ("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT) && t["sys.usb.office.suite.support"], 
                        global.__log.info(`[devicemanager.ts][getProperties] device.isSelectedSuite = ${e.isSelectedSuite}, device.isSupportSuite = ${e.isSupportSuite}`), 
                        global.__log.info(`getProperties sucess : ${e.id} , ${e.model}`), e.sdkVer = parseInt(t["ro.build.version.sdk"].trim()), 
                        global.__log.info(`getProperties brand ${e.id} , ${e.brand}`), global.__log.info("getProperties ro.vivo.device.type is  " + t["ro.vivo.device.type"]), 
                        e.type = w.DeviceType.PHONE, l.isEmpty(t["ro.vivo.device.type"]) || "tablet" == t["ro.vivo.device.type"] && (e.type = w.DeviceType.PAD));
                    }).catch(function(e) {
                        global.__log.info("getProperties went wrong:", e);
                    });
                });
            }).then(() => {
                if (n.webContent && e) {
                    const e = n.getDevices();
                    if (e.length != this._oldAdbDevices.length) this._oldAdbDevices = e, n.webContent.send(s.ConnectionRendererEvent.UPDATE_DEVICE_LIST, e); else {
                        let t = !1;
                        e.forEach(e => {
                            this._oldAdbDevices.find(t => e.id == t.id) || (t = !0);
                        }), t && (this._oldAdbDevices = e, n.webContent.send(s.ConnectionRendererEvent.UPDATE_DEVICE_LIST, e));
                    }
                }
            }).catch(function(e) {
                global.__log.info("update listDevices went wrong:" + e);
            });
        }
        getDevices() {
            return l.isEmpty(this.devices) && this.addUpdateJob(!1), this.devices;
        }
        installApk(e) {
            return this.startInstall(e.id);
        }
        startInstall(e) {
            const t = o.default.resolve(a.app.getAppPath(), "static", "es.apk");
            global.__log.info("startInstall pathToApk %s", t);
            let n = {
                apk: t
            }, i = this, c = "";
            return this.client.getProperties(e).then(function(t) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    let r = l.lowerCase(t["ro.product.brand"]);
                    return u.is_vivo(r) && (c = yield u.getInstallArgs(i.client, e), n.args = [ "-V" + c ]), 
                    i.client.install(e, n);
                });
            }).catch(t => {
                var r;
                return global.__log.info("install failed: " + t.message), 0 == l.isEmpty(c) ? (global.__log.info("install failed and try again", t), 
                n.args = [ "-v" + c ], i.client.install(e, n)) : (null === (r = i.webContent) || void 0 === r || r.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, h.CONNECT_FAIL_ERROR_CODE.INSTALL_APK_FAIL), 
                Promise.reject(t));
            });
        }
        startInstallPro(e, t) {
            global.__log.info("startInstallPro pathToApk %s", t);
            let n = {
                apk: t
            }, i = this, o = "";
            return this.client.getProperties(e).then(function(t) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    let r = l.lowerCase(t["ro.product.brand"]);
                    return u.is_vivo(r) && (o = yield u.getInstallArgs(i.client, e), n.args = [ "-V" + o ]), 
                    i.client.install(e, n);
                });
            }).catch(t => (global.__log.info("install failed: " + t.message), 0 == l.isEmpty(o) ? (global.__log.info("install failed and try again", t), 
            n.args = [ "-v" + o ], i.client.install(e, n)) : Promise.reject(t)));
        }
        startForward(e) {
            var t, n, i;
            return r.__awaiter(this, void 0, void 0, function*() {
                let r = this.portMap.get(e);
                global.__log.info("[startForward] this.portMap.get(deviceId) %s", r), null == r && (r = 10380);
                let o = r;
                const a = (t, n) => new Promise((r, i) => {
                    this.client.forward(e, "tcp:" + t, "tcp:" + n).then(() => {
                        global.__log.info(`forward sucess ${e} current port ${t} -> ${n}`), r("");
                    }).catch(r => {
                        global.__log.info(`forward err ${e} current port ${t} -> ${n}, ${r}`), i(r);
                    });
                });
                let l = 0;
                for (;l <= 5; ) try {
                    yield a(o, d.default.connectionServerPort.toString()), this.currentPort = o, null === (t = this.webContent) || void 0 === t || t.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_START_PHONE_MAPPING, "OK");
                    break;
                } catch (t) {
                    if ("FailError" == t.name && t.message.startsWith("Failure:") && (t.message.endsWith("(10013)'") || t.message.endsWith("(10048)'"))) {
                        if (l++, l > 5) throw global.__log.info("[startForward] max retries 5 exceeded, port " + o), 
                        null === (n = this.webContent) || void 0 === n || n.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_START_PHONE_MAPPING, "FAILED"), 
                        t;
                        o += 500, this.portMap.set(e, o), global.__log.info(`[startForward] retry ${l}/5 with new port ${o}`);
                        continue;
                    }
                    throw null === (i = this.webContent) || void 0 === i || i.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_START_PHONE_MAPPING, "FAILED"), 
                    t;
                }
                try {
                    yield a(o + 1, d.default.mirrorServcerPort.toString()), yield a(o + 2, d.default.VDFS_MOBILE_DEVICE_PORT.toString()), 
                    yield a(o + 3, d.default.RELAY_MOBILE_DEVICE_PORT.toString());
                } catch (e) {
                    global.__log.info("[startForward] forwardTask err: " + e);
                }
                try {
                    const t = yield this.client.listForwards(e);
                    global.__log.info("[startForward] listForwards success: " + JSON.stringify(t));
                } catch (e) {
                    global.__log.info("[startForward] listForwards err: " + e);
                }
            });
        }
        startReverse(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = t => new Promise((n, r) => {
                    const i = "tcp:" + t;
                    this.client.reverse(e, i, i).then(() => {
                        global.__log.info(`[startReverse] sucess ${e} current port ${t} -> ${t}`), n("");
                    }).catch(r => {
                        global.__log.info(`[startReverse] err ${e} current port ${t}`, r), n(r);
                    });
                });
                try {
                    yield t(d.default.VDFS_PC_PORT.toString());
                } catch (e) {}
                try {
                    yield t(d.default.RELAY_PC_PORT.toString());
                } catch (e) {}
                try {
                    const t = yield this.client.listReverses(e);
                    global.__log.info("[startReverse] listReverses success: " + JSON.stringify(t));
                } catch (e) {
                    global.__log.info("[startReverse] listReverses err: " + e);
                }
            });
        }
        hasScreenLocked(e) {
            return new Promise(t => {
                this.client.shell(e, "dumpsys window policy | grep mIsShowing").then(i.util.readAll).then(e => {
                    global.__log.info("[hasScreenLocked] output = " + e.toString());
                    try {
                        e.toString().includes("mIsShowing=true") ? t(!0) : t(!1);
                    } catch (e) {
                        t(!1);
                    }
                }).catch(e => {
                    t(!1), global.__log.info("[hasScreenLocked] error = " + e);
                });
            });
        }
        startMainActivity(e) {
            let t = this.client;
            return new C((n, r) => {
                global.__log.info("phone brand: " + e.brand), t.startActivity(e.id, {
                    action: "vivo.intent.action.PCSUITE_INTENT",
                    flags: 268435456,
                    extras: {
                        intent_from: 1104
                    }
                }).then(() => {
                    var t;
                    global.__log.info("startSplashScreenActivity ", e.model), null === (t = this.webContent) || void 0 === t || t.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_START_PHONE_PCSUITE, "OK"), 
                    n();
                }).catch(t => {
                    var n, i;
                    null === (n = this.webContent) || void 0 === n || n.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_START_PHONE_PCSUITE, "FAILED"), 
                    null === (i = this.webContent) || void 0 === i || i.send(s.ConnectionRendererEvent.USB_STARTACTIVITY_FAILED, e), 
                    global.__log.info("startSplashScreenActivity error: ", t), r(t);
                });
            });
        }
        startServer(e, t, n) {
            let r = this.client, i = {
                component: "com.vivo.pcsuite/.service.AdbPortalService",
                extras: {
                    from: "pc",
                    foreground: 0,
                    pc_name: u.maskPcName(y.default.getInstance().getHostName()),
                    token: this.token,
                    user_name: this.vivoAccount,
                    connectionId: t,
                    isTransferConnect: null != n ? n : 0
                }
            };
            return global.__log.info("[devicemanager.ts][startServer] extras: " + JSON.stringify(i.extras)), 
            new C((t, n) => {
                r.startService(e.id, i).then(() => {
                    var e;
                    global.__log.info("startService"), null === (e = this.webContent) || void 0 === e || e.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_START_PHONE_SERVICE, "OK"), 
                    t();
                }).catch(o => {
                    global.__log.info("startServer error: ", o), global.__log.info("startServer foreground"), 
                    i = Object.assign(Object.assign({}, i), {
                        foreground: 1
                    }), r.startService(e.id, i).then(() => {
                        var e;
                        global.__log.info("startServer foreground success"), null === (e = this.webContent) || void 0 === e || e.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_START_PHONE_SERVICE, "OK"), 
                        t();
                    }).catch(e => {
                        var t;
                        null === (t = this.webContent) || void 0 === t || t.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_START_PHONE_SERVICE, "FAILED"), 
                        n(e);
                    });
                });
            });
        }
        cancelUsbConnect(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!e) return Promise.reject("device is null");
                let t = this.client, n = {
                    component: "com.vivo.pcsuite/.service.AdbPortalService",
                    extras: {
                        cancelConnect: !0
                    }
                };
                return yield C.delay(400), new C(r => {
                    t.startService(e.id, n).then(() => {
                        global.__log.info("cancelUsbConnect succ"), r(!0);
                    }).catch(e => {
                        global.__log.info("cancelUsbConnect error: " + e);
                    });
                });
            });
        }
        startObserver(e) {
            return new C((t, n) => {
                this.client.shell(e.id, "monkey -p com.vivo.pcsuite -c android.intent.category.LAUNCHER 1").then(() => {
                    this.client.shell(e.id, "am broadcast -a vivo.intent.action.startObserver --include-stopped-packages");
                }).then(e => {
                    global.__log.info("startObserver output"), global.__log.info(e), t();
                }).catch(e => {
                    global.__log.info("startObserver error: ", e), n(e);
                });
            });
        }
        startConnect(e, t, n, r, i, o) {
            global.__log.info(`startConnect device id: ${e.id}, token: ${t}`), console.log(this.connecting), 
            this.token = t, this.vivoAccount = n, this.addConnectJob(e, r, i, o);
        }
        checkVersion(e) {
            return new Promise((t, n) => r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[devicemanager][checkVersion] start to http version request"), 
                global.__log.info("... start get version port:" + this.getCurrentPort());
                let i = setTimeout(() => r.__awaiter(this, void 0, void 0, function*() {
                    var t;
                    global.__log.info("version 请求异常: timeout"), (yield y.default.getInstance().getConnectProcessIsEnd(e)) ? n(new Error("ALREADY_CANCEL")) : (null === (t = this.webContent) || void 0 === t || t.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.GET_VERSION, "FAILED"), 
                    n(new Error("VERSION_CATCH_ERROR")));
                }), 12e3);
                let o = null;
                for (let r = 1; r <= 2; r++) try {
                    if (r > 1 && (yield C.delay(1500), yield y.default.getInstance().getConnectProcessIsEnd(e))) throw new Error("ALREADY_CANCEL");
                    const o = yield this.sendVersionRequest(e);
                    try {
                        const e = yield this.handleVersionResponse(o);
                        t(e);
                    } catch (e) {
                        n(e);
                    }
                    return void clearTimeout(i);
                } catch (e) {
                    if (global.__log.info(`[devicemanager.ts][checkVersion]request version error, count: ${r}, err: ${null == e ? void 0 : e.toString()}`), 
                    null == e ? void 0 : e.toString().includes("ALREADY_CANCEL")) return clearTimeout(i), 
                    n(e);
                    o = e;
                }
                clearTimeout(i), n(o);
            }));
        }
        sendVersionRequest(e) {
            return new Promise((t, n) => {
                try {
                    global.__log.info("token is " + this.token);
                    const i = S.default.getItem("appVersion") || "5.4.0";
                    global.__log.info("pcsuite version is " + i);
                    const {platform: o, version: a} = y.default.getInstance().getPlatformVersion() || {}, l = {
                        version: i,
                        connBaseVersionCode: d.default.UPGRADE.CONNBASE_MIN_VERSION,
                        pcSuiteVersionCode: "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? d.default.UPGRADE.PCSUITE_MIN_VERSION_EX : d.default.UPGRADE.PCSUITE_MIN_VERSION,
                        timestamp: Date.now(),
                        connectionId: e,
                        pcDeviceId: S.default.getItem("newDeviceId"),
                        isAutoConnect: !1,
                        token: this.token,
                        isOversea: !("undefined" == typeof __buildConfig__ || !__buildConfig__.IS_EXPORT),
                        pcOsType: o,
                        pcOsVersion: a
                    }, c = {
                        headers: {
                            version: i,
                            newToken: this.token,
                            "X-ES-HTTP-VERSION": "1",
                            Connection: "keep-alive"
                        },
                        timeout: 4900
                    };
                    let u = !1;
                    const h = () => r.__awaiter(this, void 0, void 0, function*() {
                        if (yield y.default.getInstance().getConnectProcessIsEnd(e)) throw new Error("ALREADY_CANCEL");
                    }), p = (e, i) => r.__awaiter(this, void 0, void 0, function*() {
                        if (!u) try {
                            yield h(), global.__log.info("adb http version success from " + i), u = !0, t(e);
                        } catch (e) {
                            u || (u = !0, n(e));
                        }
                    }), f = (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                        if (!u) {
                            global.__log.info(`version catch error from ${t}, maybe timeout, resp: ${JSON.stringify(e)}`);
                            try {
                                yield h();
                            } catch (e) {
                                u || (u = !0, n(e));
                            }
                        }
                    });
                    let m = 0;
                    const g = 2, v = () => {
                        var e;
                        m++, m >= g && !u && (u = !0, null === (e = this.webContent) || void 0 === e || e.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.GET_VERSION, "FAILED"), 
                        n(new Error("VERSION_CATCH_ERROR")));
                    }, b = `http://127.0.0.1:${this.getCurrentPort()}/version`;
                    N.post(b, l, Object.assign({
                        httpsAgent: new _.default.Agent({
                            rejectUnauthorized: !1
                        })
                    }, c)).then(e => p({
                        status: e.status,
                        data: e.data
                    }, "axios")).catch(e => {
                        f(e, "axios"), v();
                    }), O.default.post(Object.assign({
                        url: b,
                        json: l,
                        rejectUnauthorized: !1
                    }, c), (e, t) => r.__awaiter(this, void 0, void 0, function*() {
                        e ? (f(e, "requestManager"), v()) : p({
                            status: t.statusCode,
                            data: t.body
                        }, "requestManager");
                    }));
                } catch (e) {
                    global.__log.info("version response unexception"), console.log(e), n(e);
                }
            });
        }
        handleVersionResponse(e) {
            return new Promise((t, n) => {
                var r, i, o, a, l, c, u, h, p;
                if (200 === e.status) {
                    let f = e.data;
                    if (null === (r = global.__log) || void 0 === r || r.info("adb http version response: " + JSON.stringify(f)), 
                    "0000" == f.code) {
                        if (d.default.enbale_upgrade) {
                            const e = f.data.enpVer ? f.data.enpVer : 1;
                            null === (i = global.__log) || void 0 === i || i.info("[pc config version] enpVerion: " + d.default.UPGRADE.ENP_MIN_VERSION);
                            if (e > d.default.UPGRADE.ENP_MIN_VERSION) return null === (o = global.__log) || void 0 === o || o.info("mobile device enpVersion is avaliable"), 
                            void n(new Error("PC_NEED_UPDATE"));
                            const r = "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? d.default.UPGRADE.PCSUITE_MIN_VERSION_EX : d.default.UPGRADE.PCSUITE_MIN_VERSION, s = f.data.pcSuiteVersionCode, c = f.data.connBaseVersionCode, u = s < r, h = c >= d.default.UPGRADE.CAN_UPGRADE_CONNBASE_MIN_VERSION && c < d.default.UPGRADE.CONNBASE_MIN_VERSION;
                            if (null === (a = global.__log) || void 0 === a || a.info(`[pc config version] pcsuite: ${r}, connbase: ${d.default.UPGRADE.CONNBASE_MIN_VERSION}, canUpgradeConnbase: ${d.default.UPGRADE.CAN_UPGRADE_CONNBASE_MIN_VERSION}`), 
                            u || h) {
                                null === (l = global.__log) || void 0 === l || l.info("mobile device pcsuite version is avaliable");
                                let e = [];
                                return h && e.push(d.default.UPGRADE.CONNBASE_UPGRADE_FILEPATH), u && e.push(d.default.UPGRADE.PCSUITE_UPGRADE_FILEPATH), 
                                this.updateFiles = e, t(!0);
                            }
                        }
                        if (this.webContent) {
                            const e = (null === (c = null == f ? void 0 : f.data) || void 0 === c ? void 0 : c.pcSuiteVersionCode) ? null === (u = null == f ? void 0 : f.data) || void 0 === u ? void 0 : u.pcSuiteVersionCode : null;
                            null === (h = this.webContent) || void 0 === h || h.send(s.ConnectionRendererEvent.PHONE_VER_CODE, e);
                        }
                        return null === (p = this.webContent) || void 0 === p || p.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.GET_VERSION, "OK"), 
                        void t(!1);
                    }
                    if ("0007" == f.code) return void n(new Error("NEED_UNLOCK"));
                    if ("0016" == f.code || "0010" == f.code) return global.__log.info("version code: " + f.code), 
                    void n(new Error(s.ConnectionRendererEvent.PRIVACY_NOT_AGREED));
                } else global.__log.info("version rsponse state is not 200"), t(!0);
            });
        }
        startConnectImpl(e, t, n, r) {
            let i;
            return global.__log.info(`startConnectImpl ... ${e.id}, token: ${this.token}`), 
            this.connecting = !0, this.client.isInstalled(e.id, "com.vivo.pcsuite").then(t => {
                var n, r;
                if (global.__log.info("startConnectImpl installed: " + t), 0 == t) throw null === (n = this.webContent) || void 0 === n || n.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_IS_INSTALLED, "FAILED"), 
                new Error("NO_PCSUITE");
                return null === (r = this.webContent) || void 0 === r || r.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.ADB_IS_INSTALLED, "OK"), 
                this.startMainActivity(e);
            }).then(() => (i = b.ConnectionErrorCode.startServerFailed, global.__log.info("[devicemanager][startConnectImpl] startMainActivity success"), 
            this.startServer(e, t, r))).then(() => (i = b.ConnectionErrorCode.startForwardFailed, 
            global.__log.info("[devicemanager][startConnectImpl] startServer success"), this.startForward(e.id))).then(() => (i = void 0, 
            this.startReverse(e.id))).then(() => C.delay(1200)).then(() => this.checkVersion(t)).then(e => {
                if (global.__log.info("needToUpdate : " + e), e) throw new Error("NEED_UPDATE");
            }).then(() => {
                this.connecting = !1, global.__log.info("startConnectImpl end ..."), n && n();
            }).catch(t => {
                var r, o, a, c;
                if (this.connecting = !1, global.__log.info("startConnectImpl went wrong:" + t), 
                "ALREADY_CANCEL" === t.message) global.__log.info("[devicemanager][startConnectImpl]  catch error : erro is " + t.message); else if ("NO_PCSUITE" === t.message) global.__log.info("NO_PCSUITE"), 
                this.webContent && this.webContent.send(s.ConnectionRendererEvent.NO_PCSUITE_ACTION, e); else if ("PC_NEED_UPDATE" === t.message) {
                    if (global.__log.info("[devicemanager][startConnectImpl]  catch error : erro is " + t.message), 
                    this.webContent) {
                        const t = this.getPort(e.id);
                        this.webContent.send(s.ConnectionRendererEvent.PC_NEED_UPDATE_PCSUITE_ACTION, e, t), 
                        null === (r = this.webContent) || void 0 === r || r.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.PCSUITE_NEED_UPGRADE, "OK");
                    }
                } else if ("NEED_UPDATE" === t.message) {
                    if (global.__log.info("[devicemanager][startConnectImpl]  catch error : erro is " + t.message), 
                    this.webContent) {
                        const t = this.getPort(e.id);
                        this.webContent.send(s.ConnectionRendererEvent.NEED_UPDATE_PCSUITE_ACTION, e, t, this.updateFiles), 
                        null === (o = this.webContent) || void 0 === o || o.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.NEED_UPGRADE, "OK");
                    }
                } else l.startsWith(t.message, "Not found;") ? (global.__log.info("[devicemanager][startConnectImpl]  catch error : erro is " + t.message), 
                this.webContent && this.webContent.send(s.ConnectionRendererEvent.NEED_UNLOCK_ACTION, e)) : "NEED_UNLOCK" === t.message ? (global.__log.info("[devicemanager][startConnectImpl]  catch error : erro is " + t.message), 
                this.webContent && (null === (a = this.webContent) || void 0 === a || a.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.PHONE_LOCK, "OK"))) : t.message === s.ConnectionRendererEvent.PRIVACY_NOT_AGREED ? (global.__log.info("[devicemanager][startConnectImpl]  catch error : erro is " + t.message), 
                this.webContent && (null === (c = this.webContent) || void 0 === c || c.send(s.ConnectionRendererEvent.CONNECT_BURIED_POINT, E.CONNECT_STEPS.PRIVACY_NOT_AGREED, "OK"))) : t.message === s.ConnectionRendererEvent.PHONE_NEED_TO_AUTHORIZE_ACTION ? (global.__log.info("[devicemanager][startConnectImpl]  catch error : erro is " + t.message), 
                this.webContent && this.webContent.send(s.ConnectionRendererEvent.PHONE_NEED_TO_AUTHORIZE_ACTION, e)) : "FIRST_CONNECT" === t.message ? (global.__log.info("[devicemanager][startConnectImpl]  catch error : erro is " + t.message), 
                this.webContent && this.webContent.send(s.ConnectionRendererEvent.FIRST_CONNECT, e)) : "FailError" == t.name && t.message.startsWith("Failure:") && t.message.endsWith("not found'") && (this.webContent && this.webContent.send(s.ConnectionRendererEvent.NEED_UNLOCK_ACTION, e), 
                this.restart());
                n && n(i ? b.newErrorX(i, t) : t);
            });
        }
        setWebContent(e) {
            this.webContent = e;
        }
        getWebContent() {
            return this.webContent;
        }
        generatePort() {
            let e = Array.from(this.portMap.values()), t = 10380;
            for (;e.find(e => e == t); ) t += 100;
            return t;
        }
        getPort(e) {
            let t = this.portMap.get(e);
            return null == t && (t = 10380), t;
        }
        getCurrentPort() {
            return this.currentPort;
        }
        setCurrentPort(e) {
            this.currentPort = e;
        }
        uploadSimpleFile(e, t, n) {
            console.log(n);
            let r = {
                url: t,
                strictSSL: !1,
                headers: {}
            };
            return new Promise((n, i) => {
                let o;
                o = v.createReadStream(e), o.on("data", function(e) {
                    console.log("[devicemanager] [] body"), console.log(e);
                }).on("error", e => {
                    global.__log.info("[devicemanager] uploadSimpleFile createReadStream error ", e), 
                    i(e);
                });
                let a = g.default.post(r, function(e, r, o) {
                    if (console.log("[devicemanager] body is " + o), e) return global.__log.info("[devicemanager] uploadSimpleFile http error ", t, e), 
                    void i(e);
                    r && 200 === r.statusCode ? (global.__log.info("[devicemanager]response success", r.body), 
                    n(r.body)) : (global.__log.info("[devicemanager] err response statusCode", t, r.statusCode, r.body), 
                    i(new Error("[devicemanager]  uploadSimpleFile response failed ")));
                });
                o.pipe(a).on("abort", () => {
                    global.__log.info("[devicemanager]  on abort "), i(new Error("abort "));
                }).on("error", e => {
                    global.__log.info("[devicemanager]  http error ", t, e), i(e);
                });
            });
        }
        restart() {
            var e;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!I) {
                    global.__log.info("[restart] ADB restarting"), I = !0;
                    try {
                        null === (e = this.webContent) || void 0 === e || e.send(s.ConnectionRendererEvent.UPDATE_DEVICE_LIST, []), 
                        this.devices = [], this.queue = [], this.portMap.clear(), this.updateFiles = [], 
                        this._oldAdbDevices = [], yield this.client.kill(), global.__log.info("[restart] ADB kill successfully");
                    } catch (e) {
                        global.__log.info("[restart] catch error: " + e);
                    }
                    I = !1;
                }
            });
        }
    }
    t.DeviceManager = D, a.ipcMain.on(T.ConnectionMainEvent.CONNECT_USB_CALLBACK, (e, {name: t, params: n}) => {
        D.getInstance().hasScreenLocked(n).then(r => {
            e.reply(`${t}-REPLY--${n}`, r);
        });
    }), t.default = D;
}
