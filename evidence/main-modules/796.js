// analysis/pretty/main.js:73135; webpack module 796
function(e, t, n) {
    const {dirname: r} = n(1), i = (e, t, n) => {
        t.recursive = !1;
        const o = r(e);
        return o === e ? t.mkdirAsync(e, t).catch(e => {
            if ("EISDIR" !== e.code) throw e;
        }) : t.mkdirAsync(e, t).then(() => n || e, r => {
            if ("ENOENT" === r.code) return i(o, t).then(n => i(e, t, n));
            if ("EEXIST" !== r.code && "EROFS" !== r.code) throw r;
            return t.statAsync(e).then(e => {
                if (e.isDirectory()) return n;
                throw r;
            }, () => {
                throw r;
            });
        });
    }, o = (e, t, n) => {
        const i = r(e);
        if (t.recursive = !1, i === e) try {
            return t.mkdirSync(e, t);
        } catch (e) {
            if ("EISDIR" !== e.code) throw e;
            return;
        }
        try {
            return t.mkdirSync(e, t), n || e;
        } catch (r) {
            if ("ENOENT" === r.code) return o(e, t, o(i, t, n));
            if ("EEXIST" !== r.code && "EROFS" !== r.code) throw r;
            try {
                if (!t.statSync(e).isDirectory()) throw r;
            } catch (e) {
                throw r;
            }
        }
    };
    e.exports = {
        mkdirpManual: i,
        mkdirpManualSync: o
    };
}
