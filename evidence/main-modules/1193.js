// analysis/pretty/main.js:94274; webpack module 1193
function(e, t, n) {
    var r = n(21), i = n(7), o = n(292), a = n(213), s = (a.HASH_ALGOS, a.PK_ALGOS, 
    a.InvalidAlgorithmError, a.HttpSignatureError, a.validateAlgorithm);
    e.exports = {
        verifySignature: function(e, t) {
            r.object(e, "parsedSignature"), ("string" == typeof t || Buffer.isBuffer(t)) && (t = o.parseKey(t)), 
            r.ok(o.Key.isKey(t, [ 1, 1 ]), "pubkey must be a sshpk.Key");
            var n = s(e.algorithm);
            if ("hmac" === n[0] || n[0] !== t.type) return !1;
            var i = t.createVerify(n[1]);
            return i.update(e.signingString), i.verify(e.params.signature, "base64");
        },
        verifyHMAC: function(e, t) {
            r.object(e, "parsedHMAC"), r.string(t, "secret");
            var n = s(e.algorithm);
            if ("hmac" !== n[0]) return !1;
            var o = n[1].toUpperCase(), a = i.createHmac(o, t);
            a.update(e.signingString);
            var l = i.createHmac(o, t);
            l.update(a.digest()), l = l.digest();
            var c = i.createHmac(o, t);
            return c.update(new Buffer(e.params.signature, "base64")), c = c.digest(), "string" == typeof l ? l === c : Buffer.isBuffer(l) && !l.equals ? l.toString("binary") === c.toString("binary") : l.equals(c);
        }
    };
}
