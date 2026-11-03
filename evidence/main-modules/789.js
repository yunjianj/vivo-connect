// analysis/pretty/main.js:72194; webpack module 789
function(e, t, n) {
    "use strict";
    const {Minipass: r} = n(373), i = n(375), o = n(176), a = n(4), s = n(1), l = n(175), c = n(177), u = (e, t) => t ? (e = l(e).replace(/^\.(\/|$)/, ""), 
    c(t) + "/" + e) : l(e), d = Symbol("process"), h = Symbol("file"), p = Symbol("directory"), f = Symbol("symlink"), _ = Symbol("hardlink"), m = Symbol("header"), g = Symbol("read"), v = Symbol("lstat"), y = Symbol("onlstat"), E = Symbol("onread"), b = Symbol("onreadlink"), w = Symbol("openfile"), S = Symbol("onopenfile"), T = Symbol("close"), A = Symbol("mode"), O = Symbol("awaitDrain"), C = Symbol("ondrain"), N = Symbol("prefix"), I = Symbol("hadError"), R = n(376), D = n(791), L = n(792), k = n(1682), M = R(class extends r {
        constructor(e, t) {
            if (super(t = t || {}), "string" != typeof e) throw new TypeError("path is required");
            this.path = l(e), this.portable = !!t.portable, this.myuid = process.getuid && process.getuid() || 0, 
            this.myuser = process.env.USER || "", this.maxReadSize = t.maxReadSize || 16777216, 
            this.linkCache = t.linkCache || new Map, this.statCache = t.statCache || new Map, 
            this.preservePaths = !!t.preservePaths, this.cwd = l(t.cwd || process.cwd()), this.strict = !!t.strict, 
            this.noPax = !!t.noPax, this.noMtime = !!t.noMtime, this.mtime = t.mtime || null, 
            this.prefix = t.prefix ? l(t.prefix) : null, this.fd = null, this.blockLen = null, 
            this.blockRemain = null, this.buf = null, this.offset = null, this.length = null, 
            this.pos = null, this.remain = null, "function" == typeof t.onwarn && this.on("warn", t.onwarn);
            let n = !1;
            if (!this.preservePaths) {
                const [e, t] = L(this.path);
                e && (this.path = t, n = e);
            }
            this.win32 = !!t.win32 || "win32" === process.platform, this.win32 && (this.path = D.decode(this.path.replace(/\\/g, "/")), 
            e = e.replace(/\\/g, "/")), this.absolute = l(t.absolute || s.resolve(this.cwd, e)), 
            "" === this.path && (this.path = "./"), n && this.warn("TAR_ENTRY_INFO", `stripping ${n} from absolute path`, {
                entry: this,
                path: n + this.path
            }), this.statCache.has(this.absolute) ? this[y](this.statCache.get(this.absolute)) : this[v]();
        }
        emit(e, ...t) {
            return "error" === e && (this[I] = !0), super.emit(e, ...t);
        }
        [v]() {
            a.lstat(this.absolute, (e, t) => {
                if (e) return this.emit("error", e);
                this[y](t);
            });
        }
        [y](e) {
            this.statCache.set(this.absolute, e), this.stat = e, e.isFile() || (e.size = 0), 
            this.type = x(e), this.emit("stat", e), this[d]();
        }
        [d]() {
            switch (this.type) {
              case "File":
                return this[h]();

              case "Directory":
                return this[p]();

              case "SymbolicLink":
                return this[f]();

              default:
                return this.end();
            }
        }
        [A](e) {
            return k(e, "Directory" === this.type, this.portable);
        }
        [N](e) {
            return u(e, this.prefix);
        }
        [m]() {
            "Directory" === this.type && this.portable && (this.noMtime = !0), this.header = new o({
                path: this[N](this.path),
                linkpath: "Link" === this.type ? this[N](this.linkpath) : this.linkpath,
                mode: this[A](this.stat.mode),
                uid: this.portable ? null : this.stat.uid,
                gid: this.portable ? null : this.stat.gid,
                size: this.stat.size,
                mtime: this.noMtime ? null : this.mtime || this.stat.mtime,
                type: this.type,
                uname: this.portable ? null : this.stat.uid === this.myuid ? this.myuser : "",
                atime: this.portable ? null : this.stat.atime,
                ctime: this.portable ? null : this.stat.ctime
            }), this.header.encode() && !this.noPax && super.write(new i({
                atime: this.portable ? null : this.header.atime,
                ctime: this.portable ? null : this.header.ctime,
                gid: this.portable ? null : this.header.gid,
                mtime: this.noMtime ? null : this.mtime || this.header.mtime,
                path: this[N](this.path),
                linkpath: "Link" === this.type ? this[N](this.linkpath) : this.linkpath,
                size: this.header.size,
                uid: this.portable ? null : this.header.uid,
                uname: this.portable ? null : this.header.uname,
                dev: this.portable ? null : this.stat.dev,
                ino: this.portable ? null : this.stat.ino,
                nlink: this.portable ? null : this.stat.nlink
            }).encode()), super.write(this.header.block);
        }
        [p]() {
            "/" !== this.path.slice(-1) && (this.path += "/"), this.stat.size = 0, this[m](), 
            this.end();
        }
        [f]() {
            a.readlink(this.absolute, (e, t) => {
                if (e) return this.emit("error", e);
                this[b](t);
            });
        }
        [b](e) {
            this.linkpath = l(e), this[m](), this.end();
        }
        [_](e) {
            this.type = "Link", this.linkpath = l(s.relative(this.cwd, e)), this.stat.size = 0, 
            this[m](), this.end();
        }
        [h]() {
            if (this.stat.nlink > 1) {
                const e = this.stat.dev + ":" + this.stat.ino;
                if (this.linkCache.has(e)) {
                    const t = this.linkCache.get(e);
                    if (0 === t.indexOf(this.cwd)) return this[_](t);
                }
                this.linkCache.set(e, this.absolute);
            }
            if (this[m](), 0 === this.stat.size) return this.end();
            this[w]();
        }
        [w]() {
            a.open(this.absolute, "r", (e, t) => {
                if (e) return this.emit("error", e);
                this[S](t);
            });
        }
        [S](e) {
            if (this.fd = e, this[I]) return this[T]();
            this.blockLen = 512 * Math.ceil(this.stat.size / 512), this.blockRemain = this.blockLen;
            const t = Math.min(this.blockLen, this.maxReadSize);
            this.buf = Buffer.allocUnsafe(t), this.offset = 0, this.pos = 0, this.remain = this.stat.size, 
            this.length = this.buf.length, this[g]();
        }
        [g]() {
            const {fd: e, buf: t, offset: n, length: r, pos: i} = this;
            a.read(e, t, n, r, i, (e, t) => {
                if (e) return this[T](() => this.emit("error", e));
                this[E](t);
            });
        }
        [T](e) {
            a.close(this.fd, e);
        }
        [E](e) {
            if (e <= 0 && this.remain > 0) {
                const e = new Error("encountered unexpected EOF");
                return e.path = this.absolute, e.syscall = "read", e.code = "EOF", this[T](() => this.emit("error", e));
            }
            if (e > this.remain) {
                const e = new Error("did not encounter expected EOF");
                return e.path = this.absolute, e.syscall = "read", e.code = "EOF", this[T](() => this.emit("error", e));
            }
            if (e === this.remain) for (let t = e; t < this.length && e < this.blockRemain; t++) this.buf[t + this.offset] = 0, 
            e++, this.remain++;
            const t = 0 === this.offset && e === this.buf.length ? this.buf : this.buf.slice(this.offset, this.offset + e);
            this.write(t) ? this[C]() : this[O](() => this[C]());
        }
        [O](e) {
            this.once("drain", e);
        }
        write(e) {
            if (this.blockRemain < e.length) {
                const e = new Error("writing more data than expected");
                return e.path = this.absolute, this.emit("error", e);
            }
            return this.remain -= e.length, this.blockRemain -= e.length, this.pos += e.length, 
            this.offset += e.length, super.write(e);
        }
        [C]() {
            if (!this.remain) return this.blockRemain && super.write(Buffer.alloc(this.blockRemain)), 
            this[T](e => e ? this.emit("error", e) : this.end());
            this.offset >= this.length && (this.buf = Buffer.allocUnsafe(Math.min(this.blockRemain, this.buf.length)), 
            this.offset = 0), this.length = this.buf.length - this.offset, this[g]();
        }
    });
    const P = R(class extends r {
        constructor(e, t) {
            super(t = t || {}), this.preservePaths = !!t.preservePaths, this.portable = !!t.portable, 
            this.strict = !!t.strict, this.noPax = !!t.noPax, this.noMtime = !!t.noMtime, this.readEntry = e, 
            this.type = e.type, "Directory" === this.type && this.portable && (this.noMtime = !0), 
            this.prefix = t.prefix || null, this.path = l(e.path), this.mode = this[A](e.mode), 
            this.uid = this.portable ? null : e.uid, this.gid = this.portable ? null : e.gid, 
            this.uname = this.portable ? null : e.uname, this.gname = this.portable ? null : e.gname, 
            this.size = e.size, this.mtime = this.noMtime ? null : t.mtime || e.mtime, this.atime = this.portable ? null : e.atime, 
            this.ctime = this.portable ? null : e.ctime, this.linkpath = l(e.linkpath), "function" == typeof t.onwarn && this.on("warn", t.onwarn);
            let n = !1;
            if (!this.preservePaths) {
                const [e, t] = L(this.path);
                e && (this.path = t, n = e);
            }
            this.remain = e.size, this.blockRemain = e.startBlockSize, this.header = new o({
                path: this[N](this.path),
                linkpath: "Link" === this.type ? this[N](this.linkpath) : this.linkpath,
                mode: this.mode,
                uid: this.portable ? null : this.uid,
                gid: this.portable ? null : this.gid,
                size: this.size,
                mtime: this.noMtime ? null : this.mtime,
                type: this.type,
                uname: this.portable ? null : this.uname,
                atime: this.portable ? null : this.atime,
                ctime: this.portable ? null : this.ctime
            }), n && this.warn("TAR_ENTRY_INFO", `stripping ${n} from absolute path`, {
                entry: this,
                path: n + this.path
            }), this.header.encode() && !this.noPax && super.write(new i({
                atime: this.portable ? null : this.atime,
                ctime: this.portable ? null : this.ctime,
                gid: this.portable ? null : this.gid,
                mtime: this.noMtime ? null : this.mtime,
                path: this[N](this.path),
                linkpath: "Link" === this.type ? this[N](this.linkpath) : this.linkpath,
                size: this.size,
                uid: this.portable ? null : this.uid,
                uname: this.portable ? null : this.uname,
                dev: this.portable ? null : this.readEntry.dev,
                ino: this.portable ? null : this.readEntry.ino,
                nlink: this.portable ? null : this.readEntry.nlink
            }).encode()), super.write(this.header.block), e.pipe(this);
        }
        [N](e) {
            return u(e, this.prefix);
        }
        [A](e) {
            return k(e, "Directory" === this.type, this.portable);
        }
        write(e) {
            const t = e.length;
            if (t > this.blockRemain) throw new Error("writing more to entry than is appropriate");
            return this.blockRemain -= t, super.write(e);
        }
        end() {
            return this.blockRemain && super.write(Buffer.alloc(this.blockRemain)), super.end();
        }
    });
    M.Sync = class extends M {
        [v]() {
            this[y](a.lstatSync(this.absolute));
        }
        [f]() {
            this[b](a.readlinkSync(this.absolute));
        }
        [w]() {
            this[S](a.openSync(this.absolute, "r"));
        }
        [g]() {
            let e = !0;
            try {
                const {fd: t, buf: n, offset: r, length: i, pos: o} = this, s = a.readSync(t, n, r, i, o);
                this[E](s), e = !1;
            } finally {
                if (e) try {
                    this[T](() => {});
                } catch (e) {}
            }
        }
        [O](e) {
            e();
        }
        [T](e) {
            a.closeSync(this.fd), e();
        }
    }, M.Tar = P;
    const x = e => e.isFile() ? "File" : e.isDirectory() ? "Directory" : e.isSymbolicLink() ? "SymbolicLink" : "Unsupported";
    e.exports = M;
}
