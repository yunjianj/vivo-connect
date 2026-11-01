// analysis/pretty/main.js:99094; webpack module 1289
function(e, t, n) {
    var r = n(1), i = n(4), o = parseInt("0777", 8);
    function a(e, t, n, s) {
        "function" == typeof t ? (n = t, t = {}) : t && "object" == typeof t || (t = {
            mode: t
        });
        var l = t.mode, c = t.fs || i;
        void 0 === l && (l = o), s || (s = null);
        var u = n || function() {};
        e = r.resolve(e), c.mkdir(e, l, function(n) {
            if (!n) return u(null, s = s || e);
            switch (n.code) {
              case "ENOENT":
                if (r.dirname(e) === e) return u(n);
                a(r.dirname(e), t, function(n, r) {
                    n ? u(n, r) : a(e, t, u, r);
                });
                break;

              default:
                c.stat(e, function(e, t) {
                    e || !t.isDirectory() ? u(n, s) : u(null, s);
                });
            }
        });
    }
    e.exports = a.mkdirp = a.mkdirP = a, a.sync = function e(t, n, a) {
        n && "object" == typeof n || (n = {
            mode: n
        });
        var s = n.mode, l = n.fs || i;
        void 0 === s && (s = o), a || (a = null), t = r.resolve(t);
        try {
            l.mkdirSync(t, s), a = a || t;
        } catch (i) {
            switch (i.code) {
              case "ENOENT":
                a = e(r.dirname(t), n, a), e(t, n, a);
                break;

              default:
                var c;
                try {
                    c = l.statSync(t);
                } catch (e) {
                    throw i;
                }
                if (!c.isDirectory()) throw i;
            }
        }
        return a;
    };
}
