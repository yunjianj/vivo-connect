// analysis/pretty/main.js:93495; webpack module 1185
function(e, t, n) {
    var r = n(7), i = n(151).BigInteger, o = (n(214).ECPointFp, n(17).Buffer);
    function a(e, t) {
        return e.length >= t ? e : a("0" + e, t);
    }
    t.ECCurves = n(1186), t.ECKey = function(e, t, n) {
        var s, l = e(), c = l.getN(), u = Math.floor(c.bitLength() / 8);
        if (t) if (n) {
            e = l.getCurve();
            this.P = e.decodePointHex(t.toString("hex"));
        } else {
            if (t.length != u) return !1;
            s = new i(t.toString("hex"), 16);
        } else {
            var d = c.subtract(i.ONE), h = new i(r.randomBytes(c.bitLength()));
            s = h.mod(d).add(i.ONE), this.P = l.getG().multiply(s);
        }
        this.P && (this.PublicKey = o.from(l.getCurve().encodeCompressedPointHex(this.P), "hex")), 
        s && (this.PrivateKey = o.from(a(s.toString(16), 2 * u), "hex"), this.deriveSharedSecret = function(e) {
            if (!e || !e.P) return !1;
            var t = e.P.multiply(s);
            return o.from(a(t.getX().toBigInteger().toString(16), 2 * u), "hex");
        });
    };
}
