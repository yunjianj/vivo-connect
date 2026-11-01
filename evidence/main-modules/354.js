// analysis/pretty/main.js:37841; webpack module 354
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(2), o = n(131), a = n(56), s = n(100), l = r.__importDefault(n(605)), c = r.__importDefault(n(1464)), u = r.__importDefault(n(1465)), d = r.__importDefault(n(714)), h = r.__importDefault(n(1466)), p = r.__importDefault(n(1467)), f = r.__importDefault(n(1468)), _ = r.__importDefault(n(1469)), m = r.__importDefault(n(1470)), g = r.__importDefault(n(1471)), v = r.__importDefault(n(1472)), y = r.__importDefault(n(25)), E = r.__importDefault(n(698)), b = r.__importDefault(n(355)), w = {
        [s.AppProcessName.EXAMPLE]: u.default,
        [s.AppProcessName.VIVOSCREEN]: l.default,
        [s.AppProcessName.EXTENDEDSCREEN]: c.default,
        [s.AppProcessName.KEYBOARD_MOUSE_COORDINATION]: d.default,
        [s.AppProcessName.REMOTE_CONTROL]: f.default,
        [s.AppProcessName.VDFS_SERVER]: h.default,
        [s.AppProcessName.VDFS_CLIENT]: p.default,
        [s.AppProcessName.BACKUP]: _.default,
        [s.AppProcessName.VIVO_SCREEN_CAPTURE]: m.default,
        [s.AppProcessName.PHONE_CALL]: g.default,
        [s.AppProcessName.PC_MODE]: v.default,
        [s.AppProcessName.SHARE_CAMERA]: E.default,
        [s.AppProcessName.VIVO_CLAW]: b.default
    }, S = [ s.AppProcessName.EXAMPLE, s.AppProcessName.VDFS_SERVER, s.AppProcessName.VDFS_CLIENT, s.AppProcessName.KEYBOARD_MOUSE_COORDINATION, s.AppProcessName.BACKUP, s.AppProcessName.VIVO_SCREEN_CAPTURE, s.AppProcessName.PHONE_CALL, s.AppProcessName.VIVO_CLAW, s.AppProcessName.SHARE_CAMERA, s.AppProcessName.VIVO_CLAW, s.AppProcessName.VIVOSCREEN, s.AppProcessName.PC_MODE ];
    class T {
        constructor() {
            this.wsList = new Map, this.appHashIdList = new Map, this.isPcsuiteQuit = !1, this.isPcsuiteQuit = !1, 
            this.throttle_pushModuleList = y.default.throttle(this.pushModuleList.bind(this), 1e3);
        }
        updateWsList(e, t) {
            this.wsList.set(e, t);
        }
        getWs(e) {
            return this.wsList.get(e);
        }
        removeWs(e) {
            this.wsList.delete(e);
        }
        static getInstance() {
            return this.instance || (this.instance = new T), this.instance;
        }
        setWebContent(e) {
            this.webContent = e;
        }
        addWs(e, t, n, r) {
            global.__log.info(`[ApplicationMananger] addWs: moduleName=${n} appHashId=${e}, deviceId=${r}`);
            const i = this.getWs(e);
            i && (global.__log.info(`[ApplicationMananger] Replacement occurs: moduleName=${n} appHashId=${e}`), 
            i.onmessage = null, i.onclose = null, i.onerror = null), this.updateWsList(e, t), 
            t.onmessage = t => {
                "extendedScreen" === e && global.__log.info(`---------${e}前端收到pc协同应用进程消息---------${t.data.toString()}`), 
                this.onWsMessage(e, t.data.toString());
            }, t.onclose = r => {
                global.__log.info(`[ApplicationMananger] moduleName=${n} appHashId=${e} onclose: code=${r.code} reason=${r.reason}`), 
                t.onclose = null, this.onWsClose(n, e, r.code);
            }, t.onerror = t => {
                this.onWsError(e, t);
            }, "extendedScreen" !== e && this.ipcSendHandle(e, s.APPIPCMsgType.OPEN, r ? {
                deviceId: r
            } : void 0), this.updateAppHashIdList(n, e);
        }
        wsSendHandle(e, t) {
            const n = [ [ "inTransmission" ], [ "fileTransferRecord", "fileName" ], [ "system:login" ] ], r = this.getWs(e);
            "keyboardMouseCoordination" === e && -1 !== JSON.stringify(t).indexOf("close") && global.__log.info(`[ApplicationMananger] (appHashId=${e}) ws=${r} 键鼠关闭消息 JSON.stringify(data):${JSON.stringify(t)}`), 
            r ? ((null == t ? void 0 : t.length) < 1024 && (n.some(e => e.every(e => t.includes(e))) || global.__log.info(`[ApplicationMananger] (appHashId=${e}) ws send: msg=${t}`)), 
            "extendedScreen" === e && global.__log.info(`---------${e}前端向pc协同应用进程发消息:${t}---------`), 
            r.send(t)) : (null == t ? void 0 : t.length) < 1024 && (n.some(e => e.every(e => t.includes(e))) || global.__log.info(`[ApplicationMananger] (appHashId=${e}) connection does not exist; msg=${t}`));
        }
        ipcSendHandle(e, t, n) {
            if (console.log("-----ipcSendHandle-----", e, t, n, this.isPcsuiteQuit), this.isPcsuiteQuit) return;
            if (!this.webContent) return void global.__log.info(`[ApplicationMananger] (appHashId=${e}) WebContent not set;msg=${n}`);
            const r = {
                appHashId: e,
                type: t,
                payload: n
            };
            console.log("-----dataPack-----", r), this.webContent.send(a.ConnectionRendererEvent.APP_PROCESS_COMMUNICATION, r);
        }
        onWsMessage(e, t) {
            const n = [ [ "inTransmission" ], [ "fileTransferRecord", "fileName" ], [ "system:login" ], [ "AlbumBackupInfo" ] ];
            this.onHeartbeatMsgHandle(e, t) || ((null == t ? void 0 : t.length) < 1024 && (n.some(e => e.every(e => t.includes(e))) || global.__log.info(`[ApplicationMananger] (appHashId=${e}) onWsMessage: msg=${t}`)), 
            this.onCloseMsgHandle(e, t), this.onForwardMsgHandle(t) || this.ipcSendHandle(e, s.APPIPCMsgType.MESSAGE, t));
        }
        onIpcMessage(e) {
            if ("object" != typeof e) return void global.__log.info("[ApplicationMananger] bad packet: " + JSON.stringify(e));
            const {type: t, appHashId: n, payload: r} = e;
            switch (t) {
              case s.APPIPCMsgType.MESSAGE:
                this.wsSendHandle(n, r);
                break;

              case s.APPIPCMsgType.OPEN:
                {
                    if ("object" != typeof r) return void global.__log.info("[ApplicationMananger] bad open packet: " + JSON.stringify(e));
                    const {appName: t, params: i} = r;
                    this.openHandle(t, n, i);
                }
                break;

              case s.APPIPCMsgType.CLOSE:
                if ("string" != typeof r) return void global.__log.info("[ApplicationMananger] bad close packet: " + JSON.stringify(e));
                this.closeHandle(n, r);
                break;

              case s.APPIPCMsgType.DESTROY:
                this.destroyHandle(r, n);
                break;

              default:
                global.__log.info("[ApplicationMananger] bad packet: " + JSON.stringify(e));
            }
        }
        openHandle(e, t, n) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (global.__log.info(`[ApplicationMananger] (appName = ${e} appHashId=${t}) openHandle`), 
                this.getWs(t)) return global.__log.info(`[ApplicationMananger] (appName = ${e} appHashId=${t}) process is connected`), 
                void this.ipcSendHandle(t, s.APPIPCMsgType.OPEN);
                try {
                    const r = w[e];
                    if (!r) throw global.__log.info(`[ApplicationMananger][openHandle] (appName = ${e} appHashId=${t}) process does not exist`), 
                    "process does not exist";
                    yield r.getInstance().launchProcess(t, n, (r, i) => {
                        global.__log.info(`[ApplicationMananger][openHandle] (appName = ${e} appHashId=${t}) Alive:${r} isOnlyLaunch:${n.isOnlyLaunch}`), 
                        "extendedScreen" !== t && this.ipcSendHandle(t, s.APPIPCMsgType.PROCESS_ALIVE, {
                            isAlive: r,
                            error: i
                        }), (null == n ? void 0 : n.isOnlyLaunch) && r && this.ipcSendHandle(t, s.APPIPCMsgType.OPEN);
                    });
                } catch (n) {
                    global.__log.info(`[ApplicationMananger][openHandle] (appName = ${e} appHashId=${t}) openHandle err:${n}`), 
                    this.ipcSendHandle(t, s.APPIPCMsgType.OPEN, "Process launch failed");
                }
            });
        }
        closeHandle(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                this.wsSendHandle(e, t);
            });
        }
        destroyHandle(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if ("object" != typeof e || !e.appName) return void global.__log.info(`[ApplicationMananger] destroyHandle: appHashId=${t} Parameter error`);
                const {appName: n, isKillProcess: r} = e;
                global.__log.info(`[ApplicationMananger] destroyHandle: isKillProcess=${r} moduleName=${n} appHashId=${t}`);
                const i = this.getWs(t);
                if (i && (i.close(), setTimeout(() => {
                    i && "function" == typeof i.onclose && (global.__log.info(`[ApplicationMananger][destroyHandle] onclose=${!!i.onclose} moduleName=${n} appHashId=${t}`), 
                    i.onclose({
                        code: 400001
                    }), i.onclose = null);
                }, 500)), this.removeWs(t), r) {
                    const e = w[n];
                    null == e || e.getInstance().killProcess(t);
                }
                this.removeAppHashId(n, t);
            });
        }
        onWsClose(e, t, n) {
            this.removeWs(t), this.destroyHandle({
                appName: e,
                isKillProcess: !1
            }, t), this.ipcSendHandle(t, s.APPIPCMsgType.CLOSE, n);
        }
        onWsError(e, t) {
            global.__log.info(`[ApplicationMananger] appHashId=${e} onWsError`), global.__log.info(t);
        }
        updateAppHashIdList(e, t) {
            const n = e, r = this.appHashIdList.get(n) || new Set;
            r.add(t), this.appHashIdList.set(n, r), this.throttle_pushModuleList();
        }
        removeAppHashId(e, t) {
            const n = this.appHashIdList.get(e);
            n && n.delete(t), this.throttle_pushModuleList();
        }
        getAllModuleList() {
            const e = [];
            for (const [t, n] of this.appHashIdList.entries()) for (const r of n.values()) e.push(`${t.toLocaleLowerCase()}$-$${r}`);
            return e;
        }
        sendBroadcastMsg(e) {
            this.getAllModuleList().forEach(t => {
                const [n = "", r = ""] = t.split("$-$");
                this.forwardMsg(n, r, e);
            });
        }
        pushModuleList() {
            const e = this.getAllModuleList(), t = {
                from: "system$-$system",
                to: [],
                payload: JSON.stringify({
                    type: "serviceList",
                    data: e
                })
            };
            this.sendBroadcastMsg(`${s.AppProcessMsgType.FORWARD}${JSON.stringify(t)}`);
        }
        forwardMsg(e, t, n) {
            const r = e.toLocaleUpperCase(), i = this.appHashIdList.get(r);
            i ? i.forEach(e => {
                t && t !== e || this.wsSendHandle(e, n);
            }) : global.__log.info(`[ApplicationMananger][forwardMsg] moduleName=${r} appHashId=${t} ws not found`);
        }
        onForwardMsgHandle(e) {
            const t = s.AppProcessMsgType.FORWARD;
            if (!e.startsWith(t)) return !1;
            try {
                const n = e.slice(t.length), {to: r} = JSON.parse(n) || {};
                Array.isArray(r) || void 0 === r ? (global.__log.info("[ApplicationMananger] onForwardMsgHandle data=" + e), 
                r && r.length ? r.forEach(t => {
                    const [n = "", r = ""] = t.split("$-$");
                    this.forwardMsg(n, r, e);
                }) : this.sendBroadcastMsg(e)) : global.__log.info("[ApplicationMananger] onForwardMsgHandle Parameter err: " + r);
            } catch (t) {
                return global.__log.info(`[ApplicationMananger] onForwardMsgHandle data=${e} err: ${t}`), 
                !1;
            }
            return !0;
        }
        killProcess() {
            return global.__log.info("[ApplicationMananger] killProcess"), this.isPcsuiteQuit = !0, 
            new Promise((e, t) => r.__awaiter(this, void 0, void 0, function*() {
                var n, r;
                try {
                    for (const e of S) global.__log.info("[ApplicationMananger] killProcess " + e), 
                    e === s.AppProcessName.VDFS_CLIENT && "darwin" === process.platform && (global.__log.info(`[ApplicationMananger] killProcess ${e} removeDomain`), 
                    null === (n = w[e]) || void 0 === n || n.getInstance().removeDomain()), yield null === (r = w[e]) || void 0 === r ? void 0 : r.getInstance().killProcess(void 0);
                } catch (e) {
                    t(e);
                }
                e();
            }));
        }
        onHeartbeatMsgHandle(e, t) {
            if (!t.startsWith(s.AppProcessMsgType.HEARTBEAT)) return !1;
            try {
                const n = t.slice(s.AppProcessMsgType.HEARTBEAT.length), {msgId: r} = JSON.parse(n) || {};
                if (!r) return global.__log.info("[ApplicationMananger] onHeartbeatMsgHandle Bad data: " + t), 
                !0;
                const i = this.getWs(e);
                if (!i) return global.__log.info(`[ApplicationMananger] (appHashId=${e}) connection does not exist; msg=${t}`), 
                !0;
                i.send(`${s.AppProcessMsgType.RECEIPT}${JSON.stringify({
                    msgId: r
                })}`);
            } catch (e) {
                global.__log.info(`[ApplicationMananger] onHeartbeatMsgHandle data=${t} err: ${e}`);
            }
            return !0;
        }
        onCloseMsgHandle(e, t) {
            if (!t.startsWith(s.AppProcessMsgType.CLOSE)) return !1;
            try {
                const n = t.slice(s.AppProcessMsgType.CLOSE.length), {msgId: r} = JSON.parse(n) || {};
                if (!r) return global.__log.info("[ApplicationMananger] onCloseMsgHandle Bad data: " + t), 
                !0;
                if (this.wsSendHandle(e, `${s.AppProcessMsgType.RECEIPT}${JSON.stringify({
                    msgId: r
                })}`), "vivoScreen" === e || "PCMode" === e) {
                    const t = this.getWs(e);
                    global.__log.info(`[ApplicationMananger] onCloseMsgHandle appHashId=${e} ws: ${!!t}`), 
                    null == t || t.close(), setTimeout(() => {
                        const t = this.getWs(e);
                        t && "function" == typeof t.onclose && (global.__log.info(`[ApplicationMananger] onCloseMsgHandle appHashId=${e} Forced disconnection`), 
                        t.onclose({
                            code: 400001
                        }), t.onclose = null);
                    }, 500);
                }
            } catch (e) {
                global.__log.info(`[ApplicationMananger] onCloseMsgHandle data=${t} err: ${e}`);
            }
            return !0;
        }
    }
    i.ipcMain.on(o.ConnectionMainEvent.APP_PROCESS_COMMUNICATION, (e, t) => {
        T.getInstance().onIpcMessage(t);
    }), t.default = T;
}
