// analysis/pretty/main.js:23946; webpack module 176
function(e, t, n) {
    "use strict";
    const r = n(790), i = n(1).posix, o = n(1681), a = Symbol("slurp"), s = Symbol("type");
    const l = (e, t) => {
        let n, r = e, o = "";
        const a = i.parse(e).root || ".";
        if (Buffer.byteLength(r) < 100) n = [ r, o, !1 ]; else {
            o = i.dirname(r), r = i.basename(r);
            do {
                Buffer.byteLength(r) <= 100 && Buffer.byteLength(o) <= t ? n = [ r, o, !1 ] : Buffer.byteLength(r) > 100 && Buffer.byteLength(o) <= t ? n = [ r.slice(0, 99), o, !0 ] : (r = i.join(i.basename(o), r), 
                o = i.dirname(o));
            } while (o !== a && !n);
            n || (n = [ e.slice(0, 99), "", !0 ]);
        }
        return n;
    }, c = (e, t, n) => e.slice(t, t + n).toString("utf8").replace(/\0.*/, ""), u = (e, t, n) => d(h(e, t, n)), d = e => null === e ? null : new Date(1e3 * e), h = (e, t, n) => 128 & e[t] ? o.parse(e.slice(t, t + n)) : p(e, t, n), p = (e, t, n) => {
        return r = parseInt(e.slice(t, t + n).toString("utf8").replace(/\0.*$/, "").trim(), 8), 
        isNaN(r) ? null : r;
        var r;
    }, f = {
        12: 8589934591,
        8: 2097151
    }, _ = (e, t, n, r) => null !== r && (r > f[n] || r < 0 ? (o.encode(r, e.slice(t, t + n)), 
    !0) : (m(e, t, n, r), !1)), m = (e, t, n, r) => e.write(g(r, n), t, n, "ascii"), g = (e, t) => v(Math.floor(e).toString(8), t), v = (e, t) => (e.length === t - 1 ? e : new Array(t - e.length - 1).join("0") + e + " ") + "\0", y = (e, t, n, r) => null !== r && _(e, t, n, r.getTime() / 1e3), E = new Array(156).join("\0"), b = (e, t, n, r) => null !== r && (e.write(r + E, t, n, "utf8"), 
    r.length !== Buffer.byteLength(r) || r.length > n);
    e.exports = class {
        constructor(e, t, n, r) {
            this.cksumValid = !1, this.needPax = !1, this.nullBlock = !1, this.block = null, 
            this.path = null, this.mode = null, this.uid = null, this.gid = null, this.size = null, 
            this.mtime = null, this.cksum = null, this[s] = "0", this.linkpath = null, this.uname = null, 
            this.gname = null, this.devmaj = 0, this.devmin = 0, this.atime = null, this.ctime = null, 
            Buffer.isBuffer(e) ? this.decode(e, t || 0, n, r) : e && this.set(e);
        }
        decode(e, t, n, r) {
            if (t || (t = 0), !(e && e.length >= t + 512)) throw new Error("need 512 bytes for header");
            if (this.path = c(e, t, 100), this.mode = h(e, t + 100, 8), this.uid = h(e, t + 108, 8), 
            this.gid = h(e, t + 116, 8), this.size = h(e, t + 124, 12), this.mtime = u(e, t + 136, 12), 
            this.cksum = h(e, t + 148, 12), this[a](n), this[a](r, !0), this[s] = c(e, t + 156, 1), 
            "" === this[s] && (this[s] = "0"), "0" === this[s] && "/" === this.path.slice(-1) && (this[s] = "5"), 
            "5" === this[s] && (this.size = 0), this.linkpath = c(e, t + 157, 100), "ustar\x0000" === e.slice(t + 257, t + 265).toString()) if (this.uname = c(e, t + 265, 32), 
            this.gname = c(e, t + 297, 32), this.devmaj = h(e, t + 329, 8), this.devmin = h(e, t + 337, 8), 
            0 !== e[t + 475]) {
                const n = c(e, t + 345, 155);
                this.path = n + "/" + this.path;
            } else {
                const n = c(e, t + 345, 130);
                n && (this.path = n + "/" + this.path), this.atime = u(e, t + 476, 12), this.ctime = u(e, t + 488, 12);
            }
            let i = 256;
            for (let n = t; n < t + 148; n++) i += e[n];
            for (let n = t + 156; n < t + 512; n++) i += e[n];
            this.cksumValid = i === this.cksum, null === this.cksum && 256 === i && (this.nullBlock = !0);
        }
        [a](e, t) {
            for (const n in e) null === e[n] || void 0 === e[n] || t && "path" === n || (this[n] = e[n]);
        }
        encode(e, t) {
            if (e || (e = this.block = Buffer.alloc(512), t = 0), t || (t = 0), !(e.length >= t + 512)) throw new Error("need 512 bytes for header");
            const n = this.ctime || this.atime ? 130 : 155, r = l(this.path || "", n), i = r[0], o = r[1];
            this.needPax = r[2], this.needPax = b(e, t, 100, i) || this.needPax, this.needPax = _(e, t + 100, 8, this.mode) || this.needPax, 
            this.needPax = _(e, t + 108, 8, this.uid) || this.needPax, this.needPax = _(e, t + 116, 8, this.gid) || this.needPax, 
            this.needPax = _(e, t + 124, 12, this.size) || this.needPax, this.needPax = y(e, t + 136, 12, this.mtime) || this.needPax, 
            e[t + 156] = this[s].charCodeAt(0), this.needPax = b(e, t + 157, 100, this.linkpath) || this.needPax, 
            e.write("ustar\x0000", t + 257, 8), this.needPax = b(e, t + 265, 32, this.uname) || this.needPax, 
            this.needPax = b(e, t + 297, 32, this.gname) || this.needPax, this.needPax = _(e, t + 329, 8, this.devmaj) || this.needPax, 
            this.needPax = _(e, t + 337, 8, this.devmin) || this.needPax, this.needPax = b(e, t + 345, n, o) || this.needPax, 
            0 !== e[t + 475] ? this.needPax = b(e, t + 345, 155, o) || this.needPax : (this.needPax = b(e, t + 345, 130, o) || this.needPax, 
            this.needPax = y(e, t + 476, 12, this.atime) || this.needPax, this.needPax = y(e, t + 488, 12, this.ctime) || this.needPax);
            let a = 256;
            for (let n = t; n < t + 148; n++) a += e[n];
            for (let n = t + 156; n < t + 512; n++) a += e[n];
            return this.cksum = a, _(e, t + 148, 8, this.cksum), this.cksumValid = !0, this.needPax;
        }
        set(e) {
            for (const t in e) null !== e[t] && void 0 !== e[t] && (this[t] = e[t]);
        }
        get type() {
            return r.name.get(this[s]) || this[s];
        }
        get typeKey() {
            return this[s];
        }
        set type(e) {
            r.code.has(e) ? this[s] = r.code.get(e) : this[s] = e;
        }
    };
}
