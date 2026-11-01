// analysis/pretty/main.js:16663; webpack module 101
function(e, t, n) {
    "use strict";
    const r = {};
    function i(e, t, n) {
        n || (n = Error);
        class i extends n {
            constructor(e, n, r) {
                super(function(e, n, r) {
                    return "string" == typeof t ? t : t(e, n, r);
                }(e, n, r));
            }
        }
        i.prototype.name = n.name, i.prototype.code = e, r[e] = i;
    }
    function o(e, t) {
        if (Array.isArray(e)) {
            const n = e.length;
            return e = e.map(e => String(e)), n > 2 ? `one of ${t} ${e.slice(0, n - 1).join(", ")}, or ` + e[n - 1] : 2 === n ? `one of ${t} ${e[0]} or ${e[1]}` : `of ${t} ${e[0]}`;
        }
        return `of ${t} ${String(e)}`;
    }
    i("ERR_INVALID_OPT_VALUE", function(e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
    }, TypeError), i("ERR_INVALID_ARG_TYPE", function(e, t, n) {
        let r;
        var i, a;
        let s;
        if ("string" == typeof t && (i = "not ", t.substr(!a || a < 0 ? 0 : +a, i.length) === i) ? (r = "must not be", 
        t = t.replace(/^not /, "")) : r = "must be", function(e, t, n) {
            return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t;
        }(e, " argument")) s = `The ${e} ${r} ${o(t, "type")}`; else {
            s = `The "${e}" ${function(e, t, n) {
                return "number" != typeof n && (n = 0), !(n + t.length > e.length) && -1 !== e.indexOf(t, n);
            }(e, ".") ? "property" : "argument"} ${r} ${o(t, "type")}`;
        }
        return s += ". Received type " + typeof n, s;
    }, TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", function(e) {
        return "The " + e + " method is not implemented";
    }), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", function(e) {
        return "Cannot call " + e + " after a stream was destroyed";
    }), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), 
    i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), 
    i("ERR_UNKNOWN_ENCODING", function(e) {
        return "Unknown encoding: " + e;
    }, TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), 
    e.exports.codes = r;
}
