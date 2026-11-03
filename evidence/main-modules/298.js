// analysis/pretty/main.js:33502; webpack module 298
function(e, t, n) {
    e.exports = {
        read: function(e, t) {
            var n, a, h = e.toString("ascii").split(/[\r\n]+/), p = !1, f = 0;
            for (;f < h.length; ) if ((n = d(h[f++])) && (a = {
                "putty-user-key-file-2": 2,
                "putty-user-key-file-3": 3
            }[n[0].toLowerCase()])) {
                p = !0;
                break;
            }
            if (!p) throw new Error("No PuTTY format first line found");
            var _ = n[1];
            n = d(h[f++]), r.equal(n[0].toLowerCase(), "encryption");
            var m = n[1];
            n = d(h[f++]), r.equal(n[0].toLowerCase(), "comment");
            var g = n[1];
            n = d(h[f++]), r.equal(n[0].toLowerCase(), "public-lines");
            var v = parseInt(n[1], 10);
            if (!isFinite(v) || v < 0 || v > h.length) throw new Error("Invalid public-lines count");
            var y = i.from(h.slice(f, f + v).join(""), "base64"), E = o.algToKeyType(_), b = o.read(y);
            if (b.type !== E) throw new Error("Outer key algorithm mismatch");
            if (h[f += v]) {
                n = d(h[f++]), r.equal(n[0].toLowerCase(), "private-lines");
                var w = parseInt(n[1], 10);
                if (!isFinite(w) || w < 0 || w > h.length) throw new Error("Invalid private-lines count");
                var S = i.from(h.slice(f, f + w).join(""), "base64");
                if ("none" !== m && 3 === a) throw new Error("Encrypted keys arenot supported for PuTTY format version 3");
                if ("aes256-cbc" === m) {
                    if (!t.passphrase) throw new u.KeyEncryptedError(t.filename, "PEM");
                    var T = i.alloc(16, 0), A = l.createDecipheriv("aes-256-cbc", (N = t.passphrase, 
                    I = l.createHash("sha1").update(i.concat([ i.from([ 0, 0, 0, 0 ]), i.from(N) ])).digest(), 
                    R = l.createHash("sha1").update(i.concat([ i.from([ 0, 0, 0, 1 ]), i.from(N) ])).digest(), 
                    i.concat([ I, R ]).slice(0, 32)), T);
                    A.setAutoPadding(!1), S = i.concat([ A.update(S), A.final() ]);
                }
                if ((b = new c(b)).type !== E) throw new Error("Outer key algorithm mismatch");
                var O, C = new s({
                    buffer: S
                });
                if ("ssh-dss" === _) O = [ {
                    name: "x",
                    data: C.readBuffer()
                } ]; else if ("ssh-rsa" === _) O = [ {
                    name: "d",
                    data: C.readBuffer()
                }, {
                    name: "p",
                    data: C.readBuffer()
                }, {
                    name: "q",
                    data: C.readBuffer()
                }, {
                    name: "iqmp",
                    data: C.readBuffer()
                } ]; else if (_.match(/^ecdsa-sha2-nistp/)) O = [ {
                    name: "d",
                    data: C.readBuffer()
                } ]; else {
                    if ("ssh-ed25519" !== _) throw new Error("Unsupported PPK key type: " + _);
                    O = [ {
                        name: "k",
                        data: C.readBuffer()
                    } ];
                }
                b = new c({
                    type: b.type,
                    parts: b.parts.concat(O)
                });
            }
            var N, I, R;
            return b.comment = g, b;
        },
        write: function(e, t) {
            if (r.object(e), !a.isKey(e)) throw new Error("Must be a public key");
            var n = o.keyTypeToAlg(e), s = o.write(e), l = e.comment || "", c = function(e, t) {
                var n = [], r = 0;
                for (;r < e.length; ) n.push(e.slice(r, r + 64)), r += 64;
                return n;
            }(s.toString("base64"));
            return c.unshift("Public-Lines: " + c.length), c.unshift("Comment: " + l), c.unshift("Encryption: none"), 
            c.unshift("PuTTY-User-Key-File-2: " + n), i.from(c.join("\n") + "\n");
        }
    };
    var r = n(21), i = n(17).Buffer, o = n(92), a = n(33), s = n(129), l = n(7), c = n(34), u = n(69);
    function d(e) {
        var t = e.indexOf(":");
        if (-1 === t) return null;
        var n = e.slice(0, t);
        for (++t; " " === e[t]; ) ++t;
        return [ n, e.slice(t) ];
    }
}
