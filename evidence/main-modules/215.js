// analysis/pretty/main.js:27149; webpack module 215
function(e, t, n) {
    e.exports = {
        read: function(e, t) {
            return c.read(e, t);
        },
        readSSHPrivate: function(e, t, l) {
            var c = (t = new d({
                buffer: t
            })).readCString();
            i.strictEqual(c, "openssh-key-v1", "bad magic string");
            var p = t.readString(), f = t.readString(), _ = t.readBuffer();
            if (1 !== t.readInt()) throw new Error("OpenSSH-format key file contains multiple keys: this is unsupported.");
            var m = t.readBuffer();
            if ("public" === e) return i.ok(t.atEnd(), "excess bytes left after key"), u.read(m);
            var g = t.readBuffer();
            i.ok(t.atEnd(), "excess bytes left after key");
            var v = new d({
                buffer: _
            });
            switch (f) {
              case "none":
                if ("none" !== p) throw new Error('OpenSSH-format key uses KDF "none" but specifies a cipher other than "none"');
                break;

              case "bcrypt":
                var y = v.readBuffer(), E = v.readInt(), b = a.opensshCipherInfo(p);
                if (void 0 === r && (r = n(631)), "string" == typeof l.passphrase && (l.passphrase = o.from(l.passphrase, "utf-8")), 
                !o.isBuffer(l.passphrase)) throw new h.KeyEncryptedError(l.filename, "OpenSSH");
                var w = new Uint8Array(l.passphrase), S = new Uint8Array(y), T = new Uint8Array(b.keySize + b.blockSize);
                if (0 !== r.pbkdf(w, w.length, S, S.length, T, T.length, E)) throw new Error("bcrypt_pbkdf function returned failure, parameters invalid");
                var A = (T = o.from(T)).slice(0, b.keySize), O = T.slice(b.keySize, b.keySize + b.blockSize), C = s.createDecipheriv(b.opensslName, A, O);
                C.setAutoPadding(!1);
                var N, I = [];
                for (C.once("error", function(e) {
                    if (-1 !== e.toString().indexOf("bad decrypt")) throw new Error("Incorrect passphrase supplied, could not decrypt key");
                    throw e;
                }), C.write(g), C.end(); null !== (N = C.read()); ) I.push(N);
                g = o.concat(I);
                break;

              default:
                throw new Error('OpenSSH-format key uses unknown KDF "' + f + '"');
            }
            var R = (t = new d({
                buffer: g
            })).readInt(), D = t.readInt();
            if (R !== D) throw new Error("Incorrect passphrase supplied, could not decrypt key");
            var L = {}, k = u.readInternal(L, "private", t.remainder());
            t.skip(L.consumed);
            var M = t.readString();
            return k.comment = M, k;
        },
        write: function(e, t) {
            var c;
            c = l.isPrivateKey(e) ? e.toPublic() : e;
            var u, h, p = "none", f = "none", _ = o.alloc(0), m = {
                blockSize: 8
            };
            void 0 !== t && ("string" == typeof (u = t.passphrase) && (u = o.from(u, "utf-8")), 
            void 0 !== u && (i.buffer(u, "options.passphrase"), i.optionalString(t.cipher, "options.cipher"), 
            void 0 === (p = t.cipher) && (p = "aes128-ctr"), m = a.opensshCipherInfo(p), f = "bcrypt"));
            if (l.isPrivateKey(e)) {
                h = new d({});
                var g = s.randomBytes(4).readUInt32BE(0);
                h.writeInt(g), h.writeInt(g), h.write(e.toBuffer("rfc4253")), h.writeString(e.comment || "");
                for (var v = 1; h._offset % m.blockSize != 0; ) h.writeChar(v++);
                h = h.toBuffer();
            }
            switch (f) {
              case "none":
                break;

              case "bcrypt":
                var y = s.randomBytes(16), E = new d({});
                E.writeBuffer(y), E.writeInt(16), _ = E.toBuffer(), void 0 === r && (r = n(631));
                var b = new Uint8Array(u), w = new Uint8Array(y), S = new Uint8Array(m.keySize + m.blockSize);
                if (0 !== r.pbkdf(b, b.length, w, w.length, S, S.length, 16)) throw new Error("bcrypt_pbkdf function returned failure, parameters invalid");
                var T = (S = o.from(S)).slice(0, m.keySize), A = S.slice(m.keySize, m.keySize + m.blockSize), O = s.createCipheriv(m.opensslName, T, A);
                O.setAutoPadding(!1);
                var C, N = [];
                for (O.once("error", function(e) {
                    throw e;
                }), O.write(h), O.end(); null !== (C = O.read()); ) N.push(C);
                h = o.concat(N);
                break;

              default:
                throw new Error("Unsupported kdf " + f);
            }
            var I, R = new d({});
            R.writeCString("openssh-key-v1"), R.writeString(p), R.writeString(f), R.writeBuffer(_), 
            R.writeInt(1), R.writeBuffer(c.toBuffer("rfc4253")), h && R.writeBuffer(h);
            R = R.toBuffer(), I = l.isPrivateKey(e) ? "OPENSSH PRIVATE KEY" : "OPENSSH PUBLIC KEY";
            var D = R.toString("base64"), L = D.length + D.length / 70 + 18 + 16 + 2 * I.length + 10;
            R = o.alloc(L);
            var k = 0;
            k += R.write("-----BEGIN " + I + "-----\n", k);
            for (var M = 0; M < D.length; ) {
                var P = M + 70;
                P > D.length && (P = D.length), k += R.write(D.slice(M, P), k), R[k++] = 10, M = P;
            }
            return k += R.write("-----END " + I + "-----\n", k), R.slice(0, k);
        }
    };
    var r, i = n(21), o = (n(78), n(17).Buffer), a = (n(42), n(35)), s = n(7), l = (n(33), 
    n(34)), c = n(91), u = n(92), d = n(129), h = n(69);
}
