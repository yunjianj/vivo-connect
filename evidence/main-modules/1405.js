// analysis/pretty/main.js:103506; webpack module 1405
function(e, t, n) {
    var r = n(47).Buffer, i = n(12).EventEmitter, o = n(111).bufferAllocUnsafe;
    function a(e) {
        if (!(this instanceof a)) return new a(e);
        i.call(this);
        var t = this;
        void 0 === e && (e = {}), t.encoding = e.encoding;
        var n = {
            next: null,
            buffer: null
        }, s = {
            next: null,
            buffer: null
        }, l = 0;
        t.__defineGetter__("length", function() {
            return l;
        });
        var c = 0;
        t.write = function(e) {
            return n.buffer ? (s.next = {
                next: null,
                buffer: e
            }, s = s.next) : (n.buffer = e, s = n), l += e.length, t.emit("write", e), !0;
        }, t.end = function(e) {
            r.isBuffer(e) && t.write(e);
        }, t.push = function() {
            var e = [].concat.apply([], arguments);
            return e.forEach(t.write), t;
        }, t.forEach = function(e) {
            if (!n.buffer) return o(0);
            if (n.buffer.length - c <= 0) return t;
            for (var r = {
                buffer: n.buffer.slice(c),
                next: n.next
            }; r && r.buffer; ) {
                if (e(r.buffer)) break;
                r = r.next;
            }
            return t;
        }, t.join = function(e, r) {
            if (!n.buffer) return o(0);
            null == e && (e = 0), null == r && (r = t.length);
            var i = o(r - e), a = 0;
            return t.forEach(function(t) {
                if (e < a + t.length && a < r && t.copy(i, Math.max(0, a - e), Math.max(0, e - a), Math.min(t.length, r - a)), 
                (a += t.length) > r) return !0;
            }), i;
        }, t.joinInto = function(e, r, i, a) {
            if (!n.buffer) return new o(0);
            null == i && (i = 0), null == a && (a = t.length);
            var s = e;
            if (s.length - r < a - i) throw new Error("Insufficient space available in target Buffer.");
            var l = 0;
            return t.forEach(function(e) {
                if (i < l + e.length && l < a && e.copy(s, Math.max(r, r + l - i), Math.max(0, i - l), Math.min(e.length, a - l)), 
                (l += e.length) > a) return !0;
            }), s;
        }, t.advance = function(e) {
            for (c += e, l -= e; n.buffer && c >= n.buffer.length; ) c -= n.buffer.length, n = n.next ? n.next : {
                buffer: null,
                next: null
            };
            return null === n.buffer && (s = {
                next: null,
                buffer: null
            }), t.emit("advance", e), t;
        }, t.take = function(e, n) {
            null == e ? e = t.length : "number" != typeof e && (n = e, e = t.length);
            if (n || (n = t.encoding), n) {
                var r = "";
                return t.forEach(function(t) {
                    if (e <= 0) return !0;
                    r += t.toString(n, 0, Math.min(e, t.length)), e -= t.length;
                }), r;
            }
            return t.join(0, e);
        }, t.toString = function() {
            return t.take("binary");
        };
    }
    e.exports = a, e.exports.BufferList = a, n(5).inherits(a, i);
}
