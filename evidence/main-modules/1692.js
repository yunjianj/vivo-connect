// analysis/pretty/main.js:129295; webpack module 1692
function(e, t, n) {
    const {dirname: r} = n(1), {findMade: i, findMadeSync: o} = n(1693), {mkdirpManual: a, mkdirpManualSync: s} = n(796);
    e.exports = {
        mkdirpNative: (e, t) => {
            t.recursive = !0;
            return r(e) === e ? t.mkdirAsync(e, t) : i(t, e).then(n => t.mkdirAsync(e, t).then(() => n).catch(n => {
                if ("ENOENT" === n.code) return a(e, t);
                throw n;
            }));
        },
        mkdirpNativeSync: (e, t) => {
            t.recursive = !0;
            if (r(e) === e) return t.mkdirSync(e, t);
            const n = o(t, e);
            try {
                return t.mkdirSync(e, t), n;
            } catch (n) {
                if ("ENOENT" === n.code) return s(e, t);
                throw n;
            }
        }
    };
}
