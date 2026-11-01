// analysis/pretty/main.js:72477; webpack module 793
function(e, t, n) {
    "use strict";
    function r(e) {
        var t = this;
        if (t instanceof r || (t = new r), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach(function(e) {
            t.push(e);
        }); else if (arguments.length > 0) for (var n = 0, i = arguments.length; n < i; n++) t.push(arguments[n]);
        return t;
    }
    function i(e, t, n) {
        var r = t === e.head ? new s(n, null, t, e) : new s(n, t, t.next, e);
        return null === r.next && (e.tail = r), null === r.prev && (e.head = r), e.length++, 
        r;
    }
    function o(e, t) {
        e.tail = new s(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++;
    }
    function a(e, t) {
        e.head = new s(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++;
    }
    function s(e, t, n, r) {
        if (!(this instanceof s)) return new s(e, t, n, r);
        this.list = r, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, 
        n ? (n.prev = this, this.next = n) : this.next = null;
    }
    e.exports = r, r.Node = s, r.create = r, r.prototype.removeNode = function(e) {
        if (e.list !== this) throw new Error("removing node which does not belong to this list");
        var t = e.next, n = e.prev;
        return t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), 
        e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, 
        e.list = null, t;
    }, r.prototype.unshiftNode = function(e) {
        if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), 
            this.length++;
        }
    }, r.prototype.pushNode = function(e) {
        if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), 
            this.length++;
        }
    }, r.prototype.push = function() {
        for (var e = 0, t = arguments.length; e < t; e++) o(this, arguments[e]);
        return this.length;
    }, r.prototype.unshift = function() {
        for (var e = 0, t = arguments.length; e < t; e++) a(this, arguments[e]);
        return this.length;
    }, r.prototype.pop = function() {
        if (this.tail) {
            var e = this.tail.value;
            return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, 
            this.length--, e;
        }
    }, r.prototype.shift = function() {
        if (this.head) {
            var e = this.head.value;
            return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, 
            this.length--, e;
        }
    }, r.prototype.forEach = function(e, t) {
        t = t || this;
        for (var n = this.head, r = 0; null !== n; r++) e.call(t, n.value, r, this), n = n.next;
    }, r.prototype.forEachReverse = function(e, t) {
        t = t || this;
        for (var n = this.tail, r = this.length - 1; null !== n; r--) e.call(t, n.value, r, this), 
        n = n.prev;
    }, r.prototype.get = function(e) {
        for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
        if (t === e && null !== n) return n.value;
    }, r.prototype.getReverse = function(e) {
        for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
        if (t === e && null !== n) return n.value;
    }, r.prototype.map = function(e, t) {
        t = t || this;
        for (var n = new r, i = this.head; null !== i; ) n.push(e.call(t, i.value, this)), 
        i = i.next;
        return n;
    }, r.prototype.mapReverse = function(e, t) {
        t = t || this;
        for (var n = new r, i = this.tail; null !== i; ) n.push(e.call(t, i.value, this)), 
        i = i.prev;
        return n;
    }, r.prototype.reduce = function(e, t) {
        var n, r = this.head;
        if (arguments.length > 1) n = t; else {
            if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
            r = this.head.next, n = this.head.value;
        }
        for (var i = 0; null !== r; i++) n = e(n, r.value, i), r = r.next;
        return n;
    }, r.prototype.reduceReverse = function(e, t) {
        var n, r = this.tail;
        if (arguments.length > 1) n = t; else {
            if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
            r = this.tail.prev, n = this.tail.value;
        }
        for (var i = this.length - 1; null !== r; i--) n = e(n, r.value, i), r = r.prev;
        return n;
    }, r.prototype.toArray = function() {
        for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++) e[t] = n.value, 
        n = n.next;
        return e;
    }, r.prototype.toArrayReverse = function() {
        for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++) e[t] = n.value, 
        n = n.prev;
        return e;
    }, r.prototype.slice = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0) return n;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var i = 0, o = this.head; null !== o && i < e; i++) o = o.next;
        for (;null !== o && i < t; i++, o = o.next) n.push(o.value);
        return n;
    }, r.prototype.sliceReverse = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new r;
        if (t < e || t < 0) return n;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var i = this.length, o = this.tail; null !== o && i > t; i--) o = o.prev;
        for (;null !== o && i > e; i--, o = o.prev) n.push(o.value);
        return n;
    }, r.prototype.splice = function(e, t, ...n) {
        e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
        for (var r = 0, o = this.head; null !== o && r < e; r++) o = o.next;
        var a = [];
        for (r = 0; o && r < t; r++) a.push(o.value), o = this.removeNode(o);
        null === o && (o = this.tail), o !== this.head && o !== this.tail && (o = o.prev);
        for (r = 0; r < n.length; r++) o = i(this, o, n[r]);
        return a;
    }, r.prototype.reverse = function() {
        for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
            var r = n.prev;
            n.prev = n.next, n.next = r;
        }
        return this.head = t, this.tail = e, this;
    };
    try {
        n(1683)(r);
    } catch (e) {}
}
