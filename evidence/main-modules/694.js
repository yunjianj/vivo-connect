// analysis/pretty/main.js:62049; webpack module 694
function(e, t, n) {
    var r = n(111), i = r.extend, o = n(5), a = n(12).EventEmitter, s = n(39), l = n(43), c = n(15), u = n(7), d = n(342), h = r.bufferAllocUnsafe, p = [ "(", ")", "<", ">", "@", ",", ";", ":", "\\", '"', "/", "[", "]", "?", "=", "{", "}", " ", String.fromCharCode(9) ], f = [ "hostname", "port", "method", "path", "headers" ];
    function _(e) {
        var t;
        (a.call(this), this.config = {
            maxReceivedFrameSize: 1048576,
            maxReceivedMessageSize: 8388608,
            fragmentOutgoingMessages: !0,
            fragmentationThreshold: 16384,
            webSocketVersion: 13,
            assembleFragments: !0,
            disableNagleAlgorithm: !0,
            closeTimeout: 5e3,
            tlsOptions: {}
        }, e) && (e.tlsOptions ? (t = e.tlsOptions, delete e.tlsOptions) : t = {}, i(this.config, e), 
        i(this.config.tlsOptions, t));
        switch (this._req = null, this.config.webSocketVersion) {
          case 8:
          case 13:
            break;

          default:
            throw new Error("Requested webSocketVersion is not supported. Allowed values are 8 and 13.");
        }
    }
    o.inherits(_, a), _.prototype.connect = function(e, t, n, o, a) {
        var u = this;
        if ("string" == typeof t && (t = t.length > 0 ? [ t ] : []), t instanceof Array || (t = []), 
        this.protocols = t, this.origin = n, this.url = "string" == typeof e ? c.parse(e) : e, 
        !this.url.protocol) throw new Error("You must specify a full WebSocket URL, including protocol.");
        if (!this.url.host) throw new Error("You must specify a full WebSocket URL, including hostname. Relative URLs are not supported.");
        this.secure = "wss:" === this.url.protocol, this.protocols.forEach(function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e.charCodeAt(t), r = e.charAt(t);
                if (n < 33 || n > 126 || -1 !== p.indexOf(r)) throw new Error('Protocol list contains invalid character "' + String.fromCharCode(n) + '"');
            }
        });
        this.url.port || (this.url.port = {
            "ws:": "80",
            "wss:": "443"
        }[this.url.protocol]);
        for (var d = h(16), _ = 0; _ < 16; _++) d[_] = Math.round(255 * Math.random());
        this.base64nonce = d.toString("base64");
        var m = this.url.hostname;
        ("ws:" === this.url.protocol && "80" !== this.url.port || "wss:" === this.url.protocol && "443" !== this.url.port) && (m += ":" + this.url.port);
        var g, v = {};
        function y(e) {
            u._req = null, u.emit("connectFailed", e);
        }
        this.secure && this.config.tlsOptions.hasOwnProperty("headers") && i(v, this.config.tlsOptions.headers), 
        o && i(v, o), i(v, {
            Upgrade: "websocket",
            Connection: "Upgrade",
            "Sec-WebSocket-Version": this.config.webSocketVersion.toString(10),
            "Sec-WebSocket-Key": this.base64nonce,
            Host: v.Host || m
        }), this.protocols.length > 0 && (v["Sec-WebSocket-Protocol"] = this.protocols.join(", ")), 
        this.origin && (13 === this.config.webSocketVersion ? v.Origin = this.origin : 8 === this.config.webSocketVersion && (v["Sec-WebSocket-Origin"] = this.origin)), 
        g = this.url.pathname ? this.url.path : this.url.path ? "/" + this.url.path : "/";
        var E = {
            agent: !1
        };
        if (a && i(E, a), i(E, {
            hostname: this.url.hostname,
            port: this.url.port,
            method: "GET",
            path: g,
            headers: v
        }), this.secure) {
            var b = this.config.tlsOptions;
            for (var w in b) b.hasOwnProperty(w) && -1 === f.indexOf(w) && (E[w] = b[w]);
        }
        var S = this._req = (this.secure ? l : s).request(E);
        S.on("upgrade", function(e, t, n) {
            u._req = null, S.removeListener("error", y), u.socket = t, u.response = e, u.firstDataChunk = n, 
            u.validateHandshake();
        }), S.on("error", y), S.on("response", function(e) {
            if (u._req = null, r.eventEmitterListenerCount(u, "httpResponse") > 0) u.emit("httpResponse", e, u), 
            e.socket && e.socket.end(); else {
                var t = [];
                for (var n in e.headers) t.push(n + ": " + e.headers[n]);
                u.failHandshake("Server responded with a non-101 status: " + e.statusCode + " " + e.statusMessage + "\nResponse Headers Follow:\n" + t.join("\n") + "\n");
            }
        }), S.end();
    }, _.prototype.validateHandshake = function() {
        var e = this.response.headers;
        if (this.protocols.length > 0) {
            if (this.protocol = e["sec-websocket-protocol"], !this.protocol) return void this.failHandshake("Expected a Sec-WebSocket-Protocol header.");
            if (-1 === this.protocols.indexOf(this.protocol)) return void this.failHandshake("Server did not respond with a requested protocol.");
        }
        if (e.connection && "upgrade" === e.connection.toLocaleLowerCase()) if (e.upgrade && "websocket" === e.upgrade.toLocaleLowerCase()) {
            var t = u.createHash("sha1");
            t.update(this.base64nonce + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11");
            var n = t.digest("base64");
            e["sec-websocket-accept"] ? e["sec-websocket-accept"] === n ? this.succeedHandshake() : this.failHandshake("Sec-WebSocket-Accept header from server didn't match expected value of " + n) : this.failHandshake("Expected Sec-WebSocket-Accept header from server");
        } else this.failHandshake("Expected an Upgrade: websocket header from the server"); else this.failHandshake("Expected a Connection: Upgrade header from the server");
    }, _.prototype.failHandshake = function(e) {
        this.socket && this.socket.writable && this.socket.end(), this.emit("connectFailed", new Error(e));
    }, _.prototype.succeedHandshake = function() {
        var e = new d(this.socket, [], this.protocol, !0, this.config);
        e.webSocketVersion = this.config.webSocketVersion, e._addSocketEventListeners(), 
        this.emit("connect", e), this.firstDataChunk.length > 0 && e.handleSocketData(this.firstDataChunk), 
        this.firstDataChunk = null;
    }, _.prototype.abort = function() {
        this._req && this._req.abort();
    }, e.exports = _;
}
