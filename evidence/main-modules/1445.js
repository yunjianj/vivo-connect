// analysis/pretty/main.js:107620; webpack module 1445
function(e, t, n) {
    var r, i, o, a, s;
    function l() {
        s = !1, r = n(1446), i = n(4), o = n(704)({
            bufferStdout: !0,
            bufferStderr: !0
        }), a = n(149)("regedit:cscript");
    }
    l();
    var c = e.exports.CSCRIPT_NOT_FOUND = "INFO: Could not find files for the given pattern(s).", u = e.exports.CSCRIPT_EXPECTED_OUTPUT = "Microsoft (R) Windows Script Host Version", d = "cscript.exe";
    function h(e) {
        a("spawnCScriptSucceeded()"), o("cscript.exe", function(t, n) {
            if (t) return "ENOENT" === t.code ? e(null, !1) : e(t);
            d = "cscript.exe", e(null, n.indexOf(u) > -1);
        });
    }
    function p(e) {
        a("whereCScriptSucceeded()"), o("where cscript.exe", function(t, n) {
            return t ? "ENOENT" === t.code ? e(null, !1) : e(t) : "string" != typeof n || n.indexOf(c) > -1 ? e(null, !1) : (d = n.trim(), 
            void e(null, !0));
        });
    }
    function f(e) {
        a("fsStatCScriptSucceeded()"), i.stat("c:\\windows\\system32\\cscript.exe", function(t) {
            if (t) return "ENOENT" === t.code ? e(null, !1) : e(t);
            d = "c:\\windows\\system32\\cscript.exe", e(null, !0);
        });
    }
    function _(e) {
        e(new Error("cscript not found"));
    }
    e.exports.path = function() {
        if (!1 === s) throw new Error("must initialize first");
        return a(d), d;
    }, e.exports.init = function(e) {
        if (a("init()"), s) return a("already initialized"), setImmediate(e);
        r(h).or(p).or(f).then(function(e) {
            s = !0, e();
        }).else(_)(function(t) {
            if (t) return e(t);
            e();
        });
    }, e.exports._mock = function(e, t, n) {
        i = e, o = t, s = n;
    }, e.exports._mockReset = l;
}
