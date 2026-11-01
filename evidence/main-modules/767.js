// analysis/pretty/main.js:70259; webpack module 767
function(e, t, n) {
    "use strict";
    var r = n(1619), i = n(244), o = function(t) {
        return function(t) {
            var n = e.exports.codeBlocks;
            return Object.keys(n).forEach(e => {
                var r = new RegExp(n[e].start + "((.|\\s)*?)" + n[e].end, "g");
                t = t.replace(r, function(t, r) {
                    return "\x3c!--" + e + " " + n[e].start + r + n[e].end + " --\x3e";
                });
            }), t;
        }(t);
    }, a = function(t) {
        return function(t) {
            var n = e.exports.codeBlocks;
            return Object.keys(n).forEach(e => {
                var r = new RegExp("\x3c!--" + e + " " + n[e].start + "((.|\\s)*?)" + n[e].end + " --\x3e", "g");
                t = t.replace(r, function(t, r) {
                    return n[e].start + r + n[e].end;
                });
            }), t;
        }(t);
    };
    e.exports = function(e, t, n, s) {
        var l = function(e, t) {
            return t = i.extend({
                decodeEntities: !1
            }, t || {}), e = o(e), r.load(e, t);
        }(e, t), c = [ l ];
        c.push.apply(c, s);
        var u = n.apply(void 0, c) || l;
        return t && t.xmlMode ? u.xml() : a(u.html());
    }, e.exports.codeBlocks = {
        EJS: {
            start: "<%",
            end: "%>"
        },
        HBS: {
            start: "{{",
            end: "}}"
        }
    };
}
