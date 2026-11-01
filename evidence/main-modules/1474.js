// analysis/pretty/main.js:109187; webpack module 1474
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(283)), o = r.__importDefault(n(4)), a = r.__importDefault(n(116)), s = r.__importDefault(n(1)), l = r.__importDefault(n(28)), c = r.__importDefault(n(12)), u = r.__importDefault(n(113)), d = n(162), h = n(96), p = n(74);
    class f extends c.default {
        constructor(e) {
            super(), this.logPrefix = e && e.logPrefix ? e.logPrefix : "[TarDownloader]", this.beforeSingleEntry = e && e.beforeSingleEntry ? e.beforeSingleEntry : () => !0, 
            this.tempNameFormatter = e && e.tempNameFormatter ? e.tempNameFormatter : null;
        }
        start(e) {
            global.__fmLog.info("[TarDownloader] start, download files count: " + e.files.length);
            const {savePath: t, checkRes: n, files: l} = e, c = l.length, f = l.reduce((e, t) => e + t.fileSize, 0);
            if (!this.checkDiskAvailable(t, f)) return null;
            let _, m = 0, g = 0, v = [], y = [], E = p.TRANSFER_FAIL_CODE.UNKNOWN;
            const b = e => {
                h.closeAndDelete(_);
                const t = {
                    fileName: "",
                    originName: e,
                    path: "",
                    size: 0
                };
                y.push(t), g = 0, this.emit("file-fail", t);
            }, w = i.default.extract();
            w.on("entry", (e, n, i) => {
                if (!this.canFurtherDownload(t, f - m)) return w.end(), E = p.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE, 
                void this.log("can not further download, break");
                this.beforeSingleEntry(e) || (this.log("extract entry blocked: " + e.name), i());
                const l = d.fileExistAndRename(e.name, t), c = s.default.join(t, l);
                let u = c;
                if (null != this.tempNameFormatter) {
                    const n = this.tempNameFormatter(e);
                    u = s.default.join(t, "" != n ? n : l);
                }
                n.on("error", t => {
                    this.log("extract stream error: " + JSON.stringify(t)), b(e.name);
                }).on("data", e => {
                    0 == m && global.__fmLog.info("[TarDownloader] first chunk: " + e.length), m += e.length, 
                    g += e.length, this.emit("progress", m, v.length);
                }).on("end", () => r.__awaiter(this, void 0, void 0, function*() {
                    if (u != c) try {
                        yield a.default.rename(u, c);
                    } catch (e) {
                        this.log("rename error: " + JSON.stringify(e)), o.default.unlink(u, e => {
                            this.log("rename error and delete error: " + JSON.stringify(e));
                        });
                    }
                    if (yield h.sleep(600), o.default.existsSync(c)) {
                        const t = {
                            fileName: l,
                            originName: e.name,
                            path: c,
                            size: g
                        };
                        v.push(t), this.emit("file-success", t);
                    } else this.log(`file ${e.name} is not existed on disk`);
                    g = 0, i();
                })), _ = o.default.createWriteStream(u), _.on("error", t => {
                    this.log("currentStream write error: " + JSON.stringify(t)), JSON.stringify(t).includes('"errno":-4058,"code":"ENOENT"') && (E = p.TRANSFER_FAIL_CODE.NO_PERMISSSION), 
                    b(e.name), i();
                }), n.pipe(_), n.resume();
            }).on("finish", () => {
                this.log("extract finish");
            }).once("close", () => {
                this.log("extract close");
            });
            const S = u.default.get(u.default.transformRequestParam(e.downloadParam));
            return new Promise((e, t) => {
                S.on("response", t => {
                    const r = d.handleDownloadRes(t);
                    r != p.TRANSFER_FAIL_CODE.OK && (this.log("API_FILE_DOWNLOAD error " + r), e(r)), 
                    t.on("error", t => {
                        this.log("download http error " + JSON.stringify(t)), h.closeAndDelete(_), e(n == p.TRANSFER_FAIL_CODE.OK ? p.TRANSFER_FAIL_CODE.NETWORK : p.TRANSFER_FAIL_CODE.FILE_NOT_EXIST);
                    }).pipe(w).on("finish", () => {
                        v.length != c ? e(n == p.TRANSFER_FAIL_CODE.OK ? p.TRANSFER_FAIL_CODE.NETWORK : p.TRANSFER_FAIL_CODE.FILE_NOT_EXIST) : e(p.TRANSFER_FAIL_CODE.OK);
                    }).on("error", t => {
                        this.log("download extract error " + t.toString()), h.closeAndDelete(_);
                        const n = t.toString().indexOf("Unexpected end of data") > -1 ? p.TRANSFER_FAIL_CODE.FILE_NOT_EXIST : p.TRANSFER_FAIL_CODE.NETWORK;
                        e(n);
                    });
                }).on("abort", () => {
                    this.log("request abort"), h.closeAndDelete(_), null != S && S.destroy(), e(p.TRANSFER_FAIL_CODE.ABORT);
                }).on("error", t => {
                    this.log("request error" + JSON.stringify(t)), e(p.TRANSFER_FAIL_CODE.NETWORK);
                }).on("complete", (e, t) => {
                    this.log(`request response res: ${e.statusCode}, ${e.statusMessage}, body: ${null == t ? void 0 : t.toString().substring(0, 1e4)}`, "info");
                });
            }).then(e => {
                let t = E != p.TRANSFER_FAIL_CODE.UNKNOWN ? E : e;
                this.emit("end", t, v, y);
            }).catch(e => {
                this.log("overall error" + JSON.stringify(e)), this.emit("end", p.TRANSFER_FAIL_CODE.UNKNOWN, v, y);
            }), S;
        }
        log(e, t = "error") {
            const n = this.logPrefix + e;
            "error" == t ? global.__fmLog.error(n) : global.__fmLog.info(n);
        }
        canFurtherDownload(e, t) {
            try {
                const n = l.default.getAvailableSpace(e);
                if (0 == n) throw new Error("DragFile.getAvailableSpace get free 0, path is " + e);
                return (n || 0) - t > 0;
            } catch (e) {
                return global.__fmLog.error("[TarDownloader]canFurtherDownload error " + (e.message || e)), 
                !0;
            }
        }
        checkPathWritable(e) {
            try {
                this.log("checkPathWritable start, dir: " + e);
                const t = s.default.join(e, "test.txt");
                return o.default.writeFileSync(t, "test"), o.default.existsSync(t) ? (o.default.unlink(t, () => {}), 
                !0) : (this.log("checkPathWritable test file not exists", "error"), !1);
            } catch (e) {
                return this.log("checkPathWritable error: " + JSON.stringify(e), "error"), !1;
            }
        }
        checkDiskAvailable(e, t) {
            if (!o.default.existsSync(e)) try {
                o.default.mkdirSync(e, {
                    recursive: !0
                });
            } catch (e) {
                return this.log("mkdirSync err: " + JSON.stringify(e)), this.emit("end", p.TRANSFER_FAIL_CODE.NO_PERMISSSION, [], []), 
                !1;
            }
            return this.canFurtherDownload(e, t) ? !!this.checkPathWritable(e) || (this.emit("end", p.TRANSFER_FAIL_CODE.NO_PERMISSSION, [], []), 
            !1) : (this.emit("end", p.TRANSFER_FAIL_CODE.NOT_ENOUGH_SPACE, [], []), !1);
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
