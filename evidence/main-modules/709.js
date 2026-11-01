// analysis/pretty/main.js:63463; webpack module 709
function(e, t, n) {
    "use strict";
    var r = n(708), i = function() {
        this._complete = !1, this._callbacks = new r(i.QUEUE_SIZE);
    };
    i.QUEUE_SIZE = 4, i.all = function(e) {
        var t = new i, n = e.length, r = n;
        for (0 === n && t.done(); r--; ) e[r].then(function() {
            0 === (n -= 1) && t.done();
        });
        return t;
    }, i.prototype.then = function(e) {
        this._complete ? e() : this._callbacks.push(e);
    }, i.prototype.done = function() {
        this._complete = !0;
        for (var e, t = this._callbacks; e = t.shift(); ) e();
    }, e.exports = i;
}
