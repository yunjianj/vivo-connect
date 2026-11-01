// analysis/pretty/main.js:88291; webpack module 1095
function(e, t, n) {
    var r = n(20), i = n(1), o = n(276), a = n(588), s = n(589), l = n(590), c = n(277), u = e.exports = {}, d = /[\/\\]/g;
    u.exists = function() {
        var e = i.join.apply(i, arguments);
        return r.existsSync(e);
    }, u.expand = function(...e) {
        var t = l(e[0]) ? e.shift() : {}, n = Array.isArray(e[0]) ? e[0] : e;
        if (0 === n.length) return [];
        var u = function(e, t) {
            var n = [];
            return o(e).forEach(function(e) {
                var r = 0 === e.indexOf("!");
                r && (e = e.slice(1));
                var i = t(e);
                n = r ? a(n, i) : s(n, i);
            }), n;
        }(n, function(e) {
            return c.sync(e, t);
        });
        return t.filter && (u = u.filter(function(e) {
            e = i.join(t.cwd || "", e);
            try {
                return "function" == typeof t.filter ? t.filter(e) : r.statSync(e)[t.filter]();
            } catch (e) {
                return !1;
            }
        })), u;
    }, u.expandMapping = function(e, t, n) {
        n = Object.assign({
            rename: function(e, t) {
                return i.join(e || "", t);
            }
        }, n);
        var r = [], o = {};
        return u.expand(n, e).forEach(function(e) {
            var a = e;
            n.flatten && (a = i.basename(a)), n.ext && (a = a.replace(/(\.[^\/]*)?$/, n.ext));
            var s = n.rename(t, a, n);
            n.cwd && (e = i.join(n.cwd, e)), s = s.replace(d, "/"), e = e.replace(d, "/"), o[s] ? o[s].src.push(e) : (r.push({
                src: [ e ],
                dest: s
            }), o[s] = r[r.length - 1]);
        }), r;
    }, u.normalizeFilesArray = function(e) {
        var t = [];
        return e.forEach(function(e) {
            ("src" in e || "dest" in e) && t.push(e);
        }), 0 === t.length ? [] : t = _(t).chain().forEach(function(e) {
            "src" in e && e.src && (Array.isArray(e.src) ? e.src = o(e.src) : e.src = [ e.src ]);
        }).map(function(e) {
            var t = Object.assign({}, e);
            if (delete t.src, delete t.dest, e.expand) return u.expandMapping(e.src, e.dest, t).map(function(t) {
                var n = Object.assign({}, e);
                return n.orig = Object.assign({}, e), n.src = t.src, n.dest = t.dest, [ "expand", "cwd", "flatten", "rename", "ext" ].forEach(function(e) {
                    delete n[e];
                }), n;
            });
            var n = Object.assign({}, e);
            return n.orig = Object.assign({}, e), "src" in n && Object.defineProperty(n, "src", {
                enumerable: !0,
                get: function n() {
                    var r;
                    return "result" in n || (r = e.src, r = Array.isArray(r) ? o(r) : [ r ], n.result = u.expand(t, r)), 
                    n.result;
                }
            }), "dest" in n && (n.dest = e.dest), n;
        }).flatten().value();
    };
}
