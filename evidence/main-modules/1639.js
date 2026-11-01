// analysis/pretty/main.js:123830; webpack module 1639
function(e, t, n) {
    e.exports = i;
    var r = n(778);
    function i(e) {
        r.call(this, new o(this), e);
    }
    function o(e) {
        this.scope = e;
    }
    n(22)(i, r), i.prototype.readable = !0;
    var a = n(170).EVENTS;
    Object.keys(a).forEach(function(e) {
        if (0 === a[e]) o.prototype["on" + e] = function() {
            this.scope.emit(e);
        }; else if (1 === a[e]) o.prototype["on" + e] = function(t) {
            this.scope.emit(e, t);
        }; else {
            if (2 !== a[e]) throw Error("wrong number of arguments!");
            o.prototype["on" + e] = function(t, n) {
                this.scope.emit(e, t, n);
            };
        }
    });
}
