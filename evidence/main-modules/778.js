// analysis/pretty/main.js:70978; webpack module 778
function(e, t, n) {
    e.exports = s;
    var r = n(768), i = n(38).Writable, o = n(83).StringDecoder, a = n(47).Buffer;
    function s(e, t) {
        var n = this._parser = new r(e, t), a = this._decoder = new o;
        i.call(this, {
            decodeStrings: !1
        }), this.once("finish", function() {
            n.end(a.end());
        });
    }
    n(22)(s, i), s.prototype._write = function(e, t, n) {
        e instanceof a && (e = this._decoder.write(e)), this._parser.write(e), n();
    };
}
