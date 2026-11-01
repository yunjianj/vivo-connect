// analysis/pretty/main.js:132472; webpack module 1730
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(12)), o = r.__importDefault(n(103)), a = r.__importDefault(n(4)), s = r.__importDefault(n(204)), l = n(112), c = (n(344), 
    n(179));
    class u extends i.default {
        constructor(e) {
            super(), this.pipeId = "", this.initRequestId = "", this.MAX_RETRY_COUNT = 3, this.msgQueue = [], 
            this.r = null, this.deviceId = e;
        }
        static getInstance(e) {
            let t = this.instanceMap.get(e);
            return t || (t = new u(e), this.instanceMap.set(e, t)), t;
        }
        init(e) {
            global.__dbLog.info(`[RestoreRequest]init ${e.pipeId}, this.r: `, null == this.r), 
            this.reset(), this.pipeId = e.pipeId, this.initRequestId = e.requestId, this.start(e);
        }
        start(e) {
            this.msgQueue.push({
                msg: e,
                retryCount: 0
            }), null == this.r && this.next();
        }
        next() {
            const e = this.msgQueue.shift();
            if (!e) return;
            const {msg: t, retryCount: n} = e;
            if (t.pipeId != this.pipeId) return void global.__dbLog.error("[RestoreRequest]pipeId not match, msg pipeId: " + t.pipeId);
            global.__dbLog.info(`[RestoreRequest]========= start ${t.requestId} =========`), 
            global.__dbLog.info(`[RestoreRequest]deviceId: ${t.deviceId}, pipeId: ${t.pipeId}, 重试次数: ${n}, initRequestId: ${this.initRequestId}`);
            const r = o.default.post(`https://${t.ip}:${t.port}${l.DeviceBackupHttpRoute.RESTORE_FIEL}?requestId=${this.initRequestId}&pipeId=${t.pipeId}`, {
                strictSSL: !1,
                headers: {
                    "X-ES-HTTP-VERSION": "1",
                    newToken: t.token,
                    Connection: "close"
                },
                timeout: 12e4
            });
            r.on("response", e => {
                global.__dbLog.info(`[RestoreRequest]http ${e.body} status code: ${e.statusCode}, complete: ${e.complete}`), 
                this.handleHttpEnd(t.requestId);
            }).on("error", e => {
                global.__dbLog.error(`[RestoreRequest] http error: ${JSON.stringify(e)}, requestId: ${t.requestId}`), 
                /ESOCKETTIMEDOUT/.test(JSON.stringify(e)) && (global.__dbLog.error(`[RestoreRequest] http timeout and retry, requestId: ${t.requestId}, 重试次数: ${n}`), 
                n < this.MAX_RETRY_COUNT && this.msgQueue.unshift({
                    msg: t,
                    retryCount: n + 1
                })), e && "ECONNRESET" === e.code && (global.__dbLog.error(`[RestoreRequest] http ECONNRESET, requestId: ${t.requestId}, 重试次数: ${n}`), 
                n < this.MAX_RETRY_COUNT && this.msgQueue.unshift({
                    msg: t,
                    retryCount: n + 1
                })), this.handleHttpEnd(t.requestId);
            }), this.r = r;
            const i = s.default("tar");
            i.on("entry", e => {
                global.__dbLog.info("[RestoreRequest]archive entry:", e.name);
            }).on("error", e => {
                global.__dbLog.error("[RestoreRequest]archive error: " + (e.message || e));
            }).on("finish", () => {
                global.__dbLog.info("[RestoreRequest]archive finish");
            }).on("close", () => {
                global.__dbLog.info("[RestoreRequest]archive close");
            }), i.pipe(r), t.paths && t.paths.map(e => c.getPlatformMatchedPath(e)).forEach(e => {
                let t = "";
                try {
                    a.default.accessSync(e, a.default.constants.R_OK);
                    const t = a.default.statSync(e);
                    i.file(e, {
                        name: e,
                        stats: t,
                        date: t.mtime,
                        pax: {
                            size: t.size || 0
                        }
                    });
                } catch (t) {
                    t = JSON.stringify(t);
                }
            }), i.append("TAR_ARCHIVE_OVER", {
                name: "TAR_ARCHIVE_OVER"
            }), i.finalize();
        }
        handleHttpEnd(e) {
            return r.__awaiter(this, void 0, void 0, function*() {
                global.__dbLog.info(`[RestoreRequest]========= end ${e} =========`), yield new Promise(e => setTimeout(e, 500)), 
                this.r && (this.r.destroy(), this.r = null, this.next());
            });
        }
        handlePipeEnd() {
            global.__dbLog.info("[RestoreRequest]pipe end, clear http"), this.reset(), this.pipeId = "", 
            this.initRequestId = "";
        }
        reset() {
            var e, t;
            this.msgQueue = [], null === (e = this.r) || void 0 === e || e.abort(), null === (t = this.r) || void 0 === t || t.destroy(), 
            this.r = null;
        }
        static clearInstance(e) {
            const t = e.map(e => e.deviceId);
            [ ...this.instanceMap.entries() ].forEach(([e, n]) => {
                t.includes(e) || n.reset();
            });
        }
    }
    t.default = u, u.instanceMap = new Map;
}
