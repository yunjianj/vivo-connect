// analysis/pretty/main.js:123649; webpack module 1634
function(e, t) {
    var n = t.getChildren = function(e) {
        return e.children;
    }, r = t.getParent = function(e) {
        return e.parent;
    };
    t.getSiblings = function(e) {
        var t = r(e);
        return t ? n(t) : [ e ];
    }, t.getAttributeValue = function(e, t) {
        return e.attribs && e.attribs[t];
    }, t.hasAttrib = function(e, t) {
        return !!e.attribs && hasOwnProperty.call(e.attribs, t);
    }, t.getName = function(e) {
        return e.name;
    };
}
