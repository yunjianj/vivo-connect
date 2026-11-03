// analysis/pretty/main.js:123079; webpack module 1611
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.prevElementSibling = t.nextElementSibling = t.getName = t.hasAttrib = t.getAttributeValue = t.getSiblings = t.getParent = t.getChildren = void 0;
    var r = n(142), i = [];
    function o(e) {
        var t;
        return null !== (t = e.children) && void 0 !== t ? t : i;
    }
    function a(e) {
        return e.parent || null;
    }
    t.getChildren = o, t.getParent = a, t.getSiblings = function(e) {
        var t = a(e);
        if (null != t) return o(t);
        for (var n = [ e ], r = e.prev, i = e.next; null != r; ) n.unshift(r), r = r.prev;
        for (;null != i; ) n.push(i), i = i.next;
        return n;
    }, t.getAttributeValue = function(e, t) {
        var n;
        return null === (n = e.attribs) || void 0 === n ? void 0 : n[t];
    }, t.hasAttrib = function(e, t) {
        return null != e.attribs && Object.prototype.hasOwnProperty.call(e.attribs, t) && null != e.attribs[t];
    }, t.getName = function(e) {
        return e.name;
    }, t.nextElementSibling = function(e) {
        for (var t = e.next; null !== t && !(0, r.isTag)(t); ) t = t.next;
        return t;
    }, t.prevElementSibling = function(e) {
        for (var t = e.prev; null !== t && !(0, r.isTag)(t); ) t = t.prev;
        return t;
    };
}
