// analysis/pretty/main.js:108486; webpack module 1463
function(e, t, n) {
    "use strict";
    var r = n(9).Stream, i = n(5), o = n(237), a = n(351), s = n(353), l = n(711), c = n(238), u = function(e, t, n) {
        this.writable = !0, n = n || {}, this._stream = t.socket, this._ping = n.ping || this.DEFAULT_PING, 
        this._retry = n.retry || this.DEFAULT_RETRY;
        var r = o.isSecureRequest(e) ? "https:" : "http:";
        this.url = r + "//" + e.headers.host + e.url, this.lastEventId = e.headers["last-event-id"] || "", 
        this.readyState = s.CONNECTING;
        var i = new a, l = this;
        if (n.headers) for (var c in n.headers) i.set(c, n.headers[c]);
        if (this._stream && this._stream.writable) {
            process.nextTick(function() {
                l._open();
            }), this._stream.setTimeout(0), this._stream.setNoDelay(!0);
            var u = "HTTP/1.1 200 OK\r\nContent-Type: text/event-stream\r\nCache-Control: no-cache, no-store\r\nConnection: close\r\n" + i.toString() + "\r\nretry: " + Math.floor(1e3 * this._retry) + "\r\n\r\n";
            this._write(u), this._stream.on("drain", function() {
                l.emit("drain");
            }), this._ping && (this._pingTimer = setInterval(function() {
                l.ping();
            }, 1e3 * this._ping)), [ "error", "end" ].forEach(function(e) {
                l._stream.on(e, function() {
                    l.close();
                });
            });
        }
    };
    i.inherits(u, r), u.isEventSource = function(e) {
        return "GET" === e.method && (e.headers.accept || "").split(/\s*,\s*/).indexOf("text/event-stream") >= 0;
    };
    var d = {
        DEFAULT_PING: 10,
        DEFAULT_RETRY: 5,
        _write: function(e) {
            if (!this.writable) return !1;
            try {
                return this._stream.write(e, "utf8");
            } catch (e) {
                return !1;
            }
        },
        _open: function() {
            if (this.readyState === s.CONNECTING) {
                this.readyState = s.OPEN;
                var e = new c("open");
                e.initEvent("open", !1, !1), this.dispatchEvent(e);
            }
        },
        write: function(e) {
            return this.send(e);
        },
        end: function(e) {
            void 0 !== e && this.write(e), this.close();
        },
        send: function(e, t) {
            if (this.readyState > s.OPEN) return !1;
            e = String(e).replace(/(\r\n|\r|\n)/g, "$1data: ");
            var n = "";
            return (t = t || {}).event && (n += "event: " + t.event + "\r\n"), t.id && (n += "id: " + t.id + "\r\n"), 
            n += "data: " + e + "\r\n\r\n", this._write(n);
        },
        ping: function() {
            return this._write(":\r\n\r\n");
        },
        close: function() {
            if (this.readyState > s.OPEN) return !1;
            this.readyState = s.CLOSED, this.writable = !1, this._pingTimer && clearInterval(this._pingTimer), 
            this._stream && this._stream.end();
            var e = new c("close");
            return e.initEvent("close", !1, !1), this.dispatchEvent(e), !0;
        }
    };
    for (var h in d) u.prototype[h] = d[h];
    for (var p in l) u.prototype[p] = l[p];
    e.exports = u;
}
