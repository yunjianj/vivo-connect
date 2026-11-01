// analysis/pretty/main.js:107487; webpack module 1443
function(e, t, n) {
    e.exports = l;
    var r = n(47).Buffer;
    l.WritableState = s;
    var i = n(48);
    i.inherits = n(22);
    var o = n(9);
    function a(e, t, n) {
        this.chunk = e, this.encoding = t, this.callback = n;
    }
    function s(e, t) {
        var n = (e = e || {}).highWaterMark;
        this.highWaterMark = n || 0 === n ? n : 16384, this.objectMode = !!e.objectMode, 
        this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, 
        this.ended = !1, this.finished = !1;
        var r = !1 === e.decodeStrings;
        this.decodeStrings = !r, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, 
        this.writing = !1, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
            !function(e, t) {
                var n = e._writableState, r = n.sync, i = n.writecb;
                if (function(e) {
                    e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
                }(n), t) !function(e, t, n, r, i) {
                    n ? process.nextTick(function() {
                        i(r);
                    }) : i(r);
                    e._writableState.errorEmitted = !0, e.emit("error", r);
                }(e, 0, r, t, i); else {
                    var o = d(e, n);
                    o || n.bufferProcessing || !n.buffer.length || function(e, t) {
                        t.bufferProcessing = !0;
                        for (var n = 0; n < t.buffer.length; n++) {
                            var r = t.buffer[n], i = r.chunk, o = r.encoding, a = r.callback, s = t.objectMode ? 1 : i.length;
                            if (c(e, t, s, i, o, a), t.writing) {
                                n++;
                                break;
                            }
                        }
                        t.bufferProcessing = !1, n < t.buffer.length ? t.buffer = t.buffer.slice(n) : t.buffer.length = 0;
                    }(e, n), r ? process.nextTick(function() {
                        u(e, n, o, i);
                    }) : u(e, n, o, i);
                }
            }(t, e);
        }, this.writecb = null, this.writelen = 0, this.buffer = [], this.errorEmitted = !1;
    }
    function l(e) {
        var t = n(702);
        if (!(this instanceof l || this instanceof t)) return new l(e);
        this._writableState = new s(e, this), this.writable = !0, o.call(this);
    }
    function c(e, t, n, r, i, o) {
        t.writelen = n, t.writecb = o, t.writing = !0, t.sync = !0, e._write(r, i, t.onwrite), 
        t.sync = !1;
    }
    function u(e, t, n, r) {
        n || function(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
        }(e, t), r(), n && h(e, t);
    }
    function d(e, t) {
        return t.ending && 0 === t.length && !t.finished && !t.writing;
    }
    function h(e, t) {
        var n = d(0, t);
        return n && (t.finished = !0, e.emit("finish")), n;
    }
    i.inherits(l, o), l.prototype.pipe = function() {
        this.emit("error", new Error("Cannot pipe. Not readable."));
    }, l.prototype.write = function(e, t, n) {
        var i = this._writableState, o = !1;
        return "function" == typeof t && (n = t, t = null), r.isBuffer(e) ? t = "buffer" : t || (t = i.defaultEncoding), 
        "function" != typeof n && (n = function() {}), i.ended ? function(e, t, n) {
            var r = new Error("write after end");
            e.emit("error", r), process.nextTick(function() {
                n(r);
            });
        }(this, 0, n) : function(e, t, n, i) {
            var o = !0;
            if (!r.isBuffer(n) && "string" != typeof n && null != n && !t.objectMode) {
                var a = new TypeError("Invalid non-string/buffer chunk");
                e.emit("error", a), process.nextTick(function() {
                    i(a);
                }), o = !1;
            }
            return o;
        }(this, i, e, n) && (o = function(e, t, n, i, o) {
            n = function(e, t, n) {
                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = new r(t, n));
                return t;
            }(t, n, i), r.isBuffer(n) && (i = "buffer");
            var s = t.objectMode ? 1 : n.length;
            t.length += s;
            var l = t.length < t.highWaterMark;
            l || (t.needDrain = !0);
            t.writing ? t.buffer.push(new a(n, i, o)) : c(e, t, s, n, i, o);
            return l;
        }(this, i, e, t, n)), o;
    }, l.prototype._write = function(e, t, n) {
        n(new Error("not implemented"));
    }, l.prototype.end = function(e, t, n) {
        var r = this._writableState;
        "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, 
        t = null), null != e && this.write(e, t), r.ending || r.finished || function(e, t, n) {
            t.ending = !0, h(e, t), n && (t.finished ? process.nextTick(n) : e.once("finish", n));
            t.ended = !0;
        }(this, r, n);
    };
}
