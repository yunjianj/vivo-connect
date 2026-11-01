// analysis/pretty/main.js:15984; webpack module 95
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(7)), o = r.__importDefault(n(6)), a = r.__importDefault(n(127)), s = r.__importDefault(n(25)), l = n(56), c = r.__importDefault(n(39)), u = r.__importDefault(n(706)), d = n(712), h = n(239), p = n(90), f = r.__importDefault(n(358)), _ = [ "/vivoshareDownload", "/checkAuthStatus" ];
    let m = new class {
        constructor() {
            this.m_bIsDisposed = !1, this.restartCount = 6, this.m_Server = null, this.m_ServerPort = 9199, 
            this.m_TokenMap = f.default.getTokenMap(), this.ALLOWED_LOCAL_HOSTS = [ "127.0.0.1", "localhost", "0.0.0.0" ], 
            this.ParseData = e => {
                if ("" === e) return "";
                global.__log.info("[server]ParseRespondData:" + e);
                let t = e.indexOf("#", 0);
                if (-1 == t) return global.__log.info("Get client data error:", e), "";
                let n = e.substr(0, t), r = parseInt(n, 10), i = e.substr(t + 1, r);
                return "" === i ? "" : i;
            };
        }
        isRequestFromAllowedOrigin(e) {
            const t = e.headers.origin, n = e.headers.referer;
            if (!t && !n) return !0;
            if (t) {
                try {
                    const e = new URL(t);
                    if (this.ALLOWED_LOCAL_HOSTS.includes(e.hostname)) return !0;
                } catch (e) {}
                return global.__log.info("[HttpServer][CSRF] Blocked request with Origin: " + t), 
                !1;
            }
            if (n) {
                try {
                    const e = new URL(n);
                    if (this.ALLOWED_LOCAL_HOSTS.includes(e.hostname)) return !0;
                } catch (e) {}
                return global.__log.info("[HttpServer][CSRF] Blocked request with Referer: " + n), 
                !1;
            }
            return !0;
        }
        getAuthCode(e) {
            const t = e.headers.authorization;
            if (t) return t.replace(/^Bearer\s+/i, "").trim();
            const n = (e.url || "").split("?")[1] || "", r = new URLSearchParams(n).get("auth");
            return r || null;
        }
        checkAuth(e) {
            var t;
            const n = this.getAuthCode(e);
            if (!n) return global.__log.info("[HttpServer][checkAuth] empty authorization token"), 
            !1;
            const r = (null === (t = o.default.getItem("userInfo")) || void 0 === t ? void 0 : t.token) || "";
            if (global.__log.info("[HttpServer][checkAuth] AUTH_TOKEN is: " + r), r && (a = r, 
            i.default.createHash("sha256").update(a).digest("hex") === n)) return global.__log.info("[HttpServer][checkAuth] hit userInfo token hash"), 
            !0;
            var a;
            const s = this.m_TokenMap.get(n);
            return s ? !(Date.now() > s) || (global.__log.info("[HttpServer][checkAuth] expired authorization token: " + n), 
            this.m_TokenMap.delete(n), !1) : (global.__log.info("[HttpServer][checkAuth] invalid authorization token: " + n), 
            !1);
        }
        SetDisposed(e) {
            this.m_bIsDisposed = e;
        }
        GetDisposed() {
            return this.m_bIsDisposed;
        }
        SetServer(e) {
            this.m_Server = e;
        }
        GetServer() {
            return this.m_Server;
        }
        SetServerPort(e) {
            this.m_ServerPort = e;
        }
        get serverPort() {
            return this.m_ServerPort;
        }
        HandleNfcConnectEvent(e) {
            var t;
            if (global.__log.info("[HandleNfcConnectEvent] entering in HandleNfcConnectEvent"), 
            void 0 === e) return global.__log.info("[HandleNfcConnectEvent] JsonData is undefined"), 
            "";
            let n = 0;
            if (e.length < 7) return global.__log.info("[HandleNfcConnectEvent] arg array length < 7 from the vivoService:"), 
            "";
            global.__log.info("[HandleNfcConnectEvent]  jsonData is " + e);
            const r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], c = e[5], u = e[6] || "", d = e[7] || "", h = "1" == e[8];
            global.__log.info(`[HandleNfcConnectEvent] ${i + o + a} `);
            const p = {
                hostnameFromService: r,
                nameFromService: i,
                isUsbFromService: !1,
                connSeq: s,
                connectFlag: o,
                deviceId: a,
                isAutoConnect: "true" === c || !0 === c,
                vivoAccount: u,
                deviceType: d,
                isOpenIdSame: h
            };
            global.__log.info(`[HandleNfcConnectEvent phoneInfo] ${JSON.stringify(p)} `), 
            //!!!
            null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(l.ConnectionRendererEvent.ON_CONNECT_REQEUST, p), 
            n = 0;
            let f = (0).toString();
            return f.length.toString() + "#" + f;
        }
        HandleNotifyUserAcceptConnectionRequest(e) {
            var t;
            return console.log(e), global.__log.info("[HandleNotifyUserAcceptConnectionRequest] entering in HandleNotifyUserAcceptConnectionRequest"), 
            null === (t = global.__mainWindow) || void 0 === t || t.webContents.send(l.ConnectionRendererEvent.ON_PHONE_ACCEPT_CONNECTION), 
            "1#1";
        }
        oldHandler(e) {
            global.__log.info("[httpserver][ondata] server get raw data:", e);
            let t = e, n = this.ParseData(t);
            if (s.default.isEmpty(n)) return "";
            if (!this.IsJson(n)) return "";
            let r = JSON.parse(n);
            if (void 0 === r.event) return "";
            let i = "";
            return "checkCurrentPhone" === r.event ? global.__log.info("[httpserver][ondata] event is : checkCurrentPhone") : "nfcConection" === r.event ? (global.__log.info("[httpserver][ondata] event is : nfcConnection"), 
            i = this.HandleNfcConnectEvent(r.args)) : "notifyUserAcceptConnectionRequest" === r.event && (global.__log.info("[httpserver][ondata] event is : notifyUserAcceptConnectionRequest"), 
            i = this.HandleNotifyUserAcceptConnectionRequest(r.args)), i;
        }
        ListenToRequest(e, t) {
            e.setEncoding("utf8");
            let n = "";
            e.on("data", e => {
                n += null == e ? void 0 : e.toString();
            }), e.on("error", e => {
                global.__log.info("[ListenToRequest][req-error] error:" + e);
            }), e.on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    if (!this.isRequestFromAllowedOrigin(e)) return t.writeHead(403, {
                        "Content-type": "application/json"
                    }), t.write(JSON.stringify({
                        code: d.RES_CODE.FAILED,
                        data: "CSRF blocked: request from disallowed origin"
                    })), t.end(), void global.__log.info("[HttpServer][CSRF] Rejected request from disallowed origin, url: " + e.url);
                    const r = e.url || "", i = e.method || "", o = r.split("?")[0] || "";
                    if (_.includes(o) && !this.checkAuth(e)) return t.writeHead(401, {
                        "Content-type": "application/json"
                    }), t.write(JSON.stringify({
                        code: d.RES_CODE.UNAUTHORIZED,
                        data: "Unauthorized: token required for this endpoint"
                    })), t.end(), void global.__log.info("[HttpServer][checkAuth] Rejected unauthorized request, url: " + e.url);
                    let a = yield d.router(e, "http", {
                        pathname: o,
                        method: i,
                        queryStr: r,
                        paramsStr: n
                    }, d.requestHandlers.httpRequestHandlers);
                    const s = "object" == typeof a && "404" === (null == a ? void 0 : a.code) ? 404 : 200, l = "string" == typeof a ? "text/plain" : "application/json";
                    a = "string" == typeof a ? a : JSON.stringify(a), t.writeHead(s, {
                        "Content-type": l
                    }), t.write(a), t.end(), o != h.PATHNAME_LIST.bleQueryAll && o != h.PATHNAME_LIST.networkQueryAll && global.__log.info(`[HttpServer.ts][ListenToRequest][req-end](${o}) res content: ${a}`);
                } catch (e) {
                    global.__log.info("[ListenToRequest][req-end] error:" + e), t.writeHead(500, {
                        "Content-type": "text/plain"
                    }), t.write(e.toString()), t.end();
                }
            }));
        }
        ServerUpgradeHandler(e, t, n) {
            if (!this.isRequestFromAllowedOrigin(e)) return global.__log.info("[HttpServer][CSRF] Rejected WebSocket upgrade from disallowed origin, url: " + e.url), 
            t.write("HTTP/1.1 403 Forbidden\r\n\r\n"), void t.end();
            if (null === u.default || void 0 === u.default ? void 0 : u.default.isWebSocket(e)) {
                const r = e.url || "", i = e.method || "", o = r.split("?")[0] || "", a = new u.default(e, t, n);
                d.router(e, "webSocket", {
                    pathname: o,
                    method: i,
                    queryStr: r,
                    paramsStr: ""
                }, d.requestHandlers.websocketHandlers, a);
            } else global.__log.info("[server]upgrade not webSocket"), t.write("HTTP/1.1 500 not Web Socket Protocol\r\nUpgrade: Unkonw\r\nConnection: Upgrade\r\n\r\n"), 
            t.end("not webSocket");
        }
        CreateHttpServer() {
            var e;
            global.__log.info("start create http server");
            const t = c.default.createServer((e, t) => {
                this.ListenToRequest(e, t);
            });
            null !== t ? (t.on("error", e => {
                global.__log.info("server error: " + JSON.stringify(e)), "EADDRINUSE" === e.code && (global.__log.info("port in use"), 
                this.SetServerPort(this.m_ServerPort + 100), this.restartCount > 0 && setTimeout(() => {
                    var e, t;
                    global.__log.info("server restart count: " + this.restartCount), null === (e = this.GetServer()) || void 0 === e || e.close(), 
                    null === (t = this.GetServer()) || void 0 === t || t.listen(this.m_ServerPort), 
                    this.restartCount--;
                }, 5e3));
            }), t.on("upgrade", (e, t, n) => {
                global.__log.info("[server]upgrade url: " + e.url), this.ServerUpgradeHandler(e, t, n);
            }), this.SetServer(t), null === (e = this.GetServer()) || void 0 === e || e.listen(this.m_ServerPort), 
            global.__log.info("Successfully start the http server"), p.setPcsuiteServerPort(this.m_ServerPort)) : global.__log.info("Failed start the http server");
        }
        DestoryHttpServer() {
            var e;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!this.GetDisposed()) {
                    if (null === this.GetServer()) return;
                    null === (e = this.GetServer()) || void 0 === e || e.close(), global.__log.info("Successfully stop the http server"), 
                    yield a.default.delay(500), this.SetDisposed(!0);
                }
            });
        }
        IsJson(e) {
            if ("" === e) return !1;
            try {
                if ("object" == typeof JSON.parse(e)) return !0;
            } catch (e) {}
            return !1;
        }
    };
    t.default = m;
}
