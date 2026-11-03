// analysis/pretty/main.js:81315; webpack module 990
function(e, t, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", i = "~!@#$%^*()_+-=[]{}|;:,./<>?";
    function o(e, t) {
        e || (e = 8), t || (t = {});
        var n = "", o = "";
        for (!0 === t ? n = "0123456789" + r + i : "string" == typeof t ? n = t : (!1 !== t.numbers && (n += "string" == typeof t.numbers ? t.numbers : "0123456789"), 
        !1 !== t.letters && (n += "string" == typeof t.letters ? t.letters : r), t.specials && (n += "string" == typeof t.specials ? t.specials : i)); e > 0; ) e--, 
        o += n[Math.floor(Math.random() * n.length)];
        return o;
    }
    e.exports = o.default = o;
}
