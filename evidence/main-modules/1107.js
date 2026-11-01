// analysis/pretty/main.js:89287; webpack module 1107
function(e, t, n) {
    "use strict";
    function r(e) {
        this._capacity = e, this._length = 0, this._front = 0;
    }
    r.prototype._willBeOverCapacity = function(e) {
        return this._capacity < e;
    }, r.prototype._pushOne = function(e) {
        var t = this.length();
        this._checkCapacity(t + 1), this[this._front + t & this._capacity - 1] = e, this._length = t + 1;
    }, r.prototype.push = function(e, t, n) {
        var r = this.length() + 3;
        if (this._willBeOverCapacity(r)) return this._pushOne(e), this._pushOne(t), void this._pushOne(n);
        var i = this._front + r - 3;
        this._checkCapacity(r);
        var o = this._capacity - 1;
        this[i + 0 & o] = e, this[i + 1 & o] = t, this[i + 2 & o] = n, this._length = r;
    }, r.prototype.shift = function() {
        var e = this._front, t = this[e];
        return this[e] = void 0, this._front = e + 1 & this._capacity - 1, this._length--, 
        t;
    }, r.prototype.length = function() {
        return this._length;
    }, r.prototype._checkCapacity = function(e) {
        this._capacity < e && this._resizeTo(this._capacity << 1);
    }, r.prototype._resizeTo = function(e) {
        var t = this._capacity;
        this._capacity = e, function(e, t, n, r, i) {
            for (var o = 0; o < i; ++o) n[o + r] = e[o + t], e[o + t] = void 0;
        }(this, 0, this, t, this._front + this._length & t - 1);
    }, e.exports = r;
}
