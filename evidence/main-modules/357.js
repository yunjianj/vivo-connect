// analysis/pretty/main.js:38461; webpack module 357
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(39)), o = r.__importDefault(n(43)), a = r.__importDefault(n(71)), s = n(163), l = n(2), c = n(712), u = r.__importDefault(n(6)), d = n(1478), h = n(1479), p = r.__importDefault(n(89)), f = n(56), _ = n(1480);
    class m {
        static getInstance() {
            return m.instance || (m.instance = new m), m.instance;
        }
        search(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[RequestHandlers9200][search] params: " + e);
                const t = _.getDeviceIdByBleId(e);
                return global.__log.info("[RequestHandlers9200][search] deviceId: " + t), t && (e.deviceId = t), 
                global.__log.info("[RequestHandlers9200][search][converted] params: " + e), this.sendMsg(s.FM_CLAW_ENUM.FM_GET_SEARCH_RESULT, e);
            });
        }
        getThumb(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return this.sendMsg(s.FM_CLAW_ENUM.FM_GET_THUMB_RESULT, e);
            });
        }
        fmTransferFileToPC(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[RequestHandlers9200][fmTransferFileToPC] params: " + e.paramsStr);
                try {
                    const t = JSON.parse(e.paramsStr);
                    if (!_.isDeviceConnected(t)) return d.buildClawErrorResponse(d.HttpCode.NOT_CONNECTED, "device not connected");
                    const n = yield this.sendMsg(s.FM_CLAW_ENUM.FM_TRANSFER_FILE_TO_PC, t);
                    return global.__log.info("[RequestHandlers9200][fmTransferFileToPC] res: " + (n ? JSON.stringify(n) : null)), 
                    n.deviceNotConnected ? d.buildClawErrorResponse(d.HttpCode.NOT_CONNECTED, "device not connected") : n.fileNotExist ? d.buildClawErrorResponse(d.HttpCode.FILE_NOT_EXIST, n.data || "file not exist") : {
                        code: d.HttpCode.SUCCESS,
                        data: "ok"
                    };
                } catch (e) {
                    return global.__log.info("[RequestHandlers9200][fmTransferFileToPC] err: " + e), 
                    {
                        code: d.HttpCode.FAILED,
                        data: e
                    };
                }
            });
        }
        rightMenuTransfer(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[RequestHandlers9200][rightMenuTransfer] params: " + e.paramsStr);
                try {
                    const t = JSON.parse(e.paramsStr), n = p.default.getInstance().getWebContent(), {target: r, deviceid: i, filepath: o} = t;
                    if (!n) return {
                        code: d.HttpCode.WEB_CONTENT_NOT_FOUND,
                        data: "webContent not found"
                    };
                    {
                        const e = yield this.sendMsg(f.ConnectionRendererEvent.RIGHT_MENU_TRANSFER, {
                            target: r,
                            fileDeviceId: i,
                            files: o
                        }, 1);
                        if (e.deviceNotConnected) return d.buildClawErrorResponse(d.HttpCode.NOT_CONNECTED, "device not connected");
                        if (e.hasUploadingFiles) return d.buildClawErrorResponse(d.HttpCode.HAS_FILE_UPLOADING, "There are already tasks being uploaded");
                    }
                    return {
                        code: d.HttpCode.SUCCESS,
                        data: "ok"
                    };
                } catch (e) {
                    return global.__log.info("[RequestHandlers9200][rightMenuTransfer] error: " + e), 
                    {
                        code: d.HttpCode.FAILED,
                        data: e
                    };
                }
            });
        }
        sendMsg(e, t, n) {
            return new Promise(r => {
                const i = a.default(), o = setTimeout(() => {
                    global.__log.info("[FmClawServiceInstance][sendMsg] 超时"), r(new Error("Request timeout"));
                }, t.timeout || 5e3);
                l.ipcMain.once(i, (e, t) => {
                    try {
                        global.__log.info("[FmClawServiceInstance][sendMsg][正常返回] " + (t ? JSON.stringify(t) : null));
                    } catch (e) {
                        global.__log.info("[FmClawServiceInstance][sendMsg][异常] " + e.message);
                    }
                    clearTimeout(o), r(t);
                }), setTimeout(() => {
                    var r;
                    if (1 === n) {
                        const n = p.default.getInstance().getWebContent();
                        null == n || n.send(e, Object.assign({
                            requestId: i
                        }, t));
                    } else null === (r = global.__mainWindow) || void 0 === r || r.webContents.send(e, Object.assign({
                        requestId: i
                    }, t));
                }, 100);
            });
        }
        getIsForwardRequest(e) {
            return (null == e ? void 0 : e.includes("pc_file_manager")) || (null == e ? void 0 : e.includes("pc_global"));
        }
        forwardRequest(e, t) {
            var n;
            return r.__awaiter(this, void 0, void 0, function*() {
                const r = c.parseParams(e.url || "");
                if (global.__log.info(`[FmClawServiceInstance][forwardRequest][begin] url: ${e.url}, method: ${e.method}, queryParams: ${r ? JSON.stringify(r) : null}`), 
                "getClawSearchSummary" === r.sceneType) {
                    let e = "", n = null;
                    if (u.default.getItem("getConnectedDeviceBleIdList").includes(r.deviceId)) {
                        const t = u.default.getItem("getConnectedDeviceInfoList");
                        if (t) {
                            const n = t.find(e => e.belId === r.deviceId);
                            n && (e = n.deviceId);
                        }
                        global.__log.info("[FmClawServiceInstance][forwardRequest][取消先前的发送][begin] deviceId " + e), 
                        yield this.sendMsg(s.FM_CLAW_ENUM.FM_CANCEL_CLAW_SEARCH_SUMMARY, {
                            deviceId: e
                        }), global.__log.info("[FmClawServiceInstance][forwardRequest][取消先前的发送][end]"), 
                        global.__log.info("[FmClawServiceInstance][forwardRequest][开始重新请求][begin]"), n = yield this.sendMsg(s.FM_CLAW_ENUM.FM_GET_CLAW_SEARCH_SUMMARY, {
                            deviceId: e,
                            keyword: r.keyword,
                            timeout: h.MAX_WAIT_TIME
                        }), global.__log.info("[FmClawServiceInstance][forwardRequest][开始重新请求][end] res: " + (n ? JSON.stringify(n) : null));
                    } else n = d.getHttpResMessage(d.HttpCode.NOT_CONNECTED);
                    return global.__log.info("[FmClawServiceInstance][forwardRequest][end] result: " + (n ? JSON.stringify(n) : null)), 
                    t.statusCode = 200, t.setHeader("Content-Type", "application/json; charset=utf-8"), 
                    t.end(JSON.stringify(n)), n;
                }
                if ("cancelClawSearchSummary" === r.sceneType) {
                    let e = "";
                    const n = u.default.getItem("getConnectedDeviceInfoList");
                    if (n) {
                        const t = n.find(e => e.belId === r.deviceId);
                        t && (e = t.deviceId);
                    }
                    const i = yield this.sendMsg(s.FM_CLAW_ENUM.FM_CANCEL_CLAW_SEARCH_SUMMARY, {
                        deviceId: e
                    });
                    return t.statusCode = 200, t.setHeader("Content-Type", "application/json; charset=utf-8"), 
                    t.end(JSON.stringify(i)), i;
                }
                {
                    const a = yield this.sendMsg(s.FM_CLAW_ENUM.FM_GET_PHONE_URL, {
                        deviceId: r.deviceId
                    }), l = a.url;
                    if (console.log(a, l), global.__log.info("[FmClawServiceInstance][forwardRequest][phoneUrl] " + (a ? JSON.stringify(a) : null)), 
                    !l) return t.statusCode = 504, t.setHeader("Content-Type", "application/json; charset=utf-8"), 
                    t.end(JSON.stringify(d.buildClawErrorResponse(d.HttpCode.NOT_CONNECTED, r.deviceId + " is not connect"))), 
                    void global.__log.info("[FmClawServiceInstance][forwardRequest][end][手机和电脑未连接]");
                    if (-1 != (null === (n = e.url) || void 0 === n ? void 0 : n.indexOf("/pc_global/search"))) {
                        if (!(yield this.sendMsg(s.FM_CLAW_ENUM.FM_IS_SUPPORT_GLOBAL_SEARCH, {
                            deviceId: r.deviceId
                        }))) return t.statusCode = 504, t.setHeader("Content-Type", "application/json; charset=utf-8"), 
                        t.end(JSON.stringify(d.buildClawErrorResponse(d.HttpCode.NOT_SUPPORT_GLOBAL_SEARCH, r.deviceId + " not support global search"))), 
                        void global.__log.info("[FmClawServiceInstance][forwardRequest][end][设备不支持全搜]");
                    }
                    const c = new URL(l), u = "https:" === c.protocol, h = new URL(e.url || "", "http://" + e.headers.host), p = [];
                    yield new Promise((t, n) => {
                        e.on("data", e => p.push(e)), e.on("end", () => t()), e.on("error", e => n(e));
                    });
                    const f = Buffer.concat(p);
                    f.length > 0 && global.__log.info("[FmClawServiceInstance][forwardRequest][POST body] " + f.toString());
                    const _ = this.filterHeaders(e.headers);
                    _.host = c.host, _.newToken = a.newToken, f.length > 0 && (_["content-length"] = String(f.length));
                    const m = {
                        hostname: c.hostname,
                        port: c.port || (u ? 443 : 80),
                        path: h.pathname.replace(/skill\//g, "") + (h.search || ""),
                        method: e.method,
                        rejectUnauthorized: !1,
                        headers: _
                    };
                    try {
                        global.__log.info(`[FmClawServiceInstance] forwardRequest originalUrl: ${h}, targetUrl: ${c}, options: ${JSON.stringify(m)}`);
                    } catch (e) {
                        global.__log.info("[FmClawServiceInstance] forwardRequest error: " + e.message);
                    }
                    return new Promise((n, r) => {
                        const a = u ? o.default : i.default;
                        let s = !1;
                        const l = (e, n, r) => {
                            s ? global.__log.info("[FmClawServiceInstance][forwardRequest][response already sent, skip] " + r) : (s = !0, 
                            global.__log.info(`[FmClawServiceInstance][forwardRequest][${r}]`), t.statusCode = e, 
                            t.setHeader("Content-Type", "application/json; charset=utf-8"), t.end(JSON.stringify(n)));
                        }, c = a.request(m, e => {
                            global.__log.info("[FmClawServiceInstance][forwardRequest][response] statusCode: " + e.statusCode), 
                            global.__log.info("[FmClawServiceInstance][forwardRequest][response] headers: " + JSON.stringify(this.filterHeaders(e.headers))), 
                            s = !0, t.writeHead(e.statusCode || 500, this.filterHeaders(e.headers));
                            const r = [];
                            e.on("data", e => r.push(e)), e.pipe(t), e.on("end", () => {
                                const e = Buffer.concat(r).toString();
                                global.__log.info("[FmClawServiceInstance][forwardRequest][response] body: " + e), 
                                n();
                            });
                        });
                        c.on("error", e => {
                            l(502, d.buildClawErrorResponse(d.HttpCode.FORWARD_FAILED, "Forward request error: " + e.message), "error: " + e.message), 
                            r(e);
                        }), c.setTimeout(1e4, () => {
                            l(504, d.buildClawErrorResponse(d.HttpCode.TIMEOUT, "Request timeout"), `timeout] url: ${e.url}, after 10000ms`), 
                            c.destroy(), r(new Error("Request timeout"));
                        }), f.length > 0 && c.write(f), c.end();
                    });
                }
            });
        }
        filterHeaders(e) {
            const t = {}, n = [ "host", "connection", "keep-alive", "transfer-encoding", "te", "trailer", "upgrade", "proxy-authorization", "proxy-authenticate", "content-length", "authorization" ];
            for (const [r, i] of Object.entries(e)) i && !n.includes(r.toLowerCase()) && (t[r] = Array.isArray(i) ? i.join(", ") : i);
            return t;
        }
        handleError(e, t) {
            e.writeHead(500, {
                "Content-Type": "application/json"
            }), e.end(JSON.stringify({
                error: "Forwarding failed",
                message: t.message
            }));
        }
    }
    t.default = m.getInstance();
}
