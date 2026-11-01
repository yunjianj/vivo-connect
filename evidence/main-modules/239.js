// analysis/pretty/main.js:28620; webpack module 239
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.requestHandlers = t.requestHandlersInstance = t.parseParams = t.WEBSOCKET_PATHNAME = t.PATHNAME_LIST = void 0;
    const r = n(0), i = n(56), o = r.__importDefault(n(89)), a = r.__importDefault(n(95)), s = n(713), l = r.__importDefault(n(265)), c = n(2), u = r.__importDefault(n(55)), d = r.__importDefault(n(90)), h = r.__importDefault(n(354)), p = r.__importDefault(n(156)), f = r.__importDefault(n(714)), _ = n(609), m = r.__importDefault(n(6)), g = n(131), v = r.__importDefault(n(341)), y = n(240), E = n(335), b = n(41), w = n(11), S = r.__importDefault(n(357));
    var T, A;
    !function(e) {
        e.rootRoute = "/", e.checkServerStatus = "/checkServerStatus", e.notifyConnection = "/notifyConnection", 
        e.bleQueryAll = "/queryAll", e.networkQueryAll = "/SSDPQueryAll", e.isConnectBusy = "/isConnectBusy", 
        e.nfcConection = "/nfcConection", e.buryPoint = "/buryPoint", e.batchBuryPoint = "/batchBuryPoint", 
        e.relayClose = "/relayClose", e.RH2RF_PUSH_GATT_CLIENT_LIST = "/RH2RF_PUSH_GATT_CLIENT_LIST", 
        e.getSameAccountDevices = "/getSameAccountDevices", e.pcDeviceInfo = "/pcDeviceInfo", 
        e.connectDevice = "/connectDevice", e.vivoScreenCapture = "/vivoScreenCapture", 
        e.connectDeviceCloud = "/connectDeviceCloud", e.notifySystemEvent = "/notifySystemEvent", 
        e.getCurConnectedUSBInfo = "/getCurConnectedUSBInfo", e.connectDeviceUSB = "/connectDeviceUSB", 
        e.forwardMessage = "/forwardMessage", e.vivoshareDownload = "/vivoshareDownload", 
        e.launchUsbFastConnect = "/launchUsbFastConnect", e.receiveIPToConnect = "/receiveIPToConnect", 
        e.switchLang = "/switchLang", e.rightMenuTransfer = "/rightMenuTransfer", e.launchUsbGuidePrompt = "/launchUsbGuidePrompt", 
        e.closeUsbFastConnect = "/closeUsbFastConnect", e.mtpDevicesUpdate = "/mtpDevicesUpdate", 
        e.reportNetworkPermission = "/reportNetworkPermission", e.startWifiDirect = "/startWifiDirect", 
        e.stopWifiDirect = "/stopWifiDirect", e.invokeShareCamera = "/invokeShareCamera", 
        e.updateShareCameraUsers = "/updateShareCameraUsers", e.notifyP2PConflict = "/notifyP2PConflict", 
        e.fmSearch = "/fmSearch", e.fmThumb = "/fmThumb", e.fmTransferFileToPC = "/fmTransferFileToPC", 
        e.reportWifip2pStatus = "/reportWifip2pStatus", e.getDeviceConnectStatus = "/getDeviceConnectStatus", 
        e.disconnectDevice = "/disconnectDevice", e.getConnectedDevices = "/getConnectedDevices", 
        e.checkAuthStatus = "/checkAuthStatus";
    }(T = t.PATHNAME_LIST || (t.PATHNAME_LIST = {})), function(e) {
        e.wsRootRoute = "/", e.applicationManangerHandle = "applicationManangerHandle";
    }(A = t.WEBSOCKET_PATHNAME || (t.WEBSOCKET_PATHNAME = {})), t.parseParams = e => {
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
    t.requestHandlersInstance = new class {
        constructor() {
            this.sameAccountDevices = [], this.batchBuryPointTimers = new Map;
        }
        getSameAccountDevicesCache() {
            return this.sameAccountDevices;
        }
        creatHandlers() {
            const e = {
                httpRequestHandlers: {},
                websocketHandlers: {}
            }, t = this;
            for (const n in T) if (Object.prototype.hasOwnProperty.call(T, n)) {
                const r = T[n];
                e.httpRequestHandlers[r] = t[n].bind(this);
            }
            for (const n in A) if (Object.prototype.hasOwnProperty.call(A, n)) {
                const r = A[n];
                e.websocketHandlers[r] = t[n].bind(this);
            }
            return e;
        }
        rootRoute(e) {
            return a.default.oldHandler(e.paramsStr);
        }
        checkServerStatus(e) {
            return global.__log.info("[RequestHandlers][checkServerStatus] params: " + JSON.stringify(e)), 
            new Promise(t => {
                try {
                    let n = "";
                    "/checkServerStatus?deviceType=phone" == e.queryStr ? n = "phone" : "/checkServerStatus?deviceType=pad" == e.queryStr ? n = "pad" : t({
                        code: s.RES_CODE.SUCCESS,
                        data: n
                    });
                    const r = o.default.getInstance().getWebContent();
                    if (r) {
                        r.send(i.ConnectionRendererEvent.GET_CONNECT_STATUS, {
                            deviceType: n
                        });
                        const e = setTimeout(() => {
                            c.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_CONNECT_STATUS), t({
                                code: s.RES_CODE.TIME_OUT,
                                data: "get connect status timeout"
                            });
                        }, 5e3);
                        c.ipcMain.once(i.ConnectionRendererEvent.GET_CONNECT_STATUS, (n, r) => {
                            clearTimeout(e);
                            const i = "nearby" === r.connectType || "cloud" === r.connectType ? 1 : 0;
                            t({
                                code: s.RES_CODE.SUCCESS,
                                data: "ok",
                                connectStatus: i
                            });
                        });
                    } else global.__log.info("[RequestHandlers][nfcConection] webContent not found"), 
                    t({
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    global.__log.info("[RequestHandlers][nfcConection] err: " + e), t({
                        code: s.RES_CODE.FAILED,
                        data: e
                    });
                }
            });
        }
        checkAuthStatus(e) {
            return global.__log.info("[RequestHandlers][checkAuthStatus] params: " + JSON.stringify(e)), 
            {
                code: s.RES_CODE.SUCCESS,
                data: "ok"
            };
        }
        reportWifip2pStatus(e) {
            global.__log.info("[RequestHandlers][reportWifip2pStatus] params: " + JSON.stringify(e));
            const t = JSON.parse(e.paramsStr);
            return 1 == t.wifiP2P ? (global.__log.info("[RequestHandlers][reportWifip2pStatus] params: 1"), 
            m.default.setItem("wifip2pStatus", !0)) : 0 == t.wifiP2P && (global.__log.info("[RequestHandlers][reportWifip2pStatus] params: 0"), 
            m.default.removeItem("wifip2pStatus")), {
                code: s.RES_CODE.SUCCESS,
                data: e.paramsStr
            };
        }
        nfcConection(e) {
            return global.__log.info("[RequestHandlers][nfcConection] params: " + JSON.stringify(e)), 
            new Promise(t => {
                try {
                    const n = JSON.parse(e.paramsStr), r = o.default.getInstance().getWebContent();
                    if (r) {
                        r.send(i.ConnectionRendererEvent.GET_CONNECT_STATUS, {
                            deviceType: n.deviceType || "phone"
                        });
                        const e = setTimeout(() => {
                            c.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_CONNECT_STATUS), t({
                                code: s.RES_CODE.TIME_OUT,
                                data: "get connect status timeout"
                            });
                        }, 5e3);
                        c.ipcMain.once(i.ConnectionRendererEvent.GET_CONNECT_STATUS, (o, a) => {
                            if (clearTimeout(e), null == a ? void 0 : a.isConnectBusy) t({
                                code: s.RES_CODE.CONNECT_BUSY,
                                data: "connect busy"
                            }); else {
                                const e = {
                                    hostnameFromService: (null == n ? void 0 : n.deviceIp) || "",
                                    nameFromService: (null == n ? void 0 : n.deviceName) || "",
                                    isUsbFromService: !1,
                                    connSeq: (null == n ? void 0 : n.iSeqNo) || "",
                                    connectFlag: (null == n ? void 0 : n.ConnectFlag) || "",
                                    deviceId: (null == n ? void 0 : n.addr) || "",
                                    isAutoConnect: "true" === (null == n ? void 0 : n.thisPhoneAutoConnect) || !0 === (null == n ? void 0 : n.thisPhoneAutoConnect),
                                    vivoAccount: (null == n ? void 0 : n.vivoAccount) || "",
                                    deviceType: null == n ? void 0 : n.deviceType
                                };
                                r.send(i.ConnectionRendererEvent.ON_CONNECT_REQEUST, e), t({
                                    code: s.RES_CODE.SUCCESS,
                                    data: a
                                });
                            }
                        });
                    } else global.__log.info("[RequestHandlers][nfcConection] webContent not found"), 
                    t({
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    global.__log.info("[RequestHandlers][nfcConection] err: " + e), t({
                        code: s.RES_CODE.FAILED,
                        data: e
                    });
                }
            });
        }
        notifyConnection(e, n, a) {
            var l;
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[RequestHandlers][notifyConnection] params: " + JSON.stringify(e));
                try {
                    const n = t.parseParams(e.queryStr);
                    let r = [];
                    if (n.phoneIp) r = n.phoneIp.split(";"), r = r.filter(e => !!e); else {
                        const e = a.socket.remoteAddress || "", t = (null === (l = e.match(/([\s\S]*)(?<!\d)(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/)) || void 0 === l ? void 0 : l[2]) || "";
                        r.push(t);
                    }
                    if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(r[0])) return global.__log.info("[RequestHandlers][notifyConnection] not found phone ip, ip = " + r[0]), 
                    {
                        code: s.RES_CODE.NOT_FOUND_IP,
                        data: "not found phone ip"
                    };
                    if ("1" != n.isWifiP2P) try {
                        yield p.default.getInstance().pingIp(r[0], 2900);
                    } catch (e) {
                        return global.__log.info("[RequestHandlers][notifyConnection] ping ip fail err: " + e), 
                        {
                            code: s.RES_CODE.PING_FAIL,
                            data: "ping fail"
                        };
                    }
                    const c = o.default.getInstance().getWebContent();
                    if (!c) return global.__log.info("[RequestHandlers][notifyConnection] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    };
                    null == c || c.send(i.ConnectionRendererEvent.PHONE_QRCODE_REQEUST, Object.assign(Object.assign({}, n), {
                        phoneIp: r
                    }));
                } catch (e) {
                    return global.__log.info("[RequestHandlers][notifyConnection] err: " + e), {
                        code: s.RES_CODE.FAILED,
                        data: e
                    };
                }
                return {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                };
            });
        }
        receiveIPToConnect(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return global.__log.info("[RequestHandlers][receiveIPToConnect] params: " + JSON.stringify(e)), 
                new Promise(t => {
                    try {
                        const n = JSON.parse(e.paramsStr);
                        let r = "";
                        n.phoneIp ? r = n.phoneIp : (global.__log.info("[RequestHandlers][receiveIPToConnect] not found phone ip"), 
                        t({
                            code: s.RES_CODE.NOT_FOUND_IP,
                            data: "not found phone ip"
                        }));
                        const a = o.default.getInstance().getWebContent();
                        if (a) {
                            null == a || a.send(i.ConnectionRendererEvent.RECEIVE_IP_TO_CONNECT, Object.assign(Object.assign({}, n), {
                                phoneIp: r
                            }));
                            const e = setTimeout(() => {
                                c.ipcMain.removeAllListeners(i.ConnectionRendererEvent.RECEIVE_IP_TO_CONNECT), t({
                                    code: s.RES_CODE.TIME_OUT,
                                    data: "RECEIVE_IP_TO_CONNECT timeout"
                                });
                            }, 5e3);
                            c.ipcMain.once(i.ConnectionRendererEvent.RECEIVE_IP_TO_CONNECT, (n, r) => {
                                global.__log.info("[RequestHandlers][receiveIPToConnect] resCode " + JSON.stringify(r)), 
                                clearTimeout(e), t({
                                    code: s.RES_CODE.SUCCESS,
                                    data: r
                                });
                            });
                        } else global.__log.info("[RequestHandlers][receiveIPToConnect] webContent not found"), 
                        t({
                            code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                            data: "webContent not found"
                        });
                    } catch (e) {
                        global.__log.info("[RequestHandlers][receiveIPToConnect] err: " + e), t({
                            code: s.RES_CODE.FAILED,
                            data: e
                        });
                    }
                });
            });
        }
        RH2RF_PUSH_GATT_CLIENT_LIST(e) {
            global.__log.info("[RequestHandlers][RH2RF_PUSH_GATT_CLIENT_LIST] start");
            try {
                const t = JSON.parse(e.paramsStr), n = Array.isArray(t) ? t : [];
                this.sameAccountDevices = n, global.__log.info("[RequestHandlers][RH2RF_PUSH_GATT_CLIENT_LIST] cached devices count: " + n.length);
                const r = o.default.getInstance().getWebContent();
                return r ? (null == r || r.send(_.PRE_CONNECT_SUBSCRIBE_EVENT.RH2RF_PUSH_GATT_CLIENT_LIST, {
                    devices: n
                }), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][RH2RF_PUSH_GATT_CLIENT_LIST] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][RH2RF_PUSH_GATT_CLIENT_LIST] err: " + e), 
                {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        getSameAccountDevices() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[RequestHandlers][getSameAccountDevices] start");
                try {
                    if (0 === this.sameAccountDevices.length) {
                        global.__log.info("[RequestHandlers][getSameAccountDevices] Cache empty, requesting preconnect_startScan...");
                        const e = JSON.stringify({
                            event: "preconnect_startScan",
                            app: "pcsuite",
                            args: [ !0 ]
                        }), t = (yield u.default.post(d.default.VIVOES_SERVER_URL, `${e.length}#${e}`, {
                            responseType: "text",
                            timeout: 5e3
                        })).data;
                        if ("string" == typeof t) {
                            const e = t.indexOf("#");
                            if (-1 !== e) {
                                const n = t.substring(e + 1), r = JSON.parse(n);
                                r && r.data && Array.isArray(r.data) && (this.sameAccountDevices = r.data, global.__log.info(`[RequestHandlers][getSameAccountDevices] Fetched ${this.sameAccountDevices.length} devices.`));
                            }
                        }
                    }
                    return {
                        code: s.RES_CODE.SUCCESS,
                        data: this.sameAccountDevices
                    };
                } catch (e) {
                    return global.__log.info("[RequestHandlers][getSameAccountDevices] err: " + e), 
                    {
                        code: s.RES_CODE.FAILED,
                        data: e
                    };
                }
            });
        }
        bleQueryAll(e) {
            try {
                const t = JSON.parse(e.paramsStr), n = o.default.getInstance().getWebContent();
                return n ? (null == n || n.send(i.ConnectionRendererEvent.BLE_DEVICES_UPDATE, {
                    devices: Array.isArray(t) ? t : []
                }), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][bleQueryAll] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][bleQueryAll] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        networkQueryAll(e) {
            try {
                const t = JSON.parse(e.paramsStr), n = o.default.getInstance().getWebContent();
                return n ? (null == n || n.send(i.ConnectionRendererEvent.WLAN_DEVICES_UPDATE, {
                    devices: Array.isArray(t) ? t : []
                }), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][networkQueryAll] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][networkQueryAll] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        isConnectBusy(e) {
            return global.__log.info("[RequestHandlers][isConnectBusy] params: " + JSON.stringify(e)), 
            new Promise(n => {
                try {
                    const r = t.parseParams(e.queryStr), a = o.default.getInstance().getWebContent();
                    if (a) {
                        null == a || a.send(i.ConnectionRendererEvent.GET_CONNECT_STATUS, {
                            deviceType: r.deviceType || "phone"
                        });
                        const e = setTimeout(() => {
                            c.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_CONNECT_STATUS), n({
                                code: s.RES_CODE.TIME_OUT,
                                data: "get connect status timeout"
                            });
                        }, 5e3);
                        c.ipcMain.once(i.ConnectionRendererEvent.GET_CONNECT_STATUS, (t, r) => {
                            global.__log.info("[RequestHandlers][isConnectBusy] isConnectBusy " + JSON.stringify(r)), 
                            clearTimeout(e), n({
                                code: s.RES_CODE.SUCCESS,
                                data: r
                            });
                        });
                    } else global.__log.info("[RequestHandlers][networkQueryAll] webContent not found"), 
                    n({
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    global.__log.info("[RequestHandlers][networkQueryAll] err: " + e), n({
                        code: s.RES_CODE.FAILED,
                        data: e
                    });
                }
            });
        }
        getDeviceConnectStatus(e) {
            return global.__log.info("[RequestHandlers][getDeviceConnectStatus] params: " + JSON.stringify(e)), 
            new Promise(t => {
                try {
                    const n = JSON.parse(e.paramsStr).deviceId;
                    if (!n) return void t({
                        code: s.RES_CODE.FAILED,
                        data: "deviceId is required"
                    });
                    const r = o.default.getInstance().getWebContent();
                    if (r) {
                        null == r || r.send(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS, {
                            deviceId: n
                        });
                        const e = setTimeout(() => {
                            c.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS), 
                            t({
                                code: s.RES_CODE.TIME_OUT,
                                data: "get device connect status timeout"
                            });
                        }, 5e3);
                        c.ipcMain.once(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS, (n, r) => {
                            global.__log.info("[RequestHandlers][getDeviceConnectStatus] result: " + JSON.stringify(r)), 
                            clearTimeout(e), t({
                                code: s.RES_CODE.SUCCESS,
                                data: r
                            });
                        });
                    } else global.__log.info("[RequestHandlers][getDeviceConnectStatus] webContent not found"), 
                    t({
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    global.__log.info("[RequestHandlers][getDeviceConnectStatus] err: " + e), t({
                        code: s.RES_CODE.FAILED,
                        data: e
                    });
                }
            });
        }
        launchUsbFastConnect(e) {
            global.__log.info("[RequestHandlers][launchUsbFastConnect] params: " + JSON.stringify(e));
            try {
                const t = JSON.parse(e.paramsStr);
                if (!t) return {
                    code: s.RES_CODE.FAILED,
                    data: "params is null"
                };
                return o.default.getInstance().getWebContent() ? (E.NotificationWindow.getInstance().receiveMessage(b.NotificationViewEnum.DISCONNECT_PROMPT, {
                    isUSBPopup: !0,
                    deviceId: t.deviceId,
                    deviceType: t.deviceType,
                    deviceName: t.deviceName || "",
                    isUsbFastConnect: !0,
                    usbFastConnectCloseTime: 3e4,
                    force: !0
                }), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][launchUsbFastConnect] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][launchUsbFastConnect] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        launchUsbGuidePrompt(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (global.__log.info("[RequestHandlers][launchUsbGuidePrompt] params: " + JSON.stringify(e)), 
                "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT) return global.__log.info("[RequestHandlers][launchUsbGuidePrompt] IS_EXPORT, skip"), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                };
                try {
                    const t = JSON.parse(e.paramsStr), n = m.default.has("launchUsbGuidePromptCount") ? m.default.getItem("launchUsbGuidePromptCount") : 0;
                    if ((yield p.default.getInstance().getDeviceInformation(t ? t.deviceType : "")) || n >= 2) return {
                        code: s.RES_CODE.SUCCESS,
                        data: "ok"
                    };
                    m.default.setItem("launchUsbGuidePromptCount", n + 1);
                    return o.default.getInstance().getWebContent() ? (E.NotificationWindow.getInstance().receiveMessage(b.NotificationViewEnum.DISCONNECT_PROMPT, {
                        usbFastConnectCloseTime: 3e4,
                        isUsbGuidePrompt: !0,
                        deviceType: t.deviceType,
                        force: !0
                    }), {
                        code: s.RES_CODE.SUCCESS,
                        data: "ok"
                    }) : (global.__log.info("[RequestHandlers][launchUsbGuidePrompt] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    return global.__log.info("[RequestHandlers][launchUsbGuidePrompt] err: " + e), {
                        code: s.RES_CODE.FAILED,
                        data: e
                    };
                }
            });
        }
        closeUsbFastConnect() {
            global.__log.info("[RequestHandlers][closeUsbFastConnect] receive closeUsbFastConnect request");
            try {
                return o.default.getInstance().getWebContent() ? (E.NotificationWindow.getInstance().hide(), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][closeUsbFastConnect] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][closeUsbFastConnect] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        buryPoint(e) {
            try {
                let t;
                try {
                    t = JSON.parse(e.paramsStr);
                } catch (e) {
                    return {
                        code: s.RES_CODE.FAILED,
                        data: "parameter parsing error"
                    };
                }
                if (!Array.isArray(t)) return {
                    code: s.RES_CODE.FAILED,
                    data: "parameter type error"
                };
                const n = o.default.getInstance().getWebContent();
                return n ? (null == n || n.send(i.ConnectionRendererEvent.APP_BURY_POINT, t), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][buryPoint] webContent not found"), {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][buryPoint] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: "unknown error"
                };
            }
        }
        batchBuryPoint(e) {
            var t, n;
            global.__log.info("[RequestHandlers][batchBuryPoint] data: " + (null === (t = null == e ? void 0 : e.paramsStr) || void 0 === t ? void 0 : t.length));
            try {
                let t;
                try {
                    t = null === (n = JSON.parse(e.paramsStr)) || void 0 === n ? void 0 : n.map(e => e.params);
                } catch (e) {
                    return {
                        code: s.RES_CODE.FAILED,
                        data: "parameter parsing error"
                    };
                }
                if (!Array.isArray(t)) return {
                    code: s.RES_CODE.FAILED,
                    data: "parameter type error"
                };
                const r = e.paramsStr || "";
                if (this.batchBuryPointTimers.has(r)) {
                    global.__log.info("[RequestHandlers][batchBuryPoint] same data, debounced");
                    const e = this.batchBuryPointTimers.get(r);
                    return clearTimeout(e), this.batchBuryPointTimers.set(r, setTimeout(() => {
                        this.batchBuryPointTimers.delete(r);
                    }, 1e3)), {
                        code: s.RES_CODE.SUCCESS,
                        data: "ok"
                    };
                }
                this.batchBuryPointTimers.set(r, setTimeout(() => {
                    this.batchBuryPointTimers.delete(r);
                }, 1e3));
                const a = o.default.getInstance().getWebContent();
                return a ? (null == a || a.send(i.ConnectionRendererEvent.APP_BATCH_BURY_POINT, t), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][batchBuryPoint] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "web content not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][batchBuryPoint] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: "unknown error"
                };
            }
        }
        relayClose() {
            return f.default.getInstance().onRelayClose(), {
                code: s.RES_CODE.SUCCESS,
                data: "ok"
            };
        }
        pcDeviceInfo() {
            let e = "0.0.0";
            if (!process.env.IS_WEB) {
                const {app: t} = n(2);
                e = t.getVersion();
            }
            return {
                code: s.RES_CODE.SUCCESS,
                data: {
                    deviceId: m.default.getItem("newDeviceId"),
                    version: e
                }
            };
        }
        connectDevice(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
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
                    const r = o.default.getInstance().getWebContent();
                    return r ? (n = yield new Promise((e, n) => {
                        const o = setTimeout(() => {
                            s(), n("timeout");
                        }, 3e4);
                        function a(n, {eventId: r, code: i, reason: o}) {
                            t.eventId === r && (s(), e({
                                code: i,
                                reason: o
                            }));
                        }
                        function s() {
                            clearTimeout(o), c.ipcMain.removeListener(g.ConnectionMainEvent.CONNECT_DEVICE_REPLY, a);
                        }
                        c.ipcMain.on(g.ConnectionMainEvent.CONNECT_DEVICE_REPLY, a), null == r || r.send(i.ConnectionRendererEvent.CONNECT_DEVICE, t);
                    }), {
                        code: s.RES_CODE.SUCCESS,
                        data: n
                    }) : (global.__log.info("[RequestHandlers][connectDevice] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    return global.__log.info("[RequestHandlers][connectDevice] err: " + e), {
                        code: s.RES_CODE.FAILED,
                        data: "unknown error"
                    };
                }
            });
        }
        connectDeviceCloud(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
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
                    global.__log.info("[RequestHandlers][connectDeviceCloud] " + e.paramsStr);
                    const r = o.default.getInstance().getWebContent();
                    return r ? (n = yield new Promise((e, n) => {
                        const i = setTimeout(() => {
                            a(), n("timeout");
                        }, 3e4);
                        function o(n, {eventId: r, code: i, reason: o}) {
                            t.eventId === r && (a(), e({
                                code: i,
                                reason: o
                            }));
                        }
                        function a() {
                            clearTimeout(i), c.ipcMain.removeListener("CONNECT_DEVICE_CLOUD_REPLY", o);
                        }
                        c.ipcMain.on("CONNECT_DEVICE_CLOUD_REPLY", o), null == r || r.send("CONNECT_DEVICE_CLOUD", t);
                    }), {
                        code: s.RES_CODE.SUCCESS,
                        data: n
                    }) : (global.__log.info("[RequestHandlers][connectDeviceCloud] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    return global.__log.info("[RequestHandlers][connectDevice] err: " + e), {
                        code: s.RES_CODE.FAILED,
                        data: "unknown error"
                    };
                }
            });
        }
        disconnectDevice(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let t;
                if (global.__log.info("[RequestHandlers][disconnectDevice] receive disconnectDevice request"), 
                !process.env.IS_WEB) {
                    try {
                        t = JSON.parse(e.paramsStr), global.__log.info("[RequestHandlers][disconnectDevice] params: " + e.paramsStr);
                    } catch (e) {
                        return {
                            code: s.RES_CODE.FAILED,
                            data: "parameter parsing error"
                        };
                    }
                    const n = null == t ? void 0 : t.deviceId;
                    if (!n) return {
                        code: s.RES_CODE.FAILED,
                        data: "deviceId is required"
                    };
                    const r = o.default.getInstance().getDevices().some(e => e.id === n || e.connbaseId === n), a = this.sameAccountDevices.some(e => e.id === n || e.deviceId === n);
                    if (!r && !a) return global.__log.info("[RequestHandlers][disconnectDevice] device not found: " + n), 
                    {
                        code: s.RES_CODE.DEVICE_NOT_FOUND,
                        data: "device not found in list"
                    };
                    const l = o.default.getInstance().getWebContent();
                    if (!l) return global.__log.info("[RequestHandlers][DISCONNECT_DEVICE] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    };
                    if (!(yield new Promise(e => {
                        l.send(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS, {
                            deviceId: n
                        });
                        const t = setTimeout(() => {
                            c.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS), 
                            e(!1);
                        }, 3e3);
                        c.ipcMain.once(i.ConnectionRendererEvent.GET_DEVICE_CONNECT_STATUS, (n, r) => {
                            clearTimeout(t), e(!0 === (null == r ? void 0 : r.isConnected));
                        });
                    }))) return global.__log.info("[RequestHandlers][disconnectDevice] device not connected: " + n), 
                    {
                        code: s.RES_CODE.DEVICE_NOT_CONNECTED,
                        data: "device is not connected"
                    };
                    l.send(i.ConnectionRendererEvent.DISCONNECT_DEVICE, t);
                }
                return {
                    code: s.RES_CODE.SUCCESS,
                    data: {}
                };
            });
        }
        getConnectedDevices() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[RequestHandlers][getConnectedDevices] start");
                try {
                    const e = o.default.getInstance().getWebContent();
                    if (!e) return global.__log.info("[RequestHandlers][getConnectedDevices] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    };
                    const t = yield new Promise(t => {
                        e.send(i.ConnectionRendererEvent.GET_CONNECTED_DEVICES);
                        const n = setTimeout(() => {
                            c.ipcMain.removeAllListeners(i.ConnectionRendererEvent.GET_CONNECTED_DEVICES_REPLY), 
                            t([]);
                        }, 5e3);
                        c.ipcMain.once(i.ConnectionRendererEvent.GET_CONNECTED_DEVICES_REPLY, (e, r) => {
                            clearTimeout(n), t((null == r ? void 0 : r.devices) || []);
                        });
                    });
                    return global.__log.info(`[RequestHandlers][getConnectedDevices] found ${t.length} connected devices`), 
                    {
                        code: s.RES_CODE.SUCCESS,
                        data: t
                    };
                } catch (e) {
                    return global.__log.info("[RequestHandlers][getConnectedDevices] err: " + e), {
                        code: s.RES_CODE.FAILED,
                        data: e
                    };
                }
            });
        }
        vivoScreenCapture(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const t = o.default.getInstance().getWebContent();
                    if (!t) return global.__log.info("[RequestHandlers][vivoScreenCapture] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    };
                    null == t || t.send(i.ConnectionRendererEvent.VIVO_SCREEN_CAPTURE, e.paramsStr);
                } catch (e) {
                    return global.__log.info("[RequestHandlers][vivoScreenCapture] err: " + e), {
                        code: s.RES_CODE.FAILED,
                        data: "unknown error"
                    };
                }
                return {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                };
            });
        }
        notifySystemEvent(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const t = JSON.parse(e.paramsStr), n = o.default.getInstance().getWebContent();
                    return n ? (null == n || n.send(i.ConnectionRendererEvent.NOTIFY_SYSTEM_EVENT, t), 
                    {
                        code: s.RES_CODE.SUCCESS,
                        data: "ok"
                    }) : (global.__log.info("[RequestHandlers][notifySystemEvent] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    return global.__log.info("[RequestHandlers][networkQueryAll] err: " + e), {
                        code: s.RES_CODE.FAILED,
                        data: e
                    };
                }
            });
        }
        getCurConnectedUSBInfo() {
            return r.__awaiter(this, void 0, void 0, function*() {
                let e = {
                    isPCSuiteFront: 1,
                    list: []
                };
                try {
                    const t = o.default.getInstance().getWebContent();
                    return t ? (e = yield new Promise((e, n) => {
                        const r = setTimeout(() => {
                            a(), n("timeout");
                        }, 5e3);
                        function o(t, {isPCSuiteFront: n, list: r}) {
                            a(), e({
                                isPCSuiteFront: n,
                                list: r
                            });
                        }
                        function a() {
                            clearTimeout(r), c.ipcMain.removeListener(g.ConnectionMainEvent.GET_CUR_CONNECTED_USB_INFO, o);
                        }
                        c.ipcMain.on(g.ConnectionMainEvent.GET_CUR_CONNECTED_USB_INFO, o), null == t || t.send(i.ConnectionRendererEvent.GET_CUR_CONNECTED_USB_INFO);
                    }), {
                        code: s.RES_CODE.SUCCESS,
                        data: e
                    }) : (global.__log.info("[RequestHandlers][getCurConnectedUSBInfo] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    return global.__log.info("[RequestHandlers][getCurConnectedUSBInfo] err: " + e), 
                    {
                        code: s.RES_CODE.FAILED,
                        data: "unknown error"
                    };
                }
            });
        }
        connectDeviceUSB(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let t = {
                    deviceId: "",
                    deviceType: "",
                    isFastConnect: 0,
                    gamecastId: ""
                };
                try {
                    if (t = JSON.parse(e.paramsStr), global.__log.info("[RequestHandlers][connectDeviceUSB] " + e.paramsStr), 
                    0 === t.isFastConnect || 2 === t.isFastConnect) {
                        const e = global.__mainWindow;
                        e && (e.isMinimized() && e.restore(), e.show(), e.setAlwaysOnTop(!0), setTimeout(() => {
                            e.setAlwaysOnTop(!1), e.focus();
                        }, 100));
                    }
                    const n = o.default.getInstance().getWebContent();
                    return n ? (null == n || n.send(i.ConnectionRendererEvent.CONNECT_DEVICE_USB, t), 
                    {
                        code: s.RES_CODE.SUCCESS,
                        data: "ok"
                    }) : (global.__log.info("[RequestHandlers][connectDeviceUSB] webContent not found"), 
                    {
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    });
                } catch (e) {
                    return global.__log.info("[RequestHandlers][connectDeviceUSB] err: " + e), {
                        code: s.RES_CODE.FAILED,
                        data: "unknown error"
                    };
                }
            });
        }
        forwardMessage(e) {
            try {
                const {event: t, data: n} = JSON.parse(e.paramsStr);
                return t ? (v.default.getInstance().dispatch(t, n), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : {
                    code: s.RES_CODE.FAILED,
                    data: "event is null"
                };
            } catch (e) {
                return global.__log.info("[RequestHandlers][forwardMessage] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        vivoshareDownload(e) {
            try {
                global.__log.info("[RequestHandlers][vivoshareDownload]receive msg " + e.paramsStr);
                const t = JSON.parse(e.paramsStr);
                return y.startVivoshareLink({
                    ip: t.ip,
                    port: t.port,
                    sameAccount: t.sameAccount,
                    sceneType: "vivoshareDownload"
                }), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                };
            } catch (e) {
                return global.__log.info("[RequestHandlers][vivoshareDownload] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        switchLang(e) {
            try {
                global.__log.info("[RequestHandlers][switchLang] receive msg " + e.paramsStr);
                const {lang: t} = JSON.parse(e.paramsStr), n = o.default.getInstance().getWebContent();
                return n ? (null == n || n.send(w.LocaleManagerMsg.TEST_SWICTH_LANG, t), global.__log.info("[RequestHandlers][switchLang] lang: " + t), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                };
            } catch (e) {
                return global.__log.info("[RequestHandlers][switchLang] error: " + JSON.stringify(e)), 
                {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        rightMenuTransfer(e) {
            try {
                global.__log.info("[RequestHandlers][rightMenuTransfer] receive msg " + e.paramsStr);
                const t = JSON.parse(e.paramsStr), n = o.default.getInstance().getWebContent(), {target: r, deviceid: a, filepath: l} = t;
                return n ? (null == n || n.send(i.ConnectionRendererEvent.RIGHT_MENU_TRANSFER, {
                    target: r,
                    fileDeviceId: a,
                    files: l
                }), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                };
            } catch (e) {
                return global.__log.info("[RequestHandlers][rightMenuTransfer] error: " + (e instanceof Error ? e.toString() : JSON.stringify(e))), 
                {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        mtpDevicesUpdate(e) {
            try {
                const t = JSON.parse(e.paramsStr), n = o.default.getInstance().getWebContent();
                return n ? (null == n || n.send(i.ConnectionRendererEvent.MTP_DEVICES_UPDATE, {
                    devices: Array.isArray(t) ? t : []
                }), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][mtpDevicesUpdate] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][mtpDevicesUpdate] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        reportNetworkPermission(e) {
            try {
                const t = JSON.parse(e.paramsStr), n = o.default.getInstance().getWebContent();
                return n ? (n.send(i.ConnectionRendererEvent.REPORT_CONNECT_SERVER_NETWORK_PERMISSION, t || {}), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][reportNetworkPermission] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][reportNetworkPermission] err: " + e), 
                {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        startWifiDirect() {
            try {
                const e = o.default.getInstance().getWebContent();
                return e ? (null == e || e.send(i.ConnectionRendererEvent.START_WIFI_DIRECT, !0), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][startWifiDirect] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return {
                    code: s.RES_CODE.FAILED,
                    data: "startWifiDirect parameter parsing error"
                };
            }
        }
        stopWifiDirect() {
            try {
                const e = o.default.getInstance().getWebContent();
                return e ? (null == e || e.send(i.ConnectionRendererEvent.STOP_WIFI_DIRECT, !1), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][STOP_WIFI_DIRECT] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return {
                    code: s.RES_CODE.FAILED,
                    data: "stopWifiDirect parameter parsing error"
                };
            }
        }
        invokeShareCamera(e) {
            return new Promise(t => {
                try {
                    const n = JSON.parse(e.paramsStr), r = o.default.getInstance().getWebContent();
                    if (r) {
                        r.send(i.ConnectionRendererEvent.INVOKE_SHARE_CAMERA, n || {});
                        const e = setTimeout(() => {
                            c.ipcMain.removeAllListeners(i.ConnectionRendererEvent.INVOKE_SHARE_CAMERA), t({
                                code: s.RES_CODE.TIME_OUT,
                                data: {
                                    isPhoneConnected: 0,
                                    msg: "invoke share camera timeout"
                                }
                            });
                        }, 3e3);
                        c.ipcMain.once(i.ConnectionRendererEvent.INVOKE_SHARE_CAMERA, (n, r) => {
                            global.__log.info("[RequestHandlers][invokeShareCamera] arg: " + JSON.stringify(r)), 
                            clearTimeout(e), t({
                                code: s.RES_CODE.SUCCESS,
                                data: r
                            });
                        });
                    } else global.__log.info("[RequestHandlers][invokeShareCamera] webContent not found"), 
                    t({
                        code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                        data: {
                            isPhoneConnected: 0,
                            msg: "webContent not found"
                        }
                    });
                } catch (e) {
                    global.__log.info("[RequestHandlers][invokeShareCamera] err: " + e), t({
                        code: s.RES_CODE.FAILED,
                        data: {
                            isPhoneConnected: 0,
                            msg: e + ""
                        }
                    });
                }
            });
        }
        updateShareCameraUsers(e) {
            try {
                const t = e.paramsStr, n = o.default.getInstance().getWebContent();
                return n ? (n.send(i.ConnectionRendererEvent.UPDATE_SHARE_CAMERA_USERS, t || ""), 
                {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][updateShareCameraUsers] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][updateShareCameraUsers] err: " + e), 
                {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        notifyP2PConflict(e) {
            try {
                const t = JSON.parse(e.paramsStr), n = o.default.getInstance().getWebContent();
                return n ? (n.send(i.ConnectionRendererEvent.NOTIFY_P2P_CONFLICT, t || {}), {
                    code: s.RES_CODE.SUCCESS,
                    data: "ok"
                }) : (global.__log.info("[RequestHandlers][notifyP2PConflict] webContent not found"), 
                {
                    code: s.RES_CODE.WEB_CONTENT_NOT_FOUND,
                    data: "webContent not found"
                });
            } catch (e) {
                return global.__log.info("[RequestHandlers][notifyP2PConflict] err: " + e), {
                    code: s.RES_CODE.FAILED,
                    data: e
                };
            }
        }
        fmSearch(e) {
            const n = t.parseParams(e.queryStr);
            return S.default.search(n);
        }
        fmThumb(e) {
            const n = t.parseParams(e.queryStr);
            return S.default.getThumb(n);
        }
        fmTransferFileToPC(e) {
            const t = JSON.parse(e.paramsStr);
            return S.default.fmTransferFileToPC(t), "";
        }
        wsRootRoute(e, n) {
            const r = t.parseParams(e.queryStr);
            global.__log.info("[RequestHandlers][wsRootRoute] queryParams: " + JSON.stringify(r)), 
            "vivoScreen" === r.source && l.default.getInstance().initWs(n);
        }
        applicationManangerHandle(e, n) {
            const r = e.pathname.replace("/", "").toLocaleUpperCase(), i = t.parseParams(e.queryStr);
            global.__log.info(`[RequestHandlers][applicationManangerHandle] moduleName = ${r} queryParams: ${JSON.stringify(i)}`), 
            i.hashId ? h.default.getInstance().addWs(i.hashId, n, r, i.id) : (null == n || n.close("404 not found"), 
            global.__log.info("[applicationManangerHandle] websocket 404 not found"));
        }
    }, t.requestHandlers = t.requestHandlersInstance.creatHandlers();
}
