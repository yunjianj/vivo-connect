// analysis/pretty/main.js:124159; webpack module 1649
function(e, t, n) {
    var r = n(82), i = n(773), o = r.isTag;
    e.exports = {
        getInnerHTML: function(e, t) {
            return e.children ? e.children.map(function(e) {
                return i(e, t);
            }).join("") : "";
        },
        getOuterHTML: i,
        getText: function e(t) {
            return Array.isArray(t) ? t.map(e).join("") : o(t) || t.type === r.CDATA ? e(t.children) : t.type === r.Text ? t.data : "";
        }
    };
}
