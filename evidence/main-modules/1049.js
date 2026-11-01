// analysis/pretty/main.js:83430; webpack module 1049
function(e, t, n) {
    "use strict";
    const {Stream: r, Transform: i} = n(38), o = n(274), {LEVEL: a, SPLAT: s} = n(27), l = n(429), c = n(431), u = n(435), d = n(424), h = n(1053), {warn: p} = n(417), f = n(273), _ = /%[scdjifoO%]/g;
    class m extends i {
        constructor(e) {
            super({
                objectMode: !0
            }), this.configure(e);
        }
        child(e) {
            const t = this;
            return Object.create(t, {
                write: {
                    value: function(n) {
                        const r = Object.assign({}, e, n);
                        n instanceof Error && (r.stack = n.stack, r.message = n.message), t.write(r);
                    }
                }
            });
        }
        configure({silent: e, format: t, defaultMeta: r, levels: i, level: o = "info", exitOnError: a = !0, transports: s, colors: l, emitErrs: d, formatters: h, padLevels: p, rewriters: _, stripColors: m, exceptionHandlers: g, rejectionHandlers: v} = {}) {
            if (this.transports.length && this.clear(), this.silent = e, this.format = t || this.format || n(415)(), 
            this.defaultMeta = r || null, this.levels = i || this.levels || f.npm.levels, this.level = o, 
            this.exceptions && this.exceptions.unhandle(), this.rejections && this.rejections.unhandle(), 
            this.exceptions = new c(this), this.rejections = new u(this), this.profilers = {}, 
            this.exitOnError = a, s && (s = Array.isArray(s) ? s : [ s ]).forEach(e => this.add(e)), 
            l || d || h || p || _ || m) throw new Error([ "{ colors, emitErrs, formatters, padLevels, rewriters, stripColors } were removed in winston@3.0.0.", "Use a custom winston.format(function) instead.", "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md" ].join("\n"));
            g && this.exceptions.handle(g), v && this.rejections.handle(v);
        }
        isLevelEnabled(e) {
            const t = g(this.levels, e);
            if (null === t) return !1;
            const n = g(this.levels, this.level);
            if (null === n) return !1;
            if (!this.transports || 0 === this.transports.length) return n >= t;
            return -1 !== this.transports.findIndex(e => {
                let r = g(this.levels, e.level);
                return null === r && (r = n), r >= t;
            });
        }
        log(e, t, ...n) {
            if (1 === arguments.length) return e[a] = e.level, this._addDefaultMeta(e), this.write(e), 
            this;
            if (2 === arguments.length) return t && "object" == typeof t ? (t[a] = t.level = e, 
            this._addDefaultMeta(t), this.write(t), this) : (t = {
                [a]: e,
                level: e,
                message: t
            }, this._addDefaultMeta(t), this.write(t), this);
            const [r] = n;
            if ("object" == typeof r && null !== r) {
                if (!(t && t.match && t.match(_))) {
                    const i = Object.assign({}, this.defaultMeta, r, {
                        [a]: e,
                        [s]: n,
                        level: e,
                        message: t
                    });
                    return r.message && (i.message = `${i.message} ${r.message}`), r.stack && (i.stack = r.stack), 
                    this.write(i), this;
                }
            }
            return this.write(Object.assign({}, this.defaultMeta, {
                [a]: e,
                [s]: n,
                level: e,
                message: t
            })), this;
        }
        _transform(e, t, n) {
            if (this.silent) return n();
            e[a] || (e[a] = e.level), this.levels[e[a]] || 0 === this.levels[e[a]] || console.error("[winston] Unknown logger level: %s", e[a]), 
            this._readableState.pipes || console.error("[winston] Attempt to write logs with no transports %j", e);
            try {
                this.push(this.format.transform(e, this.format.options));
            } finally {
                this._writableState.sync = !1, n();
            }
        }
        _final(e) {
            const t = this.transports.slice();
            o(t, (e, t) => {
                if (!e || e.finished) return setImmediate(t);
                e.once("finish", t), e.end();
            }, e);
        }
        add(e) {
            const t = !l(e) || e.log.length > 2 ? new d({
                transport: e
            }) : e;
            if (!t._writableState || !t._writableState.objectMode) throw new Error("Transports must WritableStreams in objectMode. Set { objectMode: true }.");
            return this._onEvent("error", t), this._onEvent("warn", t), this.pipe(t), e.handleExceptions && this.exceptions.handle(), 
            e.handleRejections && this.rejections.handle(), this;
        }
        remove(e) {
            if (!e) return this;
            let t = e;
            return (!l(e) || e.log.length > 2) && (t = this.transports.filter(t => t.transport === e)[0]), 
            t && this.unpipe(t), this;
        }
        clear() {
            return this.unpipe(), this;
        }
        close() {
            return this.exceptions.unhandle(), this.rejections.unhandle(), this.clear(), this.emit("close"), 
            this;
        }
        setLevels() {
            p.deprecated("setLevels");
        }
        query(e, t) {
            "function" == typeof e && (t = e, e = {}), e = e || {};
            const n = {}, r = Object.assign({}, e.query || {});
            o(this.transports.filter(e => !!e.query), function(t, i) {
                !function(t, n) {
                    e.query && "function" == typeof t.formatQuery && (e.query = t.formatQuery(r)), t.query(e, (r, i) => {
                        if (r) return n(r);
                        "function" == typeof t.formatResults && (i = t.formatResults(i, e.format)), n(null, i);
                    });
                }(t, (e, r) => {
                    i && ((r = e || r) && (n[t.name] = r), i()), i = null;
                });
            }, () => t(null, n));
        }
        stream(e = {}) {
            const t = new r, n = [];
            return t._streams = n, t.destroy = () => {
                let e = n.length;
                for (;e--; ) n[e].destroy();
            }, this.transports.filter(e => !!e.stream).forEach(r => {
                const i = r.stream(e);
                i && (n.push(i), i.on("log", e => {
                    e.transport = e.transport || [], e.transport.push(r.name), t.emit("log", e);
                }), i.on("error", e => {
                    e.transport = e.transport || [], e.transport.push(r.name), t.emit("error", e);
                }));
            }), t;
        }
        startTimer() {
            return new h(this);
        }
        profile(e, ...t) {
            const n = Date.now();
            if (this.profilers[e]) {
                const r = this.profilers[e];
                delete this.profilers[e], "function" == typeof t[t.length - 2] && (console.warn("Callback function no longer supported as of winston@3.0.0"), 
                t.pop());
                const i = "object" == typeof t[t.length - 1] ? t.pop() : {};
                return i.level = i.level || "info", i.durationMs = n - r, i.message = i.message || e, 
                this.write(i);
            }
            return this.profilers[e] = n, this;
        }
        handleExceptions(...e) {
            console.warn("Deprecated: .handleExceptions() will be removed in winston@4. Use .exceptions.handle()"), 
            this.exceptions.handle(...e);
        }
        unhandleExceptions(...e) {
            console.warn("Deprecated: .unhandleExceptions() will be removed in winston@4. Use .exceptions.unhandle()"), 
            this.exceptions.unhandle(...e);
        }
        cli() {
            throw new Error([ "Logger.cli() was removed in winston@3.0.0", "Use a custom winston.formats.cli() instead.", "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md" ].join("\n"));
        }
        _onEvent(e, t) {
            t["__winston" + e] || (t["__winston" + e] = function(n) {
                "error" !== e || this.transports.includes(t) || this.add(t), this.emit(e, n, t);
            }.bind(this), t.on(e, t["__winston" + e]));
        }
        _addDefaultMeta(e) {
            this.defaultMeta && Object.assign(e, this.defaultMeta);
        }
    }
    function g(e, t) {
        const n = e[t];
        return n || 0 === n ? n : null;
    }
    Object.defineProperty(m.prototype, "transports", {
        configurable: !1,
        enumerable: !0,
        get() {
            const {pipes: e} = this._readableState;
            return Array.isArray(e) ? e : [ e ].filter(Boolean);
        }
    }), e.exports = m;
}
