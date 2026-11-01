// analysis/pretty/main.js:33321; webpack module 297
function(e, t, n) {
    e.exports = {
        read: function(e, t) {
            "string" != typeof e && (r.buffer(e, "buf"), e = e.toString("ascii"));
            var n = e.split("\n");
            if (n[0].match(/^Private-key-format\: v1/)) {
                var l = n[1].split(" "), d = parseInt(l[1], 10), h = l[2];
                if (!c[d]) throw new Error("Unsupported algorithm: " + h);
                return function(e, t) {
                    if (c[e].match(/^RSA-/)) return function(e) {
                        var t = {};
                        e.forEach(function(e) {
                            "Modulus:" === e.split(" ")[0] ? t.n = u(e) : "PublicExponent:" === e.split(" ")[0] ? t.e = u(e) : "PrivateExponent:" === e.split(" ")[0] ? t.d = u(e) : "Prime1:" === e.split(" ")[0] ? t.p = u(e) : "Prime2:" === e.split(" ")[0] ? t.q = u(e) : "Exponent1:" === e.split(" ")[0] ? t.dmodp = u(e) : "Exponent2:" === e.split(" ")[0] ? t.dmodq = u(e) : "Coefficient:" === e.split(" ")[0] && (t.iqmp = u(e));
                        });
                        var n = {
                            type: "rsa",
                            parts: [ {
                                name: "e",
                                data: s.mpNormalize(t.e)
                            }, {
                                name: "n",
                                data: s.mpNormalize(t.n)
                            }, {
                                name: "d",
                                data: s.mpNormalize(t.d)
                            }, {
                                name: "p",
                                data: s.mpNormalize(t.p)
                            }, {
                                name: "q",
                                data: s.mpNormalize(t.q)
                            }, {
                                name: "dmodp",
                                data: s.mpNormalize(t.dmodp)
                            }, {
                                name: "dmodq",
                                data: s.mpNormalize(t.dmodq)
                            }, {
                                name: "iqmp",
                                data: s.mpNormalize(t.iqmp)
                            } ]
                        };
                        return new a(n);
                    }(t);
                    if ("ECDSA-P384-SHA384" === c[e] || "ECDSA-P256-SHA256" === c[e]) {
                        var n = i.from(t[0].split(" ")[1], "base64"), r = "nistp384", o = 384;
                        "ECDSA-P256-SHA256" === c[e] && (r = "nistp256", o = 256);
                        var l = s.publicFromPrivateECDSA(r, n).part.Q.data, d = {
                            type: "ecdsa",
                            curve: r,
                            size: o,
                            parts: [ {
                                name: "curve",
                                data: i.from(r)
                            }, {
                                name: "d",
                                data: n
                            }, {
                                name: "Q",
                                data: l
                            } ]
                        };
                        return new a(d);
                    }
                    throw new Error("Unsupported algorithm: " + c[e]);
                }(d, n.slice(2));
            }
            var p = 0;
            for (;n[p].match(/^\;/); ) p++;
            if ((n[p].match(/\. IN KEY /) || n[p].match(/\. IN DNSKEY /)) && 0 === n[p + 1].length) return function(e) {
                var t = e.split(" "), n = parseInt(t[5], 10);
                if (!c[n]) throw new Error("Unsupported algorithm: " + n);
                var r = t.slice(6, t.length).join(), a = i.from(r, "base64");
                if (c[n].match(/^RSA-/)) {
                    var l = a.readUInt8(0);
                    if (3 != l && 1 != l) throw new Error("Cannot parse dnssec key: unsupported exponent length");
                    var u = a.slice(1, l + 1);
                    u = s.mpNormalize(u);
                    var d = a.slice(1 + l);
                    d = s.mpNormalize(d);
                    var h = {
                        type: "rsa",
                        parts: []
                    };
                    return h.parts.push({
                        name: "e",
                        data: u
                    }), h.parts.push({
                        name: "n",
                        data: d
                    }), new o(h);
                }
                if ("ECDSA-P384-SHA384" === c[n] || "ECDSA-P256-SHA256" === c[n]) {
                    var p = "nistp384", f = 384;
                    c[n].match(/^ECDSA-P256-SHA256/) && (p = "nistp256", f = 256);
                    var _ = {
                        type: "ecdsa",
                        curve: p,
                        size: f,
                        parts: [ {
                            name: "curve",
                            data: i.from(p)
                        }, {
                            name: "Q",
                            data: s.ecNormalize(a)
                        } ]
                    };
                    return new o(_);
                }
                throw new Error("Unsupported algorithm: " + c[n]);
            }(n[p]);
            throw new Error("Cannot parse dnssec key");
        },
        write: function(e, t) {
            if (a.isPrivateKey(e)) {
                if ("rsa" === e.type) return function(e, t) {
                    e.part.dmodp && e.part.dmodq || s.addRSAMissing(e);
                    var n = "";
                    n += "Private-key-format: v1.3\n", n += "Algorithm: " + function(e) {
                        if (e && e.hashAlgo && "sha1" !== e.hashAlgo) {
                            if ("sha256" === e.hashAlgo) return "8 (RSASHA256)";
                            if ("sha512" === e.hashAlgo) return "10 (RSASHA512)";
                            throw new Error("Unknown or unsupported hash: " + e.hashAlgo);
                        }
                        return "5 (RSASHA1)";
                    }(t) + "\n";
                    var r = s.mpDenormalize(e.part.n.data);
                    n += "Modulus: " + r.toString("base64") + "\n";
                    var o = s.mpDenormalize(e.part.e.data);
                    n += "PublicExponent: " + o.toString("base64") + "\n";
                    var a = s.mpDenormalize(e.part.d.data);
                    n += "PrivateExponent: " + a.toString("base64") + "\n";
                    var l = s.mpDenormalize(e.part.p.data);
                    n += "Prime1: " + l.toString("base64") + "\n";
                    var c = s.mpDenormalize(e.part.q.data);
                    n += "Prime2: " + c.toString("base64") + "\n";
                    var u = s.mpDenormalize(e.part.dmodp.data);
                    n += "Exponent1: " + u.toString("base64") + "\n";
                    var h = s.mpDenormalize(e.part.dmodq.data);
                    n += "Exponent2: " + h.toString("base64") + "\n";
                    var p = s.mpDenormalize(e.part.iqmp.data);
                    n += "Coefficient: " + p.toString("base64") + "\n";
                    var f = new Date;
                    return n += "Created: " + d(f) + "\n", n += "Publish: " + d(f) + "\n", n += "Activate: " + d(f) + "\n", 
                    i.from(n, "ascii");
                }(e, t);
                if ("ecdsa" === e.type) return function(e, t) {
                    var n = "";
                    if (n += "Private-key-format: v1.3\n", "nistp256" === e.curve) n += "Algorithm: 13 (ECDSAP256SHA256)\n"; else {
                        if ("nistp384" !== e.curve) throw new Error("Unsupported curve");
                        n += "Algorithm: 14 (ECDSAP384SHA384)\n";
                    }
                    var r = e.part.d.data.toString("base64");
                    n += "PrivateKey: " + r + "\n";
                    var o = new Date;
                    return n += "Created: " + d(o) + "\n", n += "Publish: " + d(o) + "\n", n += "Activate: " + d(o) + "\n", 
                    i.from(n, "ascii");
                }(e);
                throw new Error("Unsupported algorithm: " + e.type);
            }
            throw o.isKey(e) ? new Error('Format "dnssec" only supports writing private keys') : new Error("key is not a Key or PrivateKey");
        }
    };
    var r = n(21), i = n(17).Buffer, o = n(33), a = n(34), s = n(35), l = (n(129), n(295), 
    {
        "rsa-sha1": 5,
        "rsa-sha256": 8,
        "rsa-sha512": 10,
        "ecdsa-p256-sha256": 13,
        "ecdsa-p384-sha384": 14
    }), c = {};
    function u(e) {
        return i.from(e.split(" ")[1], "base64");
    }
    function d(e) {
        var t = e.getFullYear() + "" + (e.getMonth() + 1) + e.getUTCDate();
        return t += "" + e.getUTCHours() + e.getUTCMinutes(), t += e.getUTCSeconds();
    }
    Object.keys(l).forEach(function(e) {
        c[l[e]] = e.toUpperCase();
    });
}
