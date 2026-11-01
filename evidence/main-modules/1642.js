// analysis/pretty/main.js:123897; webpack module 1642
function(e, t, n) {
    var r = n(1643), i = n(1644);
    t.decode = function(e, t) {
        return (!t || t <= 0 ? i.XML : i.HTML)(e);
    }, t.decodeStrict = function(e, t) {
        return (!t || t <= 0 ? i.XML : i.HTMLStrict)(e);
    }, t.encode = function(e, t) {
        return (!t || t <= 0 ? r.XML : r.HTML)(e);
    }, t.encodeXML = r.XML, t.encodeHTML4 = t.encodeHTML5 = t.encodeHTML = r.HTML, t.decodeXML = t.decodeXMLStrict = i.XML, 
    t.decodeHTML4 = t.decodeHTML5 = t.decodeHTML = i.HTML, t.decodeHTML4Strict = t.decodeHTML5Strict = t.decodeHTMLStrict = i.HTMLStrict, 
    t.escape = r.escape;
}
