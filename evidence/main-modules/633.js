// analysis/pretty/main.js:57780; webpack module 633
function(e, t, n) {
    e.exports = {
        read: function(e, t) {
            "string" == typeof e && (e = o.from(e, "binary"));
            r.buffer(e, "buf");
            var n = new i.BerReader(e);
            if (n.readSequence(), Math.abs(n.length - n.remain) > 1) throw new Error("DER sequence does not contain whole byte stream");
            var h = n.offset;
            n.readSequence();
            var f = n.offset + n.length, _ = f;
            if (n.peek() === d(0)) {
                n.readSequence(d(0));
                var m = n.readInt();
                r.ok(m <= 3, "only x.509 versions up to v3 supported");
            }
            var g = {
                signatures: {}
            }, y = g.signatures.x509 = {};
            y.extras = {}, g.serial = function(e, t) {
                return r.strictEqual(e.peek(), i.Ber.Integer, t + " is not an Integer"), a.mpNormalize(e.readString(i.Ber.Integer, !0));
            }(n, "serial"), n.readSequence();
            var E = n.offset + n.length, b = n.readOID();
            if (void 0 === p[b]) throw new Error("unknown signature algorithm " + b);
            n._offset = E, g.issuer = s.parseAsn1(n), n.readSequence(), g.validFrom = v(n), 
            g.validUntil = v(n), g.subjects = [ s.parseAsn1(n) ], n.readSequence(), E = n.offset + n.length, 
            g.subjectKey = u.readPkcs8(void 0, "public", n), n._offset = E, n.peek() === d(1) && (n.readSequence(d(1)), 
            y.extras.issuerUniqueID = e.slice(n.offset, n.offset + n.length), n._offset += n.length);
            n.peek() === d(2) && (n.readSequence(d(2)), y.extras.subjectUniqueID = e.slice(n.offset, n.offset + n.length), 
            n._offset += n.length);
            if (n.peek() === d(3)) {
                n.readSequence(d(3));
                var w = n.offset + n.length;
                for (n.readSequence(); n.offset < w; ) T(g, e, n);
                r.strictEqual(n.offset, w);
            }
            r.strictEqual(n.offset, f), n.readSequence(), E = n.offset + n.length;
            var S = n.readOID(), A = p[S];
            if (void 0 === A) throw new Error("unknown signature algorithm " + S);
            n._offset = E;
            var O = n.readString(i.Ber.BitString, !0);
            0 === O[0] && (O = O.slice(1));
            var C = A.split("-");
            return y.signature = l.parse(O, C[0], "asn1"), y.signature.hashAlgorithm = C[1], 
            y.algo = A, y.cache = e.slice(h, _), new c(g);
        },
        verify: function(e, t) {
            var n = e.signatures.x509;
            r.object(n, "x509 signature");
            var o = n.algo.split("-");
            if (o[0] !== t.type) return !1;
            var a = n.cache;
            if (void 0 === a) {
                var s = new i.BerWriter;
                N(e, s), a = s.buffer;
            }
            var l = t.createVerify(o[1]);
            return l.write(a), l.verify(n.signature);
        },
        sign: function(e, t) {
            void 0 === e.signatures.x509 && (e.signatures.x509 = {});
            var n = e.signatures.x509;
            if (n.algo = t.type + "-" + t.defaultHashAlgorithm(), void 0 === p[n.algo]) return !1;
            var r = new i.BerWriter;
            N(e, r);
            var o = r.buffer;
            n.cache = o;
            var a = t.createSign();
            return a.write(o), e.signatures.x509.signature = a.sign(), !0;
        },
        signAsync: function(e, t, n) {
            void 0 === e.signatures.x509 && (e.signatures.x509 = {});
            var r = e.signatures.x509, o = new i.BerWriter;
            N(e, o);
            var a = o.buffer;
            r.cache = a, t(a, function(e, t) {
                e ? n(e) : (r.algo = t.type + "-" + t.hashAlgorithm, void 0 !== p[r.algo] ? (r.signature = t, 
                n()) : n(new Error('Invalid signing algorithm "' + r.algo + '"')));
            });
        },
        write: function(e, t) {
            var n = e.signatures.x509;
            r.object(n, "x509 signature");
            var a = new i.BerWriter;
            a.startSequence(), n.cache ? (a._ensure(n.cache.length), n.cache.copy(a._buf, a._offset), 
            a._offset += n.cache.length) : N(e, a);
            a.startSequence(), a.writeOID(p[n.algo]), n.algo.match(/^rsa-/) && a.writeNull();
            a.endSequence();
            var s = n.signature.toBuffer("asn1"), l = o.alloc(s.length + 1);
            return l[0] = 0, s.copy(l, 1), a.writeBuffer(l, i.Ber.BitString), a.endSequence(), 
            a.buffer;
        }
    };
    var r = n(21), i = n(78), o = n(17).Buffer, a = (n(42), n(35)), s = (n(33), n(34), 
    n(91), n(155)), l = n(77), c = n(154), u = n(153);
    function d(e) {
        return i.Ber.Context | i.Ber.Constructor | e;
    }
    function h(e) {
        return i.Ber.Context | e;
    }
    var p = {
        "rsa-md5": "1.2.840.113549.1.1.4",
        "rsa-sha1": "1.2.840.113549.1.1.5",
        "rsa-sha256": "1.2.840.113549.1.1.11",
        "rsa-sha384": "1.2.840.113549.1.1.12",
        "rsa-sha512": "1.2.840.113549.1.1.13",
        "dsa-sha1": "1.2.840.10040.4.3",
        "dsa-sha256": "2.16.840.1.101.3.4.3.2",
        "ecdsa-sha1": "1.2.840.10045.4.1",
        "ecdsa-sha256": "1.2.840.10045.4.3.2",
        "ecdsa-sha384": "1.2.840.10045.4.3.3",
        "ecdsa-sha512": "1.2.840.10045.4.3.4",
        "ed25519-sha512": "1.3.101.112"
    };
    Object.keys(p).forEach(function(e) {
        p[p[e]] = e;
    }), p["1.3.14.3.2.3"] = "rsa-md5", p["1.3.14.3.2.29"] = "rsa-sha1";
    var f = "2.5.29.17", _ = "2.5.29.19", m = "2.5.29.15", g = "2.5.29.37";
    function v(e) {
        if (e.peek() === i.Ber.UTCTime) return function(e) {
            var t = e.match(A);
            r.ok(t, "timestamps must be in UTC");
            var n = new Date, i = n.getUTCFullYear(), o = 100 * Math.floor(i / 100), a = parseInt(t[1], 10);
            a += i % 100 < 50 && a >= 60 ? o - 1 : o;
            n.setUTCFullYear(a, parseInt(t[2], 10) - 1, parseInt(t[3], 10)), n.setUTCHours(parseInt(t[4], 10), parseInt(t[5], 10)), 
            t[6] && t[6].length > 0 && n.setUTCSeconds(parseInt(t[6], 10));
            return n;
        }(e.readString(i.Ber.UTCTime));
        if (e.peek() === i.Ber.GeneralizedTime) return function(e) {
            var t = e.match(O);
            r.ok(t);
            var n = new Date;
            n.setUTCFullYear(parseInt(t[1], 10), parseInt(t[2], 10) - 1, parseInt(t[3], 10)), 
            n.setUTCHours(parseInt(t[4], 10), parseInt(t[5], 10)), t[6] && t[6].length > 0 && n.setUTCSeconds(parseInt(t[6], 10));
            return n;
        }(e.readString(i.Ber.GeneralizedTime));
        throw new Error("Unsupported date format");
    }
    function y(e, t) {
        var n, r;
        t.getUTCFullYear() >= 2050 || t.getUTCFullYear() < 1950 ? e.writeString((r = "", 
        r += C((n = t).getUTCFullYear(), 4), r += C(n.getUTCMonth() + 1), r += C(n.getUTCDate()), 
        r += C(n.getUTCHours()), r += C(n.getUTCMinutes()), r += C(n.getUTCSeconds()), r += "Z"), i.Ber.GeneralizedTime) : e.writeString(function(e) {
            var t = "";
            return t += C(e.getUTCFullYear() % 100), t += C(e.getUTCMonth() + 1), t += C(e.getUTCDate()), 
            t += C(e.getUTCHours()), t += C(e.getUTCMinutes()), t += C(e.getUTCSeconds()), t += "Z";
        }(t), i.Ber.UTCTime);
    }
    var E = {
        OtherName: d(0),
        RFC822Name: h(1),
        DNSName: h(2),
        X400Address: d(3),
        DirectoryName: d(4),
        EDIPartyName: d(5),
        URI: h(6),
        IPAddress: h(7),
        OID: h(8)
    }, b = {
        serverAuth: "1.3.6.1.5.5.7.3.1",
        clientAuth: "1.3.6.1.5.5.7.3.2",
        codeSigning: "1.3.6.1.5.5.7.3.3",
        joyentDocker: "1.3.6.1.4.1.38678.1.4.1",
        joyentCmon: "1.3.6.1.4.1.38678.1.4.2"
    }, w = {};
    Object.keys(b).forEach(function(e) {
        w[b[e]] = e;
    });
    var S = [ "signature", "identity", "keyEncryption", "encryption", "keyAgreement", "ca", "crl" ];
    function T(e, t, n) {
        n.readSequence();
        var r, o, a = n.offset + n.length, l = n.readOID(), c = e.signatures.x509;
        switch (c.extras.exts || (c.extras.exts = []), n.peek() === i.Ber.Boolean && (o = n.readBoolean()), 
        l) {
          case _:
            n.readSequence(i.Ber.OctetString), n.readSequence();
            var u = n.offset + n.length, d = !1;
            n.peek() === i.Ber.Boolean && (d = n.readBoolean()), void 0 === e.purposes && (e.purposes = []), 
            !0 === d && e.purposes.push("ca");
            var h = {
                oid: l,
                critical: o
            };
            n.offset < u && n.peek() === i.Ber.Integer && (h.pathLen = n.readInt()), c.extras.exts.push(h);
            break;

          case g:
            n.readSequence(i.Ber.OctetString), n.readSequence(), void 0 === e.purposes && (e.purposes = []);
            for (var p = n.offset + n.length; n.offset < p; ) {
                var v = n.readOID();
                e.purposes.push(w[v] || v);
            }
            -1 !== e.purposes.indexOf("serverAuth") && -1 === e.purposes.indexOf("clientAuth") ? e.subjects.forEach(function(e) {
                "host" !== e.type && (e.type = "host", e.hostname = e.uid || e.email || e.components[0].value);
            }) : -1 !== e.purposes.indexOf("clientAuth") && -1 === e.purposes.indexOf("serverAuth") && e.subjects.forEach(function(e) {
                "user" !== e.type && (e.type = "user", e.uid = e.hostname || e.email || e.components[0].value);
            }), c.extras.exts.push({
                oid: l,
                critical: o
            });
            break;

          case m:
            n.readSequence(i.Ber.OctetString);
            var y = n.readString(i.Ber.BitString, !0);
            (function(e, t) {
                for (var n = 8 * (e.length - 1) - e[0], r = {}, i = 0; i < n; ++i) {
                    var o = 1 + Math.floor(i / 8), a = 1 << 7 - i % 8, s = 0 != (e[o] & a), l = t[i];
                    s && "string" == typeof l && (r[l] = !0);
                }
                return Object.keys(r);
            })(y, S).forEach(function(t) {
                void 0 === e.purposes && (e.purposes = []), -1 === e.purposes.indexOf(t) && e.purposes.push(t);
            }), c.extras.exts.push({
                oid: l,
                critical: o,
                bits: y
            });
            break;

          case f:
            n.readSequence(i.Ber.OctetString), n.readSequence();
            for (var b = n.offset + n.length; n.offset < b; ) switch (n.peek()) {
              case E.OtherName:
              case E.EDIPartyName:
                n.readSequence(), n._offset += n.length;
                break;

              case E.OID:
                n.readOID(E.OID);
                break;

              case E.RFC822Name:
                var T = n.readString(E.RFC822Name);
                r = s.forEmail(T), e.subjects[0].equals(r) || e.subjects.push(r);
                break;

              case E.DirectoryName:
                n.readSequence(E.DirectoryName), r = s.parseAsn1(n), e.subjects[0].equals(r) || e.subjects.push(r);
                break;

              case E.DNSName:
                var A = n.readString(E.DNSName);
                r = s.forHost(A), e.subjects[0].equals(r) || e.subjects.push(r);
                break;

              default:
                n.readString(n.peek());
            }
            c.extras.exts.push({
                oid: l,
                critical: o
            });
            break;

          default:
            c.extras.exts.push({
                oid: l,
                critical: o,
                data: n.readString(i.Ber.OctetString, !0)
            });
        }
        n._offset = a;
    }
    var A = /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?Z$/;
    var O = /^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?Z$/;
    function C(e, t) {
        void 0 === t && (t = 2);
        for (var n = "" + e; n.length < t; ) n = "0" + n;
        return n;
    }
    function N(e, t) {
        var n = e.signatures.x509;
        r.object(n, "x509 signature"), t.startSequence(), t.startSequence(d(0)), t.writeInt(2), 
        t.endSequence(), t.writeBuffer(a.mpNormalize(e.serial), i.Ber.Integer), t.startSequence(), 
        t.writeOID(p[n.algo]), n.algo.match(/^rsa-/) && t.writeNull(), t.endSequence(), 
        e.issuer.toAsn1(t), t.startSequence(), y(t, e.validFrom), y(t, e.validUntil), t.endSequence();
        var o = e.subjects[0], s = e.subjects.slice(1);
        if (o.toAsn1(t), u.writePkcs8(t, e.subjectKey), n.extras && n.extras.issuerUniqueID && t.writeBuffer(n.extras.issuerUniqueID, d(1)), 
        n.extras && n.extras.subjectUniqueID && t.writeBuffer(n.extras.subjectUniqueID, d(2)), 
        s.length > 0 || "host" === o.type || void 0 !== e.purposes && e.purposes.length > 0 || n.extras && n.extras.exts) {
            t.startSequence(d(3)), t.startSequence();
            var l = [];
            void 0 !== e.purposes && e.purposes.length > 0 && (l.push({
                oid: _,
                critical: !0
            }), l.push({
                oid: m,
                critical: !0
            }), l.push({
                oid: g,
                critical: !0
            })), l.push({
                oid: f
            }), n.extras && n.extras.exts && (l = n.extras.exts);
            for (var c = 0; c < l.length; ++c) {
                if (t.startSequence(), t.writeOID(l[c].oid), void 0 !== l[c].critical && t.writeBoolean(l[c].critical), 
                l[c].oid === f) {
                    t.startSequence(i.Ber.OctetString), t.startSequence(), "host" === o.type && t.writeString(o.hostname, h(2));
                    for (var v = 0; v < s.length; ++v) "host" === s[v].type ? t.writeString(s[v].hostname, E.DNSName) : "email" === s[v].type ? t.writeString(s[v].email, E.RFC822Name) : (t.startSequence(E.DirectoryName), 
                    s[v].toAsn1(t), t.endSequence());
                    t.endSequence(), t.endSequence();
                } else if (l[c].oid === _) {
                    t.startSequence(i.Ber.OctetString), t.startSequence();
                    var w = -1 !== e.purposes.indexOf("ca"), T = l[c].pathLen;
                    t.writeBoolean(w), void 0 !== T && t.writeInt(T), t.endSequence(), t.endSequence();
                } else if (l[c].oid === g) t.startSequence(i.Ber.OctetString), t.startSequence(), 
                e.purposes.forEach(function(e) {
                    if ("ca" !== e && -1 === S.indexOf(e)) {
                        var n = e;
                        void 0 !== b[e] && (n = b[e]), t.writeOID(n);
                    }
                }), t.endSequence(), t.endSequence(); else if (l[c].oid === m) {
                    if (t.startSequence(i.Ber.OctetString), void 0 !== l[c].bits) t.writeBuffer(l[c].bits, i.Ber.BitString); else {
                        var A = I(e.purposes, S);
                        t.writeBuffer(A, i.Ber.BitString);
                    }
                    t.endSequence();
                } else t.writeBuffer(l[c].data, i.Ber.OctetString);
                t.endSequence();
            }
            t.endSequence(), t.endSequence();
        }
        t.endSequence();
    }
    function I(e, t) {
        var n = t.length, r = Math.ceil(n / 8), i = 8 * r - n, a = o.alloc(1 + r);
        a[0] = i;
        for (var s = 0; s < n; ++s) {
            var l = 1 + Math.floor(s / 8), c = 1 << 7 - s % 8, u = t[s];
            if (void 0 !== u) -1 !== e.indexOf(u) && (a[l] |= c);
        }
        return a;
    }
}
