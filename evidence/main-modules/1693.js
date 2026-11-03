// analysis/pretty/main.js:129317; webpack module 1693
function(e, t, n) {
    const {dirname: r} = n(1), i = (e, t, n) => n === t ? Promise.resolve() : e.statAsync(t).then(e => e.isDirectory() ? n : void 0, n => "ENOENT" === n.code ? i(e, r(t), t) : void 0), o = (e, t, n) => {
        if (n !== t) try {
            return e.statSync(t).isDirectory() ? n : void 0;
        } catch (n) {
            return "ENOENT" === n.code ? o(e, r(t), t) : void 0;
        }
    };
    e.exports = {
        findMade: i,
        findMadeSync: o
    };
}
