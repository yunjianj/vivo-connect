// analysis/pretty/main.js:120018; webpack module 1563
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.VClawWSLink = void 0;
    const r = n(0), i = r.__importDefault(n(241)), o = r.__importDefault(n(12)), a = n(58), s = r.__importDefault(n(1564)), l = r.__importDefault(n(166)), c = n(744), u = n(745), d = n(362), h = r.__importDefault(n(80)), p = n(11), f = n(2), _ = n(1565);
    class m extends o.default {
        constructor() {
            super(), this.ws = null, this.sid = a.v4(), this.state = c.SocketStatus.SocketStatusClosed, 
            this.isAlive = !0, this.wsConnectTimeout = null, this.wsIdleTimeout = null, this.heartbeatInterval = null, 
            this.activeRequests = new Map, this.stopRequestIdList = [], this.reqFinalDataMap = new Map, 
            this.reqResponseMap = new Map, this.queue = new l.default, this.isWsClosing = !1, 
            this.isOnline = !0, f.ipcMain.on(p.APP_MESSAGE_ENUM.NETWORK_STATUS_CHANGE, (e, t) => {
                global.__fm__asmLog.info("主进程监听网络状态变化: " + t), this.isOnline = t;
            });
        }
        connect(e) {
            if (this.state == c.SocketStatus.SocketStatusConnecting) return;
            null != this.ws && this.ws.close(), this.isAlive = !0;
            let {url: t, headers: n} = s.default.constructSocketUrlAndHeaders();
            global.__fm__asmLog.info(`[vClaw]: ws 参数 url:${t},headers: ${JSON.stringify(n)}`), 
            clearInterval(this.wsConnectTimeout), clearInterval(this.heartbeatInterval), this.ws = new i.default(t, {
                headers: n
            }), this.state = c.SocketStatus.SocketStatusConnecting, this.wsConnectTimeout = setTimeout(() => {
                global.__fm__asmLog.info("[vClaw]: ws 连接超时"), this.ws && this.ws.close(), this.state = c.SocketStatus.SocketStatusFailed, 
                this.handleError({
                    message: "connect timeout"
                });
            }, 3e4), this.ws.on("open", () => {
                this.resetWSIdleTimer(), clearTimeout(this.wsConnectTimeout), this.heartbeatInterval = setInterval(() => {
                    this.isAlive ? (this.isAlive = !1, this.ws.ping(), global.__fm__asmLog.info("[vClaw]: 发送心跳包" + (new Date).getTime())) : (clearInterval(this.heartbeatInterval), 
                    global.__fm__asmLog.info("[vClaw]: 检测到ws断开"), this.state = c.SocketStatus.SocketStatusFailed, 
                    this.handleError({
                        message: "Network error"
                    }));
                }, 3e3), this.state = c.SocketStatus.SocketStatusConnected, global.__fm__asmLog.info("[vClaw]: ws open"), 
                null != e && e();
            }), this.ws.on("message", (e, t) => {
                global.__fm__asmLog.info("[vClaw]: ws message event==> " + e), global.__fm__asmLog.info("[vClaw]: ws message isBinary==> " + t), 
                e = t ? e : e.toString(), this.handleMessage(e), this.resetWSIdleTimer(), this.isAlive = !0;
            }), this.ws.on("pong", (e, t) => {
                global.__fm__asmLog.info(`[vClaw]: ws pong ${e} ${t}`), this.isAlive = !0;
            }), this.ws.on("close", (e, t, n) => {
                if (this.isWsClosing = !1, this.state = c.SocketStatus.SocketStatusClosed, global.__fm__asmLog.info(`[vClaw]: ws close ${e}, ${t}, ${n}`), 
                1006 === e) {
                    if (void 0 === n) return;
                    this.state = c.SocketStatus.SocketStatusFailed, this.handleError({
                        message: "Network error"
                    });
                }
                this.ws = null, clearInterval(this.heartbeatInterval);
            }), this.ws.on("error", e => {
                this.state = c.SocketStatus.SocketStatusFailed, global.__fm__asmLog.info("[vClaw]: ws error " + e), 
                clearInterval(this.heartbeatInterval), this.handleError(e);
            });
        }
        close() {
            null != this.ws && this.ws.close(), this.state = c.SocketStatus.SocketStatusClosed;
        }
        heartbeat() {
            this.isAlive = !0;
        }
        handleMessage(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    let t = JSON.parse(e), n = t.request_id;
                    if (global.__fm__asmLog.info("[vClaw] websocket this.activeRequests " + n), !this.activeRequests.has(n)) return void global.__fm__asmLog.info("[vClaw] return 1");
                    let r = this.activeRequests.get(n);
                    if (null == r) return void global.__fm__asmLog.info("[vClaw] return 2");
                    let {code: i, multi_task_end: o} = t;
                    if (!0 === o) return void global.__fm__asmLog.info("[vClaw] return 3");
                    if (global.__fm__asmLog.info("[vClaw] 位置4"), [ "ai_search", "error" ].includes(t.subs_type)) if (0 == i) {
                        if (r.callback(new u.WSResponseSuccess(t).toJson()), 1 == t.is_last && (this.emitMessage("wsstatus", n, {
                            code: c.TASK_STATUS.TASK_FINISHED,
                            status: "任务完成"
                        }), 0 === Object.keys(t.data).length && 1 === t.idx)) return;
                    } else this.emitMessage("wsstatus", n, {
                        code: c.TASK_STATUS.TASK_EXCEPTION,
                        status: "任务异常",
                        message: t.desc,
                        exceptionType: i
                    }), this.activeRequests.delete(n), d.setReportData(t.code, t.desc, n, this.sid), 
                    global.__fm__asmLog.info(`[vClaw]: 任务异常 ${i}, ${JSON.stringify(t)}`);
                    this.reqResponseMap.set(n, t);
                } catch (e) {
                    global.__fm__asmLog.info(`[vClaw] handleMessage error1 ${e.message} ${e.stack}`), 
                    this.handleError({
                        message: "handleMessage error"
                    });
                }
            });
        }
        handleError(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let t = "", n = "";
                const r = e.message, i = this.isOnline;
                global.__fm__asmLog.info("[vClaw] handleError error2 " + r);
                let o = !1;
                !1 === i ? (t = "" + _.TASK_ERROR_CODE[101].code, n = _.TASK_ERROR_CODE[101].desc + "，请检查网络连接", 
                o = !0) : r.startsWith("sever error") ? (t = "" + _.TASK_ERROR_CODE[110].code, n = r.split("sever error ")[1]) : r.startsWith("getaddrinfo ENOTFOUND") ? (t = "" + _.TASK_ERROR_CODE[101].code, 
                n = _.TASK_ERROR_CODE[101].desc + "，请稍后再试", o = !0) : r.startsWith("Network error") || r.startsWith("connect EHOSTUNREACH") ? (t = "" + _.TASK_ERROR_CODE[102].code, 
                n = _.TASK_ERROR_CODE[102].desc + "，请检查网络连接", o = !0) : "connect timeout" == r ? (t = "" + _.TASK_ERROR_CODE[103].code, 
                n = _.TASK_ERROR_CODE[103].desc + "，请稍后再试", o = !0) : r.startsWith("handleMessage error") ? (t = "" + _.TASK_ERROR_CODE[104].code, 
                n = _.TASK_ERROR_CODE[104].desc + "，请稍后再试", o = !0) : (t = "" + _.TASK_ERROR_CODE[106].code, 
                n = _.TASK_ERROR_CODE[106].desc + "，请稍后再试");
                for (const [e] of this.activeRequests) {
                    let r = this.activeRequests.get(e), i = this.createFakeResponse(r.requestData, {
                        errorCode: t,
                        text: n
                    }), a = this.reqResponseMap.get(e);
                    a && "paint" !== a.subs_type && "doc_format" !== a.subs_type && (!0 === a.is_last && "recommend" != a.subs_type || !0 === a.multi_task_end) || r.callback(new u.WSResponseError(i, n).toJson()), 
                    this.emit("wsstatus", {
                        request_id: e,
                        code: c.TASK_STATUS.TASK_EXCEPTION,
                        status: "任务异常",
                        message: n,
                        exceptionType: t,
                        isNetError: o
                    }), d.setReportData(t, n, e, this.sid);
                }
                this.activeRequests.clear();
            });
        }
        addToStopList(e, t) {
            global.__fm__asmLog.info("[vClaw] websocket source " + t), this.emit("wsstatus", {
                code: c.TASK_STATUS.TASK_STOPPED,
                status: "任务暂停",
                request_id: e
            }), this.stopRequestIdList.push(e), this.reqResponseMap.get(e) && (this.reqFinalDataMap.delete(e), 
            global.__fm__asmLog.info("[vClaw] websocket this.activeRequests 删除1"), this.activeRequests.delete(e));
        }
        stopAll() {
            return r.__awaiter(this, void 0, void 0, function*() {
                for (const e of this.activeRequests.keys()) {
                    this.stopRequestIdList.push(e), this.reqResponseMap.get(e) && (this.reqFinalDataMap.delete(e), 
                    global.__fm__asmLog.info("[vClaw] websocket this.activeRequests 删除2"), this.activeRequests.delete(e));
                }
            });
        }
        sendRequest(e, t, n) {
            global.__fm__asmLog.info("[vClaw]: sendMessage " + JSON.stringify(t)), t.sid = this.sid;
            let r = new u.RequestInfo(e, n, t);
            this.activeRequests.set(e, r), global.__fm__asmLog.info("[vClaw] websocket 发送request " + e);
            let i = JSON.stringify(t);
            global.__fm__asmLog.info("[vClaw] websocket 连接状态 " + this.state), this.state == c.SocketStatus.SocketStatusConnected ? (global.__fm__asmLog.info("[vClaw] websocket 已连接"), 
            this.resetWSIdleTimer(), this.ws.send(i)) : this.state != c.SocketStatus.SocketStatusConnecting ? (global.__fm__asmLog.info("[vClaw] websocket 重新连接"), 
            this.connect(() => {
                this.resetWSIdleTimer(), global.__fm__asmLog.info("[vClaw]: 连上了"), this.ws.send(i);
            })) : (global.__fm__asmLog.info("[vClaw] websocket 连接中"), setTimeout(() => {
                this.sendRequestWrapper(e, t, n);
            }, 1e3));
        }
        sendRequestWrapper(e, t, n) {
            1 == this.isWsClosing ? setTimeout(() => {
                this.sendRequest(e, t, n);
            }, 300) : this.sendRequest(e, t, n);
        }
        sendMessage(e) {
            var t, n, r;
            try {
                let i = e.request_id, o = e.main_type, a = e.subs_type;
                if (null == i) return void global.__fm__asmLog.info("[vClaw] 缺少requestId");
                "cmd" == o && "stop" == a ? (global.__fm__asmLog.info(`[vClaw] stop ${i} ${JSON.stringify(e)}`), 
                this.addToStopList(i, e), this.ws.send(JSON.stringify(e))) : (global.__fm__asmLog.info("sendmessage 任务中"), 
                this.emit("wsstatus", {
                    code: c.TASK_STATUS.TASK_RUNNING,
                    status: "任务中",
                    request_id: i
                }), e.data && (e.data.text = null !== (n = null === (t = e.data) || void 0 === t ? void 0 : t.query) && void 0 !== n ? n : null === (r = e.data) || void 0 === r ? void 0 : r.text), 
                this.sendRequestWrapper(i, e, e => {
                    global.__fm__asmLog.info("wscallback 回调"), this.emitMessage("wscallback", i, e);
                }));
            } catch (e) {
                global.__fm__asmLog.info("[vClaw] sendMessage error:  " + e);
            }
        }
        clearRequestTask(e) {
            global.__fm__asmLog.info("[vClaw] websocket this.activeRequests clearRequestTask " + e), 
            null != e && null != e ? (this.activeRequests.delete(e), this.reqFinalDataMap.delete(e), 
            this.reqResponseMap.delete(e)) : (this.activeRequests.clear(), this.reqFinalDataMap.clear(), 
            this.reqResponseMap.clear());
        }
        emitMessage(e, t, n) {
            -1 == this.stopRequestIdList.indexOf(t) && (n.request_id = t, this.emit(e, n));
        }
        getSID() {
            return this.sid;
        }
        getNewSID() {
            return this.sid = a.v4(), this.sid;
        }
        createFakeResponse(e, t) {
            return {
                request_id: e.request_id,
                trace_id: e.trace_id,
                sid: e.sid,
                data: t,
                is_last: !0,
                category: c.CHAT_CATEGORY.RESPONSE_ERROR,
                code: 0
            };
        }
        startWSIdleTimer() {
            this.wsIdleTimeout = setTimeout(() => {
                global.__fm__asmLog.info("[vClaw] ws 闲置关闭"), this.clearRequestTask(), this.ws.close(), 
                this.state = c.SocketStatus.SocketStatusClosed, this.isWsClosing = !0, setTimeout(() => {
                    this.isWsClosing = !1;
                }, 200);
            }, 12e4);
        }
        resetWSIdleTimer() {
            clearTimeout(this.wsIdleTimeout), this.startWSIdleTimer();
        }
        finishAllTask() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield this.stopAll();
                } catch (e) {
                    h.default.commonLog("[vClaw] stopAll 出错：" + e);
                }
            });
        }
    }
    t.VClawWSLink = m;
    const g = new m;
    t.default = g;
}
