// analysis/pretty/main.js:108225; webpack module 1456
function(e, t, n) {
    "use strict";
    var r = n(708), i = function(e, t) {
        this._session = e, this._method = t, this._queue = new r(i.QUEUE_SIZE), this._stopped = !1, 
        this.pending = 0;
    };
    i.QUEUE_SIZE = 8, i.prototype.call = function(e, t, n, r) {
        if (!this._stopped) {
            var i = {
                error: e,
                message: t,
                callback: n,
                context: r,
                done: !1
            }, o = !1, a = this;
            if (this._queue.push(i), i.error) return i.done = !0, this._stop(), this._flushQueue();
            var s = function(e, t) {
                o ^ (o = !0) && (e ? (a._stop(), i.error = e, i.message = null) : i.message = t, 
                i.done = !0, a._flushQueue());
            };
            try {
                this._session[this._method](t, s);
            } catch (e) {
                s(e);
            }
        }
    }, i.prototype._stop = function() {
        this.pending = this._queue.length, this._stopped = !0;
    }, i.prototype._flushQueue = function() {
        for (var e, t = this._queue; t.length > 0 && t.peek().done; ) (e = t.shift()).error ? (this.pending = 0, 
        t.clear()) : this.pending -= 1, e.callback.call(e.context, e.error, e.message);
    }, e.exports = i;
}
