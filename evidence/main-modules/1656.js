// analysis/pretty/main.js:124354; webpack module 1656
function(e, t) {
    e.exports = function(e) {
        if ("even" === (e = e.trim().toLowerCase())) return [ 2, 0 ];
        if ("odd" === e) return [ 2, 1 ];
        var t, r = e.match(n);
        if (!r) throw new SyntaxError("n-th rule couldn't be parsed ('" + e + "')");
        return r[1] ? (t = parseInt(r[1], 10), isNaN(t) && (t = "-" === r[1].charAt(0) ? -1 : 1)) : t = 0, 
        [ t, r[3] ? parseInt((r[2] || "") + r[3], 10) : 0 ];
    };
    var n = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;
}
