// analysis/pretty/main.js:97025; webpack module 1263
function(e, t, n) {
    "use strict";
    var r = n(7);
    t.calculateMac = function(e, t) {
        var n = "hawk.1.header\n" + t.ts + "\n" + t.nonce + "\n" + (t.method || "").toUpperCase() + "\n" + t.resource + "\n" + t.host.toLowerCase() + "\n" + t.port + "\n" + (t.hash || "") + "\n";
        return t.ext && (n += t.ext.replace("\\", "\\\\").replace("\n", "\\n")), n += "\n", 
        t.app && (n = n + t.app + "\n" + (t.dlg || "") + "\n"), r.createHmac(e.algorithm, e.key).update(n).digest("base64");
    }, t.header = function(e, n, i) {
        var o = i.timestamp || Math.floor((Date.now() + (i.localtimeOffsetMsec || 0)) / 1e3), a = i.credentials;
        if (!(a && a.id && a.key && a.algorithm)) return "";
        if (-1 === [ "sha1", "sha256" ].indexOf(a.algorithm)) return "";
        var s, l, c, u, d, h, p = {
            ts: o,
            nonce: i.nonce || (s = 6, l = 6 * (s + 1), r.randomBytes(Math.ceil(l / 8)).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "").slice(0, s)),
            method: n,
            resource: e.pathname + (e.search || ""),
            host: e.hostname,
            port: e.port || ("http:" === e.protocol ? 80 : 443),
            hash: i.hash,
            ext: i.ext,
            app: i.app,
            dlg: i.dlg
        };
        p.hash || !i.payload && "" !== i.payload || (p.hash = (c = i.payload, u = a.algorithm, 
        d = i.contentType, (h = r.createHash(u)).update("hawk.1.payload\n"), h.update((d ? d.split(";")[0].trim().toLowerCase() : "") + "\n"), 
        h.update(c || ""), h.update("\n"), h.digest("base64")));
        var f = t.calculateMac(a, p), _ = null !== p.ext && void 0 !== p.ext && "" !== p.ext, m = 'Hawk id="' + a.id + '", ts="' + p.ts + '", nonce="' + p.nonce + (p.hash ? '", hash="' + p.hash : "") + (_ ? '", ext="' + p.ext.replace(/\\/g, "\\\\").replace(/"/g, '\\"') : "") + '", mac="' + f + '"';
        return p.app && (m = m + ', app="' + p.app + (p.dlg ? '", dlg="' + p.dlg : "") + '"'), 
        m;
    };
}
