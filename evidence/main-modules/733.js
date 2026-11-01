// analysis/pretty/main.js:65665; webpack module 733
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.VtalkWSLink = void 0;
    const r = n(0), i = r.__importDefault(n(4)), o = r.__importDefault(n(1)), a = r.__importDefault(n(241)), s = r.__importDefault(n(12)), l = n(58), c = n(2), u = r.__importDefault(n(734)), d = n(735), h = r.__importDefault(n(166)), p = n(220), f = n(736), _ = n(167), m = n(737), g = r.__importDefault(n(80)), v = n(221), y = n(11), E = n(2);
    class b extends s.default {
        constructor() {
            super(), this.ws = null, this.sid = l.v4(), this.state = p.SocketStatus.SocketStatusClosed, 
            this.isAlive = !0, this.wsConnectTimeout = null, this.wsIdleTimeout = null, this.heartbeatInterval = null, 
            this.sessionTimeout = null, this.activeRequests = new Map, this.stopRequestIdList = [], 
            this.reqFinalDataMap = new Map, this.reqResponseMap = new Map, this.vTalkService = new d.VTalkService, 
            this.queue = new h.default, this.isWsClosing = !1, this.isOnline = !0, this.resetSessionTimer(), 
            E.ipcMain.on(y.APP_MESSAGE_ENUM.NETWORK_STATUS_CHANGE, (e, t) => {
                global.__log.info("主进程监听网络状态变化: " + t), this.isOnline = t;
            });
        }
        connect(e) {
            if (this.state == p.SocketStatus.SocketStatusConnecting) return;
            null != this.ws && this.ws.close(), this.isAlive = !0;
            let {url: t, headers: n} = u.default.constructSocketUrlAndHeaders();
            global.__log.info(`[vtalk]: ws 参数 url:${t},headers: ${JSON.stringify(n)}`), clearInterval(this.wsConnectTimeout), 
            clearInterval(this.heartbeatInterval), this.ws = new a.default(t, {
                headers: n
            }), this.state = p.SocketStatus.SocketStatusConnecting, this.wsConnectTimeout = setTimeout(() => {
                global.__log.info("[vtalk]: ws 连接超时"), this.ws && this.ws.close(), this.state = p.SocketStatus.SocketStatusFailed, 
                this.handleError({
                    message: "connect timeout"
                });
            }, 3e4), this.ws.on("open", () => {
                this.resetWSIdleTimer(), clearTimeout(this.wsConnectTimeout), this.heartbeatInterval = setInterval(() => {
                    this.isAlive ? (this.isAlive = !1, this.ws.ping(), global.__log.info("[vtalk]: 发送心跳包" + (new Date).getTime())) : (clearInterval(this.heartbeatInterval), 
                    global.__log.info("[vtalk]: 检测到ws断开"), this.state = p.SocketStatus.SocketStatusFailed, 
                    this.handleError({
                        message: "Network error"
                    }));
                }, 2e3), this.state = p.SocketStatus.SocketStatusConnected, global.__log.info("[vtalk]: ws open"), 
                null != e && e();
            }), this.ws.on("message", (e, t) => {
                global.__log.info(`[vtalk]: ws message ${e} ${t}`), e = t ? e : e.toString(), this.handleMessage(e), 
                this.resetWSIdleTimer(), this.isAlive = !0;
            }), this.ws.on("pong", (e, t) => {
                global.__log.info(`[vtalk]: ws pong ${e} ${t}`), this.isAlive = !0;
            }), this.ws.on("close", (e, t, n) => {
                if (this.isWsClosing = !1, this.state = p.SocketStatus.SocketStatusClosed, global.__log.info(`[vtalk]: ws close ${e}, ${t}, ${n}`), 
                1006 === e) {
                    if (void 0 === n) return;
                    this.state = p.SocketStatus.SocketStatusFailed, this.handleError({
                        message: "Network error"
                    });
                }
                this.ws = null, clearInterval(this.heartbeatInterval);
            }), this.ws.on("error", e => {
                this.state = p.SocketStatus.SocketStatusFailed, global.__log.info("[vtalk]: ws error " + e), 
                clearInterval(this.heartbeatInterval), this.handleError(e);
            });
        }
        close() {
            null != this.ws && this.ws.close(), this.state = p.SocketStatus.SocketStatusClosed;
        }
        heartbeat() {
            this.isAlive = !0;
        }
        handleMessage(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    let t = JSON.parse(e), n = t.request_id;
                    if (global.__log.info("[vtalk] websocket this.activeRequests " + n), !this.activeRequests.has(n)) return void global.__log.info("[vtalk] return 1");
                    let r = this.activeRequests.get(n);
                    if (null == r) return void global.__log.info("[vtalk] return 2");
                    let {code: i, multi_task_end: o} = t;
                    if (!0 === o) return void global.__log.info("[vtalk] return 3");
                    if (global.__log.info("[vtalk] 位置4"), 0 == i) {
                        if ("paint" === t.subs_type) this.handleMessagePaint(r, t, n); else if ("doc_format" === t.subs_type) this.handleMessageDocFormat(r, t, n); else if (r.callback(new f.WSResponseSuccess(t).toJson()), 
                        this.accumulateFinalResponse(n, t), 1 == t.is_last && "recommend" != t.subs_type) {
                            if (this.emitMessage("wsstatus", n, {
                                code: 3,
                                status: "任务完成"
                            }), 0 === Object.keys(t.data).length && 1 === t.idx) return;
                            this.saveContentIfNotStopped(n, t);
                        }
                    } else if (this.emitMessage("wsstatus", n, {
                        code: 4,
                        status: "任务异常",
                        message: t.desc
                    }), this.activeRequests.delete(n), _.setReportData(t.code, t.desc, n, this.sid), 
                    global.__log.info(`[vtalk]: 任务异常 ${i}, ${JSON.stringify(t)}`), 1007 !== i && "paint" !== t.subs_type && "doc_format" !== t.subs_type) {
                        let e = this.reqResponseMap[n];
                        e && !0 !== e.multi_task_end && (r.callback(new f.WSResponseSuccess(e).toJson()), 
                        this.saveContentIfNotStopped(n, e)), this.saveErrorContentIfNotStopped(n, t, {
                            text: null == t ? void 0 : t.desc,
                            gpt_generate: 0
                        }), r.callback(new f.WSResponseSuccess(t).toJson());
                    } else r.callback(new f.WSResponseSuccess(t).toJson()), this.reqFinalDataMap[n].text = t.desc, 
                    1 === t.data.gpt_generate && (this.reqFinalDataMap[n].gpt_generate = t.data.gpt_generate), 
                    this.saveContentIfNotStopped(n, t);
                    "recommend" !== t.subs_type && (this.reqResponseMap[n] = t);
                } catch (e) {
                    global.__log.info(`[vtalk] handleMessage error1 ${e.message} ${e.stack}`), this.handleError({
                        message: "handleMessage error"
                    });
                }
            });
        }
        handleMessagePaint(e, t, n) {
            let i = (null == t ? void 0 : t.data) || {};
            null == this.reqFinalDataMap[n] && (this.reqFinalDataMap[n] = {
                text: "",
                gpt_generate: 0
            }), 1 === i.gpt_generate && (this.reqFinalDataMap[n].gpt_generate = i.gpt_generate), 
            2 === (null == i ? void 0 : i.status) ? this.queue.run(() => r.__awaiter(this, void 0, void 0, function*() {
                if (this.reqFinalDataMap[n].text = i.text, void 0 !== i.img_urls) {
                    g.default.commonLog("[vtalk] 开始下载并添加水印 " + n);
                    let e = yield this.downloadImages(t, !0);
                    g.default.commonLog("[vtalk] 完成添加水印"), -1 == this.stopRequestIdList.indexOf(n) && null !== e && e.length > 0 && (g.default.commonLog("[vtalk] 图片数据入库"), 
                    yield Promise.all(e.map(e => this.vTalkService.addContentFile(e, p.CHAT_CATEGORY.RESPONSE_NORMAL, n))));
                }
                this.saveContentIfNotStopped(n, t);
            }), () => {
                e.callback(new f.WSResponseSuccess(t).toJson());
            }) : !0 === t.is_last ? this.queue.run(() => r.__awaiter(this, void 0, void 0, function*() {
                this.emitMessage("wsstatus", n, {
                    code: 3,
                    status: "任务完成"
                });
            }), () => {
                e.callback(new f.WSResponseSuccess(t).toJson());
            }) : e.callback(new f.WSResponseSuccess(t).toJson());
        }
        handleMessageDocFormat(e, t, n) {
            let i = (null == t ? void 0 : t.data) || {};
            null == this.reqFinalDataMap[n] && (this.reqFinalDataMap[n] = {
                text: "",
                gpt_generate: 0
            }), 1 === i.gpt_generate && (this.reqFinalDataMap[n].gpt_generate = i.gpt_generate), 
            1 === i.is_guide && (this.reqFinalDataMap[n].is_guide = i.is_guide), (null == i ? void 0 : i.image_url) || 1 === (null == i ? void 0 : i.is_guide) ? this.queue.run(() => r.__awaiter(this, void 0, void 0, function*() {
                if (this.reqFinalDataMap[n].text = i.text, null == i ? void 0 : i.image_url) {
                    i.img_urls = [ null == i ? void 0 : i.image_url ], delete i.image_url, g.default.commonLog("[vtalk] 开始下载 " + n);
                    let e = yield this.downloadImages(t);
                    g.default.commonLog("[vtalk] 下载完成并存在本地"), -1 == this.stopRequestIdList.indexOf(n) && null !== e && e.length > 0 && (g.default.commonLog("[vtalk] 图片数据入库"), 
                    yield Promise.all(e.map(e => this.vTalkService.addContentFile(e, p.CHAT_CATEGORY.RESPONSE_NORMAL, n))));
                }
                this.saveContentIfNotStopped(n, t);
            }), () => {
                e.callback(new f.WSResponseSuccess(t).toJson());
            }) : !0 === t.is_last ? this.queue.run(() => r.__awaiter(this, void 0, void 0, function*() {
                this.emitMessage("wsstatus", n, {
                    code: 3,
                    status: "任务完成"
                });
            }), () => {
                e.callback(new f.WSResponseSuccess(t).toJson());
            }) : e.callback(new f.WSResponseSuccess(t).toJson());
        }
        handleError(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                let t = "", n = "";
                const r = e.message, i = this.isOnline;
                global.__log.info("[vtalk] handleError error2 " + r), !1 === i ? (t = "101", n = "网络异常，请检查网络连接") : r.startsWith("sever error") ? (t = "110", 
                n = r.split("sever error ")[1]) : r.startsWith("getaddrinfo ENOTFOUND") ? (t = "101", 
                n = "网络异常，请稍后再试") : r.startsWith("Network error") || r.startsWith("connect EHOSTUNREACH") ? (t = "102", 
                n = "网络异常，请检查网络连接") : "connect timeout" == r ? (t = "103", n = "请求超时，请稍后再试") : r.startsWith("handleMessage error") ? (t = "104", 
                n = "请求超时，请稍后再试") : r.startsWith("image upload error") ? (t = "107", n = "图片上传失败") : r.startsWith("file upload error") ? (t = "108", 
                n = "文件上传失败") : r.startsWith("url upload error") ? (t = "109", n = "链接内容获取失败") : (t = "106", 
                n = "服务异常，请稍后再试");
                for (const [e] of this.activeRequests) {
                    let r = this.activeRequests.get(e), i = this.createFakeResponse(r.requestData, {
                        errorCode: t,
                        text: n
                    }), o = this.reqResponseMap[e];
                    o && "paint" !== o.subs_type && "doc_format" !== o.subs_type ? !0 === o.is_last && "recommend" != o.subs_type || !0 === o.multi_task_end || (this.vTalkService.saveToContent(p.CHAT_CATEGORY.RESPONSE_NORMAL, 0, o, this.reqFinalDataMap[e]), 
                    r.callback(new f.WSResponseError(i, n).toJson()), this.vTalkService.saveToContentCommon(i, p.CHAT_CATEGORY.RESPONSE_ERROR)) : (r.callback(new f.WSResponseError(i, n).toJson()), 
                    this.vTalkService.saveToContentCommon(i, p.CHAT_CATEGORY.RESPONSE_ERROR)), this.emit("wsstatus", {
                        code: 4,
                        status: "任务异常",
                        message: n
                    }), _.setReportData(t, n, e, this.sid);
                }
                this.activeRequests.clear();
            });
        }
        addToStopList(e, t) {
            this.emit("wsstatus", {
                code: 2,
                status: "任务暂停"
            }), this.stopRequestIdList.push(e);
            let n = this.reqResponseMap[e];
            if (n) this.vTalkService.saveToContent(p.CHAT_CATEGORY.RESPONSE_NORMAL, 0, n, this.reqFinalDataMap[e]), 
            this.reqFinalDataMap.delete(e), global.__log.info("[vtalk] websocket this.activeRequests 删除1"), 
            this.activeRequests.delete(e); else {
                let e = {
                    request_id: t.request_id,
                    trace_id: t.trace_id,
                    sid: t.sid,
                    main_type: "data",
                    subs_type: "talk",
                    data: {
                        text: ""
                    },
                    status: 0,
                    is_last: !0,
                    category: p.CHAT_CATEGORY.RESPONSE_NORMAL,
                    code: 0
                };
                this.vTalkService.saveToContentCommon(e, p.CHAT_CATEGORY.RESPONSE_NORMAL);
            }
        }
        stopAll() {
            return r.__awaiter(this, void 0, void 0, function*() {
                for (const e of this.activeRequests.keys()) {
                    this.stopRequestIdList.push(e);
                    let t = this.reqResponseMap[e];
                    t && (yield this.vTalkService.saveToContent(p.CHAT_CATEGORY.RESPONSE_NORMAL, 0, t, this.reqFinalDataMap[e]), 
                    this.reqFinalDataMap.delete(e), global.__log.info("[vtalk] websocket this.activeRequests 删除2"), 
                    this.activeRequests.delete(e));
                }
            });
        }
        sendRequest(e, t, n) {
            this.resetSessionTimer(), global.__log.info("[vtalk]: sendMessage " + JSON.stringify(t)), 
            t.sid = this.sid;
            let r = new f.RequestInfo(e, n, t);
            this.activeRequests.set(e, r), global.__log.info("[vtalk] websocket 发送request " + e);
            let i = JSON.stringify(t);
            global.__log.info("[vtalk] websocket 连接状态 " + this.state), this.state == p.SocketStatus.SocketStatusConnected ? (global.__log.info("[vtalk] websocket 已连接"), 
            this.resetWSIdleTimer(), this.ws.send(i)) : this.state != p.SocketStatus.SocketStatusConnecting ? (global.__log.info("[vtalk] websocket 重新连接"), 
            this.connect(() => {
                this.resetWSIdleTimer(), global.__log.info("[vtalk]: 连上了"), this.ws.send(i);
            })) : (global.__log.info("[vtalk] websocket 连接中"), setTimeout(() => {
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
                if (null == i) return void global.__log.info("[vtalk] 缺少requestId");
                "cmd" == o && "stop" == a ? (global.__log.info(`[vtalk] stop ${i} ${JSON.stringify(e)}`), 
                this.addToStopList(i, e), this.ws.send(JSON.stringify(e))) : "image_file" === e.client_file_type || "doc_file" === e.client_file_type || "url_file" === e.client_file_type ? (this.vTalkService.updateToContentCommon(e, {
                    category: p.CHAT_CATEGORY.ASK,
                    request_id: e.request_id
                }), delete e.status, delete e.client_file_type, this.sendRequestWrapper(i, e, e => {
                    global.__log.info("wscallback 回调"), this.emitMessage("wscallback", i, e);
                })) : (global.__log.info("sendmessage 任务中"), this.emit("wsstatus", {
                    code: 1,
                    status: "任务中"
                }), this.vTalkService.saveToContentCommon(e, p.CHAT_CATEGORY.ASK), e.data.text = null !== (n = null === (t = e.data) || void 0 === t ? void 0 : t.query) && void 0 !== n ? n : null === (r = e.data) || void 0 === r ? void 0 : r.text, 
                this.sendRequestWrapper(i, e, e => {
                    global.__log.info("wscallback 回调"), this.emitMessage("wscallback", i, e);
                }));
            } catch (e) {
                global.__log.info("[vtalk] sendMessage error:  " + e);
            }
        }
        clearRequestTask(e) {
            global.__log.info("[vtalk] websocket this.activeRequests clearRequestTask " + e), 
            null != e && null != e ? (this.activeRequests.delete(e), this.reqFinalDataMap.delete(e), 
            this.reqResponseMap.delete(e)) : (this.activeRequests.clear(), this.reqFinalDataMap.clear(), 
            this.reqResponseMap.clear());
        }
        emitMessage(e, t, n) {
            -1 == this.stopRequestIdList.indexOf(t) && this.emit(e, n);
        }
        saveContentIfNotStopped(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                -1 == this.stopRequestIdList.indexOf(e) ? (g.default.commonLog("[vtalk] saveContentIfNotStopped"), 
                yield this.vTalkService.saveToContent(p.CHAT_CATEGORY.RESPONSE_NORMAL, 1, t, this.reqFinalDataMap[e]), 
                this.reqFinalDataMap.delete(e)) : global.__log.info("[vtalk]: saveContentIfNotStopped 任务已经暂停");
            });
        }
        saveErrorContentIfNotStopped(e, t, n) {
            return r.__awaiter(this, void 0, void 0, function*() {
                -1 == this.stopRequestIdList.indexOf(e) ? yield this.vTalkService.saveToContent(p.CHAT_CATEGORY.RESPONSE_ERROR, 1, t, n) : global.__log.info("[vtalk]: saveErrorContentIfNotStopped 任务已经暂停");
            });
        }
        accumulateFinalResponse(e, t) {
            var n, r;
            try {
                let i = t.data || {
                    text: ""
                };
                if (null == this.reqFinalDataMap[e] && (this.reqFinalDataMap[e] = {
                    text: "",
                    gpt_generate: 0
                }), "image_query" === t.subs_type || "rec_card" === t.subs_type || "formula" === t.subs_type) {
                    const t = JSON.parse(JSON.stringify(i));
                    delete t.text, this.reqFinalDataMap[e] = Object.assign(Object.assign({}, this.reqFinalDataMap[e]), t);
                }
                if ("recommend" !== t.subs_type && (this.reqFinalDataMap[e].text += i.text || ""), 
                1 === i.gpt_generate && (this.reqFinalDataMap[e].gpt_generate = i.gpt_generate), 
                i.content_urls && (this.reqFinalDataMap[e].content_urls = i.content_urls), (null === (n = i.title) || void 0 === n ? void 0 : n.length) > 0 && (this.reqFinalDataMap[e].title = i.title), 
                null != i.process_window) {
                    null == this.reqFinalDataMap[e].process_window && (this.reqFinalDataMap[e].process_window = {
                        text: ""
                    });
                    let t = (null === (r = this.reqFinalDataMap[e].process_window) || void 0 === r ? void 0 : r.text) || "";
                    this.reqFinalDataMap[e].process_window = i.process_window, this.reqFinalDataMap[e].process_window.text = t + i.process_window.text || "";
                }
            } catch (e) {
                global.__log.info("[vtalk] accumulateFinalResponse error:  " + e);
            }
        }
        getSID() {
            return this.sid;
        }
        getNewSID() {
            return this.sid = l.v4(), this.sid;
        }
        createFakeResponse(e, t) {
            return {
                request_id: e.request_id,
                trace_id: e.trace_id,
                sid: e.sid,
                data: t,
                is_last: !0,
                category: p.CHAT_CATEGORY.RESPONSE_ERROR,
                code: 0
            };
        }
        startWSIdleTimer() {
            this.wsIdleTimeout = setTimeout(() => {
                global.__log.info("[vtalk] ws 闲置关闭"), this.clearRequestTask(), this.ws.close(), 
                this.state = p.SocketStatus.SocketStatusClosed, this.isWsClosing = !0, setTimeout(() => {
                    this.isWsClosing = !1;
                }, 200);
            }, 12e4);
        }
        resetWSIdleTimer() {
            clearTimeout(this.wsIdleTimeout), this.startWSIdleTimer();
        }
        resetSessionTimer() {
            clearTimeout(this.sessionTimeout), this.sessionTimeout = setTimeout(() => {
                var e;
                this.getNewSID(), null === (e = global.__windows.get("ai-talk")) || void 0 === e || e.webContents.send(y.AI_TALK_MESSAGE_ENUM.AI_TALK_SESSION_UPDATE), 
                this.resetSessionTimer();
            }, p.SESSION_TIME_OUT);
        }
        downloadImages(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const n = e && e.data;
                let {openid: r} = v.getAuthInfo();
                const a = o.default.join(c.app.getPath("appData"), `pcsuite${_.getPlatformSlash()}storage_files`), s = o.default.join(a || c.app.getPath("userData"), "vtalk");
                let l = s;
                i.default.existsSync(s) || i.default.mkdirSync(s), r && (l = o.default.join(s, r), 
                i.default.existsSync(l) || i.default.mkdirSync(l));
                let {img_urls: u, raw_img_urls: d} = n || {};
                const h = [], p = [], f = [];
                u = u || [], d = d || [];
                for (let e = 0; e < u.length; e++) {
                    let n = u && u[e], r = d && d[e], i = {
                        file_url: n,
                        file_path: "",
                        raw_file_url: r,
                        raw_local_path: ""
                    };
                    try {
                        let e = _.getFilenameAndExtension(n), r = e.filename + "_" + Date.now() + "." + e.fileExtension;
                        const a = o.default.join(l, r);
                        t ? yield this.downloadWithRetry(n, a) : yield m.downloadImageWithoutWatermark(n, a), 
                        i.file_path = a, h.push(a);
                    } catch (e) {
                        g.default.commonLog("[vtalk] downloadImage write img_urls 出错：" + e);
                    }
                    try {
                        if (r) {
                            let e = _.getFilenameAndExtension(r), s = e.filename + "_" + Date.now() + "." + e.fileExtension;
                            const l = o.default.join(a || c.app.getPath("userData"), "vtalk", s);
                            t ? yield this.downloadWithRetry(r, l) : yield m.downloadImageWithoutWatermark(n, l), 
                            i.raw_local_path = l, p.push(l);
                        }
                    } catch (e) {
                        g.default.commonLog("[vtalk] downloadImage write raw_img_urls 出错：" + e);
                    }
                    f.push(i);
                }
                return e.data.local_img_urls = h, e.data.local_raw_img_urls = p, f;
            });
        }
        finishAllTask() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield this.stopAll();
                } catch (e) {
                    g.default.commonLog("[vtalk] stopAll 出错：" + e);
                }
            });
        }
        downloadWithRetry(e, t, n = 3, i = 0) {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    yield m.addImageWatermark(e, t);
                } catch (r) {
                    if (!(i < n)) throw r;
                    yield new Promise(e => setTimeout(e, 1e3 * (i + 1))), this.downloadWithRetry(e, t, n, i + 1);
                }
            });
        }
        saveFileRecord(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("saveFileRecord 文件/图片/纯链接保存 任务中"), this.emit("wsstatus", {
                    code: 1,
                    status: "任务中"
                });
                const {condition: t} = e;
                return delete e.condition, (null == t ? void 0 : t.request_id) ? -1 === e.status ? (e.status = 0, 
                void this.emit("wsstatus", {
                    code: 2,
                    status: "任务暂停"
                })) : yield this.vTalkService.updateToContentCommon(e, t) : (global.__log.info("saveFileRecord"), 
                yield this.vTalkService.saveToContentCommon(e, p.CHAT_CATEGORY.ASK));
            });
        }
        saveErrorRecord(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (global.__log.info("saveErrorRecord " + this.activeRequests.size), 0 === this.activeRequests.size) {
                    let t = new f.RequestInfo(e.request_id, t => {
                        global.__log.info(" wscallback 回调 saveErrorRecord RequestInfo"), this.emitMessage("wscallback", e.request_id, t);
                    }, e);
                    this.activeRequests.set(e.request_id, t);
                }
                let t = "common error";
                e.desc ? t = "sever error " + e.desc : "image_file" === e.client_file_type ? t = "image upload error" : "doc_file" === e.client_file_type ? t = "file upload error" : "url_file" === e.client_file_type && (t = "url upload error"), 
                global.__log.info("saveErrorRecord " + t), yield this.handleError({
                    message: t
                });
            });
        }
    }
    t.VtalkWSLink = b;
    const w = new b;
    t.default = w;
}
