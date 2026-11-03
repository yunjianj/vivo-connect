// analysis/pretty/main.js:102527; webpack module 1376
function(e, t, n) {
    "use strict";
    const r = n(135), {checkPath: i} = n(1377), o = e => "number" == typeof e ? e : {
        mode: 511,
        ...e
    }.mode;
    e.exports.makeDir = async (e, t) => (i(e), r.mkdir(e, {
        mode: o(t),
        recursive: !0
    })), e.exports.makeDirSync = (e, t) => (i(e), r.mkdirSync(e, {
        mode: o(t),
        recursive: !0
    }));
}
