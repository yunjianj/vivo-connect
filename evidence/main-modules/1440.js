// analysis/pretty/main.js:107175; webpack module 1440
function(e, t, n) {
    e.exports = a;
    var r = n(702), i = n(48);
    function o(e, t) {
        this.afterTransform = function(e, n) {
            return function(e, t, n) {
                var r = e._transformState;
                r.transforming = !1;
                var i = r.writecb;
                if (!i) return e.emit("error", new Error("no writecb in Transform class"));
                r.writechunk = null, r.writecb = null, null != n && e.push(n);
                i && i(t);
                var o = e._readableState;
                o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark);
            }(t, e, n);
        }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null;
    }
    function a(e) {
        if (!(this instanceof a)) return new a(e);
        r.call(this, e);
        this._transformState = new o(e, this);
        var t = this;
        this._readableState.needReadable = !0, this._readableState.sync = !1, this.once("finish", function() {
            "function" == typeof this._flush ? this._flush(function(e) {
                s(t, e);
            }) : s(t);
        });
    }
    function s(e, t) {
        if (t) return e.emit("error", t);
        var n = e._writableState, r = (e._readableState, e._transformState);
        if (n.length) throw new Error("calling transform done when ws.length != 0");
        if (r.transforming) throw new Error("calling transform done when still transforming");
        return e.push(null);
    }
    i.inherits = n(22), i.inherits(a, r), a.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1, r.prototype.push.call(this, e, t);
    }, a.prototype._transform = function(e, t, n) {
        throw new Error("not implemented");
    }, a.prototype._write = function(e, t, n) {
        var r = this._transformState;
        if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
        }
    }, a.prototype._read = function(e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
    };
}
