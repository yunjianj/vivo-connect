// analysis/pretty/main.js:107801; webpack module 1450
function(e, t, n) {
    "use strict";
    var r = n(37).Buffer, i = n(7), o = n(15), a = n(5), s = n(352), l = n(114), c = n(707), u = n(1459), d = function(e, t) {
        this.version = "hybi-" + c.VERSION, c.call(this, null, e, t), this.readyState = -1, 
        this._key = d.generateKey(), this._accept = c.generateAccept(this._key), this._http = new s("response");
        var n = o.parse(this.url), i = n.auth && r.from(n.auth, "utf8").toString("base64");
        if (this.VALID_PROTOCOLS.indexOf(n.protocol) < 0) throw new Error(this.url + " is not a valid WebSocket URL");
        this._pathname = (n.pathname || "/") + (n.search || ""), this._headers.set("Host", n.host), 
        this._headers.set("Upgrade", "websocket"), this._headers.set("Connection", "Upgrade"), 
        this._headers.set("Sec-WebSocket-Key", this._key), this._headers.set("Sec-WebSocket-Version", c.VERSION), 
        this._protocols.length > 0 && this._headers.set("Sec-WebSocket-Protocol", this._protocols.join(", ")), 
        i && this._headers.set("Authorization", "Basic " + i);
    };
    a.inherits(d, c), d.generateKey = function() {
        return i.randomBytes(16).toString("base64");
    };
    var h = {
        VALID_PROTOCOLS: [ "ws:", "wss:" ],
        proxy: function(e, t) {
            return new u(this, e, t);
        },
        start: function() {
            return -1 === this.readyState && (this._write(this._handshakeRequest()), this.readyState = 0, 
            !0);
        },
        parse: function(e) {
            if (3 !== this.readyState) {
                if (this.readyState > 0) return c.prototype.parse.call(this, e);
                this._http.parse(e), this._http.isComplete() && (this._validateHandshake(), 3 !== this.readyState && (this._open(), 
                this.parse(this._http.body)));
            }
        },
        _handshakeRequest: function() {
            var e = this._extensions.generateOffer();
            e && this._headers.set("Sec-WebSocket-Extensions", e);
            var t = [ "GET " + this._pathname + " HTTP/1.1", this._headers.toString(), "" ];
            return r.from(t.join("\r\n"), "utf8");
        },
        _failHandshake: function(e) {
            e = "Error during WebSocket handshake: " + e, this.readyState = 3, this.emit("error", new Error(e)), 
            this.emit("close", new l.CloseEvent(this.ERRORS.protocol_error, e));
        },
        _validateHandshake: function() {
            if (this.statusCode = this._http.statusCode, this.headers = this._http.headers, 
            this._http.error) return this._failHandshake(this._http.error.message);
            if (101 !== this._http.statusCode) return this._failHandshake("Unexpected response code: " + this._http.statusCode);
            var e = this._http.headers, t = e.upgrade || "", n = e.connection || "", r = e["sec-websocket-accept"] || "", i = e["sec-websocket-protocol"] || "";
            if ("" === t) return this._failHandshake("'Upgrade' header is missing");
            if ("websocket" !== t.toLowerCase()) return this._failHandshake("'Upgrade' header value is not 'WebSocket'");
            if ("" === n) return this._failHandshake("'Connection' header is missing");
            if ("upgrade" !== n.toLowerCase()) return this._failHandshake("'Connection' header value is not 'Upgrade'");
            if (r !== this._accept) return this._failHandshake("Sec-WebSocket-Accept mismatch");
            if (this.protocol = null, "" !== i) {
                if (this._protocols.indexOf(i) < 0) return this._failHandshake("Sec-WebSocket-Protocol mismatch");
                this.protocol = i;
            }
            try {
                this._extensions.activate(this.headers["sec-websocket-extensions"]);
            } catch (e) {
                return this._failHandshake(e.message);
            }
        }
    };
    for (var p in h) d.prototype[p] = h[p];
    e.exports = d;
}
