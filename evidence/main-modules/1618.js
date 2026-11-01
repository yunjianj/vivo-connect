// analysis/pretty/main.js:123396; webpack module 1618
function(e, t, n) {
    "use strict";
    var r = n(767), i = n(1674)(function(e, t) {
        return r(e, {
            xmlMode: t && t.xmlMode
        }, o, [ t ]);
    }), o = function(e, t) {
        return i.juiceDocument(e, t);
    };
    i.inlineContent = function(e, t, n) {
        return r(e, {
            xmlMode: n && n.xmlMode
        }, i.inlineDocument, [ t, n ]);
    }, e.exports = i;
}
