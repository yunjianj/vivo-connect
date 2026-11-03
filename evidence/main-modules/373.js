// analysis/pretty/main.js:40824; webpack module 373
function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "Minipass", function() {
        return $;
    });
    var r = n(12), i = n(9), o = n(83);
    const a = "object" == typeof process && process ? process : {
        stdout: null,
        stderr: null
    }, s = o.StringDecoder, l = Symbol("EOF"), c = Symbol("maybeEmitEnd"), u = Symbol("emittedEnd"), d = Symbol("emittingEnd"), h = Symbol("emittedError"), p = Symbol("closed"), f = Symbol("read"), _ = Symbol("flush"), m = Symbol("flushChunk"), g = Symbol("encoding"), v = Symbol("decoder"), y = Symbol("flowing"), E = Symbol("paused"), b = Symbol("resume"), w = Symbol("buffer"), S = Symbol("pipes"), T = Symbol("bufferLength"), A = Symbol("bufferPush"), O = Symbol("bufferShift"), C = Symbol("objectMode"), N = Symbol("destroyed"), I = Symbol("error"), R = Symbol("emitData"), D = Symbol("emitEnd"), L = Symbol("emitEnd2"), k = Symbol("async"), M = Symbol("abort"), P = Symbol("aborted"), x = Symbol("signal"), F = e => Promise.resolve().then(e), j = "1" !== global._MP_NO_ITERATOR_SYMBOLS_, U = j && Symbol.asyncIterator || Symbol("asyncIterator not implemented"), W = j && Symbol.iterator || Symbol("iterator not implemented");
    class B {
        constructor(e, t, n) {
            this.src = e, this.dest = t, this.opts = n, this.ondrain = () => e[b](), t.on("drain", this.ondrain);
        }
        unpipe() {
            this.dest.removeListener("drain", this.ondrain);
        }
        proxyErrors() {}
        end() {
            this.unpipe(), this.opts.end && this.dest.end();
        }
    }
    class H extends B {
        unpipe() {
            this.src.removeListener("error", this.proxyErrors), super.unpipe();
        }
        constructor(e, t, n) {
            super(e, t, n), this.proxyErrors = e => t.emit("error", e), e.on("error", this.proxyErrors);
        }
    }
    class $ extends i {
        constructor(e) {
            super(), this[y] = !1, this[E] = !1, this[S] = [], this[w] = [], this[C] = e && e.objectMode || !1, 
            this[C] ? this[g] = null : this[g] = e && e.encoding || null, "buffer" === this[g] && (this[g] = null), 
            this[k] = e && !!e.async || !1, this[v] = this[g] ? new s(this[g]) : null, this[l] = !1, 
            this[u] = !1, this[d] = !1, this[p] = !1, this[h] = null, this.writable = !0, this.readable = !0, 
            this[T] = 0, this[N] = !1, e && !0 === e.debugExposeBuffer && Object.defineProperty(this, "buffer", {
                get: () => this[w]
            }), e && !0 === e.debugExposePipes && Object.defineProperty(this, "pipes", {
                get: () => this[S]
            }), this[x] = e && e.signal, this[P] = !1, this[x] && (this[x].addEventListener("abort", () => this[M]()), 
            this[x].aborted && this[M]());
        }
        get bufferLength() {
            return this[T];
        }
        get encoding() {
            return this[g];
        }
        set encoding(e) {
            if (this[C]) throw new Error("cannot set encoding in objectMode");
            if (this[g] && e !== this[g] && (this[v] && this[v].lastNeed || this[T])) throw new Error("cannot change encoding");
            this[g] !== e && (this[v] = e ? new s(e) : null, this[w].length && (this[w] = this[w].map(e => this[v].write(e)))), 
            this[g] = e;
        }
        setEncoding(e) {
            this.encoding = e;
        }
        get objectMode() {
            return this[C];
        }
        set objectMode(e) {
            this[C] = this[C] || !!e;
        }
        get async() {
            return this[k];
        }
        set async(e) {
            this[k] = this[k] || !!e;
        }
        [M]() {
            this[P] = !0, this.emit("abort", this[x].reason), this.destroy(this[x].reason);
        }
        get aborted() {
            return this[P];
        }
        set aborted(e) {}
        write(e, t, n) {
            if (this[P]) return !1;
            if (this[l]) throw new Error("write after end");
            if (this[N]) return this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), {
                code: "ERR_STREAM_DESTROYED"
            })), !0;
            "function" == typeof t && (n = t, t = "utf8"), t || (t = "utf8");
            const r = this[k] ? F : e => e();
            var i;
            return this[C] || Buffer.isBuffer(e) || (i = e, !Buffer.isBuffer(i) && ArrayBuffer.isView(i) ? e = Buffer.from(e.buffer, e.byteOffset, e.byteLength) : (e => e instanceof ArrayBuffer || "object" == typeof e && e.constructor && "ArrayBuffer" === e.constructor.name && e.byteLength >= 0)(e) ? e = Buffer.from(e) : "string" != typeof e && (this.objectMode = !0)), 
            this[C] ? (this.flowing && 0 !== this[T] && this[_](!0), this.flowing ? this.emit("data", e) : this[A](e), 
            0 !== this[T] && this.emit("readable"), n && r(n), this.flowing) : e.length ? ("string" != typeof e || t === this[g] && !this[v].lastNeed || (e = Buffer.from(e, t)), 
            Buffer.isBuffer(e) && this[g] && (e = this[v].write(e)), this.flowing && 0 !== this[T] && this[_](!0), 
            this.flowing ? this.emit("data", e) : this[A](e), 0 !== this[T] && this.emit("readable"), 
            n && r(n), this.flowing) : (0 !== this[T] && this.emit("readable"), n && r(n), this.flowing);
        }
        read(e) {
            if (this[N]) return null;
            if (0 === this[T] || 0 === e || e > this[T]) return this[c](), null;
            this[C] && (e = null), this[w].length > 1 && !this[C] && (this.encoding ? this[w] = [ this[w].join("") ] : this[w] = [ Buffer.concat(this[w], this[T]) ]);
            const t = this[f](e || null, this[w][0]);
            return this[c](), t;
        }
        [f](e, t) {
            return e === t.length || null === e ? this[O]() : (this[w][0] = t.slice(e), t = t.slice(0, e), 
            this[T] -= e), this.emit("data", t), this[w].length || this[l] || this.emit("drain"), 
            t;
        }
        end(e, t, n) {
            return "function" == typeof e && (n = e, e = null), "function" == typeof t && (n = t, 
            t = "utf8"), e && this.write(e, t), n && this.once("end", n), this[l] = !0, this.writable = !1, 
            !this.flowing && this[E] || this[c](), this;
        }
        [b]() {
            this[N] || (this[E] = !1, this[y] = !0, this.emit("resume"), this[w].length ? this[_]() : this[l] ? this[c]() : this.emit("drain"));
        }
        resume() {
            return this[b]();
        }
        pause() {
            this[y] = !1, this[E] = !0;
        }
        get destroyed() {
            return this[N];
        }
        get flowing() {
            return this[y];
        }
        get paused() {
            return this[E];
        }
        [A](e) {
            this[C] ? this[T] += 1 : this[T] += e.length, this[w].push(e);
        }
        [O]() {
            return this[C] ? this[T] -= 1 : this[T] -= this[w][0].length, this[w].shift();
        }
        [_](e) {
            do {} while (this[m](this[O]()) && this[w].length);
            e || this[w].length || this[l] || this.emit("drain");
        }
        [m](e) {
            return this.emit("data", e), this.flowing;
        }
        pipe(e, t) {
            if (this[N]) return;
            const n = this[u];
            return t = t || {}, e === a.stdout || e === a.stderr ? t.end = !1 : t.end = !1 !== t.end, 
            t.proxyErrors = !!t.proxyErrors, n ? t.end && e.end() : (this[S].push(t.proxyErrors ? new H(this, e, t) : new B(this, e, t)), 
            this[k] ? F(() => this[b]()) : this[b]()), e;
        }
        unpipe(e) {
            const t = this[S].find(t => t.dest === e);
            t && (this[S].splice(this[S].indexOf(t), 1), t.unpipe());
        }
        addListener(e, t) {
            return this.on(e, t);
        }
        on(e, t) {
            const n = super.on(e, t);
            return "data" !== e || this[S].length || this.flowing ? "readable" === e && 0 !== this[T] ? super.emit("readable") : (e => "end" === e || "finish" === e || "prefinish" === e)(e) && this[u] ? (super.emit(e), 
            this.removeAllListeners(e)) : "error" === e && this[h] && (this[k] ? F(() => t.call(this, this[h])) : t.call(this, this[h])) : this[b](), 
            n;
        }
        get emittedEnd() {
            return this[u];
        }
        [c]() {
            this[d] || this[u] || this[N] || 0 !== this[w].length || !this[l] || (this[d] = !0, 
            this.emit("end"), this.emit("prefinish"), this.emit("finish"), this[p] && this.emit("close"), 
            this[d] = !1);
        }
        emit(e, t, ...n) {
            if ("error" !== e && "close" !== e && e !== N && this[N]) return;
            if ("data" === e) return !(!this[C] && !t) && (this[k] ? F(() => this[R](t)) : this[R](t));
            if ("end" === e) return this[D]();
            if ("close" === e) {
                if (this[p] = !0, !this[u] && !this[N]) return;
                const e = super.emit("close");
                return this.removeAllListeners("close"), e;
            }
            if ("error" === e) {
                this[h] = t, super.emit(I, t);
                const e = !(this[x] && !this.listeners("error").length) && super.emit("error", t);
                return this[c](), e;
            }
            if ("resume" === e) {
                const e = super.emit("resume");
                return this[c](), e;
            }
            if ("finish" === e || "prefinish" === e) {
                const t = super.emit(e);
                return this.removeAllListeners(e), t;
            }
            const r = super.emit(e, t, ...n);
            return this[c](), r;
        }
        [R](e) {
            for (const t of this[S]) !1 === t.dest.write(e) && this.pause();
            const t = super.emit("data", e);
            return this[c](), t;
        }
        [D]() {
            this[u] || (this[u] = !0, this.readable = !1, this[k] ? F(() => this[L]()) : this[L]());
        }
        [L]() {
            if (this[v]) {
                const e = this[v].end();
                if (e) {
                    for (const t of this[S]) t.dest.write(e);
                    super.emit("data", e);
                }
            }
            for (const e of this[S]) e.end();
            const e = super.emit("end");
            return this.removeAllListeners("end"), e;
        }
        collect() {
            const e = [];
            this[C] || (e.dataLength = 0);
            const t = this.promise();
            return this.on("data", t => {
                e.push(t), this[C] || (e.dataLength += t.length);
            }), t.then(() => e);
        }
        concat() {
            return this[C] ? Promise.reject(new Error("cannot concat in objectMode")) : this.collect().then(e => this[C] ? Promise.reject(new Error("cannot concat in objectMode")) : this[g] ? e.join("") : Buffer.concat(e, e.dataLength));
        }
        promise() {
            return new Promise((e, t) => {
                this.on(N, () => t(new Error("stream destroyed"))), this.on("error", e => t(e)), 
                this.on("end", () => e());
            });
        }
        [U]() {
            let e = !1;
            const t = () => (this.pause(), e = !0, Promise.resolve({
                done: !0
            }));
            return {
                next: () => {
                    if (e) return t();
                    const n = this.read();
                    if (null !== n) return Promise.resolve({
                        done: !1,
                        value: n
                    });
                    if (this[l]) return t();
                    let r = null, i = null;
                    const o = e => {
                        this.removeListener("data", a), this.removeListener("end", s), this.removeListener(N, c), 
                        t(), i(e);
                    }, a = e => {
                        this.removeListener("error", o), this.removeListener("end", s), this.removeListener(N, c), 
                        this.pause(), r({
                            value: e,
                            done: !!this[l]
                        });
                    }, s = () => {
                        this.removeListener("error", o), this.removeListener("data", a), this.removeListener(N, c), 
                        t(), r({
                            done: !0
                        });
                    }, c = () => o(new Error("stream destroyed"));
                    return new Promise((e, t) => {
                        i = t, r = e, this.once(N, c), this.once("error", o), this.once("end", s), this.once("data", a);
                    });
                },
                throw: t,
                return: t,
                [U]() {
                    return this;
                }
            };
        }
        [W]() {
            let e = !1;
            const t = () => (this.pause(), this.removeListener(I, t), this.removeListener(N, t), 
            this.removeListener("end", t), e = !0, {
                done: !0
            });
            return this.once("end", t), this.once(I, t), this.once(N, t), {
                next: () => {
                    if (e) return t();
                    const n = this.read();
                    return null === n ? t() : {
                        value: n
                    };
                },
                throw: t,
                return: t,
                [W]() {
                    return this;
                }
            };
        }
        destroy(e) {
            return this[N] ? (e ? this.emit("error", e) : this.emit(N), this) : (this[N] = !0, 
            this[w].length = 0, this[T] = 0, "function" != typeof this.close || this[p] || this.close(), 
            e ? this.emit("error", e) : this.emit(N), this);
        }
        static isStream(e) {
            return !!e && (e instanceof $ || e instanceof i || e instanceof r && ("function" == typeof e.pipe || "function" == typeof e.write && "function" == typeof e.end));
        }
    }
}
