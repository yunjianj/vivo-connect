// analysis/pretty/main.js:57748; webpack module 632
function(e, t, n) {
    e.exports = {
        read: function(e, t) {
            "string" != typeof e && (r.buffer(e, "buf"), e = e.toString("ascii"));
            var n = e.trim().replace(/[\\\r]/g, ""), a = n.match(s);
            a || (a = n.match(l));
            r.ok(a, "key must match regex");
            var c, u = o.algToKeyType(a[1]), d = i.from(a[2], "base64"), h = {};
            if (a[4]) try {
                c = o.read(d);
            } catch (e) {
                a = n.match(l), r.ok(a, "key must match regex"), d = i.from(a[2], "base64"), c = o.readInternal(h, "public", d);
            } else c = o.readInternal(h, "public", d);
            if (r.strictEqual(u, c.type), a[4] && a[4].length > 0) c.comment = a[4]; else if (h.consumed) {
                var p = a[2] + (a[3] ? a[3] : ""), f = 4 * Math.ceil(h.consumed / 3);
                for (p = p.slice(0, f - 2).replace(/[^a-zA-Z0-9+\/=]/g, "") + p.slice(f - 2), h.consumed % 3 > 0 && "=" !== p.slice(f - 1, f) && f--; "=" === p.slice(f, f + 1); ) f++;
                var _ = p.slice(f);
                (_ = _.replace(/[\r\n]/g, " ").replace(/^\s+/, "")).match(/^[a-zA-Z0-9]/) && (c.comment = _);
            }
            return c;
        },
        write: function(e, t) {
            if (r.object(e), !a.isKey(e)) throw new Error("Must be a public key");
            var n = [], s = o.keyTypeToAlg(e);
            n.push(s);
            var l = o.write(e);
            n.push(l.toString("base64")), e.comment && n.push(e.comment);
            return i.from(n.join(" "));
        }
    };
    var r = n(21), i = n(17).Buffer, o = n(92), a = (n(35), n(33)), s = (n(34), n(215), 
    /^([a-z0-9-]+)[ \t]+([a-zA-Z0-9+\/]+[=]*)([ \t]+([^ \t][^\n]*[\n]*)?)?$/), l = /^([a-z0-9-]+)[ \t\n]+([a-zA-Z0-9+\/][a-zA-Z0-9+\/ \t\n=]*)([^a-zA-Z0-9+\/ \t\n=].*)?$/;
}
