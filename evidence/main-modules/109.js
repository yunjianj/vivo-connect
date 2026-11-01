// analysis/pretty/main.js:16893; webpack module 109
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(28)), o = n(2), a = n(234), s = r.__importDefault(n(686)), l = r.__importDefault(n(147)), c = r.__importDefault(n(341)), u = r.__importDefault(n(26)), d = n(11), h = r.__importDefault(n(161)), p = n(41), f = n(687), _ = r.__importDefault(n(110)), m = r.__importDefault(n(6)), {isMac: g, isWin: v} = u.default.getSysEnv;
    class y extends h.default {
        constructor() {
            super([ p.LogModule.FRAMEWORK, "VivoSyncManager" ]), this.wsPort = f.WS_PORT, this.connectStatus = f.SYNC_CONNECT_STATUS.CONNECT_READ, 
            this.windowSyncInstanceMap = new Map, this.errorTaskQueue = [], this.queueMaxLength = 10, 
            this.connectFailCount = 0, this.lastTime = new Date, this.isRepairWsService = !1, 
            this.init();
        }
        static getInstance() {
            return this.instance || (this.instance = new y, this.instance.log.info("VivoSyncManager ready")), 
            this.instance;
        }
        get connectPort() {
            return this.wsPort;
        }
        set connectPort(e) {
            this.log.info("connectPort setter:" + e), this.wsPort = e;
        }
        init() {
            g || (this.getConfigPort(), this.registerHttpServerListeners()), this.connectServer();
        }
        connectServer() {
            try {
                const e = `${f.WS_URL}:${this.connectPort}`, t = n(1396).w3cwebsocket;
                if (this.ws = new t(e), this.log.info("connectToVivoSyncServer: " + this.connectPort), 
                !this.ws) return void this.log.error("ws is null");
                this.ws.onopen = this.handleOpenWs.bind(this), this.ws.onerror = this.handleErrorWs.bind(this), 
                this.ws.onclose = this.handleCloseWs.bind(this), this.ws.onmessage = this.handleMessageWs.bind(this);
            } catch (e) {
                this.log.error("connectToVivoSyncServer catch error: " + e);
            }
        }
        getConfigPort() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const e = u.default.readConfigIniFile();
                    this.connectPort = (null == e ? void 0 : e.SyncServicePort) || 9996, this.log.info("getConfigPort success: " + JSON.stringify(e));
                } catch (e) {
                    this.log.error("getConfigPort error:" + e);
                }
            });
        }
        handleOpenWs() {
            this.log.info("connect dataSync service success"), this.updateConnectState(f.SYNC_CONNECT_STATUS.CONNECT_SUCCESS), 
            l.default.getInstance().broadcastSynsRestore(), this.initAppdata(), this.handleFailTask(), 
            this.clearReconnectTimer(), this.repairWsServiceWhenNoEsService(1);
        }
        handleMessageWs(e) {
            const t = e.data && JSON.parse(e.data);
            t && this.sendToRenderMsg(t);
        }
        handleCloseWs(e) {
            this.connectFailCount <= 12 && this.log.error(`connect close, code: ${e.code}. reason: ${e.reason}`), 
            this.updateConnectState(f.SYNC_CONNECT_STATUS.CONNECT_CLOSE), this.closeConnection(), 
            this.reconnection();
        }
        handleErrorWs(e) {
            this.connectFailCount <= 12 && this.log.error("connect error:" + JSON.stringify(e)), 
            this.updateConnectState(f.SYNC_CONNECT_STATUS.CONNECT_ERROR), this.closeConnection(), 
            this.reconnection();
        }
        reconnection() {
            this.connectFailCount <= 12 && this.log.info("ws reconnection connectFailCount: " + this.connectFailCount), 
            !g && this.getConfigPort();
            if (g ? 12 === this.connectFailCount : 1 === this.connectFailCount) {
                this.log.info("reconnection repairWsService");
                const e = {
                    timing: 1,
                    reason: 1,
                    result: 1,
                    fail_reason: ""
                };
                this.repairWsService(e);
            }
            this.timer || (this.timer = setTimeout(() => r.__awaiter(this, void 0, void 0, function*() {
                this.connectFailCount++, this.connectServer(), this.clearReconnectTimer();
            }), 5e3));
        }
        repairWsService(e) {
            this.isRepairWsService || (this.isRepairWsService = !0, g ? (this.log.error("restart mac service"), 
            _.default.getInstance().openMacAllServiceDialog(e)) : (this.log.error("restart win service"), 
            this.repairWinService(e)));
        }
        repairWsServiceWhenNoEsService(e) {
            var t;
            this.log.info("repairWsServiceWhenNoEsService start");
            let n = !1;
            if (v) {
                let e = null;
                try {
                    e = i.default.getOSInfo();
                } catch (e) {}
                const r = ((e ? JSON.parse(e) : null) || {}).os || {}, o = null !== (t = null == r ? void 0 : r.type) && void 0 !== t ? t : 0;
                this.log.info("repairWsServiceWhenNoEsService osInfoResult type: " + o);
                const a = Number(o);
                Number.isFinite(a) && a >= 10 && (this.log.info("repairWsServiceWhenNoEsService win>=10"), 
                n = !0);
            } else if (g) {
                u.default.isMacVersionGreaterThanVersion(10.14) && (this.log.info("repairWsServiceWhenNoEsService mac>10.14"), 
                n = !0);
            }
            if (n && !this.getVivoesServiceStatus()) {
                this.log.info("repairWsServiceWhenNoEsService repairWsService start");
                const t = {
                    timing: e,
                    reason: 2,
                    result: 1,
                    fail_reason: ""
                };
                this.repairWsService(t);
            }
        }
        RepairAcrossDays() {
            const e = new Date;
            if (!this.isSameDay(this.lastTime, e)) if (this.log.info(`RepairAcrossDays AcrossDays lastTime: ${this.lastTime}, currentTime: ${e}`), 
            this.lastTime = e, this.isRepairWsService = !1, this.connectStatus == f.SYNC_CONNECT_STATUS.CONNECT_SUCCESS) this.repairWsServiceWhenNoEsService(2); else {
                const e = {
                    timing: 2,
                    reason: 1,
                    result: 1,
                    fail_reason: ""
                };
                this.repairWsService(e);
            }
        }
        isSameDay(e, t) {
            return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
        }
        clearReconnectTimer() {
            clearTimeout(this.timer), this.timer = null;
        }
        closeConnection() {
            this.log.info("closeConnection"), this.heartBeatTimer && (clearInterval(this.heartBeatTimer), 
            this.heartBeatTimer = null), this.ws && (this.ws.close(), this.ws = null);
        }
        handleFailTask() {
            let e = this.errorTaskQueue.length;
            if (e) for (let t = 0; t <= e; t++) {
                const e = this.errorTaskQueue.shift();
                this.sendServiceMsg(e), this.log.info("handleFailTask item:" + (null == e ? void 0 : e.msg));
            }
        }
        addErrorTask(e) {
            var t, n, r, i;
            if (!e) return;
            const o = [ ...this.errorTaskQueue ], a = (null === (t = o.filter(t => {
                var n, r;
                return (null === (n = null == t ? void 0 : t.msg) || void 0 === n ? void 0 : n.cmd) === (null === (r = null == e ? void 0 : e.msg) || void 0 === r ? void 0 : r.cmd);
            })) || void 0 === t ? void 0 : t.length) || 0;
            let s = o.length;
            if (this.log.info("diffResult:" + a), !(this.errorTaskQueue.length >= this.queueMaxLength)) {
                if (a) for (let t = 0; t <= s; t++) (null === (r = null === (n = o[t]) || void 0 === n ? void 0 : n.msg) || void 0 === r ? void 0 : r.cmd) === (null === (i = null == e ? void 0 : e.msg) || void 0 === i ? void 0 : i.cmd) && o.splice(t, 1, e); else o.push(e);
                this.log.info("errorTaskQueue:" + JSON.stringify([ ...o ])), this.errorTaskQueue = [ ...o ];
            }
        }
        initAppdata() {
            "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT && (this.log.info("prepare sendServiceMsg SERVER_ROOM_CHANGE"), 
            setTimeout(() => {
                let e = m.default.getItem("serverRoomLabel"), t = m.default.getItem("countryCode");
                this.log.info(`sendServiceMsg SERVER_ROOM_CHANGE exdata: ${e}|${t}`), this.sendServiceMsg({
                    moduleId: a.SyncModuleEnum.SYNC_MODULE_COMMON,
                    msg: {
                        cmd: a.CommonMsg.SERVER_ROOM_CHANGE,
                        exdata: `${e}|${t}`,
                        taskId: 0
                    }
                });
            }, 2e3));
            let e = o.app.getPath("appData");
            this.sendServiceMsg({
                moduleId: a.SyncModuleEnum.SYNC_MODULE_COMMON,
                msg: {
                    cmd: a.CommonMsg.USER_APPDATA_CHANGE,
                    exdata: "" + e,
                    taskId: 0
                }
            });
        }
        sendSyncMessage() {
            "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT && (this.log.info("切换地区国家码 prepare sendServiceMsg SERVER_ROOM_CHANGE"), 
            setTimeout(() => {
                let e = m.default.getItem("serverRoomLabel"), t = m.default.getItem("countryCode");
                this.log.info(`切换地区国家码  sendServiceMsg SERVER_ROOM_CHANGE exdata: ${e}|${t}`), this.sendServiceMsg({
                    moduleId: a.SyncModuleEnum.SYNC_MODULE_COMMON,
                    msg: {
                        cmd: a.CommonMsg.SERVER_ROOM_CHANGE,
                        exdata: `${e}|${t}`,
                        taskId: 0
                    }
                });
            }, 2e3));
            let e = o.app.getPath("appData");
            this.sendServiceMsg({
                moduleId: a.SyncModuleEnum.SYNC_MODULE_COMMON,
                msg: {
                    cmd: a.CommonMsg.USER_APPDATA_CHANGE,
                    exdata: "" + e,
                    taskId: 0
                }
            });
        }
        updateConnectState(e) {
            this.connectStatus = e, global.connectStatus = this.connectStatus;
        }
        registerHttpServerListeners() {
            c.default.getInstance().on("syncService", e => {
                var t;
                this.log.info("HttpForwardMessage:syncService:" + JSON.stringify(e));
                const {msg: n} = e, {exdata: r, cmd: i, resMsg: o} = n;
                if (this.log.info("HttpForwardMessage:syncService resMsg:" + JSON.stringify(o)), 
                i === f.SYNC_HTTP_MESSAGE.USER_APPDATA_CHANGE) {
                    const e = global.__mainWindow;
                    e && (null === (t = null == e ? void 0 : e.webContents) || void 0 === t || t.send(d.APP_MESSAGE_ENUM.APPDATA_CHANGE));
                } else if (i === f.SYNC_HTTP_MESSAGE.UPDATE_PORT_SUCC) {
                    if (this.log.info("HttpForwardMessage:syncService/UPDATE_PORT_SUCC:" + r), this.connectPort === r) return void this.log.info("HttpForwardMessage:syncService/UPDATE_PORT_SUCC unchanged:" + r);
                    this.connectPort = r, this.reconnection();
                } else i === f.SYNC_HTTP_MESSAGE.UPDATE_PORT_FAILED && this.log.error("HttpForwardMessage:syncService/UPDATE_PORT_FAILED:" + r);
            });
        }
        startHeartBeat() {
            this.heartBeatTimer = setInterval(() => {
                let e = JSON.stringify({
                    msg: "sent heart beat"
                });
                this.ws ? (this.ws.send(e), console.log("sent heart-beat")) : console.log("ws is null");
            }, 3e4);
        }
        sendServiceMsg(e, t) {
            var n, i;
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    this.ws ? (this.log.info("sendServiceMsg: " + (null === (n = null == e ? void 0 : e.msg) || void 0 === n ? void 0 : n.cmd)), 
                    yield this.ws.send(JSON.stringify(e))) : (this.log.info("sendServiceMsg sendMsg ws is null: " + (null === (i = null == e ? void 0 : e.msg) || void 0 === i ? void 0 : i.cmd)), 
                    this.addErrorTask(e));
                } catch (t) {
                    this.log.error("sendServiceMsg error: " + t), this.addErrorTask(e);
                }
                t && t();
            });
        }
        addWindowsSyncInstance(e) {
            const {callback: t, winId: n} = e;
            this.windowSyncInstanceMap.set("" + n, t), this.log.info(`window[${n}]windowHandle:${n}`);
        }
        removeWindowsSyncInstance(e) {
            this.log.info("[websocket]removeWindowsSyncInstance: " + e), this.windowSyncInstanceMap.delete("" + e);
        }
        sendToRenderMsg(e) {
            var t, n;
            const {msg: r, moduleId: i} = e;
            let o = global.__mainWindow;
            (null == o ? void 0 : o.isDestroyed()) || (null === (t = null == o ? void 0 : o.webContents) || void 0 === t ? void 0 : t.isDestroyed()) ? this.log.info("[bridges]:sendToRenderMsg: window is destroyed!") : null === (n = this.windowSyncInstanceMap) || void 0 === n || n.forEach(e => {
                e && e(Object.assign(Object.assign({}, r), {
                    moduleId: i,
                    taskId: r.taskId + 1
                }));
            });
        }
        receiveRenderMessage() {}
        repairWinService(e) {
            try {
                s.default.repairService(e), this.log.info("ToolsManagerInstance.repairService");
            } catch (e) {
                this.log.error("repairWinService error:" + e);
            }
        }
        getSyncServiceStatus() {
            const e = i.default.syncServiceIsExist();
            return this.log.info("getSyncServiceStatus: " + e), e;
        }
        getVivoesServiceStatus() {
            const e = i.default.esServiceIsExist();
            return this.log.info("esServiceIsExist: " + e), e;
        }
    }
    t.default = y, y.blackListLogs = f.BLACK_LOG_LIST;
}
