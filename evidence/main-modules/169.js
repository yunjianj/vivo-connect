// analysis/pretty/main.js:23804; webpack module 169
function(e, t, n) {
    "use strict";
    var r;
    function i(e) {
        return e.type === r.Tag || e.type === r.Script || e.type === r.Style;
    }
    n.r(t), n.d(t, "ElementType", function() {
        return r;
    }), n.d(t, "isTag", function() {
        return i;
    }), n.d(t, "Root", function() {
        return o;
    }), n.d(t, "Text", function() {
        return a;
    }), n.d(t, "Directive", function() {
        return s;
    }), n.d(t, "Comment", function() {
        return l;
    }), n.d(t, "Script", function() {
        return c;
    }), n.d(t, "Style", function() {
        return u;
    }), n.d(t, "Tag", function() {
        return d;
    }), n.d(t, "CDATA", function() {
        return h;
    }), n.d(t, "Doctype", function() {
        return p;
    }), function(e) {
        e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", 
        e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype";
    }(r || (r = {}));
    const o = r.Root, a = r.Text, s = r.Directive, l = r.Comment, c = r.Script, u = r.Style, d = r.Tag, h = r.CDATA, p = r.Doctype;
}
