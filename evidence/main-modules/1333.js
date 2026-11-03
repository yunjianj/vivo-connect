// analysis/pretty/main.js:100821; webpack module 1333
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.nil = t.UUID = void 0;
    const r = n(7), i = n(224), o = (0, r.randomBytes)(16);
    o[0] = 1 | o[0];
    const a = {}, s = [];
    for (let e = 0; e < 256; e++) {
        const t = (e + 256).toString(16).substr(1);
        a[t] = e, s[e] = t;
    }
    class l {
        constructor(e) {
            this.ascii = null, this.binary = null;
            const t = l.check(e);
            if (!t) throw new Error("not a UUID");
            this.version = t.version, "ascii" === t.format ? this.ascii = e : this.binary = e;
        }
        static v5(e, t) {
            return function(e, t, n, o, a = u.ASCII) {
                const c = (0, r.createHash)(t);
                if ("string" != typeof e && !Buffer.isBuffer(e)) throw (0, i.newError)("options.name must be either a string or a Buffer", "ERR_INVALID_UUID_NAME");
                c.update(o), c.update(e);
                const d = c.digest();
                let h;
                switch (a) {
                  case u.BINARY:
                    d[6] = 15 & d[6] | n, d[8] = 63 & d[8] | 128, h = d;
                    break;

                  case u.OBJECT:
                    d[6] = 15 & d[6] | n, d[8] = 63 & d[8] | 128, h = new l(d);
                    break;

                  default:
                    h = s[d[0]] + s[d[1]] + s[d[2]] + s[d[3]] + "-" + s[d[4]] + s[d[5]] + "-" + s[15 & d[6] | n] + s[d[7]] + "-" + s[63 & d[8] | 128] + s[d[9]] + "-" + s[d[10]] + s[d[11]] + s[d[12]] + s[d[13]] + s[d[14]] + s[d[15]];
                }
                return h;
            }(e, "sha1", 80, t);
        }
        toString() {
            var e;
            return null == this.ascii && (this.ascii = (e = this.binary, s[e[0]] + s[e[1]] + s[e[2]] + s[e[3]] + "-" + s[e[4]] + s[e[5]] + "-" + s[e[6]] + s[e[7]] + "-" + s[e[8]] + s[e[9]] + "-" + s[e[10]] + s[e[11]] + s[e[12]] + s[e[13]] + s[e[14]] + s[e[15]])), 
            this.ascii;
        }
        inspect() {
            return `UUID v${this.version} ${this.toString()}`;
        }
        static check(e, t = 0) {
            if ("string" == typeof e) return e = e.toLowerCase(), !!/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-([a-f0-9]{12})$/.test(e) && ("00000000-0000-0000-0000-000000000000" === e ? {
                version: void 0,
                variant: "nil",
                format: "ascii"
            } : {
                version: (240 & a[e[14] + e[15]]) >> 4,
                variant: c((224 & a[e[19] + e[20]]) >> 5),
                format: "ascii"
            });
            if (Buffer.isBuffer(e)) {
                if (e.length < t + 16) return !1;
                let n = 0;
                for (;n < 16 && 0 === e[t + n]; n++) ;
                return 16 === n ? {
                    version: void 0,
                    variant: "nil",
                    format: "binary"
                } : {
                    version: (240 & e[t + 6]) >> 4,
                    variant: c((224 & e[t + 8]) >> 5),
                    format: "binary"
                };
            }
            throw (0, i.newError)("Unknown type of uuid", "ERR_UNKNOWN_UUID_TYPE");
        }
        static parse(e) {
            const t = Buffer.allocUnsafe(16);
            let n = 0;
            for (let r = 0; r < 16; r++) t[r] = a[e[n++] + e[n++]], 3 !== r && 5 !== r && 7 !== r && 9 !== r || (n += 1);
            return t;
        }
    }
    function c(e) {
        switch (e) {
          case 0:
          case 1:
          case 3:
            return "ncs";

          case 4:
          case 5:
            return "rfc4122";

          case 6:
            return "microsoft";

          default:
            return "future";
        }
    }
    var u;
    t.UUID = l, l.OID = l.parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8"), function(e) {
        e[e.ASCII = 0] = "ASCII", e[e.BINARY = 1] = "BINARY", e[e.OBJECT = 2] = "OBJECT";
    }(u || (u = {})), t.nil = new l("00000000-0000-0000-0000-000000000000");
}
