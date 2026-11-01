// analysis/pretty/main.js:129279; webpack module 1691
function(e, t, n) {
    const r = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform, {resolve: i, parse: o} = n(1);
    e.exports = e => {
        if (/\0/.test(e)) throw Object.assign(new TypeError("path must be a string without null bytes"), {
            path: e,
            code: "ERR_INVALID_ARG_VALUE"
        });
        if (e = i(e), "win32" === r) {
            const t = /[*|"<>?:]/, {root: n} = o(e);
            if (t.test(e.substr(n.length))) throw Object.assign(new Error("Illegal characters in path."), {
                path: e,
                code: "EINVAL"
            });
        }
        return e;
    };
}
