// analysis/pretty/main.js:101037; webpack module 1339
function(e, t, n) {
    "use strict";
    const r = n(134);
    e.exports = (e, t) => {
        const n = r(e, null, !0), i = r(t, null, !0), o = n.compare(i);
        if (0 === o) return null;
        const a = o > 0, s = a ? n : i, l = a ? i : n, c = !!s.prerelease.length;
        if (!!l.prerelease.length && !c) {
            if (!l.patch && !l.minor) return "major";
            if (0 === l.compareMain(s)) return l.minor && !l.patch ? "minor" : "patch";
        }
        const u = c ? "pre" : "";
        return n.major !== i.major ? u + "major" : n.minor !== i.minor ? u + "minor" : n.patch !== i.patch ? u + "patch" : "prerelease";
    };
}
