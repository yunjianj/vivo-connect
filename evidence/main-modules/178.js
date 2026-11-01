// analysis/pretty/main.js:24038; webpack module 178
function(e, t, n) {
    "use strict";
    const r = n(1684), i = n(12).EventEmitter, o = n(4);
    let a = o.writev;
    if (!a) {
        const e = process.binding("fs"), t = e.FSReqWrap || e.FSReqCallback;
        a = (n, r, i, o) => {
            const a = new t;
            a.oncomplete = (e, t) => o(e, t, r), e.writeBuffers(n, r, i, a);
        };
    }
    const s = Symbol("_autoClose"), l = Symbol("_close"), c = Symbol("_ended"), u = Symbol("_fd"), d = Symbol("_finished"), h = Symbol("_flags"), p = Symbol("_flush"), f = Symbol("_handleChunk"), _ = Symbol("_makeBuf"), m = Symbol("_mode"), g = Symbol("_needDrain"), v = Symbol("_onerror"), y = Symbol("_onopen"), E = Symbol("_onread"), b = Symbol("_onwrite"), w = Symbol("_open"), S = Symbol("_path"), T = Symbol("_pos"), A = Symbol("_queue"), O = Symbol("_read"), C = Symbol("_readSize"), N = Symbol("_reading"), I = Symbol("_remain"), R = Symbol("_size"), D = Symbol("_write"), L = Symbol("_writing"), k = Symbol("_defaultFlag"), M = Symbol("_errored");
    class P extends r {
        constructor(e, t) {
            if (super(t = t || {}), this.readable = !0, this.writable = !1, "string" != typeof e) throw new TypeError("path must be a string");
            this[M] = !1, this[u] = "number" == typeof t.fd ? t.fd : null, this[S] = e, this[C] = t.readSize || 16777216, 
            this[N] = !1, this[R] = "number" == typeof t.size ? t.size : 1 / 0, this[I] = this[R], 
            this[s] = "boolean" != typeof t.autoClose || t.autoClose, "number" == typeof this[u] ? this[O]() : this[w]();
        }
        get fd() {
            return this[u];
        }
        get path() {
            return this[S];
        }
        write() {
            throw new TypeError("this is a readable stream");
        }
        end() {
            throw new TypeError("this is a readable stream");
        }
        [w]() {
            o.open(this[S], "r", (e, t) => this[y](e, t));
        }
        [y](e, t) {
            e ? this[v](e) : (this[u] = t, this.emit("open", t), this[O]());
        }
        [_]() {
            return Buffer.allocUnsafe(Math.min(this[C], this[I]));
        }
        [O]() {
            if (!this[N]) {
                this[N] = !0;
                const e = this[_]();
                if (0 === e.length) return process.nextTick(() => this[E](null, 0, e));
                o.read(this[u], e, 0, e.length, null, (e, t, n) => this[E](e, t, n));
            }
        }
        [E](e, t, n) {
            this[N] = !1, e ? this[v](e) : this[f](t, n) && this[O]();
        }
        [l]() {
            if (this[s] && "number" == typeof this[u]) {
                const e = this[u];
                this[u] = null, o.close(e, e => e ? this.emit("error", e) : this.emit("close"));
            }
        }
        [v](e) {
            this[N] = !0, this[l](), this.emit("error", e);
        }
        [f](e, t) {
            let n = !1;
            return this[I] -= e, e > 0 && (n = super.write(e < t.length ? t.slice(0, e) : t)), 
            (0 === e || this[I] <= 0) && (n = !1, this[l](), super.end()), n;
        }
        emit(e, t) {
            switch (e) {
              case "prefinish":
              case "finish":
                break;

              case "drain":
                "number" == typeof this[u] && this[O]();
                break;

              case "error":
                if (this[M]) return;
                return this[M] = !0, super.emit(e, t);

              default:
                return super.emit(e, t);
            }
        }
    }
    class x extends i {
        constructor(e, t) {
            super(t = t || {}), this.readable = !1, this.writable = !0, this[M] = !1, this[L] = !1, 
            this[c] = !1, this[g] = !1, this[A] = [], this[S] = e, this[u] = "number" == typeof t.fd ? t.fd : null, 
            this[m] = void 0 === t.mode ? 438 : t.mode, this[T] = "number" == typeof t.start ? t.start : null, 
            this[s] = "boolean" != typeof t.autoClose || t.autoClose;
            const n = null !== this[T] ? "r+" : "w";
            this[k] = void 0 === t.flags, this[h] = this[k] ? n : t.flags, null === this[u] && this[w]();
        }
        emit(e, t) {
            if ("error" === e) {
                if (this[M]) return;
                this[M] = !0;
            }
            return super.emit(e, t);
        }
        get fd() {
            return this[u];
        }
        get path() {
            return this[S];
        }
        [v](e) {
            this[l](), this[L] = !0, this.emit("error", e);
        }
        [w]() {
            o.open(this[S], this[h], this[m], (e, t) => this[y](e, t));
        }
        [y](e, t) {
            this[k] && "r+" === this[h] && e && "ENOENT" === e.code ? (this[h] = "w", this[w]()) : e ? this[v](e) : (this[u] = t, 
            this.emit("open", t), this[p]());
        }
        end(e, t) {
            return e && this.write(e, t), this[c] = !0, this[L] || this[A].length || "number" != typeof this[u] || this[b](null, 0), 
            this;
        }
        write(e, t) {
            return "string" == typeof e && (e = Buffer.from(e, t)), this[c] ? (this.emit("error", new Error("write() after end()")), 
            !1) : null === this[u] || this[L] || this[A].length ? (this[A].push(e), this[g] = !0, 
            !1) : (this[L] = !0, this[D](e), !0);
        }
        [D](e) {
            o.write(this[u], e, 0, e.length, this[T], (e, t) => this[b](e, t));
        }
        [b](e, t) {
            e ? this[v](e) : (null !== this[T] && (this[T] += t), this[A].length ? this[p]() : (this[L] = !1, 
            this[c] && !this[d] ? (this[d] = !0, this[l](), this.emit("finish")) : this[g] && (this[g] = !1, 
            this.emit("drain"))));
        }
        [p]() {
            if (0 === this[A].length) this[c] && this[b](null, 0); else if (1 === this[A].length) this[D](this[A].pop()); else {
                const e = this[A];
                this[A] = [], a(this[u], e, this[T], (e, t) => this[b](e, t));
            }
        }
        [l]() {
            if (this[s] && "number" == typeof this[u]) {
                const e = this[u];
                this[u] = null, o.close(e, e => e ? this.emit("error", e) : this.emit("close"));
            }
        }
    }
    t.ReadStream = P, t.ReadStreamSync = class extends P {
        [w]() {
            let e = !0;
            try {
                this[y](null, o.openSync(this[S], "r")), e = !1;
            } finally {
                e && this[l]();
            }
        }
        [O]() {
            let e = !0;
            try {
                if (!this[N]) {
                    for (this[N] = !0; ;) {
                        const e = this[_](), t = 0 === e.length ? 0 : o.readSync(this[u], e, 0, e.length, null);
                        if (!this[f](t, e)) break;
                    }
                    this[N] = !1;
                }
                e = !1;
            } finally {
                e && this[l]();
            }
        }
        [l]() {
            if (this[s] && "number" == typeof this[u]) {
                const e = this[u];
                this[u] = null, o.closeSync(e), this.emit("close");
            }
        }
    }, t.WriteStream = x, t.WriteStreamSync = class extends x {
        [w]() {
            let e;
            if (this[k] && "r+" === this[h]) try {
                e = o.openSync(this[S], this[h], this[m]);
            } catch (e) {
                if ("ENOENT" === e.code) return this[h] = "w", this[w]();
                throw e;
            } else e = o.openSync(this[S], this[h], this[m]);
            this[y](null, e);
        }
        [l]() {
            if (this[s] && "number" == typeof this[u]) {
                const e = this[u];
                this[u] = null, o.closeSync(e), this.emit("close");
            }
        }
        [D](e) {
            let t = !0;
            try {
                this[b](null, o.writeSync(this[u], e, 0, e.length, this[T])), t = !1;
            } finally {
                if (t) try {
                    this[l]();
                } catch (e) {}
            }
        }
    };
}
