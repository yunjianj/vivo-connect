// analysis/pretty/main.js:38684; webpack module 358
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(127)), o = r.__importDefault(n(39)), a = r.__importDefault(n(104)), s = r.__importDefault(n(706)), l = n(725), c = n(1481), u = n(90), d = r.__importDefault(n(357)), h = n(1483), p = n(1484), f = n(1485), _ = n(1486), m = n(7), g = r.__importDefault(n(7)), v = r.__importDefault(n(6)), y = r.__importDefault(n(75)), E = n(53), b = n(2), w = e => g.default.createHash("sha256").update(e).digest("hex"), S = "win32" === process.platform ? "\\\\.\\pipe\\vivo_auth_server" : "/tmp/vivo_auth_server", T = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT, DELETE, PATCH",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }, A = new Set(Object.keys(T).map(e => e.toLowerCase()));
    let O = new class {
        constructor() {
            this.m_bIsDisposed = !1, this.m_Server = null, this.m_ServerPort = 9200, this.m_PipeServer = null, 
            this.m_MasterKey = m.randomBytes(32).toString("hex"), this.m_TokenMap = new Map, 
            this.m_ThirdPartyTokenMap = new Map, this.m_PipeVerifyDisabled = !1, this.API_VERSION = "1.1.0";
        }
        findAvailablePort(e, t = 6) {
            return new Promise((n, r) => {
                const i = a.default.createServer();
                i.unref(), i.once("error", i => {
                    0 !== e && ("EADDRINUSE" === i.code || "EACCES" === i.code) && t > 0 ? this.findAvailablePort(e + 100, t - 1).then(n, r) : r(i);
                }), i.once("listening", () => {
                    if (0 === e) {
                        const e = i.address().port;
                        i.close(() => {
                            n(e);
                        });
                    } else i.close(() => {
                        n(e);
                    });
                }), i.listen(e, "127.0.0.1");
            });
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
        getServer() {
            return this.m_Server;
        }
        get serverPort() {
            return this.m_ServerPort;
        }
        getTokenMap() {
            return this.m_TokenMap;
        }
        getMasterKey() {
            return this.m_MasterKey;
        }
        getMasterKeyHash() {
            return w(this.m_MasterKey).slice(-10);
        }
        isLocalhost(e) {
            const t = e.socket.remoteAddress || "";
            return "127.0.0.1" === t || "::1" === t || "::ffff:127.0.0.1" === t;
        }
        getAuthCode(e) {
            const t = e.headers.authorization || e.headers.Authorization;
            if (t) return (Array.isArray(t) ? t[0] : t).replace(/^Bearer\s+/i, "").trim();
            const n = (e.url || "").split("?")[1] || "", r = new URLSearchParams(n).get("auth");
            return r || null;
        }
        checkAuth(e) {
            var t;
            const n = this.getAuthCode(e);
            if (!n) return global.__log.info("[VClawHttpServer] empty authorization token in http headers"), 
            !1;
            const r = (null === (t = v.default.getItem("userInfo")) || void 0 === t ? void 0 : t.token) || "";
            if (r && w(r) === n) return global.__log.info("[VClawHttpServer] hit userInfo token hash"), 
            !0;
            const i = this.m_TokenMap.get(n);
            return i ? !(Date.now() > i) || (global.__log.info("[VClawHttpServer] expired authorization token: " + n), 
            this.m_TokenMap.delete(n), !1) : (global.__log.info("[VClawHttpServer] invalid authorization token: " + n), 
            !1);
        }
        checkThirdPartyAccess(e) {
            const t = this.getAuthCode(e);
            if (!t) return 401;
            const n = this.m_ThirdPartyTokenMap.get(t);
            if (!n) return 401;
            if ("date" === n.expireType && n.expireDate && new Date > new Date(n.expireDate)) return global.__log.info("[VClawHttpServer] expired third-party token: " + t), 
            this.m_ThirdPartyTokenMap.delete(t), 401;
            const r = (e.method || "GET").toUpperCase();
            return "GET" !== r && "read-write" !== n.permission ? (global.__log.info(`[VClawHttpServer] read-only token attempted write operation: ${r} ${e.url}`), 
            403) : (global.__log.info("[VClawHttpServer] hit third-party token"), null);
        }
        checkMasterKey(e) {
            let t = this.getAuthCode(e);
            if (!t) return !1;
            if (t !== this.m_MasterKey && t.includes(":")) {
                if (t.split(":")[0] === this.m_MasterKey) return global.__log.info("[VClawHttpServer] masterKey contains port suffix (legacy client), stripped and matched"), 
                !0;
            }
            return t === this.m_MasterKey;
        }
        handleCreateToken(e, t) {
            if (!this.checkMasterKey(e)) return t.writeHead(401, {
                "Content-type": "application/json"
            }), t.write(JSON.stringify({
                code: 401,
                data: "Unauthorized"
            })), void t.end();
            const n = m.randomBytes(32).toString("hex"), r = Date.now() + 18e5;
            this.m_TokenMap.set(n, r);
            for (const [e, t] of this.m_TokenMap) Date.now() > t && this.m_TokenMap.delete(e);
            t.writeHead(200, {
                "Content-type": "application/json"
            }), t.write(JSON.stringify({
                code: 0,
                data: {
                    token: n,
                    expireAt: r
                }
            })), t.end();
        }
        handleCreateThirdPartyToken(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!this.checkMasterKey(e)) return t.writeHead(401, {
                    "Content-type": "application/json"
                }), t.write(JSON.stringify({
                    code: 401,
                    data: "Unauthorized"
                })), void t.end();
                let i = "";
                e.on("data", e => {
                    i += e;
                }), e.on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                    try {
                        const e = JSON.parse(i || "{}"), {tokenName: r, permission: o = "read-write", expireType: a = "date", expireDate: s} = e;
                        if (!r) return t.writeHead(400, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "tokenName is required"
                        })), void t.end();
                        if (![ "read-write", "read-only" ].includes(o)) return t.writeHead(400, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "permission must be read-write or read-only"
                        })), void t.end();
                        if (![ "permanent", "date" ].includes(a)) return t.writeHead(400, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "expireType must be permanent or date"
                        })), void t.end();
                        if ("date" === a && !s) return t.writeHead(400, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "expireDate is required when expireType is date"
                        })), void t.end();
                        if ("date" === a && s) {
                            const e = new Date(s);
                            if (isNaN(e.getTime())) return t.writeHead(400, {
                                "Content-type": "application/json"
                            }), t.write(JSON.stringify({
                                code: 1,
                                data: "expireDate is invalid"
                            })), void t.end();
                            if (e <= new Date) return t.writeHead(400, {
                                "Content-type": "application/json"
                            }), t.write(JSON.stringify({
                                code: 1,
                                data: "expireDate must be in the future"
                            })), void t.end();
                        }
                        const l = n(115).getInstance(), c = yield l.getAllAuthTokens();
                        if (c && c.length >= 10) return t.writeHead(400, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "Token limit reached: maximum 10 tokens allowed"
                        })), void t.end();
                        const u = m.randomBytes(32).toString("base64"), d = yield l.createAuthToken({
                            token: u,
                            tokenName: r,
                            permission: o,
                            expireType: a,
                            expireDate: "date" === a ? s : void 0
                        });
                        yield this.loadThirdPartyTokensFromDB(), t.writeHead(200, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 0,
                            data: {
                                token: u,
                                tokenName: r,
                                permission: o,
                                expireType: a,
                                expireDate: "date" === a ? s : null,
                                id: d
                            }
                        })), t.end();
                    } catch (e) {
                        global.__log.info("[VClawHttpServer][handleCreateThirdPartyToken] error: " + e), 
                        t.writeHead(500, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 500,
                            data: e.toString()
                        })), t.end();
                    }
                }));
            });
        }
        handleUpdateThirdPartyToken(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!this.checkMasterKey(e)) return t.writeHead(401, {
                    "Content-type": "application/json"
                }), t.write(JSON.stringify({
                    code: 401,
                    data: "Unauthorized"
                })), void t.end();
                let i = "";
                e.on("data", e => {
                    i += e;
                }), e.on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                    try {
                        const e = JSON.parse(i || "{}"), {id: r, token: o, tokenName: a, permission: s, expireType: l, expireDate: c} = e;
                        if (null == r && !o) return t.writeHead(400, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "id or token is required"
                        })), void t.end();
                        if (s && ![ "read-write", "read-only" ].includes(s)) return t.writeHead(400, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "permission must be read-write or read-only"
                        })), void t.end();
                        if (l && ![ "permanent", "date" ].includes(l)) return t.writeHead(400, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "expireType must be permanent or date"
                        })), void t.end();
                        if (void 0 !== c) {
                            const e = new Date(c);
                            if (isNaN(e.getTime())) return t.writeHead(400, {
                                "Content-type": "application/json"
                            }), t.write(JSON.stringify({
                                code: 1,
                                data: "expireDate is invalid"
                            })), void t.end();
                            if (e <= new Date) return t.writeHead(400, {
                                "Content-type": "application/json"
                            }), t.write(JSON.stringify({
                                code: 1,
                                data: "expireDate must be in the future"
                            })), void t.end();
                        }
                        const u = n(115).getInstance();
                        let d, h, p;
                        if (null != r ? (d = yield u.getAuthTokenById(r), h = {
                            Id: r
                        }, p = "Id") : (d = yield u.getAuthTokenByToken(o), h = {
                            token: o
                        }, p = "token"), !d) return t.writeHead(404, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "token not found"
                        })), void t.end();
                        void 0 !== a && (h.tokenName = a), void 0 !== s && (h.permission = s), void 0 !== l && (h.expireType = l), 
                        void 0 !== c && (h.expireDate = c), yield u.update(E.CommonDataBase.AUTH_TOKEN_TABLE_NAME, h, p), 
                        yield this.loadThirdPartyTokensFromDB(), t.writeHead(200, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 0,
                            data: "ok"
                        })), t.end();
                    } catch (e) {
                        global.__log.info(`[VClawHttpServer][handleUpdateThirdPartyToken] error: ${e} body: ${i}`), 
                        t.writeHead(500, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 500,
                            data: e.toString()
                        })), t.end();
                    }
                }));
            });
        }
        handleDeleteThirdPartyToken(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!this.checkMasterKey(e)) return t.writeHead(401, {
                    "Content-type": "application/json"
                }), t.write(JSON.stringify({
                    code: 401,
                    data: "Unauthorized"
                })), void t.end();
                let i = "";
                e.on("data", e => {
                    i += e;
                }), e.on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                    try {
                        const e = JSON.parse(i || "{}"), {id: r, token: o} = e;
                        if (null == r && !o) return t.writeHead(400, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 1,
                            data: "id or token is required"
                        })), void t.end();
                        const a = n(115).getInstance();
                        null != r ? yield a.deleteAuthToken(r) : yield a.deleteAuthTokenByToken(o), yield this.loadThirdPartyTokensFromDB(), 
                        t.writeHead(200, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 0,
                            data: "ok"
                        })), t.end();
                    } catch (e) {
                        global.__log.info(`[VClawHttpServer][handleDeleteThirdPartyToken] error: ${e} body: ${i}`), 
                        t.writeHead(500, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 500,
                            data: e.toString()
                        })), t.end();
                    }
                }));
            });
        }
        handleUserInfo(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!this.checkMasterKey(e)) return t.writeHead(401, {
                    "Content-type": "application/json"
                }), t.write(JSON.stringify({
                    code: 401,
                    data: "Unauthorized"
                })), void t.end();
                try {
                    const e = n(115).getInstance(), r = yield e.getTableUser();
                    if (r && r.openId) {
                        const e = v.default.getItem("userInfo"), n = Object.assign(Object.assign({}, r), {
                            openId: r.openId || (null == e ? void 0 : e.openId) || "",
                            token: r.token || (null == e ? void 0 : e.token) || ""
                        });
                        return t.writeHead(200, {
                            "Content-type": "application/json"
                        }), t.write(JSON.stringify({
                            code: 0,
                            data: n
                        })), void t.end();
                    }
                } catch (e) {
                    global.__log.info("[VClawHttpServer][handleUserInfo] db query error: " + e);
                }
                t.writeHead(200, {
                    "Content-type": "application/json"
                }), t.write(JSON.stringify({
                    code: 1,
                    data: "user not logged in"
                })), t.end();
            });
        }
        handlePcsuiteEnvConfig(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                const t = v.default.getItem("serverRoomEnv") || "", n = v.default.getItem("serverRoomLabel") || "", r = "undefined" != typeof __buildConfig__ && __buildConfig__.IS_EXPORT ? "br" === ("undefined" != typeof __buildConfig__ ? __buildConfig__.CHANNEL_CODE : "") ? "BR" : "EX" : "CN", i = y.default.currentRuntimeConfig;
                console.log("domainConfig", i);
                const o = {
                    countryCode: v.default.getItem("countryCode") || "",
                    env: t,
                    channel: r,
                    serverRoom: n,
                    domainConfig: i
                };
                e.writeHead(200, {
                    "Content-type": "application/json"
                }), e.write(JSON.stringify({
                    code: 0,
                    data: o
                })), e.end();
            });
        }
        handleDisablePipeVerify(e, t) {
            if (!this.checkMasterKey(e)) return t.writeHead(401, {
                "Content-type": "application/json"
            }), t.write(JSON.stringify({
                code: 401,
                data: "Unauthorized"
            })), void t.end();
            const n = (e.url || "").split("?")[1] || "", r = new URLSearchParams(n).get("enable");
            "true" === r || "1" === r ? (this.m_PipeVerifyDisabled = !1, global.__log.info("[VClawHttpServer] pipe signature verification enabled"), 
            t.writeHead(200, {
                "Content-type": "application/json"
            }), t.write(JSON.stringify({
                code: 0,
                data: "pipe signature verification enabled"
            }))) : (this.m_PipeVerifyDisabled = !0, global.__log.info("[VClawHttpServer] pipe signature verification disabled"), 
            t.writeHead(200, {
                "Content-type": "application/json"
            }), t.write(JSON.stringify({
                code: 0,
                data: "pipe signature verification disabled"
            }))), t.end();
        }
        handleTokenList(e, t) {
            if (!this.checkMasterKey(e)) return t.writeHead(401, {
                "Content-type": "application/json"
            }), t.write(JSON.stringify({
                code: 401,
                data: "Unauthorized"
            })), void t.end();
            const n = [];
            n.push({
                token: this.m_MasterKey,
                type: "MasterKey",
                expireAt: null,
                status: "active"
            });
            const r = Date.now();
            for (const [e, t] of this.m_TokenMap) n.push({
                token: e,
                type: "TempToken",
                expireAt: t,
                status: r > t ? "expired" : "active"
            });
            t.writeHead(200, {
                "Content-type": "application/json"
            }), t.write(JSON.stringify({
                code: 0,
                data: n
            })), t.end();
        }
        handleThirdPartyTokenList(e, t) {
            if (!this.checkMasterKey(e)) return t.writeHead(401, {
                "Content-type": "application/json"
            }), t.write(JSON.stringify({
                code: 401,
                data: "Unauthorized"
            })), void t.end();
            const r = [], i = n(115).getInstance(), o = new Date;
            i.getAllAuthTokens().then(e => {
                if (e && e.length > 0) for (const t of e) {
                    let e = !0;
                    "date" === t.expireType && t.expireDate && (e = new Date(t.expireDate) > o), r.push({
                        id: t.Id,
                        token: t.token,
                        tokenName: t.tokenName,
                        permission: t.permission,
                        expireType: t.expireType,
                        expireDate: t.expireDate || null,
                        createdAt: t.createdAt,
                        valid: e
                    });
                }
                t.writeHead(200, {
                    "Content-type": "application/json"
                }), t.write(JSON.stringify({
                    code: 0,
                    data: r
                })), t.end();
            }).catch(e => {
                global.__log.info("[VClawHttpServer][handleThirdPartyTokenList] error: " + e), t.writeHead(500, {
                    "Content-type": "application/json"
                }), t.write(JSON.stringify({
                    code: 500,
                    data: e.toString()
                })), t.end();
            });
        }
        loadThirdPartyTokensFromDB() {
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const e = n(115).getInstance(), t = yield e.getAllValidAuthTokens();
                    if (this.m_ThirdPartyTokenMap.clear(), t && t.length > 0) {
                        for (const e of t) this.m_ThirdPartyTokenMap.set(e.token, {
                            id: e.Id,
                            permission: e.permission,
                            expireType: e.expireType,
                            expireDate: e.expireDate || null,
                            tokenName: e.tokenName || ""
                        });
                        global.__log.info(`[VClawHttpServer] loaded ${t.length} auth tokens from DB`);
                    }
                } catch (e) {
                    global.__log.info("[VClawHttpServer] loadThirdPartyTokensFromDB error: " + e);
                }
            });
        }
        ListenToRequest(e, t) {
            e.setEncoding("utf8");
            let n = "";
            e.on("data", e => {
                n += null == e ? void 0 : e.toString();
            }), e.on("error", e => {
                global.__log.info("[VClawHttpServer][ListenToRequest][req-error] error:" + e);
            }), e.on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                try {
                    const r = e.url || "", i = e.method || "", o = r.split("?")[0] || "";
                    let a = yield l.router(e, "http", {
                        pathname: o,
                        method: i,
                        queryStr: r,
                        paramsStr: n
                    }, c.requestHandlers.httpRequestHandlers);
                    const s = "object" == typeof a && "404" === (null == a ? void 0 : a.code) ? 404 : 200, u = "string" == typeof a ? "text/plain" : "application/json";
                    a = "string" == typeof a ? a : JSON.stringify(a), t.writeHead(s, {
                        "Content-type": u
                    }), t.write(a), t.end(), global.__log.info(`[VClawHttpServer][ListenToRequest](${o}) res code: ${s}`);
                } catch (e) {
                    global.__log.info("[VClawHttpServer][ListenToRequest][req-end] error:" + e), t.writeHead(500, {
                        "Content-type": "text/plain"
                    }), t.write(e.toString()), t.end();
                }
            }));
        }
        ServerUpgradeHandler(e, t, n) {
            if (!this.isLocalhost(e)) return global.__log.info("[VClawHttpServer][ServerUpgradeHandler] rejected non-local request from " + e.socket.remoteAddress), 
            t.write("HTTP/1.1 403 Forbidden\r\n\r\n"), void t.end();
            if (null === s.default || void 0 === s.default ? void 0 : s.default.isWebSocket(e)) {
                const r = e.url || "", i = r.split("?")[0] || "", o = new s.default(e, t, n);
                l.router(e, "webSocket", {
                    pathname: i,
                    method: e.method || "",
                    queryStr: r,
                    paramsStr: ""
                }, c.requestHandlers.websocketHandlers, o);
            } else global.__log.info("[VClawHttpServer] upgrade not webSocket"), t.write("HTTP/1.1 500 not Web Socket Protocol\r\nUpgrade: Unkonw\r\nConnection: Upgrade\r\n\r\n"), 
            t.end("not webSocket");
        }
        createPipeServer() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[VClawHttpServer] creating pipe server..."), global.__log.info("[VClawHttpServer] pipe name: " + S);
                const e = "win32" === process.platform ? [ "vivo Mobile Communication Co., Ltd" ] : [ "UID=NR23K45T29" ];
                try {
                    const t = yield _.createPipeServer(S, (t, n, i) => r.__awaiter(this, void 0, void 0, function*() {
                        var r, o;
                        if (global.__log.info("[VClawHttpServer] === new client connection ==="), global.__log.info("[VClawHttpServer] PID: " + i), 
                        global.__log.info("[VClawHttpServer] file path: " + (n || "unknown")), global.__log.info("[VClawHttpServer] ===================="), 
                        n) try {
                            if (this.m_PipeVerifyDisabled) return global.__log.info("[VClawHttpServer] pipe signature verification disabled, skipping verification, trusting client"), 
                            void t.write(`1.1.0:trusted:${this.m_MasterKey}:${this.m_ServerPort}:===ack===`);
                            global.__log.info("[VClawHttpServer] starting client signature verification...");
                            const i = yield _.verifyTrust(n);
                            if (global.__log.info("[VClawHttpServer] client signature verification: " + (i.trusted ? "trusted" : "untrusted")), 
                            global.__log.info("[VClawHttpServer] verification info: " + i.message), !i.trusted) return t.write(`1.1.0:untrusted:${i.message}:===ack===`), 
                            void t.destroy();
                            const a = yield _.getCertificate(n);
                            !(!(null === (r = null == a ? void 0 : a.signer) || void 0 === r ? void 0 : r.subject) || !e.some(e => {
                                var t;
                                return ((null === (t = a.signer) || void 0 === t ? void 0 : t.subject) || "").includes(e);
                            })) ? (global.__log.info("[VClawHttpServer] valid certificate info: " + JSON.stringify(a)), 
                            t.write(`1.1.0:trusted:${this.m_MasterKey}:${this.m_ServerPort}:===ack===`)) : (global.__log.info("[VClawHttpServer] invalid certificate info: " + JSON.stringify(a)), 
                            t.write(`1.1.0:untrusted:invalid-subject-${null === (o = null == a ? void 0 : a.signer) || void 0 === o ? void 0 : o.subject}:===ack===`), 
                            t.destroy());
                        } catch (e) {
                            t.write(`1.1.0:error:${e.message}:===ack===`), global.__log.info("[VClawHttpServer] failed to verify client signature: " + e.message);
                        } else global.__log.info("[VClawHttpServer] client file path is empty, rejecting connection"), 
                        t.write("1.1.0:untrusted:no-client-path:===ack==="), t.destroy();
                    }), (e, t, n, r) => {
                        global.__log.info(`[VClawHttpServer] received data from [PID: ${n}]: ${r}`), e.write(`data:${r}:===ack===`);
                    });
                    global.__log.info("[VClawHttpServer] pipe server start listen"), t.listen(() => {
                        global.__log.info("[VClawHttpServer] pipe server created and listening: " + S);
                    }), this.m_PipeServer = t;
                } catch (e) {
                    global.__log.error("[VClawHttpServer] failed to create pipe server: " + e.message);
                }
            });
        }
        CreateHttpServer() {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__log.info("[VClawHttpServer] finding available port for vclaw http server");
                try {
                    this.m_ServerPort = yield this.findAvailablePort(this.m_ServerPort), global.__log.info("[VClawHttpServer] will use port: " + this.m_ServerPort);
                } catch (e) {
                    global.__log.error(`[VClawHttpServer] failed to find available port: ${e}, fallback to system-assigned port`);
                    try {
                        this.m_ServerPort = yield this.findAvailablePort(0), global.__log.info("[VClawHttpServer] system-assigned port: " + this.m_ServerPort);
                    } catch (e) {
                        return void global.__log.error("[VClawHttpServer] failed to get system-assigned port: " + e);
                    }
                }
                global.__log.info("[VClawHttpServer] start create vclaw http server"), yield this.loadThirdPartyTokensFromDB();
                const e = o.default.createServer((e, t) => {
                    var n;
                    global.__log.info(`[VClawHttpServer] request from ${e.socket.remoteAddress}, req url: ${e.url}`);
                    const r = this.m_PipeVerifyDisabled;
                    if (r) {
                        const e = t.writeHead.bind(t);
                        t.writeHead = function(t, n) {
                            const r = Object.assign({}, n || {});
                            for (const e of Object.keys(r)) A.has(e.toLowerCase()) && delete r[e];
                            const i = Object.assign(Object.assign({}, r), T);
                            return e(t, i);
                        };
                    }
                    if (r && "OPTIONS" === e.method) return t.writeHead(204, {
                        "Content-type": "text/plain"
                    }), void t.end();
                    if (!this.isLocalhost(e)) return global.__log.info("[VClawHttpServer][ListenToRequest] rejected non-local request from " + e.socket.remoteAddress), 
                    t.writeHead(403, {
                        "Content-type": "text/plain"
                    }), t.write("Forbidden"), void t.end();
                    const i = (null === (n = e.url) || void 0 === n ? void 0 : n.split("?")[0]) || "";
                    if ("/favicon.ico" === i) return t.writeHead(404, {
                        "Content-type": "text/plain"
                    }), t.write("Not found"), void t.end();
                    if ("/" === i) return t.writeHead(200, {
                        "Content-type": "text/plain"
                    }), t.write("hello, this is VClawHttpServer!"), void t.end();
                    if ("/health" === i) {
                        t.writeHead(200, {
                            "Content-type": "application/json"
                        });
                        const e = {
                            status: "ok",
                            version: this.API_VERSION,
                            appVersion: b.app.getVersion(),
                            port: this.m_ServerPort,
                            masterKeyHash: this.getMasterKeyHash(),
                            pipeVerifyDisabled: this.m_PipeVerifyDisabled
                        };
                        return t.write(JSON.stringify(e)), void t.end();
                    }
                    if ("/token/create" !== i) if ("/userinfo" !== i) if ("/pcsuiteEnvConfig" !== i) if ("/token/list" !== i) if ("/third-party-token/list" !== i) if ("/third-party-token/create" !== i) if ("/third-party-token/update" !== i) if ("/third-party-token/delete" !== i) if ("/pipe/disable-verify" !== i) {
                        if (i.startsWith("/third-party/")) {
                            if ("/third-party/cli/version" === i) return void h.NoteClawService.forwardThirdPartyRequest(e, t);
                            const n = this.checkThirdPartyAccess(e);
                            return 401 === n ? (global.__log.info("[VClawHttpServer] unauthorized third-party request from " + e.socket.remoteAddress), 
                            t.writeHead(l.RES_CODE.UNAUTHORIZED, {
                                "Content-type": "text/plain"
                            }), t.write("Unauthorized"), void t.end()) : 403 === n ? (global.__log.info("[VClawHttpServer] read-only token denied write operation from " + e.socket.remoteAddress), 
                            t.writeHead(l.RES_CODE.FORBIDDEN, {
                                "Content-type": "application/json"
                            }), t.write(JSON.stringify({
                                status: "error",
                                error: {
                                    code: "FORBIDDEN",
                                    message: "Read-only token cannot perform write operations"
                                }
                            })), void t.end()) : h.NoteClawService.getIsThirdPartyRequest(e.url || "") ? void h.NoteClawService.forwardThirdPartyRequest(e, t) : void this.ListenToRequest(e, t);
                        }
                        if (!this.checkAuth(e)) return global.__log.info(`[VClawHttpServer] unauthorized request from ${e.socket.remoteAddress}, req url: ${e.url}`), 
                        t.writeHead(l.RES_CODE.UNAUTHORIZED, {
                            "Content-type": "text/plain"
                        }), t.write("Unauthorized"), void t.end();
                        d.default.getIsForwardRequest(e.url || "") ? d.default.forwardRequest(e, t) : h.NoteClawService.getIsForwardRequest(e.url || "") ? h.NoteClawService.forwardRequest(e, t) : p.CalendarClawService.getIsForwardRequest(e.url || "") ? p.CalendarClawService.forwardRequest(e, t) : f.AlbumClawService.getIsForwardRequest(e.url || "") ? f.AlbumClawService.forwardRequest(e, t) : this.ListenToRequest(e, t);
                    } else this.handleDisablePipeVerify(e, t); else this.handleDeleteThirdPartyToken(e, t); else this.handleUpdateThirdPartyToken(e, t); else this.handleCreateThirdPartyToken(e, t); else this.handleThirdPartyTokenList(e, t); else this.handleTokenList(e, t); else this.handlePcsuiteEnvConfig(t); else this.handleUserInfo(e, t); else this.handleCreateToken(e, t);
                });
                if (null !== e) {
                    e.on("error", e => {
                        global.__log.info("[VClawHttpServer] server error: " + JSON.stringify(e));
                    }), e.on("upgrade", (e, t, n) => {
                        global.__log.info("[VClawHttpServer] upgrade url: " + e.url), this.ServerUpgradeHandler(e, t, n);
                    }), this.SetServer(e);
                    try {
                        yield new Promise((e, t) => {
                            const n = this.getServer();
                            n ? (n.once("error", e => {
                                global.__log.error("[VClawHttpServer] listen error: " + JSON.stringify(e)), t(e);
                            }), n.listen(this.m_ServerPort, "127.0.0.1", () => {
                                global.__log.info("[VClawHttpServer] Successfully start the http server on port " + this.m_ServerPort), 
                                u.setSkillServerPort(this.m_ServerPort), e();
                            })) : t(new Error("HTTP server is null"));
                        });
                    } catch (e) {
                        return void global.__log.error(`[VClawHttpServer] failed to listen on port ${this.m_ServerPort}: ${e}`);
                    }
                    global.__log.info("[VClawHttpServer] start create vclaw pipe server"), yield this.createPipeServer();
                } else global.__log.info("[VClawHttpServer] Failed start the http server");
            });
        }
        DestoryHttpServer() {
            var e;
            return r.__awaiter(this, void 0, void 0, function*() {
                if (!this.GetDisposed()) {
                    if (this.m_PipeServer && (this.m_PipeServer.close(), global.__log.info("[VClawHttpServer] Successfully stop the pipe server"), 
                    this.m_PipeServer = null), null === this.getServer()) return;
                    null === (e = this.getServer()) || void 0 === e || e.close(), global.__log.info("[VClawHttpServer] Successfully stop the http server"), 
                    this.SetServer(null), this.m_ServerPort = 9200, this.m_TokenMap.clear(), yield i.default.delay(500), 
                    this.SetDisposed(!0);
                }
            });
        }
    };
    t.default = O;
}
