// analysis/pretty/main.js:87564; webpack module 1082
function(e, t, n) {
    var r = n(1), i = "win32" === process.platform, o = n(4), a = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
    function s(e) {
        return "function" == typeof e ? e : function() {
            var e;
            if (a) {
                var t = new Error;
                e = function(e) {
                    e && (t.message = e.message, n(e = t));
                };
            } else e = n;
            return e;
            function n(e) {
                if (e) {
                    if (process.throwDeprecation) throw e;
                    if (!process.noDeprecation) {
                        var t = "fs: missing callback " + (e.stack || e.message);
                        process.traceDeprecation ? console.trace(t) : console.error(t);
                    }
                }
            }
        }();
    }
    r.normalize;
    if (i) var l = /(.*?)(?:[\/\\]+|$)/g; else l = /(.*?)(?:[\/]+|$)/g;
    if (i) var c = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/; else c = /^[\/]*/;
    t.realpathSync = function(e, t) {
        if (e = r.resolve(e), t && Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        var n, a, s, u, d = e, h = {}, p = {};
        function f() {
            var t = c.exec(e);
            n = t[0].length, a = t[0], s = t[0], u = "", i && !p[s] && (o.lstatSync(s), p[s] = !0);
        }
        for (f(); n < e.length; ) {
            l.lastIndex = n;
            var _ = l.exec(e);
            if (u = a, a += _[0], s = u + _[1], n = l.lastIndex, !(p[s] || t && t[s] === s)) {
                var m;
                if (t && Object.prototype.hasOwnProperty.call(t, s)) m = t[s]; else {
                    var g = o.lstatSync(s);
                    if (!g.isSymbolicLink()) {
                        p[s] = !0, t && (t[s] = s);
                        continue;
                    }
                    var v = null;
                    if (!i) {
                        var y = g.dev.toString(32) + ":" + g.ino.toString(32);
                        h.hasOwnProperty(y) && (v = h[y]);
                    }
                    null === v && (o.statSync(s), v = o.readlinkSync(s)), m = r.resolve(u, v), t && (t[s] = m), 
                    i || (h[y] = v);
                }
                e = r.resolve(m, e.slice(n)), f();
            }
        }
        return t && (t[d] = e), e;
    }, t.realpath = function(e, t, n) {
        if ("function" != typeof n && (n = s(t), t = null), e = r.resolve(e), t && Object.prototype.hasOwnProperty.call(t, e)) return process.nextTick(n.bind(null, null, t[e]));
        var a, u, d, h, p = e, f = {}, _ = {};
        function m() {
            var t = c.exec(e);
            a = t[0].length, u = t[0], d = t[0], h = "", i && !_[d] ? o.lstat(d, function(e) {
                if (e) return n(e);
                _[d] = !0, g();
            }) : process.nextTick(g);
        }
        function g() {
            if (a >= e.length) return t && (t[p] = e), n(null, e);
            l.lastIndex = a;
            var r = l.exec(e);
            return h = u, u += r[0], d = h + r[1], a = l.lastIndex, _[d] || t && t[d] === d ? process.nextTick(g) : t && Object.prototype.hasOwnProperty.call(t, d) ? E(t[d]) : o.lstat(d, v);
        }
        function v(e, r) {
            if (e) return n(e);
            if (!r.isSymbolicLink()) return _[d] = !0, t && (t[d] = d), process.nextTick(g);
            if (!i) {
                var a = r.dev.toString(32) + ":" + r.ino.toString(32);
                if (f.hasOwnProperty(a)) return y(null, f[a], d);
            }
            o.stat(d, function(e) {
                if (e) return n(e);
                o.readlink(d, function(e, t) {
                    i || (f[a] = t), y(e, t);
                });
            });
        }
        function y(e, i, o) {
            if (e) return n(e);
            var a = r.resolve(h, i);
            t && (t[o] = a), E(a);
        }
        function E(t) {
            e = r.resolve(t, e.slice(a)), m();
        }
        m();
    };
}
