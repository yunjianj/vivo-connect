// analysis/pretty/main.js:129329; webpack module 1694
function(e, t, n) {
    const r = n(4), i = (process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version).replace(/^v/, "").split("."), o = +i[0] > 10 || 10 == +i[0] && +i[1] >= 12, a = o ? e => e.mkdir === r.mkdir : () => !1, s = o ? e => e.mkdirSync === r.mkdirSync : () => !1;
    e.exports = {
        useNative: a,
        useNativeSync: s
    };
}
