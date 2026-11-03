// analysis/pretty/main.js:87440; webpack module 1079
function(e, t, n) {
    "use strict";
    var r = n(208).Buffer, i = n(5);
    e.exports = function() {
        function e() {
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), this.head = null, this.tail = null, this.length = 0;
        }
        return e.prototype.push = function(e) {
            var t = {
                data: e,
                next: null
            };
            this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
        }, e.prototype.unshift = function(e) {
            var t = {
                data: e,
                next: this.head
            };
            0 === this.length && (this.tail = t), this.head = t, ++this.length;
        }, e.prototype.shift = function() {
            if (0 !== this.length) {
                var e = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, 
                --this.length, e;
            }
        }, e.prototype.clear = function() {
            this.head = this.tail = null, this.length = 0;
        }, e.prototype.join = function(e) {
            if (0 === this.length) return "";
            for (var t = this.head, n = "" + t.data; t = t.next; ) n += e + t.data;
            return n;
        }, e.prototype.concat = function(e) {
            if (0 === this.length) return r.alloc(0);
            for (var t, n, i, o = r.allocUnsafe(e >>> 0), a = this.head, s = 0; a; ) t = a.data, 
            n = o, i = s, t.copy(n, i), s += a.data.length, a = a.next;
            return o;
        }, e;
    }(), i && i.inspect && i.inspect.custom && (e.exports.prototype[i.inspect.custom] = function() {
        var e = i.inspect({
            length: this.length
        });
        return this.constructor.name + " " + e;
    });
}
