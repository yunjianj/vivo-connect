// analysis/pretty/main.js:41175; webpack module 375
function(e, t, n) {
    "use strict";
    const r = n(176), i = n(1);
    class o {
        constructor(e, t) {
            this.atime = e.atime || null, this.charset = e.charset || null, this.comment = e.comment || null, 
            this.ctime = e.ctime || null, this.gid = e.gid || null, this.gname = e.gname || null, 
            this.linkpath = e.linkpath || null, this.mtime = e.mtime || null, this.path = e.path || null, 
            this.size = e.size || null, this.uid = e.uid || null, this.uname = e.uname || null, 
            this.dev = e.dev || null, this.ino = e.ino || null, this.nlink = e.nlink || null, 
            this.global = t || !1;
        }
        encode() {
            const e = this.encodeBody();
            if ("" === e) return null;
            const t = Buffer.byteLength(e), n = 512 * Math.ceil(1 + t / 512), o = Buffer.allocUnsafe(n);
            for (let e = 0; e < 512; e++) o[e] = 0;
            new r({
                path: ("PaxHeader/" + i.basename(this.path)).slice(0, 99),
                mode: this.mode || 420,
                uid: this.uid || null,
                gid: this.gid || null,
                size: t,
                mtime: this.mtime || null,
                type: this.global ? "GlobalExtendedHeader" : "ExtendedHeader",
                linkpath: "",
                uname: this.uname || "",
                gname: this.gname || "",
                devmaj: 0,
                devmin: 0,
                atime: this.atime || null,
                ctime: this.ctime || null
            }).encode(o), o.write(e, 512, t, "utf8");
            for (let e = t + 512; e < o.length; e++) o[e] = 0;
            return o;
        }
        encodeBody() {
            return this.encodeField("path") + this.encodeField("ctime") + this.encodeField("atime") + this.encodeField("dev") + this.encodeField("ino") + this.encodeField("nlink") + this.encodeField("charset") + this.encodeField("comment") + this.encodeField("gid") + this.encodeField("gname") + this.encodeField("linkpath") + this.encodeField("mtime") + this.encodeField("size") + this.encodeField("uid") + this.encodeField("uname");
        }
        encodeField(e) {
            if (null === this[e] || void 0 === this[e]) return "";
            const t = " " + ("dev" === e || "ino" === e || "nlink" === e ? "SCHILY." : "") + e + "=" + (this[e] instanceof Date ? this[e].getTime() / 1e3 : this[e]) + "\n", n = Buffer.byteLength(t);
            let r = Math.floor(Math.log(n) / Math.log(10)) + 1;
            n + r >= Math.pow(10, r) && (r += 1);
            return r + n + t;
        }
    }
    o.parse = (e, t, n) => new o(a(s(e), t), n);
    const a = (e, t) => t ? Object.keys(e).reduce((t, n) => (t[n] = e[n], t), t) : e, s = e => e.replace(/\n$/, "").split("\n").reduce(l, Object.create(null)), l = (e, t) => {
        const n = parseInt(t, 10);
        if (n !== Buffer.byteLength(t) + 1) return e;
        const r = (t = t.slice((n + " ").length)).split("="), i = r.shift().replace(/^SCHILY\.(dev|ino|nlink)/, "$1");
        if (!i) return e;
        const o = r.join("=");
        return e[i] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(i) ? new Date(1e3 * o) : /^[0-9]+$/.test(o) ? +o : o, 
        e;
    };
    e.exports = o;
}
