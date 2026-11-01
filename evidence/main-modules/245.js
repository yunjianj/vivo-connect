// analysis/pretty/main.js:30140; webpack module 245
function(e, t, n) {
    var r = n(170);
    (t = e.exports = function(e, n) {
        var r = t.evaluate(e, n), i = t.evaluate("<root></root>", n)[0];
        return i.type = "root", t.update(r, i), i;
    }).evaluate = function(e, t) {
        return "string" == typeof e || Buffer.isBuffer(e) ? r.parseDOM(e, t) : e;
    }, t.update = function(e, t) {
        Array.isArray(e) || (e = [ e ]), t ? t.children = e : t = null;
        for (var n = 0; n < e.length; n++) {
            var r = e[n], i = r.parent || r.root, o = i && i.children;
            o && o !== e && (o.splice(o.indexOf(r), 1), r.prev && (r.prev.next = r.next), r.next && (r.next.prev = r.prev)), 
            t ? (r.prev = e[n - 1] || null, r.next = e[n + 1] || null) : r.prev = r.next = null, 
            t && "root" === t.type ? (r.root = t, r.parent = null) : (r.root = null, r.parent = t);
        }
        return t;
    };
}
