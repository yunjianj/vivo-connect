// analysis/pretty/main.js:123665; webpack module 1635
function(e, t) {
    t.removeElement = function(e) {
        if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
            var t = e.parent.children;
            t.splice(t.lastIndexOf(e), 1);
        }
    }, t.replaceElement = function(e, t) {
        var n = t.prev = e.prev;
        n && (n.next = t);
        var r = t.next = e.next;
        r && (r.prev = t);
        var i = t.parent = e.parent;
        if (i) {
            var o = i.children;
            o[o.lastIndexOf(e)] = t;
        }
    }, t.appendChild = function(e, t) {
        if (t.parent = e, 1 !== e.children.push(t)) {
            var n = e.children[e.children.length - 2];
            n.next = t, t.prev = n, t.next = null;
        }
    }, t.append = function(e, t) {
        var n = e.parent, r = e.next;
        if (t.next = r, t.prev = e, e.next = t, t.parent = n, r) {
            if (r.prev = t, n) {
                var i = n.children;
                i.splice(i.lastIndexOf(r), 0, t);
            }
        } else n && n.children.push(t);
    }, t.prepend = function(e, t) {
        var n = e.parent;
        if (n) {
            var r = n.children;
            r.splice(r.lastIndexOf(e), 0, t);
        }
        e.prev && (e.prev.next = t), t.parent = n, t.prev = e.prev, t.next = e, e.prev = t;
    };
}
