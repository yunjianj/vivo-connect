// analysis/pretty/main.js:107135; webpack module 1438
function(e, t, n) {
    var r = n(1439), i = n(5).inherits, o = n(350);
    function a(e) {
        r.call(this, e), this._destroyed = !1;
    }
    function s(e, t, n) {
        n(null, e);
    }
    function l(e) {
        return function(t, n, r) {
            return "function" == typeof t && (r = n, n = t, t = {}), "function" != typeof n && (n = s), 
            "function" != typeof r && (r = null), e(t, n, r);
        };
    }
    i(a, r), a.prototype.destroy = function(e) {
        if (!this._destroyed) {
            this._destroyed = !0;
            var t = this;
            process.nextTick(function() {
                e && t.emit("error", e), t.emit("close");
            });
        }
    }, e.exports = l(function(e, t, n) {
        var r = new a(e);
        return r._transform = t, n && (r._flush = n), r;
    }), e.exports.ctor = l(function(e, t, n) {
        function r(t) {
            if (!(this instanceof r)) return new r(t);
            this.options = o(e, t), a.call(this, this.options);
        }
        return i(r, a), r.prototype._transform = t, n && (r.prototype._flush = n), r;
    }), e.exports.obj = l(function(e, t, n) {
        var r = new a(o({
            objectMode: !0,
            highWaterMark: 16
        }, e));
        return r._transform = t, n && (r._flush = n), r;
    });
}
