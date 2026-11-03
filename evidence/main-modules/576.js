// analysis/pretty/main.js:54433; webpack module 576
function(e, t, n) {
    "use strict";
    var r = n(87);
    e.exports = v;
    var i, o = n(1074);
    v.ReadableState = g;
    n(12).EventEmitter;
    var a = function(e, t) {
        return e.listeners(t).length;
    }, s = n(577), l = n(206).Buffer, c = ("undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
    var u = Object.create(n(48));
    u.inherits = n(22);
    var d = n(5), h = void 0;
    h = d && d.debuglog ? d.debuglog("stream") : function() {};
    var p, f = n(1075), _ = n(578);
    u.inherits(v, s);
    var m = [ "error", "close", "destroy", "pause", "resume" ];
    function g(e, t) {
        e = e || {};
        var r = t instanceof (i = i || n(123));
        this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var o = e.highWaterMark, a = e.readableHighWaterMark, s = this.objectMode ? 16 : 16384;
        this.highWaterMark = o || 0 === o ? o : r && (a || 0 === a) ? a : s, this.highWaterMark = Math.floor(this.highWaterMark), 
        this.buffer = new f, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, 
        this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, 
        this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, 
        this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, 
        this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (p || (p = n(580).StringDecoder), 
        this.decoder = new p(e.encoding), this.encoding = e.encoding);
    }
    function v(e) {
        if (i = i || n(123), !(this instanceof v)) return new v(e);
        this._readableState = new g(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), 
        "function" == typeof e.destroy && (this._destroy = e.destroy)), s.call(this);
    }
    function y(e, t, n, r, i) {
        var o, a = e._readableState;
        null === t ? (a.reading = !1, function(e, t) {
            if (t.ended) return;
            if (t.decoder) {
                var n = t.decoder.end();
                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
            }
            t.ended = !0, w(e);
        }(e, a)) : (i || (o = function(e, t) {
            var n;
            r = t, l.isBuffer(r) || r instanceof c || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
            var r;
            return n;
        }(a, t)), o ? e.emit("error", o) : a.objectMode || t && t.length > 0 ? ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === l.prototype || (t = function(e) {
            return l.from(e);
        }(t)), r ? a.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : E(e, a, t, !0) : a.ended ? e.emit("error", new Error("stream.push() after EOF")) : (a.reading = !1, 
        a.decoder && !n ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? E(e, a, t, !1) : T(e, a)) : E(e, a, t, !1))) : r || (a.reading = !1));
        return function(e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
        }(a);
    }
    function E(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, 
        r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && w(e)), T(e, t);
    }
    Object.defineProperty(v.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && this._readableState.destroyed;
        },
        set: function(e) {
            this._readableState && (this._readableState.destroyed = e);
        }
    }), v.prototype.destroy = _.destroy, v.prototype._undestroy = _.undestroy, v.prototype._destroy = function(e, t) {
        this.push(null), t(e);
    }, v.prototype.push = function(e, t) {
        var n, r = this._readableState;
        return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = l.from(e, t), 
        t = ""), n = !0), y(this, e, t, !1, n);
    }, v.prototype.unshift = function(e) {
        return y(this, e, null, !0, !1);
    }, v.prototype.isPaused = function() {
        return !1 === this._readableState.flowing;
    }, v.prototype.setEncoding = function(e) {
        return p || (p = n(580).StringDecoder), this._readableState.decoder = new p(e), 
        this._readableState.encoding = e, this;
    };
    function b(e, t) {
        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
            return e >= 8388608 ? e = 8388608 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, 
            e |= e >>> 8, e |= e >>> 16, e++), e;
        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
    }
    function w(e) {
        var t = e._readableState;
        t.needReadable = !1, t.emittedReadable || (h("emitReadable", t.flowing), t.emittedReadable = !0, 
        t.sync ? r.nextTick(S, e) : S(e));
    }
    function S(e) {
        h("emit readable"), e.emit("readable"), N(e);
    }
    function T(e, t) {
        t.readingMore || (t.readingMore = !0, r.nextTick(A, e, t));
    }
    function A(e, t) {
        for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (h("maybeReadMore read 0"), 
        e.read(0), n !== t.length); ) n = t.length;
        t.readingMore = !1;
    }
    function O(e) {
        h("readable nexttick read 0"), e.read(0);
    }
    function C(e, t) {
        t.reading || (h("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, 
        e.emit("resume"), N(e), t.flowing && !t.reading && e.read(0);
    }
    function N(e) {
        var t = e._readableState;
        for (h("flow", t.flowing); t.flowing && null !== e.read(); ) ;
    }
    function I(e, t) {
        return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), 
        t.buffer.clear()) : n = function(e, t, n) {
            var r;
            e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? function(e, t) {
                var n = t.head, r = 1, i = n.data;
                e -= i.length;
                for (;n = n.next; ) {
                    var o = n.data, a = e > o.length ? o.length : e;
                    if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
                        a === o.length ? (++r, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, 
                        n.data = o.slice(a));
                        break;
                    }
                    ++r;
                }
                return t.length -= r, i;
            }(e, t) : function(e, t) {
                var n = l.allocUnsafe(e), r = t.head, i = 1;
                r.data.copy(n), e -= r.data.length;
                for (;r = r.next; ) {
                    var o = r.data, a = e > o.length ? o.length : e;
                    if (o.copy(n, n.length - e, 0, a), 0 === (e -= a)) {
                        a === o.length ? (++i, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, 
                        r.data = o.slice(a));
                        break;
                    }
                    ++i;
                }
                return t.length -= i, n;
            }(e, t);
            return r;
        }(e, t.buffer, t.decoder), n);
        var n;
    }
    function R(e) {
        var t = e._readableState;
        if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || (t.ended = !0, r.nextTick(D, t, e));
    }
    function D(e, t) {
        e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"));
    }
    function L(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
    }
    v.prototype.read = function(e) {
        h("read", e), e = parseInt(e, 10);
        var t = this._readableState, n = e;
        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return h("read: emitReadable", t.length, t.ended), 
        0 === t.length && t.ended ? R(this) : w(this), null;
        if (0 === (e = b(e, t)) && t.ended) return 0 === t.length && R(this), null;
        var r, i = t.needReadable;
        return h("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && h("length less than watermark", i = !0), 
        t.ended || t.reading ? h("reading or ended", i = !1) : i && (h("do read"), t.reading = !0, 
        t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), 
        t.sync = !1, t.reading || (e = b(n, t))), null === (r = e > 0 ? I(e, t) : null) ? (t.needReadable = !0, 
        e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && R(this)), 
        null !== r && this.emit("data", r), r;
    }, v.prototype._read = function(e) {
        this.emit("error", new Error("_read() is not implemented"));
    }, v.prototype.pipe = function(e, t) {
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
        i.pipesCount += 1, h("pipe count=%d opts=%j", i.pipesCount, t);
        var s = (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr ? c : v;
        function l(t, r) {
            h("onunpipe"), t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0, h("cleanup"), 
            e.removeListener("close", m), e.removeListener("finish", g), e.removeListener("drain", u), 
            e.removeListener("error", _), e.removeListener("unpipe", l), n.removeListener("end", c), 
            n.removeListener("end", v), n.removeListener("data", f), d = !0, !i.awaitDrain || e._writableState && !e._writableState.needDrain || u());
        }
        function c() {
            h("onend"), e.end();
        }
        i.endEmitted ? r.nextTick(s) : n.once("end", s), e.on("unpipe", l);
        var u = function(e) {
            return function() {
                var t = e._readableState;
                h("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && a(e, "data") && (t.flowing = !0, 
                N(e));
            };
        }(n);
        e.on("drain", u);
        var d = !1;
        var p = !1;
        function f(t) {
            h("ondata"), p = !1, !1 !== e.write(t) || p || ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== L(i.pipes, e)) && !d && (h("false write response, pause", i.awaitDrain), 
            i.awaitDrain++, p = !0), n.pause());
        }
        function _(t) {
            h("onerror", t), v(), e.removeListener("error", _), 0 === a(e, "error") && e.emit("error", t);
        }
        function m() {
            e.removeListener("finish", g), v();
        }
        function g() {
            h("onfinish"), e.removeListener("close", m), v();
        }
        function v() {
            h("unpipe"), n.unpipe(e);
        }
        return n.on("data", f), function(e, t, n) {
            if ("function" == typeof e.prependListener) return e.prependListener(t, n);
            e._events && e._events[t] ? o(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [ n, e._events[t] ] : e.on(t, n);
        }(e, "error", _), e.once("close", m), e.once("finish", g), e.emit("pipe", n), i.flowing || (h("pipe resume"), 
        n.resume()), e;
    }, v.prototype.unpipe = function(e) {
        var t = this._readableState, n = {
            hasUnpiped: !1
        };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, 
        t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;
        if (!e) {
            var r = t.pipes, i = t.pipesCount;
            t.pipes = null, t.pipesCount = 0, t.flowing = !1;
            for (var o = 0; o < i; o++) r[o].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this;
        }
        var a = L(t.pipes, e);
        return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), 
        e.emit("unpipe", this, n)), this;
    }, v.prototype.on = function(e, t) {
        var n = s.prototype.on.call(this, e, t);
        if ("data" === e) !1 !== this._readableState.flowing && this.resume(); else if ("readable" === e) {
            var i = this._readableState;
            i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, 
            i.emittedReadable = !1, i.reading ? i.length && w(this) : r.nextTick(O, this));
        }
        return n;
    }, v.prototype.addListener = v.prototype.on, v.prototype.resume = function() {
        var e = this._readableState;
        return e.flowing || (h("resume"), e.flowing = !0, function(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0, r.nextTick(C, e, t));
        }(this, e)), this;
    }, v.prototype.pause = function() {
        return h("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (h("pause"), 
        this._readableState.flowing = !1, this.emit("pause")), this;
    }, v.prototype.wrap = function(e) {
        var t = this, n = this._readableState, r = !1;
        for (var i in e.on("end", function() {
            if (h("wrapped end"), n.decoder && !n.ended) {
                var e = n.decoder.end();
                e && e.length && t.push(e);
            }
            t.push(null);
        }), e.on("data", function(i) {
            (h("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i) || (n.objectMode || i && i.length) && (t.push(i) || (r = !0, 
            e.pause()));
        }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
            return function() {
                return e[t].apply(e, arguments);
            };
        }(i));
        for (var o = 0; o < m.length; o++) e.on(m[o], this.emit.bind(this, m[o]));
        return this._read = function(t) {
            h("wrapped _read", t), r && (r = !1, e.resume());
        }, this;
    }, Object.defineProperty(v.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark;
        }
    }), v._fromList = I;
}
