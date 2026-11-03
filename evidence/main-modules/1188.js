// analysis/pretty/main.js:93738; webpack module 1188
function(e, t, n) {
    var r = n(633);
    e.exports = {
        read: function(e, t) {
            "string" != typeof e && (i.buffer(e, "buf"), e = e.toString("ascii"));
            var n, a, s = e.trim().split(/[\r\n]+/g), l = -1;
            for (;!n && l < s.length; ) n = s[++l].match(/[-]+[ ]*BEGIN CERTIFICATE[ ]*[-]+/);
            i.ok(n, "invalid PEM header");
            var c = s.length;
            for (;!a && c > 0; ) a = s[--c].match(/[-]+[ ]*END CERTIFICATE[ ]*[-]+/);
            i.ok(a, "invalid PEM footer"), s = s.slice(l, c + 1);
            var u = {};
            for (;s = s.slice(1), n = s[0].match(/^([A-Za-z0-9-]+): (.+)$/); ) u[n[1].toLowerCase()] = n[2];
            return s = s.slice(0, -1).join(""), e = o.from(s, "base64"), r.read(e, t);
        },
        verify: r.verify,
        sign: r.sign,
        write: function(e, t) {
            var n = r.write(e, t), i = n.toString("base64"), a = i.length + i.length / 64 + 18 + 16 + 2 * "CERTIFICATE".length + 10, s = o.alloc(a), l = 0;
            l += s.write("-----BEGIN CERTIFICATE-----\n", l);
            for (var c = 0; c < i.length; ) {
                var u = c + 64;
                u > i.length && (u = i.length), l += s.write(i.slice(c, u), l), s[l++] = 10, c = u;
            }
            return l += s.write("-----END CERTIFICATE-----\n", l), s.slice(0, l);
        }
    };
    var i = n(21), o = (n(78), n(17).Buffer);
    n(42), n(35), n(33), n(34), n(91), n(155), n(77), n(154);
}
