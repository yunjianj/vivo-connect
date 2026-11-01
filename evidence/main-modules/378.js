// analysis/pretty/main.js:41298; webpack module 378
function(e, t, n) {
    "use strict";
    const r = n(376), i = n(176), o = n(12), a = n(793), s = n(374), l = n(375), c = n(788), {nextTick: u} = n(1685), d = Buffer.from([ 31, 139 ]), h = Symbol("state"), p = Symbol("writeEntry"), f = Symbol("readEntry"), _ = Symbol("nextEntry"), m = Symbol("processEntry"), g = Symbol("extendedHeader"), v = Symbol("globalExtendedHeader"), y = Symbol("meta"), E = Symbol("emitMeta"), b = Symbol("buffer"), w = Symbol("queue"), S = Symbol("ended"), T = Symbol("emittedEnd"), A = Symbol("emit"), O = Symbol("unzip"), C = Symbol("consumeChunk"), N = Symbol("consumeChunkSub"), I = Symbol("consumeBody"), R = Symbol("consumeMeta"), D = Symbol("consumeHeader"), L = Symbol("consuming"), k = Symbol("bufferConcat"), M = Symbol("maybeEnd"), P = Symbol("writing"), x = Symbol("aborted"), F = Symbol("onDone"), j = Symbol("sawValidEntry"), U = Symbol("sawNullBlock"), W = Symbol("sawEOF"), B = Symbol("closeStream"), H = e => !0;
    e.exports = r(class extends o {
        constructor(e) {
            super(e = e || {}), this.file = e.file || "", this[j] = null, this.on(F, e => {
                "begin" !== this[h] && !1 !== this[j] || this.warn("TAR_BAD_ARCHIVE", "Unrecognized archive format");
            }), e.ondone ? this.on(F, e.ondone) : this.on(F, e => {
                this.emit("prefinish"), this.emit("finish"), this.emit("end");
            }), this.strict = !!e.strict, this.maxMetaEntrySize = e.maxMetaEntrySize || 1048576, 
            this.filter = "function" == typeof e.filter ? e.filter : H;
            const t = e.file && (e.file.endsWith(".tar.br") || e.file.endsWith(".tbr"));
            this.brotli = e.gzip || void 0 === e.brotli ? !!t && void 0 : e.brotli, this.writable = !0, 
            this.readable = !1, this[w] = new a, this[b] = null, this[f] = null, this[p] = null, 
            this[h] = "begin", this[y] = "", this[g] = null, this[v] = null, this[S] = !1, this[O] = null, 
            this[x] = !1, this[U] = !1, this[W] = !1, this.on("end", () => this[B]()), "function" == typeof e.onwarn && this.on("warn", e.onwarn), 
            "function" == typeof e.onentry && this.on("entry", e.onentry);
        }
        [D](e, t) {
            let n;
            null === this[j] && (this[j] = !1);
            try {
                n = new i(e, t, this[g], this[v]);
            } catch (e) {
                return this.warn("TAR_ENTRY_INVALID", e);
            }
            if (n.nullBlock) this[U] ? (this[W] = !0, "begin" === this[h] && (this[h] = "header"), 
            this[A]("eof")) : (this[U] = !0, this[A]("nullBlock")); else if (this[U] = !1, n.cksumValid) if (n.path) {
                const e = n.type;
                if (/^(Symbolic)?Link$/.test(e) && !n.linkpath) this.warn("TAR_ENTRY_INVALID", "linkpath required", {
                    header: n
                }); else if (!/^(Symbolic)?Link$/.test(e) && n.linkpath) this.warn("TAR_ENTRY_INVALID", "linkpath forbidden", {
                    header: n
                }); else {
                    const e = this[p] = new s(n, this[g], this[v]);
                    if (!this[j]) if (e.remain) {
                        const t = () => {
                            e.invalid || (this[j] = !0);
                        };
                        e.on("end", t);
                    } else this[j] = !0;
                    e.meta ? e.size > this.maxMetaEntrySize ? (e.ignore = !0, this[A]("ignoredEntry", e), 
                    this[h] = "ignore", e.resume()) : e.size > 0 && (this[y] = "", e.on("data", e => this[y] += e), 
                    this[h] = "meta") : (this[g] = null, e.ignore = e.ignore || !this.filter(e.path, e), 
                    e.ignore ? (this[A]("ignoredEntry", e), this[h] = e.remain ? "ignore" : "header", 
                    e.resume()) : (e.remain ? this[h] = "body" : (this[h] = "header", e.end()), this[f] ? this[w].push(e) : (this[w].push(e), 
                    this[_]())));
                }
            } else this.warn("TAR_ENTRY_INVALID", "path is required", {
                header: n
            }); else this.warn("TAR_ENTRY_INVALID", "checksum failure", {
                header: n
            });
        }
        [B]() {
            u(() => this.emit("close"));
        }
        [m](e) {
            let t = !0;
            return e ? Array.isArray(e) ? this.emit.apply(this, e) : (this[f] = e, this.emit("entry", e), 
            e.emittedEnd || (e.on("end", e => this[_]()), t = !1)) : (this[f] = null, t = !1), 
            t;
        }
        [_]() {
            do {} while (this[m](this[w].shift()));
            if (!this[w].length) {
                const e = this[f];
                !e || e.flowing || e.size === e.remain ? this[P] || this.emit("drain") : e.once("drain", e => this.emit("drain"));
            }
        }
        [I](e, t) {
            const n = this[p], r = n.blockRemain, i = r >= e.length && 0 === t ? e : e.slice(t, t + r);
            return n.write(i), n.blockRemain || (this[h] = "header", this[p] = null, n.end()), 
            i.length;
        }
        [R](e, t) {
            const n = this[p], r = this[I](e, t);
            return this[p] || this[E](n), r;
        }
        [A](e, t, n) {
            this[w].length || this[f] ? this[w].push([ e, t, n ]) : this.emit(e, t, n);
        }
        [E](e) {
            switch (this[A]("meta", this[y]), e.type) {
              case "ExtendedHeader":
              case "OldExtendedHeader":
                this[g] = l.parse(this[y], this[g], !1);
                break;

              case "GlobalExtendedHeader":
                this[v] = l.parse(this[y], this[v], !0);
                break;

              case "NextFileHasLongPath":
              case "OldGnuLongPath":
                this[g] = this[g] || Object.create(null), this[g].path = this[y].replace(/\0.*/, "");
                break;

              case "NextFileHasLongLinkpath":
                this[g] = this[g] || Object.create(null), this[g].linkpath = this[y].replace(/\0.*/, "");
                break;

              default:
                throw new Error("unknown meta: " + e.type);
            }
        }
        abort(e) {
            this[x] = !0, this.emit("abort", e), this.warn("TAR_ABORT", e, {
                recoverable: !1
            });
        }
        write(e) {
            if (this[x]) return;
            if ((null === this[O] || void 0 === this.brotli && !1 === this[O]) && e) {
                if (this[b] && (e = Buffer.concat([ this[b], e ]), this[b] = null), e.length < d.length) return this[b] = e, 
                !0;
                for (let t = 0; null === this[O] && t < d.length; t++) e[t] !== d[t] && (this[O] = !1);
                const t = void 0 === this.brotli;
                if (!1 === this[O] && t) if (e.length < 512) {
                    if (!this[S]) return this[b] = e, !0;
                    this.brotli = !0;
                } else try {
                    new i(e.slice(0, 512)), this.brotli = !1;
                } catch (e) {
                    this.brotli = !0;
                }
                if (null === this[O] || !1 === this[O] && this.brotli) {
                    const t = this[S];
                    this[S] = !1, this[O] = null === this[O] ? new c.Unzip : new c.BrotliDecompress, 
                    this[O].on("data", e => this[C](e)), this[O].on("error", e => this.abort(e)), this[O].on("end", e => {
                        this[S] = !0, this[C]();
                    }), this[P] = !0;
                    const n = this[O][t ? "end" : "write"](e);
                    return this[P] = !1, n;
                }
            }
            this[P] = !0, this[O] ? this[O].write(e) : this[C](e), this[P] = !1;
            const t = !this[w].length && (!this[f] || this[f].flowing);
            return t || this[w].length || this[f].once("drain", e => this.emit("drain")), t;
        }
        [k](e) {
            e && !this[x] && (this[b] = this[b] ? Buffer.concat([ this[b], e ]) : e);
        }
        [M]() {
            if (this[S] && !this[T] && !this[x] && !this[L]) {
                this[T] = !0;
                const e = this[p];
                if (e && e.blockRemain) {
                    const t = this[b] ? this[b].length : 0;
                    this.warn("TAR_BAD_ARCHIVE", `Truncated input (needed ${e.blockRemain} more bytes, only ${t} available)`, {
                        entry: e
                    }), this[b] && e.write(this[b]), e.end();
                }
                this[A](F);
            }
        }
        [C](e) {
            if (this[L]) this[k](e); else if (e || this[b]) {
                if (this[L] = !0, this[b]) {
                    this[k](e);
                    const t = this[b];
                    this[b] = null, this[N](t);
                } else this[N](e);
                for (;this[b] && this[b].length >= 512 && !this[x] && !this[W]; ) {
                    const e = this[b];
                    this[b] = null, this[N](e);
                }
                this[L] = !1;
            } else this[M]();
            this[b] && !this[S] || this[M]();
        }
        [N](e) {
            let t = 0;
            const n = e.length;
            for (;t + 512 <= n && !this[x] && !this[W]; ) switch (this[h]) {
              case "begin":
              case "header":
                this[D](e, t), t += 512;
                break;

              case "ignore":
              case "body":
                t += this[I](e, t);
                break;

              case "meta":
                t += this[R](e, t);
                break;

              default:
                throw new Error("invalid state: " + this[h]);
            }
            t < n && (this[b] ? this[b] = Buffer.concat([ e.slice(t), this[b] ]) : this[b] = e.slice(t));
        }
        end(e) {
            this[x] || (this[O] ? this[O].end(e) : (this[S] = !0, void 0 === this.brotli && (e = e || Buffer.alloc(0)), 
            this.write(e)));
        }
    });
}
