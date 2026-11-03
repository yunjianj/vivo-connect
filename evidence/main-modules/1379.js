// analysis/pretty/main.js:102627; webpack module 1379
function(e, t, n) {
    "use strict";
    const r = n(23).fromPromise, i = n(135), o = n(1), a = n(73), s = n(233), l = r(async function(e) {
        let t;
        try {
            t = await i.readdir(e);
        } catch {
            return a.mkdirs(e);
        }
        return Promise.all(t.map(t => s.remove(o.join(e, t))));
    });
    function c(e) {
        let t;
        try {
            t = i.readdirSync(e);
        } catch {
            return a.mkdirsSync(e);
        }
        t.forEach(t => {
            t = o.join(e, t), s.removeSync(t);
        });
    }
    e.exports = {
        emptyDirSync: c,
        emptydirSync: c,
        emptyDir: l,
        emptydir: l
    };
}
