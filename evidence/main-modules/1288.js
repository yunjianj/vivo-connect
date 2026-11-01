// analysis/pretty/main.js:99031; webpack module 1288
function(e, t, n) {
    var r;
    try {
        r = n(20);
    } catch (e) {
        r = n(4);
    }
    function i(e, t) {
        var n, r = "\n";
        return "object" == typeof t && null !== t && (t.spaces && (n = t.spaces), t.EOL && (r = t.EOL)), 
        JSON.stringify(e, t ? t.replacer : null, n).replace(/\n/g, r) + r;
    }
    function o(e) {
        return Buffer.isBuffer(e) && (e = e.toString("utf8")), e = e.replace(/^\uFEFF/, "");
    }
    var a = {
        readFile: function(e, t, n) {
            null == n && (n = t, t = {}), "string" == typeof t && (t = {
                encoding: t
            });
            var i = (t = t || {}).fs || r, a = !0;
            "throws" in t && (a = t.throws), i.readFile(e, t, function(r, i) {
                if (r) return n(r);
                var s;
                i = o(i);
                try {
                    s = JSON.parse(i, t ? t.reviver : null);
                } catch (t) {
                    return a ? (t.message = e + ": " + t.message, n(t)) : n(null, null);
                }
                n(null, s);
            });
        },
        readFileSync: function(e, t) {
            "string" == typeof (t = t || {}) && (t = {
                encoding: t
            });
            var n = t.fs || r, i = !0;
            "throws" in t && (i = t.throws);
            try {
                var a = n.readFileSync(e, t);
                return a = o(a), JSON.parse(a, t.reviver);
            } catch (t) {
                if (i) throw t.message = e + ": " + t.message, t;
                return null;
            }
        },
        writeFile: function(e, t, n, o) {
            null == o && (o = n, n = {});
            var a = (n = n || {}).fs || r, s = "";
            try {
                s = i(t, n);
            } catch (e) {
                return void (o && o(e, null));
            }
            a.writeFile(e, s, n, o);
        },
        writeFileSync: function(e, t, n) {
            var o = (n = n || {}).fs || r, a = i(t, n);
            return o.writeFileSync(e, a, n);
        }
    };
    e.exports = a;
}
