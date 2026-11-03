// analysis/pretty/main.js:107777; webpack module 1449
function(e, t, n) {
    "use strict";
    var r = n(37).Buffer, i = function() {
        this._queue = [], this._queueSize = 0, this._offset = 0;
    };
    i.prototype.put = function(e) {
        e && 0 !== e.length && (r.isBuffer(e) || (e = r.from(e)), this._queue.push(e), this._queueSize += e.length);
    }, i.prototype.read = function(e) {
        if (e > this._queueSize) return null;
        if (0 === e) return r.alloc(0);
        this._queueSize -= e;
        var t, n, i = this._queue, o = e, a = i[0];
        if (a.length >= e) return a.length === e ? i.shift() : (n = a.slice(0, e), i[0] = a.slice(e), 
        n);
        for (var s = 0, l = i.length; s < l && !(o < i[s].length); s++) o -= i[s].length;
        return t = i.splice(0, s), o > 0 && i.length > 0 && (t.push(i[0].slice(0, o)), i[0] = i[0].slice(o)), 
        r.concat(t, e);
    }, i.prototype.eachByte = function(e, t) {
        for (var n, r, i; this._queue.length > 0; ) {
            for (r = (n = this._queue[0]).length; this._offset < r; ) i = this._offset, this._offset += 1, 
            e.call(t, n[i]);
            this._offset = 0, this._queue.shift();
        }
    }, e.exports = i;
}
