// analysis/pretty/main.js:14575; webpack module 77
function(e, t, n) {
    e.exports = d;
    var r = n(21), i = n(17).Buffer, o = (n(42), n(7), n(69)), a = n(35), s = n(78), l = n(129), c = o.InvalidAlgorithmError, u = o.SignatureParseError;
    function d(e) {
        r.object(e, "options"), r.arrayOfObject(e.parts, "options.parts"), r.string(e.type, "options.type");
        for (var t = {}, n = 0; n < e.parts.length; ++n) {
            var i = e.parts[n];
            t[i.name] = i;
        }
        this.type = e.type, this.hashAlgorithm = e.hashAlgo, this.curve = e.curve, this.parts = e.parts, 
        this.part = t;
    }
    function h(e, t, n, i) {
        if ("ssh" === n) {
            try {
                var o = new l({
                    buffer: e
                }), a = o.readString();
            } catch (e) {}
            if (void 0 !== o) {
                var s = "SSH signature does not match expected type (expected " + t + ", got " + a + ")";
                switch (a) {
                  case "ssh-rsa":
                    r.strictEqual(t, "rsa", s), i.hashAlgo = "sha1";
                    break;

                  case "rsa-sha2-256":
                    r.strictEqual(t, "rsa", s), i.hashAlgo = "sha256";
                    break;

                  case "rsa-sha2-512":
                    r.strictEqual(t, "rsa", s), i.hashAlgo = "sha512";
                    break;

                  case "ssh-ed25519":
                    r.strictEqual(t, "ed25519", s), i.hashAlgo = "sha512";
                    break;

                  default:
                    throw new Error("Unknown SSH signature type: " + a);
                }
                var c = o.readPart();
                return r.ok(o.atEnd(), "extra trailing bytes"), c.name = "sig", i.parts.push(c), 
                new d(i);
            }
        }
        return i.parts.push({
            name: "sig",
            data: e
        }), new d(i);
    }
    d.prototype.toBuffer = function(e) {
        var t;
        void 0 === e && (e = "asn1"), r.string(e, "format");
        var n = "ssh-" + this.type;
        switch (this.type) {
          case "rsa":
            switch (this.hashAlgorithm) {
              case "sha256":
                n = "rsa-sha2-256";
                break;

              case "sha512":
                n = "rsa-sha2-512";
                break;

              case "sha1":
              case void 0:
                break;

              default:
                throw new Error("SSH signature format does not support hash algorithm " + this.hashAlgorithm);
            }
            return "ssh" === e ? ((t = new l({})).writeString(n), t.writePart(this.part.sig), 
            t.toBuffer()) : this.part.sig.data;

          case "ed25519":
            return "ssh" === e ? ((t = new l({})).writeString(n), t.writePart(this.part.sig), 
            t.toBuffer()) : this.part.sig.data;

          case "dsa":
          case "ecdsa":
            var o, c;
            if ("asn1" === e) {
                var u = new s.BerWriter;
                return u.startSequence(), o = a.mpNormalize(this.part.r.data), c = a.mpNormalize(this.part.s.data), 
                u.writeBuffer(o, s.Ber.Integer), u.writeBuffer(c, s.Ber.Integer), u.endSequence(), 
                u.buffer;
            }
            if ("ssh" === e && "dsa" === this.type) {
                if ((t = new l({})).writeString("ssh-dss"), (o = this.part.r.data).length > 20 && 0 === o[0] && (o = o.slice(1)), 
                (c = this.part.s.data).length > 20 && 0 === c[0] && (c = c.slice(1)), this.hashAlgorithm && "sha1" !== this.hashAlgorithm || o.length + c.length !== 40) throw new Error("OpenSSH only supports DSA signatures with SHA1 hash");
                return t.writeBuffer(i.concat([ o, c ])), t.toBuffer();
            }
            if ("ssh" === e && "ecdsa" === this.type) {
                var d, h = new l({});
                o = this.part.r.data, h.writeBuffer(o), h.writePart(this.part.s), t = new l({}), 
                0 === o[0] && (o = o.slice(1));
                var p = 8 * o.length;
                return 256 === p ? d = "nistp256" : 384 === p ? d = "nistp384" : 528 === p && (d = "nistp521"), 
                t.writeString("ecdsa-sha2-" + d), t.writeBuffer(h.toBuffer()), t.toBuffer();
            }
            throw new Error("Invalid signature format");

          default:
            throw new Error("Invalid signature data");
        }
    }, d.prototype.toString = function(e) {
        return r.optionalString(e, "format"), this.toBuffer(e).toString("base64");
    }, d.parse = function(e, t, n) {
        "string" == typeof e && (e = i.from(e, "base64")), r.buffer(e, "data"), r.string(n, "format"), 
        r.string(t, "type");
        var o = {};
        o.type = t.toLowerCase(), o.parts = [];
        try {
            switch (r.ok(e.length > 0, "signature must not be empty"), o.type) {
              case "rsa":
              case "ed25519":
                return h(e, t, n, o);

              case "dsa":
              case "ecdsa":
                return "asn1" === n ? function(e, t, n, r) {
                    var i = new s.BerReader(e);
                    i.readSequence();
                    var o = i.readString(s.Ber.Integer, !0), l = i.readString(s.Ber.Integer, !0);
                    return r.parts.push({
                        name: "r",
                        data: a.mpNormalize(o)
                    }), r.parts.push({
                        name: "s",
                        data: a.mpNormalize(l)
                    }), new d(r);
                }(e, 0, 0, o) : "dsa" === o.type ? function(e, t, n, i) {
                    if (40 != e.length) {
                        var o = new l({
                            buffer: e
                        }), a = o.readBuffer();
                        "ssh-dss" === a.toString("ascii") && (a = o.readBuffer()), r.ok(o.atEnd(), "extra trailing bytes"), 
                        r.strictEqual(a.length, 40, "invalid inner length"), e = a;
                    }
                    return i.parts.push({
                        name: "r",
                        data: e.slice(0, 20)
                    }), i.parts.push({
                        name: "s",
                        data: e.slice(20, 40)
                    }), new d(i);
                }(e, 0, 0, o) : function(e, t, n, i) {
                    var o, a, s = new l({
                        buffer: e
                    }), c = s.readBuffer(), u = c.toString("ascii");
                    if ("ecdsa-" === u.slice(0, 6)) {
                        var h = u.split("-");
                        switch (r.strictEqual(h[0], "ecdsa"), r.strictEqual(h[1], "sha2"), i.curve = h[2], 
                        i.curve) {
                          case "nistp256":
                            i.hashAlgo = "sha256";
                            break;

                          case "nistp384":
                            i.hashAlgo = "sha384";
                            break;

                          case "nistp521":
                            i.hashAlgo = "sha512";
                            break;

                          default:
                            throw new Error("Unsupported ECDSA curve: " + i.curve);
                        }
                        c = s.readBuffer(), r.ok(s.atEnd(), "extra trailing bytes on outer"), s = new l({
                            buffer: c
                        }), o = s.readPart();
                    } else o = {
                        data: c
                    };
                    return a = s.readPart(), r.ok(s.atEnd(), "extra trailing bytes"), o.name = "r", 
                    a.name = "s", i.parts.push(o), i.parts.push(a), new d(i);
                }(e, 0, 0, o);

              default:
                throw new c(t);
            }
        } catch (e) {
            if (e instanceof c) throw e;
            throw new u(t, n, e);
        }
    }, d.isSignature = function(e, t) {
        return a.isCompatible(e, d, t);
    }, d.prototype._sshpkApiVersion = [ 2, 1 ], d._oldVersionDetect = function(e) {
        return r.func(e.toBuffer), e.hasOwnProperty("hashAlgorithm") ? [ 2, 0 ] : [ 1, 0 ];
    };
}
