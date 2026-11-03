// analysis/pretty/main.js:123274; webpack module 1615
function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    }, function(e, t) {
        function n() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, 
        new n);
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(364), a = n(9), s = n(83);
    var l = function(e) {
        function t(t, n) {
            var r = e.call(this, {
                decodeStrings: !1
            }) || this;
            return r._decoder = new s.StringDecoder, r._parser = new o.Parser(t, n), r;
        }
        return i(t, e), t.prototype._write = function(e, t, n) {
            (function(e, t) {
                return "buffer" === t;
            })(0, t) && (e = this._decoder.write(e)), this._parser.write(e), n();
        }, t.prototype._final = function(e) {
            this._parser.end(this._decoder.end()), e();
        }, t;
    }(a.Writable);
    t.WritableStream = l;
}
