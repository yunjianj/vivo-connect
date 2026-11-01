// analysis/pretty/main.js:56771; webpack module 603
function(e, t) {
    var n = Buffer.alloc, r = "0".charCodeAt(0), i = Buffer.from("ustar\0", "binary"), o = Buffer.from("00", "binary"), a = Buffer.from("ustar ", "binary"), s = Buffer.from(" \0", "binary"), l = parseInt("7777", 8), c = function(e, t, n, r) {
        for (;n < r; n++) if (e[n] === t) return n;
        return r;
    }, u = function(e) {
        for (var t = 256, n = 0; n < 148; n++) t += e[n];
        for (var r = 156; r < 512; r++) t += e[r];
        return t;
    }, d = function(e, t) {
        return (e = e.toString(8)).length > t ? "7777777777777777777".slice(0, t) + " " : "0000000000000000000".slice(0, t - e.length) + e + " ";
    };
    var h = function(e, t, n) {
        if (128 & (e = e.slice(t, t + n))[t = 0]) return function(e) {
            var t;
            if (128 === e[0]) t = !0; else {
                if (255 !== e[0]) return null;
                t = !1;
            }
            for (var n = [], r = e.length - 1; r > 0; r--) {
                var i = e[r];
                t ? n.push(i) : n.push(255 - i);
            }
            var o = 0, a = n.length;
            for (r = 0; r < a; r++) o += n[r] * Math.pow(256, r);
            return t ? o : -1 * o;
        }(e);
        for (;t < e.length && 32 === e[t]; ) t++;
        for (var r = (i = c(e, 32, t, e.length), o = e.length, a = e.length, "number" != typeof i ? a : (i = ~~i) >= o ? o : i >= 0 || (i += o) >= 0 ? i : 0); t < r && 0 === e[t]; ) t++;
        return r === t ? 0 : parseInt(e.slice(t, r).toString(), 8);
        var i, o, a;
    }, p = function(e, t, n, r) {
        return e.slice(t, c(e, 0, t, t + n)).toString(r);
    }, f = function(e) {
        var t = Buffer.byteLength(e), n = Math.floor(Math.log(t) / Math.log(10)) + 1;
        return t + n >= Math.pow(10, n) && n++, t + n + e;
    };
    t.decodeLongPath = function(e, t) {
        return p(e, 0, e.length, t);
    }, t.encodePax = function(e) {
        var t = "";
        e.name && (t += f(" path=" + e.name + "\n")), e.linkname && (t += f(" linkpath=" + e.linkname + "\n"));
        var n = e.pax;
        if (n) for (var r in n) t += f(" " + r + "=" + n[r] + "\n");
        return Buffer.from(t);
    }, t.decodePax = function(e) {
        for (var t = {}; e.length; ) {
            for (var n = 0; n < e.length && 32 !== e[n]; ) n++;
            var r = parseInt(e.slice(0, n).toString(), 10);
            if (!r) return t;
            var i = e.slice(n + 1, r - 1).toString(), o = i.indexOf("=");
            if (-1 === o) return t;
            t[i.slice(0, o)] = i.slice(o + 1), e = e.slice(r);
        }
        return t;
    }, t.encode = function(e) {
        var t = n(512), a = e.name, s = "";
        if (5 === e.typeflag && "/" !== a[a.length - 1] && (a += "/"), Buffer.byteLength(a) !== a.length) return null;
        for (;Buffer.byteLength(a) > 100; ) {
            var c = a.indexOf("/");
            if (-1 === c) return null;
            s += s ? "/" + a.slice(0, c) : a.slice(0, c), a = a.slice(c + 1);
        }
        return Buffer.byteLength(a) > 100 || Buffer.byteLength(s) > 155 || e.linkname && Buffer.byteLength(e.linkname) > 100 ? null : (t.write(a), 
        t.write(d(e.mode & l, 6), 100), t.write(d(e.uid, 6), 108), t.write(d(e.gid, 6), 116), 
        t.write(d(e.size, 11), 124), t.write(d(e.mtime.getTime() / 1e3 | 0, 11), 136), t[156] = r + function(e) {
            switch (e) {
              case "file":
                return 0;

              case "link":
                return 1;

              case "symlink":
                return 2;

              case "character-device":
                return 3;

              case "block-device":
                return 4;

              case "directory":
                return 5;

              case "fifo":
                return 6;

              case "contiguous-file":
                return 7;

              case "pax-header":
                return 72;
            }
            return 0;
        }(e.type), e.linkname && t.write(e.linkname, 157), i.copy(t, 257), o.copy(t, 263), 
        e.uname && t.write(e.uname, 265), e.gname && t.write(e.gname, 297), t.write(d(e.devmajor || 0, 6), 329), 
        t.write(d(e.devminor || 0, 6), 337), s && t.write(s, 345), t.write(d(u(t), 6), 148), 
        t);
    }, t.decode = function(e, t, n) {
        var o = 0 === e[156] ? 0 : e[156] - r, l = p(e, 0, 100, t), c = h(e, 100, 8), d = h(e, 108, 8), f = h(e, 116, 8), _ = h(e, 124, 12), m = h(e, 136, 12), g = function(e) {
            switch (e) {
              case 0:
                return "file";

              case 1:
                return "link";

              case 2:
                return "symlink";

              case 3:
                return "character-device";

              case 4:
                return "block-device";

              case 5:
                return "directory";

              case 6:
                return "fifo";

              case 7:
                return "contiguous-file";

              case 72:
                return "pax-header";

              case 55:
                return "pax-global-header";

              case 27:
                return "gnu-long-link-path";

              case 28:
              case 30:
                return "gnu-long-path";
            }
            return null;
        }(o), v = 0 === e[157] ? null : p(e, 157, 100, t), y = p(e, 265, 32), E = p(e, 297, 32), b = h(e, 329, 8), w = h(e, 337, 8), S = u(e);
        if (256 === S) return null;
        if (S !== h(e, 148, 8)) throw new Error("Invalid tar header. Maybe the tar is corrupted or it needs to be gunzipped?");
        if (0 === i.compare(e, 257, 263)) e[345] && (l = p(e, 345, 155, t) + "/" + l); else if (0 === a.compare(e, 257, 263) && 0 === s.compare(e, 263, 265)) ; else if (!n) throw new Error("Invalid tar header: unknown format.");
        return 0 === o && l && "/" === l[l.length - 1] && (o = 5), {
            name: l,
            mode: c,
            uid: d,
            gid: f,
            size: _,
            mtime: new Date(1e3 * m),
            type: g,
            linkname: v,
            uname: y,
            gname: E,
            devmajor: b,
            devminor: w
        };
    };
}
