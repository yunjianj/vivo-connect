// analysis/pretty/main.js:114054; webpack module 1515
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0), i = r.__importDefault(n(70)), o = n(53), a = r.__importDefault(n(6)), s = r.__importStar(n(1516)), l = r.__importStar(n(1519)), c = r.__importStar(n(1525)), u = r.__importStar(n(1526)), d = r.__importStar(n(1528)), h = r.__importStar(n(1529));
    class p extends i.default {
        constructor(e) {
            super(e);
        }
        getUserId() {
            return a.default.getItem("userInfo").openId;
        }
    }
    [ ...Object.keys(s), ...Object.keys(l), ...Object.keys(c), ...Object.keys(u), ...Object.keys(d), ...Object.keys(h) ].forEach(e => {
        const t = s[e] || l[e] || u[e] || c[e] || d[e] || h[e];
        "function" == typeof t && (p.prototype[e] = t);
    });
    const f = new p(o.Note_DB);
    e.exports = f;
}
