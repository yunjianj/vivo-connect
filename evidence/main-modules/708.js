// analysis/pretty/main.js:63437; webpack module 708
function(e, t, n) {
    "use strict";
    var r = function(e) {
        this._bufferSize = e, this.clear();
    };
    r.prototype.clear = function() {
        this._buffer = new Array(this._bufferSize), this._ringOffset = 0, this._ringSize = this._bufferSize, 
        this._head = 0, this._tail = 0, this.length = 0;
    }, r.prototype.push = function(e) {
        var t = !1, n = !1;
        this._ringSize < this._bufferSize ? t = 0 === this._tail : this._ringOffset === this._ringSize && (t = !0, 
        n = 0 === this._tail), t && (this._tail = this._bufferSize, this._buffer = this._buffer.concat(new Array(this._bufferSize)), 
        this._bufferSize = this._buffer.length, n && (this._ringSize = this._bufferSize)), 
        this._buffer[this._tail] = e, this.length += 1, this._tail < this._ringSize && (this._ringOffset += 1), 
        this._tail = (this._tail + 1) % this._bufferSize;
    }, r.prototype.peek = function() {
        if (0 !== this.length) return this._buffer[this._head];
    }, r.prototype.shift = function() {
        if (0 !== this.length) {
            var e = this._buffer[this._head];
            return this._buffer[this._head] = void 0, this.length -= 1, this._ringOffset -= 1, 
            0 === this._ringOffset && this.length > 0 ? (this._head = this._ringSize, this._ringOffset = this.length, 
            this._ringSize = this._bufferSize) : this._head = (this._head + 1) % this._ringSize, 
            e;
        }
    }, e.exports = r;
}
