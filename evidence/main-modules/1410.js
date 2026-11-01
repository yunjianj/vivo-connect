// analysis/pretty/main.js:103678; webpack module 1410
function(e, t, n) {
    var r = n(694), i = n(1411), o = n(1412);
    const a = 0, s = 1, l = 2, c = 3;
    function u(e, t, n, i, s, l) {
        o.EventTarget.call(this), (l = l || {}).assembleFragments = !0;
        var c = this;
        this._url = e, this._readyState = a, this._protocol = void 0, this._extensions = "", 
        this._bufferedAmount = 0, this._binaryType = "arraybuffer", this._connection = void 0, 
        this._client = new r(l), this._client.on("connect", function(e) {
            p.call(c, e);
        }), this._client.on("connectFailed", function() {
            f.call(c);
        }), this._client.connect(e, t, n, i, s);
    }
    function d(e, t) {
        var n = new o.Event("close");
        return n.code = e, n.reason = t, n.wasClean = void 0 === e || 1e3 === e, n;
    }
    function h(e) {
        var t = new o.Event("message");
        return t.data = e, t;
    }
    function p(e) {
        var t = this;
        this._readyState = s, this._connection = e, this._protocol = e.protocol, this._extensions = e.extensions, 
        this._connection.on("close", function(e, n) {
            _.call(t, e, n);
        }), this._connection.on("message", function(e) {
            m.call(t, e);
        }), this.dispatchEvent(new o.Event("open"));
    }
    function f() {
        g.call(this), this._readyState = c;
        try {
            this.dispatchEvent(new o.Event("error"));
        } finally {
            this.dispatchEvent(d(1006, "connection failed"));
        }
    }
    function _(e, t) {
        g.call(this), this._readyState = c, this.dispatchEvent(d(e, t || ""));
    }
    function m(e) {
        if (e.utf8Data) this.dispatchEvent(h(e.utf8Data)); else if (e.binaryData && "arraybuffer" === this.binaryType) {
            for (var t = e.binaryData, n = new ArrayBuffer(t.length), r = new Uint8Array(n), i = 0, o = t.length; i < o; ++i) r[i] = t[i];
            this.dispatchEvent(h(n));
        }
    }
    function g() {
        this._client.removeAllListeners(), this._connection && this._connection.removeAllListeners();
    }
    e.exports = u, Object.defineProperties(u.prototype, {
        url: {
            get: function() {
                return this._url;
            }
        },
        readyState: {
            get: function() {
                return this._readyState;
            }
        },
        protocol: {
            get: function() {
                return this._protocol;
            }
        },
        extensions: {
            get: function() {
                return this._extensions;
            }
        },
        bufferedAmount: {
            get: function() {
                return this._bufferedAmount;
            }
        }
    }), Object.defineProperties(u.prototype, {
        binaryType: {
            get: function() {
                return this._binaryType;
            },
            set: function(e) {
                if ("arraybuffer" !== e) throw new SyntaxError('just "arraybuffer" type allowed for "binaryType" attribute');
                this._binaryType = e;
            }
        }
    }), [ [ "CONNECTING", a ], [ "OPEN", s ], [ "CLOSING", l ], [ "CLOSED", c ] ].forEach(function(e) {
        Object.defineProperty(u.prototype, e[0], {
            get: function() {
                return e[1];
            }
        });
    }), [ [ "CONNECTING", a ], [ "OPEN", s ], [ "CLOSING", l ], [ "CLOSED", c ] ].forEach(function(e) {
        Object.defineProperty(u, e[0], {
            get: function() {
                return e[1];
            }
        });
    }), u.prototype.send = function(e) {
        if (this._readyState !== s) throw new Error("cannot call send() while not connected");
        if ("string" == typeof e || e instanceof String) this._connection.sendUTF(e); else if (e instanceof Buffer) this._connection.sendBytes(e); else {
            if (!e.byteLength && 0 !== e.byteLength) throw new Error("unknown binary data:", e);
            e = i(e), this._connection.sendBytes(e);
        }
    }, u.prototype.close = function(e, t) {
        switch (this._readyState) {
          case a:
            f.call(this), this._client.on("connect", function(n) {
                e ? n.close(e, t) : n.close();
            });
            break;

          case s:
            this._readyState = l, e ? this._connection.close(e, t) : this._connection.close();
        }
    };
}
