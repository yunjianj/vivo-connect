// analysis/pretty/main.js:19446; webpack module 150
function(e, t, n) {
    e.exports = f;
    var r = n(21), i = n(17).Buffer, o = n(42), a = n(7), s = n(69), l = n(33), c = n(34), u = n(154), d = n(35), h = s.FingerprintFormatError, p = s.InvalidAlgorithmError;
    function f(e) {
        if (r.object(e, "options"), r.string(e.type, "options.type"), r.buffer(e.hash, "options.hash"), 
        r.string(e.algorithm, "options.algorithm"), this.algorithm = e.algorithm.toLowerCase(), 
        !0 !== o.hashAlgs[this.algorithm]) throw new p(this.algorithm);
        this.hash = e.hash, this.type = e.type, this.hashType = e.hashType;
    }
    f.prototype.toString = function(e) {
        switch (void 0 === e && (e = "md5" === this.algorithm || "spki" === this.hashType ? "hex" : "base64"), 
        r.string(e), e) {
          case "hex":
            return "spki" === this.hashType ? this.hash.toString("hex") : this.hash.toString("hex").replace(/(.{2})(?=.)/g, "$1:");

          case "base64":
            return "spki" === this.hashType ? this.hash.toString("base64") : (t = this.algorithm, 
            n = this.hash.toString("base64"), t.toUpperCase() + ":" + function(e) {
                return e.replace(/=*$/, "");
            }(n));

          default:
            throw new h(void 0, e);
        }
        var t, n;
    }, f.prototype.matches = function(e) {
        r.object(e, "key or certificate"), "key" === this.type && "ssh" !== this.hashType ? (d.assertCompatible(e, l, [ 1, 7 ], "key with spki"), 
        c.isPrivateKey(e) && d.assertCompatible(e, c, [ 1, 6 ], "privatekey with spki support")) : "key" === this.type ? d.assertCompatible(e, l, [ 1, 0 ], "key") : d.assertCompatible(e, u, [ 1, 0 ], "certificate");
        var t = e.hash(this.algorithm, this.hashType), n = a.createHash(this.algorithm).update(t).digest("base64");
        return void 0 === this.hash2 && (this.hash2 = a.createHash(this.algorithm).update(this.hash).digest("base64")), 
        this.hash2 === n;
    };
    var _ = /^[A-Za-z0-9+\/=]+$/, m = /^[a-fA-F0-9]+$/;
    f.parse = function(e, t) {
        var n, a, s;
        r.string(e, "fingerprint"), Array.isArray(t) && (s = t, t = {}), r.optionalObject(t, "options"), 
        void 0 === t && (t = {}), void 0 !== t.enAlgs && (s = t.enAlgs), void 0 !== t.algorithms && (s = t.algorithms), 
        r.optionalArrayOfString(s, "algorithms");
        var l = "ssh";
        void 0 !== t.hashType && (l = t.hashType), r.string(l, "options.hashType");
        var c = e.split(":");
        if (2 == c.length) {
            if (n = c[0].toLowerCase(), !_.test(c[1])) throw new h(e);
            try {
                a = i.from(c[1], "base64");
            } catch (t) {
                throw new h(e);
            }
        } else if (c.length > 2) {
            if (n = "md5", "md5" === c[0].toLowerCase() && (c = c.slice(1)), c = (c = c.map(function(t) {
                for (;t.length < 2; ) t = "0" + t;
                if (t.length > 2) throw new h(e);
                return t;
            })).join(""), !m.test(c) || c.length % 2 != 0) throw new h(e);
            try {
                a = i.from(c, "hex");
            } catch (t) {
                throw new h(e);
            }
        } else {
            if (m.test(e)) a = i.from(e, "hex"); else {
                if (!_.test(e)) throw new h(e);
                a = i.from(e, "base64");
            }
            switch (a.length) {
              case 32:
                n = "sha256";
                break;

              case 16:
                n = "md5";
                break;

              case 20:
                n = "sha1";
                break;

              case 64:
                n = "sha512";
                break;

              default:
                throw new h(e);
            }
            void 0 === t.hashType && (l = "spki");
        }
        if (void 0 === n) throw new h(e);
        if (void 0 === o.hashAlgs[n]) throw new p(n);
        if (void 0 !== s && -1 === (s = s.map(function(e) {
            return e.toLowerCase();
        })).indexOf(n)) throw new p(n);
        return new f({
            algorithm: n,
            hash: a,
            type: t.type || "key",
            hashType: l
        });
    }, f.isFingerprint = function(e, t) {
        return d.isCompatible(e, f, t);
    }, f.prototype._sshpkApiVersion = [ 1, 2 ], f._oldVersionDetect = function(e) {
        return r.func(e.toString), r.func(e.matches), [ 1, 0 ];
    };
}
