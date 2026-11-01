// analysis/pretty/main.js:118759; webpack module 1552
function(e, t, n) {
    const r = n(4), i = n(9), o = n(5);
    function a(e, t) {
        return Buffer.isBuffer(e) ? s(e, t) : o.isString(e) ? function(e, t) {
            r.readFile(e, (e, n) => {
                if (e) return t(e);
                s(n, t);
            });
        }(e, t) : e instanceof i.Readable ? function(e, t) {
            const n = [];
            e.on("data", e => {
                n.push(e);
            }).on("error", e => {
                t(e);
            }).on("end", () => {
                s(Buffer.concat(n), t);
            });
        }(e, t) : void t(new Error("Type of [amr] must be String, Buffer or Readable Stream"));
    }
    function s(e, t) {
        const n = [ 12, 13, 15, 17, 19, 20, 26, 31, 5, 0, 0, 0, 0, 0, 0, 0 ], r = [ 17, 22, 32, 36, 40, 46, 50, 58, 60, 5, 0, 0, 0, 0, 0, 0 ];
        let i, o;
        if (0 === e.indexOf("#!AMR\n")) i = "#!AMR\n", o = n; else {
            if (0 !== e.indexOf("#!AMR-WB\n")) return t(new Error("Buffer not starts with #!AMR\n or #!AMR-WB\n"));
            i = "#!AMR-WB\n", o = r;
        }
        let a = i.length, s = 0;
        for (;e[a]; ) {
            a += 1 + o[l(e[a]).FT], s++;
        }
        t(null, 20 * s);
    }
    function l(e) {
        return {
            Q: (e & parseInt("100", 2)) >> 2,
            FT: e >> 3
        };
    }
    e.exports = function(e, t) {
        return new Promise((n, r) => {
            a(e, (e, i) => {
                if (t && t(e, i), e) return r(e);
                n(i);
            });
        });
    };
}
