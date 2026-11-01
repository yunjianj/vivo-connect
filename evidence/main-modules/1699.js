// analysis/pretty/main.js:129968; webpack module 1699
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = n(96), o = n(4), a = n(1), s = n(204), l = n(371), c = n(25);
    t.default = class {
        constructor(e) {
            this.options = {
                type: "create",
                targetDir: "",
                readStreamTar: null,
                fileList: [],
                writeStreamTar: null,
                isAlbum: !1
            }, this.archive = null, this.extract = null, this.progressCallback = function() {}, 
            this.entryCallback = function() {}, this.finishCallback = function() {}, this.errorCallback = function() {}, 
            this.isArchiveAbort = !1, this.failedEntries = [], e && (this.options = e), this.start();
        }
        start() {
            var e, t;
            if ("extract" == this.options.type) {
                if (!this.options.targetDir || !this.options.readStreamTar) return;
                this.handleTarExtract(this.options.readStreamTar, this.options.targetDir, this.options.isAlbum);
            } else if ("create" == this.options.type) {
                if (!(null === (e = this.options.fileList) || void 0 === e ? void 0 : e.length) || !this.options.writeStreamTar) return;
                this.handleTarCreate(this.options.fileList);
            } else if ("copy" == this.options.type) {
                if (!(null === (t = this.options.fileList) || void 0 === t ? void 0 : t.length) || !this.options.targetDir) return;
                this.handleTarCopyFile(this.options.fileList, this.options.targetDir);
            }
        }
        handleTarExtract(e, t, n) {
            let s = {
                path: "",
                size: 0
            };
            const c = {
                parentFolder: ""
            }, u = {
                pregname: "",
                preGroupName: ""
            };
            let d = !1, h = 0, p = 0;
            const f = l.extract({
                cwd: a.join(t),
                preservePaths: !0,
                onwarn: (e, t, n) => {
                    global.__fmLog.info(`[fm]TarFileManager tar extract onwarn (non-fatal) code:${e}  message:${t}  data:${JSON.stringify(n)}`);
                },
                onentry: e => {
                    h++;
                    let r = {
                        fileName: "",
                        originName: "",
                        isRoot: !1
                    };
                    r = n ? this.setEntryPathByAlbum(e, t, u, s) : this.setEntryPathByDir(e, t, s, c), 
                    e.on("finish", () => {
                        p++, this.entryCallback(r), d && this.finishCallback(!0);
                    }).on("error", e => {
                        global.__fmLog.info(`[fm]TarFileManager tar extract entry error fileName:${r.fileName} originName:${r.originName} error:${e.message}`), 
                        this.failedEntries.push({
                            fileName: r.fileName,
                            originName: r.originName,
                            error: e.message
                        }), d && this.finishCallback(!1);
                    });
                }
            });
            f.on("finish", () => r.__awaiter(this, void 0, void 0, function*() {
                global.__fmLog.info("[fm]TarFileManager tar extract finish ");
                h == p ? this.finishCallback(!0) : d = !0;
            })).on("warn", e => r.__awaiter(this, void 0, void 0, function*() {
                global.__fmLog.info("[fm]TarFileManager tar extract warn (non-fatal) err:" + JSON.stringify(e));
            }));
            let _ = 0;
            e.on("data", e => {
                _ += e.length, this.progressCallback(_);
            }).pipe(f).on("error", e => {
                global.__fmLog.info("[fm]TarFileManager tar extract error " + e);
            }).on("close", () => {
                global.__fmLog.info("[fm]TarFileManager tar extract close ");
            }), e.on("close", () => r.__awaiter(this, void 0, void 0, function*() {
                global.__fmLog.info("[fm]TarFileManager tar readStreamTar extract close "), yield i.sleep(2e3);
                const e = yield this.getStatSize(s.path);
                global.__fmLog.info(`[fm]TarFileManager tar readStreamTar extract close lastStatSize:${e}, lastEntrySize: ${s.size} `);
                e >= s.size || (global.__fmLog.info(`[fm]TarFileManager tar readStreamTar extract close delete ${s.path} `), 
                o.rm(s.path));
            })), this.extract = f;
        }
        handleTarCreate(e) {
            var t, n, o, l, c, u, d;
            return r.__awaiter(this, void 0, void 0, function*() {
                try {
                    global.__fmLog.info("[fm]TarFileManager tar archive start , fileList: " + (e ? JSON.stringify(e) : null));
                } catch (e) {
                    global.__fmLog.info("[fm]TarFileManager tar archive start , error: " + (e ? e.message : null));
                }
                this.archive = s("tar");
                let r = 0;
                this.options.writeStreamTar && (null === (t = this.archive) || void 0 === t || t.pipe(this.options.writeStreamTar)), 
                null === (n = this.archive) || void 0 === n || n.on("entry", e => {
                    var t;
                    const n = a.basename(e.name), r = !(null === (t = e.name) || void 0 === t ? void 0 : t.split("/")[1]);
                    this.entryCallback({
                        fileName: n,
                        originName: n,
                        isRoot: r
                    });
                }).on("data", e => {
                    this.isArchiveAbort || (r += e.length, "create" == this.options.type && this.progressCallback(r));
                }).on("error", e => {
                    global.__fmLog.info("[fm]TarFileManager tar archive error " + JSON.stringify(e)), 
                    "create" == this.options.type && this.errorCallback();
                }).on("finish", () => {
                    global.__fmLog.info("[fm]TarFileManager tar archive finish "), "create" == this.options.type && this.finishCallback();
                });
                const h = e;
                for (var p = 0; p < h.length; p++) {
                    const e = a.join(h[p]), t = yield this.isDirectory(e);
                    let n = i.replaceSpecialSymbolsAndMax(a.basename(e));
                    if (n = i.replaceSpecialSymbols(n), t) {
                        (yield this.isEmptyDirectory(e)) ? null === (o = this.archive) || void 0 === o || o.append(null, {
                            name: n,
                            type: "directory"
                        }) : (null === (l = this.archive) || void 0 === l || l.append(null, {
                            name: n,
                            type: "directory"
                        }), null === (c = this.archive) || void 0 === c || c.directory(e, n, e => {
                            var t, n;
                            if (e.name && -1 === e.name.indexOf(".DS_Store")) {
                                if (e.pax = {
                                    size: (null === (t = e.stats) || void 0 === t ? void 0 : t.size) || 0
                                }, null === (n = e.stats) || void 0 === n ? void 0 : n.isDirectory()) e.name = i.replaceSpecialSymbols(e.name); else {
                                    const t = a.dirname(e.name);
                                    let n = i.replaceSpecialSymbolsAndMax(a.basename(e.name));
                                    n = i.replaceSpecialSymbols(n), e.name = a.join(t, n);
                                }
                                return e;
                            }
                            return !1;
                        }));
                    } else {
                        const t = yield this.getStatSize(e);
                        null === (u = this.archive) || void 0 === u || u.file(e, {
                            name: n,
                            pax: {
                                size: t || 0
                            }
                        });
                    }
                }
                global.__fmLog.info("[fm]TarFileManager tar archive finalize start "), null === (d = this.archive) || void 0 === d || d.finalize();
            });
        }
        handleTarCopyFile(e, t) {
            this.handleTarCreate(e), this.archive && this.handleTarExtract(this.archive, t, !1);
        }
        abort() {
            var e, t;
            global.__fmLog.info("[fm]TarFileManager tar abort"), "extract" == this.options.type ? null === (e = this.extract) || void 0 === e || e.abort() : "create" != this.options.type && "copy" != this.options.type || (null === (t = this.archive) || void 0 === t || t.abort(), 
            this.isArchiveAbort = !0);
        }
        onprogress(e) {
            this.progressCallback = c.throttle(e, 300, {
                trailing: !0,
                leading: !0
            });
        }
        onentry(e) {
            this.entryCallback = e;
        }
        onfinish(e) {
            this.finishCallback = e;
        }
        onerror(e) {
            this.errorCallback = e;
        }
        getFailedEntries() {
            return this.failedEntries;
        }
        isDirectory(e) {
            return new Promise((t, n) => {
                o.stat(e, (e, r) => {
                    if (e) return global.__fmLog.info("[fm]TarFileManager isDirectory " + JSON.stringify(e)), 
                    void n(!1);
                    r.isFile() ? t(!1) : r.isDirectory() && t(!0);
                });
            });
        }
        isEmptyDirectory(e) {
            return new Promise(t => {
                o.readdir(e, (e, n) => {
                    if (e) return global.__fmLog.info("[fm]TarFileManager isEmptyDirectory " + JSON.stringify(e)), 
                    void t(!0);
                    n.length ? t(!1) : t(!0);
                });
            });
        }
        getStatSize(e) {
            return new Promise(t => {
                o.stat(e, (e, n) => {
                    if (e) return global.__fmLog.info("[fm]TarFileManager getStatSize " + JSON.stringify(e)), 
                    void t(0);
                    t(n.size);
                });
            });
        }
        getNewNameExits(e, t) {
            let n = 1, r = a.join(e, t);
            const i = a.extname(r), s = a.basename(r), l = a.basename(s, i), c = a.dirname(r);
            for (;o.existsSync(r); ) {
                const e = `${l}(${n})${i}`;
                r = a.join(c, e), n++;
            }
            return a.relative(e, r);
        }
        setEntryPathByAlbum(e, t, n, r) {
            var i;
            const {isReplace: o} = this.options, s = null === (i = e.path) || void 0 === i ? void 0 : i.split("/"), l = s[0];
            e.path = s[1] || "";
            const c = a.basename(a.join(t, l)), u = n.pregname != l;
            if (n.pregname = l, u) if (o) n.preGroupName = l; else {
                const e = this.getNewNameExits(t, l);
                n.preGroupName = e;
            }
            let d = a.join(t, n.preGroupName, e.path);
            return e.path = a.join(n.preGroupName, e.path), r.path = d, r.size = Number(e.size), 
            o ? {
                fileName: c,
                originName: c,
                isRoot: u
            } : {
                fileName: n.preGroupName,
                originName: l,
                isRoot: u
            };
        }
        setEntryPathByDir(e, t, n, r) {
            const {isReplace: i} = this.options, o = a.basename(a.join(t, e.path)), s = e.path.split("/"), l = !!s[1];
            l && (s[0] = r.parentFolder, i || (e.path = s.join("/")));
            let c = a.join(t, e.path);
            const u = a.basename(c), d = this.getNewNameExits(t, e.path);
            i || (e.path = d);
            const h = e.path.split("/");
            if (l || "Directory" == e.type && (r.parentFolder = h[0]), n.path = a.join(t, e.path), 
            n.size = Number(e.size), i) return {
                fileName: o,
                originName: o,
                isRoot: !l
            };
            return {
                fileName: a.basename(a.join(t, e.path)),
                originName: u,
                isRoot: !l
            };
        }
        archiveDir(e, t) {
            return r.__awaiter(this, void 0, void 0, function*() {
                return new Promise(n => r.__awaiter(this, void 0, void 0, function*() {
                    yield this.getDirInfo(e, (n, i) => r.__awaiter(this, void 0, void 0, function*() {
                        var r, o;
                        const s = a.join(t, a.relative(e, n));
                        if (global.__fmLog.info(`[fm]TarFileManager tar archive test isDir:${i}, cPath: ${n}, relativePath: ${s}`), 
                        i) return void (null === (r = this.archive) || void 0 === r || r.append(null, {
                            name: s,
                            type: "directory"
                        }));
                        const l = yield this.getStatSize(n);
                        null === (o = this.archive) || void 0 === o || o.file(n, {
                            name: s,
                            pax: {
                                size: l || 0
                            }
                        });
                    })), n(!0);
                }));
            });
        }
        getDirInfo(e, t) {
            return new Promise(n => {
                o.stat(e, (i, s) => {
                    i ? n(!0) : (t(e, s.isDirectory()), s.isDirectory() ? o.readdir(e, (i, o) => r.__awaiter(this, void 0, void 0, function*() {
                        if (i) n(!0); else {
                            for (var r = 0; r < o.length; r++) yield this.getDirInfo(a.join(e, o[r]), t);
                            n(!0);
                        }
                    })) : n(!0));
                });
            });
        }
    };
}
