// analysis/pretty/main.js:127383; webpack module 1669
function(e, t, n) {
    var r = n(171).domEach, i = {
        pick: n(1670)
    }, o = Object.prototype.toString;
    function a(e, t, n, r) {
        if ("string" == typeof t) {
            var i = s(e);
            "function" == typeof n && (n = n.call(e, r, i[t])), "" === n ? delete i[t] : null != n && (i[t] = n), 
            e.attribs.style = (o = i, Object.keys(o || {}).reduce(function(e, t) {
                return e + (e ? " " : "") + t + ": " + o[t] + ";";
            }, ""));
        } else "object" == typeof t && Object.keys(t).forEach(function(n) {
            a(e, n, t[n]);
        });
        var o;
    }
    function s(e, t) {
        var n = function(e) {
            return (e = (e || "").trim()) ? e.split(";").reduce(function(e, t) {
                var n = t.indexOf(":");
                return n < 1 || n === t.length - 1 || (e[t.slice(0, n).trim()] = t.slice(n + 1).trim()), 
                e;
            }, {}) : {};
        }(e.attribs.style);
        return "string" == typeof t ? n[t] : Array.isArray(t) ? i.pick(n, t) : n;
    }
    t.css = function(e, t) {
        return 2 === arguments.length || "[object Object]" === o.call(e) ? r(this, function(n, r) {
            a(r, e, t, n);
        }) : s(this[0], e);
    };
}
