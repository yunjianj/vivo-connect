// analysis/pretty/main.js:109690; webpack module 1481
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.requestHandlers = t.parseParams = t.PATHNAME_LIST = void 0;
    const r = n(0), i = n(56), o = n(131), a = r.__importDefault(n(89)), s = n(725), l = n(2), c = n(239), u = r.__importDefault(n(55)), d = r.__importStar(n(90)), h = r.__importDefault(n(357)), p = r.__importDefault(n(158)), f = r.__importDefault(n(726)), _ = r.__importDefault(n(6)), m = r.__importDefault(n(8)), g = n(94), v = r.__importDefault(n(355)), y = r.__importDefault(n(95));
    var E;
    !function(e) {
        e.rootRoute = "/", e.fmTransferFileToPC = "/skill/fmTransferFileToPC", e.rightMenuTransfer = "/skill/rightMenuTransfer", 
        e.connectDevice = "/skill/connectDevice", e.getDeviceConnectStatus = "/skill/getDeviceConnectStatus", 
        e.getSameAccountDevices = "/skill/getSameAccountDevices", e.disconnectDevice = "/skill/disconnectDevice", 
        e.getConnectedDevices = "/skill/getConnectedDevices", e.getConnectedDeviceInfo = "/skill/getConnectedDeviceInfo", 
        e.getSuiteInfo = "/skill/getSuiteInfo", e.searchComputerFiles = "/skill/localSearch/search", 
        e.getComputerFileThumbnail = "/skill/localSearch/getThumb", e.openFilePropertiesPanel = "/skill/localSearch/openFileDetails", 
        e.moveFileToRecycleBin = "/skill/localSearch/delete", e.fmSearch = "/skill/fmSearch";
    }(E = t.PATHNAME_LIST || (t.PATHNAME_LIST = {})), t.parseParams = e => {
        var t;
        const n = {};
        if (null == (e = decodeURIComponent(e)) ? void 0 : e.includes("?")) {
            ((null === (t = e.split("?")[1]) || void 0 === t ? void 0 : t.split("&")) || []).forEach(e => {
                const t = e.split("=");
                n[t[0]] = t[1] || "";
            });
        }
        return n;
    };
    t.requestHandlers = (new class {
        creatHandlers() {
            const e = {
                httpRequestHandlers: {},
                websocketHandlers: {}
            };
            for (const t in E) if (Object.prototype.hasOwnProperty.call(E, t)) {
                const n = E[t];
                e.httpRequestHandlers[n] = this[t];
            }
            return e;
        }
        rootRoute(e) {
            return global.__log.info("[RequestHandlers9200][rootRoute] " + e.paramsStr), {
                code: s.RES_CODE.SUCCESS,
                data: "9200 server is running"
            };
        }
        getSuiteInfo(e) {
            global.__log.info("[RequestHandlers9200][getSuiteInfo] " + e.paramsStr);
            try {
                let e = "0.0.0";
                if (!process.env.IS_WEB) {
                    const {app: t} = n(2);
                    e = t.getVersion();
                }
                const t = "1.0.0", r = _.default.getItem("serverRoomEnv") || "", i = _.default.getItem("serverRoomLabel") || "", o = "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "") ? "BR" : "EX" : "CN", a = d.getSkillServerPort() || 9200, l = y.default.serverPort, c = m.default.platform(), u = m.default.arch(), h = m.default.release(), p = void 0 !== process.env.IS_WEB, f = !p, E = g.getAppName(), b = _.default.getItem("receiveFilesPath") || g.getAppDownloadPath();
                let w = "", S = "";
                if (!process.env.IS_WEB) {
                    const {app: e} = n(2);
                    try {
                        w = e.getPath("userData"), S = e.getPath("appData");
                    } catch (e) {
                        global.__log.info("[RequestHandlers9200][getSuiteInfo] getPath error: " + e);
                    }
                }
                const T = _.default.getItem("currentLanguage") || "", A = _.default.getItem("vLang") || "", O = !!_.default.getItem("isRtl"), C = _.default.getItem("countryCode") || "";
                let N = !1;
                try {
                    N = v.default.getInstance().isInstalled();
                } catch (e) {
                    global.__log.info("[RequestHandlers9200][getSuiteInfo] vclawInstalled error: " + e);
                }
                const I = process.versions.electron || "", R = process.versions.node || "", D = process.versions.chrome || "", L = !!_.default.getItem("isStrictComp");
                return {
                    code: s.RES_CODE.SUCCESS,
                    data: {
                        suiteVersion: e,
                        apiVersion: t,
                        env: r,
                        channel: o,
                        serverRoom: i,
                        skillServerPort: a,
                        pcsuiteServerPort: l,
                        platform: c,
                        arch: u,
                        osRelease: h,
                        isWeb: p,
                        isDesktop: f,
                        appName: E,
                        pcSuiteDownloadDir: b,
                        userDataDir: w,
                        appDataDir: S,
                        locale: T,
                        vLang: A,
                        isRtl: O,
                        countryCode: C,
                        vclawInstalled: N,
                        electronVersion: I,
                        nodeVersion: R,
                        chromeVersion: D,
                        isStrictComp: L
                    }
                };
            } catch (e) {
                return global.__log.info("[RequestHandlers9200][getSuiteInfo] error: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: "getSuiteInfo failed: " + e
                };
            }
        }
        fmTransferFileToPC(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield h.default.fmTransferFileToPC(e);
            });
        }
        rightMenuTransfer(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return yield h.default.rightMenuTransfer(e);
            });
        }
        fmSearch(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = t.parseParams(e.queryStr);
                return yield h.default.search(n);
            });
        }
        getSameAccountDevices() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[RequestHandlers9200][getSameAccountDevices] start");
                try {
                    const e = c.requestHandlersInstance.getSameAccountDevicesCache();
                    if (e && e.length > 0) return global.__log.info(`[RequestHandlers9200][getSameAccountDevices] Fetched ${e.length} devices from 9199 instance cache.`), 
                    {
                        code: s.RES_CODE.SUCCESS,
                        data: e
                    };
                    global.__log.info("[RequestHandlers9200][getSameAccountDevices] Cache empty, requesting preconnect_startScan...");
                    const t = JSON.stringify({
                        event: "preconnect_startScan",
                        app: "pcsuite",
                        args: [ !0 ]
                    }), n = (yield u.default.post(d.default.VIVOES_SERVER_URL, `${t.length}#${t}`, {
                        responseType: "text",
                        timeout: 6e3
                    })).data;
                    if ("string" == typeof n) {
                        const e = n.indexOf("#");
                        if (-1 !== e) {
                            const t = n.substring(e + 1), r = JSON.parse(t);
                            if (r && r.data && Array.isArray(r.data)) return global.__log.info(`[RequestHandlers9200][getSameAccountDevices] Fetched ${r.data.length} devices from connection service.`), 
                            {
                                code: s.RES_CODE.SUCCESS,
                                data: r.data
                            };
                        }
                    }
                    return {
                        code: s.RES_CODE.FAILED,
                        data: "failed to get same account devices"
                    };
                } catch (e) {
                    return global.__log.info("[RequestHandlers9200][getSameAccountDevices] err: " + e), 
                    {
                        code: s.RES_CODE.FAILED,
                        data: e
                    };
                }
            });
        }
        getDeviceConnectStatus(e) {
            return global.__log.info("[RequestHandlers9200][getDeviceConnectStatus] params: " + JSON.stringify(e)), 
            new Promise(t => {
                try {
                    const n = JSON.parse(e.paramsStr).deviceId;
                    if (!n) return void t({
                        code: s.RES_CODE.FAILED,
                        data: "deviceId is required"
                    });
                    const r = a.default.getInstance().getWebContent();
                    if (r) {
                        null == r || r.send(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS, {
                            deviceId: n
                        });
                        const e = setTimeout(() => {
                            l.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS), 
                            t({
                                code: s.RES_CODE.TIME_OUT,
                                data: "get device connect status timeout"
                            });
                        }, 5e3);
                        l.ipcMain.once(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS, (n, r) => {
                            global.__log.info("[RequestHandlers9200][getDeviceConnectStatus] result: " + JSON.stringify(r)), 
                            clearTimeout(e), t({
                                code: s.RES_CODE.SUCCESS,
                                data: r
                            });
                        });
                    } else global.__log.info("[RequestHandlers9200][getDeviceConnectStatus] webContent not found"), 
                    t({
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    global.__log.info("[RequestHandlers9200][getDeviceConnectStatus] err: " + e), t({
                        code: s.RES_CODE.FAILED,
                        data: e
                    });
                }
            });
        }
        disconnectDevice(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let t;
                if (global.__log.info("[RequestHandlers9200][disconnectDevice] receive disconnectDevice request"), 
                !process.env.IS_WEB) {
                    try {
                        t = JSON.parse(e.paramsStr), global.__log.info("[RequestHandlers9200][disconnectDevice] params: " + e.paramsStr);
                    } catch (e) {
                        return {
                            code: s.RES_CODE.FAILED,
                            data: "parameter parsing error"
                        };
                    }
                    const n = null == t ? void 0 : t.deviceId;
                    if (!n) return global.__log.info("[RequestHandlers9200][disconnectDevice] deviceId is null"), 
                    {
                        code: s.RES_CODE.FAILED,
                        data: "deviceId is required"
                    };
                    const r = a.default.getInstance().getWebContent();
                    if (!r) return global.__log.info("[RequestHandlers9200][disconnectDevice] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    };
                    {
                        if (!(yield new Promise(e => {
                            r.send(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS, {
                                deviceId: n
                            });
                            const t = setTimeout(() => {
                                l.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS), 
                                e(!1);
                            }, 3e3);
                            l.ipcMain.once(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS, (n, r) => {
                                clearTimeout(t), e(!0 === (null == r ? void 0 : r.isConnected));
                            });
                        }))) return global.__log.info("[RequestHandlers9200][disconnectDevice] device not connected: " + n), 
                        {
                            code: s.RES_CODE.DEVICE_NOT_CONNECTED,
                            data: "device is not connected"
                        };
                        const e = yield new Promise(e => {
                            const a = setTimeout(() => {
                                l.ipcMain.removeAllListeners(o.ConnectionMainEvent.DISCONNECT_DEVICE_REPLY), global.__log.info("[RequestHandlers9200][disconnectDevice] disconnect timeout, deviceId: " + n), 
                                e({
                                    code: -1,
                                    reason: "disconnect timeout"
                                });
                            }, 5e3);
                            l.ipcMain.once(o.ConnectionMainEvent.DISCONNECT_DEVICE_REPLY, (t, n) => {
                                clearTimeout(a), global.__log.info("[RequestHandlers9200][disconnectDevice] disconnect result: " + JSON.stringify(n)), 
                                e(n);
                            }), r.send(i.ConnectionRendererEvent.DISCONNECT_DEVICE, t);
                        });
                        if (0 !== e.code) return {
                            code: s.RES_CODE.FAILED,
                            data: e.reason || "disconnect failed"
                        };
                    }
                }
                return {
                    code: s.RES_CODE.SUCCESS,
                    data: {}
                };
            });
        }
        getConnectedDevices() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[RequestHandlers9200][getConnectedDevices] start");
                try {
                    const e = a.default.getInstance().getWebContent();
                    if (!e) return global.__log.info("[RequestHandlers9200][getConnectedDevices] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    };
                    const t = yield new Promise(t => {
                        e.send(i.ConnectionRendererEvent.GET_CONNECTED_DEVICES);
                        const n = setTimeout(() => {
                            l.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_CONNECTED_DEVICES_REPLY), 
                            t([]);
                        }, 5e3);
                        l.ipcMain.once(i.ConnectionRendererEvent.GET_CONNECTED_DEVICES_REPLY, (e, r) => {
                            clearTimeout(n), t((null == r ? void 0 : r.devices) || []);
                        });
                    });
                    return global.__log.info(`[RequestHandlers9200][getConnectedDevices] found ${t.length} connected devices`), 
                    {
                        code: s.RES_CODE.SUCCESS,
                        data: t
                    };
                } catch (e) {
                    return global.__log.info("[RequestHandlers9200][getConnectedDevices] err: " + e), 
                    {
                        code: s.RES_CODE.FAILED,
                        data: e
                    };
                }
            });
        }
        getConnectedDeviceInfo(e) {
            return global.__log.info("[RequestHandlers9200][getConnectedDeviceInfo] params: " + JSON.stringify(e)), 
            new Promise(t => {
                try {
                    const n = JSON.parse(e.paramsStr).deviceId;
                    if (!n) return void t({
                        code: s.RES_CODE.FAILED,
                        data: "deviceId is required"
                    });
                    const r = a.default.getInstance().getWebContent();
                    if (r) {
                        null == r || r.send(i.ConnectionRendererEvent.GET_CONNECTED_DEVICE_INFO, {
                            deviceId: n
                        });
                        const e = setTimeout(() => {
                            l.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_CONNECTED_DEVICE_INFO_REPLY), 
                            t({
                                code: s.RES_CODE.TIME_OUT,
                                data: "get connected device info timeout"
                            });
                        }, 5e3);
                        l.ipcMain.once(i.ConnectionRendererEvent.GET_CONNECTED_DEVICE_INFO_REPLY, (n, r) => {
                            global.__log.info("[RequestHandlers9200][getConnectedDeviceInfo] result: " + JSON.stringify(r)), 
                            clearTimeout(e), (null == r ? void 0 : r.found) && r.device ? t({
                                code: s.RES_CODE.SUCCESS,
                                data: r.device
                            }) : t({
                                code: s.RES_CODE.DEVICE_NOT_FOUND,
                                data: "device not found"
                            });
                        });
                    } else global.__log.info("[RequestHandlers9200][getConnectedDeviceInfo] webContent not found"), 
                    t({
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    global.__log.info("[RequestHandlers9200][getConnectedDeviceInfo] err: " + e), t({
                        code: s.RES_CODE.FAILED,
                        data: e
                    });
                }
            });
        }
        connectDevice(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[RequestHandlers9200][connectDevice] connectDevice start");
                let t, n = "ok";
                try {
                    try {
                        if (t = JSON.parse(e.paramsStr), !(null == t ? void 0 : t.eventId) || !(null == t ? void 0 : t.deviceId)) throw "parameter error";
                    } catch (e) {
                        return {
                            code: s.RES_CODE.FAILED,
                            data: "parameter parsing error"
                        };
                    }
                    const r = a.default.getInstance().getWebContent();
                    return r ? (n = yield new Promise((e, n) => {
                        const a = setTimeout(() => {
                            c(), n("timeout");
                        }, 3e4);
                        function s(n, {eventId: r, code: i, reason: o}) {
                            t.eventId === r && (c(), e({
                                code: i,
                                reason: o
                            }));
                        }
                        function c() {
                            clearTimeout(a), l.ipcMain.removeListener(o.ConnectionMainEvent.CONNECT_DEVICE_REPLY, s);
                        }
                        l.ipcMain.on(o.ConnectionMainEvent.CONNECT_DEVICE_REPLY, s), null == r || r.send(i.ConnectionRendererEvent.CONNECT_DEVICE, t);
                    }), {
                        code: s.RES_CODE.SUCCESS,
                        data: n
                    }) : (global.__log.info("[RequestHandlers9200][connectDevice] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    return global.__log.info("[RequestHandlers9200][connectDevice] err: " + e), {
                        code: s.RES_CODE.FAILED,
                        data: "unknown error"
                    };
                }
            });
        }
        searchComputerFiles(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!p.default.getInstance().isSearchServiceRunning()) return {
                    code: s.RES_CODE.FAILED,
                    data: "搜索服务未开启"
                };
                const n = t.parseParams(e.queryStr), r = yield f.default.getWordTokenizer(n.keyword);
                console.log("test queryParams", n);
                const i = {
                    keyword: n.keyword,
                    type: n.type || "HOME",
                    pageIndex: Number(n.pageIndex) || 0,
                    pageNumber: Number(n.pageNumber) || 10,
                    sortType: Number(n.sortType) || 1,
                    tokenizedWords: r
                };
                global.__log.info("[RequestHandlers9200][searchComputerFiles] params: " + JSON.stringify(i));
                const o = yield p.default.getInstance().doSearch(i);
                return global.__log.info("[RequestHandlers9200][searchComputerFiles] res: "), {
                    code: s.RES_CODE.SUCCESS,
                    data: o
                };
            });
        }
        getComputerFileThumbnail(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = t.parseParams(e.queryStr);
                n.path = n.fullPathName, global.__log.info("[RequestHandlers9200][getComputerFileThumbnail] params: " + e.paramsStr);
                const r = yield p.default.getInstance().getThumbnail(n);
                return global.__log.info("[RequestHandlers9200][getComputerFileThumbnail] res: "), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: r
                };
            });
        }
        openFilePropertiesPanel(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = JSON.parse(e.paramsStr);
                return t.fullPathName = t.fullPathName, global.__log.info("[RequestHandlers9200][openFilePropertiesPanel] params: " + e.paramsStr), 
                p.default.getInstance().openFileDetailsByNative(t), {
                    code: s.RES_CODE.SUCCESS,
                    data: null
                };
            });
        }
        moveFileToRecycleBin(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = JSON.parse(e.paramsStr);
                t.forEach(e => {
                    e.savePath = e.fullPathName;
                }), global.__log.info("[RequestHandlers9200][moveFileToRecycleBin] params: " + e.paramsStr);
                const n = yield p.default.getInstance().trashFile(t);
                return global.__log.info("[RequestHandlers9200][moveFileToRecycleBin] res: " + n), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: n
                };
            });
        }
    }).creatHandlers();
}
