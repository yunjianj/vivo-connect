// analysis/pretty/main.js:4215; webpack module 20
function(e, t, n) {
    var r, i, o = n(4), a = n(1069), s = n(1070), l = n(1071), c = n(5);
    function u(e, t) {
        Object.defineProperty(e, r, {
            get: function() {
                return t;
            }
        });
    }
    "function" == typeof Symbol && "function" == typeof Symbol.for ? (r = Symbol.for("graceful-fs.queue"), 
    i = Symbol.for("graceful-fs.previous")) : (r = "___graceful-fs.queue", i = "___graceful-fs.previous");
    var d, h = function() {};
    if (c.debuglog ? h = c.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (h = function() {
        var e = c.format.apply(c, arguments);
        e = "GFS4: " + e.split(/\n/).join("\nGFS4: "), console.error(e);
    }), !o[r]) {
        var p = global[r] || [];
        u(o, p), o.close = function(e) {
            function t(t, n) {
                return e.call(o, t, function(e) {
                    e || m(), "function" == typeof n && n.apply(this, arguments);
                });
            }
            return Object.defineProperty(t, i, {
                value: e
            }), t;
        }(o.close), o.closeSync = function(e) {
            function t(t) {
                e.apply(o, arguments), m();
            }
            return Object.defineProperty(t, i, {
                value: e
            }), t;
        }(o.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
            h(o[r]), n(44).equal(o[r].length, 0);
        });
    }
    function f(e) {
        a(e), e.gracefulify = f, e.createReadStream = function(t, n) {
            return new e.ReadStream(t, n);
        }, e.createWriteStream = function(t, n) {
            return new e.WriteStream(t, n);
        };
        var t = e.readFile;
        e.readFile = function(e, n, r) {
            "function" == typeof n && (r = n, n = null);
            return function e(n, r, i, o) {
                return t(n, r, function(t) {
                    !t || "EMFILE" !== t.code && "ENFILE" !== t.code ? "function" == typeof i && i.apply(this, arguments) : _([ e, [ n, r, i ], t, o || Date.now(), Date.now() ]);
                });
            }(e, n, r);
        };
        var n = e.writeFile;
        e.writeFile = function(e, t, r, i) {
            "function" == typeof r && (i = r, r = null);
            return function e(t, r, i, o, a) {
                return n(t, r, i, function(n) {
                    !n || "EMFILE" !== n.code && "ENFILE" !== n.code ? "function" == typeof o && o.apply(this, arguments) : _([ e, [ t, r, i, o ], n, a || Date.now(), Date.now() ]);
                });
            }(e, t, r, i);
        };
        var r = e.appendFile;
        r && (e.appendFile = function(e, t, n, i) {
            "function" == typeof n && (i = n, n = null);
            return function e(t, n, i, o, a) {
                return r(t, n, i, function(r) {
                    !r || "EMFILE" !== r.code && "ENFILE" !== r.code ? "function" == typeof o && o.apply(this, arguments) : _([ e, [ t, n, i, o ], r, a || Date.now(), Date.now() ]);
                });
            }(e, t, n, i);
        });
        var i = e.copyFile;
        i && (e.copyFile = function(e, t, n, r) {
            "function" == typeof n && (r = n, n = 0);
            return function e(t, n, r, o, a) {
                return i(t, n, r, function(i) {
                    !i || "EMFILE" !== i.code && "ENFILE" !== i.code ? "function" == typeof o && o.apply(this, arguments) : _([ e, [ t, n, r, o ], i, a || Date.now(), Date.now() ]);
                });
            }(e, t, n, r);
        });
        var o = e.readdir;
        e.readdir = function(e, t, n) {
            "function" == typeof t && (n = t, t = null);
            var r = l.test(process.version) ? function(e, t, n, r) {
                return o(e, i(e, t, n, r));
            } : function(e, t, n, r) {
                return o(e, t, i(e, t, n, r));
            };
            return r(e, t, n);
            function i(e, t, n, i) {
                return function(o, a) {
                    !o || "EMFILE" !== o.code && "ENFILE" !== o.code ? (a && a.sort && a.sort(), "function" == typeof n && n.call(this, o, a)) : _([ r, [ e, t, n ], o, i || Date.now(), Date.now() ]);
                };
            }
        };
        var l = /^v[0-5]\./;
        if ("v0.8" === process.version.substr(0, 4)) {
            var c = s(e);
            m = c.ReadStream, g = c.WriteStream;
        }
        var u = e.ReadStream;
        u && (m.prototype = Object.create(u.prototype), m.prototype.open = function() {
            var e = this;
            y(e.path, e.flags, e.mode, function(t, n) {
                t ? (e.autoClose && e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n), 
                e.read());
            });
        });
        var d = e.WriteStream;
        d && (g.prototype = Object.create(d.prototype), g.prototype.open = function() {
            var e = this;
            y(e.path, e.flags, e.mode, function(t, n) {
                t ? (e.destroy(), e.emit("error", t)) : (e.fd = n, e.emit("open", n));
            });
        }), Object.defineProperty(e, "ReadStream", {
            get: function() {
                return m;
            },
            set: function(e) {
                m = e;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e, "WriteStream", {
            get: function() {
                return g;
            },
            set: function(e) {
                g = e;
            },
            enumerable: !0,
            configurable: !0
        });
        var h = m;
        Object.defineProperty(e, "FileReadStream", {
            get: function() {
                return h;
            },
            set: function(e) {
                h = e;
            },
            enumerable: !0,
            configurable: !0
        });
        var p = g;
        function m(e, t) {
            return this instanceof m ? (u.apply(this, arguments), this) : m.apply(Object.create(m.prototype), arguments);
        }
        function g(e, t) {
            return this instanceof g ? (d.apply(this, arguments), this) : g.apply(Object.create(g.prototype), arguments);
        }
        Object.defineProperty(e, "FileWriteStream", {
            get: function() {
                return p;
            },
            set: function(e) {
                p = e;
            },
            enumerable: !0,
            configurable: !0
        });
        var v = e.open;
        function y(e, t, n, r) {
            return "function" == typeof n && (r = n, n = null), function e(t, n, r, i, o) {
                return v(t, n, r, function(a, s) {
                    !a || "EMFILE" !== a.code && "ENFILE" !== a.code ? "function" == typeof i && i.apply(this, arguments) : _([ e, [ t, n, r, i ], a, o || Date.now(), Date.now() ]);
                });
            }(e, t, n, r);
        }
        return e.open = y, e;
    }
    function _(e) {
        h("ENQUEUE", e[0].name, e[1]), o[r].push(e), g();
    }
    function m() {
        for (var e = Date.now(), t = 0; t < o[r].length; ++t) o[r][t].length > 2 && (o[r][t][3] = e, 
        o[r][t][4] = e);
        g();
    }
    function g() {
        if (clearTimeout(d), d = void 0, 0 !== o[r].length) {
            var e = o[r].shift(), t = e[0], n = e[1], i = e[2], a = e[3], s = e[4];
            if (void 0 === a) h("RETRY", t.name, n), t.apply(null, n); else if (Date.now() - a >= 6e4) {
                h("TIMEOUT", t.name, n);
                var l = n.pop();
                "function" == typeof l && l.call(null, i);
            } else {
                var c = Date.now() - s, u = Math.max(s - a, 1);
                c >= Math.min(1.2 * u, 100) ? (h("RETRY", t.name, n), t.apply(null, n.concat([ a ]))) : o[r].push(e);
            }
            void 0 === d && (d = setTimeout(g, 0));
        }
    }
    global[r] || u(global, o[r]), e.exports = f(l(o)), process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !o.__patched && (e.exports = f(o), 
    o.__patched = !0);
}
