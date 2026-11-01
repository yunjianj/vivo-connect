// analysis/pretty/main.js:74740; webpack module 814
function(e, t, n) {
    const r = n(8);
    let i = process.arch;
    "darwin" === process.platform && r.cpus()[1].model.includes("Apple M") && (i = "arm64"), 
    "win32" === process.platform && (i = "ia32");
    let o = "";
    try {
        o = n(815)(`./${process.platform}/${i}/node_sqlite3.node`);
    } catch (e) {
        console.log("require sqlite3 error:", e), process.platform, process.platform;
    }
    e.exports = o;
}
