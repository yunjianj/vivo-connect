// analysis/pretty/main.js:57629; webpack module 630
function(e, t, n) {
    e.exports = {
        read: function(e, t) {
            if ("string" == typeof e) {
                if (e.trim().match(/^[-]+[ ]*BEGIN/)) return o.read(e, t);
                if (e.match(/^\s*ssh-[a-z]/)) return a.read(e, t);
                if (e.match(/^\s*ecdsa-/)) return a.read(e, t);
                if (e.match(/^putty-user-key-file-2:/i)) return c.read(e, t);
                if (u(e)) return l.read(e, t);
                e = i.from(e, "binary");
            } else {
                if (r.buffer(e), function(e) {
                    var t = 0;
                    for (;t < e.length && (32 === e[t] || 10 === e[t]); ) ++t;
                    if (45 !== e[t]) return !1;
                    for (;t < e.length && 45 === e[t]; ) ++t;
                    for (;t < e.length && 32 === e[t]; ) ++t;
                    return !(t + 5 > e.length || "BEGIN" !== e.slice(t, t + 5).toString("ascii"));
                }(e)) return o.read(e, t);
                if (function(e) {
                    var t = 0;
                    for (;t < e.length && (32 === e[t] || 10 === e[t] || 9 === e[t]); ) ++t;
                    return t + 4 <= e.length && "ssh-" === e.slice(t, t + 4).toString("ascii") || t + 6 <= e.length && "ecdsa-" === e.slice(t, t + 6).toString("ascii");
                }(e)) return a.read(e, t);
                if (function(e) {
                    var t = 0;
                    for (;t < e.length && (32 === e[t] || 10 === e[t] || 9 === e[t]); ) ++t;
                    return t + 22 <= e.length && "putty-user-key-file-2:" === e.slice(t, t + 22).toString("ascii").toLowerCase();
                }(e)) return c.read(e, t);
                if (u(e)) return l.read(e, t);
            }
            if (e.readUInt32BE(0) < e.length) return s.read(e, t);
            throw new Error("Failed to auto-detect format of key");
        },
        write: function(e, t) {
            throw new Error('"auto" format cannot be used for writing');
        }
    };
    var r = n(21), i = n(17).Buffer, o = (n(35), n(33), n(34), n(91)), a = n(632), s = n(92), l = n(297), c = n(298);
    function u(e) {
        if (e.length <= "Private-key-format: v1".length) return !1;
        if ("Private-key-format: v1" === e.slice(0, "Private-key-format: v1".length).toString("ascii")) return !0;
        "string" != typeof e && (e = e.toString("ascii"));
        for (var t = e.split("\n"), n = 0; t[n].match(/^\;/); ) n++;
        return !!t[n].toString("ascii").match(/\. IN KEY /) || !!t[n].toString("ascii").match(/\. IN DNSKEY /);
    }
}
