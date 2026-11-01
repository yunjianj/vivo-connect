// analysis/pretty/main.js:17981; webpack module 123
function(e, t, n) {
    "use strict";
    var r = n(87), i = Object.keys || function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t;
    };
    e.exports = d;
    var o = Object.create(n(48));
    o.inherits = n(22);
    var a = n(576), s = n(579);
    o.inherits(d, a);
    for (var l = i(s.prototype), c = 0; c < l.length; c++) {
        var u = l[c];
        d.prototype[u] || (d.prototype[u] = s.prototype[u]);
    }
    function d(e) {
        if (!(this instanceof d)) return new d(e);
        a.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), 
        e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), 
        this.once("end", h);
    }
    function h() {
        this.allowHalfOpen || this._writableState.ended || r.nextTick(p, this);
    }
    function p(e) {
        e.end();
    }
    Object.defineProperty(d.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark;
        }
    }), Object.defineProperty(d.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed);
        },
        set: function(e) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, 
            this._writableState.destroyed = e);
        }
    }), d.prototype._destroy = function(e, t) {
        this.push(null), this.end(), r.nextTick(t, e);
    };
}
