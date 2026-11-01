// analysis/pretty/main.js:34094; webpack module 311
function(e, t, n) {
    (function() {
        var t, r, i, o = {}.hasOwnProperty;
        i = n(79).isObject, r = n(57), t = n(29), e.exports = function(e) {
            function n(e, r, o, a) {
                var s;
                n.__super__.constructor.call(this, e), i(r) && (r = (s = r).version, o = s.encoding, 
                a = s.standalone), r || (r = "1.0"), this.type = t.Declaration, this.version = this.stringify.xmlVersion(r), 
                null != o && (this.encoding = this.stringify.xmlEncoding(o)), null != a && (this.standalone = this.stringify.xmlStandalone(a));
            }
            return function(e, t) {
                for (var n in t) o.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(n, e), n.prototype.toString = function(e) {
                return this.options.writer.declaration(this, this.options.writer.filterOptions(e));
            }, n;
        }(r);
    }).call(this);
}
