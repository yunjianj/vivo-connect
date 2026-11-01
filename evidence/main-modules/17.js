// analysis/pretty/main.js:3984; webpack module 17
function(e, t, n) {
    "use strict";
    var r, i = n(47), o = i.Buffer, a = {};
    for (r in i) i.hasOwnProperty(r) && "SlowBuffer" !== r && "Buffer" !== r && (a[r] = i[r]);
    var s = a.Buffer = {};
    for (r in o) o.hasOwnProperty(r) && "allocUnsafe" !== r && "allocUnsafeSlow" !== r && (s[r] = o[r]);
    if (a.Buffer.prototype = o.prototype, s.from && s.from !== Uint8Array.from || (s.from = function(e, t, n) {
        if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e);
        if (e && void 0 === e.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        return o(e, t, n);
    }), s.alloc || (s.alloc = function(e, t, n) {
        if ("number" != typeof e) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e);
        if (e < 0 || e >= 2 * (1 << 30)) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        var r = o(e);
        return t && 0 !== t.length ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), 
        r;
    }), !a.kStringMaxLength) try {
        a.kStringMaxLength = process.binding("buffer").kStringMaxLength;
    } catch (e) {}
    a.constants || (a.constants = {
        MAX_LENGTH: a.kMaxLength
    }, a.kStringMaxLength && (a.constants.MAX_STRING_LENGTH = a.kStringMaxLength)), 
    e.exports = a;
}
