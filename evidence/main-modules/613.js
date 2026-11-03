// analysis/pretty/main.js:57252; webpack module 613
function(e, t) {
    e.exports = function(e, t) {
        var n = !Array.isArray(e), r = {
            index: 0,
            keyedList: n || t ? Object.keys(e) : null,
            jobs: {},
            results: n ? {} : [],
            size: n ? Object.keys(e).length : e.length
        };
        t && r.keyedList.sort(n ? t : function(n, r) {
            return t(e[n], e[r]);
        });
        return r;
    };
}
