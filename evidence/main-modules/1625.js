// analysis/pretty/main.js:123429; webpack module 1625
function(e, t, n) {
    var r = n(771), i = e.exports = Object.create(r), o = {
        tagName: "name"
    };
    Object.keys(o).forEach(function(e) {
        var t = o[e];
        Object.defineProperty(i, e, {
            get: function() {
                return this[t] || null;
            },
            set: function(e) {
                return this[t] = e, e;
            }
        });
    });
}
