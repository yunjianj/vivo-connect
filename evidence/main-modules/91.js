// analysis/pretty/main.js:15729; webpack module 91
function(e, t, n) {
    e.exports = {
        read: function(e, t, n) {
            var l = e;
            "string" != typeof e && (r.buffer(e, "buf"), e = e.toString("ascii"));
            var c, m, v = e.trim().split(/[\r\n]+/g), y = -1;
            for (;!c && y < v.length; ) c = v[++y].match(/[-]+[ ]*BEGIN ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/);
            r.ok(c, "invalid PEM header");
            var E = v.length;
            for (;!m && E > 0; ) m = v[--E].match(/[-]+[ ]*END ([A-Z0-9][A-Za-z0-9]+ )?(PUBLIC|PRIVATE) KEY[ ]*[-]+/);
            r.ok(m, "invalid PEM footer"), r.equal(c[2], m[2]);
            var b, w = c[2].toLowerCase();
            c[1] && (r.equal(c[1], m[1], "PEM header and footer mismatch"), b = c[1].trim());
            v = v.slice(y, E + 1);
            var S, T, A, O = {};
            for (;v = v.slice(1), c = v[0].match(/^([A-Za-z0-9-]+): (.+)$/); ) O[c[1].toLowerCase()] = c[2];
            if (v = v.slice(0, -1).join(""), e = a.from(v, "base64"), O["proc-type"]) {
                var C = O["proc-type"].split(",");
                if ("4" === C[0] && "ENCRYPTED" === C[1]) {
                    if ("string" == typeof t.passphrase && (t.passphrase = a.from(t.passphrase, "utf-8")), 
                    !a.isBuffer(t.passphrase)) throw new f.KeyEncryptedError(t.filename, "PEM");
                    C = O["dek-info"].split(","), r.ok(2 === C.length), S = C[0].toLowerCase(), A = a.from(C[1], "hex"), 
                    T = s.opensslKeyDeriv(S, A, t.passphrase, 1).key;
                }
            }
            if (b && "encrypted" === b.toLowerCase()) {
                var N, I = new i.BerReader(e);
                I.readSequence(), I.readSequence(), N = I.offset + I.length;
                var R = I.readOID();
                if ("1.2.840.113549.1.5.13" !== R) throw new Error("Unsupported PEM/PKCS8 encryption scheme: " + R);
                I.readSequence(), I.readSequence();
                var D = I.offset + I.length, L = I.readOID();
                if ("1.2.840.113549.1.5.12" !== L) throw new Error("Unsupported PBES2 KDF: " + L);
                I.readSequence();
                var k = I.readString(i.Ber.OctetString, !0), M = I.readInt(), P = "sha1";
                if (I.offset < D) {
                    I.readSequence();
                    var x = I.readOID();
                    if (void 0 === (P = g[x])) throw new Error("Unsupported PBKDF2 hash: " + x);
                }
                I._offset = D, I.readSequence();
                var F = I.readOID();
                if (void 0 === (S = _[F])) throw new Error("Unsupported PBES2 cipher: " + F);
                if (A = I.readString(i.Ber.OctetString, !0), I._offset = N, e = I.readString(i.Ber.OctetString, !0), 
                "string" == typeof t.passphrase && (t.passphrase = a.from(t.passphrase, "utf-8")), 
                !a.isBuffer(t.passphrase)) throw new f.KeyEncryptedError(t.filename, "PEM");
                var j = s.opensshCipherInfo(S);
                S = j.opensslName, T = s.pbkdf2(P, k, M, j.keySize, t.passphrase), b = void 0;
            }
            if (S && T && A) {
                var U, W = o.createDecipheriv(S, T, A), B = [];
                for (W.once("error", function(e) {
                    if (-1 !== e.toString().indexOf("bad decrypt")) throw new Error("Incorrect passphrase supplied, could not decrypt key");
                    throw e;
                }), W.write(e), W.end(); null !== (U = W.read()); ) B.push(U);
                e = a.concat(B);
            }
            if (b && "openssh" === b.toLowerCase()) return h.readSSHPrivate(w, e, t);
            if (b && "ssh2" === b.toLowerCase()) return p.readType(w, e, t);
            var H = new i.BerReader(e);
            return H.originalInput = l, H.readSequence(), b ? (n && r.strictEqual(n, "pkcs1"), 
            u.readPkcs1(b, w, H)) : (n && r.strictEqual(n, "pkcs8"), d.readPkcs8(b, w, H));
        },
        write: function(e, t, n) {
            r.object(e);
            var o, s = {
                ecdsa: "EC",
                rsa: "RSA",
                dsa: "DSA",
                ed25519: "EdDSA"
            }[e.type], h = new i.BerWriter;
            if (c.isPrivateKey(e)) n && "pkcs8" === n ? (o = "PRIVATE KEY", d.writePkcs8(h, e)) : (n && r.strictEqual(n, "pkcs1"), 
            o = s + " PRIVATE KEY", u.writePkcs1(h, e)); else {
                if (!l.isKey(e)) throw new Error("key is not a Key or PrivateKey");
                n && "pkcs1" === n ? (o = s + " PUBLIC KEY", u.writePkcs1(h, e)) : (n && r.strictEqual(n, "pkcs8"), 
                o = "PUBLIC KEY", d.writePkcs8(h, e));
            }
            var p = h.buffer.toString("base64"), f = p.length + p.length / 64 + 18 + 16 + 2 * o.length + 10, _ = a.alloc(f), m = 0;
            m += _.write("-----BEGIN " + o + "-----\n", m);
            for (var g = 0; g < p.length; ) {
                var v = g + 64;
                v > p.length && (v = p.length), m += _.write(p.slice(g, v), m), _[m++] = 10, g = v;
            }
            return m += _.write("-----END " + o + "-----\n", m), _.slice(0, m);
        }
    };
    var r = n(21), i = n(78), o = n(7), a = n(17).Buffer, s = (n(42), n(35)), l = n(33), c = n(34), u = n(296), d = n(153), h = n(215), p = n(92), f = n(69), _ = {
        "1.2.840.113549.3.7": "3des-cbc",
        "2.16.840.1.101.3.4.1.2": "aes128-cbc",
        "2.16.840.1.101.3.4.1.42": "aes256-cbc"
    }, m = {};
    Object.keys(_).forEach(function(e) {
        m[_[e]] = e;
    });
    var g = {
        "1.2.840.113549.2.7": "sha1",
        "1.2.840.113549.2.9": "sha256",
        "1.2.840.113549.2.11": "sha512"
    }, v = {};
    Object.keys(g).forEach(function(e) {
        v[g[e]] = e;
    });
}
