// analysis/pretty/main.js:61779; webpack module 691
function(e, t, n) {
    for (var r = n(7), i = n(5), o = n(15), a = n(12).EventEmitter, s = n(342), l = /,\s*/, c = /;\s*/, u = /[\r\n]/g, d = /,\s*/, h = [ "(", ")", "<", ">", "@", ",", ";", ":", "\\", '"', "/", "[", "]", "?", "=", "{", "}", " ", String.fromCharCode(9) ], p = [ String.fromCharCode(127) ], f = 0; f < 31; f++) p.push(String.fromCharCode(f));
    var _ = /([\x00-\x20\x22\x28\x29\x2c\x2f\x3a-\x3f\x40\x5b-\x5e\x7b\x7d\x7f])/, m = /[^\x21\x23-\x2b\x2d-\x3a\x3c-\x5b\x5d-\x7e]/, g = /^"[^"]*"$/, v = /[\x00-\x20\x3b]/g, y = /[;,] */, E = {
        100: "Continue",
        101: "Switching Protocols",
        200: "OK",
        201: "Created",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        406: "Not Acceptable",
        407: "Proxy Authorization Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Long",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Requested Range Not Satisfiable",
        417: "Expectation Failed",
        426: "Upgrade Required",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported"
    };
    function b(e, t, n) {
        a.call(this), this.socket = e, this.httpRequest = t, this.resource = t.url, this.remoteAddress = e.remoteAddress, 
        this.remoteAddresses = [ this.remoteAddress ], this.serverConfig = n, this._socketIsClosing = !1, 
        this._socketCloseHandler = this._handleSocketCloseBeforeAccept.bind(this), this.socket.on("end", this._socketCloseHandler), 
        this.socket.on("close", this._socketCloseHandler), this._resolved = !1;
    }
    function w(e) {
        process.nextTick(function() {
            e.drop(1006, "TCP connection lost before handshake completed.", !0);
        });
    }
    i.inherits(b, a), b.prototype.readHandshake = function() {
        var e = this, t = this.httpRequest;
        if (this.resourceURL = o.parse(this.resource, !0), this.host = t.headers.host, !this.host) throw new Error("Client must provide a Host header.");
        if (this.key = t.headers["sec-websocket-key"], !this.key) throw new Error("Client must provide a value for Sec-WebSocket-Key.");
        if (this.webSocketVersion = parseInt(t.headers["sec-websocket-version"], 10), !this.webSocketVersion || isNaN(this.webSocketVersion)) throw new Error("Client must provide a value for Sec-WebSocket-Version.");
        switch (this.webSocketVersion) {
          case 8:
          case 13:
            break;

          default:
            var n = new Error("Unsupported websocket client version: " + this.webSocketVersion + "Only versions 8 and 13 are supported.");
            throw n.httpCode = 426, n.headers = {
                "Sec-WebSocket-Version": "13"
            }, n;
        }
        13 === this.webSocketVersion ? this.origin = t.headers.origin : 8 === this.webSocketVersion && (this.origin = t.headers["sec-websocket-origin"]);
        var r = t.headers["sec-websocket-protocol"];
        (this.protocolFullCaseMap = {}, this.requestedProtocols = [], r) && r.split(l).forEach(function(t) {
            var n = t.toLocaleLowerCase();
            e.requestedProtocols.push(n), e.protocolFullCaseMap[n] = t;
        });
        if (!this.serverConfig.ignoreXForwardedFor && t.headers["x-forwarded-for"]) {
            var i = this.remoteAddress;
            this.remoteAddresses = t.headers["x-forwarded-for"].split(d), this.remoteAddresses.push(i), 
            this.remoteAddress = this.remoteAddresses[0];
        }
        if (this.serverConfig.parseExtensions) {
            var a = t.headers["sec-websocket-extensions"];
            this.requestedExtensions = this.parseExtensions(a);
        } else this.requestedExtensions = [];
        if (this.serverConfig.parseCookies) {
            var s = t.headers.cookie;
            this.cookies = this.parseCookies(s);
        } else this.cookies = [];
    }, b.prototype.parseExtensions = function(e) {
        if (!e || 0 === e.length) return [];
        var t = e.toLocaleLowerCase().split(l);
        return t.forEach(function(e, t, n) {
            var r = e.split(c), i = r[0], o = r.slice(1);
            o.forEach(function(e, t, n) {
                var r = e.split("="), i = {
                    name: r[0],
                    value: r[1]
                };
                n.splice(t, 1, i);
            });
            var a = {
                name: i,
                params: o
            };
            n.splice(t, 1, a);
        }), t;
    }, b.prototype.parseCookies = function(e) {
        if (!e || "string" != typeof e) return [];
        var t = [];
        return e.split(y).forEach(function(e) {
            var n = e.indexOf("=");
            if (-1 !== n) {
                var r = e.substr(0, n).trim(), i = e.substr(++n, e.length).trim();
                '"' === i[0] && (i = i.slice(1, -1)), t.push({
                    name: r,
                    value: decodeURIComponent(i)
                });
            } else t.push({
                name: e,
                value: null
            });
        }), t;
    }, b.prototype.accept = function(e, t, n) {
        var i;
        this._verifyResolution(), e ? void 0 === (i = this.protocolFullCaseMap[e.toLocaleLowerCase()]) && (i = e) : i = e, 
        this.protocolFullCaseMap = null;
        var o = r.createHash("sha1");
        o.update(this.key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
        var a = "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " + o.digest("base64") + "\r\n";
        if (i) {
            for (var l = 0; l < i.length; l++) {
                var c = i.charCodeAt(l), d = i.charAt(l);
                if (c < 33 || c > 126 || -1 !== h.indexOf(d)) throw this.reject(500), new Error('Illegal character "' + String.fromCharCode(d) + '" in subprotocol.');
            }
            if (-1 === this.requestedProtocols.indexOf(e)) throw this.reject(500), new Error("Specified protocol was not requested by the client.");
            i = i.replace(u, ""), a += "Sec-WebSocket-Protocol: " + i + "\r\n";
        }
        if (this.requestedProtocols = null, t && (t = t.replace(u, ""), 13 === this.webSocketVersion ? a += "Origin: " + t + "\r\n" : 8 === this.webSocketVersion && (a += "Sec-WebSocket-Origin: " + t + "\r\n")), 
        n) {
            if (!Array.isArray(n)) throw this.reject(500), new Error('Value supplied for "cookies" argument must be an array.');
            var p = {};
            n.forEach(function(e) {
                if (!e.name || !e.value) throw this.reject(500), new Error('Each cookie to set must at least provide a "name" and "value"');
                if (e.name = e.name.replace(v, ""), e.value = e.value.replace(v, ""), p[e.name]) throw this.reject(500), 
                new Error("You may not specify the same cookie name twice.");
                p[e.name] = !0;
                var t = e.name.match(_);
                if (t) throw this.reject(500), new Error("Illegal character " + t[0] + " in cookie name");
                if (t = e.value.match(g) ? e.value.slice(1, -1).match(m) : e.value.match(m)) throw this.reject(500), 
                new Error("Illegal character " + t[0] + " in cookie value");
                var n = [ e.name + "=" + e.value ];
                if (e.path) {
                    if (t = e.path.match(v)) throw this.reject(500), new Error("Illegal character " + t[0] + " in cookie path");
                    n.push("Path=" + e.path);
                }
                if (e.domain) {
                    if ("string" != typeof e.domain) throw this.reject(500), new Error("Domain must be specified and must be a string.");
                    if (t = e.domain.match(v)) throw this.reject(500), new Error("Illegal character " + t[0] + " in cookie domain");
                    n.push("Domain=" + e.domain.toLowerCase());
                }
                if (e.expires) {
                    if (!(e.expires instanceof Date)) throw this.reject(500), new Error('Value supplied for cookie "expires" must be a vaild date object');
                    n.push("Expires=" + e.expires.toGMTString());
                }
                if (e.maxage) {
                    var r = e.maxage;
                    if ("string" == typeof r && (r = parseInt(r, 10)), isNaN(r) || r <= 0) throw this.reject(500), 
                    new Error('Value supplied for cookie "maxage" must be a non-zero number');
                    r = Math.round(r), n.push("Max-Age=" + r.toString(10));
                }
                if (e.secure) {
                    if ("boolean" != typeof e.secure) throw this.reject(500), new Error('Value supplied for cookie "secure" must be of type boolean');
                    n.push("Secure");
                }
                if (e.httponly) {
                    if ("boolean" != typeof e.httponly) throw this.reject(500), new Error('Value supplied for cookie "httponly" must be of type boolean');
                    n.push("HttpOnly");
                }
                a += "Set-Cookie: " + n.join(";") + "\r\n";
            }.bind(this));
        }
        this._resolved = !0, this.emit("requestResolved", this), a += "\r\n";
        var f = new s(this.socket, [], e, !1, this.serverConfig);
        f.webSocketVersion = this.webSocketVersion, f.remoteAddress = this.remoteAddress, 
        f.remoteAddresses = this.remoteAddresses;
        var y = this;
        return this._socketIsClosing ? w(f) : this.socket.write(a, "ascii", function(e) {
            e ? w(f) : (y._removeSocketCloseListeners(), f._addSocketEventListeners());
        }), this.emit("requestAccepted", f), f;
    }, b.prototype.reject = function(e, t, n) {
        this._verifyResolution(), this._resolved = !0, this.emit("requestResolved", this), 
        "number" != typeof e && (e = 403);
        var r = "HTTP/1.1 " + e + " " + E[e] + "\r\nConnection: close\r\n";
        if (t && (r += "X-WebSocket-Reject-Reason: " + (t = t.replace(u, "")) + "\r\n"), 
        n) for (var i in n) {
            var o = n[i].toString().replace(u, "");
            r += i.replace(u, "") + ": " + o + "\r\n";
        }
        r += "\r\n", this.socket.end(r, "ascii"), this.emit("requestRejected", this);
    }, b.prototype._handleSocketCloseBeforeAccept = function() {
        this._socketIsClosing = !0, this._removeSocketCloseListeners();
    }, b.prototype._removeSocketCloseListeners = function() {
        this.socket.removeListener("end", this._socketCloseHandler), this.socket.removeListener("close", this._socketCloseHandler);
    }, b.prototype._verifyResolution = function() {
        if (this._resolved) throw new Error("WebSocketRequest may only be accepted or rejected one time.");
    }, e.exports = b;
}
