// analysis/pretty/main.js:93132; webpack module 1179
function(e, t) {
    function n(e) {
        this.capacity = 0 | e, this.map = Object.create(null), this.list = new r;
    }
    function r() {
        this.firstNode = null, this.lastNode = null;
    }
    function i(e, t) {
        this.key = e, this.val = t, this.prev = null, this.next = null;
    }
    e.exports = function(e) {
        return new n(e);
    }, n.prototype.get = function(e) {
        var t = this.map[e];
        if (null != t) return this.used(t), t.val;
    }, n.prototype.set = function(e, t) {
        var n = this.map[e];
        if (null != n) n.val = t; else {
            if (this.capacity || this.prune(), !this.capacity) return !1;
            n = new i(e, t), this.map[e] = n, this.capacity--;
        }
        return this.used(n), !0;
    }, n.prototype.used = function(e) {
        this.list.moveToFront(e);
    }, n.prototype.prune = function() {
        var e = this.list.pop();
        null != e && (delete this.map[e.key], this.capacity++);
    }, r.prototype.moveToFront = function(e) {
        this.firstNode != e && (this.remove(e), null == this.firstNode ? (this.firstNode = e, 
        this.lastNode = e, e.prev = null, e.next = null) : (e.prev = null, e.next = this.firstNode, 
        e.next.prev = e, this.firstNode = e));
    }, r.prototype.pop = function() {
        var e = this.lastNode;
        return null != e && this.remove(e), e;
    }, r.prototype.remove = function(e) {
        this.firstNode == e ? this.firstNode = e.next : null != e.prev && (e.prev.next = e.next), 
        this.lastNode == e ? this.lastNode = e.prev : null != e.next && (e.next.prev = e.prev);
    };
}
