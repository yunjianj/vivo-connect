// analysis/pretty/main.js:26929; webpack module 213
function(e, t, n) {
    var r = n(21), i = n(292), o = n(5), a = {
        sha1: !0,
        sha256: !0,
        sha512: !0
    }, s = {
        rsa: !0,
        dsa: !0,
        ecdsa: !0
    };
    function l(e, t) {
        Error.captureStackTrace && Error.captureStackTrace(this, t || l), this.message = e, 
        this.name = t.name;
    }
    function c(e) {
        l.call(this, e, c);
    }
    o.inherits(l, Error), o.inherits(c, l), e.exports = {
        HASH_ALGOS: a,
        PK_ALGOS: s,
        HttpSignatureError: l,
        InvalidAlgorithmError: c,
        validateAlgorithm: function(e) {
            var t = e.toLowerCase().split("-");
            if (2 !== t.length) throw new c(t[0].toUpperCase() + " is not a valid algorithm");
            if ("hmac" !== t[0] && !s[t[0]]) throw new c(t[0].toUpperCase() + " type keys are not supported");
            if (!a[t[1]]) throw new c(t[1].toUpperCase() + " is not a supported hash algorithm");
            return t;
        },
        sshKeyToPEM: function(e) {
            return r.string(e, "ssh_key"), i.parseKey(e, "ssh").toString("pem");
        },
        fingerprint: function(e) {
            return r.string(e, "ssh_key"), i.parseKey(e, "ssh").fingerprint("md5").toString("hex");
        },
        pemToRsaSSHKey: function(e, t) {
            r.equal("string", typeof e, "typeof pem");
            var n = i.parseKey(e, "pem");
            return n.comment = t, n.toString("ssh");
        }
    };
}
