// analysis/pretty/main.js:129249; webpack module 1689
function(e, t, n) {
    const r = n(1690), i = n(1691), {mkdirpNative: o, mkdirpNativeSync: a} = n(1692), {mkdirpManual: s, mkdirpManualSync: l} = n(796), {useNative: c, useNativeSync: u} = n(1694), d = (e, t) => (e = i(e), 
    t = r(t), c(t) ? o(e, t) : s(e, t));
    d.sync = (e, t) => (e = i(e), t = r(t), u(t) ? a(e, t) : l(e, t)), d.native = (e, t) => o(i(e), r(t)), 
    d.manual = (e, t) => s(i(e), r(t)), d.nativeSync = (e, t) => a(i(e), r(t)), d.manualSync = (e, t) => l(i(e), r(t)), 
    e.exports = d;
}
