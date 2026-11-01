// analysis/pretty/main.js:88493; webpack module 1098
function(e, t, n) {
    "use strict";
    const r = n(38).Duplex, i = n(22), o = n(1099);
    function a(e) {
        if (!(this instanceof a)) return new a(e);
        if ("function" == typeof e) {
            this._callback = e;
            const t = function(e) {
                this._callback && (this._callback(e), this._callback = null);
            }.bind(this);
            this.on("pipe", function(e) {
                e.on("error", t);
            }), this.on("unpipe", function(e) {
                e.removeListener("error", t);
            }), e = null;
        }
        o._init.call(this, e), r.call(this);
    }
    i(a, r), Object.assign(a.prototype, o.prototype), a.prototype._new = function(e) {
        return new a(e);
    }, a.prototype._write = function(e, t, n) {
        this._appendBuffer(e), "function" == typeof n && n();
    }, a.prototype._read = function(e) {
        if (!this.length) return this.push(null);
        e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e);
    }, a.prototype.end = function(e) {
        r.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), 
        this._callback = null);
    }, a.prototype._destroy = function(e, t) {
        this._bufs.length = 0, this.length = 0, t(e);
    }, a.prototype._isBufferList = function(e) {
        return e instanceof a || e instanceof o || a.isBufferList(e);
    }, a.isBufferList = o.isBufferList, e.exports = a, e.exports.BufferListStream = a, 
    e.exports.BufferList = o;
}
