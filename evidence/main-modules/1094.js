// analysis/pretty/main.js:88239; webpack module 1094
function(e, t, n) {
    var r = n(20), i = n(1), o = n(575), a = n(275), s = n(207), l = n(9).Stream, c = n(38).PassThrough, u = e.exports = {};
    u.file = n(1095), u.collectStream = function(e, t) {
        var n = [], r = 0;
        e.on("error", t), e.on("data", function(e) {
            n.push(e), r += e.length;
        }), e.on("end", function() {
            var e = Buffer.alloc(r), i = 0;
            n.forEach(function(t) {
                t.copy(e, i), i += t.length;
            }), t(null, e);
        });
    }, u.dateify = function(e) {
        return e = (e = e || new Date) instanceof Date ? e : "string" == typeof e ? new Date(e) : new Date;
    }, u.defaults = function(e, t, n) {
        var r = arguments;
        return r[0] = r[0] || {}, s(...r);
    }, u.isStream = function(e) {
        return e instanceof l;
    }, u.lazyReadStream = function(e) {
        return new o.Readable(function() {
            return r.createReadStream(e);
        });
    }, u.normalizeInputSource = function(e) {
        return null === e ? Buffer.alloc(0) : "string" == typeof e ? Buffer.from(e) : u.isStream(e) ? e.pipe(new c) : e;
    }, u.sanitizePath = function(e) {
        return a(e, !1).replace(/^\w+:/, "").replace(/^(\.\.\/|\/)+/, "");
    }, u.trailingSlashIt = function(e) {
        return "/" !== e.slice(-1) ? e + "/" : e;
    }, u.unixifyPath = function(e) {
        return a(e, !1).replace(/^\w+:/, "");
    }, u.walkdir = function(e, t, n) {
        var o = [];
        "function" == typeof t && (n = t, t = e), r.readdir(e, function(a, s) {
            var l, c, d = 0;
            if (a) return n(a);
            !function a() {
                if (!(l = s[d++])) return n(null, o);
                c = i.join(e, l), r.stat(c, function(e, n) {
                    o.push({
                        path: c,
                        relative: i.relative(t, c).replace(/\\/g, "/"),
                        stats: n
                    }), n && n.isDirectory() ? u.walkdir(c, t, function(e, t) {
                        t.forEach(function(e) {
                            o.push(e);
                        }), a();
                    }) : a();
                });
            }();
        });
    };
}
