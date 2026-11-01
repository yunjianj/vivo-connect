// analysis/pretty/main.js:41637; webpack module 384
function(e, t, n) {
    const r = n(1), i = n(814), o = n(12).EventEmitter;
    function a(e) {
        return function(t) {
            let n;
            const r = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof r[r.length - 1]) {
                const e = r[r.length - 1];
                n = function(t) {
                    t && e(t);
                };
            }
            const i = new c(this, t, n);
            return e.call(this, i, r);
        };
    }
    function s(e, t) {
        for (const n in t.prototype) e.prototype[n] = t.prototype[n];
    }
    e.exports = i, i.cached = {
        Database: function(e, t, n) {
            if ("" === e || ":memory:" === e) return new l(e, t, n);
            let o;
            if (e = r.resolve(e), i.cached.objects[e]) {
                o = i.cached.objects[e];
                const r = "number" == typeof t ? n : t;
                if ("function" == typeof r) {
                    function a() {
                        r.call(o, null);
                    }
                    o.open ? process.nextTick(a) : o.once("open", a);
                }
            } else o = i.cached.objects[e] = new l(e, t, n);
            return o;
        },
        objects: {}
    };
    const l = i.Database, c = i.Statement, u = i.Backup;
    s(l, o), s(c, o), s(u, o), l.prototype.prepare = a(function(e, t) {
        return t.length ? e.bind.apply(e, t) : e;
    }), l.prototype.run = a(function(e, t) {
        return e.run.apply(e, t).finalize(), this;
    }), l.prototype.get = a(function(e, t) {
        return e.get.apply(e, t).finalize(), this;
    }), l.prototype.all = a(function(e, t) {
        return e.all.apply(e, t).finalize(), this;
    }), l.prototype.each = a(function(e, t) {
        return e.each.apply(e, t).finalize(), this;
    }), l.prototype.map = a(function(e, t) {
        return e.map.apply(e, t).finalize(), this;
    }), l.prototype.backup = function() {
        let e;
        return e = arguments.length <= 2 ? new u(this, arguments[0], "main", "main", !0, arguments[1]) : new u(this, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), 
        e.retryErrors = [ i.BUSY, i.LOCKED ], e;
    }, c.prototype.map = function() {
        const e = Array.prototype.slice.call(arguments), t = e.pop();
        return e.push(function(e, n) {
            if (e) return t(e);
            const r = {};
            if (n.length) {
                const e = Object.keys(n[0]), t = e[0];
                if (e.length > 2) for (let e = 0; e < n.length; e++) r[n[e][t]] = n[e]; else {
                    const i = e[1];
                    for (let e = 0; e < n.length; e++) r[n[e][t]] = n[e][i];
                }
            }
            t(e, r);
        }), this.all.apply(this, e);
    };
    let d = !1;
    const h = [ "trace", "profile", "change" ];
    l.prototype.addListener = l.prototype.on = function(e) {
        const t = o.prototype.addListener.apply(this, arguments);
        return h.indexOf(e) >= 0 && this.configure(e, !0), t;
    }, l.prototype.removeListener = function(e) {
        const t = o.prototype.removeListener.apply(this, arguments);
        return h.indexOf(e) >= 0 && !this._events[e] && this.configure(e, !1), t;
    }, l.prototype.removeAllListeners = function(e) {
        const t = o.prototype.removeAllListeners.apply(this, arguments);
        return h.indexOf(e) >= 0 && this.configure(e, !1), t;
    }, i.verbose = function() {
        if (!d) {
            const e = n(819);
            [ "prepare", "get", "run", "all", "each", "map", "close", "exec" ].forEach(function(t) {
                e.extendTrace(l.prototype, t);
            }), [ "bind", "get", "run", "all", "each", "map", "reset", "finalize" ].forEach(function(t) {
                e.extendTrace(c.prototype, t);
            }), d = !0;
        }
        return i;
    };
}
