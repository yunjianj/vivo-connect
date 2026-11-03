// analysis/pretty/main.js:15831; webpack module 92
function(e, t, n) {
    e.exports = {
        read: h.bind(void 0, !1, void 0),
        readType: h.bind(void 0, !1),
        write: function(e, t) {
            r.object(e);
            var n, s = d(e), u = o.info[e.type];
            l.isPrivateKey(e) && (u = o.privInfo[e.type]);
            var h = u.parts, p = new c({});
            for (p.writeString(s), n = 0; n < h.length; ++n) {
                var f = e.part[h[n]].data;
                !1 !== u.normalize && (f = "ed25519" === e.type ? a.zeroPadToLength(f, 32) : a.mpNormalize(f)), 
                "ed25519" === e.type && "k" === h[n] && (f = i.concat([ f, e.part.A.data ])), p.writeBuffer(f);
            }
            return p.toBuffer();
        },
        readPartial: h.bind(void 0, !0),
        readInternal: h,
        keyTypeToAlg: d,
        algToKeyType: u
    };
    var r = n(21), i = n(17).Buffer, o = n(42), a = n(35), s = n(33), l = n(34), c = n(129);
    function u(e) {
        if (r.string(e), "ssh-dss" === e) return "dsa";
        if ("ssh-rsa" === e) return "rsa";
        if ("ssh-ed25519" === e) return "ed25519";
        if ("ssh-curve25519" === e) return "curve25519";
        if (e.match(/^ecdsa-sha2-/)) return "ecdsa";
        throw new Error("Unknown algorithm " + e);
    }
    function d(e) {
        if (r.object(e), "dsa" === e.type) return "ssh-dss";
        if ("rsa" === e.type) return "ssh-rsa";
        if ("ed25519" === e.type) return "ssh-ed25519";
        if ("curve25519" === e.type) return "ssh-curve25519";
        if ("ecdsa" === e.type) return "ecdsa-sha2-" + e.part.curve.data.toString();
        throw new Error("Unknown key type " + e.type);
    }
    function h(e, t, n, d) {
        "string" == typeof n && (n = i.from(n)), r.buffer(n, "buf");
        var h = {}, p = h.parts = [], f = new c({
            buffer: n
        }), _ = f.readString();
        r.ok(!f.atEnd(), "key must have at least one part"), h.type = u(_);
        var m = o.info[h.type].parts.length;
        for (t && "private" === t && (m = o.privInfo[h.type].parts.length); !f.atEnd() && p.length < m; ) p.push(f.readPart());
        for (;!e && !f.atEnd(); ) p.push(f.readPart());
        r.ok(p.length >= 1, "key must have at least one part"), r.ok(e || f.atEnd(), "leftover bytes at end of key");
        var g = s, v = o.info[h.type];
        if ("private" !== t && v.parts.length === p.length || (v = o.privInfo[h.type], g = l), 
        r.strictEqual(v.parts.length, p.length), "ecdsa" === h.type) {
            var y = /^ecdsa-sha2-(.+)$/.exec(_);
            r.ok(null !== y), r.strictEqual(y[1], p[0].data.toString());
        }
        for (var E = !0, b = 0; b < v.parts.length; ++b) {
            var w, S = p[b];
            if (S.name = v.parts[b], "ed25519" === h.type && "k" === S.name && (S.data = S.data.slice(0, 32)), 
            "curve" !== S.name && !1 !== v.normalize) (w = "ed25519" === h.type ? a.zeroPadToLength(S.data, 32) : a.mpNormalize(S.data)).toString("binary") !== S.data.toString("binary") && (S.data = w, 
            E = !1);
        }
        return E && (h._rfc4253Cache = f.toBuffer()), e && "object" == typeof e && (e.remainder = f.remainder(), 
        e.consumed = f._offset), new g(h);
    }
}
