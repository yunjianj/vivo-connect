// analysis/pretty/main.js:108164; webpack module 1454
function(e, t, n) {
    "use strict";
    var r = n(1455), i = n(709), o = function(e) {
        this._cells = e.map(function(e) {
            return new r(e);
        }), this._stopped = {
            incoming: !1,
            outgoing: !1
        };
    };
    o.prototype.processIncomingMessage = function(e, t, n) {
        this._stopped.incoming || this._loop("incoming", this._cells.length - 1, -1, -1, e, t, n);
    }, o.prototype.processOutgoingMessage = function(e, t, n) {
        this._stopped.outgoing || this._loop("outgoing", 0, this._cells.length, 1, e, t, n);
    }, o.prototype.close = function(e, t) {
        this._stopped = {
            incoming: !0,
            outgoing: !0
        };
        var n = this._cells.map(function(e) {
            return e.close();
        });
        e && i.all(n).then(function() {
            e.call(t);
        });
    }, o.prototype._loop = function(e, t, n, r, i, o, a) {
        for (var s = this._cells, l = s.length, c = this; l--; ) s[l].pending(e);
        var u = function(t, i, l) {
            if (t === n) return o.call(a, i, l);
            s[t][e](i, l, function(n, i) {
                n && (c._stopped[e] = !0), u(t + r, n, i);
            });
        };
        u(t, null, i);
    }, e.exports = o;
}
