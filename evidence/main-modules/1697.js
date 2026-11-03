// analysis/pretty/main.js:129460; webpack module 1697
function(e, t, n) {
    const r = "win32" === (process.env.__FAKE_PLATFORM__ || process.platform), i = global.__FAKE_TESTING_FS__ || n(4), {O_CREAT: o, O_TRUNC: a, O_WRONLY: s, UV_FS_O_FILEMAP: l = 0} = i.constants, c = r && !!l, u = l | a | o | s;
    e.exports = c ? e => e < 524288 ? u : "w" : () => "w";
}
