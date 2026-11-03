// analysis/pretty/main.js:97139; webpack module 1266
function(e, t, n) {
    "use strict";
    var r = n(15), i = n(1267), o = [ "accept", "accept-charset", "accept-encoding", "accept-language", "accept-ranges", "cache-control", "content-encoding", "content-language", "content-location", "content-md5", "content-range", "content-type", "connection", "date", "expect", "max-forwards", "pragma", "referer", "te", "user-agent", "via" ], a = [ "proxy-authorization" ];
    function s(e) {
        this.request = e, this.proxyHeaderWhiteList = o, this.proxyHeaderExclusiveList = [], 
        void 0 !== e.tunnel && (this.tunnelOverride = e.tunnel);
    }
    s.prototype.isEnabled = function() {
        var e = this.request;
        return void 0 !== this.tunnelOverride ? this.tunnelOverride : "https:" === e.uri.protocol;
    }, s.prototype.setup = function(e) {
        var t = this.request;
        if (e = e || {}, "string" == typeof t.proxy && (t.proxy = r.parse(t.proxy)), !t.proxy || !t.tunnel) return !1;
        e.proxyHeaderWhiteList && (this.proxyHeaderWhiteList = e.proxyHeaderWhiteList), 
        e.proxyHeaderExclusiveList && (this.proxyHeaderExclusiveList = e.proxyHeaderExclusiveList);
        var n, o, s, l, c = this.proxyHeaderExclusiveList.concat(a), u = this.proxyHeaderWhiteList.concat(c), d = function(e, t) {
            var n = t.reduce(function(e, t) {
                return e[t.toLowerCase()] = !0, e;
            }, {});
            return Object.keys(e).filter(function(e) {
                return n[e.toLowerCase()];
            }).reduce(function(t, n) {
                return t[n] = e[n], t;
            }, {});
        }(t.headers, u);
        d.host = (n = t.uri, o = n.port, s = n.protocol, l = n.hostname + ":", l += o || ("https:" === s ? "443" : "80")), 
        c.forEach(t.removeHeader, t);
        var h = function(e) {
            var t = function(e, t) {
                return [ "https:" === e.protocol ? "https" : "http", "https:" === t.protocol ? "Https" : "Http" ].join("Over");
            }(e.uri, e.proxy);
            return i[t];
        }(t), p = function(e, t) {
            var n = e.proxy;
            return {
                proxy: {
                    host: n.hostname,
                    port: +n.port,
                    proxyAuth: n.auth,
                    headers: t
                },
                headers: e.headers,
                ca: e.ca,
                cert: e.cert,
                key: e.key,
                passphrase: e.passphrase,
                pfx: e.pfx,
                ciphers: e.ciphers,
                rejectUnauthorized: e.rejectUnauthorized,
                secureOptions: e.secureOptions,
                secureProtocol: e.secureProtocol
            };
        }(t, d);
        return t.agent = h(p), !0;
    }, s.defaultProxyHeaderWhiteList = o, s.defaultProxyHeaderExclusiveList = a, t.Tunnel = s;
}
