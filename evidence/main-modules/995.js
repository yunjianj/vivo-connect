// analysis/pretty/main.js:81532; webpack module 995
function(e, t, n) {
    var r = {};
    e.exports = r, r.themes = {};
    var i = n(5), o = r.styles = n(996), a = Object.defineProperties, s = new RegExp(/[\r\n]+/g);
    r.supportsColor = n(997).supportsColor, void 0 === r.enabled && (r.enabled = !1 !== r.supportsColor()), 
    r.enable = function() {
        r.enabled = !0;
    }, r.disable = function() {
        r.enabled = !1;
    }, r.stripColors = r.strip = function(e) {
        return ("" + e).replace(/\x1B\[\d+m/g, "");
    };
    r.stylize = function(e, t) {
        if (!r.enabled) return e + "";
        var n = o[t];
        return !n && t in r ? r[t](e) : n.open + e + n.close;
    };
    var l = /[|\\{}()[\]^$+*?.]/g;
    function c(e) {
        var t = function e() {
            return p.apply(e, arguments);
        };
        return t._styles = e, t.__proto__ = h, t;
    }
    var u, d = (u = {}, o.grey = o.gray, Object.keys(o).forEach(function(e) {
        o[e].closeRe = new RegExp(function(e) {
            if ("string" != typeof e) throw new TypeError("Expected a string");
            return e.replace(l, "\\$&");
        }(o[e].close), "g"), u[e] = {
            get: function() {
                return c(this._styles.concat(e));
            }
        };
    }), u), h = a(function() {}, d);
    function p() {
        var e = Array.prototype.slice.call(arguments), t = e.map(function(e) {
            return null != e && e.constructor === String ? e : i.inspect(e);
        }).join(" ");
        if (!r.enabled || !t) return t;
        for (var n = -1 != t.indexOf("\n"), a = this._styles, l = a.length; l--; ) {
            var c = o[a[l]];
            t = c.open + t.replace(c.closeRe, c.open) + c.close, n && (t = t.replace(s, function(e) {
                return c.close + e + c.open;
            }));
        }
        return t;
    }
    r.setTheme = function(e) {
        if ("string" != typeof e) for (var t in e) !function(t) {
            r[t] = function(n) {
                if ("object" == typeof e[t]) {
                    var i = n;
                    for (var o in e[t]) i = r[e[t][o]](i);
                    return i;
                }
                return r[e[t]](n);
            };
        }(t); else console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
    };
    var f = function(e, t) {
        var n = t.split("");
        return (n = n.map(e)).join("");
    };
    for (var _ in r.trap = n(999), r.zalgo = n(1e3), r.maps = {}, r.maps.america = n(1001)(r), 
    r.maps.zebra = n(1002)(r), r.maps.rainbow = n(1003)(r), r.maps.random = n(1004)(r), 
    r.maps) !function(e) {
        r[e] = function(t) {
            return f(r.maps[e], t);
        };
    }(_);
    a(r, function() {
        var e = {};
        return Object.keys(d).forEach(function(t) {
            e[t] = {
                get: function() {
                    return c([ t ]);
                }
            };
        }), e;
    }());
}
