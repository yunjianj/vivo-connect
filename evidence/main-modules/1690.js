// analysis/pretty/main.js:129255; webpack module 1690
function(e, t, n) {
    const {promisify: r} = n(5), i = n(4);
    e.exports = e => {
        if (e) if ("object" == typeof e) e = {
            mode: 511,
            fs: i,
            ...e
        }; else if ("number" == typeof e) e = {
            mode: e,
            fs: i
        }; else {
            if ("string" != typeof e) throw new TypeError("invalid options argument");
            e = {
                mode: parseInt(e, 8),
                fs: i
            };
        } else e = {
            mode: 511,
            fs: i
        };
        return e.mkdir = e.mkdir || e.fs.mkdir || i.mkdir, e.mkdirAsync = r(e.mkdir), e.stat = e.stat || e.fs.stat || i.stat, 
        e.statAsync = r(e.stat), e.statSync = e.statSync || e.fs.statSync || i.statSync, 
        e.mkdirSync = e.mkdirSync || e.fs.mkdirSync || i.mkdirSync, e;
    };
}
