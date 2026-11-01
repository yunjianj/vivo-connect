// analysis/pretty/main.js:108441; webpack module 1462
function(e, t, n) {
    "use strict";
    var r = n(5), i = n(104), o = n(300), a = n(15), s = n(237), l = n(353), c = (n(238), 
    {
        "http:": 80,
        "https:": 443,
        "ws:": 80,
        "wss:": 443
    }), u = [ "https:", "wss:" ], d = function(e, t, n) {
        n = n || {}, this.url = e, this._driver = s.client(this.url, {
            maxLength: n.maxLength,
            protocols: t
        }), [ "open", "error" ].forEach(function(e) {
            this._driver.on(e, function() {
                v.headers = v._driver.headers, v.statusCode = v._driver.statusCode;
            });
        }, this);
        var r = n.proxy || {}, d = a.parse(r.origin || this.url), h = d.port || c[d.protocol], p = u.indexOf(d.protocol) >= 0, f = function() {
            v._onConnect();
        }, _ = n.net || {}, m = n.tls || {}, g = r.origin ? r.tls || {} : m, v = this;
        _.host = g.host = d.hostname, _.port = g.port = h, m.ca = m.ca || n.ca, g.servername = g.servername || d.hostname, 
        this._stream = p ? o.connect(g, f) : i.connect(_, f), r.origin && this._configureProxy(r, m), 
        l.call(this, n);
    };
    r.inherits(d, l), d.prototype._onConnect = function() {
        (this._proxy || this._driver).start();
    }, d.prototype._configureProxy = function(e, t) {
        var n, r = a.parse(this.url), i = u.indexOf(r.protocol) >= 0, s = this;
        if (this._proxy = this._driver.proxy(e.origin), e.headers) for (n in e.headers) this._proxy.setHeader(n, e.headers[n]);
        this._proxy.pipe(this._stream, {
            end: !1
        }), this._stream.pipe(this._proxy), this._proxy.on("connect", function() {
            if (i) {
                var e = {
                    socket: s._stream,
                    servername: r.hostname
                };
                for (n in t) e[n] = t[n];
                s._stream = o.connect(e), s._configureStream();
            }
            s._driver.io.pipe(s._stream), s._stream.pipe(s._driver.io), s._driver.start();
        }), this._proxy.on("error", function(e) {
            s._driver.emit("error", e);
        });
    }, e.exports = d;
}
