// analysis/pretty/main.js:62869; webpack module 702
function(e, t, n) {
    e.exports = s;
    var r = Object.keys || function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t;
    }, i = n(48);
    i.inherits = n(22);
    var o = n(1441), a = n(1443);
    function s(e) {
        if (!(this instanceof s)) return new s(e);
        o.call(this, e), a.call(this, e), e && !1 === e.readable && (this.readable = !1), 
        e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), 
        this.once("end", l);
    }
    function l() {
        this.allowHalfOpen || this._writableState.ended || process.nextTick(this.end.bind(this));
    }
    i.inherits(s, o), function(e, t) {
        for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
    }(r(a.prototype), function(e) {
        s.prototype[e] || (s.prototype[e] = a.prototype[e]);
    });
}
