// analysis/pretty/main.js:40660; webpack module 372
function(e, t, n) {
    "use strict";
    class r {
        constructor(e, t) {
            this.path = e || "./", this.absolute = t, this.entry = null, this.stat = null, this.readdir = null, 
            this.pending = !1, this.ignore = !1, this.piped = !1;
        }
    }
    const {Minipass: i} = n(373), o = n(788), a = n(374), s = n(789), l = s.Sync, c = s.Tar, u = n(793), d = Buffer.alloc(1024), h = Symbol("onStat"), p = Symbol("ended"), f = Symbol("queue"), _ = Symbol("current"), m = Symbol("process"), g = Symbol("processing"), v = Symbol("processJob"), y = Symbol("jobs"), E = Symbol("jobDone"), b = Symbol("addFSEntry"), w = Symbol("addTarEntry"), S = Symbol("stat"), T = Symbol("readdir"), A = Symbol("onreaddir"), O = Symbol("pipe"), C = Symbol("entry"), N = Symbol("entryOpt"), I = Symbol("writeEntryClass"), R = Symbol("write"), D = Symbol("ondrain"), L = n(4), k = n(1), M = n(376), P = n(175), x = M(class extends i {
        constructor(e) {
            if (super(e), e = e || Object.create(null), this.opt = e, this.file = e.file || "", 
            this.cwd = e.cwd || process.cwd(), this.maxReadSize = e.maxReadSize, this.preservePaths = !!e.preservePaths, 
            this.strict = !!e.strict, this.noPax = !!e.noPax, this.prefix = P(e.prefix || ""), 
            this.linkCache = e.linkCache || new Map, this.statCache = e.statCache || new Map, 
            this.readdirCache = e.readdirCache || new Map, this[I] = s, "function" == typeof e.onwarn && this.on("warn", e.onwarn), 
            this.portable = !!e.portable, this.zip = null, e.gzip || e.brotli) {
                if (e.gzip && e.brotli) throw new TypeError("gzip and brotli are mutually exclusive");
                e.gzip && ("object" != typeof e.gzip && (e.gzip = {}), this.portable && (e.gzip.portable = !0), 
                this.zip = new o.Gzip(e.gzip)), e.brotli && ("object" != typeof e.brotli && (e.brotli = {}), 
                this.zip = new o.BrotliCompress(e.brotli)), this.zip.on("data", e => super.write(e)), 
                this.zip.on("end", e => super.end()), this.zip.on("drain", e => this[D]()), this.on("resume", e => this.zip.resume());
            } else this.on("drain", this[D]);
            this.noDirRecurse = !!e.noDirRecurse, this.follow = !!e.follow, this.noMtime = !!e.noMtime, 
            this.mtime = e.mtime || null, this.filter = "function" == typeof e.filter ? e.filter : e => !0, 
            this[f] = new u, this[y] = 0, this.jobs = +e.jobs || 4, this[g] = !1, this[p] = !1;
        }
        [R](e) {
            return super.write(e);
        }
        add(e) {
            return this.write(e), this;
        }
        end(e) {
            return e && this.write(e), this[p] = !0, this[m](), this;
        }
        write(e) {
            if (this[p]) throw new Error("write after end");
            return e instanceof a ? this[w](e) : this[b](e), this.flowing;
        }
        [w](e) {
            const t = P(k.resolve(this.cwd, e.path));
            if (this.filter(e.path, e)) {
                const n = new r(e.path, t, !1);
                n.entry = new c(e, this[N](n)), n.entry.on("end", e => this[E](n)), this[y] += 1, 
                this[f].push(n);
            } else e.resume();
            this[m]();
        }
        [b](e) {
            const t = P(k.resolve(this.cwd, e));
            this[f].push(new r(e, t)), this[m]();
        }
        [S](e) {
            e.pending = !0, this[y] += 1;
            const t = this.follow ? "stat" : "lstat";
            L[t](e.absolute, (t, n) => {
                e.pending = !1, this[y] -= 1, t ? this.emit("error", t) : this[h](e, n);
            });
        }
        [h](e, t) {
            this.statCache.set(e.absolute, t), e.stat = t, this.filter(e.path, t) || (e.ignore = !0), 
            this[m]();
        }
        [T](e) {
            e.pending = !0, this[y] += 1, L.readdir(e.absolute, (t, n) => {
                if (e.pending = !1, this[y] -= 1, t) return this.emit("error", t);
                this[A](e, n);
            });
        }
        [A](e, t) {
            this.readdirCache.set(e.absolute, t), e.readdir = t, this[m]();
        }
        [m]() {
            if (!this[g]) {
                this[g] = !0;
                for (let e = this[f].head; null !== e && this[y] < this.jobs; e = e.next) if (this[v](e.value), 
                e.value.ignore) {
                    const t = e.next;
                    this[f].removeNode(e), e.next = t;
                }
                this[g] = !1, this[p] && !this[f].length && 0 === this[y] && (this.zip ? this.zip.end(d) : (super.write(d), 
                super.end()));
            }
        }
        get [_]() {
            return this[f] && this[f].head && this[f].head.value;
        }
        [E](e) {
            this[f].shift(), this[y] -= 1, this[m]();
        }
        [v](e) {
            e.pending || (e.entry ? e !== this[_] || e.piped || this[O](e) : (e.stat || (this.statCache.has(e.absolute) ? this[h](e, this.statCache.get(e.absolute)) : this[S](e)), 
            e.stat && (e.ignore || (this.noDirRecurse || !e.stat.isDirectory() || e.readdir || (this.readdirCache.has(e.absolute) ? this[A](e, this.readdirCache.get(e.absolute)) : this[T](e), 
            e.readdir)) && (e.entry = this[C](e), e.entry ? e !== this[_] || e.piped || this[O](e) : e.ignore = !0))));
        }
        [N](e) {
            return {
                onwarn: (e, t, n) => this.warn(e, t, n),
                noPax: this.noPax,
                cwd: this.cwd,
                absolute: e.absolute,
                preservePaths: this.preservePaths,
                maxReadSize: this.maxReadSize,
                strict: this.strict,
                portable: this.portable,
                linkCache: this.linkCache,
                statCache: this.statCache,
                noMtime: this.noMtime,
                mtime: this.mtime,
                prefix: this.prefix
            };
        }
        [C](e) {
            this[y] += 1;
            try {
                return new this[I](e.path, this[N](e)).on("end", () => this[E](e)).on("error", e => this.emit("error", e));
            } catch (e) {
                this.emit("error", e);
            }
        }
        [D]() {
            this[_] && this[_].entry && this[_].entry.resume();
        }
        [O](e) {
            e.piped = !0, e.readdir && e.readdir.forEach(t => {
                const n = e.path, r = "./" === n ? "" : n.replace(/\/*$/, "/");
                this[b](r + t);
            });
            const t = e.entry, n = this.zip;
            n ? t.on("data", e => {
                n.write(e) || t.pause();
            }) : t.on("data", e => {
                super.write(e) || t.pause();
            });
        }
        pause() {
            return this.zip && this.zip.pause(), super.pause();
        }
    });
    x.Sync = class extends x {
        constructor(e) {
            super(e), this[I] = l;
        }
        pause() {}
        resume() {}
        [S](e) {
            const t = this.follow ? "statSync" : "lstatSync";
            this[h](e, L[t](e.absolute));
        }
        [T](e, t) {
            this[A](e, L.readdirSync(e.absolute));
        }
        [O](e) {
            const t = e.entry, n = this.zip;
            e.readdir && e.readdir.forEach(t => {
                const n = e.path, r = "./" === n ? "" : n.replace(/\/*$/, "/");
                this[b](r + t);
            }), n ? t.on("data", e => {
                n.write(e);
            }) : t.on("data", e => {
                super[R](e);
            });
        }
    }, e.exports = x;
}
