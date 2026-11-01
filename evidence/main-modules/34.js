// analysis/pretty/main.js:8665; webpack module 34
function(e, t, n) {
    e.exports = y;
    var r = n(21), i = n(17).Buffer, o = n(42), a = n(7), s = (n(150), n(77)), l = n(69), c = n(5), u = n(35), d = n(295), h = d.generateECDSA, p = d.generateED25519, f = n(629), _ = n(152), m = n(33), g = (l.InvalidAlgorithmError, 
    l.KeyParseError), v = (l.KeyEncryptedError, {});
    function y(e) {
        r.object(e, "options"), m.call(this, e), this._pubCache = void 0;
    }
    v.auto = n(630), v.pem = n(91), v.pkcs1 = n(296), v.pkcs8 = n(153), v.rfc4253 = n(92), 
    v["ssh-private"] = n(215), v.openssh = v["ssh-private"], v.ssh = v["ssh-private"], 
    v.dnssec = n(297), v.putty = n(298), c.inherits(y, m), y.formats = v, y.prototype.toBuffer = function(e, t) {
        return void 0 === e && (e = "pkcs1"), r.string(e, "format"), r.object(v[e], "formats[format]"), 
        r.optionalObject(t, "options"), v[e].write(this, t);
    }, y.prototype.hash = function(e, t) {
        return this.toPublic().hash(e, t);
    }, y.prototype.fingerprint = function(e, t) {
        return this.toPublic().fingerprint(e, t);
    }, y.prototype.toPublic = function() {
        if (this._pubCache) return this._pubCache;
        for (var e = o.info[this.type], t = [], n = 0; n < e.parts.length; ++n) {
            var r = e.parts[n];
            t.push(this.part[r]);
        }
        return this._pubCache = new m({
            type: this.type,
            source: this,
            parts: t
        }), this.comment && (this._pubCache.comment = this.comment), this._pubCache;
    }, y.prototype.derive = function(e) {
        var t, n, o;
        if (r.string(e, "type"), "ed25519" === this.type && "curve25519" === e) return 0 === (t = this.part.k.data)[0] && (t = t.slice(1)), 
        o = _.box.keyPair.fromSecretKey(new Uint8Array(t)), n = i.from(o.publicKey), new y({
            type: "curve25519",
            parts: [ {
                name: "A",
                data: u.mpNormalize(n)
            }, {
                name: "k",
                data: u.mpNormalize(t)
            } ]
        });
        if ("curve25519" === this.type && "ed25519" === e) return 0 === (t = this.part.k.data)[0] && (t = t.slice(1)), 
        o = _.sign.keyPair.fromSeed(new Uint8Array(t)), n = i.from(o.publicKey), new y({
            type: "ed25519",
            parts: [ {
                name: "A",
                data: u.mpNormalize(n)
            }, {
                name: "k",
                data: u.mpNormalize(t)
            } ]
        });
        throw new Error("Key derivation not supported from " + this.type + " to " + e);
    }, y.prototype.createVerify = function(e) {
        return this.toPublic().createVerify(e);
    }, y.prototype.createSign = function(e) {
        if (void 0 === e && (e = this.defaultHashAlgorithm()), r.string(e, "hash algorithm"), 
        "ed25519" === this.type && void 0 !== f) return new f.Signer(this, e);
        if ("curve25519" === this.type) throw new Error("Curve25519 keys are not suitable for signing or verification");
        var t, n, o;
        try {
            n = e.toUpperCase(), t = a.createSign(n);
        } catch (e) {
            o = e;
        }
        (void 0 === t || o instanceof Error && o.message.match(/Unknown message digest/)) && (n = "RSA-", 
        n += e.toUpperCase(), t = a.createSign(n)), r.ok(t, "failed to create verifier");
        var l = t.sign.bind(t), c = this.toBuffer("pkcs1"), u = this.type, d = this.curve;
        return t.sign = function() {
            var t = l(c);
            return "string" == typeof t && (t = i.from(t, "binary")), (t = s.parse(t, u, "asn1")).hashAlgorithm = e, 
            t.curve = d, t;
        }, t;
    }, y.parse = function(e, t, n) {
        "string" != typeof e && r.buffer(e, "data"), void 0 === t && (t = "auto"), r.string(t, "format"), 
        "string" == typeof n && (n = {
            filename: n
        }), r.optionalObject(n, "options"), void 0 === n && (n = {}), r.optionalString(n.filename, "options.filename"), 
        void 0 === n.filename && (n.filename = "(unnamed)"), r.object(v[t], "formats[format]");
        try {
            var i = v[t].read(e, n);
            return r.ok(i instanceof y, "key is not a private key"), i.comment || (i.comment = n.filename), 
            i;
        } catch (e) {
            if ("KeyEncryptedError" === e.name) throw e;
            throw new g(n.filename, t, e);
        }
    }, y.isPrivateKey = function(e, t) {
        return u.isCompatible(e, y, t);
    }, y.generate = function(e, t) {
        switch (void 0 === t && (t = {}), r.object(t, "options"), e) {
          case "ecdsa":
            return void 0 === t.curve && (t.curve = "nistp256"), r.string(t.curve, "options.curve"), 
            h(t.curve);

          case "ed25519":
            return p();

          default:
            throw new Error('Key generation not supported with key type "' + e + '"');
        }
    }, y.prototype._sshpkApiVersion = [ 1, 6 ], y._oldVersionDetect = function(e) {
        return r.func(e.toPublic), r.func(e.createSign), e.derive ? [ 1, 3 ] : e.defaultHashAlgorithm ? [ 1, 2 ] : e.formats.auto ? [ 1, 1 ] : [ 1, 0 ];
    };
}
