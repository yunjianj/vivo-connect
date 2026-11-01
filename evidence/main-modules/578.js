// analysis/pretty/main.js:54729; webpack module 578
function(e, t, n) {
    "use strict";
    var r = n(87);
    function i(e, t) {
        e.emit("error", t);
    }
    e.exports = {
        destroy: function(e, t) {
            var n = this, o = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
            return o || a ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, 
            r.nextTick(i, this, e)) : r.nextTick(i, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), 
            this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                !t && e ? n._writableState ? n._writableState.errorEmitted || (n._writableState.errorEmitted = !0, 
                r.nextTick(i, n, e)) : r.nextTick(i, n, e) : t && t(e);
            }), this);
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, 
            this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, 
            this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, 
            this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
        }
    };
}
