// analysis/pretty/main.js:98713; webpack module 1286
function(e, t, n) {
    "use strict";
    var r = n(17).Buffer;
    e.exports = function(e) {
        var t = e.Transform;
        function n(e, n) {
            this.conv = e, (n = n || {}).decodeStrings = !1, t.call(this, n);
        }
        function i(e, n) {
            this.conv = e, (n = n || {}).encoding = this.encoding = "utf8", t.call(this, n);
        }
        return n.prototype = Object.create(t.prototype, {
            constructor: {
                value: n
            }
        }), n.prototype._transform = function(e, t, n) {
            if ("string" != typeof e) return n(new Error("Iconv encoding stream needs strings as its input."));
            try {
                var r = this.conv.write(e);
                r && r.length && this.push(r), n();
            } catch (e) {
                n(e);
            }
        }, n.prototype._flush = function(e) {
            try {
                var t = this.conv.end();
                t && t.length && this.push(t), e();
            } catch (t) {
                e(t);
            }
        }, n.prototype.collect = function(e) {
            var t = [];
            return this.on("error", e), this.on("data", function(e) {
                t.push(e);
            }), this.on("end", function() {
                e(null, r.concat(t));
            }), this;
        }, i.prototype = Object.create(t.prototype, {
            constructor: {
                value: i
            }
        }), i.prototype._transform = function(e, t, n) {
            if (!(r.isBuffer(e) || e instanceof Uint8Array)) return n(new Error("Iconv decoding stream needs buffers as its input."));
            try {
                var i = this.conv.write(e);
                i && i.length && this.push(i, this.encoding), n();
            } catch (e) {
                n(e);
            }
        }, i.prototype._flush = function(e) {
            try {
                var t = this.conv.end();
                t && t.length && this.push(t, this.encoding), e();
            } catch (t) {
                e(t);
            }
        }, i.prototype.collect = function(e) {
            var t = "";
            return this.on("error", e), this.on("data", function(e) {
                t += e;
            }), this.on("end", function() {
                e(null, t);
            }), this;
        }, {
            IconvLiteEncoderStream: n,
            IconvLiteDecoderStream: i
        };
    };
}
