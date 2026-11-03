// analysis/pretty/main.js:8564; webpack module 33
function(e, t, n) {
    e.exports = m;
    var r, i = n(21), o = n(42), a = n(7), s = n(150), l = n(77), c = n(295).DiffieHellman, u = n(69), d = n(35), h = n(34);
    try {
        r = n(629);
    } catch (e) {}
    var p = u.InvalidAlgorithmError, f = u.KeyParseError, _ = {};
    function m(e) {
        i.object(e, "options"), i.arrayOfObject(e.parts, "options.parts"), i.string(e.type, "options.type"), 
        i.optionalString(e.comment, "options.comment");
        var t = o.info[e.type];
        if ("object" != typeof t) throw new p(e.type);
        for (var n, r = {}, a = 0; a < e.parts.length; ++a) {
            var s = e.parts[a];
            r[s.name] = s;
        }
        if (this.type = e.type, this.parts = e.parts, this.part = r, this.comment = void 0, 
        this.source = e.source, this._rfc4253Cache = e._rfc4253Cache, this._hashCache = {}, 
        this.curve = void 0, "ecdsa" === this.type) {
            var l = this.part.curve.data.toString();
            this.curve = l, n = o.curves[l].size;
        } else if ("ed25519" === this.type || "curve25519" === this.type) n = 256, this.curve = "curve25519"; else {
            var c = this.part[t.sizePart];
            n = 8 * (n = c.data.length) - d.countZeros(c.data);
        }
        this.size = n;
    }
    _.auto = n(630), _.pem = n(91), _.pkcs1 = n(296), _.pkcs8 = n(153), _.rfc4253 = n(92), 
    _.ssh = n(632), _["ssh-private"] = n(215), _.openssh = _["ssh-private"], _.dnssec = n(297), 
    _.putty = n(298), _.ppk = _.putty, m.formats = _, m.prototype.toBuffer = function(e, t) {
        return void 0 === e && (e = "ssh"), i.string(e, "format"), i.object(_[e], "formats[format]"), 
        i.optionalObject(t, "options"), "rfc4253" === e ? (void 0 === this._rfc4253Cache && (this._rfc4253Cache = _.rfc4253.write(this)), 
        this._rfc4253Cache) : _[e].write(this, t);
    }, m.prototype.toString = function(e, t) {
        return this.toBuffer(e, t).toString();
    }, m.prototype.hash = function(e, t) {
        if (i.string(e, "algorithm"), i.optionalString(t, "type"), void 0 === t && (t = "ssh"), 
        e = e.toLowerCase(), void 0 === o.hashAlgs[e]) throw new p(e);
        var n, r = e + "||" + t;
        if (this._hashCache[r]) return this._hashCache[r];
        if ("ssh" === t) n = this.toBuffer("rfc4253"); else {
            if ("spki" !== t) throw new Error("Hash type " + t + " not supported");
            n = _.pkcs8.pkcs8ToBuffer(this);
        }
        var s = a.createHash(e).update(n).digest();
        return this._hashCache[r] = s, s;
    }, m.prototype.fingerprint = function(e, t) {
        void 0 === e && (e = "sha256"), void 0 === t && (t = "ssh"), i.string(e, "algorithm"), 
        i.string(t, "type");
        var n = {
            type: "key",
            hash: this.hash(e, t),
            algorithm: e,
            hashType: t
        };
        return new s(n);
    }, m.prototype.defaultHashAlgorithm = function() {
        var e = "sha1";
        return "rsa" === this.type && (e = "sha256"), "dsa" === this.type && this.size > 1024 && (e = "sha256"), 
        "ed25519" === this.type && (e = "sha512"), "ecdsa" === this.type && (e = this.size <= 256 ? "sha256" : this.size <= 384 ? "sha384" : "sha512"), 
        e;
    }, m.prototype.createVerify = function(e) {
        if (void 0 === e && (e = this.defaultHashAlgorithm()), i.string(e, "hash algorithm"), 
        "ed25519" === this.type && void 0 !== r) return new r.Verifier(this, e);
        if ("curve25519" === this.type) throw new Error("Curve25519 keys are not suitable for signing or verification");
        var t, n, o;
        try {
            n = e.toUpperCase(), t = a.createVerify(n);
        } catch (e) {
            o = e;
        }
        (void 0 === t || o instanceof Error && o.message.match(/Unknown message digest/)) && (n = "RSA-", 
        n += e.toUpperCase(), t = a.createVerify(n)), i.ok(t, "failed to create verifier");
        var s = t.verify.bind(t), c = this.toBuffer("pkcs8"), u = this.curve, d = this;
        return t.verify = function(t, n) {
            if (l.isSignature(t, [ 2, 0 ])) return t.type === d.type && ((!t.hashAlgorithm || t.hashAlgorithm === e) && ((!t.curve || "ecdsa" !== d.type || t.curve === u) && s(c, t.toBuffer("asn1"))));
            if ("string" == typeof t || Buffer.isBuffer(t)) return s(c, t, n);
            throw l.isSignature(t, [ 1, 0 ]) ? new Error("signature was created by too old a version of sshpk and cannot be verified") : new TypeError("signature must be a string, Buffer, or Signature object");
        }, t;
    }, m.prototype.createDiffieHellman = function() {
        if ("rsa" === this.type) throw new Error("RSA keys do not support Diffie-Hellman");
        return new c(this);
    }, m.prototype.createDH = m.prototype.createDiffieHellman, m.parse = function(e, t, n) {
        "string" != typeof e && i.buffer(e, "data"), void 0 === t && (t = "auto"), i.string(t, "format"), 
        "string" == typeof n && (n = {
            filename: n
        }), i.optionalObject(n, "options"), void 0 === n && (n = {}), i.optionalString(n.filename, "options.filename"), 
        void 0 === n.filename && (n.filename = "(unnamed)"), i.object(_[t], "formats[format]");
        try {
            var r = _[t].read(e, n);
            return r instanceof h && (r = r.toPublic()), r.comment || (r.comment = n.filename), 
            r;
        } catch (e) {
            if ("KeyEncryptedError" === e.name) throw e;
            throw new f(n.filename, t, e);
        }
    }, m.isKey = function(e, t) {
        return d.isCompatible(e, m, t);
    }, m.prototype._sshpkApiVersion = [ 1, 7 ], m._oldVersionDetect = function(e) {
        return i.func(e.toBuffer), i.func(e.fingerprint), e.createDH ? [ 1, 4 ] : e.defaultHashAlgorithm ? [ 1, 3 ] : e.formats.auto ? [ 1, 2 ] : e.formats.pkcs1 ? [ 1, 1 ] : [ 1, 0 ];
    };
}
