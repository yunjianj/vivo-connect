// analysis/pretty/main.js:122137; webpack module 1590
function(e, t, n) {
    "use strict";
    var r = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
    var i = {
        root: r,
        width: /\swidth=(['"])([^%]+?)\1/,
        height: /\sheight=(['"])([^%]+?)\1/,
        viewbox: /\sviewBox=(['"])(.+?)\1/
    }, o = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        m: 96 / 2.54 * 100,
        pt: 96 / 72,
        pc: 96 / 72 / 12,
        em: 16,
        ex: 8
    };
    function a(e) {
        var t = /([0-9.]+)([a-z]*)/.exec(e);
        if (t) return Math.round(parseFloat(t[1]) * (o[t[2]] || 1));
    }
    function s(e) {
        var t = e.split(" ");
        return {
            width: a(t[2]),
            height: a(t[3])
        };
    }
    e.exports = {
        detect: function(e) {
            return r.test(e);
        },
        calculate: function(e) {
            var t = e.toString("utf8").match(i.root);
            if (t) {
                var n = function(e) {
                    var t = e.match(i.width), n = e.match(i.height), r = e.match(i.viewbox);
                    return {
                        width: t && a(t[2]),
                        height: n && a(n[2]),
                        viewbox: r && s(r[2])
                    };
                }(t[0]);
                if (n.width && n.height) return function(e) {
                    return {
                        width: e.width,
                        height: e.height
                    };
                }(n);
                if (n.viewbox) return function(e) {
                    var t = e.viewbox.width / e.viewbox.height;
                    return e.width ? {
                        width: e.width,
                        height: Math.floor(e.width / t)
                    } : e.height ? {
                        width: Math.floor(e.height * t),
                        height: e.height
                    } : {
                        width: e.viewbox.width,
                        height: e.viewbox.height
                    };
                }(n);
            }
            throw new TypeError("invalid svg");
        }
    };
}
