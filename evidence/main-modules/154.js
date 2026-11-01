// analysis/pretty/main.js:21162; webpack module 154
function(e, t, n) {
    e.exports = m;
    var r = n(21), i = n(17).Buffer, o = n(42), a = n(7), s = n(150), l = (n(77), n(69)), c = (n(5), 
    n(35)), u = n(33), d = n(34), h = n(155), p = {};
    p.openssh = n(1187), p.x509 = n(633), p.pem = n(1188);
    var f = l.CertificateParseError, _ = l.InvalidAlgorithmError;
    function m(e) {
        r.object(e, "options"), r.arrayOfObject(e.subjects, "options.subjects"), c.assertCompatible(e.subjects[0], h, [ 1, 0 ], "options.subjects"), 
        c.assertCompatible(e.subjectKey, u, [ 1, 0 ], "options.subjectKey"), c.assertCompatible(e.issuer, h, [ 1, 0 ], "options.issuer"), 
        void 0 !== e.issuerKey && c.assertCompatible(e.issuerKey, u, [ 1, 0 ], "options.issuerKey"), 
        r.object(e.signatures, "options.signatures"), r.buffer(e.serial, "options.serial"), 
        r.date(e.validFrom, "options.validFrom"), r.date(e.validUntil, "optons.validUntil"), 
        r.optionalArrayOfString(e.purposes, "options.purposes"), this._hashCache = {}, this.subjects = e.subjects, 
        this.issuer = e.issuer, this.subjectKey = e.subjectKey, this.issuerKey = e.issuerKey, 
        this.signatures = e.signatures, this.serial = e.serial, this.validFrom = e.validFrom, 
        this.validUntil = e.validUntil, this.purposes = e.purposes;
    }
    m.formats = p, m.prototype.toBuffer = function(e, t) {
        return void 0 === e && (e = "x509"), r.string(e, "format"), r.object(p[e], "formats[format]"), 
        r.optionalObject(t, "options"), p[e].write(this, t);
    }, m.prototype.toString = function(e, t) {
        return void 0 === e && (e = "pem"), this.toBuffer(e, t).toString();
    }, m.prototype.fingerprint = function(e) {
        void 0 === e && (e = "sha256"), r.string(e, "algorithm");
        var t = {
            type: "certificate",
            hash: this.hash(e),
            algorithm: e
        };
        return new s(t);
    }, m.prototype.hash = function(e) {
        if (r.string(e, "algorithm"), e = e.toLowerCase(), void 0 === o.hashAlgs[e]) throw new _(e);
        if (this._hashCache[e]) return this._hashCache[e];
        var t = a.createHash(e).update(this.toBuffer("x509")).digest();
        return this._hashCache[e] = t, t;
    }, m.prototype.isExpired = function(e) {
        return void 0 === e && (e = new Date), !(e.getTime() >= this.validFrom.getTime() && e.getTime() < this.validUntil.getTime());
    }, m.prototype.isSignedBy = function(e) {
        return c.assertCompatible(e, m, [ 1, 0 ], "issuer"), !!this.issuer.equals(e.subjects[0]) && (!(this.issuer.purposes && this.issuer.purposes.length > 0 && -1 === this.issuer.purposes.indexOf("ca")) && this.isSignedByKey(e.subjectKey));
    }, m.prototype.getExtension = function(e) {
        return r.string(e, "keyOrOid"), this.getExtensions().filter(function(t) {
            return "x509" === t.format ? t.oid === e : "openssh" === t.format && t.name === e;
        })[0];
    }, m.prototype.getExtensions = function() {
        var e = [], t = this.signatures.x509;
        t && t.extras && t.extras.exts && t.extras.exts.forEach(function(t) {
            t.format = "x509", e.push(t);
        });
        var n = this.signatures.openssh;
        return n && n.exts && n.exts.forEach(function(t) {
            t.format = "openssh", e.push(t);
        }), e;
    }, m.prototype.isSignedByKey = function(e) {
        if (c.assertCompatible(e, u, [ 1, 2 ], "issuerKey"), void 0 !== this.issuerKey) return this.issuerKey.fingerprint("sha512").matches(e);
        var t = Object.keys(this.signatures)[0], n = p[t].verify(this, e);
        return n && (this.issuerKey = e), n;
    }, m.prototype.signWith = function(e) {
        c.assertCompatible(e, d, [ 1, 2 ], "key");
        for (var t = Object.keys(p), n = !1, r = 0; r < t.length; ++r) {
            if ("pem" !== t[r]) !0 === p[t[r]].sign(this, e) && (n = !0);
        }
        if (!n) throw new Error("Failed to sign the certificate for any available certificate formats");
    }, m.createSelfSigned = function(e, t, n) {
        var o;
        o = Array.isArray(e) ? e : [ e ], r.arrayOfObject(o), o.forEach(function(e) {
            c.assertCompatible(e, h, [ 1, 0 ], "subject");
        }), c.assertCompatible(t, d, [ 1, 2 ], "private key"), r.optionalObject(n, "options"), 
        void 0 === n && (n = {}), r.optionalObject(n.validFrom, "options.validFrom"), r.optionalObject(n.validUntil, "options.validUntil");
        var a = n.validFrom, s = n.validUntil;
        if (void 0 === a && (a = new Date), void 0 === s) {
            r.optionalNumber(n.lifetime, "options.lifetime");
            var l = n.lifetime;
            void 0 === l && (l = 31536e4), (s = new Date).setTime(s.getTime() + 1e3 * l);
        }
        r.optionalBuffer(n.serial, "options.serial");
        var u = n.serial;
        void 0 === u && (u = i.from("0000000000000001", "hex"));
        var p = n.purposes;
        if (void 0 === p && (p = []), -1 === p.indexOf("signature") && p.push("signature"), 
        -1 === p.indexOf("ca") && p.push("ca"), -1 === p.indexOf("crl") && p.push("crl"), 
        p.length <= 3) {
            var f = o.filter(function(e) {
                return "host" === e.type;
            }), _ = o.filter(function(e) {
                return "user" === e.type;
            });
            f.length > 0 && -1 === p.indexOf("serverAuth") && p.push("serverAuth"), _.length > 0 && -1 === p.indexOf("clientAuth") && p.push("clientAuth"), 
            (_.length > 0 || f.length > 0) && (-1 === p.indexOf("keyAgreement") && p.push("keyAgreement"), 
            "rsa" === t.type && -1 === p.indexOf("encryption") && p.push("encryption"));
        }
        var g = new m({
            subjects: o,
            issuer: o[0],
            subjectKey: t.toPublic(),
            issuerKey: t.toPublic(),
            signatures: {},
            serial: u,
            validFrom: a,
            validUntil: s,
            purposes: p
        });
        return g.signWith(t), g;
    }, m.create = function(e, t, n, o, a) {
        var s;
        s = Array.isArray(e) ? e : [ e ], r.arrayOfObject(s), s.forEach(function(e) {
            c.assertCompatible(e, h, [ 1, 0 ], "subject");
        }), c.assertCompatible(t, u, [ 1, 0 ], "key"), d.isPrivateKey(t) && (t = t.toPublic()), 
        c.assertCompatible(n, h, [ 1, 0 ], "issuer"), c.assertCompatible(o, d, [ 1, 2 ], "issuer key"), 
        r.optionalObject(a, "options"), void 0 === a && (a = {}), r.optionalObject(a.validFrom, "options.validFrom"), 
        r.optionalObject(a.validUntil, "options.validUntil");
        var l = a.validFrom, p = a.validUntil;
        if (void 0 === l && (l = new Date), void 0 === p) {
            r.optionalNumber(a.lifetime, "options.lifetime");
            var f = a.lifetime;
            void 0 === f && (f = 31536e4), (p = new Date).setTime(p.getTime() + 1e3 * f);
        }
        r.optionalBuffer(a.serial, "options.serial");
        var _ = a.serial;
        void 0 === _ && (_ = i.from("0000000000000001", "hex"));
        var g = a.purposes;
        void 0 === g && (g = []), -1 === g.indexOf("signature") && g.push("signature"), 
        !0 === a.ca && (-1 === g.indexOf("ca") && g.push("ca"), -1 === g.indexOf("crl") && g.push("crl"));
        var v = s.filter(function(e) {
            return "host" === e.type;
        }), y = s.filter(function(e) {
            return "user" === e.type;
        });
        v.length > 0 && -1 === g.indexOf("serverAuth") && g.push("serverAuth"), y.length > 0 && -1 === g.indexOf("clientAuth") && g.push("clientAuth"), 
        (y.length > 0 || v.length > 0) && (-1 === g.indexOf("keyAgreement") && g.push("keyAgreement"), 
        "rsa" === t.type && -1 === g.indexOf("encryption") && g.push("encryption"));
        var E = new m({
            subjects: s,
            issuer: n,
            subjectKey: t,
            issuerKey: o.toPublic(),
            signatures: {},
            serial: _,
            validFrom: l,
            validUntil: p,
            purposes: g
        });
        return E.signWith(o), E;
    }, m.parse = function(e, t, n) {
        "string" != typeof e && r.buffer(e, "data"), void 0 === t && (t = "auto"), r.string(t, "format"), 
        "string" == typeof n && (n = {
            filename: n
        }), r.optionalObject(n, "options"), void 0 === n && (n = {}), r.optionalString(n.filename, "options.filename"), 
        void 0 === n.filename && (n.filename = "(unnamed)"), r.object(p[t], "formats[format]");
        try {
            return p[t].read(e, n);
        } catch (e) {
            throw new f(n.filename, t, e);
        }
    }, m.isCertificate = function(e, t) {
        return c.isCompatible(e, m, t);
    }, m.prototype._sshpkApiVersion = [ 1, 1 ], m._oldVersionDetect = function(e) {
        return [ 1, 0 ];
    };
}
