// analysis/pretty/main.js:8768; webpack module 35
function(e, t, n) {
    e.exports = {
        bufferSplit: function(e, t) {
            r.buffer(e), r.string(t);
            for (var n = [], i = 0, o = 0, a = 0; a < e.length; ++a) if (e[a] === t.charCodeAt(o) ? ++o : o = e[a] === t.charCodeAt(0) ? 1 : 0, 
            o >= t.length) {
                var s = a + 1;
                n.push(e.slice(i, s - o)), i = s, o = 0;
            }
            i <= e.length && n.push(e.slice(i, e.length));
            return n;
        },
        addRSAMissing: function(e) {
            r.object(e), p(e, o, [ 1, 1 ]);
            var t, n = new d(e.part.d.data);
            if (!e.part.dmodp) {
                var i = new d(e.part.p.data), a = n.mod(i.subtract(1));
                t = m(a), e.part.dmodp = {
                    name: "dmodp",
                    data: t
                }, e.parts.push(e.part.dmodp);
            }
            if (!e.part.dmodq) {
                var s = new d(e.part.q.data), l = n.mod(s.subtract(1));
                t = m(l), e.part.dmodq = {
                    name: "dmodq",
                    data: t
                }, e.parts.push(e.part.dmodq);
            }
        },
        calculateDSAPublic: function(e, t, n) {
            return r.buffer(e), r.buffer(t), r.buffer(n), e = new d(e), t = new d(t), n = new d(n), 
            m(e.modPow(n, t));
        },
        calculateED25519Public: function(e) {
            r.buffer(e);
            var t = h.sign.keyPair.fromSeed(new Uint8Array(e));
            return i.from(t.publicKey);
        },
        calculateX25519Public: function(e) {
            r.buffer(e);
            var t = h.box.keyPair.fromSeed(new Uint8Array(e));
            return i.from(t.publicKey);
        },
        mpNormalize: _,
        mpDenormalize: function(e) {
            r.buffer(e);
            for (;e.length > 1 && 0 === e[0]; ) e = e.slice(1);
            return e;
        },
        ecNormalize: function(e, t) {
            if (r.buffer(e), 0 === e[0] && 4 === e[1]) return t ? e : e.slice(1);
            if (4 === e[0]) {
                if (!t) return e;
            } else {
                for (;0 === e[0]; ) e = e.slice(1);
                if (2 === e[0] || 3 === e[0]) throw new Error("Compressed elliptic curve points are not supported");
                if (4 !== e[0]) throw new Error("Not a valid elliptic curve point");
                if (!t) return e;
            }
            var n = i.alloc(e.length + 1);
            return n[0] = 0, e.copy(n, 1), n;
        },
        countZeros: function(e) {
            var t = 0, n = 8;
            for (;t < e.length; ) {
                var r = 1 << n;
                if ((e[t] & r) === r) break;
                --n < 0 && (t++, n = 8);
            }
            return 8 * t + (8 - n) - 1;
        },
        assertCompatible: p,
        isCompatible: function(e, t, n) {
            if (null === e || "object" != typeof e) return !1;
            void 0 === n && (n = t.prototype._sshpkApiVersion);
            if (e instanceof t && t.prototype._sshpkApiVersion[0] == n[0]) return !0;
            var r = Object.getPrototypeOf(e), i = 0;
            for (;r.constructor.name !== t.name; ) if (!(r = Object.getPrototypeOf(r)) || ++i > 3) return !1;
            if (r.constructor.name !== t.name) return !1;
            var o = r._sshpkApiVersion;
            void 0 === o && (o = t._oldVersionDetect(e));
            return !(o[0] != n[0] || o[1] < n[1]);
        },
        opensslKeyDeriv: function(e, t, n, o) {
            r.buffer(t, "salt"), r.buffer(n, "passphrase"), r.number(o, "iteration count");
            var a, l, c, u = f[e];
            r.object(u, "supported cipher"), t = t.slice(0, 8);
            var d = i.alloc(0);
            for (;d.length < u.key + u.iv; ) {
                c = [], l && c.push(l), c.push(n), c.push(t), a = i.concat(c);
                for (var h = 0; h < o; ++h) a = s.createHash("md5").update(a).digest();
                d = i.concat([ d, a ]), l = a;
            }
            return {
                key: d.slice(0, u.key),
                iv: d.slice(u.key, u.key + u.iv)
            };
        },
        opensshCipherInfo: function(e) {
            var t = {};
            switch (e) {
              case "3des-cbc":
                t.keySize = 24, t.blockSize = 8, t.opensslName = "des-ede3-cbc";
                break;

              case "blowfish-cbc":
                t.keySize = 16, t.blockSize = 8, t.opensslName = "bf-cbc";
                break;

              case "aes128-cbc":
              case "aes128-ctr":
              case "aes128-gcm@openssh.com":
                t.keySize = 16, t.blockSize = 16, t.opensslName = "aes-128-" + e.slice(7, 10);
                break;

              case "aes192-cbc":
              case "aes192-ctr":
              case "aes192-gcm@openssh.com":
                t.keySize = 24, t.blockSize = 16, t.opensslName = "aes-192-" + e.slice(7, 10);
                break;

              case "aes256-cbc":
              case "aes256-ctr":
              case "aes256-gcm@openssh.com":
                t.keySize = 32, t.blockSize = 16, t.opensslName = "aes-256-" + e.slice(7, 10);
                break;

              default:
                throw new Error('Unsupported openssl cipher "' + e + '"');
            }
            return t;
        },
        publicFromPrivateECDSA: function(e, t) {
            r.string(e, "curveName"), r.buffer(t);
            var n = l.curves[e], o = new d(n.p), s = new d(n.a), c = new d(n.b), h = new u.ECCurveFp(o, s, c), p = h.decodePointHex(n.G.toString("hex")), f = new d(_(t)), m = p.multiply(f);
            m = i.from(h.encodePointHex(m), "hex");
            var g = [];
            return g.push({
                name: "curve",
                data: i.from(e)
            }), g.push({
                name: "Q",
                data: m
            }), new a({
                type: "ecdsa",
                curve: h,
                parts: g
            });
        },
        zeroPadToLength: function(e, t) {
            r.buffer(e), r.number(t);
            for (;e.length > t; ) r.equal(e[0], 0), e = e.slice(1);
            for (;e.length < t; ) {
                var n = i.alloc(e.length + 1);
                n[0] = 0, e.copy(n, 1), e = n;
            }
            return e;
        },
        writeBitString: function(e, t, n) {
            void 0 === n && (n = c.Ber.BitString);
            var r = i.alloc(t.length + 1);
            r[0] = 0, t.copy(r, 1), e.writeBuffer(r, n);
        },
        readBitString: function(e, t) {
            void 0 === t && (t = c.Ber.BitString);
            var n = e.readString(t, !0);
            return r.strictEqual(n[0], 0, "bit strings with unused bits are not supported (0x" + n[0].toString(16) + ")"), 
            n.slice(1);
        },
        pbkdf2: function(e, t, n, r, o) {
            var a = i.alloc(t.length + 4);
            t.copy(a);
            var l = 0, c = [], u = 1;
            for (;l < r; ) {
                var d = h(u++);
                l += d.length, c.push(d);
            }
            return i.concat(c).slice(0, r);
            function h(t) {
                a.writeUInt32BE(t, a.length - 4);
                var r = s.createHmac(e, o);
                r.update(a);
                for (var i = r.digest(), l = i, c = 1; c++ < n; ) {
                    (r = s.createHmac(e, o)).update(l), l = r.digest();
                    for (var u = 0; u < i.length; ++u) i[u] ^= l[u];
                }
                return i;
            }
        }
    };
    var r = n(21), i = n(17).Buffer, o = n(34), a = n(33), s = n(7), l = n(42), c = n(78), u = n(214), d = n(151).BigInteger, h = n(152);
    function p(e, t, n, i) {
        if (void 0 === i && (i = "object"), r.ok(e, i + " must not be null"), r.object(e, i + " must be an object"), 
        void 0 === n && (n = t.prototype._sshpkApiVersion), !(e instanceof t && t.prototype._sshpkApiVersion[0] == n[0])) {
            for (var o = Object.getPrototypeOf(e), a = 0; o.constructor.name !== t.name; ) o = Object.getPrototypeOf(o), 
            r.ok(o && ++a <= 3, i + " must be a " + t.name + " instance");
            r.strictEqual(o.constructor.name, t.name, i + " must be a " + t.name + " instance");
            var s = o._sshpkApiVersion;
            void 0 === s && (s = t._oldVersionDetect(e)), r.ok(s[0] == n[0] && s[1] >= n[1], i + " must be compatible with " + t.name + " klass version " + n[0] + "." + n[1]);
        }
    }
    var f = {
        "des-ede3-cbc": {
            key: 24,
            iv: 8
        },
        "aes-128-cbc": {
            key: 16,
            iv: 16
        },
        "aes-256-cbc": {
            key: 32,
            iv: 16
        }
    };
    function _(e) {
        for (r.buffer(e); e.length > 1 && 0 === e[0] && 0 == (128 & e[1]); ) e = e.slice(1);
        if (128 == (128 & e[0])) {
            var t = i.alloc(e.length + 1);
            t[0] = 0, e.copy(t, 1), e = t;
        }
        return e;
    }
    function m(e) {
        var t = i.from(e.toByteArray());
        return t = _(t);
    }
}
