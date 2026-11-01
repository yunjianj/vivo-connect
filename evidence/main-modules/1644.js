// analysis/pretty/main.js:123943; webpack module 1644
function(e, t, n) {
    var r = n(781), i = n(1645), o = n(780), a = n(1646), s = c(o), l = c(r);
    function c(e) {
        var t = Object.keys(e).join("|"), n = h(e), r = new RegExp("&(?:" + (t += "|#[xX][\\da-fA-F]+|#\\d+") + ");", "g");
        return function(e) {
            return String(e).replace(r, n);
        };
    }
    var u = function() {
        for (var e = Object.keys(i).sort(d), t = Object.keys(r).sort(d), n = 0, o = 0; n < t.length; n++) e[o] === t[n] ? (t[n] += ";?", 
        o++) : t[n] += ";";
        var a = new RegExp("&(?:" + t.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), s = h(r);
        function l(e) {
            return ";" !== e.substr(-1) && (e += ";"), s(e);
        }
        return function(e) {
            return String(e).replace(a, l);
        };
    }();
    function d(e, t) {
        return e < t ? 1 : -1;
    }
    function h(e) {
        return function(t) {
            return "#" === t.charAt(1) ? "X" === t.charAt(2) || "x" === t.charAt(2) ? a(parseInt(t.substr(3), 16)) : a(parseInt(t.substr(2), 10)) : e[t.slice(1, -1)];
        };
    }
    e.exports = {
        XML: s,
        HTML: u,
        HTMLStrict: l
    };
}
