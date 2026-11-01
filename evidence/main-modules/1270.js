// analysis/pretty/main.js:97392; webpack module 1270
function(e, t, n) {
    "use strict";
    function r(e, t) {
        this.encoder = e, this.addBOM = !0;
    }
    function i(e, t) {
        this.decoder = e, this.pass = !1, this.options = t || {};
    }
    t.PrependBOM = r, r.prototype.write = function(e) {
        return this.addBOM && (e = "\ufeff" + e, this.addBOM = !1), this.encoder.write(e);
    }, r.prototype.end = function() {
        return this.encoder.end();
    }, t.StripBOM = i, i.prototype.write = function(e) {
        var t = this.decoder.write(e);
        return this.pass || !t || ("\ufeff" === t[0] && (t = t.slice(1), "function" == typeof this.options.stripBOM && this.options.stripBOM()), 
        this.pass = !0), t;
    }, i.prototype.end = function() {
        return this.decoder.end();
    };
}
