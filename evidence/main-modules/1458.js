// analysis/pretty/main.js:108273; webpack module 1458
function(e, t, n) {
    "use strict";
    var r = n(37).Buffer, i = function() {
        this.rsv1 = !1, this.rsv2 = !1, this.rsv3 = !1, this.opcode = null, this.length = 0, 
        this._chunks = [];
    }, o = {
        read: function() {
            return this.data = this.data || r.concat(this._chunks, this.length);
        },
        pushFrame: function(e) {
            this.rsv1 = this.rsv1 || e.rsv1, this.rsv2 = this.rsv2 || e.rsv2, this.rsv3 = this.rsv3 || e.rsv3, 
            null === this.opcode && (this.opcode = e.opcode), this._chunks.push(e.payload), 
            this.length += e.length;
        }
    };
    for (var a in o) i.prototype[a] = o[a];
    e.exports = i;
}
