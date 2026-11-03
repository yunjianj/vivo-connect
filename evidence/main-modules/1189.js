// analysis/pretty/main.js:93767; webpack module 1189
function(e, t, n) {
    var r = n(21), i = n(7), o = (n(39), n(5)), a = n(292), s = n(1190), l = n(213), c = n(5).format, u = l.HASH_ALGOS, d = l.PK_ALGOS, h = l.InvalidAlgorithmError, p = l.HttpSignatureError, f = l.validateAlgorithm, _ = 'Signature keyId="%s",algorithm="%s",headers="%s",signature="%s"';
    function m(e) {
        p.call(this, e, m);
    }
    function g(e) {
        p.call(this, e, g);
    }
    function v(e) {
        r.object(e, "options");
        var t = [];
        if (void 0 !== e.algorithm && (r.string(e.algorithm, "options.algorithm"), t = f(e.algorithm)), 
        this.rs_alg = t, void 0 !== e.sign) r.func(e.sign, "options.sign"), this.rs_signFunc = e.sign; else if ("hmac" === t[0] && void 0 !== e.key) {
            if (r.string(e.keyId, "options.keyId"), this.rs_keyId = e.keyId, "string" != typeof e.key && !Buffer.isBuffer(e.key)) throw new TypeError("options.key for HMAC must be a string or Buffer");
            this.rs_signer = i.createHmac(t[1].toUpperCase(), e.key), this.rs_signer.sign = function() {
                var e = this.digest("base64");
                return {
                    hashAlgorithm: t[1],
                    toString: function() {
                        return e;
                    }
                };
            };
        } else {
            if (void 0 === e.key) throw new TypeError("options.sign (func) or options.key is required");
            var n = e.key;
            if (("string" == typeof n || Buffer.isBuffer(n)) && (n = a.parsePrivateKey(n)), 
            r.ok(a.PrivateKey.isPrivateKey(n, [ 1, 2 ]), "options.key must be a sshpk.PrivateKey"), 
            this.rs_key = n, r.string(e.keyId, "options.keyId"), this.rs_keyId = e.keyId, !d[n.type]) throw new h(n.type.toUpperCase() + " type keys are not supported");
            if (void 0 !== t[0] && n.type !== t[0]) throw new h("options.key must be a " + t[0].toUpperCase() + " key, was given a " + n.type.toUpperCase() + " key instead");
            this.rs_signer = n.createSign(t[1]);
        }
        this.rs_headers = [], this.rs_lines = [];
    }
    o.inherits(m, p), o.inherits(g, p), v.prototype.writeHeader = function(e, t) {
        if (r.string(e, "header"), e = e.toLowerCase(), r.string(t, "value"), this.rs_headers.push(e), 
        this.rs_signFunc) this.rs_lines.push(e + ": " + t); else {
            var n = e + ": " + t;
            this.rs_headers.length > 0 && (n = "\n" + n), this.rs_signer.update(n);
        }
        return t;
    }, v.prototype.writeDateHeader = function() {
        return this.writeHeader("date", s.rfc1123(new Date));
    }, v.prototype.writeTarget = function(e, t) {
        r.string(e, "method"), r.string(t, "path"), e = e.toLowerCase(), this.writeHeader("(request-target)", e + " " + t);
    }, v.prototype.sign = function(e) {
        if (r.func(e, "callback"), this.rs_headers.length < 1) throw new Error("At least one header must be signed");
        var t, n;
        if (this.rs_signFunc) {
            var i = this.rs_lines.join("\n"), o = this;
            this.rs_signFunc(i, function(i, a) {
                if (i) e(i); else {
                    try {
                        r.object(a, "signature"), r.string(a.keyId, "signature.keyId"), r.string(a.algorithm, "signature.algorithm"), 
                        r.string(a.signature, "signature.signature"), t = f(a.algorithm), n = c(_, a.keyId, a.algorithm, o.rs_headers.join(" "), a.signature);
                    } catch (t) {
                        return void e(t);
                    }
                    e(null, n);
                }
            });
        } else {
            try {
                var a = this.rs_signer.sign();
            } catch (t) {
                return void e(t);
            }
            t = (this.rs_alg[0] || this.rs_key.type) + "-" + a.hashAlgorithm;
            var s = a.toString();
            n = c(_, this.rs_keyId, t, this.rs_headers.join(" "), s), e(null, n);
        }
    }, e.exports = {
        isSigner: function(e) {
            return "object" == typeof e && e instanceof v;
        },
        createSigner: function(e) {
            return new v(e);
        },
        signRequest: function(e, t) {
            r.object(e, "request"), r.object(t, "options"), r.optionalString(t.algorithm, "options.algorithm"), 
            r.string(t.keyId, "options.keyId"), r.optionalArrayOfString(t.headers, "options.headers"), 
            r.optionalString(t.httpVersion, "options.httpVersion"), e.getHeader("Date") || e.setHeader("Date", s.rfc1123(new Date)), 
            t.headers || (t.headers = [ "date" ]), t.httpVersion || (t.httpVersion = "1.1");
            var n, o = [];
            t.algorithm && (t.algorithm = t.algorithm.toLowerCase(), o = f(t.algorithm));
            var l, p = "";
            for (n = 0; n < t.headers.length; n++) {
                if ("string" != typeof t.headers[n]) throw new TypeError("options.headers must be an array of Strings");
                var v = t.headers[n].toLowerCase();
                if ("request-line" === v) {
                    if (t.strict) throw new g("request-line is not a valid header with strict parsing enabled.");
                    p += e.method + " " + e.path + " HTTP/" + t.httpVersion;
                } else if ("(request-target)" === v) p += "(request-target): " + e.method.toLowerCase() + " " + e.path; else {
                    var y = e.getHeader(v);
                    if (void 0 === y || "" === y) throw new m(v + " was not in the request");
                    p += v + ": " + y;
                }
                n + 1 < t.headers.length && (p += "\n");
            }
            if (e.hasOwnProperty("_stringToSign") && (e._stringToSign = p), "hmac" === o[0]) {
                if ("string" != typeof t.key && !Buffer.isBuffer(t.key)) throw new TypeError("options.key must be a string or Buffer");
                var E = i.createHmac(o[1].toUpperCase(), t.key);
                E.update(p), l = E.digest("base64");
            } else {
                var b = t.key;
                if (("string" == typeof b || Buffer.isBuffer(b)) && (b = a.parsePrivateKey(t.key)), 
                r.ok(a.PrivateKey.isPrivateKey(b, [ 1, 2 ]), "options.key must be a sshpk.PrivateKey"), 
                !d[b.type]) throw new h(b.type.toUpperCase() + " type keys are not supported");
                if (void 0 !== o[0] && b.type !== o[0]) throw new h("options.key must be a " + o[0].toUpperCase() + " key, was given a " + b.type.toUpperCase() + " key instead");
                var w = b.createSign(o[1]);
                w.update(p);
                var S = w.sign();
                if (!u[S.hashAlgorithm]) throw new h(S.hashAlgorithm.toUpperCase() + " is not a supported hash algorithm");
                t.algorithm = b.type + "-" + S.hashAlgorithm, l = S.toString(), r.notStrictEqual(l, "", "empty signature produced");
            }
            var T = t.authorizationHeaderName || "Authorization";
            return e.setHeader(T, c(_, t.keyId, t.algorithm, t.headers.join(" "), l)), !0;
        }
    };
}
