// analysis/pretty/main.js:123112; webpack module 1612
function(e, t, n) {
    "use strict";
    function r(e) {
        if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
            var t = e.parent.children;
            t.splice(t.lastIndexOf(e), 1);
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.prepend = t.prependChild = t.append = t.appendChild = t.replaceElement = t.removeElement = void 0, 
    t.removeElement = r, t.replaceElement = function(e, t) {
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
        if (r(t), t.next = null, t.parent = e, e.children.push(t) > 1) {
            var n = e.children[e.children.length - 2];
            n.next = t, t.prev = n;
        } else t.prev = null;
    }, t.append = function(e, t) {
        r(t);
        var n = e.parent, i = e.next;
        if (t.next = i, t.prev = e, e.next = t, t.parent = n, i) {
            if (i.prev = t, n) {
                var o = n.children;
                o.splice(o.lastIndexOf(i), 0, t);
            }
        } else n && n.children.push(t);
    }, t.prependChild = function(e, t) {
        if (r(t), t.parent = e, t.prev = null, 1 !== e.children.unshift(t)) {
            var n = e.children[1];
            n.prev = t, t.next = n;
        } else t.next = null;
    }, t.prepend = function(e, t) {
        r(t);
        var n = e.parent;
        if (n) {
            var i = n.children;
            i.splice(i.indexOf(e), 0, t);
        }
        e.prev && (e.prev.next = t), t.parent = n, t.prev = e.prev, t.next = e, e.prev = t;
    };
}
