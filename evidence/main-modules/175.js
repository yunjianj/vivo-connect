// analysis/pretty/main.js:23943; webpack module 175
function(e, t) {
    const n = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
    e.exports = "win32" !== n ? e => e : e => e && e.replace(/\\/g, "/");
}
