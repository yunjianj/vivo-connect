// analysis/pretty/main.js:58899; webpack module 651
function(e, t, n) {
    (function() {
        "use strict";
        var e, r, i, o, a = {}.hasOwnProperty;
        r = n(306), e = n(1290), i = n(1299), o = n(659), t.defaults = r.defaults, t.processors = o, 
        t.ValidationError = function(e) {
            function t(e) {
                this.message = e;
            }
            return function(e, t) {
                for (var n in t) a.call(t, n) && (e[n] = t[n]);
                function r() {
                    this.constructor = e;
                }
                r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype;
            }(t, Error), t;
        }(), t.Builder = e.Builder, t.Parser = i.Parser, t.parseString = i.parseString, 
        t.parseStringPromise = i.parseStringPromise;
    }).call(this);
}
