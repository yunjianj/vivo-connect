// analysis/pretty/main.js:43398; webpack module 422
function(e, t, n) {
    "use strict";
    var r;
    e.exports = T, T.ReadableState = S;
    n(12).EventEmitter;
    var i = function(e, t) {
        return e.listeners(t).length;
    }, o = n(419), a = n(47).Buffer, s = ("undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
    var l, c = n(5);
    l = c && c.debuglog ? c.debuglog("stream") : function() {};
    var u, d, h, p = n(1028), f = n(420), _ = n(421).getHighWaterMark, m = n(101).codes, g = m.ERR_INVALID_ARG_TYPE, v = m.ERR_STREAM_PUSH_AFTER_EOF, y = m.ERR_METHOD_NOT_IMPLEMENTED, E = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    n(22)(T, o);
    var b = f.errorOrDestroy, w = [ "error", "close", "destroy", "pause", "resume" ];
    function S(e, t, i) {
        r = r || n(121), e = e || {}, "boolean" != typeof i && (i = t instanceof r), this.objectMode = !!e.objectMode, 
        i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = _(this, e, "readableHighWaterMark", i), 
        this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, 
        this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, 
        this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, 
        this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, 
        this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, 
        this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (u || (u = n(423).StringDecoder), 
        this.decoder = new u(e.encoding), this.encoding = e.encoding);
    }
    function T(e) {
        if (r = r || n(121), !(this instanceof T)) return new T(e);
        var t = this instanceof r;
        this._readableState = new S(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), 
        "function" == typeof e.destroy && (this._destroy = e.destroy)), o.call(this);
    }
    function A(e, t, n, r, i) {
        l("readableAddChunk", t);
        var o, c = e._readableState;
        if (null === t) c.reading = !1, function(e, t) {
            if (l("onEofChunk"), t.ended) return;
            if (t.decoder) {
                var n = t.decoder.end();
                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
            }
            t.ended = !0, t.sync ? N(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, 
            I(e)));
        }(e, c); else if (i || (o = function(e, t) {
            var n;
            r = t, a.isBuffer(r) || r instanceof s || "string" == typeof t || void 0 === t || e.objectMode || (n = new g("chunk", [ "string", "Buffer", "Uint8Array" ], t));
            var r;
            return n;
        }(c, t)), o) b(e, o); else if (c.objectMode || t && t.length > 0) if ("string" == typeof t || c.objectMode || Object.getPrototypeOf(t) === a.prototype || (t = function(e) {
            return a.from(e);
        }(t)), r) c.endEmitted ? b(e, new E) : O(e, c, t, !0); else if (c.ended) b(e, new v); else {
            if (c.destroyed) return !1;
            c.reading = !1, c.decoder && !n ? (t = c.decoder.write(t), c.objectMode || 0 !== t.length ? O(e, c, t, !1) : R(e, c)) : O(e, c, t, !1);
        } else r || (c.reading = !1, R(e, c));
        return !c.ended && (c.length < c.highWaterMark || 0 === c.length);
    }
    function O(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, 
        r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && N(e)), R(e, t);
    }
    Object.defineProperty(T.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && this._readableState.destroyed;
        },
        set: function(e) {
            this._readableState && (this._readableState.destroyed = e);
        }
    }), T.prototype.destroy = f.destroy, T.prototype._undestroy = f.undestroy, T.prototype._destroy = function(e, t) {
        t(e);
    }, T.prototype.push = function(e, t) {
        var n, r = this._readableState;
        return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = a.from(e, t), 
        t = ""), n = !0), A(this, e, t, !1, n);
    }, T.prototype.unshift = function(e) {
        return A(this, e, null, !0, !1);
    }, T.prototype.isPaused = function() {
        return !1 === this._readableState.flowing;
    }, T.prototype.setEncoding = function(e) {
        u || (u = n(423).StringDecoder);
        var t = new u(e);
        this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
        for (var r = this._readableState.buffer.head, i = ""; null !== r; ) i += t.write(r.data), 
        r = r.next;
        return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), 
        this._readableState.length = i.length, this;
    };
    function C(e, t) {
        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
            return e >= 1073741824 ? e = 1073741824 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, 
            e |= e >>> 8, e |= e >>> 16, e++), e;
        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
    }
    function N(e) {
        var t = e._readableState;
        l("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (l("emitReadable", t.flowing), 
        t.emittedReadable = !0, process.nextTick(I, e));
    }
    function I(e) {
        var t = e._readableState;
        l("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), 
        t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, 
        P(e);
    }
    function R(e, t) {
        t.readingMore || (t.readingMore = !0, process.nextTick(D, e, t));
    }
    function D(e, t) {
        for (;!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length); ) {
            var n = t.length;
            if (l("maybeReadMore read 0"), e.read(0), n === t.length) break;
        }
        t.readingMore = !1;
    }
    function L(e) {
        var t = e._readableState;
        t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume();
    }
    function k(e) {
        l("readable nexttick read 0"), e.read(0);
    }
    function M(e, t) {
        l("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), 
        P(e), t.flowing && !t.reading && e.read(0);
    }
    function P(e) {
        var t = e._readableState;
        for (l("flow", t.flowing); t.flowing && null !== e.read(); ) ;
    }
    function x(e, t) {
        return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), 
        t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n);
        var n;
    }
    function F(e) {
        var t = e._readableState;
        l("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, process.nextTick(j, t, e));
    }
    function j(e, t) {
        if (l("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, 
        t.readable = !1, t.emit("end"), e.autoDestroy)) {
            var n = t._writableState;
            (!n || n.autoDestroy && n.finished) && t.destroy();
        }
    }
    function U(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
    }
    T.prototype.read = function(e) {
        l("read", e), e = parseInt(e, 10);
        var t = this._readableState, n = e;
        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return l("read: emitReadable", t.length, t.ended), 
        0 === t.length && t.ended ? F(this) : N(this), null;
        if (0 === (e = C(e, t)) && t.ended) return 0 === t.length && F(this), null;
        var r, i = t.needReadable;
        return l("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && l("length less than watermark", i = !0), 
        t.ended || t.reading ? l("reading or ended", i = !1) : i && (l("do read"), t.reading = !0, 
        t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), 
        t.sync = !1, t.reading || (e = C(n, t))), null === (r = e > 0 ? x(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, 
        e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), 
        n !== e && t.ended && F(this)), null !== r && this.emit("data", r), r;
    }, T.prototype._read = function(e) {
        b(this, new y("_read()"));
    }, T.prototype.pipe = function(e, t) {
        var n = this, r = this._readableState;
        switch (r.pipesCount) {
          case 0:
            r.pipes = e;
            break;

          case 1:
            r.pipes = [ r.pipes, e ];
            break;

          default:
            r.pipes.push(e);
        }
        r.pipesCount += 1, l("pipe count=%d opts=%j", r.pipesCount, t);
        var o = (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr ? s : _;
        function a(t, i) {
            l("onunpipe"), t === n && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, l("cleanup"), 
            e.removeListener("close", p), e.removeListener("finish", f), e.removeListener("drain", c), 
            e.removeListener("error", h), e.removeListener("unpipe", a), n.removeListener("end", s), 
            n.removeListener("end", _), n.removeListener("data", d), u = !0, !r.awaitDrain || e._writableState && !e._writableState.needDrain || c());
        }
        function s() {
            l("onend"), e.end();
        }
        r.endEmitted ? process.nextTick(o) : n.once("end", o), e.on("unpipe", a);
        var c = function(e) {
            return function() {
                var t = e._readableState;
                l("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && i(e, "data") && (t.flowing = !0, 
                P(e));
            };
        }(n);
        e.on("drain", c);
        var u = !1;
        function d(t) {
            l("ondata");
            var i = e.write(t);
            l("dest.write", i), !1 === i && ((1 === r.pipesCount && r.pipes === e || r.pipesCount > 1 && -1 !== U(r.pipes, e)) && !u && (l("false write response, pause", r.awaitDrain), 
            r.awaitDrain++), n.pause());
        }
        function h(t) {
            l("onerror", t), _(), e.removeListener("error", h), 0 === i(e, "error") && b(e, t);
        }
        function p() {
            e.removeListener("finish", f), _();
        }
        function f() {
            l("onfinish"), e.removeListener("close", p), _();
        }
        function _() {
            l("unpipe"), n.unpipe(e);
        }
        return n.on("data", d), function(e, t, n) {
            if ("function" == typeof e.prependListener) return e.prependListener(t, n);
            e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [ n, e._events[t] ] : e.on(t, n);
        }(e, "error", h), e.once("close", p), e.once("finish", f), e.emit("pipe", n), r.flowing || (l("pipe resume"), 
        n.resume()), e;
    }, T.prototype.unpipe = function(e) {
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
        var a = U(t.pipes, e);
        return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), 
        e.emit("unpipe", this, n)), this;
    }, T.prototype.on = function(e, t) {
        var n = o.prototype.on.call(this, e, t), r = this._readableState;
        return "data" === e ? (r.readableListening = this.listenerCount("readable") > 0, 
        !1 !== r.flowing && this.resume()) : "readable" === e && (r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, 
        r.flowing = !1, r.emittedReadable = !1, l("on readable", r.length, r.reading), r.length ? N(this) : r.reading || process.nextTick(k, this))), 
        n;
    }, T.prototype.addListener = T.prototype.on, T.prototype.removeListener = function(e, t) {
        var n = o.prototype.removeListener.call(this, e, t);
        return "readable" === e && process.nextTick(L, this), n;
    }, T.prototype.removeAllListeners = function(e) {
        var t = o.prototype.removeAllListeners.apply(this, arguments);
        return "readable" !== e && void 0 !== e || process.nextTick(L, this), t;
    }, T.prototype.resume = function() {
        var e = this._readableState;
        return e.flowing || (l("resume"), e.flowing = !e.readableListening, function(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0, process.nextTick(M, e, t));
        }(this, e)), e.paused = !1, this;
    }, T.prototype.pause = function() {
        return l("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (l("pause"), 
        this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, 
        this;
    }, T.prototype.wrap = function(e) {
        var t = this, n = this._readableState, r = !1;
        for (var i in e.on("end", function() {
            if (l("wrapped end"), n.decoder && !n.ended) {
                var e = n.decoder.end();
                e && e.length && t.push(e);
            }
            t.push(null);
        }), e.on("data", function(i) {
            (l("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i) || (n.objectMode || i && i.length) && (t.push(i) || (r = !0, 
            e.pause()));
        }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
            return function() {
                return e[t].apply(e, arguments);
            };
        }(i));
        for (var o = 0; o < w.length; o++) e.on(w[o], this.emit.bind(this, w[o]));
        return this._read = function(t) {
            l("wrapped _read", t), r && (r = !1, e.resume());
        }, this;
    }, "function" == typeof Symbol && (T.prototype[Symbol.asyncIterator] = function() {
        return void 0 === d && (d = n(1029)), d(this);
    }), Object.defineProperty(T.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark;
        }
    }), Object.defineProperty(T.prototype, "readableBuffer", {
        enumerable: !1,
        get: function() {
            return this._readableState && this._readableState.buffer;
        }
    }), Object.defineProperty(T.prototype, "readableFlowing", {
        enumerable: !1,
        get: function() {
            return this._readableState.flowing;
        },
        set: function(e) {
            this._readableState && (this._readableState.flowing = e);
        }
    }), T._fromList = x, Object.defineProperty(T.prototype, "readableLength", {
        enumerable: !1,
        get: function() {
            return this._readableState.length;
        }
    }), "function" == typeof Symbol && (T.from = function(e, t) {
        return void 0 === h && (h = n(1030)), h(T, e, t);
    });
}
