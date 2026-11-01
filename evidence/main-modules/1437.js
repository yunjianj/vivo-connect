// analysis/pretty/main.js:107110; webpack module 1437
function(e, t, n) {
    var r = n(9).Transform;
    function i(e) {
        if (!(this instanceof i)) return new i(e);
        r.call(this, e), this._buffer = [], this._currentLength = 0, e && e.sliceBy ? this._sliceBy = e.sliceBy : this._sliceBy = "\n", 
        e && e.replaceWith && (this.replaceWith = new Buffer(e.replaceWith));
    }
    n(5).inherits(i, r), i.prototype._transform = function(e, t, n) {
        e = String(e);
        for (var r = 0, i = -1; (i = e.indexOf(this._sliceBy, r)) > -1; ) {
            var o = e.substring(r, i);
            this._append(o), this._separatorFlush(), r = i + this._sliceBy.length;
        }
        var a = e.substring(r);
        a.length > 0 && this._append(a), n();
    }, i.prototype._append = function(e) {
        var t = new Buffer(e);
        this._buffer.push(t), this._currentLength += t.length;
    }, i.prototype._separatorFlush = function(e) {
        this.replaceWith && !e && (this._buffer.push(this.replaceWith), this._currentLength += this.replaceWith.length);
        var t = Buffer.concat(this._buffer, this._currentLength);
        this._buffer = [], this._currentLength = 0, this.push(t), this.emit("slice", t);
    }, i.prototype._flush = function(e) {
        this._separatorFlush(!0), e && e();
    }, e.exports = i;
}
