// analysis/pretty/main.js:132357; webpack module 1728
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(12)), o = r.__importDefault(n(103)), a = r.__importDefault(n(1)), s = r.__importDefault(n(4)), l = n(9), c = r.__importDefault(n(371)), u = n(25), d = n(112), h = n(344), p = n(179);
    class f extends i.default {
        constructor(e) {
            super(), this.r = null, this.fileRes = [], this.emitTimer = null, this.dataTimer = null, 
            this.start(e);
        }
        start(e) {
            global.__dbLog.info("[BackupRequest]========= start ========="), global.__dbLog.info("[BackupRequest]message:", e);
            const {ip: t, port: n, requestId: i, fileInfo: f, token: _, backupPath: m, deviceId: g} = e;
            let v = 0;
            const y = u.throttle(e => {
                h.send2MainWebcontent(d.IpcEnum.DEVICE_BACKUP_PROGRESS, e);
            }, 500);
            this.emitTimer = setInterval(this.pushFileRes2Phone.bind(this), 3e3);
            const E = `https://${t}:${n}${d.DeviceBackupHttpRoute.BACKUP_FILE}?requestId=${i}&file_info=${encodeURIComponent(f)}`, b = o.default.post(E, {
                strictSSL: !1,
                timeout: 6e4,
                headers: {
                    "X-ES-HTTP-VERSION": "1",
                    Connection: "close",
                    newToken: _
                }
            });
            this.r = b;
            const w = c.default.extract({
                cwd: a.default.join(m),
                preservePaths: !0,
                onentry: e => {
                    const t = p.getPlatformMatchedPath(e.path);
                    h.checkIsSubpath(m, t) ? e.path = a.default.relative(m, t) : (b.destroy(), global.__dbLog.error(`[BackupRequest]checkIsSubpath err, backupPath: ${m}, originOperPath: ${e.path}, operPath: ${t} `)), 
                    e.on("finish", () => r.__awaiter(this, void 0, void 0, function*() {
                        global.__dbLog.info(`[BackupRequest]extract single file: ${e.path}, ${e.size}`), 
                        yield new Promise(e => setTimeout(e, 800));
                        let n = {
                            filePath: e.path,
                            isSuccess: !0
                        };
                        if (!s.default.existsSync(t)) {
                            const r = a.default.dirname(t), i = s.default.existsSync(r);
                            if (global.__dbLog.warn(`[BackupRequest]extract single file MISSING after finish: entryPath=${e.path}, entrySize=${e.size}, headerMode=${e.mode}, transformPath=${t}, parentDirExists=${i}`), 
                            i) try {
                                const e = s.default.readdirSync(r).filter(e => e.includes("result_info"));
                                global.__dbLog.warn("[BackupRequest]extract single file MISSING - sibling files in parent dir: " + e.join(","));
                            } catch (e) {
                                global.__dbLog.warn("[BackupRequest]extract single file MISSING - readdir failed: " + e);
                            }
                            n.isSuccess = !1, n.errorMsg = "file extract failed, entrySize=" + e.size;
                        }
                        this.fileRes.push(n), /status_temp_temp/.test(n.filePath) && (null != this.emitTimer && clearTimeout(this.emitTimer), 
                        this.emitTimer = null, this.pushFileRes2Phone());
                    })).on("error", t => {
                        global.__dbLog.error(`[BackupRequest]extract single file error: ${e.path},`, t), 
                        this.fileRes.push({
                            filePath: e.path,
                            isSuccess: !1,
                            errorMsg: JSON.stringify(t)
                        });
                    });
                }
            }).on("error", e => {
                this.handleEnd("extractTarResponse extract error: " + JSON.stringify(e));
            }).on("finish", () => {
                this.handleEnd("extractTarResponse extract finish");
            });
            b.on("response", e => {
                if (200 != e.statusCode) return void global.__dbLog.error("[BackupRequest] http error");
                const t = new l.PassThrough({
                    highWaterMark: 8388608
                });
                global.__dbLog.info("[BackupRequest] PassThrough buffer created, highWaterMark: 8388608"), 
                e.on("data", e => {
                    v += e.length, y(v), null != this.dataTimer && clearTimeout(this.dataTimer), this.dataTimer = setTimeout(() => {
                        global.__dbLog.warn("[BackupRequest] stream consumption stalled for 30s (pipe backpressure, socket may still be active)"), 
                        global.__dbLog.warn(`[BackupRequest] buffer status - readableLength: ${t.readableLength}, writableLength: ${t.writableLength}, writableNeedDrain: ${t.writableNeedDrain}`), 
                        h.send2MainWebcontent(d.IpcEnum.DEVICE_BACKUP_SINGLE_FILE_RETRY, g);
                    }, 3e4);
                }), e.on("error", e => {
                    this.handleEnd("response stream error: " + JSON.stringify(e));
                }), e.pipe(t).pipe(w), global.__dbLog.info("[BackupRequest] pipe chain established: res -> buffer -> extract");
            }).on("error", e => {
                this.handleEnd("http error, err: " + JSON.stringify(e));
            });
        }
        pushFileRes2Phone() {
            this.fileRes.length > 0 && this.emit("file-res", this.fileRes), this.fileRes = [];
        }
        handleEnd(e) {
            var t, n;
            null === (t = this.r) || void 0 === t || t.abort(), null === (n = this.r) || void 0 === n || n.destroy(), 
            this.r = null, null != this.dataTimer && clearTimeout(this.dataTimer), null != this.emitTimer && clearTimeout(this.emitTimer), 
            this.emitTimer = null, this.pushFileRes2Phone(), global.__dbLog.info("[BackupRequest]" + e), 
            global.__dbLog.info("[BackupRequest]========= end =========");
        }
        on(e, t) {
            return super.on(e, t);
        }
        emit(e, ...t) {
            return super.emit.apply(this, [ e, ...t ]);
        }
    }
    t.default = f;
}
