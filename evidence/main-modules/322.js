// analysis/pretty/main.js:34430; webpack module 322
function(e, t) {
    e.exports = {
        stringify: function(e, {EOL: t = "\n", finalEOL: n = !0, replacer: r = null, spaces: i} = {}) {
            const o = n ? t : "";
            return JSON.stringify(e, r, i).replace(/\n/g, t) + o;
        },
        stripBom: function(e) {
            return Buffer.isBuffer(e) && (e = e.toString("utf8")), e.replace(/^\uFEFF/, "");
        }
    };
}
