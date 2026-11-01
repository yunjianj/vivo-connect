// analysis/pretty/main.js:122773; webpack module 1604
function(e, t, n) {
    "use strict";
    const r = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, i = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, o = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, a = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi, s = new Map([ [ "n", "\n" ], [ "r", "\r" ], [ "t", "\t" ], [ "b", "\b" ], [ "f", "\f" ], [ "v", "\v" ], [ "0", "\0" ], [ "\\", "\\" ], [ "e", "" ], [ "a", "" ] ]);
    function l(e) {
        return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : s.get(e) || e;
    }
    function c(e, t) {
        const n = [], r = t.trim().split(/\s*,\s*/g);
        let i;
        for (const t of r) if (isNaN(t)) {
            if (!(i = t.match(o))) throw new Error(`Invalid Chalk template style argument: ${t} (in style '${e}')`);
            n.push(i[2].replace(a, (e, t, n) => t ? l(t) : n));
        } else n.push(Number(t));
        return n;
    }
    function u(e) {
        i.lastIndex = 0;
        const t = [];
        let n;
        for (;null !== (n = i.exec(e)); ) {
            const e = n[1];
            if (n[2]) {
                const r = c(e, n[2]);
                t.push([ e ].concat(r));
            } else t.push([ e ]);
        }
        return t;
    }
    function d(e, t) {
        const n = {};
        for (const e of t) for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1);
        let r = e;
        for (const e of Object.keys(n)) if (Array.isArray(n[e])) {
            if (!(e in r)) throw new Error("Unknown Chalk style: " + e);
            r = n[e].length > 0 ? r[e].apply(r, n[e]) : r[e];
        }
        return r;
    }
    e.exports = (e, t) => {
        const n = [], i = [];
        let o = [];
        if (t.replace(r, (t, r, a, s, c, h) => {
            if (r) o.push(l(r)); else if (s) {
                const t = o.join("");
                o = [], i.push(0 === n.length ? t : d(e, n)(t)), n.push({
                    inverse: a,
                    styles: u(s)
                });
            } else if (c) {
                if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
                i.push(d(e, n)(o.join(""))), o = [], n.pop();
            } else o.push(h);
        }), i.push(o.join("")), n.length > 0) {
            const e = `Chalk template literal is missing ${n.length} closing bracket${1 === n.length ? "" : "s"} (\`}\`)`;
            throw new Error(e);
        }
        return i.join("");
    };
}
