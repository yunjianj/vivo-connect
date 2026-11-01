// analysis/pretty/main.js:85189; webpack module 1064
function(e, t, n) {
    e.exports = u;
    const r = n(4), {EventEmitter: i} = n(12), {Minimatch: o} = n(1065), {resolve: a} = n(1);
    function s(e, t) {
        return new Promise((n, i) => {
            (t ? r.stat : r.lstat)(e, (r, i) => {
                if (r) switch (r.code) {
                  case "ENOENT":
                    n(t ? s(e, !1) : null);
                    break;

                  default:
                    n(null);
                } else n(i);
            });
        });
    }
    async function* l(e, t, n, i, o, a) {
        let c = await function(e, t) {
            return new Promise((n, i) => {
                r.readdir(e, {
                    withFileTypes: !0
                }, (e, r) => {
                    if (e) switch (e.code) {
                      case "ENOTDIR":
                        t ? i(e) : n([]);
                        break;

                      case "ENOTSUP":
                      case "ENOENT":
                      case "ENAMETOOLONG":
                      case "UNKNOWN":
                        n([]);
                        break;

                      case "ELOOP":
                      default:
                        i(e);
                    } else n(r);
                });
            });
        }(t + e, a);
        for (const r of c) {
            let a = r.name;
            void 0 === a && (a = r, i = !0);
            const c = e + "/" + a, u = c.slice(1), d = t + "/" + u;
            let h = null;
            (i || n) && (h = await s(d, n)), h || void 0 === r.name || (h = r), null === h && (h = {
                isDirectory: () => !1
            }), h.isDirectory() ? o(u) || (yield {
                relative: u,
                absolute: d,
                stats: h
            }, yield* l(c, t, n, i, o, !1)) : yield {
                relative: u,
                absolute: d,
                stats: h
            };
        }
    }
    class c extends i {
        constructor(e, t, n) {
            if (super(), "function" == typeof t && (n = t, t = null), this.options = function(e) {
                return {
                    pattern: e.pattern,
                    dot: !!e.dot,
                    noglobstar: !!e.noglobstar,
                    matchBase: !!e.matchBase,
                    nocase: !!e.nocase,
                    ignore: e.ignore,
                    skip: e.skip,
                    follow: !!e.follow,
                    stat: !!e.stat,
                    nodir: !!e.nodir,
                    mark: !!e.mark,
                    silent: !!e.silent,
                    absolute: !!e.absolute
                };
            }(t || {}), this.matchers = [], this.options.pattern) {
                const e = Array.isArray(this.options.pattern) ? this.options.pattern : [ this.options.pattern ];
                this.matchers = e.map(e => new o(e, {
                    dot: this.options.dot,
                    noglobstar: this.options.noglobstar,
                    matchBase: this.options.matchBase,
                    nocase: this.options.nocase
                }));
            }
            if (this.ignoreMatchers = [], this.options.ignore) {
                const e = Array.isArray(this.options.ignore) ? this.options.ignore : [ this.options.ignore ];
                this.ignoreMatchers = e.map(e => new o(e, {
                    dot: !0
                }));
            }
            if (this.skipMatchers = [], this.options.skip) {
                const e = Array.isArray(this.options.skip) ? this.options.skip : [ this.options.skip ];
                this.skipMatchers = e.map(e => new o(e, {
                    dot: !0
                }));
            }
            this.iterator = async function*(e, t, n, r) {
                yield* l("", e, t, n, r, !0);
            }(a(e || "."), this.options.follow, this.options.stat, this._shouldSkipDirectory.bind(this)), 
            this.paused = !1, this.inactive = !1, this.aborted = !1, n && (this._matches = [], 
            this.on("match", e => this._matches.push(this.options.absolute ? e.absolute : e.relative)), 
            this.on("error", e => n(e)), this.on("end", () => n(null, this._matches))), setTimeout(() => this._next(), 0);
        }
        _shouldSkipDirectory(e) {
            return this.skipMatchers.some(t => t.match(e));
        }
        _fileMatches(e, t) {
            const n = e + (t ? "/" : "");
            return (0 === this.matchers.length || this.matchers.some(e => e.match(n))) && !this.ignoreMatchers.some(e => e.match(n)) && (!this.options.nodir || !t);
        }
        _next() {
            this.paused || this.aborted ? this.inactive = !0 : this.iterator.next().then(e => {
                if (e.done) this.emit("end"); else {
                    const t = e.value.stats.isDirectory();
                    if (this._fileMatches(e.value.relative, t)) {
                        let n = e.value.relative, r = e.value.absolute;
                        this.options.mark && t && (n += "/", r += "/"), this.options.stat ? this.emit("match", {
                            relative: n,
                            absolute: r,
                            stat: e.value.stats
                        }) : this.emit("match", {
                            relative: n,
                            absolute: r
                        });
                    }
                    this._next(this.iterator);
                }
            }).catch(e => {
                this.abort(), this.emit("error", e), e.code || this.options.silent || console.error(e);
            });
        }
        abort() {
            this.aborted = !0;
        }
        pause() {
            this.paused = !0;
        }
        resume() {
            this.paused = !1, this.inactive && (this.inactive = !1, this._next());
        }
    }
    function u(e, t, n) {
        return new c(e, t, n);
    }
    u.ReaddirGlob = c;
}
