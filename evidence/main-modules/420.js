// analysis/pretty/main.js:43350; webpack module 420
function(e, t, n) {
    "use strict";
    function r(e, t) {
        o(e, t), i(e);
    }
    function i(e) {
        e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close");
    }
    function o(e, t) {
        e.emit("error", t);
    }
    e.exports = {
        destroy: function(e, t) {
            var n = this, a = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
            return a || s ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, 
            process.nextTick(o, this, e)) : process.nextTick(o, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), 
            this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                !t && e ? n._writableState ? n._writableState.errorEmitted ? process.nextTick(i, n) : (n._writableState.errorEmitted = !0, 
                process.nextTick(r, n, e)) : process.nextTick(r, n, e) : t ? (process.nextTick(i, n), 
                t(e)) : process.nextTick(i, n);
            }), this);
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, 
            this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, 
            this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, 
            this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
        },
        errorOrDestroy: function(e, t) {
            var n = e._readableState, r = e._writableState;
            n && n.autoDestroy || r && r.autoDestroy ? e.destroy(t) : e.emit("error", t);
        }
    };
}
