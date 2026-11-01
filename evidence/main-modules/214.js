// analysis/pretty/main.js:26970; webpack module 214
function(e, t, n) {
    var r = n(151).BigInteger, i = r.prototype.Barrett;
    function o(e, t) {
        this.x = t, this.q = e;
    }
    function a(e, t, n, i) {
        this.curve = e, this.x = t, this.y = n, this.z = null == i ? r.ONE : i, this.zinv = null;
    }
    function s(e, t, n) {
        this.q = e, this.a = this.fromBigInteger(t), this.b = this.fromBigInteger(n), this.infinity = new a(this, null, null), 
        this.reducer = new i(this.q);
    }
    o.prototype.equals = function(e) {
        return e == this || this.q.equals(e.q) && this.x.equals(e.x);
    }, o.prototype.toBigInteger = function() {
        return this.x;
    }, o.prototype.negate = function() {
        return new o(this.q, this.x.negate().mod(this.q));
    }, o.prototype.add = function(e) {
        return new o(this.q, this.x.add(e.toBigInteger()).mod(this.q));
    }, o.prototype.subtract = function(e) {
        return new o(this.q, this.x.subtract(e.toBigInteger()).mod(this.q));
    }, o.prototype.multiply = function(e) {
        return new o(this.q, this.x.multiply(e.toBigInteger()).mod(this.q));
    }, o.prototype.square = function() {
        return new o(this.q, this.x.square().mod(this.q));
    }, o.prototype.divide = function(e) {
        return new o(this.q, this.x.multiply(e.toBigInteger().modInverse(this.q)).mod(this.q));
    }, a.prototype.getX = function() {
        null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q));
        var e = this.x.toBigInteger().multiply(this.zinv);
        return this.curve.reduce(e), this.curve.fromBigInteger(e);
    }, a.prototype.getY = function() {
        null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q));
        var e = this.y.toBigInteger().multiply(this.zinv);
        return this.curve.reduce(e), this.curve.fromBigInteger(e);
    }, a.prototype.equals = function(e) {
        return e == this || (this.isInfinity() ? e.isInfinity() : e.isInfinity() ? this.isInfinity() : !!e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(r.ZERO) && e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(r.ZERO));
    }, a.prototype.isInfinity = function() {
        return null == this.x && null == this.y || this.z.equals(r.ZERO) && !this.y.toBigInteger().equals(r.ZERO);
    }, a.prototype.negate = function() {
        return new a(this.curve, this.x, this.y.negate(), this.z);
    }, a.prototype.add = function(e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var t = e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q), n = e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q);
        if (r.ZERO.equals(n)) return r.ZERO.equals(t) ? this.twice() : this.curve.getInfinity();
        var i = new r("3"), o = this.x.toBigInteger(), s = this.y.toBigInteger(), l = (e.x.toBigInteger(), 
        e.y.toBigInteger(), n.square()), c = l.multiply(n), u = o.multiply(l), d = t.square().multiply(this.z), h = d.subtract(u.shiftLeft(1)).multiply(e.z).subtract(c).multiply(n).mod(this.curve.q), p = u.multiply(i).multiply(t).subtract(s.multiply(c)).subtract(d.multiply(t)).multiply(e.z).add(t.multiply(c)).mod(this.curve.q), f = c.multiply(this.z).multiply(e.z).mod(this.curve.q);
        return new a(this.curve, this.curve.fromBigInteger(h), this.curve.fromBigInteger(p), f);
    }, a.prototype.twice = function() {
        if (this.isInfinity()) return this;
        if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
        var e = new r("3"), t = this.x.toBigInteger(), n = this.y.toBigInteger(), i = n.multiply(this.z), o = i.multiply(n).mod(this.curve.q), s = this.curve.a.toBigInteger(), l = t.square().multiply(e);
        r.ZERO.equals(s) || (l = l.add(this.z.square().multiply(s)));
        var c = (l = l.mod(this.curve.q)).square().subtract(t.shiftLeft(3).multiply(o)).shiftLeft(1).multiply(i).mod(this.curve.q), u = l.multiply(e).multiply(t).subtract(o.shiftLeft(1)).shiftLeft(2).multiply(o).subtract(l.square().multiply(l)).mod(this.curve.q), d = i.square().multiply(i).shiftLeft(3).mod(this.curve.q);
        return new a(this.curve, this.curve.fromBigInteger(c), this.curve.fromBigInteger(u), d);
    }, a.prototype.multiply = function(e) {
        if (this.isInfinity()) return this;
        if (0 == e.signum()) return this.curve.getInfinity();
        var t, n = e, i = n.multiply(new r("3")), o = this.negate(), a = this;
        for (t = i.bitLength() - 2; t > 0; --t) {
            a = a.twice();
            var s = i.testBit(t);
            s != n.testBit(t) && (a = a.add(s ? this : o));
        }
        return a;
    }, a.prototype.multiplyTwo = function(e, t, n) {
        var r;
        r = e.bitLength() > n.bitLength() ? e.bitLength() - 1 : n.bitLength() - 1;
        for (var i = this.curve.getInfinity(), o = this.add(t); r >= 0; ) i = i.twice(), 
        e.testBit(r) ? i = n.testBit(r) ? i.add(o) : i.add(this) : n.testBit(r) && (i = i.add(t)), 
        --r;
        return i;
    }, s.prototype.getQ = function() {
        return this.q;
    }, s.prototype.getA = function() {
        return this.a;
    }, s.prototype.getB = function() {
        return this.b;
    }, s.prototype.equals = function(e) {
        return e == this || this.q.equals(e.q) && this.a.equals(e.a) && this.b.equals(e.b);
    }, s.prototype.getInfinity = function() {
        return this.infinity;
    }, s.prototype.fromBigInteger = function(e) {
        return new o(this.q, e);
    }, s.prototype.reduce = function(e) {
        this.reducer.reduce(e);
    }, s.prototype.encodePointHex = function(e) {
        if (e.isInfinity()) return "00";
        var t = e.getX().toBigInteger().toString(16), n = e.getY().toBigInteger().toString(16), r = this.getQ().toString(16).length;
        for (r % 2 != 0 && r++; t.length < r; ) t = "0" + t;
        for (;n.length < r; ) n = "0" + n;
        return "04" + t + n;
    }, s.prototype.decodePointHex = function(e) {
        var t;
        switch (parseInt(e.substr(0, 2), 16)) {
          case 0:
            return this.infinity;

          case 2:
            t = !1;

          case 3:
            null == t && (t = !0);
            var n = e.length - 2, i = e.substr(2, n), o = this.fromBigInteger(new r(i, 16)), s = o.multiply(o.square().add(this.getA())).add(this.getB()).sqrt();
            if (null == s) throw "Invalid point compression";
            var l = s.toBigInteger();
            return l.testBit(0) != t && (s = this.fromBigInteger(this.getQ().subtract(l))), 
            new a(this, o, s);

          case 4:
          case 6:
          case 7:
            n = (e.length - 2) / 2, i = e.substr(2, n);
            var c = e.substr(n + 2, n);
            return new a(this, this.fromBigInteger(new r(i, 16)), this.fromBigInteger(new r(c, 16)));

          default:
            return null;
        }
    }, s.prototype.encodeCompressedPointHex = function(e) {
        if (e.isInfinity()) return "00";
        var t = e.getX().toBigInteger().toString(16), n = this.getQ().toString(16).length;
        for (n % 2 != 0 && n++; t.length < n; ) t = "0" + t;
        return (e.getY().toBigInteger().isEven() ? "02" : "03") + t;
    }, o.prototype.getR = function() {
        if (null != this.r) return this.r;
        this.r = null;
        var e = this.q.bitLength();
        e > 128 && (-1 == this.q.shiftRight(e - 64).intValue() && (this.r = r.ONE.shiftLeft(e).subtract(this.q)));
        return this.r;
    }, o.prototype.modMult = function(e, t) {
        return this.modReduce(e.multiply(t));
    }, o.prototype.modReduce = function(e) {
        if (null != this.getR()) {
            for (var t = q.bitLength(); e.bitLength() > t + 1; ) {
                var n = e.shiftRight(t), i = e.subtract(n.shiftLeft(t));
                this.getR().equals(r.ONE) || (n = n.multiply(this.getR())), e = n.add(i);
            }
            for (;e.compareTo(q) >= 0; ) e = e.subtract(q);
        } else e = e.mod(q);
        return e;
    }, o.prototype.sqrt = function() {
        if (!this.q.testBit(0)) throw "unsupported";
        if (this.q.testBit(1)) {
            var e = new o(this.q, this.x.modPow(this.q.shiftRight(2).add(r.ONE), this.q));
            return e.square().equals(this) ? e : null;
        }
        var t = this.q.subtract(r.ONE), n = t.shiftRight(1);
        if (!this.x.modPow(n, this.q).equals(r.ONE)) return null;
        var i, a, s = t.shiftRight(2).shiftLeft(1).add(r.ONE), l = this.x, c = modDouble(modDouble(l));
        do {
            var u;
            do {
                u = new r(this.q.bitLength(), new SecureRandom);
            } while (u.compareTo(this.q) >= 0 || !u.multiply(u).subtract(c).modPow(n, this.q).equals(t));
            var d = this.lucasSequence(u, l, s);
            if (i = d[0], a = d[1], this.modMult(a, a).equals(c)) return a.testBit(0) && (a = a.add(q)), 
            a = a.shiftRight(1), new o(q, a);
        } while (i.equals(r.ONE) || i.equals(t));
        return null;
    }, o.prototype.lucasSequence = function(e, t, n) {
        for (var i = n.bitLength(), o = n.getLowestSetBit(), a = r.ONE, s = r.TWO, l = e, c = r.ONE, u = r.ONE, d = i - 1; d >= o + 1; --d) c = this.modMult(c, u), 
        n.testBit(d) ? (u = this.modMult(c, t), a = this.modMult(a, l), s = this.modReduce(l.multiply(s).subtract(e.multiply(c))), 
        l = this.modReduce(l.multiply(l).subtract(u.shiftLeft(1)))) : (u = c, a = this.modReduce(a.multiply(s).subtract(c)), 
        l = this.modReduce(l.multiply(s).subtract(e.multiply(c))), s = this.modReduce(s.multiply(s).subtract(c.shiftLeft(1))));
        c = this.modMult(c, u), u = this.modMult(c, t), a = this.modReduce(a.multiply(s).subtract(c)), 
        s = this.modReduce(l.multiply(s).subtract(e.multiply(c))), c = this.modMult(c, u);
        for (d = 1; d <= o; ++d) a = this.modMult(a, s), s = this.modReduce(s.multiply(s).subtract(c.shiftLeft(1))), 
        c = this.modMult(c, c);
        return [ a, s ];
    };
    t = {
        ECCurveFp: s,
        ECPointFp: a,
        ECFieldElementFp: o
    };
    e.exports = t;
}
