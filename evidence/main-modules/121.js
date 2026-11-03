// analysis/pretty/main.js:17911; webpack module 121
function(e, t, n) {
    "use strict";
    var r = Object.keys || function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t;
    };
    e.exports = c;
    var i = n(422), o = n(268);
    n(22)(c, i);
    for (var a = r(o.prototype), s = 0; s < a.length; s++) {
        var l = a[s];
        c.prototype[l] || (c.prototype[l] = o.prototype[l]);
    }
    function c(e) {
        if (!(this instanceof c)) return new c(e);
        i.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), 
        !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, 
        this.once("end", u)));
    }
    function u() {
        this._writableState.ended || process.nextTick(d, this);
    }
    function d(e) {
        e.end();
    }
    Object.defineProperty(c.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark;
        }
    }), Object.defineProperty(c.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer();
        }
    }), Object.defineProperty(c.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length;
        }
    }), Object.defineProperty(c.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed);
        },
        set: function(e) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, 
            this._writableState.destroyed = e);
        }
    });
}
