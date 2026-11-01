// analysis/pretty/main.js:32859; webpack module 295
function(e, t, n) {
    e.exports = {
        DiffieHellman: f,
        generateECDSA: function(e) {
            var t = [];
            if (d) {
                var n = {
                    nistp256: "prime256v1",
                    nistp384: "secp384r1",
                    nistp521: "secp521r1"
                }[e], r = i.createECDH(n);
                return r.generateKeys(), t.push({
                    name: "curve",
                    data: o.from(e)
                }), t.push({
                    name: "Q",
                    data: r.getPublicKey()
                }), t.push({
                    name: "d",
                    data: r.getPrivateKey()
                }), new u({
                    type: "ecdsa",
                    curve: e,
                    parts: t
                });
            }
            var a = new _(e), s = a.getN(), l = Math.ceil((s.bitLength() + 64) / 8), c = new p(i.randomBytes(l)), h = s.subtract(p.ONE), f = c.mod(h).add(p.ONE), m = a.getG().multiply(f);
            return f = o.from(f.toByteArray()), m = o.from(a.getCurve().encodePointHex(m), "hex"), 
            t.push({
                name: "curve",
                data: o.from(e)
            }), t.push({
                name: "Q",
                data: m
            }), t.push({
                name: "d",
                data: f
            }), new u({
                type: "ecdsa",
                curve: e,
                parts: t
            });
        },
        generateED25519: function() {
            var e = l.sign.keyPair(), t = o.from(e.secretKey), n = o.from(e.publicKey);
            r.strictEqual(t.length, 64), r.strictEqual(n.length, 32);
            var i = [];
            return i.push({
                name: "A",
                data: n
            }), i.push({
                name: "k",
                data: t.slice(0, 32)
            }), new u({
                type: "ed25519",
                parts: i
            });
        }
    };
    var r = n(21), i = n(7), o = n(17).Buffer, a = n(42), s = n(35), l = n(152), c = n(33), u = n(34), d = void 0 !== i.createECDH, h = (n(1185), 
    n(214)), p = n(151).BigInteger;
    function f(e) {
        if (s.assertCompatible(e, c, [ 1, 4 ], "key"), this._isPriv = u.isPrivateKey(e, [ 1, 3 ]), 
        this._algo = e.type, this._curve = e.curve, this._key = e, "dsa" === e.type) {
            if (!d) throw new Error("Due to bugs in the node 0.10 crypto API, node 0.12.x or later is required to use DH");
            this._dh = i.createDiffieHellman(e.part.p.data, void 0, e.part.g.data, void 0), 
            this._p = e.part.p, this._g = e.part.g, this._isPriv && this._dh.setPrivateKey(e.part.x.data), 
            this._dh.setPublicKey(e.part.y.data);
        } else if ("ecdsa" === e.type) {
            if (!d) return this._ecParams = new _(this._curve), void (this._isPriv && (this._priv = new g(this._ecParams, e.part.d.data)));
            var t = {
                nistp256: "prime256v1",
                nistp384: "secp384r1",
                nistp521: "secp521r1"
            }[e.curve];
            if (this._dh = i.createECDH(t), "object" != typeof this._dh || "function" != typeof this._dh.setPrivateKey) return d = !1, 
            void f.call(this, e);
            this._isPriv && this._dh.setPrivateKey(e.part.d.data), this._dh.setPublicKey(e.part.Q.data);
        } else {
            if ("curve25519" !== e.type) throw new Error("DH not supported for " + e.type + " keys");
            this._isPriv && (s.assertCompatible(e, u, [ 1, 5 ], "key"), this._priv = e.part.k.data);
        }
    }
    function _(e) {
        var t = a.curves[e];
        r.object(t);
        var n = new p(t.p), i = new p(t.a), o = new p(t.b), s = new p(t.n), l = p.ONE, c = new h.ECCurveFp(n, i, o), u = c.decodePointHex(t.G.toString("hex"));
        this.curve = c, this.g = u, this.n = s, this.h = l;
    }
    function m(e, t) {
        this._params = e, 0 === t[0] && (t = t.slice(1)), this._pub = e.getCurve().decodePointHex(t.toString("hex"));
    }
    function g(e, t) {
        this._params = e, this._priv = new p(s.mpNormalize(t));
    }
    f.prototype.getPublicKey = function() {
        return this._isPriv ? this._key.toPublic() : this._key;
    }, f.prototype.getPrivateKey = function() {
        return this._isPriv ? this._key : void 0;
    }, f.prototype.getKey = f.prototype.getPrivateKey, f.prototype._keyCheck = function(e, t) {
        if (r.object(e, "key"), t || s.assertCompatible(e, u, [ 1, 3 ], "key"), s.assertCompatible(e, c, [ 1, 4 ], "key"), 
        e.type !== this._algo) throw new Error("A " + e.type + " key cannot be used in " + this._algo + " Diffie-Hellman");
        if (e.curve !== this._curve) throw new Error("A key from the " + e.curve + " curve cannot be used with a " + this._curve + " Diffie-Hellman");
        "dsa" === e.type && (r.deepEqual(e.part.p, this._p, "DSA key prime does not match"), 
        r.deepEqual(e.part.g, this._g, "DSA key generator does not match"));
    }, f.prototype.setKey = function(e) {
        if (this._keyCheck(e), "dsa" === e.type) this._dh.setPrivateKey(e.part.x.data), 
        this._dh.setPublicKey(e.part.y.data); else if ("ecdsa" === e.type) d ? (this._dh.setPrivateKey(e.part.d.data), 
        this._dh.setPublicKey(e.part.Q.data)) : this._priv = new g(this._ecParams, e.part.d.data); else if ("curve25519" === e.type) {
            var t = e.part.k;
            e.part.k || (t = e.part.r), this._priv = t.data, 0 === this._priv[0] && (this._priv = this._priv.slice(1)), 
            this._priv = this._priv.slice(0, 32);
        }
        this._key = e, this._isPriv = !0;
    }, f.prototype.setPrivateKey = f.prototype.setKey, f.prototype.computeSecret = function(e) {
        if (this._keyCheck(e, !0), !this._isPriv) throw new Error("DH exchange has not been initialized with a private key yet");
        var t;
        if ("dsa" === this._algo) return this._dh.computeSecret(e.part.y.data);
        if ("ecdsa" === this._algo) return d ? this._dh.computeSecret(e.part.Q.data) : (t = new m(this._ecParams, e.part.Q.data), 
        this._priv.deriveSharedSecret(t));
        if ("curve25519" === this._algo) {
            for (t = e.part.A.data; 0 === t[0] && t.length > 32; ) t = t.slice(1);
            var n = this._priv;
            r.strictEqual(t.length, 32), r.strictEqual(n.length, 32);
            var i = l.box.before(new Uint8Array(t), new Uint8Array(n));
            return o.from(i);
        }
        throw new Error("Invalid algorithm: " + this._algo);
    }, f.prototype.generateKey = function() {
        var e, t, n = [];
        if ("dsa" === this._algo) return this._dh.generateKeys(), n.push({
            name: "p",
            data: this._p.data
        }), n.push({
            name: "q",
            data: this._key.part.q.data
        }), n.push({
            name: "g",
            data: this._g.data
        }), n.push({
            name: "y",
            data: this._dh.getPublicKey()
        }), n.push({
            name: "x",
            data: this._dh.getPrivateKey()
        }), this._key = new u({
            type: "dsa",
            parts: n
        }), this._isPriv = !0, this._key;
        if ("ecdsa" === this._algo) {
            if (d) return this._dh.generateKeys(), n.push({
                name: "curve",
                data: o.from(this._curve)
            }), n.push({
                name: "Q",
                data: this._dh.getPublicKey()
            }), n.push({
                name: "d",
                data: this._dh.getPrivateKey()
            }), this._key = new u({
                type: "ecdsa",
                curve: this._curve,
                parts: n
            }), this._isPriv = !0, this._key;
            var a = this._ecParams.getN(), s = new p(i.randomBytes(a.bitLength())), c = a.subtract(p.ONE);
            return e = s.mod(c).add(p.ONE), t = this._ecParams.getG().multiply(e), e = o.from(e.toByteArray()), 
            t = o.from(this._ecParams.getCurve().encodePointHex(t), "hex"), this._priv = new g(this._ecParams, e), 
            n.push({
                name: "curve",
                data: o.from(this._curve)
            }), n.push({
                name: "Q",
                data: t
            }), n.push({
                name: "d",
                data: e
            }), this._key = new u({
                type: "ecdsa",
                curve: this._curve,
                parts: n
            }), this._isPriv = !0, this._key;
        }
        if ("curve25519" === this._algo) {
            var h = l.box.keyPair();
            return e = o.from(h.secretKey), t = o.from(h.publicKey), e = o.concat([ e, t ]), 
            r.strictEqual(e.length, 64), r.strictEqual(t.length, 32), n.push({
                name: "A",
                data: t
            }), n.push({
                name: "k",
                data: e
            }), this._key = new u({
                type: "curve25519",
                parts: n
            }), this._isPriv = !0, this._key;
        }
        throw new Error("Invalid algorithm: " + this._algo);
    }, f.prototype.generateKeys = f.prototype.generateKey, _.prototype.getCurve = function() {
        return this.curve;
    }, _.prototype.getG = function() {
        return this.g;
    }, _.prototype.getN = function() {
        return this.n;
    }, _.prototype.getH = function() {
        return this.h;
    }, g.prototype.deriveSharedSecret = function(e) {
        r.ok(e instanceof m);
        var t = e._pub.multiply(this._priv);
        return o.from(t.getX().toBigInteger().toByteArray());
    };
}
