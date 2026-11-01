// analysis/pretty/main.js:124665; webpack module 1661
function(e, t, n) {
    e.exports = function(e) {
        for (var t = e.map(o), n = 1; n < e.length; n++) {
            var r = t[n];
            if (!(r < 0)) for (var i = n - 1; i >= 0 && r < t[i]; i--) {
                var a = e[i + 1];
                e[i + 1] = e[i], e[i] = a, t[i + 1] = t[i], t[i] = r;
            }
        }
    };
    var r = n(785), i = {
        __proto__: null,
        exists: 10,
        equals: 8,
        not: 7,
        start: 6,
        end: 6,
        any: 5,
        hyphen: 4,
        element: 4
    };
    function o(e) {
        var t = r[e.type];
        if (t === r.attribute) (t = i[e.action]) === i.equals && "id" === e.name && (t = 9), 
        e.ignoreCase && (t >>= 1); else if (t === r.pseudo) if (e.data) if ("has" === e.name || "contains" === e.name) t = 0; else if ("matches" === e.name || "not" === e.name) {
            t = 0;
            for (var n = 0; n < e.data.length; n++) if (1 === e.data[n].length) {
                var a = o(e.data[n][0]);
                if (0 === a) {
                    t = 0;
                    break;
                }
                a > t && (t = a);
            }
            e.data.length > 1 && t > 0 && (t -= 1);
        } else t = 1; else t = 3;
        return t;
    }
}
