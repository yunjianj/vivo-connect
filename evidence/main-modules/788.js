// analysis/pretty/main.js:72045; webpack module 788
function(e, t, n) {
    "use strict";
    const r = n(44), i = n(47).Buffer, o = n(30), a = t.constants = n(1679), s = n(1680), l = i.concat, c = Symbol("_superWrite");
    class u extends Error {
        constructor(e) {
            super("zlib: " + e.message), this.code = e.code, this.errno = e.errno, this.code || (this.code = "ZLIB_ERROR"), 
            this.message = "zlib: " + e.message, Error.captureStackTrace(this, this.constructor);
        }
        get name() {
            return "ZlibError";
        }
    }
    const d = Symbol("opts"), h = Symbol("flushFlag"), p = Symbol("finishFlushFlag"), f = Symbol("fullFlushFlag"), _ = Symbol("handle"), m = Symbol("onError"), g = Symbol("sawError"), v = Symbol("level"), y = Symbol("strategy"), E = Symbol("ended");
    Symbol("_defaultFullFlush");
    class b extends s {
        constructor(e, t) {
            if (!e || "object" != typeof e) throw new TypeError("invalid options for ZlibBase constructor");
            super(e), this[g] = !1, this[E] = !1, this[d] = e, this[h] = e.flush, this[p] = e.finishFlush;
            try {
                this[_] = new o[t](e);
            } catch (e) {
                throw new u(e);
            }
            this[m] = e => {
                this[g] || (this[g] = !0, this.close(), this.emit("error", e));
            }, this[_].on("error", e => this[m](new u(e))), this.once("end", () => this.close);
        }
        close() {
            this[_] && (this[_].close(), this[_] = null, this.emit("close"));
        }
        reset() {
            if (!this[g]) return r(this[_], "zlib binding closed"), this[_].reset();
        }
        flush(e) {
            this.ended || ("number" != typeof e && (e = this[f]), this.write(Object.assign(i.alloc(0), {
                [h]: e
            })));
        }
        end(e, t, n) {
            return e && this.write(e, t), this.flush(this[p]), this[E] = !0, super.end(null, null, n);
        }
        get ended() {
            return this[E];
        }
        write(e, t, n) {
            if ("function" == typeof t && (n = t, t = "utf8"), "string" == typeof e && (e = i.from(e, t)), 
            this[g]) return;
            r(this[_], "zlib binding closed");
            const o = this[_]._handle, a = o.close;
            o.close = () => {};
            const s = this[_].close;
            let d, p;
            this[_].close = () => {}, i.concat = e => e;
            try {
                const t = "number" == typeof e[h] ? e[h] : this[h];
                d = this[_]._processChunk(e, t), i.concat = l;
            } catch (e) {
                i.concat = l, this[m](new u(e));
            } finally {
                this[_] && (this[_]._handle = o, o.close = a, this[_].close = s, this[_].removeAllListeners("error"));
            }
            if (this[_] && this[_].on("error", e => this[m](new u(e))), d) if (Array.isArray(d) && d.length > 0) {
                p = this[c](i.from(d[0]));
                for (let e = 1; e < d.length; e++) p = this[c](d[e]);
            } else p = this[c](i.from(d));
            return n && n(), p;
        }
        [c](e) {
            return super.write(e);
        }
    }
    class w extends b {
        constructor(e, t) {
            (e = e || {}).flush = e.flush || a.Z_NO_FLUSH, e.finishFlush = e.finishFlush || a.Z_FINISH, 
            super(e, t), this[f] = a.Z_FULL_FLUSH, this[v] = e.level, this[y] = e.strategy;
        }
        params(e, t) {
            if (!this[g]) {
                if (!this[_]) throw new Error("cannot switch params when binding is closed");
                if (!this[_].params) throw new Error("not supported in this implementation");
                if (this[v] !== e || this[y] !== t) {
                    this.flush(a.Z_SYNC_FLUSH), r(this[_], "zlib binding closed");
                    const n = this[_].flush;
                    this[_].flush = (e, t) => {
                        this.flush(e), t();
                    };
                    try {
                        this[_].params(e, t);
                    } finally {
                        this[_].flush = n;
                    }
                    this[_] && (this[v] = e, this[y] = t);
                }
            }
        }
    }
    const S = Symbol("_portable");
    class T extends b {
        constructor(e, t) {
            (e = e || {}).flush = e.flush || a.BROTLI_OPERATION_PROCESS, e.finishFlush = e.finishFlush || a.BROTLI_OPERATION_FINISH, 
            super(e, t), this[f] = a.BROTLI_OPERATION_FLUSH;
        }
    }
    class A extends T {
        constructor(e) {
            super(e, "BrotliCompress");
        }
    }
    class O extends T {
        constructor(e) {
            super(e, "BrotliDecompress");
        }
    }
    t.Deflate = class extends w {
        constructor(e) {
            super(e, "Deflate");
        }
    }, t.Inflate = class extends w {
        constructor(e) {
            super(e, "Inflate");
        }
    }, t.Gzip = class extends w {
        constructor(e) {
            super(e, "Gzip"), this[S] = e && !!e.portable;
        }
        [c](e) {
            return this[S] ? (this[S] = !1, e[9] = 255, super[c](e)) : super[c](e);
        }
    }, t.Gunzip = class extends w {
        constructor(e) {
            super(e, "Gunzip");
        }
    }, t.DeflateRaw = class extends w {
        constructor(e) {
            super(e, "DeflateRaw");
        }
    }, t.InflateRaw = class extends w {
        constructor(e) {
            super(e, "InflateRaw");
        }
    }, t.Unzip = class extends w {
        constructor(e) {
            super(e, "Unzip");
        }
    }, "function" == typeof o.BrotliCompress ? (t.BrotliCompress = A, t.BrotliDecompress = O) : t.BrotliCompress = t.BrotliDecompress = class {
        constructor() {
            throw new Error("Brotli is not supported in this version of Node.js");
        }
    };
}
