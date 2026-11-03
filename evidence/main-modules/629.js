// analysis/pretty/main.js:57596; webpack module 629
function(e, t, n) {
    e.exports = {
        Verifier: c,
        Signer: u
    };
    var r = n(152), i = n(9), o = n(5), a = n(21), s = n(17).Buffer, l = n(77);
    function c(e, t) {
        if ("sha512" !== t.toLowerCase()) throw new Error("ED25519 only supports the use of SHA-512 hashes");
        this.key = e, this.chunks = [], i.Writable.call(this, {});
    }
    function u(e, t) {
        if ("sha512" !== t.toLowerCase()) throw new Error("ED25519 only supports the use of SHA-512 hashes");
        this.key = e, this.chunks = [], i.Writable.call(this, {});
    }
    o.inherits(c, i.Writable), c.prototype._write = function(e, t, n) {
        this.chunks.push(e), n();
    }, c.prototype.update = function(e) {
        "string" == typeof e && (e = s.from(e, "binary")), this.chunks.push(e);
    }, c.prototype.verify = function(e, t) {
        var n;
        if (l.isSignature(e, [ 2, 0 ])) {
            if ("ed25519" !== e.type) return !1;
            n = e.toBuffer("raw");
        } else if ("string" == typeof e) n = s.from(e, "base64"); else if (l.isSignature(e, [ 1, 0 ])) throw new Error("signature was created by too old a version of sshpk and cannot be verified");
        return a.buffer(n), r.sign.detached.verify(new Uint8Array(s.concat(this.chunks)), new Uint8Array(n), new Uint8Array(this.key.part.A.data));
    }, o.inherits(u, i.Writable), u.prototype._write = function(e, t, n) {
        this.chunks.push(e), n();
    }, u.prototype.update = function(e) {
        "string" == typeof e && (e = s.from(e, "binary")), this.chunks.push(e);
    }, u.prototype.sign = function() {
        var e = r.sign.detached(new Uint8Array(s.concat(this.chunks)), new Uint8Array(s.concat([ this.key.part.k.data, this.key.part.A.data ]))), t = s.from(e), n = l.parse(t, "ed25519", "raw");
        return n.hashAlgorithm = "sha512", n;
    };
}
