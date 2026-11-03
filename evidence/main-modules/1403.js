// analysis/pretty/main.js:103399; webpack module 1403
function(e, t, n) {
    var r = n(4), i = n(1), o = n(8), a = require, s = process.config && process.config.variables || {}, l = !!process.env.PREBUILDS_ONLY, c = process.versions.modules, u = !(!process.versions || !process.versions.electron) || !!process.env.ELECTRON_RUN_AS_NODE || "undefined" != typeof window && window.process && "renderer" === window.process.type ? "electron" : process.versions && process.versions.nw ? "node-webkit" : "node", d = process.env.npm_config_arch || o.arch(), h = process.env.npm_config_platform || o.platform(), p = process.env.LIBC || (function(e) {
        return "linux" === e && r.existsSync("/etc/alpine-release");
    }(h) ? "musl" : "glibc"), f = process.env.ARM_VERSION || ("arm64" === d ? "8" : s.arm_version) || "", _ = (process.versions.uv || "").split(".")[0];
    function m(e) {
        return a(m.resolve(e));
    }
    function g(e) {
        try {
            return r.readdirSync(e);
        } catch (e) {
            return [];
        }
    }
    function v(e, t) {
        var n = g(e).filter(t);
        return n[0] && i.join(e, n[0]);
    }
    function y(e) {
        return /\.node$/.test(e);
    }
    function E(e) {
        var t = e.split("-");
        if (2 === t.length) {
            var n = t[0], r = t[1].split("+");
            if (n && r.length && r.every(Boolean)) return {
                name: e,
                platform: n,
                architectures: r
            };
        }
    }
    function b(e, t) {
        return function(n) {
            return null != n && (n.platform === e && n.architectures.includes(t));
        };
    }
    function w(e, t) {
        return e.architectures.length - t.architectures.length;
    }
    function S(e) {
        var t = e.split("."), n = {
            file: e,
            specificity: 0
        };
        if ("node" === t.pop()) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if ("node" === i || "electron" === i || "node-webkit" === i) n.runtime = i; else if ("napi" === i) n.napi = !0; else if ("abi" === i.slice(0, 3)) n.abi = i.slice(3); else if ("uv" === i.slice(0, 2)) n.uv = i.slice(2); else if ("armv" === i.slice(0, 4)) n.armv = i.slice(4); else {
                    if ("glibc" !== i && "musl" !== i) continue;
                    n.libc = i;
                }
                n.specificity++;
            }
            return n;
        }
    }
    function T(e, t) {
        return function(n) {
            return null != n && (!(n.runtime && n.runtime !== e && !function(e) {
                return "node" === e.runtime && e.napi;
            }(n)) && (!(n.abi && n.abi !== t && !n.napi) && ((!n.uv || n.uv === _) && ((!n.armv || n.armv === f) && (!n.libc || n.libc === p)))));
        };
    }
    function A(e) {
        return function(t, n) {
            return t.runtime !== n.runtime ? t.runtime === e ? -1 : 1 : t.abi !== n.abi ? t.abi ? -1 : 1 : t.specificity !== n.specificity ? t.specificity > n.specificity ? -1 : 1 : 0;
        };
    }
    e.exports = m, m.resolve = m.path = function(e) {
        e = i.resolve(e || ".");
        try {
            var t = a(i.join(e, "package.json")).name.toUpperCase().replace(/-/g, "_");
            process.env[t + "_PREBUILD"] && (e = process.env[t + "_PREBUILD"]);
        } catch (e) {}
        if (!l) {
            var n = v(i.join(e, "build/Release"), y);
            if (n) return n;
            var r = v(i.join(e, "build/Debug"), y);
            if (r) return r;
        }
        var o = O(e);
        if (o) return o;
        var s = O(i.dirname(process.execPath));
        if (s) return s;
        var m = [ "platform=" + h, "arch=" + d, "runtime=" + u, "abi=" + c, "uv=" + _, f ? "armv=" + f : "", "libc=" + p, "node=" + process.versions.node, process.versions.electron ? "electron=" + process.versions.electron : "", "webpack=true" ].filter(Boolean).join(" ");
        throw new Error("No native build was found for " + m + "\n    loaded from: " + e + "\n");
        function O(e) {
            var t = g(i.join(e, "prebuilds")).map(E).filter(b(h, d)).sort(w)[0];
            if (t) {
                var n = i.join(e, "prebuilds", t.name), r = g(n).map(S).filter(T(u, c)).sort(A(u))[0];
                return r ? i.join(n, r.file) : void 0;
            }
        }
    }, m.parseTags = S, m.matchTags = T, m.compareTags = A, m.parseTuple = E, m.matchTuple = b, 
    m.compareTuples = w;
}
