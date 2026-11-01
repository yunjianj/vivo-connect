// analysis/pretty/main.js:34401; webpack module 320
function(e, t, n) {
    (function() {
        var t, r = {}.hasOwnProperty;
        t = n(657), e.exports = function(e) {
            function t(e) {
                t.__super__.constructor.call(this, e);
            }
            return function(e, t) {
                for (var n in t) r.call(t, n) && (e[n] = t[n]);
                function i() {
                    this.constructor = e;
                }
                i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype;
            }(t, e), t.prototype.document = function(e, t) {
                var n, r, i, o, a;
                for (t = this.filterOptions(t), o = "", r = 0, i = (a = e.children).length; r < i; r++) n = a[r], 
                o += this.writeChildNode(n, t, 0);
                return t.pretty && o.slice(-t.newline.length) === t.newline && (o = o.slice(0, -t.newline.length)), 
                o;
            }, t;
        }(t);
    }).call(this);
}
