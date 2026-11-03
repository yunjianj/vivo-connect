// analysis/pretty/main.js:37731; webpack module 353
function(e, t, n) {
    "use strict";
    var r = n(9).Stream, i = n(5), o = n(237), a = n(711), s = n(238), l = function(e) {
        e = e || {}, o.validateOptions(e, [ "headers", "extensions", "maxLength", "ping", "proxy", "tls", "ca" ]), 
        this.readable = this.writable = !0;
        var t = e.headers;
        if (t) for (var n in t) this._driver.setHeader(n, t[n]);
        var r = e.extensions;
        r && [].concat(r).forEach(this._driver.addExtension, this._driver), this._ping = e.ping, 
        this._pingId = 0, this.readyState = l.CONNECTING, this.bufferedAmount = 0, this.protocol = "", 
        this.url = this._driver.url, this.version = this._driver.version;
        var i = this;
        this._driver.on("open", function(e) {
            i._open();
        }), this._driver.on("message", function(e) {
            i._receiveMessage(e.data);
        }), this._driver.on("close", function(e) {
            i._beginClose(e.reason, e.code);
        }), this._driver.on("error", function(e) {
            i._emitError(e.message);
        }), this.on("error", function() {}), this._driver.messages.on("drain", function() {
            i.emit("drain");
        }), this._ping && (this._pingTimer = setInterval(function() {
            i._pingId += 1, i.ping(i._pingId.toString());
        }, 1e3 * this._ping)), this._configureStream(), this._proxy || (this._stream.pipe(this._driver.io), 
        this._driver.io.pipe(this._stream));
    };
    i.inherits(l, r), l.CONNECTING = 0, l.OPEN = 1, l.CLOSING = 2, l.CLOSED = 3, l.CLOSE_TIMEOUT = 3e4;
    var c = {
        write: function(e) {
            return this.send(e);
        },
        end: function(e) {
            void 0 !== e && this.send(e), this.close();
        },
        pause: function() {
            return this._driver.messages.pause();
        },
        resume: function() {
            return this._driver.messages.resume();
        },
        send: function(e) {
            return !(this.readyState > l.OPEN) && (e instanceof Buffer || (e = String(e)), this._driver.messages.write(e));
        },
        ping: function(e, t) {
            return !(this.readyState > l.OPEN) && this._driver.ping(e, t);
        },
        close: function(e, t) {
            if (void 0 === e && (e = 1e3), void 0 === t && (t = ""), 1e3 !== e && (e < 3e3 || e > 4999)) throw new Error("Failed to execute 'close' on WebSocket: The code must be either 1000, or between 3000 and 4999. " + e + " is neither.");
            if (this.readyState < l.CLOSING) {
                var n = this;
                this._closeTimer = setTimeout(function() {
                    n._beginClose("", 1006);
                }, l.CLOSE_TIMEOUT);
            }
            this.readyState !== l.CLOSED && (this.readyState = l.CLOSING), this._driver.close(t, e);
        },
        _configureStream: function() {
            var e = this;
            this._stream.setTimeout(0), this._stream.setNoDelay(!0), [ "close", "end" ].forEach(function(t) {
                this._stream.on(t, function() {
                    e._finalizeClose();
                });
            }, this), this._stream.on("error", function(t) {
                e._emitError("Network error: " + e.url + ": " + t.message), e._finalizeClose();
            });
        },
        _open: function() {
            if (this.readyState === l.CONNECTING) {
                this.readyState = l.OPEN, this.protocol = this._driver.protocol || "";
                var e = new s("open");
                e.initEvent("open", !1, !1), this.dispatchEvent(e);
            }
        },
        _receiveMessage: function(e) {
            if (this.readyState > l.OPEN) return !1;
            this.readable && this.emit("data", e);
            var t = new s("message", {
                data: e
            });
            t.initEvent("message", !1, !1), this.dispatchEvent(t);
        },
        _emitError: function(e) {
            if (!(this.readyState >= l.CLOSING)) {
                var t = new s("error", {
                    message: e
                });
                t.initEvent("error", !1, !1), this.dispatchEvent(t);
            }
        },
        _beginClose: function(e, t) {
            this.readyState !== l.CLOSED && (this.readyState = l.CLOSING, this._closeParams = [ e, t ], 
            this._stream && (this._stream.destroy(), this._stream.readable || this._finalizeClose()));
        },
        _finalizeClose: function() {
            if (this.readyState !== l.CLOSED) {
                this.readyState = l.CLOSED, this._closeTimer && clearTimeout(this._closeTimer), 
                this._pingTimer && clearInterval(this._pingTimer), this._stream && this._stream.end(), 
                this.readable && this.emit("end"), this.readable = this.writable = !1;
                var e = this._closeParams ? this._closeParams[0] : "", t = this._closeParams ? this._closeParams[1] : 1006, n = new s("close", {
                    code: t,
                    reason: e
                });
                n.initEvent("close", !1, !1), this.dispatchEvent(n);
            }
        }
    };
    for (var u in c) l.prototype[u] = c[u];
    for (var d in a) l.prototype[d] = a[d];
    e.exports = l;
}
