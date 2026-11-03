// analysis/pretty/main.js:111649; webpack module 1494
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getNewNameExits = t.fileExistAndRename = void 0, t.fileExistAndRename = function(e, t) {
        const r = n(4), i = n(1);
        let o = i.join(t, e);
        if (!r.existsSync(o)) return e;
        let a = 1, s = e.lastIndexOf(".");
        if (-1 === s) {
            if (e.endsWith(")") && -1 !== e.lastIndexOf("(") && -1 != e.lastIndexOf(")")) {
                let t = e.substring(e.lastIndexOf("(") + 1, e.lastIndexOf(")") + 1);
                a = parseInt(t), e = e.substring(0, e.lastIndexOf("("));
            }
        } else {
            let t = e.substring(0, s), n = e.substring(s);
            if (t.endsWith(")") && -1 != t.lastIndexOf("(") && -1 != t.lastIndexOf(")")) {
                let r = t.substring(t.lastIndexOf("(") + 1, t.lastIndexOf(")"));
                a = parseInt(r), e = e.substring(0, e.lastIndexOf("(")) + n;
            }
        }
        let l = e;
        for (;r.existsSync(o); ) {
            l = e;
            let n = l.lastIndexOf(".");
            if (-1 === n) l = l + "(" + a + ")"; else {
                let e = l.substring(0, n), t = l.substring(n);
                l = e + "(" + a + ")" + t;
            }
            o = i.join(t, l), ++a;
        }
        return l;
    }, t.getNewNameExits = function(e, t) {
        const r = n(4), i = n(1);
        let o = 1, a = i.join(e, t);
        const s = i.extname(a), l = i.basename(a), c = i.basename(l, s), u = i.dirname(a);
        for (;r.existsSync(a); ) {
            const e = `${c}(${o})${s}`;
            a = i.join(u, e), o++;
        }
        return i.relative(e, a);
    };
}
