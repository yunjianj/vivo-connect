// analysis/pretty/main.js:108199; webpack module 1455
function(e, t, n) {
    "use strict";
    var r = n(1456), i = n(709), o = function(e) {
        this._ext = e[0], this._session = e[1], this._functors = {
            incoming: new r(this._session, "processIncomingMessage"),
            outgoing: new r(this._session, "processOutgoingMessage")
        };
    };
    o.prototype.pending = function(e) {
        var t = this._functors[e];
        t._stopped || (t.pending += 1);
    }, o.prototype.incoming = function(e, t, n, r) {
        this._exec("incoming", e, t, n, r);
    }, o.prototype.outgoing = function(e, t, n, r) {
        this._exec("outgoing", e, t, n, r);
    }, o.prototype.close = function() {
        return this._closed = this._closed || new i, this._doClose(), this._closed;
    }, o.prototype._exec = function(e, t, n, r, i) {
        this._functors[e].call(t, n, function(e, t) {
            e && (e.message = this._ext.name + ": " + e.message), r.call(i, e, t), this._doClose();
        }, this);
    }, o.prototype._doClose = function() {
        var e = this._functors.incoming, t = this._functors.outgoing;
        this._closed && e.pending + t.pending === 0 && (this._session && this._session.close(), 
        this._session = null, this._closed.done());
    }, e.exports = o;
}
