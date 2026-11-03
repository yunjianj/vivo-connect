// analysis/pretty/main.js:18069; webpack module 125
function(e, t) {
    t.parse = t.decode = function(e) {
        var t = {}, n = t, i = null, o = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i;
        return e.split(/[\r\n]+/g).forEach(function(e, r, s) {
            if (e && !e.match(/^\s*[;#]/)) {
                var l = e.match(o);
                if (l) {
                    if (void 0 !== l[1]) return "__proto__" === (i = a(l[1])) ? void (n = {}) : void (n = t[i] = t[i] || {});
                    var c = a(l[2]);
                    if ("__proto__" !== c) {
                        var u = !l[3] || a(l[4]);
                        switch (u) {
                          case "true":
                          case "false":
                          case "null":
                            u = JSON.parse(u);
                        }
                        if (c.length > 2 && "[]" === c.slice(-2)) {
                            if ("__proto__" === (c = c.substring(0, c.length - 2))) return;
                            n[c] ? Array.isArray(n[c]) || (n[c] = [ n[c] ]) : n[c] = [];
                        }
                        Array.isArray(n[c]) ? n[c].push(u) : n[c] = u;
                    }
                }
            }
        }), Object.keys(t).filter(function(e, n, i) {
            if (!t[e] || "object" != typeof t[e] || Array.isArray(t[e])) return !1;
            var o = r(e), a = t, s = o.pop(), l = s.replace(/\\\./g, ".");
            return o.forEach(function(e, t, n) {
                "__proto__" !== e && (a[e] && "object" == typeof a[e] || (a[e] = {}), a = a[e]);
            }), (a !== t || l !== s) && (a[l] = t[e], !0);
        }).forEach(function(e, n, r) {
            delete t[e];
        }), t;
    }, t.stringify = t.encode = function e(t, i) {
        var a = [], s = "";
        "string" == typeof i ? i = {
            section: i,
            whitespace: !1
        } : (i = i || {}).whitespace = !0 === i.whitespace;
        var l = i.whitespace ? " = " : "=";
        Object.keys(t).forEach(function(e, r, i) {
            var c = t[e];
            c && Array.isArray(c) ? c.forEach(function(t) {
                s += o(e + "[]") + l + o(t) + "\n";
            }) : c && "object" == typeof c ? a.push(e) : s += o(e) + l + o(c) + n;
        }), i.section && s.length && (s = "[" + o(i.section) + "]" + n + s);
        return a.forEach(function(o, a, l) {
            var c = r(o).join("\\."), u = (i.section ? i.section + "." : "") + c, d = e(t[o], {
                section: u,
                whitespace: i.whitespace
            });
            s.length && d.length && (s += n), s += d;
        }), s;
    }, t.safe = o, t.unsafe = a;
    var n = "undefined" != typeof process && "win32" === process.platform ? "\r\n" : "\n";
    function r(e) {
        return e.replace(/\1/g, "LITERAL\\1LITERAL").replace(/\\\./g, "").split(/\./).map(function(e) {
            return e.replace(/\1/g, "\\.").replace(/\2LITERAL\\1LITERAL\2/g, "");
        });
    }
    function i(e) {
        return '"' === e.charAt(0) && '"' === e.slice(-1) || "'" === e.charAt(0) && "'" === e.slice(-1);
    }
    function o(e) {
        return "string" != typeof e || e.match(/[=\r\n]/) || e.match(/^\[/) || e.length > 1 && i(e) || e !== e.trim() ? JSON.stringify(e) : e.replace(/;/g, "\\;").replace(/#/g, "\\#");
    }
    function a(e, t) {
        if (!i(e = (e || "").trim())) {
            for (var n = !1, r = "", o = 0, a = e.length; o < a; o++) {
                var s = e.charAt(o);
                if (n) -1 !== "\\;#".indexOf(s) ? r += s : r += "\\" + s, n = !1; else {
                    if (-1 !== ";#".indexOf(s)) break;
                    "\\" === s ? n = !0 : r += s;
                }
            }
            return n && (r += "\\"), r.trim();
        }
        "'" === e.charAt(0) && (e = e.substr(1, e.length - 2));
        try {
            e = JSON.parse(e);
        } catch (e) {}
        return e;
    }
}
