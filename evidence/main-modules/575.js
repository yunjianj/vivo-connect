// analysis/pretty/main.js:54408; webpack module 575
function(e, t, n) {
    var r = n(5), i = n(1072);
    function o(e, t, n) {
        e[t] = function() {
            return delete e[t], n.apply(this, arguments), this[t].apply(this, arguments);
        };
    }
    function a(e, t) {
        if (!(this instanceof a)) return new a(e, t);
        i.call(this, t), o(this, "_read", function() {
            var n = e.call(this, t), r = this.emit.bind(this, "error");
            n.on("error", r), n.pipe(this);
        }), this.emit("readable");
    }
    function s(e, t) {
        if (!(this instanceof s)) return new s(e, t);
        i.call(this, t), o(this, "_write", function() {
            var n = e.call(this, t), r = this.emit.bind(this, "error");
            n.on("error", r), this.pipe(n);
        }), this.emit("writable");
    }
    e.exports = {
        Readable: a,
        Writable: s
    }, r.inherits(a, i), r.inherits(s, i);
}
