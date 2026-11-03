// analysis/pretty/main.js:73634; webpack module 805
function(e, t, n) {
    "use strict";
    var r = n(15).parse, i = {
        ftp: 21,
        gopher: 70,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    }, o = String.prototype.endsWith || function(e) {
        return e.length <= this.length && -1 !== this.indexOf(e, this.length - e.length);
    };
    function a(e) {
        return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
    }
    t.getProxyForUrl = function(e) {
        var t = "string" == typeof e ? r(e) : e || {}, n = t.protocol, s = t.host, l = t.port;
        if ("string" != typeof s || !s || "string" != typeof n) return "";
        if (n = n.split(":", 1)[0], !function(e, t) {
            var n = (a("npm_config_no_proxy") || a("no_proxy")).toLowerCase();
            if (!n) return !0;
            if ("*" === n) return !1;
            return n.split(/[,\s]/).every(function(n) {
                if (!n) return !0;
                var r = n.match(/^(.+):(\d+)$/), i = r ? r[1] : n, a = r ? parseInt(r[2]) : 0;
                return !(!a || a === t) || (/^[.*]/.test(i) ? ("*" === i.charAt(0) && (i = i.slice(1)), 
                !o.call(e, i)) : e !== i);
            });
        }(s = s.replace(/:\d*$/, ""), l = parseInt(l) || i[n] || 0)) return "";
        var c = a("npm_config_" + n + "_proxy") || a(n + "_proxy") || a("npm_config_proxy") || a("all_proxy");
        return c && -1 === c.indexOf("://") && (c = n + "://" + c), c;
    };
}
