// analysis/pretty/main.js:56337; webpack module 591
function(e, t, n) {
    e.exports = u, u.realpath = u, u.sync = d, u.realpathSync = d, u.monkeypatch = function() {
        r.realpath = u, r.realpathSync = d;
    }, u.unmonkeypatch = function() {
        r.realpath = i, r.realpathSync = o;
    };
    var r = n(4), i = r.realpath, o = r.realpathSync, a = process.version, s = /^v[0-5]\./.test(a), l = n(1082);
    function c(e) {
        return e && "realpath" === e.syscall && ("ELOOP" === e.code || "ENOMEM" === e.code || "ENAMETOOLONG" === e.code);
    }
    function u(e, t, n) {
        if (s) return i(e, t, n);
        "function" == typeof t && (n = t, t = null), i(e, t, function(r, i) {
            c(r) ? l.realpath(e, t, n) : n(r, i);
        });
    }
    function d(e, t) {
        if (s) return o(e, t);
        try {
            return o(e, t);
        } catch (n) {
            if (c(n)) return l.realpathSync(e, t);
            throw n;
        }
    }
}
