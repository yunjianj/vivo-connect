// analysis/pretty/main.js:72724; webpack module 795
function(e, t, n) {
    "use strict";
    const r = n(44), i = n(378), o = n(4), a = n(178), s = n(1), l = n(1688), c = n(791), u = n(1696), d = n(792), h = n(175), p = n(177), f = n(797), _ = Symbol("onEntry"), m = Symbol("checkFs"), g = Symbol("checkFs2"), v = Symbol("pruneCache"), y = Symbol("isReusable"), E = Symbol("makeFs"), b = Symbol("file"), w = Symbol("directory"), S = Symbol("link"), T = Symbol("symlink"), A = Symbol("hardlink"), O = Symbol("unsupported"), C = Symbol("checkPath"), N = Symbol("mkdir"), I = Symbol("onError"), R = Symbol("pending"), D = Symbol("pend"), L = Symbol("unpend"), k = Symbol("ended"), M = Symbol("maybeClose"), P = Symbol("skip"), x = Symbol("doChown"), F = Symbol("uid"), j = Symbol("gid"), U = Symbol("checkedCwd"), W = n(7), B = n(1697), H = "win32" === (process.env.TESTING_TAR_FAKE_PLATFORM || process.platform), $ = (e, t, n) => e === e >>> 0 ? e : t === t >>> 0 ? t : n, Y = e => p(h(f(e))).toLowerCase();
    class z extends i {
        constructor(e) {
            if (e || (e = {}), e.ondone = e => {
                this[k] = !0, this[M]();
            }, super(e), this[U] = !1, this.reservations = u(), this.transform = "function" == typeof e.transform ? e.transform : null, 
            this.writable = !0, this.readable = !1, this[R] = 0, this[k] = !1, this.dirCache = e.dirCache || new Map, 
            "number" == typeof e.uid || "number" == typeof e.gid) {
                if ("number" != typeof e.uid || "number" != typeof e.gid) throw new TypeError("cannot set owner without number uid and gid");
                if (e.preserveOwner) throw new TypeError("cannot preserve owner in archive and also set owner explicitly");
                this.uid = e.uid, this.gid = e.gid, this.setOwner = !0;
            } else this.uid = null, this.gid = null, this.setOwner = !1;
            void 0 === e.preserveOwner && "number" != typeof e.uid ? this.preserveOwner = process.getuid && 0 === process.getuid() : this.preserveOwner = !!e.preserveOwner, 
            this.processUid = (this.preserveOwner || this.setOwner) && process.getuid ? process.getuid() : null, 
            this.processGid = (this.preserveOwner || this.setOwner) && process.getgid ? process.getgid() : null, 
            this.maxDepth = "number" == typeof e.maxDepth ? e.maxDepth : 1024, this.forceChown = !0 === e.forceChown, 
            this.win32 = !!e.win32 || H, this.newer = !!e.newer, this.keep = !!e.keep, this.noMtime = !!e.noMtime, 
            this.preservePaths = !!e.preservePaths, this.unlink = !!e.unlink, this.cwd = h(s.resolve(e.cwd || process.cwd())), 
            this.strip = +e.strip || 0, this.processUmask = e.noChmod ? 0 : process.umask(), 
            this.umask = "number" == typeof e.umask ? e.umask : this.processUmask, this.dmode = e.dmode || 511 & ~this.umask, 
            this.fmode = e.fmode || 438 & ~this.umask, this.on("entry", e => this[_](e));
        }
        warn(e, t, n = {}) {
            return "TAR_BAD_ARCHIVE" !== e && "TAR_ABORT" !== e || (n.recoverable = !1), super.warn(e, t, n);
        }
        [M]() {
            this[k] && 0 === this[R] && (this.emit("prefinish"), this.emit("finish"), this.emit("end"));
        }
        [C](e) {
            const t = h(e.path), n = t.split("/");
            if (this.strip) {
                if (n.length < this.strip) return !1;
                if ("Link" === e.type) {
                    const t = h(e.linkpath).split("/");
                    if (!(t.length >= this.strip)) return !1;
                    e.linkpath = t.slice(this.strip).join("/");
                }
                n.splice(0, this.strip), e.path = n.join("/");
            }
            if (isFinite(this.maxDepth) && n.length > this.maxDepth) return this.warn("TAR_ENTRY_ERROR", "path excessively deep", {
                entry: e,
                path: t,
                depth: n.length,
                maxDepth: this.maxDepth
            }), !1;
            if (!this.preservePaths) {
                if (n.includes("..") || H && /^[a-z]:\.\.$/i.test(n[0])) return this.warn("TAR_ENTRY_ERROR", "path contains '..'", {
                    entry: e,
                    path: t
                }), !1;
                const [r, i] = d(t);
                r && (e.path = i, this.warn("TAR_ENTRY_INFO", `stripping ${r} from absolute path`, {
                    entry: e,
                    path: t
                }));
            }
            if (s.isAbsolute(e.path) ? e.absolute = h(s.resolve(e.path)) : e.absolute = h(s.resolve(this.cwd, e.path)), 
            !this.preservePaths && 0 !== e.absolute.indexOf(this.cwd + "/") && e.absolute !== this.cwd) return this.warn("TAR_ENTRY_ERROR", "path escaped extraction target", {
                entry: e,
                path: h(e.path),
                resolvedPath: e.absolute,
                cwd: this.cwd
            }), !1;
            if (e.absolute === this.cwd && "Directory" !== e.type && "GNUDumpDir" !== e.type) return !1;
            if (this.win32) {
                const {root: t} = s.win32.parse(e.absolute);
                e.absolute = t + c.encode(e.absolute.slice(t.length));
                const {root: n} = s.win32.parse(e.path);
                e.path = n + c.encode(e.path.slice(n.length));
            }
            return !0;
        }
        [_](e) {
            if (!this[C](e)) return e.resume();
            switch (r.equal(typeof e.absolute, "string"), e.type) {
              case "Directory":
              case "GNUDumpDir":
                e.mode && (e.mode = 448 | e.mode);

              case "File":
              case "OldFile":
              case "ContiguousFile":
              case "Link":
              case "SymbolicLink":
                return this[m](e);

              case "CharacterDevice":
              case "BlockDevice":
              case "FIFO":
              default:
                return this[O](e);
            }
        }
        [I](e, t) {
            "CwdError" === e.name ? this.emit("error", e) : (this.warn("TAR_ENTRY_ERROR", e, {
                entry: t
            }), this[L](), t.resume());
        }
        [N](e, t, n) {
            l(h(e), {
                uid: this.uid,
                gid: this.gid,
                processUid: this.processUid,
                processGid: this.processGid,
                umask: this.processUmask,
                preserve: this.preservePaths,
                unlink: this.unlink,
                cache: this.dirCache,
                cwd: this.cwd,
                mode: t,
                noChmod: this.noChmod
            }, n);
        }
        [x](e) {
            return this.forceChown || this.preserveOwner && ("number" == typeof e.uid && e.uid !== this.processUid || "number" == typeof e.gid && e.gid !== this.processGid) || "number" == typeof this.uid && this.uid !== this.processUid || "number" == typeof this.gid && this.gid !== this.processGid;
        }
        [F](e) {
            return $(this.uid, e.uid, this.processUid);
        }
        [j](e) {
            return $(this.gid, e.gid, this.processGid);
        }
        [b](e, t) {
            const n = 4095 & e.mode || this.fmode, r = new a.WriteStream(e.absolute, {
                flags: B(e.size),
                mode: n,
                autoClose: !1
            });
            r.on("error", n => {
                r.fd && o.close(r.fd, () => {}), r.write = () => !0, this[I](n, e), t();
            });
            let i = 1;
            const s = n => {
                if (n) return r.fd && o.close(r.fd, () => {}), this[I](n, e), void t();
                0 == --i && o.close(r.fd, n => {
                    n ? this[I](n, e) : this[L](), t();
                });
            };
            r.on("finish", t => {
                const n = e.absolute, a = r.fd;
                if (e.mtime && !this.noMtime) {
                    i++;
                    const t = e.atime || new Date, r = e.mtime;
                    o.futimes(a, t, r, e => e ? o.utimes(n, t, r, t => s(t && e)) : s());
                }
                if (this[x](e)) {
                    i++;
                    const t = this[F](e), r = this[j](e);
                    o.fchown(a, t, r, e => e ? o.chown(n, t, r, t => s(t && e)) : s());
                }
                s();
            });
            const l = this.transform && this.transform(e) || e;
            l !== e && (l.on("error", n => {
                this[I](n, e), t();
            }), e.pipe(l)), l.pipe(r);
        }
        [w](e, t) {
            const n = 4095 & e.mode || this.dmode;
            this[N](e.absolute, n, n => {
                if (n) return this[I](n, e), void t();
                let r = 1;
                const i = n => {
                    0 == --r && (t(), this[L](), e.resume());
                };
                e.mtime && !this.noMtime && (r++, o.utimes(e.absolute, e.atime || new Date, e.mtime, i)), 
                this[x](e) && (r++, o.chown(e.absolute, this[F](e), this[j](e), i)), i();
            });
        }
        [O](e) {
            e.unsupported = !0, this.warn("TAR_ENTRY_UNSUPPORTED", "unsupported entry type: " + e.type, {
                entry: e
            }), e.resume();
        }
        [T](e, t) {
            this[S](e, e.linkpath, "symlink", t);
        }
        [A](e, t) {
            const n = h(s.resolve(this.cwd, e.linkpath));
            this[S](e, n, "link", t);
        }
        [D]() {
            this[R]++;
        }
        [L]() {
            this[R]--, this[M]();
        }
        [P](e) {
            this[L](), e.resume();
        }
        [y](e, t) {
            return "File" === e.type && !this.unlink && t.isFile() && t.nlink <= 1 && !H;
        }
        [m](e) {
            this[D]();
            const t = [ e.path ];
            e.linkpath && t.push(e.linkpath), this.reservations.reserve(t, t => this[g](e, t));
        }
        [v](e) {
            "SymbolicLink" === e.type ? (e => {
                for (const t of e.keys()) e.delete(t);
            })(this.dirCache) : "Directory" !== e.type && ((e, t) => {
                t = Y(t);
                for (const n of e.keys()) {
                    const r = Y(n);
                    r !== t && 0 !== r.indexOf(t + "/") || e.delete(n);
                }
            })(this.dirCache, e.absolute);
        }
        [g](e, t) {
            this[v](e);
            const n = n => {
                this[v](e), t(n);
            }, r = () => {
                this[N](this.cwd, this.dmode, t => {
                    if (t) return this[I](t, e), void n();
                    this[U] = !0, i();
                });
            }, i = () => {
                if (e.absolute !== this.cwd) {
                    const t = h(s.dirname(e.absolute));
                    if (t !== this.cwd) return this[N](t, this.dmode, t => {
                        if (t) return this[I](t, e), void n();
                        a();
                    });
                }
                a();
            }, a = () => {
                o.lstat(e.absolute, (t, r) => {
                    if (r && (this.keep || this.newer && r.mtime > e.mtime)) return this[P](e), void n();
                    if (t || this[y](e, r)) return this[E](null, e, n);
                    if (r.isDirectory()) {
                        if ("Directory" === e.type) {
                            const t = t => this[E](t, e, n);
                            return !this.noChmod && e.mode && (4095 & r.mode) !== e.mode ? o.chmod(e.absolute, e.mode, t) : t();
                        }
                        if (e.absolute !== this.cwd) return o.rmdir(e.absolute, t => this[E](t, e, n));
                    }
                    if (e.absolute === this.cwd) return this[E](null, e, n);
                    ((e, t) => {
                        if (!H) return o.unlink(e, t);
                        const n = e + ".DELETE." + W.randomBytes(16).toString("hex");
                        o.rename(e, n, e => {
                            if (e) return t(e);
                            o.unlink(n, t);
                        });
                    })(e.absolute, t => this[E](t, e, n));
                });
            };
            this[U] ? i() : r();
        }
        [E](e, t, n) {
            if (e) return this[I](e, t), void n();
            switch (t.type) {
              case "File":
              case "OldFile":
              case "ContiguousFile":
                return this[b](t, n);

              case "Link":
                return this[A](t, n);

              case "SymbolicLink":
                return this[T](t, n);

              case "Directory":
              case "GNUDumpDir":
                return this[w](t, n);
            }
        }
        [S](e, t, n, r) {
            o[n](t, e.absolute, t => {
                t ? this[I](t, e) : (this[L](), e.resume()), r();
            });
        }
    }
    const G = e => {
        try {
            return [ null, e() ];
        } catch (e) {
            return [ e, null ];
        }
    };
    z.Sync = class extends z {
        [E](e, t) {
            return super[E](e, t, () => {});
        }
        [m](e) {
            if (this[v](e), !this[U]) {
                const t = this[N](this.cwd, this.dmode);
                if (t) return this[I](t, e);
                this[U] = !0;
            }
            if (e.absolute !== this.cwd) {
                const t = h(s.dirname(e.absolute));
                if (t !== this.cwd) {
                    const n = this[N](t, this.dmode);
                    if (n) return this[I](n, e);
                }
            }
            const [t, n] = G(() => o.lstatSync(e.absolute));
            if (n && (this.keep || this.newer && n.mtime > e.mtime)) return this[P](e);
            if (t || this[y](e, n)) return this[E](null, e);
            if (n.isDirectory()) {
                if ("Directory" === e.type) {
                    const t = !this.noChmod && e.mode && (4095 & n.mode) !== e.mode, [r] = t ? G(() => {
                        o.chmodSync(e.absolute, e.mode);
                    }) : [];
                    return this[E](r, e);
                }
                const [t] = G(() => o.rmdirSync(e.absolute));
                this[E](t, e);
            }
            const [r] = e.absolute === this.cwd ? [] : G(() => (e => {
                if (!H) return o.unlinkSync(e);
                const t = e + ".DELETE." + W.randomBytes(16).toString("hex");
                o.renameSync(e, t), o.unlinkSync(t);
            })(e.absolute));
            this[E](r, e);
        }
        [b](e, t) {
            const n = 4095 & e.mode || this.fmode, r = n => {
                let r;
                try {
                    o.closeSync(i);
                } catch (e) {
                    r = e;
                }
                (n || r) && this[I](n || r, e), t();
            };
            let i;
            try {
                i = o.openSync(e.absolute, B(e.size), n);
            } catch (e) {
                return r(e);
            }
            const a = this.transform && this.transform(e) || e;
            a !== e && (a.on("error", t => this[I](t, e)), e.pipe(a)), a.on("data", e => {
                try {
                    o.writeSync(i, e, 0, e.length);
                } catch (e) {
                    r(e);
                }
            }), a.on("end", t => {
                let n = null;
                if (e.mtime && !this.noMtime) {
                    const t = e.atime || new Date, r = e.mtime;
                    try {
                        o.futimesSync(i, t, r);
                    } catch (i) {
                        try {
                            o.utimesSync(e.absolute, t, r);
                        } catch (e) {
                            n = i;
                        }
                    }
                }
                if (this[x](e)) {
                    const t = this[F](e), r = this[j](e);
                    try {
                        o.fchownSync(i, t, r);
                    } catch (i) {
                        try {
                            o.chownSync(e.absolute, t, r);
                        } catch (e) {
                            n = n || i;
                        }
                    }
                }
                r(n);
            });
        }
        [w](e, t) {
            const n = 4095 & e.mode || this.dmode, r = this[N](e.absolute, n);
            if (r) return this[I](r, e), void t();
            if (e.mtime && !this.noMtime) try {
                o.utimesSync(e.absolute, e.atime || new Date, e.mtime);
            } catch (r) {}
            if (this[x](e)) try {
                o.chownSync(e.absolute, this[F](e), this[j](e));
            } catch (r) {}
            t(), e.resume();
        }
        [N](e, t) {
            try {
                return l.sync(h(e), {
                    uid: this.uid,
                    gid: this.gid,
                    processUid: this.processUid,
                    processGid: this.processGid,
                    umask: this.processUmask,
                    preserve: this.preservePaths,
                    unlink: this.unlink,
                    cache: this.dirCache,
                    cwd: this.cwd,
                    mode: t
                });
            } catch (e) {
                return e;
            }
        }
        [S](e, t, n, r) {
            try {
                o[n + "Sync"](t, e.absolute), r(), e.resume();
            } catch (t) {
                return this[I](t, e);
            }
        }
    }, e.exports = z;
}
