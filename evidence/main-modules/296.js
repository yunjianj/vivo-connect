// analysis/pretty/main.js:33069; webpack module 296
function(e, t, n) {
    e.exports = {
        read: function(e, t) {
            return u.read(e, t, "pkcs1");
        },
        readPkcs1: function(e, t, n) {
            switch (e) {
              case "RSA":
                if ("public" === t) return function(e) {
                    var t = h(e, "modulus"), n = h(e, "exponent");
                    return new l({
                        type: "rsa",
                        parts: [ {
                            name: "e",
                            data: n
                        }, {
                            name: "n",
                            data: t
                        } ]
                    });
                }(n);
                if ("private" === t) return function(e) {
                    var t = h(e, "version");
                    r.strictEqual(t[0], 0);
                    var n = h(e, "modulus"), i = h(e, "public exponent"), o = h(e, "private exponent"), a = h(e, "prime1"), s = h(e, "prime2"), l = h(e, "exponent1"), u = h(e, "exponent2"), d = h(e, "iqmp");
                    return new c({
                        type: "rsa",
                        parts: [ {
                            name: "n",
                            data: n
                        }, {
                            name: "e",
                            data: i
                        }, {
                            name: "d",
                            data: o
                        }, {
                            name: "iqmp",
                            data: d
                        }, {
                            name: "p",
                            data: a
                        }, {
                            name: "q",
                            data: s
                        }, {
                            name: "dmodp",
                            data: l
                        }, {
                            name: "dmodq",
                            data: u
                        } ]
                    });
                }(n);
                throw new Error("Unknown key type: " + t);

              case "DSA":
                if ("public" === t) return function(e) {
                    var t = h(e, "y"), n = h(e, "p"), r = h(e, "q"), i = h(e, "g");
                    return new l({
                        type: "dsa",
                        parts: [ {
                            name: "y",
                            data: t
                        }, {
                            name: "p",
                            data: n
                        }, {
                            name: "q",
                            data: r
                        }, {
                            name: "g",
                            data: i
                        } ]
                    });
                }(n);
                if ("private" === t) return function(e) {
                    var t = h(e, "version");
                    r.strictEqual(t.readUInt8(0), 0);
                    var n = h(e, "p"), i = h(e, "q"), o = h(e, "g"), a = h(e, "y"), s = h(e, "x");
                    return new c({
                        type: "dsa",
                        parts: [ {
                            name: "p",
                            data: n
                        }, {
                            name: "q",
                            data: i
                        }, {
                            name: "g",
                            data: o
                        }, {
                            name: "y",
                            data: a
                        }, {
                            name: "x",
                            data: s
                        } ]
                    });
                }(n);
                throw new Error("Unknown key type: " + t);

              case "EC":
              case "ECDSA":
                if ("private" === t) return function(e) {
                    var t = h(e, "version");
                    r.strictEqual(t.readUInt8(0), 1);
                    var n = e.readString(i.Ber.OctetString, !0);
                    e.readSequence(160);
                    var a = d(e);
                    r.string(a, "a known elliptic curve"), e.readSequence(161);
                    var l = e.readString(i.Ber.BitString, !0);
                    l = s.ecNormalize(l);
                    var u = {
                        type: "ecdsa",
                        parts: [ {
                            name: "curve",
                            data: o.from(a)
                        }, {
                            name: "Q",
                            data: l
                        }, {
                            name: "d",
                            data: n
                        } ]
                    };
                    return new c(u);
                }(n);
                if ("public" === t) return function(e) {
                    e.readSequence();
                    var t = e.readOID();
                    r.strictEqual(t, "1.2.840.10045.2.1", "must be ecPublicKey");
                    for (var n, c = e.readOID(), u = Object.keys(a.curves), d = 0; d < u.length; ++d) {
                        var h = u[d];
                        if (a.curves[h].pkcs8oid === c) {
                            n = h;
                            break;
                        }
                    }
                    r.string(n, "a known ECDSA named curve");
                    var p = e.readString(i.Ber.BitString, !0);
                    p = s.ecNormalize(p);
                    var f = {
                        type: "ecdsa",
                        parts: [ {
                            name: "curve",
                            data: o.from(n)
                        }, {
                            name: "Q",
                            data: p
                        } ]
                    };
                    return new l(f);
                }(n);
                throw new Error("Unknown key type: " + t);

              case "EDDSA":
              case "EdDSA":
                if ("private" === t) return function(e) {
                    var t = h(e, "version");
                    r.strictEqual(t.readUInt8(0), 1);
                    var n = e.readString(i.Ber.OctetString, !0);
                    e.readSequence(160);
                    var o = e.readOID();
                    r.strictEqual(o, "1.3.101.112", "the ed25519 curve identifier"), e.readSequence(161);
                    var a = s.readBitString(e), l = {
                        type: "ed25519",
                        parts: [ {
                            name: "A",
                            data: s.zeroPadToLength(a, 32)
                        }, {
                            name: "k",
                            data: n
                        } ]
                    };
                    return new c(l);
                }(n);
                throw new Error(t + " keys not supported with EdDSA");

              default:
                throw new Error("Unknown key algo: " + e);
            }
        },
        write: function(e, t) {
            return u.write(e, t, "pkcs1");
        },
        writePkcs1: function(e, t) {
            switch (e.startSequence(), t.type) {
              case "rsa":
                c.isPrivateKey(t) ? function(e, t) {
                    var n = o.from([ 0 ]);
                    e.writeBuffer(n, i.Ber.Integer), e.writeBuffer(t.part.n.data, i.Ber.Integer), e.writeBuffer(t.part.e.data, i.Ber.Integer), 
                    e.writeBuffer(t.part.d.data, i.Ber.Integer), e.writeBuffer(t.part.p.data, i.Ber.Integer), 
                    e.writeBuffer(t.part.q.data, i.Ber.Integer), t.part.dmodp && t.part.dmodq || s.addRSAMissing(t);
                    e.writeBuffer(t.part.dmodp.data, i.Ber.Integer), e.writeBuffer(t.part.dmodq.data, i.Ber.Integer), 
                    e.writeBuffer(t.part.iqmp.data, i.Ber.Integer);
                }(e, t) : function(e, t) {
                    e.writeBuffer(t.part.n.data, i.Ber.Integer), e.writeBuffer(t.part.e.data, i.Ber.Integer);
                }(e, t);
                break;

              case "dsa":
                c.isPrivateKey(t) ? function(e, t) {
                    var n = o.from([ 0 ]);
                    e.writeBuffer(n, i.Ber.Integer), e.writeBuffer(t.part.p.data, i.Ber.Integer), e.writeBuffer(t.part.q.data, i.Ber.Integer), 
                    e.writeBuffer(t.part.g.data, i.Ber.Integer), e.writeBuffer(t.part.y.data, i.Ber.Integer), 
                    e.writeBuffer(t.part.x.data, i.Ber.Integer);
                }(e, t) : function(e, t) {
                    e.writeBuffer(t.part.y.data, i.Ber.Integer), e.writeBuffer(t.part.p.data, i.Ber.Integer), 
                    e.writeBuffer(t.part.q.data, i.Ber.Integer), e.writeBuffer(t.part.g.data, i.Ber.Integer);
                }(e, t);
                break;

              case "ecdsa":
                c.isPrivateKey(t) ? function(e, t) {
                    var n = o.from([ 1 ]);
                    e.writeBuffer(n, i.Ber.Integer), e.writeBuffer(t.part.d.data, i.Ber.OctetString), 
                    e.startSequence(160);
                    var l = t.part.curve.data.toString(), c = a.curves[l].pkcs8oid;
                    r.string(c, "a known ECDSA named curve"), e.writeOID(c), e.endSequence(), e.startSequence(161);
                    var u = s.ecNormalize(t.part.Q.data, !0);
                    e.writeBuffer(u, i.Ber.BitString), e.endSequence();
                }(e, t) : function(e, t) {
                    e.startSequence(), e.writeOID("1.2.840.10045.2.1");
                    var n = t.part.curve.data.toString(), o = a.curves[n].pkcs8oid;
                    r.string(o, "a known ECDSA named curve"), e.writeOID(o), e.endSequence();
                    var l = s.ecNormalize(t.part.Q.data, !0);
                    e.writeBuffer(l, i.Ber.BitString);
                }(e, t);
                break;

              case "ed25519":
                c.isPrivateKey(t) ? function(e, t) {
                    var n = o.from([ 1 ]);
                    e.writeBuffer(n, i.Ber.Integer), e.writeBuffer(t.part.k.data, i.Ber.OctetString), 
                    e.startSequence(160), e.writeOID("1.3.101.112"), e.endSequence(), e.startSequence(161), 
                    s.writeBitString(e, t.part.A.data), e.endSequence();
                }(e, t) : function(e, t) {
                    throw new Error("Public keys are not supported for EdDSA PKCS#1");
                }();
                break;

              default:
                throw new Error("Unknown key algo: " + t.type);
            }
            e.endSequence();
        }
    };
    var r = n(21), i = n(78), o = n(17).Buffer, a = n(42), s = n(35), l = n(33), c = n(34), u = n(91), d = n(153).readECDSACurve;
    function h(e, t) {
        return r.strictEqual(e.peek(), i.Ber.Integer, t + " is not an Integer"), s.mpNormalize(e.readString(i.Ber.Integer, !0));
    }
}
