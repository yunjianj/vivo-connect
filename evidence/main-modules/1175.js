// analysis/pretty/main.js:92471; webpack module 1175
function(e, t) {
    function n(e, t) {
        var n = [], r = [];
        return null == t && (t = function(e, t) {
            return n[0] === t ? "[Circular ~]" : "[Circular ~." + r.slice(0, n.indexOf(t)).join(".") + "]";
        }), function(i, o) {
            if (n.length > 0) {
                var a = n.indexOf(this);
                ~a ? n.splice(a + 1) : n.push(this), ~a ? r.splice(a, 1 / 0, i) : r.push(i), ~n.indexOf(o) && (o = t.call(this, i, o));
            } else n.push(o);
            return null == e ? o : e.call(this, i, o);
        };
    }
    (e.exports = function(e, t, r, i) {
        return JSON.stringify(e, n(t, i), r);
    }).getSerialize = n;
}
