// analysis/pretty/main.js:87938; webpack module 1086
function(e, t, n) {
    var r = n(593), i = Object.create(null), o = n(280);
    function a(e) {
        for (var t = e.length, n = [], r = 0; r < t; r++) n[r] = e[r];
        return n;
    }
    e.exports = r(function(e, t) {
        return i[e] ? (i[e].push(t), null) : (i[e] = [ t ], function(e) {
            return o(function t() {
                var n = i[e], r = n.length, o = a(arguments);
                try {
                    for (var s = 0; s < r; s++) n[s].apply(null, o);
                } finally {
                    n.length > r ? (n.splice(0, r), process.nextTick(function() {
                        t.apply(null, o);
                    })) : delete i[e];
                }
            });
        }(e));
    });
}
