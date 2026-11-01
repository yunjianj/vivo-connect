// analysis/pretty/main.js:107224; webpack module 1441
function(e, t, n) {
    e.exports = u;
    var r = n(1442), i = n(47).Buffer;
    u.ReadableState = c;
    var o = n(12).EventEmitter;
    o.listenerCount || (o.listenerCount = function(e, t) {
        return e.listeners(t).length;
    });
    var a, s = n(9), l = n(48);
    function c(e, t) {
        var r = (e = e || {}).highWaterMark;
        this.highWaterMark = r || 0 === r ? r : 16384, this.highWaterMark = ~~this.highWaterMark, 
        this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = !1, 
        this.ended = !1, this.endEmitted = !1, this.reading = !1, this.calledRead = !1, 
        this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, 
        this.objectMode = !!e.objectMode, this.defaultEncoding = e.defaultEncoding || "utf8", 
        this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, 
        this.encoding = null, e.encoding && (a || (a = n(703).StringDecoder), this.decoder = new a(e.encoding), 
        this.encoding = e.encoding);
    }
    function u(e) {
        if (!(this instanceof u)) return new u(e);
        this._readableState = new c(e, this), this.readable = !0, s.call(this);
    }
    function d(e, t, n, r, o) {
        var a = function(e, t) {
            var n = null;
            i.isBuffer(t) || "string" == typeof t || null == t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
            return n;
        }(t, n);
        if (a) e.emit("error", a); else if (null == n) t.reading = !1, t.ended || function(e, t) {
            if (t.decoder && !t.ended) {
                var n = t.decoder.end();
                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
            }
            t.ended = !0, t.length > 0 ? p(e) : y(e);
        }(e, t); else if (t.objectMode || n && n.length > 0) if (t.ended && !o) {
            var s = new Error("stream.push() after EOF");
            e.emit("error", s);
        } else if (t.endEmitted && o) {
            s = new Error("stream.unshift() after end event");
            e.emit("error", s);
        } else !t.decoder || o || r || (n = t.decoder.write(n)), t.length += t.objectMode ? 1 : n.length, 
        o ? t.buffer.unshift(n) : (t.reading = !1, t.buffer.push(n)), t.needReadable && p(e), 
        function(e, t) {
            t.readingMore || (t.readingMore = !0, process.nextTick(function() {
                !function(e, t) {
                    var n = t.length;
                    for (;!t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (e.read(0), 
                    n !== t.length); ) n = t.length;
                    t.readingMore = !1;
                }(e, t);
            }));
        }(e, t); else o || (t.reading = !1);
        return function(e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
        }(t);
    }
    l.inherits = n(22), l.inherits(u, s), u.prototype.push = function(e, t) {
        var n = this._readableState;
        return "string" != typeof e || n.objectMode || (t = t || n.defaultEncoding) !== n.encoding && (e = new i(e, t), 
        t = ""), d(this, n, e, t, !1);
    }, u.prototype.unshift = function(e) {
        return d(this, this._readableState, e, "", !0);
    }, u.prototype.setEncoding = function(e) {
        a || (a = n(703).StringDecoder), this._readableState.decoder = new a(e), this._readableState.encoding = e;
    };
    function h(e, t) {
        return 0 === t.length && t.ended ? 0 : t.objectMode ? 0 === e ? 0 : 1 : null === e || isNaN(e) ? t.flowing && t.buffer.length ? t.buffer[0].length : t.length : e <= 0 ? 0 : (e > t.highWaterMark && (t.highWaterMark = function(e) {
            if (e >= 8388608) e = 8388608; else {
                e--;
                for (var t = 1; t < 32; t <<= 1) e |= e >> t;
                e++;
            }
            return e;
        }(e)), e > t.length ? t.ended ? t.length : (t.needReadable = !0, 0) : e);
    }
    function p(e) {
        var t = e._readableState;
        t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, t.sync ? process.nextTick(function() {
            f(e);
        }) : f(e));
    }
    function f(e) {
        e.emit("readable");
    }
    function _(e) {
        var t, n = e._readableState;
        function r(e, r, i) {
            !1 === e.write(t) && n.awaitDrain++;
        }
        for (n.awaitDrain = 0; n.pipesCount && null !== (t = e.read()); ) if (1 === n.pipesCount ? r(n.pipes) : E(n.pipes, r), 
        e.emit("data", t), n.awaitDrain > 0) return;
        if (0 === n.pipesCount) return n.flowing = !1, void (o.listenerCount(e, "data") > 0 && g(e));
        n.ranOut = !0;
    }
    function m() {
        this._readableState.ranOut && (this._readableState.ranOut = !1, _(this));
    }
    function g(e, t) {
        if (e._readableState.flowing) throw new Error("Cannot switch to old mode now.");
        var n = t || !1, r = !1;
        e.readable = !0, e.pipe = s.prototype.pipe, e.on = e.addListener = s.prototype.on, 
        e.on("readable", function() {
            var t;
            for (r = !0; !n && null !== (t = e.read()); ) e.emit("data", t);
            null === t && (r = !1, e._readableState.needReadable = !0);
        }), e.pause = function() {
            n = !0, this.emit("pause");
        }, e.resume = function() {
            n = !1, r ? process.nextTick(function() {
                e.emit("readable");
            }) : this.read(0), this.emit("resume");
        }, e.emit("readable");
    }
    function v(e, t) {
        var n, r = t.buffer, o = t.length, a = !!t.decoder, s = !!t.objectMode;
        if (0 === r.length) return null;
        if (0 === o) n = null; else if (s) n = r.shift(); else if (!e || e >= o) n = a ? r.join("") : i.concat(r, o), 
        r.length = 0; else {
            if (e < r[0].length) n = (d = r[0]).slice(0, e), r[0] = d.slice(e); else if (e === r[0].length) n = r.shift(); else {
                n = a ? "" : new i(e);
                for (var l = 0, c = 0, u = r.length; c < u && l < e; c++) {
                    var d = r[0], h = Math.min(e - l, d.length);
                    a ? n += d.slice(0, h) : d.copy(n, l, 0, h), h < d.length ? r[0] = d.slice(h) : r.shift(), 
                    l += h;
                }
            }
        }
        return n;
    }
    function y(e) {
        var t = e._readableState;
        if (t.length > 0) throw new Error("endReadable called on non-empty stream");
        !t.endEmitted && t.calledRead && (t.ended = !0, process.nextTick(function() {
            t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"));
        }));
    }
    function E(e, t) {
        for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
    }
    u.prototype.read = function(e) {
        var t = this._readableState;
        t.calledRead = !0;
        var n, r = e;
        if (("number" != typeof e || e > 0) && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return p(this), 
        null;
        if (0 === (e = h(e, t)) && t.ended) return n = null, t.length > 0 && t.decoder && (n = v(e, t), 
        t.length -= n.length), 0 === t.length && y(this), n;
        var i = t.needReadable;
        return t.length - e <= t.highWaterMark && (i = !0), (t.ended || t.reading) && (i = !1), 
        i && (t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), 
        t.sync = !1), i && !t.reading && (e = h(r, t)), null === (n = e > 0 ? v(e, t) : null) && (t.needReadable = !0, 
        e = 0), t.length -= e, 0 !== t.length || t.ended || (t.needReadable = !0), t.ended && !t.endEmitted && 0 === t.length && y(this), 
        n;
    }, u.prototype._read = function(e) {
        this.emit("error", new Error("not implemented"));
    }, u.prototype.pipe = function(e, t) {
        var n = this, i = this._readableState;
        switch (i.pipesCount) {
          case 0:
            i.pipes = e;
            break;

          case 1:
            i.pipes = [ i.pipes, e ];
            break;

          default:
            i.pipes.push(e);
        }
        i.pipesCount += 1;
        var a = (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr ? l : u;
        function s(e) {
            e === n && u();
        }
        function l() {
            e.end();
        }
        i.endEmitted ? process.nextTick(a) : n.once("end", a), e.on("unpipe", s);
        var c = function(e) {
            return function() {
                var t = e._readableState;
                t.awaitDrain--, 0 === t.awaitDrain && _(e);
            };
        }(n);
        function u() {
            e.removeListener("close", h), e.removeListener("finish", p), e.removeListener("drain", c), 
            e.removeListener("error", d), e.removeListener("unpipe", s), n.removeListener("end", l), 
            n.removeListener("end", u), e._writableState && !e._writableState.needDrain || c();
        }
        function d(t) {
            f(), e.removeListener("error", d), 0 === o.listenerCount(e, "error") && e.emit("error", t);
        }
        function h() {
            e.removeListener("finish", p), f();
        }
        function p() {
            e.removeListener("close", h), f();
        }
        function f() {
            n.unpipe(e);
        }
        return e.on("drain", c), e._events && e._events.error ? r(e._events.error) ? e._events.error.unshift(d) : e._events.error = [ d, e._events.error ] : e.on("error", d), 
        e.once("close", h), e.once("finish", p), e.emit("pipe", n), i.flowing || (this.on("readable", m), 
        i.flowing = !0, process.nextTick(function() {
            _(n);
        })), e;
    }, u.prototype.unpipe = function(e) {
        var t = this._readableState;
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, 
        t.pipesCount = 0, this.removeListener("readable", m), t.flowing = !1, e && e.emit("unpipe", this)), 
        this;
        if (!e) {
            var n = t.pipes, r = t.pipesCount;
            t.pipes = null, t.pipesCount = 0, this.removeListener("readable", m), t.flowing = !1;
            for (var i = 0; i < r; i++) n[i].emit("unpipe", this);
            return this;
        }
        return -1 === (i = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }(t.pipes, e)) || (t.pipes.splice(i, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), 
        e.emit("unpipe", this)), this;
    }, u.prototype.on = function(e, t) {
        var n = s.prototype.on.call(this, e, t);
        if ("data" !== e || this._readableState.flowing || g(this), "readable" === e && this.readable) {
            var r = this._readableState;
            r.readableListening || (r.readableListening = !0, r.emittedReadable = !1, r.needReadable = !0, 
            r.reading ? r.length && p(this) : this.read(0));
        }
        return n;
    }, u.prototype.addListener = u.prototype.on, u.prototype.resume = function() {
        g(this), this.read(0), this.emit("resume");
    }, u.prototype.pause = function() {
        g(this, !0), this.emit("pause");
    }, u.prototype.wrap = function(e) {
        var t = this._readableState, n = !1, r = this;
        for (var i in e.on("end", function() {
            if (t.decoder && !t.ended) {
                var e = t.decoder.end();
                e && e.length && r.push(e);
            }
            r.push(null);
        }), e.on("data", function(i) {
            (t.decoder && (i = t.decoder.write(i)), t.objectMode && null == i) || (t.objectMode || i && i.length) && (r.push(i) || (n = !0, 
            e.pause()));
        }), e) "function" == typeof e[i] && void 0 === this[i] && (this[i] = function(t) {
            return function() {
                return e[t].apply(e, arguments);
            };
        }(i));
        return E([ "error", "close", "destroy", "pause", "resume" ], function(t) {
            e.on(t, r.emit.bind(r, t));
        }), r._read = function(t) {
            n && (n = !1, e.resume());
        }, r;
    }, u._fromList = v;
}
