// analysis/pretty/main.js:97194; webpack module 1267
function(e, t, n) {
    "use strict";
    n(104);
    var r, i = n(300), o = n(39), a = n(43), s = n(12), l = n(44), c = n(5), u = n(37).Buffer;
    function d(e) {
        var t = this;
        t.options = e || {}, t.proxyOptions = t.options.proxy || {}, t.maxSockets = t.options.maxSockets || o.Agent.defaultMaxSockets, 
        t.requests = [], t.sockets = [], t.on("free", function(e, n, r) {
            for (var i = 0, o = t.requests.length; i < o; ++i) {
                var a = t.requests[i];
                if (a.host === n && a.port === r) return t.requests.splice(i, 1), void a.request.onSocket(e);
            }
            e.destroy(), t.removeSocket(e);
        });
    }
    function h(e, t) {
        var n = this;
        d.prototype.createSocket.call(n, e, function(r) {
            var o = i.connect(0, p({}, n.options, {
                servername: e.host,
                socket: r
            }));
            n.sockets[n.sockets.indexOf(r)] = o, t(o);
        });
    }
    function p(e) {
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var r = arguments[t];
            if ("object" == typeof r) for (var i = Object.keys(r), o = 0, a = i.length; o < a; ++o) {
                var s = i[o];
                void 0 !== r[s] && (e[s] = r[s]);
            }
        }
        return e;
    }
    t.httpOverHttp = function(e) {
        var t = new d(e);
        return t.request = o.request, t;
    }, t.httpsOverHttp = function(e) {
        var t = new d(e);
        return t.request = o.request, t.createSocket = h, t.defaultPort = 443, t;
    }, t.httpOverHttps = function(e) {
        var t = new d(e);
        return t.request = a.request, t;
    }, t.httpsOverHttps = function(e) {
        var t = new d(e);
        return t.request = a.request, t.createSocket = h, t.defaultPort = 443, t;
    }, c.inherits(d, s.EventEmitter), d.prototype.addRequest = function(e, t) {
        var n = this;
        "string" == typeof t && (t = {
            host: t,
            port: arguments[2],
            path: arguments[3]
        }), n.sockets.length >= this.maxSockets ? n.requests.push({
            host: t.host,
            port: t.port,
            request: e
        }) : n.createConnection({
            host: t.host,
            port: t.port,
            request: e
        });
    }, d.prototype.createConnection = function(e) {
        var t = this;
        t.createSocket(e, function(n) {
            function r() {
                t.emit("free", n, e.host, e.port);
            }
            function i(e) {
                t.removeSocket(n), n.removeListener("free", r), n.removeListener("close", i), n.removeListener("agentRemove", i);
            }
            n.on("free", r), n.on("close", i), n.on("agentRemove", i), e.request.onSocket(n);
        });
    }, d.prototype.createSocket = function(e, t) {
        var n = this, i = {};
        n.sockets.push(i);
        var o = p({}, n.proxyOptions, {
            method: "CONNECT",
            path: e.host + ":" + e.port,
            agent: !1
        });
        o.proxyAuth && (o.headers = o.headers || {}, o.headers["Proxy-Authorization"] = "Basic " + u.from(o.proxyAuth).toString("base64")), 
        r("making CONNECT request");
        var a = n.request(o);
        function s(o, s, c) {
            if (a.removeAllListeners(), s.removeAllListeners(), 200 === o.statusCode) l.equal(c.length, 0), 
            r("tunneling connection has established"), n.sockets[n.sockets.indexOf(i)] = s, 
            t(s); else {
                r("tunneling socket could not be established, statusCode=%d", o.statusCode);
                var u = new Error("tunneling socket could not be established, statusCode=" + o.statusCode);
                u.code = "ECONNRESET", e.request.emit("error", u), n.removeSocket(i);
            }
        }
        a.useChunkedEncodingByDefault = !1, a.once("response", function(e) {
            e.upgrade = !0;
        }), a.once("upgrade", function(e, t, n) {
            process.nextTick(function() {
                s(e, t, n);
            });
        }), a.once("connect", s), a.once("error", function(t) {
            a.removeAllListeners(), r("tunneling socket could not be established, cause=%s\n", t.message, t.stack);
            var o = new Error("tunneling socket could not be established, cause=" + t.message);
            o.code = "ECONNRESET", e.request.emit("error", o), n.removeSocket(i);
        }), a.end();
    }, d.prototype.removeSocket = function(e) {
        var t = this.sockets.indexOf(e);
        if (-1 !== t) {
            this.sockets.splice(t, 1);
            var n = this.requests.shift();
            n && this.createConnection(n);
        }
    }, r = process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG) ? function() {
        var e = Array.prototype.slice.call(arguments);
        "string" == typeof e[0] ? e[0] = "TUNNEL: " + e[0] : e.unshift("TUNNEL:"), console.error.apply(console, e);
    } : function() {}, t.debug = r;
}
