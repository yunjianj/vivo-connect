// analysis/pretty/main.js:20796; webpack module 153
function(e, t, n) {
    e.exports = {
        read: function(e, t) {
            return u.read(e, t, "pkcs8");
        },
        readPkcs8: function(e, t, n) {
            n.peek() === i.Ber.Integer && (r.strictEqual(t, "private", "unexpected Integer at start of public key"), 
            n.readString(i.Ber.Integer, !0));
            n.readSequence();
            var a = n.offset + n.length, u = n.readOID();
            switch (u) {
              case "1.2.840.113549.1.1.1":
                return n._offset = a, "public" === t ? function(e) {
                    e.readSequence(i.Ber.BitString), e.readByte(), e.readSequence();
                    var t = d(e, "modulus"), n = d(e, "exponent"), r = {
                        type: "rsa",
                        source: e.originalInput,
                        parts: [ {
                            name: "e",
                            data: n
                        }, {
                            name: "n",
                            data: t
                        } ]
                    };
                    return new l(r);
                }(n) : function(e) {
                    e.readSequence(i.Ber.OctetString), e.readSequence();
                    var t = d(e, "version");
                    r.equal(t[0], 0, "unknown RSA private key version");
                    var n = d(e, "modulus"), o = d(e, "public exponent"), a = d(e, "private exponent"), s = d(e, "prime1"), l = d(e, "prime2"), u = d(e, "exponent1"), h = d(e, "exponent2"), p = d(e, "iqmp");
                    return new c({
                        type: "rsa",
                        parts: [ {
                            name: "n",
                            data: n
                        }, {
                            name: "e",
                            data: o
                        }, {
                            name: "d",
                            data: a
                        }, {
                            name: "iqmp",
                            data: p
                        }, {
                            name: "p",
                            data: s
                        }, {
                            name: "q",
                            data: l
                        }, {
                            name: "dmodp",
                            data: u
                        }, {
                            name: "dmodq",
                            data: h
                        } ]
                    });
                }(n);

              case "1.2.840.10040.4.1":
                return "public" === t ? function(e) {
                    e.readSequence();
                    var t = d(e, "p"), n = d(e, "q"), r = d(e, "g");
                    e.readSequence(i.Ber.BitString), e.readByte();
                    var o = d(e, "y");
                    return new l({
                        type: "dsa",
                        parts: [ {
                            name: "p",
                            data: t
                        }, {
                            name: "q",
                            data: n
                        }, {
                            name: "g",
                            data: r
                        }, {
                            name: "y",
                            data: o
                        } ]
                    });
                }(n) : function(e) {
                    e.readSequence();
                    var t = d(e, "p"), n = d(e, "q"), r = d(e, "g");
                    e.readSequence(i.Ber.OctetString);
                    var o = d(e, "x"), a = s.calculateDSAPublic(r, t, o);
                    return new c({
                        type: "dsa",
                        parts: [ {
                            name: "p",
                            data: t
                        }, {
                            name: "q",
                            data: n
                        }, {
                            name: "g",
                            data: r
                        }, {
                            name: "y",
                            data: a
                        }, {
                            name: "x",
                            data: o
                        } ]
                    });
                }(n);

              case "1.2.840.10045.2.1":
                return "public" === t ? function(e) {
                    var t = h(e);
                    r.string(t, "a known elliptic curve");
                    var n = e.readString(i.Ber.BitString, !0);
                    n = s.ecNormalize(n);
                    var a = {
                        type: "ecdsa",
                        parts: [ {
                            name: "curve",
                            data: o.from(t)
                        }, {
                            name: "Q",
                            data: n
                        } ]
                    };
                    return new l(a);
                }(n) : function(e) {
                    var t = h(e);
                    r.string(t, "a known elliptic curve"), e.readSequence(i.Ber.OctetString), e.readSequence();
                    var n = d(e, "version");
                    r.equal(n[0], 1, "unknown version of ECDSA key");
                    var a, l = e.readString(i.Ber.OctetString, !0);
                    160 == e.peek() && (e.readSequence(160), e._offset += e.length);
                    161 == e.peek() && (e.readSequence(161), a = e.readString(i.Ber.BitString, !0), 
                    a = s.ecNormalize(a));
                    if (void 0 === a) {
                        var u = s.publicFromPrivateECDSA(t, l);
                        a = u.part.Q.data;
                    }
                    var p = {
                        type: "ecdsa",
                        parts: [ {
                            name: "curve",
                            data: o.from(t)
                        }, {
                            name: "Q",
                            data: a
                        }, {
                            name: "d",
                            data: l
                        } ]
                    };
                    return new c(p);
                }(n);

              case "1.3.101.112":
                return "public" === t ? function(e) {
                    0 === e.peek() && e.readByte();
                    var t = s.readBitString(e), n = {
                        type: "ed25519",
                        parts: [ {
                            name: "A",
                            data: s.zeroPadToLength(t, 32)
                        } ]
                    };
                    return new l(n);
                }(n) : function(e) {
                    0 === e.peek() && e.readByte();
                    e.readSequence(i.Ber.OctetString);
                    var t, n, r = e.readString(i.Ber.OctetString, !0);
                    r = s.zeroPadToLength(r, 32);
                    for (;null !== (n = e.peek()); ) n === (1 | i.Ber.Context) ? t = s.readBitString(e, n) : (e.readSequence(n), 
                    e._offset += e.length);
                    void 0 === t && (t = s.calculateED25519Public(r));
                    var o = {
                        type: "ed25519",
                        parts: [ {
                            name: "A",
                            data: s.zeroPadToLength(t, 32)
                        }, {
                            name: "k",
                            data: s.zeroPadToLength(r, 32)
                        } ]
                    };
                    return new c(o);
                }(n);

              case "1.3.101.110":
                return "public" === t ? function(e) {
                    var t = s.readBitString(e), n = {
                        type: "curve25519",
                        parts: [ {
                            name: "A",
                            data: s.zeroPadToLength(t, 32)
                        } ]
                    };
                    return new l(n);
                }(n) : function(e) {
                    0 === e.peek() && e.readByte();
                    e.readSequence(i.Ber.OctetString);
                    var t = e.readString(i.Ber.OctetString, !0);
                    t = s.zeroPadToLength(t, 32);
                    var n = s.calculateX25519Public(t), r = {
                        type: "curve25519",
                        parts: [ {
                            name: "A",
                            data: s.zeroPadToLength(n, 32)
                        }, {
                            name: "k",
                            data: s.zeroPadToLength(t, 32)
                        } ]
                    };
                    return new c(r);
                }(n);

              default:
                throw new Error("Unknown key type OID " + u);
            }
        },
        write: function(e, t) {
            return u.write(e, t, "pkcs8");
        },
        writePkcs8: p,
        pkcs8ToBuffer: function(e) {
            var t = new i.BerWriter;
            return p(t, e), t.buffer;
        },
        readECDSACurve: h,
        writeECDSACurve: f
    };
    var r = n(21), i = n(78), o = n(17).Buffer, a = n(42), s = n(35), l = n(33), c = n(34), u = n(91);
    function d(e, t) {
        return r.strictEqual(e.peek(), i.Ber.Integer, t + " is not an Integer"), s.mpNormalize(e.readString(i.Ber.Integer, !0));
    }
    function h(e) {
        var t, n, l, c, u;
        if (e.peek() === i.Ber.OID) {
            var d = e.readOID();
            for (n = Object.keys(a.curves), l = 0; l < n.length; ++l) if (c = n[l], (u = a.curves[c]).pkcs8oid === d) {
                t = c;
                break;
            }
        } else {
            e.readSequence();
            var h = e.readString(i.Ber.Integer, !0);
            r.strictEqual(h[0], 1, "ECDSA key not version 1");
            var p = {};
            e.readSequence();
            var f = e.readOID();
            r.strictEqual(f, "1.2.840.10045.1.1", "ECDSA key is not from a prime-field");
            var _ = p.p = s.mpNormalize(e.readString(i.Ber.Integer, !0));
            p.size = 8 * _.length - s.countZeros(_), e.readSequence(), p.a = s.mpNormalize(e.readString(i.Ber.OctetString, !0)), 
            p.b = s.mpNormalize(e.readString(i.Ber.OctetString, !0)), e.peek() === i.Ber.BitString && (p.s = e.readString(i.Ber.BitString, !0)), 
            p.G = e.readString(i.Ber.OctetString, !0), r.strictEqual(p.G[0], 4, "uncompressed G is required"), 
            p.n = s.mpNormalize(e.readString(i.Ber.Integer, !0)), p.h = s.mpNormalize(e.readString(i.Ber.Integer, !0)), 
            r.strictEqual(p.h[0], 1, "a cofactor=1 curve is required"), n = Object.keys(a.curves);
            var m = Object.keys(p);
            for (l = 0; l < n.length; ++l) {
                c = n[l], u = a.curves[c];
                for (var g = !0, v = 0; v < m.length; ++v) {
                    var y = m[v];
                    if (void 0 !== u[y]) if ("object" == typeof u[y] && void 0 !== u[y].equals) {
                        if (!u[y].equals(p[y])) {
                            g = !1;
                            break;
                        }
                    } else if (o.isBuffer(u[y])) {
                        if (u[y].toString("binary") !== p[y].toString("binary")) {
                            g = !1;
                            break;
                        }
                    } else if (u[y] !== p[y]) {
                        g = !1;
                        break;
                    }
                }
                if (g) {
                    t = c;
                    break;
                }
            }
        }
        return t;
    }
    function p(e, t) {
        if (e.startSequence(), c.isPrivateKey(t)) {
            var n = 0;
            "ed25519" === t.type && (n = 1);
            var r = o.from([ n ]);
            e.writeBuffer(r, i.Ber.Integer);
        }
        switch (e.startSequence(), t.type) {
          case "rsa":
            e.writeOID("1.2.840.113549.1.1.1"), c.isPrivateKey(t) ? function(e, t) {
                t.writeNull(), t.endSequence(), t.startSequence(i.Ber.OctetString), t.startSequence();
                var n = o.from([ 0 ]);
                t.writeBuffer(n, i.Ber.Integer), t.writeBuffer(e.part.n.data, i.Ber.Integer), t.writeBuffer(e.part.e.data, i.Ber.Integer), 
                t.writeBuffer(e.part.d.data, i.Ber.Integer), t.writeBuffer(e.part.p.data, i.Ber.Integer), 
                t.writeBuffer(e.part.q.data, i.Ber.Integer), e.part.dmodp && e.part.dmodq || s.addRSAMissing(e);
                t.writeBuffer(e.part.dmodp.data, i.Ber.Integer), t.writeBuffer(e.part.dmodq.data, i.Ber.Integer), 
                t.writeBuffer(e.part.iqmp.data, i.Ber.Integer), t.endSequence(), t.endSequence();
            }(t, e) : function(e, t) {
                t.writeNull(), t.endSequence(), t.startSequence(i.Ber.BitString), t.writeByte(0), 
                t.startSequence(), t.writeBuffer(e.part.n.data, i.Ber.Integer), t.writeBuffer(e.part.e.data, i.Ber.Integer), 
                t.endSequence(), t.endSequence();
            }(t, e);
            break;

          case "dsa":
            e.writeOID("1.2.840.10040.4.1"), c.isPrivateKey(t) ? function(e, t) {
                t.startSequence(), t.writeBuffer(e.part.p.data, i.Ber.Integer), t.writeBuffer(e.part.q.data, i.Ber.Integer), 
                t.writeBuffer(e.part.g.data, i.Ber.Integer), t.endSequence(), t.endSequence(), t.startSequence(i.Ber.OctetString), 
                t.writeBuffer(e.part.x.data, i.Ber.Integer), t.endSequence();
            }(t, e) : function(e, t) {
                t.startSequence(), t.writeBuffer(e.part.p.data, i.Ber.Integer), t.writeBuffer(e.part.q.data, i.Ber.Integer), 
                t.writeBuffer(e.part.g.data, i.Ber.Integer), t.endSequence(), t.endSequence(), t.startSequence(i.Ber.BitString), 
                t.writeByte(0), t.writeBuffer(e.part.y.data, i.Ber.Integer), t.endSequence();
            }(t, e);
            break;

          case "ecdsa":
            e.writeOID("1.2.840.10045.2.1"), c.isPrivateKey(t) ? function(e, t) {
                f(e, t), t.endSequence(), t.startSequence(i.Ber.OctetString), t.startSequence();
                var n = o.from([ 1 ]);
                t.writeBuffer(n, i.Ber.Integer), t.writeBuffer(e.part.d.data, i.Ber.OctetString), 
                t.startSequence(161);
                var r = s.ecNormalize(e.part.Q.data, !0);
                t.writeBuffer(r, i.Ber.BitString), t.endSequence(), t.endSequence(), t.endSequence();
            }(t, e) : function(e, t) {
                f(e, t), t.endSequence();
                var n = s.ecNormalize(e.part.Q.data, !0);
                t.writeBuffer(n, i.Ber.BitString);
            }(t, e);
            break;

          case "ed25519":
            e.writeOID("1.3.101.112"), c.isPrivateKey(t) ? function(e, t) {
                t.endSequence(), t.startSequence(i.Ber.OctetString);
                var n = s.mpNormalize(e.part.k.data);
                for (;n.length > 32 && 0 === n[0]; ) n = n.slice(1);
                t.writeBuffer(n, i.Ber.OctetString), t.endSequence(), s.writeBitString(t, e.part.A.data, 1 | i.Ber.Context);
            }(t, e) : function(e, t) {
                t.endSequence(), s.writeBitString(t, e.part.A.data);
            }(t, e);
            break;

          default:
            throw new Error("Unsupported key type: " + t.type);
        }
        e.endSequence();
    }
    function f(e, t) {
        var n = a.curves[e.curve];
        if (n.pkcs8oid) t.writeOID(n.pkcs8oid); else {
            t.startSequence();
            var r = o.from([ 1 ]);
            t.writeBuffer(r, i.Ber.Integer), t.startSequence(), t.writeOID("1.2.840.10045.1.1"), 
            t.writeBuffer(n.p, i.Ber.Integer), t.endSequence(), t.startSequence();
            var s = n.p;
            0 === s[0] && (s = s.slice(1)), t.writeBuffer(s, i.Ber.OctetString), t.writeBuffer(n.b, i.Ber.OctetString), 
            t.writeBuffer(n.s, i.Ber.BitString), t.endSequence(), t.writeBuffer(n.G, i.Ber.OctetString), 
            t.writeBuffer(n.n, i.Ber.Integer);
            var l = n.h;
            l || (l = o.from([ 1 ])), t.writeBuffer(l, i.Ber.Integer), t.endSequence();
        }
    }
}
