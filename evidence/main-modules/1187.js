// analysis/pretty/main.js:93572; webpack module 1187
function(e, t, n) {
    e.exports = {
        read: function(e, t) {
            a.isBuffer(e) && (e = e.toString("ascii"));
            var n = e.trim().split(/[ \t\n]+/g);
            if (n.length < 2 || n.length > 3) throw new Error("Not a valid SSH certificate line");
            var r = n[0], i = n[1];
            return m(i = a.from(i, "base64"), r);
        },
        verify: function(e, t) {
            return !1;
        },
        sign: function(e, t) {
            void 0 === e.signatures.openssh && (e.signatures.openssh = {});
            try {
                var n = y(e, !0);
            } catch (t) {
                return delete e.signatures.openssh, !1;
            }
            var r = e.signatures.openssh, i = void 0;
            "rsa" !== t.type && "dsa" !== t.type || (i = "sha1");
            var o = t.createSign(i);
            return o.write(n), r.signature = o.sign(), !0;
        },
        signAsync: function(e, t, n) {
            void 0 === e.signatures.openssh && (e.signatures.openssh = {});
            try {
                var r = y(e, !0);
            } catch (t) {
                return delete e.signatures.openssh, void n(t);
            }
            var i = e.signatures.openssh;
            t(r, function(e, t) {
                if (e) n(e); else {
                    try {
                        t.toBuffer("ssh");
                    } catch (e) {
                        return void n(e);
                    }
                    i.signature = t, n();
                }
            });
        },
        write: function(e, t) {
            void 0 === t && (t = {});
            var n = y(e), r = E(e.subjectKey) + " " + n.toString("base64");
            t.comment && (r = r + " " + t.comment);
            return r;
        },
        fromBuffer: m,
        toBuffer: y
    };
    var r = n(21), i = n(129), o = n(7), a = n(17).Buffer, s = n(42), l = n(33), c = (n(34), 
    n(155)), u = n(92), d = n(77), h = n(35), p = n(154);
    var f = {
        user: 1,
        host: 2
    };
    Object.keys(f).forEach(function(e) {
        f[f[e]] = e;
    });
    var _ = /^ecdsa-sha2-([^@-]+)-cert-v01@openssh.com$/;
    function m(e, t, n) {
        var o = new i({
            buffer: e
        }), a = o.readString();
        if (void 0 !== t && a !== t) throw new Error("SSH certificate algorithm mismatch");
        void 0 === t && (t = a);
        var m = {
            signatures: {}
        };
        m.signatures.openssh = {}, m.signatures.openssh.nonce = o.readBuffer();
        var v = {}, y = v.parts = [];
        v.type = function(e) {
            if ("ssh-rsa-cert-v01@openssh.com" === e) return "rsa";
            if ("ssh-dss-cert-v01@openssh.com" === e) return "dsa";
            if (e.match(_)) return "ecdsa";
            if ("ssh-ed25519-cert-v01@openssh.com" === e) return "ed25519";
            throw new Error("Unsupported cert type " + e);
        }(t);
        for (var E = s.info[v.type].parts.length; y.length < E; ) y.push(o.readPart());
        r.ok(y.length >= 1, "key must have at least one part");
        var b = s.info[v.type];
        if ("ecdsa" === v.type) {
            var w = _.exec(t);
            r.ok(null !== w), r.strictEqual(w[1], y[0].data.toString());
        }
        for (var S = 0; S < b.parts.length; ++S) if (y[S].name = b.parts[S], "curve" !== y[S].name && !1 !== b.normalize) {
            var T = y[S];
            T.data = h.mpNormalize(T.data);
        }
        m.subjectKey = new l(v), m.serial = o.readInt64();
        var A = f[o.readInt()];
        r.string(A, "valid cert type"), m.signatures.openssh.keyId = o.readString();
        for (var O = [], C = o.readBuffer(), N = new i({
            buffer: C
        }); !N.atEnd(); ) O.push(N.readString());
        0 === O.length && (O = [ "*" ]), m.subjects = O.map(function(e) {
            if ("user" === A) return c.forUser(e);
            if ("host" === A) return c.forHost(e);
            throw new Error("Unknown identity type " + A);
        }), m.validFrom = g(o.readInt64()), m.validUntil = g(o.readInt64());
        for (var I, R = [], D = new i({
            buffer: o.readBuffer()
        }); !D.atEnd(); ) (I = {
            critical: !0
        }).name = D.readString(), I.data = D.readBuffer(), R.push(I);
        for (D = new i({
            buffer: o.readBuffer()
        }); !D.atEnd(); ) (I = {
            critical: !1
        }).name = D.readString(), I.data = D.readBuffer(), R.push(I);
        m.signatures.openssh.exts = R, o.readBuffer();
        var L = o.readBuffer();
        m.issuerKey = u.read(L), m.issuer = c.forHost("**");
        var k = o.readBuffer();
        return m.signatures.openssh.signature = d.parse(k, m.issuerKey.type, "ssh"), void 0 !== n && (n.remainder = o.remainder(), 
        n.consumed = o._offset), new p(m);
    }
    function g(e) {
        var t = 4294967296 * e.readUInt32BE(0);
        t += e.readUInt32BE(4);
        var n = new Date;
        return n.setTime(1e3 * t), n.sourceInt64 = e, n;
    }
    function v(e) {
        if (void 0 !== e.sourceInt64) return e.sourceInt64;
        var t = Math.round(e.getTime() / 1e3), n = Math.floor(t / 4294967296), r = Math.floor(t % 4294967296), i = a.alloc(8);
        return i.writeUInt32BE(n, 0), i.writeUInt32BE(r, 4), i;
    }
    function y(e, t) {
        r.object(e.signatures.openssh, "signature for openssh format");
        var n = e.signatures.openssh;
        void 0 === n.nonce && (n.nonce = o.randomBytes(16));
        var l = new i({});
        l.writeString(E(e.subjectKey)), l.writeBuffer(n.nonce);
        var c = e.subjectKey;
        s.info[c.type].parts.forEach(function(e) {
            l.writePart(c.part[e]);
        }), l.writeInt64(e.serial);
        var d = e.subjects[0].type;
        r.notStrictEqual(d, "unknown"), e.subjects.forEach(function(e) {
            r.strictEqual(e.type, d);
        }), d = f[d], l.writeInt(d), void 0 === n.keyId && (n.keyId = e.subjects[0].type + "_" + (e.subjects[0].uid || e.subjects[0].hostname)), 
        l.writeString(n.keyId);
        var h = new i({});
        e.subjects.forEach(function(e) {
            d === f.host ? h.writeString(e.hostname) : d === f.user && h.writeString(e.uid);
        }), l.writeBuffer(h.toBuffer()), l.writeInt64(v(e.validFrom)), l.writeInt64(v(e.validUntil));
        var p = n.exts;
        void 0 === p && (p = []);
        var _ = new i({});
        return p.forEach(function(e) {
            !0 === e.critical && (_.writeString(e.name), _.writeBuffer(e.data));
        }), l.writeBuffer(_.toBuffer()), _ = new i({}), p.forEach(function(e) {
            !0 !== e.critical && (_.writeString(e.name), _.writeBuffer(e.data));
        }), l.writeBuffer(_.toBuffer()), l.writeBuffer(a.alloc(0)), h = u.write(e.issuerKey), 
        l.writeBuffer(h), t || l.writeBuffer(n.signature.toBuffer("ssh")), l.toBuffer();
    }
    function E(e) {
        if ("rsa" === e.type) return "ssh-rsa-cert-v01@openssh.com";
        if ("dsa" === e.type) return "ssh-dss-cert-v01@openssh.com";
        if ("ecdsa" === e.type) return "ecdsa-sha2-" + e.curve + "-cert-v01@openssh.com";
        if ("ed25519" === e.type) return "ssh-ed25519-cert-v01@openssh.com";
        throw new Error("Unsupported key type " + e.type);
    }
}
