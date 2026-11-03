// analysis/pretty/main.js:99985; webpack module 1313
function(e, t, n) {
    "use strict";
    const r = n(20), i = n(1), o = n(44), a = "win32" === process.platform;
    function s(e) {
        [ "unlink", "chmod", "stat", "lstat", "rmdir", "readdir" ].forEach(t => {
            e[t] = e[t] || r[t], e[t += "Sync"] = e[t] || r[t];
        }), e.maxBusyTries = e.maxBusyTries || 3;
    }
    function l(e, t, n) {
        let r = 0;
        "function" == typeof t && (n = t, t = {}), o(e, "rimraf: missing path"), o.strictEqual(typeof e, "string", "rimraf: path should be a string"), 
        o.strictEqual(typeof n, "function", "rimraf: callback function required"), o(t, "rimraf: invalid options argument provided"), 
        o.strictEqual(typeof t, "object", "rimraf: options should be object"), s(t), c(e, t, function i(o) {
            if (o) {
                if (("EBUSY" === o.code || "ENOTEMPTY" === o.code || "EPERM" === o.code) && r < t.maxBusyTries) {
                    r++;
                    return setTimeout(() => c(e, t, i), 100 * r);
                }
                "ENOENT" === o.code && (o = null);
            }
            n(o);
        });
    }
    function c(e, t, n) {
        o(e), o(t), o("function" == typeof n), t.lstat(e, (r, i) => r && "ENOENT" === r.code ? n(null) : r && "EPERM" === r.code && a ? u(e, t, r, n) : i && i.isDirectory() ? h(e, t, r, n) : void t.unlink(e, r => {
            if (r) {
                if ("ENOENT" === r.code) return n(null);
                if ("EPERM" === r.code) return a ? u(e, t, r, n) : h(e, t, r, n);
                if ("EISDIR" === r.code) return h(e, t, r, n);
            }
            return n(r);
        }));
    }
    function u(e, t, n, r) {
        o(e), o(t), o("function" == typeof r), t.chmod(e, 438, i => {
            i ? r("ENOENT" === i.code ? null : n) : t.stat(e, (i, o) => {
                i ? r("ENOENT" === i.code ? null : n) : o.isDirectory() ? h(e, t, n, r) : t.unlink(e, r);
            });
        });
    }
    function d(e, t, n) {
        let r;
        o(e), o(t);
        try {
            t.chmodSync(e, 438);
        } catch (e) {
            if ("ENOENT" === e.code) return;
            throw n;
        }
        try {
            r = t.statSync(e);
        } catch (e) {
            if ("ENOENT" === e.code) return;
            throw n;
        }
        r.isDirectory() ? f(e, t, n) : t.unlinkSync(e);
    }
    function h(e, t, n, r) {
        o(e), o(t), o("function" == typeof r), t.rmdir(e, a => {
            !a || "ENOTEMPTY" !== a.code && "EEXIST" !== a.code && "EPERM" !== a.code ? a && "ENOTDIR" === a.code ? r(n) : r(a) : function(e, t, n) {
                o(e), o(t), o("function" == typeof n), t.readdir(e, (r, o) => {
                    if (r) return n(r);
                    let a, s = o.length;
                    if (0 === s) return t.rmdir(e, n);
                    o.forEach(r => {
                        l(i.join(e, r), t, r => {
                            if (!a) return r ? n(a = r) : void (0 == --s && t.rmdir(e, n));
                        });
                    });
                });
            }(e, t, r);
        });
    }
    function p(e, t) {
        let n;
        s(t = t || {}), o(e, "rimraf: missing path"), o.strictEqual(typeof e, "string", "rimraf: path should be a string"), 
        o(t, "rimraf: missing options"), o.strictEqual(typeof t, "object", "rimraf: options should be object");
        try {
            n = t.lstatSync(e);
        } catch (n) {
            if ("ENOENT" === n.code) return;
            "EPERM" === n.code && a && d(e, t, n);
        }
        try {
            n && n.isDirectory() ? f(e, t, null) : t.unlinkSync(e);
        } catch (n) {
            if ("ENOENT" === n.code) return;
            if ("EPERM" === n.code) return a ? d(e, t, n) : f(e, t, n);
            if ("EISDIR" !== n.code) throw n;
            f(e, t, n);
        }
    }
    function f(e, t, n) {
        o(e), o(t);
        try {
            t.rmdirSync(e);
        } catch (r) {
            if ("ENOTDIR" === r.code) throw n;
            if ("ENOTEMPTY" === r.code || "EEXIST" === r.code || "EPERM" === r.code) !function(e, t) {
                if (o(e), o(t), t.readdirSync(e).forEach(n => p(i.join(e, n), t)), !a) {
                    return t.rmdirSync(e, t);
                }
                {
                    const n = Date.now();
                    do {
                        try {
                            return t.rmdirSync(e, t);
                        } catch {}
                    } while (Date.now() - n < 500);
                }
            }(e, t); else if ("ENOENT" !== r.code) throw r;
        }
    }
    e.exports = l, l.sync = p;
}
