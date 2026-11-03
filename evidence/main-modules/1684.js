// analysis/pretty/main.js:128842; webpack module 1684
function(e, t, n) {
    "use strict";
    const r = "object" == typeof process && process ? process : {
        stdout: null,
        stderr: null
    }, i = n(12), o = n(9), a = n(83).StringDecoder, s = Symbol("EOF"), l = Symbol("maybeEmitEnd"), c = Symbol("emittedEnd"), u = Symbol("emittingEnd"), d = Symbol("emittedError"), h = Symbol("closed"), p = Symbol("read"), f = Symbol("flush"), _ = Symbol("flushChunk"), m = Symbol("encoding"), g = Symbol("decoder"), v = Symbol("flowing"), y = Symbol("paused"), E = Symbol("resume"), b = Symbol("bufferLength"), w = Symbol("bufferPush"), S = Symbol("bufferShift"), T = Symbol("objectMode"), A = Symbol("destroyed"), O = Symbol("emitData"), C = Symbol("emitEnd"), N = Symbol("emitEnd2"), I = Symbol("async"), R = e => Promise.resolve().then(e), D = "1" !== global._MP_NO_ITERATOR_SYMBOLS_, L = D && Symbol.asyncIterator || Symbol("asyncIterator not implemented"), k = D && Symbol.iterator || Symbol("iterator not implemented");
    class M {
        constructor(e, t, n) {
            this.src = e, this.dest = t, this.opts = n, this.ondrain = () => e[E](), t.on("drain", this.ondrain);
        }
        unpipe() {
            this.dest.removeListener("drain", this.ondrain);
        }
        proxyErrors() {}
        end() {
            this.unpipe(), this.opts.end && this.dest.end();
        }
    }
    class P extends M {
        unpipe() {
            this.src.removeListener("error", this.proxyErrors), super.unpipe();
        }
        constructor(e, t, n) {
            super(e, t, n), this.proxyErrors = e => t.emit("error", e), e.on("error", this.proxyErrors);
        }
    }
    e.exports = class e extends o {
        constructor(e) {
            super(), this[v] = !1, this[y] = !1, this.pipes = [], this.buffer = [], this[T] = e && e.objectMode || !1, 
            this[T] ? this[m] = null : this[m] = e && e.encoding || null, "buffer" === this[m] && (this[m] = null), 
            this[I] = e && !!e.async || !1, this[g] = this[m] ? new a(this[m]) : null, this[s] = !1, 
            this[c] = !1, this[u] = !1, this[h] = !1, this[d] = null, this.writable = !0, this.readable = !0, 
            this[b] = 0, this[A] = !1;
        }
        get bufferLength() {
            return this[b];
        }
        get encoding() {
            return this[m];
        }
        set encoding(e) {
            if (this[T]) throw new Error("cannot set encoding in objectMode");
            if (this[m] && e !== this[m] && (this[g] && this[g].lastNeed || this[b])) throw new Error("cannot change encoding");
            this[m] !== e && (this[g] = e ? new a(e) : null, this.buffer.length && (this.buffer = this.buffer.map(e => this[g].write(e)))), 
            this[m] = e;
        }
        setEncoding(e) {
            this.encoding = e;
        }
        get objectMode() {
            return this[T];
        }
        set objectMode(e) {
            this[T] = this[T] || !!e;
        }
        get async() {
            return this[I];
        }
        set async(e) {
            this[I] = this[I] || !!e;
        }
        write(e, t, n) {
            if (this[s]) throw new Error("write after end");
            if (this[A]) return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), {
                code: "ERR_STREAM_DESTROYED"
            })), !0;
            "function" == typeof t && (n = t, t = "utf8"), t || (t = "utf8");
            const r = this[I] ? R : e => e();
            var i;
            return this[T] || Buffer.isBuffer(e) || (i = e, !Buffer.isBuffer(i) && ArrayBuffer.isView(i) ? e = Buffer.from(e.buffer, e.byteOffset, e.byteLength) : (e => e instanceof ArrayBuffer || "object" == typeof e && e.constructor && "ArrayBuffer" === e.constructor.name && e.byteLength >= 0)(e) ? e = Buffer.from(e) : "string" != typeof e && (this.objectMode = !0)), 
            this[T] ? (this.flowing && 0 !== this[b] && this[f](!0), this.flowing ? this.emit("data", e) : this[w](e), 
            0 !== this[b] && this.emit("readable"), n && r(n), this.flowing) : e.length ? ("string" != typeof e || t === this[m] && !this[g].lastNeed || (e = Buffer.from(e, t)), 
            Buffer.isBuffer(e) && this[m] && (e = this[g].write(e)), this.flowing && 0 !== this[b] && this[f](!0), 
            this.flowing ? this.emit("data", e) : this[w](e), 0 !== this[b] && this.emit("readable"), 
            n && r(n), this.flowing) : (0 !== this[b] && this.emit("readable"), n && r(n), this.flowing);
        }
        read(e) {
            if (this[A]) return null;
            if (0 === this[b] || 0 === e || e > this[b]) return this[l](), null;
            this[T] && (e = null), this.buffer.length > 1 && !this[T] && (this.encoding ? this.buffer = [ this.buffer.join("") ] : this.buffer = [ Buffer.concat(this.buffer, this[b]) ]);
            const t = this[p](e || null, this.buffer[0]);
            return this[l](), t;
        }
        [p](e, t) {
            return e === t.length || null === e ? this[S]() : (this.buffer[0] = t.slice(e), 
            t = t.slice(0, e), this[b] -= e), this.emit("data", t), this.buffer.length || this[s] || this.emit("drain"), 
            t;
        }
        end(e, t, n) {
            return "function" == typeof e && (n = e, e = null), "function" == typeof t && (n = t, 
            t = "utf8"), e && this.write(e, t), n && this.once("end", n), this[s] = !0, this.writable = !1, 
            !this.flowing && this[y] || this[l](), this;
        }
        [E]() {
            this[A] || (this[y] = !1, this[v] = !0, this.emit("resume"), this.buffer.length ? this[f]() : this[s] ? this[l]() : this.emit("drain"));
        }
        resume() {
            return this[E]();
        }
        pause() {
            this[v] = !1, this[y] = !0;
        }
        get destroyed() {
            return this[A];
        }
        get flowing() {
            return this[v];
        }
        get paused() {
            return this[y];
        }
        [w](e) {
            this[T] ? this[b] += 1 : this[b] += e.length, this.buffer.push(e);
        }
        [S]() {
            return this.buffer.length && (this[T] ? this[b] -= 1 : this[b] -= this.buffer[0].length), 
            this.buffer.shift();
        }
        [f](e) {
            do {} while (this[_](this[S]()));
            e || this.buffer.length || this[s] || this.emit("drain");
        }
        [_](e) {
            return !!e && (this.emit("data", e), this.flowing);
        }
        pipe(e, t) {
            if (this[A]) return;
            const n = this[c];
            return t = t || {}, e === r.stdout || e === r.stderr ? t.end = !1 : t.end = !1 !== t.end, 
            t.proxyErrors = !!t.proxyErrors, n ? t.end && e.end() : (this.pipes.push(t.proxyErrors ? new P(this, e, t) : new M(this, e, t)), 
            this[I] ? R(() => this[E]()) : this[E]()), e;
        }
        unpipe(e) {
            const t = this.pipes.find(t => t.dest === e);
            t && (this.pipes.splice(this.pipes.indexOf(t), 1), t.unpipe());
        }
        addListener(e, t) {
            return this.on(e, t);
        }
        on(e, t) {
            const n = super.on(e, t);
            return "data" !== e || this.pipes.length || this.flowing ? "readable" === e && 0 !== this[b] ? super.emit("readable") : (e => "end" === e || "finish" === e || "prefinish" === e)(e) && this[c] ? (super.emit(e), 
            this.removeAllListeners(e)) : "error" === e && this[d] && (this[I] ? R(() => t.call(this, this[d])) : t.call(this, this[d])) : this[E](), 
            n;
        }
        get emittedEnd() {
            return this[c];
        }
        [l]() {
            this[u] || this[c] || this[A] || 0 !== this.buffer.length || !this[s] || (this[u] = !0, 
            this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[h] && this.emit("close"), 
            this[u] = !1);
        }
        emit(e, t, ...n) {
            if ("error" !== e && "close" !== e && e !== A && this[A]) return;
            if ("data" === e) return !!t && (this[I] ? R(() => this[O](t)) : this[O](t));
            if ("end" === e) return this[C]();
            if ("close" === e) {
                if (this[h] = !0, !this[c] && !this[A]) return;
                const e = super.emit("close");
                return this.removeAllListeners("close"), e;
            }
            if ("error" === e) {
                this[d] = t;
                const e = super.emit("error", t);
                return this[l](), e;
            }
            if ("resume" === e) {
                const e = super.emit("resume");
                return this[l](), e;
            }
            if ("finish" === e || "prefinish" === e) {
                const t = super.emit(e);
                return this.removeAllListeners(e), t;
            }
            const r = super.emit(e, t, ...n);
            return this[l](), r;
        }
        [O](e) {
            for (const t of this.pipes) !1 === t.dest.write(e) && this.pause();
            const t = super.emit("data", e);
            return this[l](), t;
        }
        [C]() {
            this[c] || (this[c] = !0, this.readable = !1, this[I] ? R(() => this[N]()) : this[N]());
        }
        [N]() {
            if (this[g]) {
                const e = this[g].end();
                if (e) {
                    for (const t of this.pipes) t.dest.write(e);
                    super.emit("data", e);
                }
            }
            for (const e of this.pipes) e.end();
            const e = super.emit("end");
            return this.removeAllListeners("end"), e;
        }
        collect() {
            const e = [];
            this[T] || (e.dataLength = 0);
            const t = this.promise();
            return this.on("data", t => {
                e.push(t), this[T] || (e.dataLength += t.length);
            }), t.then(() => e);
        }
        concat() {
            return this[T] ? Promise.reject(new Error("cannot concat in objectMode")) : this.collect().then(e => this[T] ? Promise.reject(new Error("cannot concat in objectMode")) : this[m] ? e.join("") : Buffer.concat(e, e.dataLength));
        }
        promise() {
            return new Promise((e, t) => {
                this.on(A, () => t(new Error("stream destroyed"))), this.on("error", e => t(e)), 
                this.on("end", () => e());
            });
        }
        [L]() {
            return {
                next: () => {
                    const e = this.read();
                    if (null !== e) return Promise.resolve({
                        done: !1,
                        value: e
                    });
                    if (this[s]) return Promise.resolve({
                        done: !0
                    });
                    let t = null, n = null;
                    const r = e => {
                        this.removeListener("data", i), this.removeListener("end", o), n(e);
                    }, i = e => {
                        this.removeListener("error", r), this.removeListener("end", o), this.pause(), t({
                            value: e,
                            done: !!this[s]
                        });
                    }, o = () => {
                        this.removeListener("error", r), this.removeListener("data", i), t({
                            done: !0
                        });
                    }, a = () => r(new Error("stream destroyed"));
                    return new Promise((e, s) => {
                        n = s, t = e, this.once(A, a), this.once("error", r), this.once("end", o), this.once("data", i);
                    });
                }
            };
        }
        [k]() {
            return {
                next: () => {
                    const e = this.read();
                    return {
                        value: e,
                        done: null === e
                    };
                }
            };
        }
        destroy(e) {
            return this[A] ? (e ? this.emit("error", e) : this.emit(A), this) : (this[A] = !0, 
            this.buffer.length = 0, this[b] = 0, "function" != typeof this.close || this[h] || this.close(), 
            e ? this.emit("error", e) : this.emit(A), this);
        }
        static isStream(t) {
            return !!t && (t instanceof e || t instanceof o || t instanceof i && ("function" == typeof t.pipe || "function" == typeof t.write && "function" == typeof t.end));
        }
    };
}
